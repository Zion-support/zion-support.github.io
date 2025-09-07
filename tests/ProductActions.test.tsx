import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { ProductActions } from '@/components/ProductActions';
function setup() {
  const addToCart = vi.fn().mockResolvedValue($2);
  render($2);
  const button = screen.getByRole($2);
  return { addToCart, button }
}

describe('ProductActions', () => {
  it('resets label after mutation success', async () => {
    vi.useFakeTimers($2);
    const { addToCart, button } = setup($2);
    fireEvent.click($2);
    await waitFor(() => expect(addToCart).toHaveBeenCalled()),
    
    // Wait for the "Added!" status to appear
    await waitFor(() => {
      expect(button).toHaveTextContent('Added!')
    }),

    vi.advanceTimersByTime($2);
    // Wait for the status to reset
    await waitFor(() => {
      expect(button).toHaveTextContent('Add to Cart')
    }),
    
    vi.useRealTimers()
  })
}),
