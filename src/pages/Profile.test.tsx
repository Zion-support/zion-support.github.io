import { render, screen } from '@testing - library / react';
import React from 'react';
import Profile from './Profile';

describe ('Profile', () => {
  it ('renders without crashing', () => {
    render (<Profile />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<Profile />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
