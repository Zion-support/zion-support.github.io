'use client';

import React from 'react';

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Unauthorized
        </h1>
        <p className="text-gray-600 mb-8">
          You are not authorized to access this page.
        </p>
      </div>
    </div>
  );
};

export default UnauthorizedPage;