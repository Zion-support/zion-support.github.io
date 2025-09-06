
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
