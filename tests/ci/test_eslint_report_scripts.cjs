'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = process.env.ZION_WORKFLOW_FIXTURE_ROOT || path.resolve(__dirname, '../..');
const workflow = fs.readFileSync(path.join(root, '.github/workflows/custom-eslint.yml'), 'utf8');
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

function extractScript(name) {
  const lines = workflow.split('\n');
  const start = lines.findIndex((line) => line.trim() === `- name: ${name}`);
  assert.notEqual(start, -1, `Missing step: ${name}`);
  const stepIndent = lines[start].length - lines[start].trimStart().length;
  let end = lines.findIndex((line, index) => index > start && line.trim()
    && line.length - line.trimStart().length <= stepIndent);
  if (end === -1) end = lines.length;
  const relative = lines.slice(start, end).findIndex((line) => line.trim() === 'script: |');
  assert.notEqual(relative, -1, `Expected literal JavaScript block: ${name}`);
  const scriptStart = start + relative;
  const indent = lines[scriptStart].length - lines[scriptStart].trimStart().length + 2;
  return lines.slice(scriptStart + 1, end).map((line) => line.slice(indent)).join('\n');
}

const prScript = extractScript('Parse and comment on PR');
const mainScript = extractScript('Open GitHub issue on main branch violations');

async function runScript(script, { report, raw, missing = false, existing = [], rejectComment = false } = {}) {
  const calls = [];
  const github = { rest: { issues: {
    createComment: async (input) => {
      if (rejectComment) throw new Error('fixture API failure');
      calls.push({ kind: 'comment', ...input });
    },
    listForRepo: async (input) => {
      calls.push({ kind: 'list', ...input });
      return { data: existing };
    },
    create: async (input) => { calls.push({ kind: 'issue', ...input }); },
  } } };
  const context = {
    repo: { owner: 'fixture-owner', repo: 'fixture-repo' },
    issue: { number: 123 },
    payload: { committer: { name: 'Fixture' }, headCommit: { id: 'abcdef0123456789' } },
  };
  const mockRequire = (name) => {
    assert.equal(name, 'fs');
    return { readFileSync: (file, encoding) => {
      assert.equal(file, '/tmp/eslint-report.json');
      assert.equal(encoding, 'utf8');
      if (missing) throw new Error('fixture missing report');
      return raw === undefined ? JSON.stringify(report) : raw;
    } };
  };
  const execute = new AsyncFunction('github', 'context', 'require', 'process', script);
  await execute(github, context, mockRequire, { env: { GITHUB_WORKSPACE: '/workspace' } });
  return calls;
}

function fileReport(count, filePath = '/workspace/app/page.tsx') {
  return [{ filePath, messages: Array.from({ length: count }, (_, i) => ({
    severity: 2, line: i + 1, column: 2, message: `Error ${i + 1}`, ruleId: 'fixture/rule',
  })) }];
}

test('both exact workflow scripts compile as github-script JavaScript', () => {
  assert.doesNotThrow(() => new AsyncFunction('github', 'context', 'require', 'process', prScript));
  assert.doesNotThrow(() => new AsyncFunction('github', 'context', 'require', 'process', mainScript));
});

test('PR report flattens per-file messages, counts errors and retains locations', async () => {
  const report = fileReport(2);
  report[0].messages.push({ severity: 1, line: 9, column: 1, message: 'Warning only', ruleId: 'warning' });
  report.push({ filePath: '/workspace/components/widget.tsx', messages: [
    { severity: 2, line: 7, column: 4, message: 'Widget error', ruleId: 'fixture/widget' },
  ] });
  const [comment] = await runScript(prScript, { report });
  assert.equal(comment.kind, 'comment');
  assert.equal(comment.issue_number, 123);
  assert.match(comment.body, /Found 3 error\(s\)/);
  assert.match(comment.body, /app\/page\.tsx:1:2/);
  assert.match(comment.body, /components\/widget\.tsx:7:4/);
  assert.match(comment.body, /Widget error \(fixture\/widget\)/);
  assert.doesNotMatch(comment.body, /Warning only/);
});

test('PR report retains 25-item cap and warnings-only message', async () => {
  const [capped] = await runScript(prScript, { report: fileReport(26) });
  assert.equal((capped.body.match(/^- \*\*/gm) || []).length, 25);
  assert.match(capped.body, /and 1 more/);
  const report = [{ filePath: '/workspace/a.ts', messages: [{ severity: 1, message: 'Warning' }] }];
  const [warning] = await runScript(prScript, { report });
  assert.match(warning.body, /No error-level violations found, but warnings exist/);
});

test('missing, invalid and malformed reports retain explicit failure explanation', async () => {
  for (const fixture of [{ missing: true }, { raw: '{invalid' }, { report: [{ filePath: 'x' }] }]) {
    const [comment] = await runScript(prScript, fixture);
    assert.match(comment.body, /Could not parse ESLint report/);
    const calls = await runScript(mainScript, fixture);
    assert.match(calls.find((call) => call.kind === 'issue').body, /Could not parse full report/);
  }
});

test('main report retains count, 30-item cap, labels and duplicate suppression', async () => {
  const calls = await runScript(mainScript, { report: fileReport(31) });
  const issue = calls.find((call) => call.kind === 'issue');
  assert.match(issue.body, /Total errors:\*\* 31/);
  assert.equal((issue.body.match(/^- app\//gm) || []).length, 30);
  assert.match(issue.body, /plus 1 more/);
  assert.deepEqual(issue.labels, ['eslint-autonomous', 'autonomous', 'code-quality', 'blocker']);
  const duplicate = await runScript(mainScript, {
    report: fileReport(1), existing: [{ title: '🚨 Custom ESLint Rules Violations on Main' }],
  });
  assert.equal(duplicate.filter((call) => call.kind === 'issue').length, 0);
});

test('PR comment API failure propagates instead of becoming an unawaited success', async () => {
  await assert.rejects(runScript(prScript, { report: fileReport(1), rejectComment: true }), /fixture API failure/);
});
