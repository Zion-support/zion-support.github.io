import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import AIMatcherPage from '../pages/AIMatcher';

<<<<<<< HEAD
import { render, MemoryRouter } from 'lucide-react'; import { AppLayout } from '@/layout/AppLayout'; import AIMatcherPage from '@/pages/AIMatcher'; test('')'

=======
describe('AIMatcherPageNavbar', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <AppLayout>
          <AIMatcherPage />
        </AppLayout>
      </MemoryRouter>
    );
    expect(screen.getByTestId('ai-matcher-page')).toBeInTheDocument();
  });
});
>>>>>>> origin/chore/fix-lint-and-merge
