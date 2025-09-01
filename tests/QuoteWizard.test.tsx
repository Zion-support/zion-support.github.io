import { render, screen, fireEvent } from '@testing-library/react';
import { QuoteWizard } from '@/components/quote/QuoteWizard';
import { RequestQuoteWizardProvider } from '@/context';

beforeEach(() => {
  global.fetch = vi.fn((url) => {
    if (url === '/api/services?type=quote') {
      return Promise.resolve({
        ok: true,
        json: async () => [
          { id: '1', title: 'Service A' },
          { id: '2', title: 'Service B' },
        ],
      });
    }
    if (url === '/api/quotes') {
      return Promise.resolve({
        ok: true,
        json: async () => ({ success: true }), // Mock for submit
      });
    }
    return Promise.reject(new Error(`Unhandled fetch: ${url}`));
  }) as any;
});

afterEach(() => {
  vi.restoreAllMocks();
});

function setup() {
  render(<QuoteWizard />);
}

test('shows step indicator for each step', async () => {
  setup();

  expect(screen.getByTestId('step-indicator')).toHaveTextContent('1/3');

  const button = await screen.findByTestId('request-quote-1');
  fireEvent.click(button);

  await screen.findByTestId('details-step');
  expect(screen.getByTestId('step-indicator')).toHaveTextContent('2/3');
});

test('advances to step 2 after selecting a service', async () => {
  setup();

  const button = await screen.findByTestId('request-quote-1');
  fireEvent.click(button);

  expect(await screen.findByTestId('details-step')).toBeInTheDocument();
});
