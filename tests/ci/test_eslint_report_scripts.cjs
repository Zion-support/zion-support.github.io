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
    issue: { number: 123 }, runId: 42,
    payload: { committer: { name: 'Fixture' }, headCommit: { id: 'abcdef0123456789' } },
  };
  const mockRequire = (name) => {
    if (name === './scripts/checks/eslint-report-summary.cjs') {
      return require('../../scripts/checks/eslint-report-summary.cjs');
    }
    assert.equal(name, 'fs');
    return { readFileSync: (file, encoding) => {
      assert.equal(file, '/tmp/eslint-report.json');
      assert.equal(encoding, 'utf8');
      if (missing) throw new Error('fixture missing report');
      return raw === undefined ? JSON.stringify(report) : raw;
    } };
  };
  const execute = new AsyncFunction('github', 'context', 'require', 'process', script);
  await execute(github, context, mockRequire, { env: { GITHUB_WORKSPACE: '/workspace', ESLINT_EXIT_CODE: '1' } });
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

test('PR report flattens per-file messages, publishes counts while keeping locations out of comments', async () => {
  const report = fileReport(2);
  report[0].messages.push({ severity: 1, line: 9, column: 1, message: 'Warning only', ruleId: 'warning' });
  report.push({ filePath: '/workspace/components/widget.tsx', messages: [
    { severity: 2, line: 7, column: 4, message: 'Widget error', ruleId: 'fixture/widget' },
  ] });
  const [comment] = await runScript(prScript, { report });
  assert.equal(comment.kind, 'comment');
  assert.equal(comment.issue_number, 123);
  assert.match(comment.body, /3 error\(s\) and 1 warning\(s\)/);
  assert.doesNotMatch(comment.body, /page\.tsx|widget\.tsx|Widget error|Warning only|fixture\/widget/);
});

test('PR summary stays bounded for large reports and counts warnings', async () => {
  const [capped] = await runScript(prScript, { report: fileReport(26) });
  assert.match(capped.body, /26 error\(s\) and 0 warning\(s\)/);
  assert.doesNotMatch(capped.body, /page\.tsx|fixture\/rule|Error 25/);
  const report = [{ filePath: '/workspace/a.ts', messages: [{ severity: 1, message: 'Warning' }] }];
  const [warning] = await runScript(prScript, { report });
  assert.match(warning.body, /0 error\(s\) and 1 warning\(s\)/);
});

test('missing, invalid and malformed reports retain explicit failure explanation', async () => {
  for (const fixture of [{ missing: true }, { raw: '{invalid' }, { report: [{ filePath: 'x' }] }]) {
    const [comment] = await runScript(prScript, fixture);
    assert.match(comment.body, /missing or invalid/);
    const calls = await runScript(mainScript, fixture);
    assert.match(calls.find((call) => call.kind === 'issue').body, /missing or invalid/);
  }
});

test('main summary retains counts, labels and duplicate suppression', async () => {
  const calls = await runScript(mainScript, { report: fileReport(31) });
  const issue = calls.find((call) => call.kind === 'issue');
  assert.match(issue.body, /31 error\(s\) and 0 warning\(s\)/);
  assert.doesNotMatch(issue.body, /page\.tsx|fixture\/rule|Error 30/);
  assert.deepEqual(issue.labels, ['eslint-autonomous', 'autonomous', 'code-quality', 'blocker']);
  const duplicate = await runScript(mainScript, {
    report: fileReport(1), existing: [{ title: '🚨 Custom ESLint Rules Violations on Main' }],
  });
  assert.equal(duplicate.filter((call) => call.kind === 'issue').length, 0);
});

test('PR comment API failure propagates instead of becoming an unawaited success', async () => {
  await assert.rejects(runScript(prScript, { report: fileReport(1), rejectComment: true }), /fixture API failure/);
});
