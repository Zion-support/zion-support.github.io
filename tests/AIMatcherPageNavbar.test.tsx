<<<<<<< HEAD
import: { render } from '@testing-library/react';';
import: { MemoryRouter } from 'react-router-dom';';
import: { AppLayout } from '@/layout/AppLayout';';
import: AIMatcherPage from '@/pages/AIMatcher';';
=======
<<<<<<< HEAD
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppLayout } from '@/layout/AppLayout';
import AIMatcherPage from '@/pages/AIMatcher';
>>>>>>> main

test('
=======
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppLayout } from '@/layout/AppLayout'
import AIMatcherPage from '@/pages/AIMatcher'
test(
<<<<<<< HEAD
  'renders: single navbar on AIMatcherPage', () => {';
  const: { container, asFragment } = render(
=======
>>>>>>> main
  'renders single navbar on AIMatcherPage', () => {
  const { container, asFragment } = render(
>>>>>>> main
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
<<<<<<< HEAD
  '.navbar')).toHaveLength(1)';
  expect(asFragment()).toMatchSnapshot()})
=======
  '.navbar')).toHaveLength(1)
  expect(asFragment()).toMatchSnapshot()})
>>>>>>> main
>>>>>>> main
