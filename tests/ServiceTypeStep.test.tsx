import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock component for testing
interface ServiceTypeStepProps {
  // Add props here as needed
}

function ServiceTypeStep({ }: ServiceTypeStepProps) {
  return (
    <div>
      <h1>ServiceTypeStep</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}

describe('ServiceTypeStep', () => {
  it('renders without crashing', () => {
    render(<ServiceTypeStep />);
    expect(screen.getByText('ServiceTypeStep')).toBeInTheDocument();
  });
});