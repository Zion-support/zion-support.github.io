'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');
const source = fs.readFileSync(path.resolve(__dirname, '../../scripts/restore-reviewed-guide-dependencies.cjs'), 'utf8');
const minimumPageLength = 3000;
const pageCount = 35;
const asset = 'assets/js/communications-planner.js';
const routes = ['en', 'pt', 'es', 'fr', 'de'].flatMap(locale => {
  const prefix = locale === 'en' ? '' : locale + '/';
  return ['apps/network-start-here.html', 'apps/app-experiment-planner.html', 'apps/communications-workflow-lab.html',
    ...['smart-call-routing-ai', 'call-intelligence-hub', 'voicemail-triage-ai', 'meeting-intelligence-ai'].map(slug => slug + '/index.html')]
    .map(route => prefix + route);
});

function fixture(run) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'guide-restorer-test-'));
  const output = path.join(root, 'out');
  const temporary = path.join(root, 'temporary');
  fs.mkdirSync(temporary);
  const log = [];
  const calls = [];
  const currentRuntime = 'current runtime fixture';
  function execute(options = {}) {
    const baseHtml = '<link rel="canonical" href="/fixture"><h1>Fixture</h1>';
    const html = options.html ?? baseHtml.padEnd(minimumPageLength + 1, ' ');
    const childProcess = {
      execFileSync(binary, args, settings) {
        assert.equal(binary, process.execPath);
        assert.equal(settings.stdio, 'pipe');
        const script = path.basename(args[0]);
        calls.push(script);
        if (options.failAt === script) {throw new Error('Fixture child failure');}
        if (script === 'test-app-experiments.cjs') {return;}
        for (const route of routes) {
          const file = path.join(args[1], route);
          fs.mkdirSync(path.dirname(file), { recursive: true });
          fs.writeFileSync(file, html);
        }
      },
    };
    const isolatedFs = {
      ...fs,
      copyFileSync(from, to, flags) {
        if (from === path.join('public', asset)) {fs.writeFileSync(to, currentRuntime);}
        else {fs.copyFileSync(from, to, flags);}
      },
    };
    function isolatedRequire(name) {
      if (name === 'node:child_process') {return childProcess;}
      if (name === 'node:fs') {return isolatedFs;}
      if (name === 'node:os') {return { tmpdir: () => temporary };}
      return require(name);
    }
    const context = {
      require: isolatedRequire,
      process: { argv: ['node', 'restore', output], execPath: process.execPath, stdout: { write: text => log.push(text) } },
    };
    context['__dirname'] = path.join(root, 'scripts');
    vm.runInNewContext(source, context);
  }
  try {run({ root, output, temporary, log, calls, currentRuntime, execute });}
  finally {fs.rmSync(root, { recursive: true, force: true });}
}

test('restores missing pages, preserves existing pages, refreshes runtime and cleans staging', () => {
  fixture(({ output, temporary, log, calls, currentRuntime, execute }) => {
    const existing = path.join(output, routes[0]);
    fs.mkdirSync(path.dirname(existing), { recursive: true });
    fs.writeFileSync(existing, 'Existing reviewed content');
    execute();
    assert.equal(fs.readFileSync(existing, 'utf8'), 'Existing reviewed content');
    for (const route of routes.slice(1)) {assert(fs.readFileSync(path.join(output, route), 'utf8').includes('<h1>'));}
    assert.equal(fs.readFileSync(path.join(output, asset), 'utf8'), currentRuntime);
    assert.deepEqual(fs.readdirSync(temporary), []);
    assert.deepEqual(calls, ['bootstrap-network-evaluation.cjs', 'render-app-experiments.cjs', 'render-communications-apps.cjs', 'test-app-experiments.cjs']);
    assert.deepEqual(log, ['PASS historical guide dependencies: ' + (pageCount - 1) + ' pages restored; existing content preserved.\n']);
    execute();
    assert.equal(log[1], 'PASS historical guide dependencies: 0 pages restored; existing content preserved.\n');
    assert.deepEqual(fs.readdirSync(temporary), []);
  });
});

for (const [name, html] of [
  ['exact minimum length', '<link rel="canonical"><h1>Fixture</h1>'.padEnd(minimumPageLength, ' ')],
  ['missing canonical', '<h1>Fixture</h1>'.padEnd(minimumPageLength + 1, ' ')],
  ['missing heading', '<link rel="canonical">'.padEnd(minimumPageLength + 1, ' ')],
]) {
  test('rejects ' + name + ' and cleans staging', () => {
    fixture(({ output, temporary, log, execute }) => {
      assert.throws(() => execute({ html }));
      assert.equal(fs.existsSync(output), false);
      assert.deepEqual(log, []);
      assert.deepEqual(fs.readdirSync(temporary), []);
    });
  });
}

for (const script of ['bootstrap-network-evaluation.cjs', 'render-app-experiments.cjs', 'render-communications-apps.cjs', 'test-app-experiments.cjs']) {
  test('propagates ' + script + ' failure and cleans staging', () => {
    fixture(({ output, temporary, log, execute }) => {
      assert.throws(() => execute({ failAt: script }), /Fixture child failure/);
      assert.equal(fs.existsSync(output), false);
      assert.deepEqual(log, []);
      assert.deepEqual(fs.readdirSync(temporary), []);
    });
  });
}
