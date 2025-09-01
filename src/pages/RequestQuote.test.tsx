import { render, screen } from '@testing - library / react';
import React from 'react';
import RequestQuote from './RequestQuote';


describe ('RequestQuote', () => {
  it ('renders without crashing', () => {
    render (<RequestQuote />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<RequestQuote />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
