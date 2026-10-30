'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { ESLint, Linter } = require('eslint');
const plugin = require('../../eslint-rules/autonomous.cjs');

const root = path.resolve(__dirname, '../..');
const configPath = path.join(root, '.eslintrc-autonomous.cjs');
const eslint = new ESLint({ cwd: root, overrideConfigFile: configPath });
const linter = new Linter();

function isolatedRule(rule, source) {
  return linter.verify(source, [{
    languageOptions: { ecmaVersion: 2022, sourceType: 'module' },
    plugins: { zion: plugin },
    rules: { [`zion/${rule}`]: 'error' }
  }]);
}

const htmlCases = [
  ['dot assignment', 'element.innerHTML = input;', 1],
  ['computed assignment', 'element["innerHTML"] = input;', 1],
  ['compound assignment', 'element.innerHTML += input;', 1],
  ['destructuring write', '({ value: element.innerHTML } = source);', 1],
  ['array destructuring write', '[element.innerHTML] = source;', 1],
  ['loop target write', 'for (element.innerHTML of values) {}', 1],
  ['sanitizer-named call still needs review', 'element.innerHTML = sanitize(input);', 1],
  ['reading is allowed', 'const content = element.innerHTML;', 0],
  ['textContent alternative', 'element.textContent = input;', 0]
];
for (const [name, source, expected] of htmlCases) {
  test(`DOM guard: ${name}`, () => {
    const messages = isolatedRule('no-inner-html', source);
    assert.equal(messages.length, expected);
    assert.ok(messages.every((message) => message.ruleId === 'zion/no-inner-html' && message.severity === 2));
  });
}

const asyncCases = [
  ['unprotected declaration', 'async function run() { await work(); }', 1],
  ['unprotected arrow', 'const run = async () => await work();', 1],
  ['whole-body try/catch', 'async function run() { try { await work(); } catch (error) { report(error); } }', 0],
  ['try/finally is not catch', 'async function run() { try { await work(); } finally { cleanup(); } }', 1],
  ['unrelated catch does not protect later work', 'async function run() { try { safe(); } catch (error) {} await work(); }', 1],
  ['nested function handler does not protect caller', 'async function run() { function helper() { try { work(); } catch (error) {} } await work(); }', 1],
  ['returned catch handler', 'const run = async () => work().catch(handle);', 0],
  ['awaited catch handler', 'async function run() { await work().catch(handle); }', 0],
  ['returned awaited catch handler', 'async function run() { return await work().catch(handle); }', 0],
  ['two-argument then handler', 'const run = async () => work().then(resolve, reject);', 0],
  ['empty catch call', 'const run = async () => work().catch();', 1],
  ['undefined catch handler', 'const run = async () => work().catch(undefined);', 1],
  ['null rejection handler', 'const run = async () => work().then(resolve, null);', 1],
  ['synchronous function outside async guard', 'function run() { return work(); }', 0]
];
for (const [name, source, expected] of asyncCases) {
  test(`Async guard: ${name}`, () => {
    const messages = isolatedRule('require-async-try-catch', source);
    assert.equal(messages.length, expected);
    assert.ok(messages.every((message) => message.ruleId === 'zion/require-async-try-catch' && message.severity === 2));
  });
}

async function messagesFor(source, filePath = 'app/autonomous-fixture.ts') {
  try {
    const [result] = await eslint.lintText(source, { filePath });
    assert.equal(result.fatalErrorCount, 0, JSON.stringify(result.messages));
    return result.messages;
  } catch (error) {
    throw error;
  }
}

test('flat config executes clean TypeScript outside a project without a parser/config failure', () =>
  messagesFor('export const value = 1;').then((messages) => assert.deepEqual(messages, [])));

test('JavaScript is linted without requiring membership in tsconfig', () =>
  messagesFor('export const value = 1;', 'scripts/autonomous-fixture.mjs')
    .then((messages) => assert.deepEqual(messages, [])));

