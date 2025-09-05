<<<<<<< HEAD
import { render, screen  } from '@testing-library/reactimport LoadingSpinner from ./LoadingSpinnerdescribe(LoadingSpinner, () => {';';';
  it(renders without crashing', () => {'';
    render(<LoadingSpinner  />)';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it('displays expected content', () => {
    render(<LoadingSpinner  />)';
    // Add specific test assertions based on component content})});';;';
=======
import { render,screen } from '@testing-library/reactimport LoadingSpinner from ./LoadingSpinnerdescribe(LoadingSpinner,() => {' it(renders without crashing',() => {' render(<LoadingSpinner />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<LoadingSpinner />)
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
