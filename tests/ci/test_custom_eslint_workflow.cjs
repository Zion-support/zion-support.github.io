'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const { Script: scriptConstructor } = require('node:vm');
const yaml = require('js-yaml');
const reportSummary = require('../../scripts/checks/eslint-report-summary.cjs');

const root = path.resolve(__dirname, '../..');
const workflow = yaml.safeLoad(fs.readFileSync(path.join(root, '.github/workflows/custom-eslint.yml'), 'utf8'));
const steps = workflow.jobs['custom-eslint'].steps;
const packageManifest = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));

test('workflow Node runtime matches the repository engine contract', () => {
  const setup = steps.find(step => step.name === 'Setup Node.js');
  assert.equal(setup.with['node-version'], packageManifest.engines.node);
  assert.equal(packageManifest.engines.node, '22');
});

const handlers = [
  ['pull_request', 'comment'],
  ['push', 'issue'],
];
const syntheticTitle = '🚨 Custom ESLint Rules Violations on Main';
const runUrl = 'https://github.com/fixture/repository/actions/runs/1';
const reportWithDetails = JSON.stringify([{
  filePath: '/synthetic-private-sentinel/customer.ts',
  source: 'synthetic-private-sentinel source',
  messages: [
    { severity: 2, message: 'synthetic-private-sentinel diagnostic' },
    { severity: 1, message: 'synthetic-private-sentinel warning' },
  ],
}]);

function executeHandler(eventName, report, status, existing = [], apiError = null) {
  const step = steps.find(item => item.name === 'Report lint failure');
  assert.equal(step.uses, 'actions/github-script@v7');
  const calls = [];
  function record(kind, payload) {
    if (apiError) {return Promise.reject(apiError);}
    calls.push({ kind, payload: JSON.parse(JSON.stringify(payload)) });
    return Promise.resolve({});
  }
  const github = { rest: { issues: {
    createComment: payload => record('comment', payload),
    create: payload => record('issue', payload),
    listForRepo: payload => {
      calls.push({ kind: 'list', payload: JSON.parse(JSON.stringify(payload)) });
      return Promise.resolve({ data: existing });
    },
  } } };
  github.paginate = (method, payload) => {
    assert.equal(method, github.rest.issues.listForRepo);
    return method(payload).then(result => result.data);
  };
  const context = {
    repo: { owner: 'fixture', repo: 'repository' }, issue: { number: 1 },
    eventName, sha: 'fixture-sha',
  };
  function mockedRequire(moduleName) {
    if (moduleName === 'node:fs') {
      return { readFileSync: (filename, encoding) => {
        assert.equal(filename, '/tmp/eslint-report.json');
        assert.equal(encoding, 'utf8');
        if (report === null) {throw new Error('Synthetic unavailable report');}
        return report;
      } };
    }
    assert.equal(moduleName, './scripts/checks/eslint-report-summary.cjs');
    return reportSummary;
  }
  // Execute the actual YAML script with only mocked GitHub/file capabilities.
  // A TypeScript annotation in github-script must fail here, just as on Actions.
  const invoke = new scriptConstructor(`(async (github, context, require, process) => {
${step.with.script}
})`).runInNewContext();
  return invoke(github, context, mockedRequire, { env: {
    ESLINT_EXIT_CODE: status,
    GITHUB_SERVER_URL: 'https://github.com',
    GITHUB_REPOSITORY: 'fixture/repository',
    GITHUB_RUN_ID: '1',
  } }).then(() => calls);
}

const cases = [
  ['nested diagnostics', reportWithDetails, '1', /1 error\(s\) and 1 warning\(s\)/],
  ['warnings only', '[{"messages":[{"severity":1}]}]', '1', /0 error\(s\) and 1 warning\(s\)/],
  ['invalid report', 'synthetic-private-sentinel invalid JSON', '1', /missing or invalid/],
  ['missing report', null, '1', /missing or invalid/],
  ['configuration failure', reportWithDetails, '2', /did not complete successfully/],
  ['missing exit status', reportWithDetails, undefined, /did not complete successfully/],
];
for (const [name, kind] of handlers) {
  for (const [scenario, report, status, expected] of cases) {
    test(`${name}: ${scenario}`, () => {
      return executeHandler(name, report, status).then(calls => {
        const writes = calls.filter(call => call.kind === 'comment' || call.kind === 'issue');
        assert.equal(writes.length, 1);
        assert.equal(writes[0].kind, kind);
        const payload = writes[0].payload;
        assert.equal(payload.owner, 'fixture');
        assert.equal(payload.repo, 'repository');
        assert.match(payload.body, expected);
        assert.ok(payload.body.endsWith(`\n\n[Workflow run](${runUrl}) · Commit \`fixture-sha\``));
        assert.doesNotMatch(payload.body, /synthetic-private-sentinel|customer\.ts/);
        if (kind === 'comment') {
          assert.equal(payload.issue_number, 1);
          assert.equal(calls.length, 1);
        } else {
          assert.equal(payload.title, syntheticTitle);
          assert.equal(calls[0].payload.labels, 'eslint-autonomous,code-quality');
        }
      });
    });
  }
}

test('main failure handler preserves existing-issue deduplication', () => {
  return executeHandler(handlers[1][0], reportWithDetails, '1', [{ title: syntheticTitle }]).then(calls => {
    assert.equal(calls.length, 1);
    assert.equal(calls[0].kind, 'list');
  });
});

test('main failure handler does not mistake a pull request for an existing issue', () => {
  return executeHandler('push', reportWithDetails, '1', [
    { title: syntheticTitle, 'pull_request': { url: 'https://example.invalid/pull/1' } },
  ]).then(calls => assert.equal(calls.filter(call => call.kind === 'issue').length, 1));
});

for (const [eventName] of handlers) {
  test(`${eventName}: API failures propagate instead of claiming a completed notification`, () => {
    return assert.rejects(executeHandler(eventName, reportWithDetails, '1', [],
      new Error('Synthetic API failure')), /Synthetic API failure/);
  });

  test(`${eventName}: a different failed step does not invent a lint violation`, () => {
    return executeHandler(eventName, null, '0').then(calls => {
      const write = calls.find(call => call.kind === 'comment' || call.kind === 'issue');
      assert.match(write.payload.body, /ESLint exited successfully\. A different workflow step failed/);
    });
  });
}

test('actual handler regressions run as a required step before the source lint gate', () => {
  const regression = steps.findIndex(step => step.name === 'Test autonomous lint configuration and reporting');
  const lint = steps.findIndex(step => step.name === 'Run Autonomous ESLint');
  assert.ok(regression >= 0 && regression < lint);
  assert.match(steps[regression].run, /tests\/ci\/test_custom_eslint_workflow\.cjs/);
  assert.equal(steps[regression].if, undefined);
  assert.equal(steps[regression]['continue-on-error'], undefined);
});
