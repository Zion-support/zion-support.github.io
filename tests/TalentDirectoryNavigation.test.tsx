import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TalentDirectory from '@/pages/TalentDirectory';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
    mutations: { retry: false },
  },
});

test('navigates to talent details when card is clicked', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <TalentDirectory />
      </MemoryRouter>
    </QueryClientProvider>
  );

  const firstCard = await screen.findByText('Alexandra Chen');
  fireEvent.click(firstCard);
  expect(await screen.findByTestId('talent-details')).toHaveTextContent('Alexandra Chen');
});