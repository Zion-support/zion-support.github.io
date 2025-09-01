import { render, screen } from '@testing - library / react';
import React from 'react';
import Demo from './Demo';

describe ('Demo', () => {
  it ('renders without crashing', () => {
    render (<Demo />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<Demo />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
