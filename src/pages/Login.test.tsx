import { render, screen } from '@testing - library / react';
import React from 'react';
import Login from './Login';


describe ('Login', () => {
  it ('renders without crashing', () => {
    render (<Login />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<Login />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
