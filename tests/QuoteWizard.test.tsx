import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { QuoteWizard } from '@/components/quote/QuoteWizard';
import { RequestQuoteWizardProvider } from '@/context';
import * as router from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: jest.fn(),
}));

jest.mock('@/hooks/use-toast', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

beforeEach(() => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => [
      { id: '1', title: 'Service A' },
      { id: '2', title: 'Service B' },
    ],
  }) as unknown as vi.Mock;
});

afterEach(() => {
  vi.resetAllMocks();
});

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



  expect(await screen.findByTestId('details-step')).toBeInTheDocument();
});

test('shows error message when fetch fails', async () => {
  (global.fetch as vi.Mock).mockRejectedValue(new Error('fail'));
  setup();
  expect(await screen.findByText(/service temporarily unavailable/i)).toBeInTheDocument();
});

// ensures loading indicator appears before data loads
// we check for spinner via class name on initial render
// fetch promise never resolves

test('shows loader while fetching', async () => {
  (global.fetch as vi.Mock).mockImplementation(() => new Promise(() => {}));
  const { container } = render(
    <RequestQuoteWizardProvider>
      <QuoteWizard />
    </RequestQuoteWizardProvider>
  );
  expect(container.querySelector('.animate-spin')).toBeInTheDocument();
});

test('shows error message when fetch fails', async () => {
  (global.fetch as jest.Mock).mockRejectedValue(new Error('fail'));
  setup();
  expect(await screen.findByText(/service temporarily unavailable/i)).toBeInTheDocument();
});

// ensures loading indicator appears before data loads
// we check for spinner via class name on initial render
// fetch promise never resolves

test('shows loader while fetching', async () => {
  (global.fetch as jest.Mock).mockImplementation(() => new Promise(() => {}));
  const { container } = render(
    <RequestQuoteWizardProvider>
      <QuoteWizard />
    </RequestQuoteWizardProvider>
  );
  expect(container.querySelector('.animate-spin')).toBeInTheDocument();
});

test('submits quote and navigates', async () => {
  const navigateMock = jest.fn();
  (router.useNavigate as jest.Mock).mockReturnValue(navigateMock);

  (global.fetch as jest.Mock)
    .mockResolvedValueOnce({
      ok: true,
      json: async () => [{ id: '1', title: 'Service A' }],
    })
    .mockResolvedValueOnce({ ok: true, json: async () => ({}) });

  setup();

  const card = await screen.findByTestId('service-card-1');
  fireEvent.click(card);
  fireEvent.click(screen.getByRole('button', { name: /continue/i }));

  fireEvent.change(screen.getByTestId('message-input'), { target: { value: 'hi' } });
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  await screen.findByTestId('success-step');

  expect(global.fetch).toHaveBeenCalledWith(
    '/api/quotes',
    expect.objectContaining({
      method: 'POST',
      body: JSON.stringify({ service_id: '1', user_message: 'hi' }),
    })
  );
  expect(toast.success).toHaveBeenCalled();
  expect(navigateMock).toHaveBeenCalledWith('/dashboard/quotes');
});

test('shows error message when fetch fails', async () => {
  (global.fetch as jest.Mock).mockRejectedValue(new Error('fail'));
  setup();
  expect(await screen.findByText(/service temporarily unavailable/i)).toBeInTheDocument();
});

// ensures loading indicator appears before data loads
// we check for spinner via class name on initial render
// fetch promise never resolves

test('shows loader while fetching', async () => {
  (global.fetch as jest.Mock).mockImplementation(() => new Promise(() => {}));
  const { container } = render(
    <RequestQuoteWizardProvider>
      <QuoteWizard />
    </RequestQuoteWizardProvider>
  );
  expect(container.querySelector('.animate-spin')).toBeInTheDocument();
});
