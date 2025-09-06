import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
import basic.spec from '../components/basic.spec';
describe('basic.spec', () => {test('renders without crashing', () => {render(<basic.spec />)expect(screen.getByTestId('basic.spec')).toBeInTheDocument()})test('displays correct content', () => {render(<basic.spec />)// Add specific content tests here;
  })test('handles user interactions', () => {render(<basic.spec />)// Add interaction tests here;
  })test('applies correct styling', () => {render(<basic.spec />)// Add styling tests here;
  })})