<<<<<<< HEAD
describe(&apos;Team&apos;, () => {}&apos; it(&apos;renders without crashing&apos;, () => {} render(&apos;<Team />) '; expect(screen.getByRole (&apos;main&apos;) || screen.getByText(/.*/) ) .toBeInTheDocument () }) &apos; it(&apos;displays expected content&apos;, () => {} render(&apos;&apos;<Team />) 
=======
<<<<<<< HEAD
import React from 'react';""
import { render, screen } from '@testing-library/react';""
import '@testing-library/jest-dom';""
import Team from './Team';
""
describe('Team', () => {""
  it('renders without crashing', () => {
    render(<Team /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();, });
""
  it('displays expected content', () => {
    render(<Team /" >);"
    // Add more specific tests here, });, });
""
=======
<<<<<<< HEAD
describe('Team', () => {}' it('renders without crashing', () => {} render(<Team />) '; expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ' it('displays expected content', () => {} render(<Team />) '
=======
import React from 'react
import { render, screen } from '@testing-library/react
import '@testing-library/jest-dom
import Team from './Team
describe('Team', () => {"
  it('renders without crashing', () => {
    render(<Team /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})
"
  it('displays expected content', () => {
    render(<Team /" >)
    // Add more specific tests here
});
})
"
>>>>>>> main
>>>>>>> main
>>>>>>> main
