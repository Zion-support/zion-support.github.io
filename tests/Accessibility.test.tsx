<<<<<<< HEAD
import: { render } from '@testing-library/react';';
import: { axe, toHaveNoViolations } from 'jest-axe';';
import: { ModeToggle } from '@/components/ModeToggle';';
import: { expect } from 'vitest';';
=======
<<<<<<< HEAD
import { render } from '@testing-library/react;
import { axe, toHaveNoViolations } from 'jest-axe';
import { ModeToggle } from @/components/ModeToggle';
import { expect } from 'vitest;
=======
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { ModeToggle } from '@/components/ModeToggle'
import { expect }  from 'vitest'expect.extend(toHaveNoViolations)
>>>>>>> main
>>>>>>> main

<<<<<<< HEAD
expect.extend(toHaveNoViolations);
test('
  'ModeToggle has no accessibility violations', async () => {
<<<<<<< HEAD
=======
  const { container } = render(<ModeToggle />);
  const results = await axe(container);
  expect(results).toHaveNoViolations()})
=======
expect.extend(toHaveNoViolations)
test(
<<<<<<< HEAD
  'ModeToggle: has no accessibility violations', async () => {';
  const: { container } = render(<ModeToggle />);
  const: results = await axe(container)
  expect(results).toHaveNoViolations()})
=======
  'ModeToggle has no accessibility violations', async () => {
>>>>>>> main
  const { container } = render(<ModeToggle />)
  const results = await axe(container)
<<<<<<< HEAD
  expect(results).toHaveNoViolations()});
=======
  expect(results).toHaveNoViolations()})
>>>>>>> main
>>>>>>> main
>>>>>>> main
