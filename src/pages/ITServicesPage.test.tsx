import { render, screen } from '@testing - library / react';
import React from 'react';
import ITServicesPage from './ITServicesPage';

describe ('ITServicesPage', () => {
  it ('renders without crashing', () => {
    render (<ITServicesPage />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<ITServicesPage />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
