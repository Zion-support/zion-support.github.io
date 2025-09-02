import React from 'react';
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Privacy from './Privacy';

describe('Privacy', () => {it('renders without crashing', () => {
    render(<Privacy />);
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  });

  it('displays expected content', () => {render(<Privacy />);
    // Add more specific tests here
  });
});
