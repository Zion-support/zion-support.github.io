<<<<<<< HEAD
import React from 'react;
import { render, screen } from '@testing-library/react';
import @testing-library/jest-dom';
import RequestQuote from './RequestQuote;

describe('RequestQuote', () => {
  it(renders without crashing', () => {
    render(<RequestQuote />);
    expect(screen.getByRole('main) || screen.getByText(/.*/)).toBeInTheDocument();
  });

=======
<<<<<<< HEAD
describe(&apos;RequestQuote&apos;, () => {}&apos; it(&apos;renders without crashing&apos;, () => {} render(&apos;<RequestQuote />) '; expect(screen.getByRole (&apos;main&apos;) || screen.getByText(/.*/) ) .toBeInTheDocument () }) &apos; it(&apos;displays expected content&apos;, () => {} render(&apos;&apos;<RequestQuote />) 
=======
<<<<<<< HEAD
import React from 'react';""
import { render, screen } from '@testing-library/react';""
import '@testing-library/jest-dom';""
import RequestQuote from './RequestQuote';
""
describe('RequestQuote', () => {""
  it('renders without crashing', () => {
    render(<RequestQuote /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();, });
""
>>>>>>> main
  it('displays expected content', () => {
    render(<RequestQuote /" >);"
    // Add more specific tests here, });, });
""
=======
<<<<<<< HEAD
describe('RequestQuote', () => {}' it('renders without crashing', () => {} render(<RequestQuote />) '; expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ' it('displays expected content', () => {} render(<RequestQuote />) '
=======
import React from 'react
import { render, screen } from '@testing-library/react
import '@testing-library/jest-dom
import RequestQuote from './RequestQuote
describe('RequestQuote', () => {"
  it('renders without crashing', () => {
    render(<RequestQuote /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})
"
  it('displays expected content', () => {
    render(<RequestQuote /" >)
    // Add more specific tests here
});
})
"
>>>>>>> main
>>>>>>> main
>>>>>>> main
