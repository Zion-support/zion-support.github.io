



  'button text restores after addToCart completes', async () => {
  const onAdd = vi.fn();
  render(<ProductActions onAddToCart={onAdd} />);
  const button = screen.getByRole('

  expect(onAdd).toHaveBeenCalled()
  expect(button).toHaveTextContent(/added!/i)


