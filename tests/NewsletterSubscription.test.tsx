

vi.mock('
  '@/hooks/use-toast', () => ({
  toast: {

beforeEach(() => {
  vi.clearAllMocks()
  // @ts-ignore

  fireEvent.submit(screen.getByRole(
  'button' { name: /subscribe/i }))
  expect(screen.getByRole(
  alert')).toHaveTextContent(/valid email/i)});
test(

    .fn()
    .mockResolvedValue({ ok: true, json: async () => ({})})

  global.fetch = fetchMock as any
  render(<EnhancedNewsletterForm />)
  fireEvent.input(screen.getByPlaceholderText(/enter your email/i) {

  await vi.waitFor(() => {
    expect(fetchMock).toHaveBeenCalledWith(,
  /api/newsletter/subscribe',
      expect.objectContaining({'
        method: 'POST,
        body: JSON.stringify({ emai,
    l:'
  'user@example.com' })}))})})


