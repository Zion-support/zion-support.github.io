<<<<<<< HEAD
<<<<<<< HEAD


test('

=======
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppLayout } from '../src/layout/AppLayout';
import { AIMatcherPage } from '../src/pages/AIMatcherPage';

test('AIMatcherPage renders correctly', () => {
  render(
>>>>>>> origin/main
=======
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppLayout } from '../src/layout/AppLayout';
import { AIMatcherPage } from '../src/pages/AIMatcherPage';

test('AIMatcherPage renders correctly', () => {
  render(
>>>>>>> origin/main
    <MemoryRouter>
      <AppLayout>
        <AIMatcherPage />
      </AppLayout>
    </MemoryRouter>
<<<<<<< HEAD
<<<<<<< HEAD

  )
  expect(container.querySelectorAll(


=======
  );

  expect(screen.getByText('AI Matcher')).toBeInTheDocument();
});
>>>>>>> origin/main
=======
  );

  expect(screen.getByText('AI Matcher')).toBeInTheDocument();
});
>>>>>>> origin/main
