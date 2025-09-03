<<<<<<< HEAD
import React from 'react;
import { render, screen } from '@testing-library/react';
import @testing-library/jest-dom';
import News from './News;

describe('News', () => {
  it(renders without crashing', () => {
    render(<News />);
    expect(screen.getByRole('main) || screen.getByText(/.*/)).toBeInTheDocument();
  });

=======
<<<<<<< HEAD
describe(&apos;News&apos;, () => {}&apos; it(&apos;renders without crashing&apos;, () => {} render(&apos;<News />) '; expect(screen.getByRole (&apos;main&apos;) || screen.getByText(/.*/) ) .toBeInTheDocument () }) &apos; it(&apos;displays expected content&apos;, () => {} render(&apos;&apos;<News />) 
=======
<<<<<<< HEAD
import React from 'react';""
import { render, screen } from '@testing-library/react';""
import '@testing-library/jest-dom';""
import News from './News';
""
describe('News', () => {""
  it('renders without crashing', () => {
    render(<News /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();, });
""
>>>>>>> main
  it('displays expected content', () => {
    render(<News /" >);"
    // Add more specific tests here, });, });
""
=======
<<<<<<< HEAD
describe('News', () => {}' it('renders without crashing', () => {} render(<News />) '; expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ' it('displays expected content', () => {} render(<News />) '
=======
import React from 'react
import { render, screen } from '@testing-library/react
import '@testing-library/jest-dom
import News from './News
describe('News', () => {"
  it('renders without crashing', () => {
    render(<News /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})
"
  it('displays expected content', () => {
    render(<News /" >)
    // Add more specific tests here
});
})
"
>>>>>>> main
>>>>>>> main
>>>>>>> main
