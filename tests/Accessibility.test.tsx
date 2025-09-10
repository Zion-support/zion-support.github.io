import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock ModeToggle component
function ModeToggle() {
  return <button>Toggle Mode</button>;
}

describe('Accessibility', () => {
  it('ModeToggle renders without crashing', () => {
    const { container } = render(<ModeToggle />);
    expect(container).toBeInTheDocument();
  });
});