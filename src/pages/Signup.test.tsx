import { render, screen } from '@testing - library / react';
import React from 'react';
import Signup from './Signup';


describe ('Signup', () => {
  it ('renders without crashing', () => {
    render (<Signup />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<Signup />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
