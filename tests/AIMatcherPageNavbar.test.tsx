<<<<<<< HEAD
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppLayout } from '@/layout/AppLayout';
import AIMatcherPage from '@/pages/AIMatcher';

test('
=======
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppLayout } from '@/layout/AppLayout'
import AIMatcherPage from '@/pages/AIMatcher'
test(
>>>>>>> main
  'renders single navbar on AIMatcherPage', () => {
  const { container, asFragment } = render(
    <MemoryRouter>
      <AppLayout>
        <AIMatcherPage />
      </AppLayout>
    </MemoryRouter>
<<<<<<< HEAD
=======
<<<<<<< HEAD
  );
  expect(container.querySelectorAll('
  '.navbar')).toHaveLength(1);
  expect(asFragment()).toMatchSnapshot()})
=======
>>>>>>> main
  )
  expect(container.querySelectorAll(
  '.navbar')).toHaveLength(1)
  expect(asFragment()).toMatchSnapshot()})
>>>>>>> main
