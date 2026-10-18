#!/usr/bin/env python3
"""
SEO health check for panditabhishekvyas.in.

Crawls the configured pages and verifies the essentials:
  - HTTP status per URL
  - <title> present + length <= 60
  - meta description present
  - canonical link present
  - og:title / og:image / twitter:card present
  - JSON-LD structured data present
  - robots.txt exists, allows crawling, references the sitemap
  - sitemap.xml exists and lists at least one URL

Run manually:            python3 seo_health_check.py
Run on a schedule:       cron / n8n / GitHub Actions / Vercel Cron -> alert on non-zero exit

Exit code is non-zero when any check fails, so schedulers can alert you.
Stdlib only — no pip installs needed.
"""

import json
import re
import sys
import urllib.request
import urllib.error

SITE = "https://www.panditabhishekvyas.in"
PAGES = ["/", "/poojas/mangal-dosh-puja", "/poojas/kaal-sarp-dosh-puja", "/poojas/rudrabhishek", "/poojas/mahamrityunjay-jaap"]
# NOTE: the /poojas/* pages above are the planned per-pooja pages. Until they
# exist they will report 404 — that is expected and visible as "planned".

UA = {"User-Agent": "Mozilla/5.0 (compatible; SEOHealthCheck/1.0)"}


def fetch(path: str, timeout: int = 20) -> tuple[int, str]:
    url = SITE + path
    req = urllib.request.Request(url, headers=UA)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return resp.status, resp.read().decode("utf-8", errors="ignore")
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8", errors="ignore")
    except Exception as e:  # noqa: BLE001
        return 0, str(e)


def check_page(path: str) -> dict:
    status, html = fetch(path)
    result = {
        "url": SITE + path,
        "status": status,
        "ok": True,
        "issues": [],
    }
    if status != 200:
        result["ok"] = False
        result["issues"].append(f"HTTP {status} (expected 200)")
        return result

    title = re.search(r"<title[^>]*>(.*?)</title>", html, re.S | re.I)
    if not title or not title.group(1).strip():
        result["ok"] = False
        result["issues"].append("missing <title>")
    elif len(title.group(1).strip()) > 60:
        result["ok"] = False
        result["issues"].append(f"title too long ({len(title.group(1).strip())} chars > 60)")

    if not re.search(r'<meta[^>]+name=["\']description["\']', html, re.I):
        result["ok"] = False
        result["issues"].append("missing meta description")

    if not re.search(r'<link[^>]+rel=["\']canonical["\']', html, re.I):
        result["ok"] = False
        result["issues"].append("missing canonical")

    for tag in ["og:title", "og:image"]:
        if not re.search(r'<meta[^>]+property=["\']' + re.escape(tag) + r'["\']', html, re.I):
            result["ok"] = False
            result["issues"].append(f"missing {tag}")

    if not re.search(r'<meta[^>]+name=["\']twitter:card["\']', html, re.I):
        result["ok"] = False
        result["issues"].append("missing twitter:card")

    if "application/ld+json" not in html:
        result["ok"] = False
        result["issues"].append("missing JSON-LD structured data")

    return result


def check_robots() -> dict:
    status, body = fetch("/robots.txt")
    result = {"url": SITE + "/robots.txt", "status": status, "ok": True, "issues": []}
    if status != 200:
        result["ok"] = False
        result["issues"].append(f"HTTP {status} (expected 200)")
        return result
    if not re.search(r"(?m)^User-agent:\s*\*", body, re.I):
        result["ok"] = False
        result["issues"].append("no User-agent: * rule")
    if not re.search(r"(?m)^Sitemap:", body, re.I):
        result["ok"] = False
        result["issues"].append("no Sitemap reference")
    return result


def check_sitemap() -> dict:
    status, body = fetch("/sitemap.xml")
    result = {"url": SITE + "/sitemap.xml", "status": status, "ok": True, "issues": []}
    if status != 200:
        result["ok"] = False
        result["issues"].append(f"HTTP {status} (expected 200)")
        return result
    locs = re.findall(r"<loc>(.*?)</loc>", body, re.S)
    if not locs:
        result["ok"] = False
        result["issues"].append("no <loc> entries")
    result["urls"] = locs
    return result


def main() -> int:
    print(f"SEO health check — {SITE}\n" + "=" * 46)
    failures = 0

    page_results = [check_page(p) for p in PAGES]
    robots = check_robots()
    sitemap = check_sitemap()

    for r in page_results:
        mark = "OK " if r["ok"] else "FAIL"
        print(f"[{mark}] {r['url']}")
        for issue in r["issues"]:
            print(f"        - {issue}")
        if not r["ok"]:
            failures += 1

    for r in (robots, sitemap):
        mark = "OK " if r["ok"] else "FAIL"
        print(f"[{mark}] {r['url']}")
        for issue in r["issues"]:
            print(f"        - {issue}")
        if r.get("urls"):
            print(f"        - {len(r['urls'])} URL(s): {', '.join(r['urls'][:6])}")
        if not r["ok"]:
            failures += 1

    # Machine-readable summary for n8n/scripts to parse.
    print("\nSUMMARY_JSON=" + json.dumps({
        "pages": page_results,
        "robots": robots,
        "sitemap": sitemap,
        "failures": failures,
    }))

    print(f"\n{'PASS — all checks green' if failures == 0 else f'FAIL — {failures} check(s) failing'}")
    return 0 if failures == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
