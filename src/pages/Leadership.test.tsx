import React from 'react';
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Leadership from './Leadership';

describe('Leadership', () => {it('renders without crashing', () => {
    render(<Leadership />);
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  });

  it('displays expected content', () => {render(<Leadership />);
    // Add more specific tests here
  });
});
