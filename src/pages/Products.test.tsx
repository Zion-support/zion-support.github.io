import { render, screen } from '@testing - library / react';
import React from 'react';
import Products from './Products';


describe ('Products', () => {
  it ('renders without crashing', () => {
    render (<Products />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<Products />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
