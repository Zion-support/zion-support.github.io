import React from 'react';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

interface ProductActionsProps {
  productId: string;
  addToCart: (productId: string) => Promise<void>;
}

function ProductActions({ productId, addToCart }: ProductActionsProps) {
  const [status, setStatus] = React.useState('Add to Cart');

  const handleAddToCart = async () => {
    setStatus('Adding...');
    try {
      await addToCart(productId);
      setStatus('Added!');
      setTimeout(() => setStatus('Add to Cart'), 1500);
    } catch (error) {
      setStatus('Error');
    }
  };

  return (
    <button onClick={handleAddToCart}>
      {status}
    </button>
  );
}
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { ProductActions } from '@/components/ProductActions';
function setup() {
  const addToCart = vi.fn().mockResolvedValue(undefined);
  render(<ProductActions productId='1' addToCart={addToCart} />);
  const button = screen.getByRole('button', { name: /add to cart/i });
  return { addToCart, button };

}








function setup() {
  const addToCart = vi.fn().mockResolvedValue(undefined);
  render(<ProductActions productId='1' addToCart={addToCart} />);
  const button = screen.getByRole('button', { name: /add to cart/i });
  return { addToCart, button };

describe('ProductActions', () => {
  it('resets label after mutation success', async () => {
    vi.useFakeTimers();
    const { addToCart, button } = setup();

    fireEvent.click(button);

    await waitFor(() => expect(addToCart).toHaveBeenCalled());

    // Wait for the "Added!" status to appear
    await waitFor(() => {
      expect(button).toHaveTextContent('Added!');
    });

    vi.advanceTimersByTime(1500);

    // Wait for the status to reset
    await waitFor(() => {
      expect(button).toHaveTextContent('Add to Cart');
    });

    vi.useRealTimers();
  });

});

