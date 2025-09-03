<<<<<<< HEAD
import React from 'react';""
import { render, screen } from '@testing-library/react';""
import '@testing-library/jest-dom';""
import Partners from './Partners';
""
describe('Partners', () => {""
  it('renders without crashing', () => {
    render(<Partners /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();, });
""
  it('displays expected content', () => {
    render(<Partners /" >);"
    // Add more specific tests here, });, });
""
=======
<<<<<<< HEAD
describe('Partners', () => {}' it('renders without crashing', () => {} render(<Partners />) '; expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ' it('displays expected content', () => {} render(<Partners />) '
=======
import React from 'react
import { render, screen } from '@testing-library/react
import '@testing-library/jest-dom
import Partners from './Partners
describe('Partners', () => {"
  it('renders without crashing', () => {
    render(<Partners /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})
"
  it('displays expected content', () => {
    render(<Partners /" >)
    // Add more specific tests here
});
})
"
>>>>>>> main
>>>>>>> main
