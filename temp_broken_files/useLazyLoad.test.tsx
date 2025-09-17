import { renderHook, act } from '@testing-library/react';
import { render } from '@testing-library/react';
import React from 'react';
import { useLazyLoad } from '../useLazyLoad';

// Mock IntersectionObserver
const mockObserve = jest.fn();
const mockUnobserve = jest.fn();
const mockDisconnect = jest.fn();

let mockCallback: (entries: IntersectionObserverEntry[]) => void;

const mockIntersectionObserver = jest.fn().mockImplementation((callback, options) => {
  mockCallback = callback;
  return {
    observe: mockObserve,
    unobserve: mockUnobserve,
    disconnect: mockDisconnect,
  };
});

// Mock global IntersectionObserver
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: mockIntersectionObserver,
});

// Test component that uses the hook
const TestComponent: React.FC<{ options?: any }> = ({ options }) => {
  const { elementRef, isVisible } = useLazyLoad(options);
  return <div ref={elementRef} data-testid="test-element">{isVisible ? 'Visible' : 'Hidden'}</div>;
};

describe('useLazyLoad', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with isVisible false', () => {
    const { result } = renderHook(() => useLazyLoad());
    
    expect(result.current.isVisible).toBe(false);
    expect(result.current.elementRef).toBeDefined();
  });

  it('should use default options', () => {
    render(<TestComponent />);
    
    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );
  });

  it('should use custom options', () => {
    const options = {
      threshold: 0.5,
      rootMargin: '100px',
      triggerOnce: false
    };
    
    render(<TestComponent options={options} />);
    
    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      {
        threshold: 0.5,
        rootMargin: '100px'
      }
    );
  });

  it('should handle intersection callback', () => {
    const { getByTestId } = render(<TestComponent />);
    
    // Simulate intersection
    act(() => {
      mockCallback([{ isIntersecting: true } as IntersectionObserverEntry]);
    });
    
    expect(getByTestId('test-element')).toHaveTextContent('Visible');
  });

  it('should handle non-intersection callback', () => {
    const { getByTestId } = render(<TestComponent options={{ triggerOnce: false }} />);
    
    // Simulate intersection
    act(() => {
      mockCallback([{ isIntersecting: true } as IntersectionObserverEntry]);
    });
    
    expect(getByTestId('test-element')).toHaveTextContent('Visible');
    
    // Simulate non-intersection
    act(() => {
      mockCallback([{ isIntersecting: false } as IntersectionObserverEntry]);
    });
    
    expect(getByTestId('test-element')).toHaveTextContent('Hidden');
  });

  it('should maintain visibility when triggerOnce is true', () => {
    const { getByTestId } = render(<TestComponent options={{ triggerOnce: true }} />);
    
    // Simulate intersection
    act(() => {
      mockCallback([{ isIntersecting: true } as IntersectionObserverEntry]);
    });
    
    expect(getByTestId('test-element')).toHaveTextContent('Visible');
    
    // Simulate non-intersection - should still be visible
    act(() => {
      mockCallback([{ isIntersecting: false } as IntersectionObserverEntry]);
    });
    
    expect(getByTestId('test-element')).toHaveTextContent('Visible');
  });
});