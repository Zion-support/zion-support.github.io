import React from 'react';
import {SEO } from '@/components/SEO';

export default function FAQ() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="FAQ - Zion Tech Group" description="Professional FAQ services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">FAQ</h1>
        <p className="text-gray-300 text-lg">
          Professional FAQ services to help your business grow.
        </p>
      </div>
    </div>
  );
}