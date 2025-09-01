import { render, screen } from '@testing - library / react';
import React from 'react';
import case - studies from './case - studies';


describe ('case - studies', () => {
  it ('renders without crashing', () => {
    render (<case - studies />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<case - studies />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
