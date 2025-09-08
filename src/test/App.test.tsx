import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from '../App';

// Mock the router for testing
const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('App Component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<App />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });

  it('renders header with navigation', () => {
    renderWithRouter(<App />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders footer', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/© \d{4} Zion Tech Group/)).toBeInTheDocument();
  });

  it('renders home page by default', () => {
    renderWithRouter(<App />);
    expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
  });
});