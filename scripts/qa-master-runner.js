const { execSync } = require('child_process');
const path = require('path');

const suites = [
  { name: 'METHOD 1: SEO, Schema & Rich Snippets', script: 'scripts/qa-seo-tester.js' },
  { name: 'METHOD 2: Real-Time Features & Store Logic', script: 'scripts/qa-realtime-tester.js' },
  { name: 'METHOD 3: Routes, Navigation & Protocols', script: 'scripts/qa-routes-tester.js' },
  { name: 'METHOD 4: Accessibility, Images & Usability', script: 'scripts/qa-a11y-tester.js' },
  { name: 'CORE QA SUITE: Business Requirements & Parity', script: 'scripts/qa-tester.js' },
];

console.log('\n================================================================');
console.log('🌟 DN MOBILES — COMPREHENSIVE MULTI-METHOD QA VERIFICATION');
console.log('================================================================');

let allPassed = true;
const summary = [];

suites.forEach((suite, idx) => {
  console.log(`\n▶ [${idx + 1}/${suites.length}] RUNNING: ${suite.name}...`);
  try {
    const output = execSync(`node ${suite.script}`, {
      cwd: path.join(__dirname, '..'),
      encoding: 'utf8',
    });
    console.log(output);
    summary.push({ name: suite.name, status: 'PASSED' });
  } catch (err) {
    console.error(`❌ FAILED: ${suite.name}`);
    if (err.stdout) console.log(err.stdout);
    if (err.stderr) console.error(err.stderr);
    summary.push({ name: suite.name, status: 'FAILED' });
    allPassed = false;
  }
});

console.log('\n================================================================');
console.log('🏆 FINAL QA SUMMARY & CERTIFICATION');
console.log('================================================================');

summary.forEach((s) => {
  const icon = s.status === 'PASSED' ? '✅' : '❌';
  console.log(`  ${icon} [${s.status}] ${s.name}`);
});

console.log('================================================================');
if (allPassed) {
  console.log('🎉 ALL QA TEST METHODS PASSED WITH 100% SUCCESS!');
  console.log('🚀 WEBSITE IS PRODUCTION-READY, FULLY SEO-INTEGRATED & REAL-TIME!');
  console.log('================================================================\n');
  process.exit(0);
} else {
  console.error('⚠️ SOME QA TEST SUITES FAILED. PLEASE REVIEW LOGS.');
  console.log('================================================================\n');
  process.exit(1);
}
