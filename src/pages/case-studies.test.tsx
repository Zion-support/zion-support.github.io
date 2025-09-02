import React from 'react';"'"'
import React from 'react';'"
import { render, screen } from '@testing-library/react';"'"'"
import '@testing-library/jest-dom';"''"
import CaseStudies from './case-studies';"'"
"'"'"
describe('case-studies', () => {"''"
  it('renders without crashing', () => {"'"
    render(<case -studies /" ></case>);"''
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();,"
});"'"
"''"
  it('displays expected content', () => {""
    render(<case -studies /" ></case>);
    // Add more specific tests here,
});,"
});"'"
"'"'"