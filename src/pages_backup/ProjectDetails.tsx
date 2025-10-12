'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const pages_backupPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pages_backup - Zion Tech Group</title>
        <meta name="description" content="Professional Pages_backup services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pages_backup
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Professional Pages_backup services coming soon.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default pages_backupPage;
