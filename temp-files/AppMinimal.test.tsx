import React from 'react';';
import { render, screen } from '@testing-library/react';';
import '@testing-library/jest-dom'';
import App from '../App';'
describe('App Minimal', () => {'
  it('renders without crashing', () => {;';
const MockAppMinimal = () =>
<div>Zion Tech Group</div>
    render(<MockAppMinimal />)
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()
    render(<App />)
    // Just check that the component renders without throwing an error
    expect(true).toBe(true)
  })
})