import { render, screen } from '@testing - library / react';
import React from 'react';
import ServicesPage from './ServicesPage';


describe ('ServicesPage', () => {
  it ('renders without crashing', () => {
    render (<ServicesPage />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<ServicesPage />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
