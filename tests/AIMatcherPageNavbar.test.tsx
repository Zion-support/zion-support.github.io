import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import AIMatcherPage from '@/pages/AIMatcherPage';

test('renders AI matcher page with navbar', () => {
  render(
    <MemoryRouter>
      <AppLayout>
        <AIMatcherPage />
      </AppLayout>
    </MemoryRouter>
  );

  expect(screen.getByRole('navigation')).toBeInTheDocument();
});