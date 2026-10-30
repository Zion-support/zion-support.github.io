'use strict';

const assert = require('node:assert/strict');
const path = require('node:path');
const test = require('node:test');
const { Linter, ESLint } = require('eslint');
const parser = require('@typescript-eslint/parser');
const plugin = require('../../eslint-rules/autonomous.cjs');

function messages(code, rule) {
  const linter = new Linter();
  const result = linter.verify(code, [{
    files: ['**/*.tsx'],
    languageOptions: {
      parser, ecmaVersion: 'latest', sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { 'zion-autonomous': plugin },
    rules: { ['zion-autonomous/' + rule]: 'error' },
  }], { filename: 'fixture.tsx' });
  assert.equal(result.some((item) => item.fatal), false, JSON.stringify(result));
  return result;
}

const safeHtml = [
  'element.textContent = value;',
  'const current = element.innerHTML;',
  'const payload = { innerHTML: value };',
  'const view = <div>{value}</div>;',
  'element.setAttribute("title", value);',
];
const unsafeHtml = [
  'element.innerHTML = value;',
  'element.innerHTML += value;',
  'element["innerHTML"] = value;',
  'element[`innerHTML`] = value;',
  'element.outerHTML = value;',
  'element.insertAdjacentHTML("beforeend", value);',
  'element["insertAdjacentHTML"]("beforeend", value);',
  'element?.insertAdjacentHTML("beforeend", value);',
  'const view = <div dangerouslySetInnerHTML={{ __html: value }} />;',
  // A function named sanitize is not proof of a reviewed sanitization boundary.
  'element.innerHTML = sanitize(value);',
];
for (const code of safeHtml) {
  test('HTML guard accepts safe operation: ' + code, () => {
    assert.equal(messages(code, 'no-inner-html').length, 0);
  });
}
for (const code of unsafeHtml) {
  test('HTML guard flags sink: ' + code, () => {
    const result = messages(code, 'no-inner-html');
    assert.equal(result.length, 1);
    assert.equal(result[0].messageId, 'sink');
  });
}

const safeAsync = [
  'async function load() { try { await fetch("/api"); } catch (error) { report(error); } }',
  'async function load() { await fetch("/api").catch(report); }',
  'async function load() { await fetch("/api").then(use, report); }',
  'async function load() { try { for await (const item of stream) { consume(item); } } catch (error) { report(error); } }',
  'fetch("/api").catch(report);',
  'fetch("/api").then(use, report);',
  'fetch("/api").then(use).catch(report);',
  'void fetch("/api").catch(report);',
  'function load() { return fetch("/api"); }',
  'async function load() { try { await fetch("/api"); } catch (error) { await log(error).catch(report); } }',
  'async function load() { try { try { fail(); } finally { await fetch("/api"); } } catch (error) { report(error); } }',
  'function fetch() { return 1; } fetch();',
  'function Promise() {} new Promise();',
  'const action = () => 1; action();',
  'async function action() {} action().catch(report);',
  'const action = async () => {}; action().catch(report);',
];
const unsafeAsync = [
  ['async function load() { await fetch("/api"); }', 'awaitCatch'],
  ['async function load() { try { await fetch("/api"); } finally { cleanup(); } }', 'awaitCatch'],
  ['try { const load = async () => { await fetch("/api"); }; } catch (error) { report(error); }', 'awaitCatch'],
  ['async function load() { try { fail(); } catch (error) { await fetch("/api"); } }', 'awaitCatch'],
  ['async function load() { try { fail(); } catch (error) { report(error); } finally { await fetch("/api"); } }', 'awaitCatch'],
  ['async function load() { await fetch("/api").catch(); }', 'awaitCatch'],
  ['async function load() { await fetch("/api").then(use); }', 'awaitCatch'],
  ['async function load() { await fetch("/api").then(use, undefined); }', 'awaitCatch'],
  ['async function load() { await fetch("/api").catch(null); }', 'awaitCatch'],
  ['async function load() { await fetch("/api").catch(report).then(use); }', 'awaitCatch'],
  ['async function load() { for await (const item of stream) { consume(item); } }', 'awaitCatch'],
  ['fetch("/api");', 'floating'],
  ['void fetch("/api");', 'floating'],
  ['try { fetch("/api"); } catch (error) { report(error); }', 'floating'],
  ['fetch("/api").then(use);', 'floating'],
  ['fetch("/api").catch();', 'floating'],
  ['fetch("/api").catch(undefined);', 'floating'],
  ['fetch("/api").finally(cleanup);', 'floating'],
  ['Promise.resolve(value);', 'floating'],
  ['Promise.all(tasks);', 'floating'],
  ['new Promise(resolve => resolve(value));', 'floating'],
  ['async function action() {} action();', 'floating'],
  ['const action = async () => {}; action();', 'floating'],
  ['const action = async function () {}; action();', 'floating'],
];
for (const code of safeAsync) {
  test('Async guard accepts handling: ' + code, () => {
    assert.deepEqual(messages(code, 'require-async-try-catch'), []);
  });
}
for (const [code, messageId] of unsafeAsync) {
  test('Async guard rejects unhandled path: ' + code, () => {
    const result = messages(code, 'require-async-try-catch');
    assert.equal(result.length, 1);
    assert.equal(result[0].messageId, messageId);
  });
}

const root = path.resolve(__dirname, '../..');
const eslint = new ESLint({ cwd: root, overrideConfigFile: path.join(root, '.eslintrc-autonomous.cjs') });

test('production configuration loads under installed ESLint and retains intended severities', async () => {
  const config = await eslint.calculateConfigForFile(path.join(root, 'app/lint-fixture.ts'));
  for (const name of ['no-eval', 'no-new-func', 'zion-autonomous/no-inner-html',
    'zion-autonomous/require-async-try-catch', '@typescript-eslint/no-explicit-any', 'curly']) {
    assert.equal(config.rules[name][0], 2, name);
  }
  assert.equal(config.rules['@typescript-eslint/no-unused-vars'][0], 1);
  assert.equal(config.rules['no-console'][0], 1);
  assert.equal(config.rules['@next/next/no-sync-scripts'][0], 2);
  assert.equal(config.rules['@next/next/no-html-link-for-pages'][0], 0);
  assert.ok(config.rules['@typescript-eslint/ban-ts-comment']);
  assert.equal(config.languageOptions.parserOptions.project, undefined);
});

test('production configuration yields a clean result for a valid module', async () => {
  const [result] = await eslint.lintText('export const ready = true;', { filePath: 'app/lint-fixture.ts' });
  assert.equal(result.errorCount, 0, JSON.stringify(result.messages));
  assert.equal(result.warningCount, 0, JSON.stringify(result.messages));
});

test('unused imports and variables remain visible warnings for the workflow zero-warning gate', async () => {
  const [result] = await eslint.lintText('import { readFile, writeFile as _writeFile } from "node:fs"; const unused = true; const _unused = true; export const ready = true;', {
    filePath: 'app/lint-fixture.ts',
  });
  const warnings = result.messages.filter((item) => item.ruleId === '@typescript-eslint/no-unused-vars');
  assert.equal(warnings.length, 4);
  assert.ok(warnings.every((item) => item.severity === 1));
});

test('production config reports actual sink, promise and any errors instead of an invalid-config exception', async () => {
  const [result] = await eslint.lintText('export async function load(element: HTMLElement, value: any) { element.innerHTML = value; await fetch("/api"); }', {
    filePath: 'app/lint-fixture.ts',
  });
  const ids = result.messages.map((item) => item.ruleId);
  assert.ok(ids.includes('zion-autonomous/no-inner-html'));
  assert.ok(ids.includes('zion-autonomous/require-async-try-catch'));
  assert.ok(ids.includes('@typescript-eslint/no-explicit-any'));
  assert.equal(result.fatalErrorCount, 0);
});

test('existing TypeScript test exception is retained', async () => {
  const config = await eslint.calculateConfigForFile(path.join(root, 'app/lint-fixture.test.ts'));
  assert.equal(config.rules['@typescript-eslint/no-explicit-any'][0], 0);
  assert.equal(config.rules['no-console'][0], 0);
  assert.equal(config.rules['zion-autonomous/no-inner-html'][0], 2);
});
