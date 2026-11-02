'use strict';

// Offline regressions against the actual workflow; no npm install or network.
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');

const root = process.env.ZION_WORKFLOW_FIXTURE_ROOT || path.resolve(__dirname, '../..');
const workflow = fs.readFileSync(path.join(root, '.github/workflows/type-coverage.yml'), 'utf8');
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

function block(name, key) {
  const lines = workflow.split('\n');
  const start = lines.findIndex((line) => line.trim() === `- name: ${name}`);
  assert.notEqual(start, -1, `Missing step: ${name}`);
  const indentation = (line) => line.length - line.trimStart().length;
  const stepIndent = indentation(lines[start]);
  let end = lines.findIndex((line, index) => index > start && line.trim()
    && indentation(line) <= stepIndent);
  if (end === -1) end = lines.length;
  const relative = lines.slice(start, end).findIndex((line) => line.trim() === `${key}: |`);
  assert.notEqual(relative, -1, `Expected literal ${key} block: ${name}`);
  const keyLine = start + relative;
  const keyIndent = indentation(lines[keyLine]);
  const stop = lines.findIndex((line, index) => index > keyLine && index < end
    && line.trim() && indentation(line) <= keyIndent);
  return lines.slice(keyLine + 1, stop === -1 ? end : stop)
    .map((line) => line.slice(keyIndent + 2)).join('\n');
}

function temporary(action) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-type-coverage-'));
  try { return action(directory); } finally { fs.rmSync(directory, { recursive: true, force: true }); }
}

function git(cwd, ...args) {
  const result = spawnSync('git', ['-c', 'commit.gpgsign=false', ...args], {
    cwd, encoding: 'utf8', env: process.env,
  });
  assert.equal(result.status, 0, `git ${args.join(' ')}: ${result.stderr || result.error}`);
  return result.stdout.trim();
}

test('bounded checkout retains the complete current tree for every trigger', () => temporary((directory) => {
  const depths = [...workflow.matchAll(/^\s+fetch-depth: (\d+)\s*$/gm)];
  assert.equal(depths.length, 1);
  const depth = Number(depths[0][1]);
  assert.ok(depth > 0, 'Fetching all history cannot satisfy the checkout budget');
  assert.doesNotMatch(workflow, /^\s+(?:sparse-checkout|filter):/m);
  const source = path.join(directory, 'source');
  fs.mkdirSync(source);
  git(source, 'init', '-b', 'main');
  git(source, 'config', 'user.name', 'Workflow fixture');
  git(source, 'config', 'user.email', 'fixture@example.invalid');
  function commit(file, contents) {
    fs.mkdirSync(path.dirname(path.join(source, file)), { recursive: true });
    fs.writeFileSync(path.join(source, file), contents);
    git(source, 'add', '--', file);
    git(source, 'commit', '-m', 'fixture');
    return git(source, 'rev-parse', 'HEAD');
  }
  const initial = commit('app/page.tsx', 'initial tree\n');
  commit('components/shared.tsx', 'shared component\n');
  git(source, 'checkout', '-b', 'feature');
  const feature = commit('app/feature/page.tsx', 'feature tree\n');
  git(source, 'checkout', 'main');
  commit('app/base/page.tsx', 'base advance\n');
  git(source, 'merge', '--no-ff', 'feature', '-m', 'fixture PR merge');
  const merge = git(source, 'rev-parse', 'HEAD');
  const tip = commit('package.json', '{"name":"fixture"}\n');
  git(source, 'branch', 'unrelated', initial);
  git(source, 'tag', 'unrelated-tag', initial);
  for (const [event, sha] of [['push', tip], ['schedule', tip],
    ['pull_request', merge], ['workflow_dispatch', feature]]) {
    const checkout = path.join(directory, event);
    fs.mkdirSync(checkout);
    git(checkout, 'init');
    git(checkout, 'remote', 'add', 'origin', source);
    git(checkout, '-c', 'protocol.file.allow=always', 'fetch', '--no-tags',
      '--no-recurse-submodules', `--depth=${depth}`, 'origin',
      `+${sha}:refs/remotes/origin/workflow`);
    git(checkout, 'checkout', '--detach', sha);
    assert.equal(git(checkout, 'ls-tree', '-r', 'HEAD'), git(source, 'ls-tree', '-r', sha), event);
    assert.equal(git(checkout, 'rev-list', '--all', '--count'), '1', event);
    assert.equal(git(checkout, 'tag', '--list'), '', event);
    assert.doesNotMatch(git(checkout, 'for-each-ref', '--format=%(refname)'), /unrelated/);
  }
}));

