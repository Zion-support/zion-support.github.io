import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';

describe('Navigation Integration', () => {
  it('should navigate between main routes', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    // Test navigation between main routes
    const homeLink = screen.getByText(/home/i);
    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');
  });
});