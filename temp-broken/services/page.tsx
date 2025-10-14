'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ServicesPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Our comprehensive AI and IT services." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Services</h1>
          <p className="text-gray-300">This page is under construction.</p>
        </div>
      </div>
    </React.Fragment>
  );
}