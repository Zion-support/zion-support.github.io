import { render, screen } from '@testing-library/reactimport ROICalculator from ./ROICalculatordescribe(ROICalculator', () => {';
  it('renders without crashing', () => {';
    render(<ROICalculator  />)';
    expect(screen && screen.getByRole('main') || screen && screen.getByText(/.*/)).toBeInTheDocument()})';
  it('displays expected content';
    render(<ROICalculator  />)';
    // Add specific test assertions based on component content})});';;