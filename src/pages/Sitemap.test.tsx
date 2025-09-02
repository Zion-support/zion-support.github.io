import React from 'react';"
import { render, screen } from '@testing-library/react';"
import '@testing-library/jest-dom';"
import Sitemap from './Sitemap';
"
describe('Sitemap', () => {"
  it('renders without crashing', () => {
    render(<Sitemap /", ></Sitemap>);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();,
});
"
  it('displays expected content', () => {
    render(<Sitemap /", ></Sitemap>);
    // Add more specific tests here,
});,
});
"