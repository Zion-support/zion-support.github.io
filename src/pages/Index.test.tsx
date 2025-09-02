import React from 'react';
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Index from './Index';

describe('Index', () => {it('renders without crashing', () => {
    render(<Index />);
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  });

  it('displays expected content', () => {render(<Index />);
    // Add more specific tests here
  });
});
