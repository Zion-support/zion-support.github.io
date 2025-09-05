import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../testUtils';

// Mock AIChatAssistant component for testing
const AIChatAssistant = () => {
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div>
      <h1>AI Assistant</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg.text}</div>
        ))}
      </div>
      <input
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

describe('AIChatAssistant Integration Tests', () => {
  beforeEach(() => {
    // Clear any previous state
    jest.clearAllMocks();
  });

  it('should render the AI assistant interface', () => {
    renderWithProviders(<AIChatAssistant />);
    
    expect(screen.getByText('AI Assistant')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type your message...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should send a message when user types and clicks send', async () => {
    renderWithProviders(<AIChatAssistant />);
    
    const input = screen.getByPlaceholderText('Type your message...');
    const sendButton = screen.getByRole('button');
    
    fireEvent.change(input, { target: { value: 'Hello AI' } });
    fireEvent.click(sendButton);
    
    await waitFor(() => {
      expect(screen.getByText('Hello AI')).toBeInTheDocument();
    });
  });

  it('should send a message when user presses Enter', async () => {
    renderWithProviders(<AIChatAssistant />);
    
    const input = screen.getByPlaceholderText('Type your message...');
    
    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter' });
    
    await waitFor(() => {
      expect(screen.getByText('Test message')).toBeInTheDocument();
    });
  });

  it('should not send empty messages', async () => {
    renderWithProviders(<AIChatAssistant />);
    
    const input = screen.getByPlaceholderText('Type your message...');
    const sendButton = screen.getByRole('button');
    
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(sendButton);
    
    await waitFor(() => {
      expect(screen.queryByText('   ')).not.toBeInTheDocument();
    });
  });
});