test('eval, Function constructor and explicit any remain error-level violations', () =>
  messagesFor('export const value: any = eval("1"); export const build = new Function("return 1");')
    .then((messages) => {
      for (const rule of ['no-eval', 'no-new-func', '@typescript-eslint/no-explicit-any']) {
        assert.ok(messages.some((message) => message.ruleId === rule && message.severity === 2), rule);
      }
    }));

test('rest-argument any remains prohibited with the supported option name', () =>
  messagesFor('export function collect(...args: any[]) { return args; }')
    .then((messages) => assert.ok(messages.some((message) => message.ruleId === '@typescript-eslint/no-explicit-any' && message.severity === 2))));

test('unused-imports plugin reports the original warning instead of being missing', () =>
  messagesFor('import { readFile } from "node:fs"; export const value = 1;')
    .then((messages) => assert.ok(messages.some((message) => message.ruleId === 'unused-imports/no-unused-imports' && message.severity === 1))));

test('Next/React accessibility checks remain active', () =>
  messagesFor('export default function Page() { return <img src="/example.png" />; }', 'app/autonomous-fixture.tsx')
    .then((messages) => {
      assert.ok(messages.some((message) => message.ruleId === 'jsx-a11y/alt-text'));
      assert.ok(messages.some((message) => message.ruleId === '@next/next/no-img-element'));
    }));

test('TypeScript recommended checks remain active', () =>
  messagesFor('// @ts-ignore\nexport const value = 1;')
    .then((messages) => assert.ok(messages.some((message) => message.ruleId === '@typescript-eslint/ban-ts-comment' && message.severity === 2))));

test('both restored autonomous guards run through the complete configuration', () =>
  messagesFor('export async function write(element: HTMLElement, value: string) { element.innerHTML = value; await work(); }')
    .then((messages) => {
      for (const rule of ['zion/no-inner-html', 'zion/require-async-try-catch']) {
        assert.ok(messages.some((message) => message.ruleId === rule && message.severity === 2), rule);
      }
    }));

test('established test-only console and any allowances remain scoped to tests', () =>
  messagesFor('export const value: any = 1; console.log(value);', 'test/autonomous-fixture.test.ts')
    .then((messages) => {
      assert.ok(!messages.some((message) => ['no-console', '@typescript-eslint/no-explicit-any'].includes(message.ruleId)));
    }));

test('generated output and automation exclusions remain honored', () =>
  Promise.all(['out/generated.ts', '.hermes/generated.js', 'automation/reports/report.js', 'automation/task.cjs']
    .map((file) => eslint.isPathIgnored(path.join(root, file))))
    .then((ignored) => assert.ok(ignored.every(Boolean))));

function cli(source) {
  const result = spawnSync(process.execPath, [
    path.join(root, 'node_modules/eslint/bin/eslint.js'),
    '-c', configPath, '--stdin', '--stdin-filename', 'app/autonomous-fixture.ts',
    '--max-warnings', '0', '--format', 'json'
  ], { cwd: root, input: source, encoding: 'utf8' });
  assert.equal(result.error, undefined);
  return { ...result, report: JSON.parse(result.stdout) };
}

test('CLI returns success and valid JSON only for clean source', () => {
  const result = cli('export const value = 1;');
  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.report[0].errorCount, 0);
  assert.equal(result.report[0].warningCount, 0);
});

test('CLI still fails on warnings with --max-warnings 0 and emits valid JSON', () => {
  const result = cli('export const value = 1; console.log(value);');
  assert.equal(result.status, 1, result.stderr);
  assert.ok(result.report[0].messages.some((message) => message.ruleId === 'no-console' && message.severity === 1));
});

test('CLI preserves actual source parse failures as failing reports', () => {
  const result = cli('export const = ;');
  assert.equal(result.status, 1, result.stderr);
  assert.equal(result.report[0].fatalErrorCount, 1);
});

test('legacy root-key configuration reproduces the original configuration failure', () => {
  const legacy = new ESLint({ overrideConfigFile: true, overrideConfig: { root: true } });
  return assert.rejects(legacy.lintText('const value = 1;', { filePath: 'fixture.js' }), /root.*eslintrc|eslintrc.*root/s);
});
