'use client'
import React from 'react';

const Unauthorized: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Unauthorized
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This is a placeholder page for Unauthorized.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
