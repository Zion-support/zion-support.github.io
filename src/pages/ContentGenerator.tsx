import React from 'react';
import { SEO } from '@/components/SEO';

export default function ContentGenerator() {
  return (
    <>
      <SEO
        title="Content Generator | Zion AI"
        description="Generate high-quality content using AI-powered tools."
      />
      <div className="min-h-screen bg-zion-blue flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Content Generator</h1>
          <p className="text-gray-300">AI-powered content generation tools coming soon...</p>
        </div>
      </div>
    </>
  );
}