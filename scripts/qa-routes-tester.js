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
console.log('🔍 METHOD 3: ROUTES, NAVIGATION & PROTOCOLS QA TEST');
console.log('=======================================================\n');

console.log('📋 1. Service Route Definitions & Slugs:');
const enMessages = JSON.parse(fs.readFileSync(path.join(__dirname, '../messages/en.json'), 'utf8'));
const allServices = enMessages.services?.items || [];
assert(allServices.length >= 4, `Found ${allServices.length} registered repair services`);

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

allServices.forEach(s => {
  const slug = slugify(s.name);
  assert(slug && slug.length > 0, `Service "${s.name}" generates valid slug: ${slug}`);
});

console.log('\n📋 2. Catalog Route Definitions:');
const catalogTs = fs.readFileSync(path.join(__dirname, '../lib/catalog.ts'), 'utf8');
assert(catalogTs.includes('slug: "devices"'), 'Catalog includes "devices" page');
assert(catalogTs.includes('slug: "brands"'), 'Catalog includes "brands" page');
assert(catalogTs.includes('slug: "categories"'), 'Catalog includes "categories" page');
assert(catalogTs.includes('slug: "sell-device"'), 'Catalog includes "sell-device" page');
assert(catalogTs.includes('slug: "refurbished"'), 'Catalog includes "refurbished" page');

console.log('\n📋 3. In-Page Section Anchor Verification:');
const pageFile = fs.readFileSync(path.join(__dirname, '../app/page.tsx'), 'utf8');
const anchorSections = [
  'Hero',
  'StatsBar',
  'DeviceEstimator',
  'Services',
  'Process',
  'Refurbished',
  'WhyChooseUs',
  'Projects',
  'Testimonials',
  'FAQ',
  'Contact',
];

anchorSections.forEach(comp => {
  assert(pageFile.includes(`<${comp}`), `Homepage includes component: <${comp} />`);
});

console.log('\n📋 4. Communication Protocols & Official Links:');
const floatingRailContent = fs.readFileSync(path.join(__dirname, '../app/components/FloatingRail.tsx'), 'utf8');
const footerContent = fs.readFileSync(path.join(__dirname, '../app/components/Footer.tsx'), 'utf8');
const contactContent = fs.readFileSync(path.join(__dirname, '../app/components/Contact.tsx'), 'utf8');

assert(floatingRailContent.includes('facetime:') && (floatingRailContent.includes('+61420655514') || floatingRailContent.includes('PHONE_NUMBER')), 'FloatingRail has valid FaceTime link');
assert(footerContent.includes('facetime:+61420655514'), 'Footer has valid FaceTime link');

assert(floatingRailContent.includes('https://www.facebook.com/share/1cuNsdpSxT/?mibextid=wwXIfr'), 'FloatingRail has official Facebook link');
assert(footerContent.includes('https://www.facebook.com/share/1cuNsdpSxT/?mibextid=wwXIfr'), 'Footer has official Facebook link');

assert(floatingRailContent.includes('https://wa.me/61420655514'), 'FloatingRail has valid WhatsApp link');
assert(contactContent.includes('https://wa.me/61420655514'), 'Contact form targets valid WhatsApp API endpoint');

console.log(`\n=======================================================`);
console.log(`📊 METHOD 3 RESULTS: ${passed} passed, ${failed} failed`);
console.log(`=======================================================\n`);

if (failed > 0) process.exit(1);
