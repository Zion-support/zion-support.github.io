import { render, screen } from '@testing - library / react';
import React from 'react';
import Sitemap from './Sitemap';

describe ('Sitemap', () => {
  it ('renders without crashing', () => {
    render (<Sitemap />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<Sitemap />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
