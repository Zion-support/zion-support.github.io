import React from 'react';

interface SearchProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Search({ className = '', children }: SearchProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
  );
}
import React from 'react'
import {Helmet} from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
export default SearchPage;
'use client'
        <title>Search - Zion Tech Group</title>
            <h1 className = "text-4xl font-bold text-white mb-4">Search</h1>
            <p className="text-gray-300 mb-8">This page is under construction.</p>;
              Learn More;
  );
};
