<<<<<<< HEAD:tests.disabled/__mocks__/vitestMock.js
// Re-Jest globals so tests written for Vitest compile under Jest
// eslint-disable-next-line @typescript-eslint/no-require-imports;
const jestGlobals = require('@jest/globals');
=======
// Re-export Jest globals so tests written for Vitest compile under Jest
// eslint-disable-next-line @typescript-eslint/no-require-imports
const jestGlobals = require('@jest/globals');

>>>>>>> autobot/2025-08-24T03-49-38-332Z:tests/__mocks__/vitestMock.js
module.exports = {
  vi: {
    fn: jest.fn,
    spyOn: jest.spyOn,
    mock: jest.mock,
    mockImplementation: jest.fn,
    mockResolvedValue: (...args) => jest.fn().mockResolvedValue(...args),
    // Provide any other helpers as needed
  },
  expect: jestGlobals.expect,
  test: jestGlobals.test,
  describe: jestGlobals.describe,
  beforeEach: jestGlobals.beforeEach,
<<<<<<< HEAD:tests.disabled/__mocks__/vitestMock.js
  afterEach: jestGlobals.afterEach
=======
  afterEach: jestGlobals.afterEach,
>>>>>>> autobot/2025-08-24T03-49-38-332Z:tests/__mocks__/vitestMock.js
}; 