import { render, screen } from '@testing - library / react';
import React from 'react';
import TermsOfService from './TermsOfService';

describe ('TermsOfService', () => {
  it ('renders without crashing', () => {
    render (<TermsOfService />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<TermsOfService />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
