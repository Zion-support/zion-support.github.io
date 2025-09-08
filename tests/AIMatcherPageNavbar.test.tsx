<<<<<<< HEAD
<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppLayout } from '../src/layout/AppLayout';
import { AIMatcherPage } from '../src/pages/AIMatcherPage';

test('AIMatcherPage renders correctly', () => {
  render(
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
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
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppLayout } from '../src/layout/AppLayout';
import { AIMatcherPage } from '../src/pages/AIMatcherPage';

test('AIMatcherPage renders correctly', () => {
  render(
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
    <MemoryRouter>
      <AppLayout>
        <AIMatcherPage />
      </AppLayout>
    </MemoryRouter>
<<<<<<< HEAD
<<<<<<< HEAD
  );

  expect(screen.getByText('AI Matcher')).toBeInTheDocument();
});
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD

  )
  expect(container.querySelectorAll(


=======
  );

  expect(screen.getByText('AI Matcher')).toBeInTheDocument();
});
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
  );

  expect(screen.getByText('AI Matcher')).toBeInTheDocument();
});
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
