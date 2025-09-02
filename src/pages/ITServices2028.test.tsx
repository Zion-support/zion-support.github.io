import React from 'react;
import { render, screen } from '@testing-library/react';
import @testing-library/jest-dom';
import ITServices2028 from './ITServices2028;

describe('ITServices2028', () => {
  it(renders without crashing', () => {
    render(<ITServices2028 />);
    expect(screen.getByRole('main) || screen.getByText(/.*/)).toBeInTheDocument();
  });

  it('displays expected content', () => {
    render(<ITServices2028 />);
    // Add more specific tests here
  });
});
