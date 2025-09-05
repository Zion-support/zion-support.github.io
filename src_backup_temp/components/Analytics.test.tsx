<<<<<<< HEAD
import { render,screen } from '@testing-library/reactimport Analytics from ./Analyticsdescribe(Analytics,() => {it(renders without crashing,() => {'; render(<Analytics />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<Analytics />)
=======
import { render, screen  } from '@testing-library/reactimport Analytics from ./Analyticsdescribe(Analytics, () => {it(renders without crashing, () => {';';
    render(<Analytics  />)';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it('displays expected content', () => {
    render(<Analytics  />)';
    // Add specific test assertions based on component content})});';;';
import { render,screen } from '@testing-library/reactimport Analytics from ./Analyticsdescribe(Analytics,() => {it(renders without crashing,() => {'; render(<Analytics />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<Analytics />)
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
