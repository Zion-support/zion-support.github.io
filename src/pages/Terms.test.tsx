import { render, screen } from '@testing - library / react';
import React from 'react';
import Terms from './Terms';


describe ('Terms', () => {
  it ('renders without crashing', () => {
    render (<Terms />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<Terms />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
