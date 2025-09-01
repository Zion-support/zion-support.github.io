import { render, screen } from '@testing - library / react';
import React from 'react';
import SpaceTech from './SpaceTech';

describe ('SpaceTech', () => {
  it ('renders without crashing', () => {
    render (<SpaceTech />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<SpaceTech />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
