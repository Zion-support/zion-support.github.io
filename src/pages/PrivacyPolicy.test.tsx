<<<<<<< HEAD
import React from 'react';""
import { render, screen } from '@testing-library/react';""
import '@testing-library/jest-dom';""
import PrivacyPolicy from './PrivacyPolicy';
""
describe('PrivacyPolicy', () => {""
  it('renders without crashing', () => {
    render(<PrivacyPolicy /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();, });
""
  it('displays expected content', () => {
    render(<PrivacyPolicy /" >);"
    // Add more specific tests here, });, });
""
=======
<<<<<<< HEAD
describe('PrivacyPolicy', () => {}' it('renders without crashing', () => {} render(<PrivacyPolicy />) '; expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ' it('displays expected content', () => {} render(<PrivacyPolicy />) '
=======
import React from 'react
import { render, screen } from '@testing-library/react
import '@testing-library/jest-dom
import PrivacyPolicy from './PrivacyPolicy
describe('PrivacyPolicy', () => {"
  it('renders without crashing', () => {
    render(<PrivacyPolicy /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})
"
  it('displays expected content', () => {
    render(<PrivacyPolicy /" >)
    // Add more specific tests here
});
})
"
>>>>>>> main
>>>>>>> main
