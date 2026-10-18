#!/usr/bin/env node

const { spawn, execFileSync } = require("child_process");

const LOCAL_URL = "http://localhost:3000";

console.log("🚀 Starting Cloudflare Quick Tunnel...\n");

let previewShown = false;
let outputBuffer = "";

const cloudflared = spawn(
    "cloudflared",
    ["tunnel", "--url", LOCAL_URL],
    {
      stdio: ["ignore", "pipe", "pipe"],
    }
);

cloudflared.on("error", () => {
  console.error("❌ cloudflared is not installed.");
  console.error("Install using:");
  console.error("brew install cloudflared");
  process.exit(1);
});

function handleOutput(chunk) {
  const text = chunk.toString();

  process.stdout.write(text);

  if (previewShown) return;

  outputBuffer += text;

  const match = outputBuffer.match(
      /https:\/\/[a-zA-Z0-9-]+\.trycloudflare\.com/
  );

  if (!match) return;

  previewShown = true;

  const url = match[0];

  console.log("\n========================================");
  console.log("✅ Preview Ready");
  console.log("========================================");
  console.log(url);
  console.log("========================================\n");

  try {
    execFileSync("pbcopy", {
      input: url,
    });
    console.log("📋 URL copied to clipboard");
  } catch {
    console.log("⚠️ Unable to copy URL");
  }

  try {
    execFileSync("open", [url]);
    console.log("🌐 Browser opened");
  } catch {
    console.log("⚠️ Unable to open browser");
  }

  console.log("\nPress Ctrl+C to stop preview.\n");
}

cloudflared.stdout.on("data", handleOutput);
cloudflared.stderr.on("data", handleOutput);

function shutdown() {
  console.log("\n🛑 Stopping preview...");

  if (!cloudflared.killed) {
    cloudflared.kill("SIGTERM");
  }

  process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

cloudflared.on("close", (code) => {
  console.log(`\nCloudflared exited with code ${code}`);
});