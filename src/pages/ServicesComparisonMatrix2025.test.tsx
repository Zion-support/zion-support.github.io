import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ServicesComparisonMatrix2025 from './ServicesComparisonMatrix2025';

describe('ServicesComparisonMatrix2025', () => {
  it('renders without crashing', () => {
    render(<ServicesComparisonMatrix2025 />);
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  });

  it('displays expected content', () => {
    render(<ServicesComparisonMatrix2025 />);
    // Add more specific tests here
  });
});
