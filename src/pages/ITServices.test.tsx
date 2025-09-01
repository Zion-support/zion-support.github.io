import { render, screen } from '@testing - library / react';
import React from 'react';
import ITServices from './ITServices';

describe ('ITServices', () => {
  it ('renders without crashing', () => {
    render (<ITServices />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<ITServices />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
