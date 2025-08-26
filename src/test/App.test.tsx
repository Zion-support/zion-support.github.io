import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

// Mock the components that might not exist yet
vi.mock('../components/ChatAssistant', () => ({
  ChatAssistant: () => <div data-testid="chat-assistant">Chat Assistant</div>
}))

vi.mock('../layout/AppHeader', () => ({
  AppHeader: () => <div data-testid="app-header">App Header</div>
}))

vi.mock('../components/Footer', () => ({
  Footer: () => <div data-testid="footer">Footer</div>
}))

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    // Basic test to ensure the app renders
    expect(document.body).toBeInTheDocument()
  })

  it('renders main navigation elements', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    // Test that key components are rendered
    expect(screen.getByTestId('app-header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})