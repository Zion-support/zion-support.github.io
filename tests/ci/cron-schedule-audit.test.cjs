'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { field, parseCron, matchesDate, audit, main } = require('../../automation/ai-cron-collision-tuner.cjs');

const ENV = { CRON_AUDIT_START: '2026-11-23', CRON_AUDIT_DAYS: '7', CRON_DENSITY_THRESHOLD: '4' };
function fixture(t, workflows = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-cron-audit-'));
  fs.mkdirSync(path.join(root, '.github/workflows'), { recursive: true });
  for (const [name, content] of Object.entries(workflows)) fs.writeFileSync(path.join(root, '.github/workflows', name), content);
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  return root;
}
function workflow(crons) {
  return 'name: fixture\n"on":\n  schedule:\n' + crons.map(cron => '    - cron: "' + cron + '"\n').join('') + 'jobs:\n  check:\n    runs-on: ubuntu-latest\n    steps:\n      - run: echo PRIVATE_SENTINEL_NOT_FOR_REPORTS\n';
}

test('parses the documented cron list, range, step and name forms', () => {
  assert.deepEqual(field('20/15', 0, 59), [20, 35, 50]);
  assert.deepEqual(parseCron('2,10 4-6 * JAN,MAR MON-FRI').minutes, [2, 10]);
  assert.deepEqual(parseCron('2,10 4-6 * JAN,MAR MON-FRI').hours, [4, 5, 6]);
  assert.deepEqual(parseCron('2,10 4-6 * JAN,MAR MON-FRI').months, [1, 3]);
  assert.deepEqual(parseCron('2,10 4-6 * JAN,MAR MON-FRI').weekdays, [1, 2, 3, 4, 5]);
  for (const cron of ['@daily', '61 * * * *', '0 24 * * *', '0 0 0 * *', '0 0 * * 7', '*/0 * * * *', '0 0 * FOO *', '2,,4 * * * *', '9-2 * * * *']) assert.throws(() => parseCron(cron));
});

test('matches POSIX restricted day alternatives and wildcard constraints', () => {
  const monday = new Date('2026-11-23T00:00:00Z');
  const first = new Date('2026-12-01T00:00:00Z');
  const tuesday = new Date('2026-11-24T00:00:00Z');
  assert.equal(matchesDate(parseCron('0 0 1 * MON'), monday), true);
  assert.equal(matchesDate(parseCron('0 0 1 * MON'), first), true);
  assert.equal(matchesDate(parseCron('0 0 1 * MON'), tuesday), false);
  assert.equal(matchesDate(parseCron('0 0 * * MON'), tuesday), false);
  assert.equal(matchesDate(parseCron('0 0 1 * *'), monday), false);
  assert.equal(matchesDate(parseCron('0 0 */2 * MON'), monday), true);
  assert.equal(matchesDate(parseCron('0 0 */2 * TUE'), tuesday), false);
  assert.equal(matchesDate(parseCron('0 0 * JAN *'), monday), false);
});

test('counts semantic overlaps, with one workflow per minute despite duplicate entries', t => {
  const root = fixture(t, {
    'a.yml': workflow(['0 9 * * MON', '0 9 * * 1']),
    'b.yaml': workflow(['0 9 * * 1-5']),
    'c.yml': workflow(['0 9 * * TUE']),
  });
  const report = audit(root, ENV);
  assert.equal(report.status, 'completed_with_hotspots');
  assert.equal(report.scheduleEntries, 4);
  assert.equal(report.uniqueWorkflowStartMinutes, 7);
  assert.equal(report.exactCollisionCount, 2);
  assert.deepEqual(report.exactCollisions.map(row => row.workflowCount), [2, 2]);
  assert.equal(report.endUtcExclusive, '2026-11-30T00:00:00.000Z');
});

test('distinguishes fixed five-minute density from exact-minute collisions', t => {
  const root = fixture(t, {
    'a.yml': workflow(['0 9 * * MON']), 'b.yml': workflow(['1 9 * * MON']),
    'c.yml': workflow(['2 9 * * MON']), 'd.yml': workflow(['4 9 * * MON']),
    'e.yml': workflow(['5 9 * * MON']),
  });
  const report = audit(root, ENV);
  assert.equal(report.exactCollisionCount, 0);
  assert.equal(report.denseWindowCount, 1);
  assert.equal(report.denseWindows[0].workflowCount, 4);
  assert.equal(report.denseWindows[0].atUtc, '2026-11-23T09:00:00.000Z');
});

test('bounded samples retain full measured totals', t => {
  const root = fixture(t, { 'a.yml': workflow(['*/5 * * * *']), 'b.yml': workflow(['0/5 * * * *']) });
  const report = audit(root, { ...ENV, CRON_AUDIT_DAYS: '1', CRON_DENSITY_THRESHOLD: '2' });
  assert.equal(report.exactCollisionCount, 288);
  assert.equal(report.denseWindowCount, 288);
  assert.equal(report.exactCollisions.length, 50);
  assert.equal(report.denseWindows.length, 50);
});

