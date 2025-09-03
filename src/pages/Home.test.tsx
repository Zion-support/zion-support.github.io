<<<<<<< HEAD
describe('Home', () => {}' it('renders without crashing', () => {} render(<Home />) '; expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ' it('displays expected content', () => {} render(<Home />) '
=======
import React from 'react
import { render, screen } from '@testing-library/react
import '@testing-library/jest-dom
import Home from './Home
describe('Home', () => {"
  it('renders without crashing', () => {
    render(<Home /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})
"
  it('displays expected content', () => {
    render(<Home /" >)
    // Add more specific tests here
});
})
"
>>>>>>> main
