import React, { useState } from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Company News',
    'Product Updates',
    'Industry Insights',
    'Awards & Recognition',
    'Partnerships',
    'Research & Development',
    'Market Trends',
  ];

  return (
    <>
      <SEO title="News" description="Latest news and updates from Zion Tech Group" canonical="https://ziontechgroup.com/news" />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search news..."
              className="w-full max-w-md rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="text-zinc-400">No news items yet.</div>
        </div>
      </main>
      <Footer />
    </>
  );
}