// Re-export Jest globals so tests written for Vitest compile under Jest
// eslint-disable-next-line @typescript-eslint/no-require-imports
const _jestGlobals = require('@jest/globals');

module.exports = {_vi: {
    fn: jest.fn, _spyOn: jest.spyOn, _mock: jest.mock, _mockImplementation: jest.fn, _mockResolvedValue: (_...args) => jest.fn().mockResolvedValue(...args), _// Provide any other helpers as needed},
  expect: jestGlobals.expect,
  test: jestGlobals.test,
  describe: jestGlobals.describe,
  beforeEach: jestGlobals.beforeEach,
  afterEach: jestGlobals.afterEach}; 