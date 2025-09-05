<<<<<<< HEAD
import { render,screen } from '@testing-library/reactimport HomeHero from ./HomeHerodescribe(HomeHero,() => {' it(renders without crashing',() => {' render(<HomeHero />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<HomeHero />)
=======
import { render, screen  } from '@testing-library/reactimport HomeHero from ./HomeHerodescribe(HomeHero, () => {';';';
  it(renders without crashing', () => {'';
    render(<HomeHero  />)';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it('displays expected content', () => {
    render(<HomeHero  />)';
    // Add specific test assertions based on component content})});';;';
import { render,screen } from '@testing-library/reactimport HomeHero from ./HomeHerodescribe(HomeHero,() => {' it(renders without crashing',() => {' render(<HomeHero />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<HomeHero />)
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
