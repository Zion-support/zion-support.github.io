<<<<<<< HEAD
import { render,screen } from '@testing-library/reactimport LanguageDetectionPopup from ./LanguageDetectionPopupdescribe(LanguageDetectionPopup,() => {' it(renders without crashing',() => {' render(<LanguageDetectionPopup />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<LanguageDetectionPopup />)
=======
import { render, screen  } from '@testing-library/reactimport LanguageDetectionPopup from ./LanguageDetectionPopupdescribe(LanguageDetectionPopup, () => {';';';
  it(renders without crashing', () => {'';
    render(<LanguageDetectionPopup  />)';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it('displays expected content', () => {
    render(<LanguageDetectionPopup  />)';
    // Add specific test assertions based on component content})});';;';
import { render,screen } from '@testing-library/reactimport LanguageDetectionPopup from ./LanguageDetectionPopupdescribe(LanguageDetectionPopup,() => {' it(renders without crashing',() => {' render(<LanguageDetectionPopup />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<LanguageDetectionPopup />)
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
