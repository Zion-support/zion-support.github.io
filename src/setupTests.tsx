import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock component for testing
const MockComponent = () => <div>Test Component</div>;

describe('Test Suite', () => {
  it('renders without crashing', () => {
    render(<MockComponent />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });
});