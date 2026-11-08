'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const source = fs.readFileSync(path.join(__dirname, '../../.github/workflows/type-coverage.yml'), 'utf8');
const asyncFunctionConstructor = Object.getPrototypeOf(async function () {}).constructor;
function block(name) {
  const marker = '    - name: ' + name + '\n';
  assert.ok(source.includes(marker), name);
  return source.split(marker)[1].split('    - name: ')[0].split('    timeout-minutes:')[0];
}
function handler(name) {
  const body = block(name);
  assert.ok(body.includes('        script: |\n'));
  return body.split('        script: |\n')[1].split('\n').filter(line => line.startsWith('          ')).map(line => line.slice(10)).join('\n');
}
function run(name, type, lint, existing = []) {
  const calls = [];
  const github = { rest: { issues: {
    createComment: payload => calls.push(payload),
    create: payload => calls.push(payload),
    listForRepo: () => ({ data: existing }),
  } } };
  const context = { repo: { owner: 'fixture', repo: 'repo' }, issue: { number: 1 }, runId: 42 };
  return new asyncFunctionConstructor('github', 'context', 'process', handler(name))(github, context, { env: { TYPE_OUTCOME: type, LINT_OUTCOME: lint } }).then(() => calls);
}
for (const name of ['Comment on PR if failed', 'Open issue on main branch regression']) {
  for (const [type, lint, stage] of [['failure', 'skipped', 'TypeScript check'], ['success', 'failure', 'ESLint check'], ['skipped', 'skipped', 'Workflow preparation or another step'], ['', '', 'Workflow preparation or another step']]) {
    test(name + ' reports ' + stage + ' without inventing diagnostics', () => {
      return run(name, type, lint).then(calls => {
      assert.equal(calls.length, 1);
      assert.ok(calls[0].body.startsWith(stage + ' failed.'));
      assert.match(calls[0].body, /does not establish type errors/);
      assert.match(calls[0].body, /runtime or resource failures/);
      assert.match(calls[0].body, /https:\/\/github.com\/fixture\/repo\/actions\/runs\/42/);
      assert.doesNotMatch(calls[0].body, /found type errors|type errors detected|undefined/);
      });
    });
  }
}
for (const title of ['🚨 TypeScript Check Regression on Main', '🚨 Type Coverage Workflow Failure on Main']) {
  test('existing main issue is not duplicated: ' + title, () => {
    return run('Open issue on main branch regression', 'failure', 'skipped', [{ title }]).then(calls => assert.deepEqual(calls, []));
  });
}
test('new issue title does not assert TypeScript failure', () => {
  return run('Open issue on main branch regression', 'success', 'failure').then(([issue]) => {
    assert.equal(issue.title, '🚨 Type Coverage Workflow Failure on Main');
  });
});
test('gates and failure conditions stay enabled', () => {
  assert.match(block('Run TypeScript Check'), /run: npm run type-check/);
  assert.match(block('Run ESLint Check'), /run: npm run lint:check/);
  for (const name of ['Run TypeScript Check', 'Run ESLint Check', 'Verify type workflow reporting']) {assert.doesNotMatch(block(name), /continue-on-error|\|\| true/);}
  assert.match(block('Comment on PR if failed'), /pull_request.*failure\(\)/);
  assert.match(block('Open issue on main branch regression'), /push.*failure\(\).*refs\/heads\/main/);
  assert.match(block('Notify Telegram on failure'), /if: failure\(\)/);
  assert.doesNotMatch(block('Notify Telegram on failure'), /type errors detected/);
  assert.match(source, /timeout-minutes: 10/);
});
