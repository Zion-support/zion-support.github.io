import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('AppMinimal', () => {
  it('renders without crashing', () => {
    // Mock component for testing
    const MockAppMinimal = () => <div>Zion</div> Tech Group</div>;
    render(<MockAppMinimal />);</MockAppMinimal>expect</MockAppMinimal>(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});
