import React from 'react';
import { latestArticles } from '../content/latest-articles';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              for 2026
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the most advanced AI technologies reshaping our world. From brain-computer interfaces 
            to space exploration AI, explore content that's defining the future of human-machine collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{article.category === 'AI Innovation' ? '🧠' : '🚀'}</span>
                  <span className="text-sm font-semibold text-blue-600">{article.category}</span>
                  {article.newBadge && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">NEW</span>
                  )}
                  {article.trending && (
                    <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold">TRENDING</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.readTime}</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}