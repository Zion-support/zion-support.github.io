'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');
const { createRequire } = require('node:module');
const ts = require('typescript');
const { JSDOM: domConstructor } = createRequire(require.resolve('jest-environment-jsdom'))('jsdom');
const file = path.resolve(__dirname, '../../app/search/page.tsx');
const source = fs.readFileSync(file, 'utf8');
const tree = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
function matching(predicate) {
  const found = [];
  function visit(node) {
    if (predicate(node)) { found.push(node); }
    ts.forEachChild(node, visit);
  }
  visit(tree);
  return found;
}
const scripts = matching(node => ts.isJsxElement(node) && node.openingElement.tagName.getText(tree) === 'script');
assert.equal(scripts.length, 1);
const script = scripts[0];
const calls = matching(node => ts.isCallExpression(node) && node.expression.getText(tree) === 'JSON.stringify');
assert.equal(calls.length, 1);
const dataNode = calls[0].arguments[0];
const scriptSource = script.getText(tree);
const offset = dataNode.getStart(tree) - script.getStart(tree);
const parameterized = scriptSource.slice(0, offset) + 'data' + scriptSource.slice(offset + dataNode.getWidth(tree));
function component(react, expression) {
  const result = ts.transpileModule('export default function Fixture({data}) { return ' + expression + '; }', {
    fileName: 'fixture.tsx', reportDiagnostics: true,
    compilerOptions: { jsx: ts.JsxEmit.React, module: ts.ModuleKind.CommonJS },
  });
  assert.deepEqual(result.diagnostics, []);
  const compiled = { exports: {} };
  const execute = new vm.Script('(function(React,module,exports){' + result.outputText + '\n})').runInThisContext();
  execute(react, compiled, compiled.exports);
  return compiled.exports.default;
}
const payloads = [
  'plain text', 'AI & IT <services> "quote" \'apostrophe\'',
  '</script><script>alert("unexpected")</script>',
  '</ScRiPt><img src=x onerror=alert(1)>',
  '<!--<script>double escape</script>-->',
  '</script\n><svg onload=alert(1)>',
  '\\u003c/script> literal slash\\', '\u2028\u2029',
  'emoji 🧠 and accents ação',
];
test('source uses text children, explicit less-than escaping, and no hydration suppression', () => {
  assert.deepEqual(tree.parseDiagnostics, []);
  assert(!source.includes('dangerouslySetInnerHTML'));
  assert(!source.includes('suppressHydrationWarning'));
  assert.equal(script.openingElement.attributes.properties.length, 1);
  const text = component(require('react'), scriptSource)({});
  assert.equal(text.type, 'script');
  assert.equal(text.props.type, 'application/ld+json');
  assert.equal(typeof text.props.children, 'string');
  const data = JSON.parse(text.props.children);
  assert.equal(data['@type'], 'CollectionPage');
  assert.equal(data['@context'], 'https://schema.org');
  assert.equal(data.mainEntity.potentialAction.target, 'https://ziontechgroup.com/search?q={search_term_string}');
});
for (const prefix of ['', 'next/dist/compiled/']) {
  const react = require(prefix + 'react');
  const server = require(prefix + 'react-dom/server');
  const client = require(prefix + 'react-dom/client');
  const fixture = component(react, parameterized);
  test(prefix + 'React serializes all adversarial values as one inert JSON script', () => {
    for (const value of payloads) {
      const data = { value, nested: { value } };
      const element = react.createElement(fixture, { data });
      const html = server.renderToString(element);
      const dom = new domConstructor('<div id="root">' + html + '</div>');
      try {
        const root = dom.window.document.getElementById('root');
        assert.equal(root.children.length, 1);
        assert.equal(root.querySelectorAll('script').length, 1);
        assert.equal(root.querySelectorAll('img,svg').length, 0);
        assert.equal(root.firstChild.type, 'application/ld+json');
        assert(!root.firstChild.textContent.includes('<'));
        assert.deepEqual(JSON.parse(root.firstChild.textContent), data);
      } finally { dom.window.close(); }
    }
  });
  test(prefix + 'React hydrates and updates script text without warnings or extra elements', async () => {
    const previous = Object.getOwnPropertyDescriptors(globalThis);
    const messages = [];
    const originalError = console.error;
    const originalWarn = console.warn;
    let dom;
    let root;
    try {
      const data = { value: payloads[2] };
      const element = react.createElement(fixture, { data });
      dom = new domConstructor('<div id="root">' + server.renderToString(element) + '</div>', { url: 'https://example.invalid/' });
      globalThis.window = dom.window;
      globalThis.document = dom.window.document;
      globalThis.IS_REACT_ACT_ENVIRONMENT = true;
      console.error = (...args) => messages.push(args);
      console.warn = (...args) => messages.push(args);
      const container = dom.window.document.getElementById('root');
      const originalScript = container.firstChild;
      await react.act(() => {
        root = client.hydrateRoot(container, element, { onRecoverableError: error => messages.push([error]) });
      });
      assert.equal(container.firstChild, originalScript);
      assert.deepEqual(JSON.parse(originalScript.textContent), data);
      for (const value of payloads) {
        await react.act(() => { root.render(react.createElement(fixture, { data: { value } })); });
        assert.equal(container.children.length, 1);
        assert.equal(container.firstChild, originalScript);
        assert.deepEqual(JSON.parse(container.firstChild.textContent), { value });
        assert(!container.firstChild.textContent.includes('<'));
      }
      await react.act(() => { root.unmount(); });
      root = null;
      assert.deepEqual(messages, []);
    } catch (error) {
      throw error;
    } finally {
      if (root) { await Promise.resolve(react.act(() => { root.unmount(); })).catch(() => {}); }
      console.error = originalError;
      console.warn = originalWarn;
      if (dom) { dom.window.close(); }
      for (const key of ['window', 'document', 'IS_REACT_ACT_ENVIRONMENT']) {
        if (previous[key]) { Object.defineProperty(globalThis, key, previous[key]); }
        else { delete globalThis[key]; }
      }
    }
  });
}
