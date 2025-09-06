import React from 'react';
<<<<<<< HEAD
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
}
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358

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
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
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
}
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
