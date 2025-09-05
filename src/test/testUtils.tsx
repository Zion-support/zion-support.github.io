import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

// Test wrapper with providers
export const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

// Custom render function
export const renderWithProviders = (ui: React.ReactElement) => {
  return render(ui, { wrapper: TestWrapper });
};

// Mock data generators
export const mockUser = {
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
  role: 'user'
};

export const mockProduct = {
  id: '1',
  title: 'Test Product',
  description: 'Test Description',
  price: 99.99,
  category: 'test',
  features: ['feature1', 'feature2'],
  image: '/test-image.jpg',
  status: 'active'
};

// Mock functions
export const mockNavigate = jest.fn();
export const mockDispatch = jest.fn();

// Helper functions
export const waitForElementToBeRemoved = async (element: HTMLElement) => {
  await waitFor(() => {
    expect(element).not.toBeInTheDocument();
  });
};

export const clickButton = async (buttonText: string) => {
  const button = screen.getByText(buttonText);
  fireEvent.click(button);
  return button;
};

export const fillInput = (inputLabel: string, value: string) => {
  const input = screen.getByLabelText(inputLabel);
  fireEvent.change(input, { target: { value } });
  return input;
};