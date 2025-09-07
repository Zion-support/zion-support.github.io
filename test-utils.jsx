// Test utilities for React components
export const renderWithProviders = (ui, _options = {}) => {
  // Mock implementation for testing
  return {
    container: document.createElement('div'),
    rerender: () => {},
    unmount: () => {}
  };
};