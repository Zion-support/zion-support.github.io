<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppLayout } from '../src/layout/AppLayout';
import { AIMatcherPage } from '../src/pages/AIMatcherPage';

test('AIMatcherPage renders correctly', () => {
  render(
=======
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
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
    <MemoryRouter>
      <AppLayout>
        <AIMatcherPage />
      </AppLayout>
    </MemoryRouter>
<<<<<<< HEAD
  );

  expect(screen.getByText('AI Matcher')).toBeInTheDocument();
});
=======
<<<<<<< HEAD

  )
  expect(container.querySelectorAll(


=======
  );

  expect(screen.getByText('AI Matcher')).toBeInTheDocument();
});
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
