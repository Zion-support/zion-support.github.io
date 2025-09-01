import { render, screen } from '@testing - library / react';
import React from 'react';
import ServicesSitemap from './ServicesSitemap';

describe ('ServicesSitemap', () => {

  it ('renders without crashing', () => {

    render (<ServicesSitemap />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {

    render (<ServicesSitemap />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