test('handles calendar month and leap-day boundaries', t => {
  const root = fixture(t, { 'a.yml': workflow(['0 0 29 FEB *']), 'b.yml': workflow(['0 0 29 2 *']) });
  assert.equal(audit(root, { ...ENV, CRON_AUDIT_START: '2028-02-28', CRON_AUDIT_DAYS: '3' }).exactCollisionCount, 1);
  assert.equal(audit(root, { ...ENV, CRON_AUDIT_START: '2027-02-28', CRON_AUDIT_DAYS: '3' }).exactCollisionCount, 0);
});

test('malformed YAML, invalid cron and unsupported timezone fail without source disclosure', t => {
  const root = fixture(t, {
    'invalid.yml': '"on": [PRIVATE_SENTINEL_NOT_FOR_REPORTS',
    'cron.yml': workflow(['nonsense']),
    'timezone.yml': workflow(['0 9 * * *']).replace('  schedule:', '  schedule:').replace('    - cron:', '    - timezone: America/New_York\n      cron:'),
  });
  const report = audit(root, ENV);
  assert.equal(report.status, 'error');
  assert.deepEqual(report.errors.map(error => error.code).sort(), ['invalid_cron', 'invalid_yaml', 'unsupported_timezone']);
  assert.equal(report.exactCollisions.length, 0);
  assert.equal(JSON.stringify(report).includes('PRIVATE_SENTINEL'), false);
});

test('missing workflows and invalid configuration cannot report success', t => {
  const root = fixture(t, {});
  assert.equal(audit(root, ENV).status, 'error');
  for (const extra of [
    { CRON_AUDIT_START: '2026-02-30' }, { CRON_AUDIT_DAYS: '0' },
    { CRON_AUDIT_DAYS: '367' }, { CRON_DENSITY_THRESHOLD: '' }, { CRON_DENSITY_THRESHOLD: 'NaN' },
  ]) assert.equal(audit(root, { ...ENV, ...extra }).status, 'error');
});

test('a schedule event without cron definitions cannot masquerade as no schedule', t => {
  for (const value of ['schedule', '[push, schedule]', 'null', '42']) {
    const root = fixture(t, { 'bad.yml': '"on": ' + value + '\n' });
    assert.equal(audit(root, ENV).status, 'error');
  }
});

test('symlinked inputs are rejected instead of followed', t => {
  const root = fixture(t, { 'safe.yml': workflow(['0 9 * * MON']) });
  fs.symlinkSync(path.join(root, '.github/workflows/safe.yml'), path.join(root, '.github/workflows/link.yml'));
  const report = audit(root, ENV);
  assert.equal(report.status, 'error');
  assert.equal(report.errors[0].code, 'not_regular_file');
});

test('writes both expected artifacts without modifying workflow content', t => {
  const original = workflow(['0 9 * * MON']);
  const root = fixture(t, { 'safe.yml': original });
  assert.equal(main(root, ENV), 0);
  const json = fs.readFileSync(path.join(root, 'automation/reports/cron-collision-latest.json'), 'utf8');
  const md = fs.readFileSync(path.join(root, 'automation/reports/cron-collision-latest.md'), 'utf8');
  assert.equal(JSON.parse(json).status, 'completed');
  assert.equal(json.includes('PRIVATE_SENTINEL'), false);
  assert.equal(md.includes('PRIVATE_SENTINEL'), false);
  assert.equal(fs.readFileSync(path.join(root, '.github/workflows/safe.yml'), 'utf8'), original);
});

test('incomplete scans return nonzero and replace stale success artifacts', t => {
  const root = fixture(t, { 'safe.yml': workflow(['0 9 * * MON']) });
  assert.equal(main(root, ENV), 0);
  fs.writeFileSync(path.join(root, '.github/workflows/safe.yml'), '"on": [');
  const cli = spawnSync(process.execPath, [path.resolve(__dirname, '../../automation/ai-cron-collision-tuner.cjs')], { cwd: root, env: { ...process.env, ...ENV }, encoding: 'utf8' });
  assert.equal(cli.status, 1);
  assert.equal(JSON.parse(fs.readFileSync(path.join(root, 'automation/reports/cron-collision-latest.json'))).status, 'error');
});

test('report output directories cannot redirect writes through a symlink', t => {
  const root = fixture(t, { 'safe.yml': workflow(['0 9 * * MON']) });
  const elsewhere = fixture(t, {});
  fs.mkdirSync(path.join(root, 'automation'));
  fs.symlinkSync(elsewhere, path.join(root, 'automation/reports'));
  assert.throws(() => main(root, ENV), /unsafe_report_directory/);
  assert.equal(fs.existsSync(path.join(elsewhere, 'cron-collision-latest.json')), false);
});
