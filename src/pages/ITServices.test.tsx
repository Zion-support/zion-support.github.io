<<<<<<< HEAD
import React from 'react;
import { render, screen } from '@testing-library/react';
import @testing-library/jest-dom';
import ITServices from './ITServices;

describe('ITServices', () => {
  it(renders without crashing', () => {
    render(<ITServices />);
    expect(screen.getByRole('main) || screen.getByText(/.*/)).toBeInTheDocument();
  });

=======
<<<<<<< HEAD
describe(&apos;ITServices&apos;, () => {}&apos; it(&apos;renders without crashing&apos;, () => {} render(&apos;<ITServices />) '; expect(screen.getByRole (&apos;main&apos;) || screen.getByText(/.*/) ) .toBeInTheDocument () }) &apos; it(&apos;displays expected content&apos;, () => {} render(&apos;&apos;<ITServices />) 
=======
<<<<<<< HEAD
import React from 'react';""
import { render, screen } from '@testing-library/react';""
import '@testing-library/jest-dom';""
import ITServices from './ITServices';
""
describe('ITServices', () => {""
  it('renders without crashing', () => {
    render(<ITServices /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();, });
""
>>>>>>> main
  it('displays expected content', () => {
    render(<ITServices /" >);"
    // Add more specific tests here, });, });
""
=======
<<<<<<< HEAD
describe('ITServices', () => {}' it('renders without crashing', () => {} render(<ITServices />) '; expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ' it('displays expected content', () => {} render(<ITServices />) '
=======
import React from 'react
import { render, screen } from '@testing-library/react
import '@testing-library/jest-dom
import ITServices from './ITServices
describe('ITServices', () => {"
  it('renders without crashing', () => {
    render(<ITServices /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})
"
  it('displays expected content', () => {
    render(<ITServices /" >)
    // Add more specific tests here
});
})
"
>>>>>>> main
>>>>>>> main
>>>>>>> main
