import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Ensure React Testing Library cleans up between tests
afterEach(() => {
  cleanup()
})
