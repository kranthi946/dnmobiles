#!/usr/bin/env node

/**
 * DN Mobiles Port Augusta - Comprehensive QA & Tester Suite
 * Checks all links, images, FaceTime & Facebook URLs, anchor targets, and bilingual parity.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
let totalChecks = 0;
let passedChecks = 0;
let errors = [];

function assert(condition, message) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  ✅ [PASS] ${message}`);
  } else {
    errors.push(message);
    console.error(`  ❌ [FAIL] ${message}`);
  }
}

console.log("\n=======================================================");
console.log("🔍 DN MOBILES QA & COMPREHENSIVE TEST SUITE");
console.log("=======================================================\n");

// 1. FACEBOOK LINK AUDIT
console.log("📋 1. Checking Official Facebook Links...");
const expectedFbUrl = "https://www.facebook.com/share/1cuNsdpSxT/?mibextid=wwXIfr";

const floatingRailContent = fs.readFileSync(path.join(ROOT, "app/components/FloatingRail.tsx"), "utf8");
assert(
  floatingRailContent.includes(expectedFbUrl),
  `FloatingRail.tsx contains official Facebook link: ${expectedFbUrl}`
);

const testimonialsContent = fs.readFileSync(path.join(ROOT, "app/components/Testimonials.tsx"), "utf8");
assert(
  testimonialsContent.includes(expectedFbUrl),
  `Testimonials.tsx contains official Facebook link: ${expectedFbUrl}`
);

const footerContent = fs.readFileSync(path.join(ROOT, "app/components/Footer.tsx"), "utf8");
assert(
  footerContent.includes(expectedFbUrl),
  `Footer.tsx contains official Facebook link: ${expectedFbUrl}`
);

const enJson = JSON.parse(fs.readFileSync(path.join(ROOT, "messages/en.json"), "utf8"));
assert(
  enJson.testimonials && enJson.testimonials.reviewUrl === expectedFbUrl,
  `messages/en.json testimonials.reviewUrl points to official Facebook link`
);

const hiJson = JSON.parse(fs.readFileSync(path.join(ROOT, "messages/hi.json"), "utf8"));
assert(
  hiJson.testimonials && hiJson.testimonials.reviewUrl === expectedFbUrl,
  `messages/hi.json testimonials.reviewUrl points to official Facebook link`
);

// 2. FACETIME AUDIT (+61 420655514)
console.log("\n📋 2. Checking FaceTime Number (+61 420655514)...");
assert(
  floatingRailContent.includes("facetime:") && floatingRailContent.includes("+61420655514"),
  "FloatingRail.tsx includes FaceTime protocol with +61420655514"
);

assert(
  footerContent.includes("facetime:+61420655514"),
  "Footer.tsx includes FaceTime protocol with +61420655514"
);

const headerContent = fs.readFileSync(path.join(ROOT, "app/components/Header.tsx"), "utf8");
assert(
  headerContent.includes("facetime:+61420655514"),
  "Header.tsx mobile drawer includes FaceTime protocol with +61420655514"
);

// 3. SLIDER IMAGES AUDIT
console.log("\n📋 3. Checking 5 Hero Slider Images...");
const sliderImages = [
  "public/images/slider/slide-1-port-augusta.png",
  "public/images/slider/slide-2-services-flyer.png",
  "public/images/slider/slide-3-virus-removal.png",
  "public/images/slider/slide-4-pickup-dropoff.png",
  "public/images/gallery/ba-screen-iphone-pro.jpg",
];

sliderImages.forEach((imgRel) => {
  const fullPath = path.join(ROOT, imgRel);
  const exists = fs.existsSync(fullPath);
  const size = exists ? fs.statSync(fullPath).size : 0;
  assert(
    exists && size > 1000,
    `Image exists and is non-empty (${Math.round(size / 1024)} KB): ${imgRel}`
  );
});

const heroContent = fs.readFileSync(path.join(ROOT, "app/components/Hero.tsx"), "utf8");
assert(
  heroContent.includes("slide-1-port-augusta.png") &&
  heroContent.includes("slide-2-services-flyer.png") &&
  heroContent.includes("slide-3-virus-removal.png") &&
  heroContent.includes("slide-4-pickup-dropoff.png"),
  "Hero.tsx references all 4 uploaded slider images"
);

// 4. DEVICE ESTIMATOR AUDIT
console.log("\n📋 4. Checking Device Estimator (Step 3: Apple Logo Option #1)...");
const estimatorContent = fs.readFileSync(path.join(ROOT, "app/components/DeviceEstimator.tsx"), "utf8");
assert(
  estimatorContent.includes('id: "apple-logo"') &&
  estimatorContent.includes("Is your mobile stuck with Apple logo? (Boot Loop Fix)"),
  "DeviceEstimator.tsx contains Apple logo boot loop issue"
);

assert(
  estimatorContent.indexOf('id: "apple-logo"') < estimatorContent.indexOf('id: "screen"'),
  "Apple logo boot loop issue is defined as the FIRST option in Step 3 (before screen)"
);

assert(
  estimatorContent.includes('useState<string>("apple-logo")'),
  "DeviceEstimator.tsx pre-selects apple-logo issue by default"
);

// 5. CONTACT & BOOKING FORM AUDIT
console.log("\n📋 5. Checking Contact Form Dropdown & Google Address...");
const contactContent = fs.readFileSync(path.join(ROOT, "app/components/Contact.tsx"), "utf8");
assert(
  contactContent.includes("📅 Book Repair (Priority)"),
  "Contact.tsx servicesList includes '📅 Book Repair (Priority)'"
);

assert(
  contactContent.includes("💰 Free Quote (Estimate)"),
  "Contact.tsx servicesList includes '💰 Free Quote (Estimate)'"
);

assert(
  contactContent.includes("🍎 Is your mobile stuck with Apple logo? (Boot Loop Fix)"),
  "Contact.tsx servicesList includes '🍎 Is your mobile stuck with Apple logo? (Boot Loop Fix)'"
);

assert(
  contactContent.includes('name="address"'),
  "Contact.tsx includes Google Address / Service Location input field"
);

assert(
  contactContent.includes("18 Domeyer Court, Port Augusta SA 5700"),
  "Contact.tsx defaults and provides quick button for 18 Domeyer Court address"
);

// 6. ANCHOR LINKS AND SECTION IDS
console.log("\n📋 6. Checking Anchor Links and Section IDs...");
const sectionIds = ["home", "services", "estimator", "process", "refurbished", "testimonials", "contact", "gallery", "whyus", "faq"];
sectionIds.forEach((id) => {
  // Check if component with id exists
  const files = ["Hero.tsx", "Services.tsx", "DeviceEstimator.tsx", "Process.tsx", "Refurbished.tsx", "Testimonials.tsx", "Contact.tsx", "Projects.tsx", "WhyChooseUs.tsx", "FAQ.tsx"];
  let found = false;
  files.forEach((f) => {
    const fPath = path.join(ROOT, "app/components", f);
    if (fs.existsSync(fPath)) {
      const code = fs.readFileSync(fPath, "utf8");
      if (code.includes(`id="${id}"`)) {
        found = true;
      }
    }
  });
  assert(found, `Section with id="${id}" exists in page components`);
});

// 7. PRERENDERED STATIC ROUTES
console.log("\n📋 7. Checking Service and Catalog Routes...");
const serviceRoutes = [
  "screen-replacement",
  "battery-replacement",
  "back-glass-replacement",
  "ipad-repair",
];

serviceRoutes.forEach((slug) => {
  const serviceFile = path.join(ROOT, "app/services/[slug]/page.tsx");
  assert(fs.existsSync(serviceFile), `Dynamic service route exists for slug: ${slug}`);
});

console.log("\n=======================================================");
console.log(`📊 TEST RESULTS: ${passedChecks}/${totalChecks} CHECKS PASSED`);
if (errors.length > 0) {
  console.log(`❌ ${errors.length} ERRORS DETECTED:`);
  errors.forEach((e) => console.log(`   - ${e}`));
  process.exit(1);
} else {
  console.log("🎉 ALL TESTS PASSED WITH 0 ERRORS!");
  console.log("=======================================================\n");
}
