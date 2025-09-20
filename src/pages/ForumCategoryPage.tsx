import React from 'react';
import { SEO } from '@/components/SEO';

export default function ForumCategoryPage() {
  return (
    <>
      <SEO
        title="Forum Category | Zion AI Marketplace"
        description="Browse forum discussions by category."
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Forum Category</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">Forum discussions will be available here.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}