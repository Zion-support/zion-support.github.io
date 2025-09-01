import { render, screen } from '@testing - library / react';
import React from 'react';
import ServicesComparisonPage from './ServicesComparisonPage';


describe ('ServicesComparisonPage', () => {
  it ('renders without crashing', () => {
    render (<ServicesComparisonPage />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<ServicesComparisonPage />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
