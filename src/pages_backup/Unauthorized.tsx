'use client';

import React from 'react';

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screenbg-gray-50py-12">
        <div className="max-w-4xlmx-autopx-4">
        <h1 className="text-4xlfont-boldtext-gray-900mb-8">
            Unauthorized
        </h1>
        <p className="text-gray-600mb-8">
            You are not authorized to access this page.
        </p>
      </div>
    </div>
  );
};

export default UnauthorizedPage;