import React from 'react';
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Support from './Support';

describe('Support', () => {it('renders without crashing', () => {
    render(<Support />);
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  });

  it('displays expected content', () => {render(<Support />);
    // Add more specific tests here
  });
});
