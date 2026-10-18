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
console.log('🔍 METHOD 4: ACCESSIBILITY, IMAGES & USABILITY QA TEST');
console.log('=======================================================\n');

console.log('📋 1. Image Files Existence & Non-Empty Check:');
const imagesToCheck = [
  'public/images/slider/slide-1-port-augusta.png',
  'public/images/slider/slide-2-services-flyer.png',
  'public/images/slider/slide-3-virus-removal.png',
  'public/images/slider/slide-4-pickup-dropoff.png',
  'public/images/gallery/ba-screen-iphone-pro.jpg',
  'public/og-image.jpg',
  'public/favicon.ico',
];

imagesToCheck.forEach(relPath => {
  const fullPath = path.join(__dirname, '..', relPath);
  const exists = fs.existsSync(fullPath);
  const stat = exists ? fs.statSync(fullPath) : null;
  assert(exists && stat.size > 0, `${relPath} exists (${stat ? Math.round(stat.size / 1024) + ' KB' : 'missing'})`);
});

console.log('\n📋 2. Alt Attributes & Image Descriptions:');
const heroContent = fs.readFileSync(path.join(__dirname, '../app/components/Hero.tsx'), 'utf8');
assert(heroContent.includes('alt={slide.titleA}'), 'Hero background Image has dynamic descriptive alt');
assert(heroContent.includes('alt={slide.sideImgAlt}'), 'Hero showcase Image has detailed alt description');

console.log('\n📋 3. Accessible ARIA Controls:');
const langSwitcherContent = fs.readFileSync(path.join(__dirname, '../app/components/LanguageSwitcher.tsx'), 'utf8');
assert(langSwitcherContent.includes('aria-label="Switch to English"'), 'LanguageSwitcher has English aria-label');
assert(langSwitcherContent.includes('aria-label="Switch to Hindi"'), 'LanguageSwitcher has Hindi aria-label');

const themeToggleContent = fs.readFileSync(path.join(__dirname, '../app/components/ThemeToggle.tsx'), 'utf8');
assert(themeToggleContent.includes('aria-label='), 'ThemeToggle has dynamic accessible aria-label');
assert(themeToggleContent.includes('title='), 'ThemeToggle has tooltip title attribute');

const floatingRailContent = fs.readFileSync(path.join(__dirname, '../app/components/FloatingRail.tsx'), 'utf8');
assert(floatingRailContent.includes('aria-label={c.title}'), 'FloatingRail has dynamic aria-label on all contact channel links');
assert(floatingRailContent.includes('Direct Call (0420 655 514)'), 'FloatingRail contains phone title');
assert(floatingRailContent.includes('FaceTime Video & Audio Call'), 'FloatingRail contains FaceTime title');
assert(floatingRailContent.includes('WhatsApp Quick Chat'), 'FloatingRail contains WhatsApp title');
assert(floatingRailContent.includes('Facebook Messenger & Page'), 'FloatingRail contains Facebook title');

console.log('\n📋 4. Form Labels & Inputs Usability:');
const contactContent = fs.readFileSync(path.join(__dirname, '../app/components/Contact.tsx'), 'utf8');
assert(contactContent.includes('name="name"'), 'Contact form contains full name field');
assert(contactContent.includes('name="phone"'), 'Contact form contains phone number field');
assert(contactContent.includes('name="device"'), 'Contact form contains device model field');
assert(contactContent.includes('name="service"'), 'Contact form contains service selection');
assert(contactContent.includes('name="address"'), 'Contact form contains Google address field');
assert(contactContent.includes('type="submit"'), 'Contact form has accessible submit action button');

console.log(`\n=======================================================`);
console.log(`📊 METHOD 4 RESULTS: ${passed} passed, ${failed} failed`);
console.log(`=======================================================\n`);

if (failed > 0) process.exit(1);
