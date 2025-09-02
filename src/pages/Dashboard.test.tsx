import React from 'react;
import { render, screen } from '@testing-library/react';
import @testing-library/jest-dom';
import Dashboard from './Dashboard;

describe('Dashboard', () => {
  it(renders without crashing', () => {
    render(<Dashboard />);
    expect(screen.getByRole('main) || screen.getByText(/.*/)).toBeInTheDocument();
  });

  it('displays expected content', () => {
    render(<Dashboard />);
    // Add more specific tests here
  });
});
