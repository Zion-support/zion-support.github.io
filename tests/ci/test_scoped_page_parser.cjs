'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');
const { createRequire } = require('node:module');
const ts = require('typescript');
const react = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const root = path.resolve(__dirname, '../..');
const pages = ['app/ai-business-advisor/page.tsx', 'app/ai-experiences/page.tsx', 'app/ai-experiments/page.tsx',
  'app/search/page.tsx', 'app/search/layout.tsx', 'app/services-agritech-page.tsx', 'app/services-ai-page.tsx',
  'app/zion-ai-email-marketing-pro/page.tsx'];
function source(file) {
  return ts.createSourceFile(file, fs.readFileSync(path.join(root, file), 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
}
function nodes(tree, predicate) {
  const matches = [];
  function visit(node) {
    if (predicate(node)) { matches.push(node); }
    ts.forEachChild(node, visit);
  }
  visit(tree);
  return matches;
}
function compile(text, file) {
  const result = ts.transpileModule(text, { fileName: file, reportDiagnostics: true,
    compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, esModuleInterop: true } });
  assert.deepEqual(result.diagnostics, []);
  const compiled = { exports: {} };
  const execute = new vm.Script('(function(require,module,exports){' + result.outputText + '\n})', { filename: file }).runInThisContext();
  const resolvedRequire = createRequire(path.join(root, file));
  execute(name => name === '@/data/servicesData' ? load('app/data/servicesData.ts') : resolvedRequire(name), compiled, compiled.exports);
  return compiled.exports;
}
function load(file) { return compile(fs.readFileSync(path.join(root, file), 'utf8'), file); }
for (const file of pages) {
  test(file + ' parses and transpiles without recovery', () => {
    assert.deepEqual(source(file).parseDiagnostics.map(diagnostic => diagnostic.code), []);
    const result = ts.transpileModule(fs.readFileSync(path.join(root, file), 'utf8'), { fileName: file, reportDiagnostics: true,
      compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS } });
    assert.deepEqual(result.diagnostics, []);
  });
}
for (const slug of ['ai-business-advisor', 'ai-experiences', 'ai-experiments']) {
  test(slug + ' retains metadata apostrophes and renders', () => {
    const page = load('app/' + slug + '/page.tsx');
    assert(page.metadata.description.includes("Zion's"));
    assert.equal(page.metadata.openGraph.description, page.metadata.description);
    assert.equal(page.metadata.twitter.description, page.metadata.description);
    assert(renderToStaticMarkup(react.createElement(page.default)).includes('<h1'));
  });
}
for (const [slug, href] of [['agritech', '/services/agritech-irrigation-optimization'], ['ai', '/services/ai-credit-risk-scoring']]) {
  test(slug + ' fragment renders both retained cards with real Link', () => {
    const page = load('app/services-' + slug + '-page.tsx');
    const html = renderToStaticMarkup(react.createElement(page.default));
    assert(html.startsWith('<div class="group '), 'Retain main branch fragment layout');
    assert.equal((html.match(/<div\b/g) || []).length, 2, 'Render exactly the two original cards');
    assert(!html.includes('<main'), 'Do not reintroduce a nested main landmark');
    assert.equal(html.split('href="' + href + '"').length, 3);
    assert.equal(html.split('Short description pending').length, 3);
  });
}
test('search keeps client behavior and places metadata only in its server layout', () => {
  const page = source('app/search/page.tsx');
  assert(page.statements.some(node => ts.isExpressionStatement(node) && node.expression.text === 'use client'));
  assert.equal(nodes(page, node => ts.isVariableDeclaration(node) && node.name.getText(page) === 'metadata').length, 0);
  const layout = source('app/search/layout.tsx');
  assert(!layout.statements.some(node => ts.isExpressionStatement(node) && node.expression.text === 'use client'));
  assert.equal(nodes(layout, node => ts.isVariableDeclaration(node) && node.name.getText(layout) === 'metadata').length, 1);
  const loaded = load('app/search/layout.tsx');
  assert.equal(loaded.metadata.title, 'Search AI & IT Services | Zion Tech Group');
  assert.equal(loaded.metadata.alternates.canonical, '/search/');
});
test('actual industry expression renders both spans or neither', () => {
  const page = source('app/search/page.tsx');
  const conditions = nodes(page, node => ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken && node.left.getText(page) === 'service.industry');
  assert.equal(conditions.length, 1);
  const compiled = compile('export default function Industry({service}) { return <div>{' + conditions[0].getText(page) + '}</div>; }', 'industry-fixture.tsx');
  const render = industry => renderToStaticMarkup(react.createElement(compiled.default, { service: { industry } }));
  assert.equal(render('Healthcare'), '<div><span class="text-slate-500">•</span><span class="text-slate-500">Healthcare</span></div>');
  assert.equal(render(undefined), '<div></div>');
  assert.equal(render(''), '<div></div>');
});

test('search renders with the current real catalog and only literal JSON-LD data', () => {
  const page = source('app/search/page.tsx');
  const scripts = nodes(page, node => ts.isCallExpression(node) && node.expression.getText(page) === 'JSON.stringify');
  assert.equal(scripts.length, 1);
  function literal(value) {
    if (ts.isStringLiteral(value)) {return;}
    assert(ts.isObjectLiteralExpression(value));
    for (const property of value.properties) {
      assert(ts.isPropertyAssignment(property));
      assert(ts.isStringLiteral(property.name));
      literal(property.initializer);
    }
  }
  literal(scripts[0].arguments[0]);
  const loaded = load('app/search/page.tsx');
  const html = renderToStaticMarkup(react.createElement(loaded.default));
  assert(html.includes('Find Your Perfect AI Solution'));
  assert(html.includes('application/ld+json'));
  assert(html.includes('CollectionPage'));
});
