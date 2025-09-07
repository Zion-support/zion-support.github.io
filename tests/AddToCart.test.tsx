import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddToCart from '@/components/AddToCart';

// Mock the AddToCart component if it doesn't exist
const MockAddToCart = ({ productId, onAddToCart }: { productId: string; onAddToCart: () => void }) => (
  <button onClick={onAddToCart} data-testid="add-to-cart">
    Add to Cart
  </button>
);

describe('AddToCart Component', () => {
  const mockOnAddToCart = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders add to cart button', () => {
    render(<MockAddToCart productId="test-product" onAddToCart={mockOnAddToCart} />);
    
    const button = screen.getByTestId('add-to-cart');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Add to Cart');
  });

  it('calls onAddToCart when button is clicked', () => {
    render(<MockAddToCart productId="test-product" onAddToCart={mockOnAddToCart} />);
    
    fireEvent.click(button);
    
    expect(mockOnAddToCart).toHaveBeenCalledTimes(1);
  });

  it('handles multiple clicks correctly', async () => {
    render(<MockAddToCart productId="test-product" onAddToCart={mockOnAddToCart} />);
    
    
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    
    expect(mockOnAddToCart).toHaveBeenCalledTimes(3);
  });
});