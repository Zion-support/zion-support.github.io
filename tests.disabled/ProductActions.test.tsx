<<<<<<< HEAD:tests.disabled/ProductActions.test.tsx
import { render, screen, fireEvent, waitFor } from @testing-library/react';import { describe, it, expect, vi } from vitest';import { ProductActions } from @/components/ProductActions';;
function setup() {
  const addToCart = vi.fn().mockResolvedValue(undefined);
  render(<ProductActions productId="1" addToCart={addToCart} />);"  const button = screen.getByRole('button', { name: /add to cart/i });  return { addToCart, button };
}

describe('ProductActions', () => {'  it('resets label after mutation success', async () => {'    vi.useFakeTimers();
=======
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { ProductActions } from '@/components/ProductActions';

function setup() {
  const addToCart = vi.fn().mockResolvedValue(undefined);
  render(<ProductActions productId="1" addToCart={addToCart} />);
  const button = screen.getByRole('button', { name: /add to cart/i });
  return { addToCart, button };
}

describe('ProductActions', () => {
  it('resets label after mutation success', async () => {
    vi.useFakeTimers();
>>>>>>> autobot/2025-08-24T03-49-38-332Z:tests/ProductActions.test.tsx
    const { addToCart, button } = setup();

    fireEvent.click(button);

    await waitFor(() => expect(addToCart).toHaveBeenCalled());
<<<<<<< HEAD:tests.disabled/ProductActions.test.tsx
    expect(button).toHaveTextContent('Added!');
    vi.advanceTimersByTime(1500);
    expect(button).toHaveTextContent('Add to Cart');    vi.useRealTimers();
=======
    
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
>>>>>>> autobot/2025-08-24T03-49-38-332Z:tests/ProductActions.test.tsx
  });
});
