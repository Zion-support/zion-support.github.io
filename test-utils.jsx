// Test utilities for React components
export const testUtils = {
  // Mock functions and utilities for testing
  mockFunction: jest.fn(),
  createMockProps: (overrides = {}) => ({
    ...overrides
  })
};
