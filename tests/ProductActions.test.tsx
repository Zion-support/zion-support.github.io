<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
interface ProductActions.testProps {
  // Add props here as needed
}
export default function ProductActions.test({ }: ProductActions.testProps) {
  return (
    <div>
      <h1>ProductActions.test</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
import React from 'react'
>>>>>>> cursor/automate-test-improve-and-merge-code-2480
