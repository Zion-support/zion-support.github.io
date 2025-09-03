<<<<<<< HEAD
import React from 'react';""
import { render, screen } from '@testing-library/react';""
import '@testing-library/jest-dom';""
import Demo from './Demo';
""
describe('Demo', () => {""
  it('renders without crashing', () => {
    render(<Demo /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();, });
""
  it('displays expected content', () => {
    render(<Demo /" >);"
    // Add more specific tests here, });, });
""
=======
<<<<<<< HEAD
describe('Demo', () => {}' it('renders without crashing', () => {} render(<Demo />) '; expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ' it('displays expected content', () => {} render(<Demo />) '
=======
import React from 'react
import { render, screen } from '@testing-library/react
import '@testing-library/jest-dom
import Demo from './Demo
describe('Demo', () => {"
  it('renders without crashing', () => {
    render(<Demo /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})
"
  it('displays expected content', () => {
    render(<Demo /" >)
    // Add more specific tests here
});
})
"
>>>>>>> main
>>>>>>> main
