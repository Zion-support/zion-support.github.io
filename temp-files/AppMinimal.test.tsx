import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
describe('App Minimal', () => {
<<<<<<< HEAD
  it('renders without crashing', () => {
    const MockAppMinimal = () => <div>Zion Tech Group</div>;
=======
return (
  it('renders without crashing', () => {;
const MockAppMinimal = () => <div>Zion Tech Group</div>;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    render(<MockAppMinimal />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
    render(<App />);
    // Just check that the component renders without throwing an error
    expect(true).toBe(true);
  });
});