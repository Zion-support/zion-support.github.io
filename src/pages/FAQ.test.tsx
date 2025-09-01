import { render, screen } from '@testing - library / react';
import React from 'react';
import FAQ from './FAQ';


describe ('FAQ', () => {
  it ('renders without crashing', () => {
    render (<FAQ />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<FAQ />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
