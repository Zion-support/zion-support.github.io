import React from 'react';
import { Link } from 'react-router-dom';
import SEO from "@/components/SEO";

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete site navigation and structure"
        keywords="sitemap, navigation, Zion Tech Group"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-8">Sitemap</h1>
          <p className="text-xl text-gray-300">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}
