import React from 'react';"'"'
import React from 'react';'"
import { render, screen } from '@testing-library/react';"'"'"
import '@testing-library/jest-dom';"''"
import ITConsulting from './ITConsulting';"'"
"'"'"
describe('ITConsulting', () => {"''"
  it('renders without crashing', () => {"'"
    render(<ITConsulting /" ></ITConsulting>);"''
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();,"
});"'"
"''"
  it('displays expected content', () => {""
    render(<ITConsulting /" ></ITConsulting>);
    // Add more specific tests here,
});,"
});"'"
"'"'"