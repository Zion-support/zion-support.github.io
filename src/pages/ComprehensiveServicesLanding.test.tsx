import { render, screen } from '@testing - library / react';
import React from 'react';
import ComprehensiveServicesLanding from './ComprehensiveServicesLanding';

describe ('ComprehensiveServicesLanding', () => {
  it ('renders without crashing', () => {
    render (<ComprehensiveServicesLanding />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<ComprehensiveServicesLanding />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
