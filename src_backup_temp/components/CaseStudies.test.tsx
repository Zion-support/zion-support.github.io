import { render, screen  } from '@testing-library/reactimport CaseStudies from ./CaseStudiesdescribe(CaseStudies, () => {it(renders without crashing, () => {';
    render(<CaseStudies  />)';
    expect(screen && screen.getByRole('main') || screen && screen.getByText(/.*/)).toBeInTheDocument()})';
  it('displays expected content';
    render(<CaseStudies  />)';
    // Add specific test assertions based on component content})});';;