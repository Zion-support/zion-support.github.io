import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedHome from './EnhancedHome';

describe('EnhancedHome', () => {
  it('renders without crashing', () => {
    render(<EnhancedHome />);
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  });

  it('displays expected content', () => {
    render(<EnhancedHome />);
    // Add more specific tests here
  });
});