for (const [step, command] of [['Run TypeScript Check', 'type-check'], ['Run ESLint Check', 'lint:check']]) {
  test(`${step} records and propagates success, source errors and tool failures`, () => temporary((directory) => {
    const npm = path.join(directory, 'npm');
    fs.writeFileSync(npm, '#!/bin/sh\nprintf "%s\\n" "$@" > "$ZION_FIXTURE_NPM_ARGS"\nexit "$ZION_FIXTURE_NPM_STATUS"\n');
    fs.chmodSync(npm, 0o755);
    for (const status of [0, 1, 2]) {
      const output = path.join(directory, `output-${status}`);
      const args = path.join(directory, `args-${status}`);
      const result = spawnSync('bash', ['--noprofile', '--norc', '-e', '-o', 'pipefail', '-c', block(step, 'run')], {
        cwd: directory, encoding: 'utf8', env: {
          ...process.env, PATH: `${directory}${path.delimiter}${process.env.PATH}`,
          GITHUB_OUTPUT: output, ZION_FIXTURE_NPM_STATUS: String(status), ZION_FIXTURE_NPM_ARGS: args,
        },
      });
      assert.equal(result.status, status, result.stderr || String(result.error));
      assert.equal(fs.readFileSync(output, 'utf8'), `exit_code=${status}\n`);
      assert.deepEqual(fs.readFileSync(args, 'utf8').trim().split('\n'), ['run', command]);
    }
  }));
}

const prScript = block('Comment on PR if failed', 'script');
const mainScript = block('Open issue on main branch regression', 'script');

async function report(script, { existing = [], reject } = {}) {
  const calls = [];
  const github = { rest: { issues: {
    createComment: async (input) => {
      if (reject === 'comment') throw new Error('fixture comment failure');
      calls.push({ kind: 'comment', ...input });
    },
    listForRepo: async (input) => {
      if (reject === 'list') throw new Error('fixture list failure');
      calls.push({ kind: 'list', ...input });
      return { data: existing };
    },
    create: async (input) => {
      if (reject === 'issue') throw new Error('fixture issue failure');
      calls.push({ kind: 'issue', ...input });
    },
  } } };
  const context = {
    repo: { owner: 'fixture-owner', repo: 'fixture-repo' },
    issue: { number: 123 }, sha: 'abcdef0123456789',
  };
  await new AsyncFunction('github', 'context', script)(github, context);
  return calls;
}

test('both actual github-script reporters compile as JavaScript', () => {
  assert.doesNotThrow(() => new AsyncFunction('github', 'context', prScript));
  assert.doesNotThrow(() => new AsyncFunction('github', 'context', mainScript));
});

test('PR report identifies the workflow and both checks without inventing a diagnosis', async () => {
  const [comment] = await report(prScript);
  assert.equal(comment.kind, 'comment');
  assert.equal(comment.issue_number, 123);
  assert.match(comment.body, /setup, TypeScript, or ESLint/);
  assert.match(comment.body, /npm run type-check/);
  assert.match(comment.body, /npm run lint:check/);
  assert.doesNotMatch(comment.body, /found type errors|all clear/i);
});

test('main report retains routing, labels and the actual commit', async () => {
  const calls = await report(mainScript);
  const query = calls.find((call) => call.kind === 'list');
  assert.deepEqual(query.labels, ['type-coverage', 'autonomous']);
  assert.equal(query.state, 'open');
  const issue = calls.find((call) => call.kind === 'issue');
  assert.equal(issue.owner, 'fixture-owner');
  assert.equal(issue.repo, 'fixture-repo');
  assert.equal(issue.title, '🚨 TypeScript Check Regression on Main');
  assert.deepEqual(issue.labels, ['type-coverage', 'autonomous', 'code-quality']);
  assert.match(issue.body, /abcdef0/);
  assert.match(issue.body, /npm run type-check/);
  assert.match(issue.body, /npm run lint:check/);
});

test('main report suppresses duplicate existing regression issues', async () => {
  const calls = await report(mainScript, {
    existing: [{ title: 'Unrelated issue' }, { title: '🚨 TypeScript Check Regression on Main' }],
  });
  assert.equal(calls.filter((call) => call.kind === 'issue').length, 0);
});

test('reporter API failures propagate instead of reporting an unawaited success', async () => {
  await assert.rejects(report(prScript, { reject: 'comment' }), /fixture comment failure/);
  await assert.rejects(report(mainScript, { reject: 'list' }), /fixture list failure/);
  await assert.rejects(report(mainScript, { reject: 'issue' }), /fixture issue failure/);
});
