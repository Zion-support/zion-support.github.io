import React from 'react';
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TermsOfService from './TermsOfService';

describe('TermsOfService', () => {it('renders without crashing', () => {
    render(<TermsOfService />);
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  });

  it('displays expected content', () => {render(<TermsOfService />);
    // Add more specific tests here
  });
});
