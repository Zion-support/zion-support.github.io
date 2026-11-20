'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { inspect, main } = require('../../scripts/checks/autonomous-eslint-preflight.cjs');

function fixture(t, config, version = '^10.3.0') {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'eslint-preflight-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({ devDependencies: { eslint: version } }));
  fs.writeFileSync(path.join(root, '.eslintrc-autonomous.cjs'), config);
  return root;
}
function moduleFixture(root, name, file, contents) {
  const target = path.join(root, 'node_modules', name, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, contents);
}

test('reports the real configuration blocker classes without installed dependencies', t => {
  const root = fixture(t, "module.exports = {root:true, extends:['next/core-web-vitals','plugin:@typescript-eslint/recommended'],plugins:['@typescript-eslint','unused-imports'],rules:{'no-inner-html':'error','require-async-try-catch':'error'}};");
  const report = inspect(root);
  assert.equal(report.lintExecuted, false);
  assert.ok(report.errors.some(e => e.code === 'LEGACY_CONFIG_UNSUPPORTED'));
  assert.ok(report.errors.some(e => e.code === 'ESLINT_NOT_INSTALLED'));
  assert.deepEqual(report.errors.filter(e => e.code === 'MODULE_UNRESOLVED').map(e => e.detail).sort(), ['@typescript-eslint/eslint-plugin','eslint-config-next/core-web-vitals','eslint-plugin-unused-imports'].sort());
  assert.equal(report.errors.filter(e => e.code === 'LOCAL_RULE_DIRECTORY_MISSING').length, 1);
});

test('resolves installed modules without executing plugin code', t => {
  const root = fixture(t, "module.exports={plugins:['unused-imports']};", '^9.0.0');
  moduleFixture(root, 'eslint', 'package.json', '{"version":"9.0.0"}');
  moduleFixture(root, 'eslint-plugin-unused-imports', 'index.js', 'throw new Error("plugin must not execute");');
  const report = inspect(root);
  assert.deepEqual(report.errors, []);
  assert.deepEqual(report.resolvedModules, ['eslint-plugin-unused-imports']);
});

test('installed ESLint version takes precedence over the declared range', t => {
  const root = fixture(t, 'module.exports={root:true};', '^9.0.0');
  moduleFixture(root, 'eslint', 'package.json', '{"version":"10.7.0"}');
  assert.ok(inspect(root).errors.some(e => e.code === 'LEGACY_CONFIG_UNSUPPORTED'));
});

test('disabled local rules do not require their source directory', t => {
  const root = fixture(t, "module.exports={rules:{'no-inner-html':'off','require-async-try-catch':[0]}};");
  assert.ok(!inspect(root).errors.some(e => e.code === 'LOCAL_RULE_DIRECTORY_MISSING'));
});

test('malformed configuration is a diagnostic, not an uncaught exception', t => {
  const root = fixture(t, 'module.exports={ broken syntax');
  assert.ok(inspect(root).errors.some(e => e.code === 'CONFIG_LOAD_FAILED'));
});

test('CLI exits nonzero for blockers and leaves the input bytes unchanged', t => {
  const root = fixture(t, 'module.exports={root:true};');
  const configPath = path.join(root, '.eslintrc-autonomous.cjs');
  const before = fs.readFileSync(configPath);
  let stdout = '';
  let stderr = '';
  const status = main([root], text => { stdout += text; }, text => { stderr += text; });
  assert.equal(status, 1);
  assert.equal(stderr, '');
  assert.ok(JSON.parse(stdout).errors.length > 0);
  assert.deepEqual(fs.readFileSync(configPath), before);
});
