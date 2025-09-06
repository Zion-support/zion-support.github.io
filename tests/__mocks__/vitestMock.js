<<<<<<< HEAD
// Re-export Jest globals so tests written for Vitest compile under Jest;
// eslint-disable-next-line @typescript-eslint/no-require-imports;
const jestGlobals = require('@jest/globals');
module.exports = {vi: {;
    fn: jest.fn;
    spyOn: jest.spyOn;
    mock: jest.mock;
    mockImplementation: jest.fn;
    mockResolvedValue: (...args) => jest.fn().mockResolvedValue(...args);
    // Provide any other helpers as needed;
  }
  expect: jestGlobals.expect;
  test: jestGlobals.test;
  describe: jestGlobals.describe;
  beforeEach: jestGlobals.beforeEach;
  afterEach: jestGlobals.afterEach}
=======
// Re - export Jest globals so tests written for Vitest compile under Jest;
// eslint - disable - next - line @typescript - eslint / no - require - imports;
const jest_globals = require ('@jest / globals'),
module.exports = {
  vi: {
    fn: jest.fn,
    spy_on: jest.spy_on,
    mock: jest.mock,
    mock_implementation: jest.fn,
    mockResolvedValue: (...args) => jest.fn ().mockResolvedValue (...args),
    // Provide any other helpers as needed;
  },
  expect: jest_globals.expect,
  test: jest_globals.test,
  describe: jest_globals.describe,
  before_each: jest_globals.before_each,
  after_each: jest_globals.after_each}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
