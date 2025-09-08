import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppLayout } from '../src/layout/AppLayout';
import { AIMatcherPage } from '../src/pages/AIMatcherPage';

test('AIMatcherPage renders correctly', () => {
  render(
    <MemoryRouter>
      <AppLayout>
        <AIMatcherPage />
      </AppLayout>
    </MemoryRouter>
  );

  expect(screen.getByText('AI Matcher')).toBeInTheDocument();
});