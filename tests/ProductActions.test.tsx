<<<<<<< HEAD
import { render, screen, fireEvent, waitFor } from '@testing-library/react',
import '@testing-library/jest-dom',
import { describe, it, expect, vi } from 'vitest',
import { ProductActions } from '@/components/ProductActions',
function setup() {
  const addToCart = vi.fn().mockResolvedValue(undefined),
  render(<ProductActions productId="1" addToCart={addToCart} />),
  const button = screen.getByRole('button', { name: /add to cart/i }),
  return { addToCart, button }
}

describe('ProductActions', () => {
  it('resets label after mutation success', async () => {
    vi.useFakeTimers(),
    const { addToCart, button } = setup(),
=======
import '@testing-library/jest-dom';

function setup() {_const _addToCart = vi.fn().mockResolvedValue(undefined);
  render(<ProductActions productId="1" addToCart={addToCart} />);
  const _button = screen.getByRole('button', {_name: /add to cart/i});
  return {_addToCart, _button};
}

describe(_'ProductActions', _() => {_it(_'resets label after mutation success', _async () => {
    vi.useFakeTimers();
    const { addToCart, _button} = setup();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    fireEvent.click(button),

<<<<<<< HEAD
    await waitFor(() => expect(addToCart).toHaveBeenCalled()),
    
    // Wait for the "Added!" status to appear
    await waitFor(() => {
      expect(button).toHaveTextContent('Added!')
    }),
=======
    await waitFor__(() => expect(addToCart).toHaveBeenCalled());
    
    // Wait for the "Added!" status to appear
    await waitFor__(() => {_expect(button).toHaveTextContent('Added!');});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    vi.advanceTimersByTime(1500),
    
    // Wait for the status to reset
<<<<<<< HEAD
    await waitFor(() => {
      expect(button).toHaveTextContent('Add to Cart')
    }),
=======
    await waitFor__(() => {_expect(button).toHaveTextContent('Add to Cart');});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    vi.useRealTimers()
  })
}),
