import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Equipment from './Equipment';
'
describe('Equipment', () => {'
  it('renders without crashing', () => {
    render(<Equipment />);
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  });
'
  it('displays expected content', () => {
    render(<Equipment />);
    // Add more specific tests here
  });
});
'