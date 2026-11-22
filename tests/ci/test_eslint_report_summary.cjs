'use strict';
const assert = require('node:assert/strict');
const test = require('node:test');
const { summarize } = require('../../scripts/checks/eslint-report-summary.cjs');
test('reads nested ESLint messages and does not publish source data', () => {
  const report = JSON.stringify([{ filePath: '/private/path', source: 'private content', messages: [{ severity: 2, message: 'private detail' }, { severity: 1 }] }]);
  const result = summarize(report, '1');
  assert.match(result, /1 error\(s\) and 1 warning/);
  assert.doesNotMatch(result, /private/);
});
test('empty successful report has zero counts', () => assert.match(summarize('[]', '0'), /0 error\(s\) and 0 warning/));
test('execution failures never infer lint success', () => {
  for (const status of ['2', '23', '127', '', undefined, 'invalid']) {assert.match(summarize('[]', status), /did not complete successfully/);}
});
test('invalid report fails honestly', () => {
  for (const report of ['', '{}', '[null]', '[{}]', '[{"messages":[{}]}]']) {assert.match(summarize(report, '1'), /missing or invalid/);}
});
test('nonzero without findings is not certified', () => assert.match(summarize('[]', '1'), /failure without diagnostic counts/));
