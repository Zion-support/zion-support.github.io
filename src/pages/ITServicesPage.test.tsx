<<<<<<< HEAD
import React from 'react';""
import { render, screen } from '@testing-library/react';""
import '@testing-library/jest-dom';""
import ITServicesPage from './ITServicesPage';
""
describe('ITServicesPage', () => {""
  it('renders without crashing', () => {
    render(<ITServicesPage /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();, });
""
  it('displays expected content', () => {
    render(<ITServicesPage /" >);"
    // Add more specific tests here, });, });
""
=======
<<<<<<< HEAD
describe('ITServicesPage', () => {}' it('renders without crashing', () => {} render(<ITServicesPage />) '; expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ' it('displays expected content', () => {} render(<ITServicesPage />) '
=======
import React from 'react
import { render, screen } from '@testing-library/react
import '@testing-library/jest-dom
import ITServicesPage from './ITServicesPage
describe('ITServicesPage', () => {"
  it('renders without crashing', () => {
    render(<ITServicesPage /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})
"
  it('displays expected content', () => {
    render(<ITServicesPage /" >)
    // Add more specific tests here
});
})
"
>>>>>>> main
>>>>>>> main
