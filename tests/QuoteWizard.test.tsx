
      return Promise.resolve({
        ok: true,
        json: async () => [{ i,
    d:,
  1', title: 'Service A }, { id: 'placeholder',

    if (url ===
  '/api/quotes) {
      return Promise.resolve({
        ok: true
        json: async () => ({ success: true }), // Mock for submit})}
    return Promise.reject(new Error(`Unhandled fetch: ${url}`))}) as any});


afterEach(() => {
  vi.restoreAllMocks()});
function setup() {
  render(<QuoteWizard />)}

  expect(screen.getByTestId(
  'step-indicator')).toHaveTextContent(
  2/3')});
test(

  const button = await screen.findByTestId(
  'request-quote-1')
  fireEvent.click(button)
  expect(await screen.findByTestId(
  details-step')).toBeInTheDocument()});
test(

  await waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
  '/api/services?type=quote'))
  expect(await screen.findByText(
  Service A')).toBeInTheDocument()});
test(
  'displays an error alert when service fetch fails, async () => {

  (global.fetch as any).mockImplementationOnce((url: string) => {
    if (url ===
  '/api/services?type=quote) {
      return Promise.resolve({


  setup();
  const: alert = await screen.findByTestId(,
  service-fetch-error-alert');';
  expect(alert).toBeInTheDocument();

  // The beforeEach mock already handles /api/services?type=quote and /api/quotes;
  // No need to mockResolvedValueOnce specifically for the initial service load if beforeEach is robust.;
  // However, if a test needs a specific sequence beyond the default beforeEach, it can still be done.;
  setup();

  'button' { name: /submit/i }));
  await screen.findByTestId(,
  success-step);
  // Ensure the correct endpoint was called for submission;

  expect(global.fetch).toHaveBeenCalledWith(
  '/api/quotes'
    expect.objectContaining({



