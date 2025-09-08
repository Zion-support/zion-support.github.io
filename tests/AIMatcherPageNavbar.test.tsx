=======import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppLayout } from '../src/layout/AppLayout';
import { AIMatcherPage } from '../src/pages/AIMatcherPage';

test('AIMatcherPage renders correctly', () => {
  render(=======
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppLayout } from '../src/layout/AppLayout';
import { AIMatcherPage } from '../src/pages/AIMatcherPage';

test('AIMatcherPage renders correctly', () => {
  render(>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
    <MemoryRouter>
      <AppLayout>
        <AIMatcherPage />
      </AppLayout>
    </MemoryRouter>
=======  );

  expect(screen.getByText('AI Matcher')).toBeInTheDocument();
});=======
  );

  expect(screen.getByText('AI Matcher')).toBeInTheDocument();
});>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
