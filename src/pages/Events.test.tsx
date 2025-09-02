import React from 'react;
import { render, screen } from '@testing-library/react';
import @testing-library/jest-dom';
import Events from './Events;

describe('Events', () => {
  it(renders without crashing', () => {
    render(<Events />);
    expect(screen.getByRole('main) || screen.getByText(/.*/)).toBeInTheDocument();
  });

  it('displays expected content', () => {
    render(<Events />);
    // Add more specific tests here
  });
});
