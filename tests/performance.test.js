import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
import performance from '../components/performance';
describe('performance', () => {test('renders without crashing', () => {render(<performance />)expect(screen.getByTestId('performance')).toBeInTheDocument()})test('displays correct content', () => {render(<performance />)// Add specific content tests here;
  })test('handles user interactions', () => {render(<performance />)// Add interaction tests here;
  })test('applies correct styling', () => {render(<performance />)// Add styling tests here;
  })})