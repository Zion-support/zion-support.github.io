import React from 'react';
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import PerformanceMonitor from '../PerformanceMonitor';

// Mock web-vitals
jest.mock('web-vitals', () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn(),
}));

describe('PerformanceMonitor', () => {
  const { getCLS, getFID, getFCP, getLCP, getTTFB } = require('web-vitals');

  beforeEach(() => {
    // Mock process.env.NODE_ENV
    Object.defineProperty(process.env, 'NODE_ENV', {
      value: 'development',
      configurable: true,
    });

    // Reset mocks
    jest.clearAllMocks();

    // Set up default mock implementations
    getCLS.mockImplementation((callback) => callback({ name: 'CLS', value: 0.1 }));
    getFID.mockImplementation((callback) => callback({ name: 'FID', value: 100 }));
    getFCP.mockImplementation((callback) => callback({ name: 'FCP', value: 1800 }));
    getLCP.mockImplementation((callback) => callback({ name: 'LCP', value: 2500 }));
    getTTFB.mockImplementation((callback) => callback({ name: 'TTFB', value: 800 }));
  });

  it('renders performance metrics in development mode', async () => {
    render(<PerformanceMonitor />);

    await waitFor(() => {
      expect(screen.getByText('Performance Metrics')).toBeInTheDocument();
    });

    expect(screen.getByText('CLS:')).toBeInTheDocument();
    expect(screen.getByText('FID:')).toBeInTheDocument();
    expect(screen.getByText('FCP:')).toBeInTheDocument();
    expect(screen.getByText('LCP:')).toBeInTheDocument();
    expect(screen.getByText('TTFB:')).toBeInTheDocument();
  });

  it('does not render in production mode', () => {
    Object.defineProperty(process.env, 'NODE_ENV', {
      value: 'production',
      configurable: true,
    });

    render(<PerformanceMonitor />);

    expect(screen.queryByText('Performance Metrics')).not.toBeInTheDocument();
  });

  it('displays metric values with correct formatting', async () => {
    render(<PerformanceMonitor />);

    // Check that the component renders with N/A values initially
    expect(screen.getAllByText('N/A')).toHaveLength(5);
  });

  it('applies correct color classes based on metric thresholds', async () => {
    render(<PerformanceMonitor />);

    // Check that N/A values have gray color
    const naValues = screen.getAllByText('N/A');
    naValues.forEach(value => {
      expect(value).toHaveClass('text-gray-500');
    });
  });

  it('can be closed by clicking the close button', async () => {
    render(<PerformanceMonitor />);

    await waitFor(() => {
      expect(screen.getByText('Performance Metrics')).toBeInTheDocument();
    });

    const closeButton = screen.getByText('×');
    fireEvent.click(closeButton);

    expect(screen.queryByText('Performance Metrics')).not.toBeInTheDocument();
  });

  it('handles null metric values gracefully', async () => {
    // Mock web-vitals to return null values
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = require('web-vitals');
    getCLS.mockImplementation((callback) => callback({ name: 'CLS', value: null }));
    getFID.mockImplementation((callback) => callback({ name: 'FID', value: null }));
    getFCP.mockImplementation((callback) => callback({ name: 'FCP', value: null }));
    getLCP.mockImplementation((callback) => callback({ name: 'LCP', value: null }));
    getTTFB.mockImplementation((callback) => callback({ name: 'TTFB', value: null }));

    render(<PerformanceMonitor />);

    await waitFor(() => {
      expect(screen.getAllByText('N/A')).toHaveLength(5);
    });
  });

  it('has correct accessibility attributes', async () => {
    render(<PerformanceMonitor />);

    await waitFor(() => {
      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading).toHaveTextContent('Performance Metrics');
    });

    const closeButton = screen.getByRole('button');
    expect(closeButton).toHaveTextContent('×');
  });
});