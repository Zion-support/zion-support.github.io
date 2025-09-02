import React from 'react';""
import { render, screen } from '@testing-library/react';""
import '@testing-library/jest-dom';""
import OnsiteSupport from './OnsiteSupport';
""
describe('OnsiteSupport', () => {""
  it('renders without crashing', () => {
    render(<OnsiteSupport /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();, });
""
  it('displays expected content', () => {
    render(<OnsiteSupport /" >);"
    // Add more specific tests here, });, });
""