<<<<<<< HEAD
import React from 'react';""
import { render, screen } from '@testing-library/react';""
import '@testing-library/jest-dom';""
import Training from './Training';
""
describe('Training', () => {""
  it('renders without crashing', () => {
    render(<Training /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();, });
""
  it('displays expected content', () => {
    render(<Training /" >);"
    // Add more specific tests here, });, });
""
=======
<<<<<<< HEAD
describe('Training', () => {}' it('renders without crashing', () => {} render(<Training />) '; expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ' it('displays expected content', () => {} render(<Training />) '
=======
import React from 'react
import { render, screen } from '@testing-library/react
import '@testing-library/jest-dom
import Training from './Training
describe('Training', () => {"
  it('renders without crashing', () => {
    render(<Training /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})
"
  it('displays expected content', () => {
    render(<Training /" >)
    // Add more specific tests here
});
})
"
>>>>>>> main
>>>>>>> main
