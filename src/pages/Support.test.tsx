import { render, screen } from '@testing - library / react';
import React from 'react';
import Support from './Support';


describe ('Support', () => {
  it ('renders without crashing', () => {
    render (<Support />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<Support />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
