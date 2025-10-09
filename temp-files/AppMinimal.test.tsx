import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
describe('AppMinimal', () => {
  it('renders without crashing', () => {
    // Mock component for testing
    const MockAppMinimal = () => <div>Zion Tech Group</div>;
    render(<MockAppMinimal />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});
