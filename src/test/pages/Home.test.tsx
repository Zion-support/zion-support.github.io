import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Home from '../../pages/Home';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Home Page', () => {
  it('renders hero section', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
    expect(screen.getByText(/Empowering businesses with cutting-edge technology/)).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('renders features section', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('Why Choose Zion Tech Group?')).toBeInTheDocument();
    expect(screen.getByText('Lightning Fast')).toBeInTheDocument();
    expect(screen.getByText('Secure & Reliable')).toBeInTheDocument();
    expect(screen.getByText('Team Collaboration')).toBeInTheDocument();
  });

  it('renders all feature cards', () => {
    renderWithRouter(<Home />);
    
    const features = [
      'Lightning Fast',
      'Secure & Reliable', 
      'Team Collaboration',
      'Developer Friendly',
      'Global Scale'
    ];

    features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('renders CTA section', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('Ready to Transform Your Business?')).toBeInTheDocument();
    expect(screen.getByText('Start Your Journey')).toBeInTheDocument();
  });

  it('has proper heading hierarchy', () => {
    renderWithRouter(<Home />);
    
    const mainHeading = screen.getByRole('heading', { level: 1 });
    expect(mainHeading).toHaveTextContent('Welcome to Zion Tech Group');
    
    const sectionHeadings = screen.getAllByRole('heading', { level: 2 });
    expect(sectionHeadings).toHaveLength(2);
  });
});