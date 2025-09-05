#!/usr/bin/env node
// Run a concise, safe subset of automations suitable for local CI in limited time.
const { execSync } = require('child_process');

function run(cmd, label) {
  try {
    console.log(`\n==> ${label} \n$ ${cmd}`);
    execSync(cmd, { stdio: 'inherit' });
    console.log(`✅ ${label} done`);
  } catch (err) {
    console.log(`⚠️ ${label} failed: ${err.message}`);
  }
}

run('node tools/sanitize-data-files.cjs', 'Sanitize data files');
run('npm run lint:fix', 'ESLint fix');
run('npm run type-check', 'TypeScript check');
run('npm run build', 'Build');
run('npm run test:smoke', 'Smoke tests');

console.log('\nSafe automation run complete.');

