<<<<<<< HEAD
import React from 'react';""
import { render, screen } from '@testing-library/react';""
import '@testing-library/jest-dom';""
import DataAnalytics from './DataAnalytics';
""
describe('DataAnalytics', () => {""
  it('renders without crashing', () => {
    render(<DataAnalytics /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();, });
""
  it('displays expected content', () => {
    render(<DataAnalytics /" >);"
    // Add more specific tests here, });, });
""
=======
<<<<<<< HEAD
describe('DataAnalytics', () => {}' it('renders without crashing', () => {} render(<DataAnalytics />) '; expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ' it('displays expected content', () => {} render(<DataAnalytics />) '
=======
import React from 'react
import { render, screen } from '@testing-library/react
import '@testing-library/jest-dom
import DataAnalytics from './DataAnalytics
describe('DataAnalytics', () => {"
  it('renders without crashing', () => {
    render(<DataAnalytics /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})
"
  it('displays expected content', () => {
    render(<DataAnalytics /" >)
    // Add more specific tests here
});
})
"
>>>>>>> main
>>>>>>> main
