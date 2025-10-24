<<<<<<< HEAD
'use client'
import React from 'react';

const SitemapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Sitemap Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This is a sitemap page placeholder.
=======
import React from "react";

interface SitemapPageProps {
  // Add props here
}

const SitemapPage: React.FC<SitemapPageProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Sitemap
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is the sitemap page.
>>>>>>> origin/main
          </p>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;