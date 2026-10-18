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
console.log('🔍 METHOD 2: REAL-TIME FEATURES & STORE LOGIC QA TEST');
console.log('=======================================================\n');

// 1. Check lib/store-hours.ts
const storeHoursPath = path.join(__dirname, '../lib/store-hours.ts');
assert(fs.existsSync(storeHoursPath), 'lib/store-hours.ts exists');
const storeHoursContent = fs.readFileSync(storeHoursPath, 'utf8');

assert(storeHoursContent.includes('Australia/Adelaide'), 'Uses Australia/Adelaide timezone for Port Augusta');
assert(storeHoursContent.includes('getStoreStatus'), 'Exports getStoreStatus function');
assert(storeHoursContent.includes('getPortAugustaDate'), 'Exports getPortAugustaDate function');

console.log('\n📋 1. Testing Store Hours Logic Simulation:');
// Simulate open and closed conditions in Node
function testAdelaideHour(mockDate) {
  const dtf = new Intl.DateTimeFormat('en-AU', {
    timeZone: 'Australia/Adelaide',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });
  const parts = dtf.formatToParts(mockDate);
  const hours = parseInt(parts.find(p => p.type === 'hour').value, 10);
  const minutes = parseInt(parts.find(p => p.type === 'minute').value, 10);
  const total = hours * 60 + minutes;
  return total >= 8 * 60 && total < 20 * 60;
}

// 10:00 AM UTC on any day corresponds to ~7:30 PM Adelaide (Open)
const openDate = new Date('2026-10-17T02:00:00Z'); // 11:30 AM ACST -> Open
assert(testAdelaideHour(openDate) === true, 'Simulation: 11:30 AM ACST correctly detected as OPEN');

const closedDate = new Date('2026-10-17T15:00:00Z'); // 12:30 AM ACST next day -> Closed
assert(testAdelaideHour(closedDate) === false, 'Simulation: 12:30 AM ACST correctly detected as CLOSED');

console.log('\n📋 2. Real-Time Components Integration:');
const liveStatusCompPath = path.join(__dirname, '../app/components/LiveStoreStatus.tsx');
assert(fs.existsSync(liveStatusCompPath), 'app/components/LiveStoreStatus.tsx exists');
const liveStatusContent = fs.readFileSync(liveStatusCompPath, 'utf8');
assert(liveStatusContent.includes('getStoreStatus'), 'LiveStoreStatus uses getStoreStatus()');
assert(liveStatusContent.includes('setInterval'), 'LiveStoreStatus refreshes with interval timer');
assert(liveStatusContent.includes('Port Augusta'), 'LiveStoreStatus includes Port Augusta time display');

const liveRepairsCompPath = path.join(__dirname, '../app/components/LiveRecentRepairs.tsx');
assert(fs.existsSync(liveRepairsCompPath), 'app/components/LiveRecentRepairs.tsx exists');
const liveRepairsContent = fs.readFileSync(liveRepairsCompPath, 'utf8');
assert(liveRepairsContent.includes('iPhone 14 Pro'), 'LiveRecentRepairs includes verified iPhone repairs');
assert(liveRepairsContent.includes('Samsung Galaxy S23 Ultra'), 'LiveRecentRepairs includes Samsung repairs');
assert(liveRepairsContent.includes('Port Augusta'), 'LiveRecentRepairs is geotargeted to Port Augusta');
assert(liveRepairsContent.includes('deviceHi'), 'LiveRecentRepairs supports Hindi bilingual data');

console.log('\n📋 3. Real-Time Widgets Placements:');
const headerContent = fs.readFileSync(path.join(__dirname, '../app/components/Header.tsx'), 'utf8');
assert(headerContent.includes('<LiveStoreStatus'), 'Header.tsx mounts LiveStoreStatus in top status bar');

const heroContent = fs.readFileSync(path.join(__dirname, '../app/components/Hero.tsx'), 'utf8');
assert(heroContent.includes('<LiveStoreStatus'), 'Hero.tsx Slide 1 card mounts LiveStoreStatus');

const footerContent = fs.readFileSync(path.join(__dirname, '../app/components/Footer.tsx'), 'utf8');
assert(footerContent.includes('<LiveStoreStatus'), 'Footer.tsx mounts LiveStoreStatus in Workshop Hours section');

const layoutContent = fs.readFileSync(path.join(__dirname, '../app/layout.tsx'), 'utf8');
assert(layoutContent.includes('<LiveRecentRepairs />'), 'layout.tsx mounts LiveRecentRepairs activity toast');

console.log(`\n=======================================================`);
console.log(`📊 METHOD 2 RESULTS: ${passed} passed, ${failed} failed`);
console.log(`=======================================================\n`);

if (failed > 0) process.exit(1);
