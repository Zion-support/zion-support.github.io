'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { test } = require('node:test');

const root = path.resolve(__dirname, '../..');
const helper = path.join(root, 'automation/lib/mttr-unavailable.cjs');
const cases = [
  ['generate-automation-issue-index.cjs', 'issue-index', 'automation-open-issues-index-latest.json'],
  ['ai-mttr-fingerprint-regression-guard.cjs', 'fingerprint-regression', 'mttr-fingerprint-regression-latest.json'],
  ['ai-mttr-slo-guard.cjs', 'slo-guard', 'mttr-slo-guard-latest.json'],
  ['mttr-fingerprint-arbitration-digest.cjs', 'arbitration-digest', 'mttr-fingerprint-arbitration-digest-latest.json'],
];

function sandbox(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-mttr-test-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  return dir;
}

function invoke(dir, script, extraEnv = {}) {
  const env = {
    ...process.env,
    GH_TOKEN: 'secret-never-serialize-gh-token',
    MTTR_SLO_PAGERDUTY_ROUTING_KEY: 'secret-never-serialize-routing-key',
    GITHUB_REPOSITORY: 'Zion-support/zion-support.github.io',
    GITHUB_SHA: 'a'.repeat(40),
    GITHUB_RUN_ID: '41218505588',
    GITHUB_RUN_ATTEMPT: '1',
    GITHUB_STEP_SUMMARY: path.join(dir, 'summary.md'),
    ...extraEnv,
  };
  return spawnSync(process.execPath, [path.join(root, 'automation', script)], {
    cwd: dir, env, encoding: 'utf8', timeout: 10000,
  });
}

for (const [script, component, metricName] of cases) {
  test(component + ' exits unsuccessfully and publishes only an availability diagnostic', (t) => {
    const dir = sandbox(t);
    const reports = path.join(dir, 'automation/reports');
    fs.mkdirSync(reports, { recursive: true });
    const sentinel = '{"oldMetric":"preserve-exactly","generatedAt":"2020-01-01T00:00:00Z"}\n';
    const oldMetric = path.join(reports, metricName);
    fs.writeFileSync(oldMetric, sentinel);

    const before = Date.now();
    const result = invoke(dir, script);
    assert.equal(result.error, undefined);
    assert.equal(result.status, 1);
    assert.equal(result.signal, null);
    assert.match(result.stderr, /MTTR_UNAVAILABLE/);
    const diagnosticPath = path.join(reports, 'mttr-availability', component + '.json');
    const raw = fs.readFileSync(diagnosticPath, 'utf8');
    const report = JSON.parse(raw);
    assert.equal(report.schema, 'zion.mttr.availability.v1');
    assert.equal(report.component, component);
    assert.equal(report.status, 'unavailable');
    assert.equal(report.success, false);
    assert.equal(report.implemented, false);
    assert.equal(report.collectionComplete, false);
    assert.equal(report.metrics, null);
    assert.equal(report.reasonCode, 'IMPLEMENTATION_MISSING');
    assert.ok(Date.parse(report.generatedAt) >= before && Date.parse(report.generatedAt) <= Date.now());
    assert.equal(report.provenance.runId, '41218505588');
    assert.equal(report.provenance.commit, 'a'.repeat(40));
    assert.equal(fs.readFileSync(oldMetric, 'utf8'), sentinel);
    assert.deepEqual(fs.readdirSync(path.dirname(diagnosticPath)), [component + '.json']);
    assert.deepEqual(fs.readdirSync(reports).sort(), [metricName, 'mttr-availability'].sort());
    const exposed = raw + result.stdout + result.stderr + fs.readFileSync(path.join(dir, 'summary.md'), 'utf8');
    assert.doesNotMatch(exposed, /secret-never-serialize/);
    assert.match(exposed, /No MTTR metrics, guard result, or incident actions were produced/);
  });
}

test('a subsequent invocation replaces the prior diagnostic with its own provenance', (t) => {
  const dir = sandbox(t);
  assert.equal(invoke(dir, cases[0][0], { GITHUB_RUN_ID: '100' }).status, 1);
  assert.equal(invoke(dir, cases[0][0], { GITHUB_RUN_ID: '101' }).status, 1);
  const report = JSON.parse(fs.readFileSync(path.join(dir, 'automation/reports/mttr-availability/issue-index.json')));
  assert.equal(report.provenance.runId, '101');
  assert.equal(report.status, 'unavailable');
  assert.equal(report.metrics, null);
});

test('invalid provenance values are omitted without echoing raw values', (t) => {
  const dir = sandbox(t);
  const invalid = 'secret-never-serialize-invalid-value\n::warning::injected';
  const result = invoke(dir, cases[0][0], {
    GITHUB_REPOSITORY: invalid, GITHUB_SHA: invalid,
    GITHUB_RUN_ID: invalid, GITHUB_RUN_ATTEMPT: invalid,
  });
  assert.equal(result.status, 1);
  const raw = fs.readFileSync(path.join(dir, 'automation/reports/mttr-availability/issue-index.json'), 'utf8');
  const report = JSON.parse(raw);
  assert.deepEqual(report.provenance, { repository: null, commit: null, runId: null, runAttempt: null });
  assert.doesNotMatch(raw + result.stdout + result.stderr, /secret-never-serialize|::warning::injected/);
});

test('an unwritable report location remains a failure without a misleading metric file', (t) => {
  const dir = sandbox(t);
  const reports = path.join(dir, 'automation/reports');
  fs.mkdirSync(reports, { recursive: true });
  fs.writeFileSync(path.join(reports, 'mttr-availability'), 'not-a-directory');
  const result = invoke(dir, cases[0][0]);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Diagnostic write failed/);
  assert.deepEqual(fs.readdirSync(reports), ['mttr-availability']);
  assert.equal(fs.existsSync(path.join(dir, 'summary.md')), false);
});

test('a summary failure preserves the report and the nonzero exit', (t) => {
  const dir = sandbox(t);
  const summaryDir = path.join(dir, 'summary-directory');
  fs.mkdirSync(summaryDir);
  const result = invoke(dir, cases[0][0], { GITHUB_STEP_SUMMARY: summaryDir });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Summary write failed/);
  assert.equal(JSON.parse(fs.readFileSync(path.join(dir, 'automation/reports/mttr-availability/issue-index.json'))).success, false);
});

test('unknown component values cannot select a path or create reports', (t) => {
  const dir = sandbox(t);
  const result = spawnSync(process.execPath, ['-e', 'require(' + JSON.stringify(helper) + ').reportUnavailable("../escape")'], {
    cwd: dir, encoding: 'utf8', timeout: 10000,
  });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Unknown component/);
  assert.deepEqual(fs.readdirSync(dir), []);
});
