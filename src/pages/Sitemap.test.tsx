<<<<<<< HEAD
import React from 'react;
import { render, screen } from '@testing-library/react';
import @testing-library/jest-dom';
import Sitemap from './Sitemap;

describe('Sitemap', () => {
  it(renders without crashing', () => {
    render(<Sitemap />);
    expect(screen.getByRole('main) || screen.getByText(/.*/)).toBeInTheDocument();
  });

=======
<<<<<<< HEAD
describe(&apos;Sitemap&apos;, () => {}&apos; it(&apos;renders without crashing&apos;, () => {} render(&apos;<Sitemap />) '; expect(screen.getByRole (&apos;main&apos;) || screen.getByText(/.*/) ) .toBeInTheDocument () }) &apos; it(&apos;displays expected content&apos;, () => {} render(&apos;&apos;<Sitemap />) 
=======
<<<<<<< HEAD
import React from 'react';""
import { render, screen } from '@testing-library/react';""
import '@testing-library/jest-dom';""
import Sitemap from './Sitemap';
""
describe('Sitemap', () => {""
  it('renders without crashing', () => {
    render(<Sitemap /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();, });
""
>>>>>>> main
  it('displays expected content', () => {
    render(<Sitemap /" >);"
    // Add more specific tests here, });, });
""
=======
<<<<<<< HEAD
describe('Sitemap', () => {}' it('renders without crashing', () => {} render(<Sitemap />) '; expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ' it('displays expected content', () => {} render(<Sitemap />) '
=======
import React from 'react
import { render, screen } from '@testing-library/react
import '@testing-library/jest-dom
import Sitemap from './Sitemap
describe('Sitemap', () => {"
  it('renders without crashing', () => {
    render(<Sitemap /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})
"
  it('displays expected content', () => {
    render(<Sitemap /" >)
    // Add more specific tests here
});
})
"
>>>>>>> main
>>>>>>> main
>>>>>>> main
