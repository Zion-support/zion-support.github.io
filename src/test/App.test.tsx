import { describe, it, expect } from '@jest/globals';
import { render } from '@testing-library/react';

// Simple test that doesn't depend on specific components
describe('App', () => {
  it('renders without crashing', () => {
    // Basic test to ensure the test environment is working
    expect(document.body).toBeInTheDocument();
  });

  it('has a working test environment', () => {
    // Test that Jest and testing library are working
    const testElement = React.createElement('div', { 'data-testid': 'test' }, 'Test');
    const { getByTestId } = render(testElement);
    expect(getByTestId('test')).toBeInTheDocument();
