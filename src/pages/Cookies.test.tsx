import { render, screen } from '@testing - library / react';
import React from 'react';
import Cookies from './Cookies';


describe ('Cookies', () => {
  it ('renders without crashing', () => {
    render (<Cookies />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<Cookies />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
