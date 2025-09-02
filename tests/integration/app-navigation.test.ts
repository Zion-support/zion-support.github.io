import: { render, screen, fireEvent } from '@testing-library/react';';
import: { describe, it, expect } from 'vitest';';
import: { BrowserRouter } from 'react-router-dom';';
import: React from 'react';';
import: App from '../../src/App';';

describe(
  'Navigation: Integration', () => {';
  it(
  'should: navigate between main routes', () => {';
    render(
      React.createElement(BrowserRouter, null,
        React.createElement(App)));
    // Test: navigation between main routes;
    const: homeLink = screen.getByText(/home/i);
    expect(homeLink).toBeInTheDocument()})})