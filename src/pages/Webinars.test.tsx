<<<<<<< HEAD
import React from 'react';""
import { render, screen } from '@testing-library/react';""
import '@testing-library/jest-dom';""
import Webinars from './Webinars';
""
describe('Webinars', () => {""
  it('renders without crashing', () => {
    render(<Webinars /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();, });
""
  it('displays expected content', () => {
    render(<Webinars /" >);"
    // Add more specific tests here, });, });
""
=======
<<<<<<< HEAD
describe('Webinars', () => {}' it('renders without crashing', () => {} render(<Webinars />) '; expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ' it('displays expected content', () => {} render(<Webinars />) '
=======
import React from 'react
import { render, screen } from '@testing-library/react
import '@testing-library/jest-dom
import Webinars from './Webinars
describe('Webinars', () => {"
  it('renders without crashing', () => {
    render(<Webinars /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})
"
  it('displays expected content', () => {
    render(<Webinars /" >)
    // Add more specific tests here
});
})
"
>>>>>>> main
>>>>>>> main
