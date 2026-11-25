'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const ts = require('typescript');

const root = process.env.ZION_SOURCE_ROOT || path.resolve(__dirname, '../..');
const files = [
  'src/app/page.tsx',
  'src/components/ai-agents/autonomous-innovation-engine.tsx',
  'src/components/ai-driven-growth-intelligence.tsx',
  'src/components/automated-testing-framework.tsx',
  'src/components/autonomous-learning-engine.tsx',
  'src/components/cognitive-emulation-layer.tsx',
  'src/components/continuous-code-evolution-system.tsx',
  'src/components/intelligent-api-gateway.tsx',
  'src/components/predictive-analytics-dashboard.tsx',
  'src/components/predictive-anomaly-detection-engine.tsx',
  'src/components/predictive-maintenance-engine.tsx',
  'src/components/quantum-hybrid-orchestrator.tsx',
];

function source(filename) {
  return ts.createSourceFile(filename, fs.readFileSync(path.join(root, filename), 'utf8'),
    ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
}

function nodes(tree, predicate) {
  const result = [];
  function visit(node) {
    if (predicate(node)) {
      result.push(node);
    }
    ts.forEachChild(node, visit);
  }
  visit(tree);
  return result;
}

function unwrap(node) {
  while (ts.isParenthesizedExpression(node)) {
    node = node.expression;
  }
  return node;
}

function tag(node) {
  return ts.isJsxElement(node) ? node.openingElement.tagName.getText() : '';
}

function mapCall(tree, receiver) {
  const matches = nodes(tree, node => ts.isCallExpression(node)
    && ts.isPropertyAccessExpression(node.expression)
    && node.expression.name.text === 'map'
    && node.expression.expression.getText() === receiver);
  assert.equal(matches.length, 1, `${receiver}.map must remain present exactly once`);
  return matches[0];
}

for (const filename of files) {
  test(`${filename}: complete TSX and default component export`, () => {
    const tree = source(filename);
    assert.deepEqual(tree.parseDiagnostics.map(item => ts.flattenDiagnosticMessageText(item.messageText, '\n')), []);
    const defaults = tree.statements.filter(node => ts.isFunctionDeclaration(node)
      && node.modifiers?.some(modifier => modifier.kind === ts.SyntaxKind.DefaultKeyword));
    assert.equal(defaults.length, 1);
    const returns = nodes(defaults[0], ts.isReturnStatement);
    assert.ok(returns.some(node => node.expression && ts.isJsxElement(unwrap(node.expression))),
      'component must retain its JSX return, rather than becoming an empty stub');
    const result = ts.transpileModule(tree.text, {
      fileName: filename,
      reportDiagnostics: true,
      compilerOptions: { jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 },
    });
    assert.deepEqual(result.diagnostics.filter(item => item.category === ts.DiagnosticCategory.Error), []);
  });
}

test('legacy homepage keeps the catalogue and showcase inside a single main landmark', () => {
  const tree = source(files[0]);
  const main = nodes(tree, node => tag(node) === 'main');
  assert.equal(main.length, 1);
  const catalogue = nodes(tree, node => tag(node) === 'section'
    && node.openingElement.attributes.properties.some(attribute => ts.isJsxAttribute(attribute)
      && attribute.name.getText() === 'id' && attribute.initializer?.text === 'all-services'));
  assert.equal(catalogue.length, 1);
  assert.equal(catalogue[0].parent, main[0]);
  assert.ok(main[0].children.some(child => tag(child) === 'section'
    && child.getText().includes('All AI-Powered Components Now Live')));
});

test('innovation recommendation retains both selection guards and its implementation action', () => {
  const tree = source(files[1]);
  const guards = nodes(tree, node => ts.isJsxExpression(node)
    && node.expression && ts.isBinaryExpression(node.expression)
    && node.expression.getText().includes("ideas.some(i => i.status === 'selected')")
    && node.expression.getText().includes('selectedIdeaId')
    && node.expression.getText().includes('markAsImplemented(selectedIdeaId!)'));
  assert.equal(guards.length, 1);
  assert.equal(guards[0].expression.operatorToken.kind, ts.SyntaxKind.AmpersandAmpersandToken);
  assert.equal(tag(unwrap(guards[0].expression.right)), 'div');
});

test('maintenance keeps the object-map/filter chain, per-system issue indicator and issue list items', () => {
  const tree = source('src/components/predictive-maintenance-engine.tsx');
  const predicted = nodes(tree, node => ts.isVariableDeclaration(node)
    && node.name.getText() === 'predictedFailures')[0];
  assert.ok(predicted);
  const filtered = predicted.initializer;
  assert.ok(ts.isCallExpression(filtered));
  assert.equal(filtered.expression.name.text, 'filter');
  const mapped = filtered.expression.expression;
  assert.ok(ts.isCallExpression(mapped));
  assert.equal(mapped.expression.name.text, 'map');
  assert.ok(ts.isObjectLiteralExpression(unwrap(mapped.arguments[0].body)));

  const systemCard = unwrap(mapCall(tree, 'systems').arguments[0].body);
  assert.equal(tag(systemCard), 'div');
  assert.ok(systemCard.children.some(node => ts.isJsxExpression(node)
    && node.expression && ts.isBinaryExpression(node.expression)
    && node.expression.getText().startsWith('issues.some(')
    && tag(unwrap(node.expression.right)) === 'div'));
  const issueItem = unwrap(mapCall(tree, 'issues').arguments[0].body);
  assert.equal(tag(issueItem), 'li');
  assert.equal(issueItem.closingElement.tagName.getText(), 'li');
  assert.ok(nodes(tree, node => ts.isJsxExpression(node) && node.expression
    && ts.isBinaryExpression(node.expression)
    && node.expression.getText().startsWith('issues.length > 0 &&')).length === 1);
});
