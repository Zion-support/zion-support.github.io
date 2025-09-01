import { render, screen } from '@testing - library / react';
import React from 'react';
import NotFound from './NotFound';


describe ('NotFound', () => {
  it ('renders without crashing', () => {
    render (<NotFound />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<NotFound />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
