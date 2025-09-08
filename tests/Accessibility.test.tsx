

import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { ModeToggle } from '../src/components/ModeToggle.tsx'
import { ThemeProvider } from '../src/components/ThemeProvider'

expect.extend(toHaveNoViolations)

test('ModeToggle should not have accessibility violations', async () => {
  const { container } = render(
    <ThemeProvider>
      <ModeToggle />
    </ThemeProvider>
  )
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

