const fs = require('fs');
const path = require('path');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ [PASS] ${message}`);
    passed++;
  } else {
    console.error(`  ❌ [FAIL] ${message}`);
    failed++;
  }
}

console.log('\n=======================================================');
console.log('🔍 METHOD 1: SEO, SCHEMA & RICH SNIPPETS QA TEST');
console.log('=======================================================\n');

// 1. Check layout.tsx for Schema & Meta tags
const layoutPath = path.join(__dirname, '../app/layout.tsx');
assert(fs.existsSync(layoutPath), 'app/layout.tsx exists');
const layoutContent = fs.readFileSync(layoutPath, 'utf8');

console.log('\n📋 1. Schema.org JSON-LD Validation:');
assert(layoutContent.includes('application/ld+json'), 'JSON-LD script tag is present');
assert(layoutContent.includes('"@type": "MobilePhoneRepairService"'), 'MobilePhoneRepairService schema is defined');
assert(layoutContent.includes('"@type": "PostalAddress"'), 'PostalAddress schema is defined');
assert(layoutContent.includes('streetAddress: "18 Domeyer Court"') || layoutContent.includes('"streetAddress": "18 Domeyer Court"'), 'Street address is 18 Domeyer Court');
assert(layoutContent.includes('addressLocality: "Port Augusta"') || layoutContent.includes('"addressLocality": "Port Augusta"'), 'Locality is Port Augusta');
assert(layoutContent.includes('postalCode: "5700"') || layoutContent.includes('"postalCode": "5700"'), 'Postal code is 5700');
assert(layoutContent.includes('telephone: "+61420655514"') || layoutContent.includes('"telephone": "+61420655514"'), 'Phone number is +61420655514');
assert(layoutContent.includes('"@type": "GeoCoordinates"'), 'GeoCoordinates schema is present');
assert(layoutContent.includes('-32.493'), 'Latitude coordinates included');
assert(layoutContent.includes('137.7628'), 'Longitude coordinates included');
assert(layoutContent.includes('"@type": "AggregateRating"'), 'AggregateRating schema is present');
assert(layoutContent.includes('ratingValue: "5.0"') || layoutContent.includes('"ratingValue": "5.0"'), 'Rating value is 5.0');
assert(layoutContent.includes('"@type": "BreadcrumbList"'), 'BreadcrumbList schema is present on layout');
assert(layoutContent.includes('"@type": "FAQPage"'), 'FAQPage schema is present on layout');
assert(layoutContent.includes('"@type": "OfferCatalog"'), 'OfferCatalog schema is present');
assert(layoutContent.includes('https://www.facebook.com/share/1cuNsdpSxT/?mibextid=wwXIfr'), 'Official Facebook included in sameAs');
assert(layoutContent.includes('https://wa.me/61420655514'), 'WhatsApp included in sameAs');

console.log('\n📋 2. Local SEO & Meta Tags Validation:');
assert(layoutContent.includes('"geo.region": "AU-SA"'), 'geo.region meta tag is AU-SA');
assert(layoutContent.includes('"geo.placename": "Port Augusta'), 'geo.placename meta tag specifies Port Augusta');
assert(layoutContent.includes('ICBM'), 'ICBM coordinates tag is present');
assert(layoutContent.includes('canonical: "/"'), 'Canonical URL is configured');
assert(layoutContent.includes('"en-AU": "/"'), 'en-AU alternate language configured');
assert(layoutContent.includes('"hi": "/?lang=hi"'), 'hi alternate language configured');
assert(layoutContent.includes('siteName: "DN Mobiles"'), 'OpenGraph siteName is DN Mobiles');
assert(layoutContent.includes('locale: "en_AU"'), 'OpenGraph locale is en_AU');
assert(layoutContent.includes('alternateLocale: ["hi_IN"]'), 'OpenGraph alternateLocale includes hi_IN');
assert(layoutContent.includes('card: "summary_large_image"'), 'Twitter card set to summary_large_image');

console.log('\n📋 3. Sitemap, Robots & PWA Manifest:');
const manifestPath = path.join(__dirname, '../app/manifest.ts');
assert(fs.existsSync(manifestPath), 'app/manifest.ts exists');
const manifestContent = fs.readFileSync(manifestPath, 'utf8');
assert(manifestContent.includes('name: "DN Mobiles | Phone Repairs Port Augusta"'), 'Manifest name is properly set');
assert(manifestContent.includes('theme_color: "#DD052B"'), 'Manifest theme_color is #DD052B');

const robotsPath = path.join(__dirname, '../app/robots.ts');
assert(fs.existsSync(robotsPath), 'app/robots.ts exists');
const robotsContent = fs.readFileSync(robotsPath, 'utf8');
assert(robotsContent.includes('sitemap.xml'), 'robots.ts points to sitemap.xml');

const sitemapPath = path.join(__dirname, '../app/sitemap.ts');
assert(fs.existsSync(sitemapPath), 'app/sitemap.ts exists');

console.log('\n📋 4. Headings & Service Schemas:');
const heroPath = path.join(__dirname, '../app/components/Hero.tsx');
const heroContent = fs.readFileSync(heroPath, 'utf8');
assert(heroContent.includes('i === 0 ? (') && heroContent.includes('<h1') && heroContent.includes('<h2'), 'Hero renders exactly one H1 for slide 0 and H2 for subsequent slides');

const serviceSlugPath = path.join(__dirname, '../app/services/[slug]/page.tsx');
const serviceSlugContent = fs.readFileSync(serviceSlugPath, 'utf8');
assert(serviceSlugContent.includes('"@type": "BreadcrumbList"'), 'Service slug page includes BreadcrumbList schema');

console.log(`\n=======================================================`);
console.log(`📊 METHOD 1 RESULTS: ${passed} passed, ${failed} failed`);
console.log(`=======================================================\n`);

if (failed > 0) process.exit(1);
