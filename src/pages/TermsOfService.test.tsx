<<<<<<< HEAD
describe(&apos;TermsOfService&apos;, () => {}&apos; it(&apos;renders without crashing&apos;, () => {} render(&apos;<TermsOfService />) '; expect(screen.getByRole (&apos;main&apos;) || screen.getByText(/.*/) ) .toBeInTheDocument () }) &apos; it(&apos;displays expected content&apos;, () => {} render(&apos;&apos;<TermsOfService />) 
=======
<<<<<<< HEAD
import React from 'react';""
import { render, screen } from '@testing-library/react';""
import '@testing-library/jest-dom';""
import TermsOfService from './TermsOfService';
""
describe('TermsOfService', () => {""
  it('renders without crashing', () => {
    render(<TermsOfService /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();, });
""
  it('displays expected content', () => {
    render(<TermsOfService /" >);"
    // Add more specific tests here, });, });
""
=======
<<<<<<< HEAD
describe('TermsOfService', () => {}' it('renders without crashing', () => {} render(<TermsOfService />) '; expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ' it('displays expected content', () => {} render(<TermsOfService />) '
=======
import React from 'react
import { render, screen } from '@testing-library/react
import '@testing-library/jest-dom
import TermsOfService from './TermsOfService
describe('TermsOfService', () => {"
  it('renders without crashing', () => {
    render(<TermsOfService /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})
"
  it('displays expected content', () => {
    render(<TermsOfService /" >)
    // Add more specific tests here
});
})
"
>>>>>>> main
>>>>>>> main
>>>>>>> main
