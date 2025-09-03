<<<<<<< HEAD
import React from 'react;
import { render, screen } from '@testing-library/react';
import @testing-library/jest-dom';
import Resources from './Resources;

describe('Resources', () => {
  it(renders without crashing', () => {
    render(<Resources />);
    expect(screen.getByRole('main) || screen.getByText(/.*/)).toBeInTheDocument();
  });

=======
<<<<<<< HEAD
describe(&apos;Resources&apos;, () => {}&apos; it(&apos;renders without crashing&apos;, () => {} render(&apos;<Resources />) '; expect(screen.getByRole (&apos;main&apos;) || screen.getByText(/.*/) ) .toBeInTheDocument () }) &apos; it(&apos;displays expected content&apos;, () => {} render(&apos;&apos;<Resources />) 
=======
<<<<<<< HEAD
import React from 'react';""
import { render, screen } from '@testing-library/react';""
import '@testing-library/jest-dom';""
import Resources from './Resources';
""
describe('Resources', () => {""
  it('renders without crashing', () => {
    render(<Resources /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();, });
""
>>>>>>> main
  it('displays expected content', () => {
    render(<Resources /" >);"
    // Add more specific tests here, });, });
""
=======
<<<<<<< HEAD
describe('Resources', () => {}' it('renders without crashing', () => {} render(<Resources />) '; expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ' it('displays expected content', () => {} render(<Resources />) '
=======
import React from 'react
import { render, screen } from '@testing-library/react
import '@testing-library/jest-dom
import Resources from './Resources
describe('Resources', () => {"
  it('renders without crashing', () => {
    render(<Resources /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})
"
  it('displays expected content', () => {
    render(<Resources /" >)
    // Add more specific tests here
});
})
"
>>>>>>> main
>>>>>>> main
>>>>>>> main
