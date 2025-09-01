import { render, screen } from '@testing - library / react';
import React from 'react';
import Tutorials from './Tutorials';


describe ('Tutorials', () => {
  it ('renders without crashing', () => {
    render (<Tutorials />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<Tutorials />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
