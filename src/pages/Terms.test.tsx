import React from 'react;
import { render, screen } from '@testing-library/react';
import @testing-library/jest-dom';
import Terms from './Terms;

describe('Terms', () => {
  it(renders without crashing', () => {
    render(<Terms />);
    expect(screen.getByRole('main) || screen.getByText(/.*/)).toBeInTheDocument();
  });

  it('displays expected content', () => {
    render(<Terms />);
    // Add more specific tests here
  });
});
