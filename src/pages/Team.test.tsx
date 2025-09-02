import React from 'react';
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Team from './Team';

describe('Team', () => {it('renders without crashing', () => {
    render(<Team />);
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  });

  it('displays expected content', () => {render(<Team />);
    // Add more specific tests here
  });
});
