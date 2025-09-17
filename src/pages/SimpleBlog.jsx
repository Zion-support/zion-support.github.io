import React from 'react';

export default function SimpleBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Latest insights and updates
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-white">
              Blog posts would be listed here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}