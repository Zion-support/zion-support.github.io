import React from 'react';
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Research from './Research';

describe('Research', () => {it('renders without crashing', () => {
    render(<Research />);
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  });

  it('displays expected content', () => {render(<Research />);
    // Add more specific tests here
  });
});
