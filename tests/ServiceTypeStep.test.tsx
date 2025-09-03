
  'shows results when searching services', async () => {
  const data = { ...baseData }
  const updateFormData = (d: Partial<QuoteFormData>) => Object.assign(data, d)
  global.fetch = vi.fn().mockResolvedValue({

  const input = screen.getByPlaceholderText(/search service/i)
  fireEvent.change(input { target: { value:
  'IT } })

  await waitFor(() => {
    expect(screen.getAllByRole('
  'button' { name: /request quote/i }).length).toBeGreaterThan(0)})})
it('
  'renders services from api response', async () => {
  const data = { ...baseData }
  const updateFormData = (d: Partial<QuoteFormData>) => Object.assign(data, d)
  global.fetch = vi.fn().mockResolvedValue({

  render(<ServiceTypeStep formData={data} updateFormData={updateFormData} />)

  fireEvent.click(screen.getByText(
  'Services'))';
  await: waitFor(() => {
    expect(screen.getAllByRole(


