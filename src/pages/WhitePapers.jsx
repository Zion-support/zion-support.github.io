import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Calendar, User } from 'lucide-react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';

const SAMPLE_PAPERS = [
  {
    title: 'AI-Powered Business Transformation: A Comprehensive Guide',
    description:
      'Explore how artificial intelligence is revolutionizing business operations and creating new opportunities for growth and innovation.',
    author: 'Dr. Sarah Chen',
    date: 'March 2024',
    category: 'AI & Business',
    pages: 45,
    downloads: '2,500+',
    tags: ['AI', 'Digital Transformation', 'Business Strategy'],
    pdfUrl: '#',
  },
  {
    title: 'Cybersecurity in the Digital Age: Threats and Solutions',
    description:
      'Comprehensive analysis of modern cybersecurity challenges and effective defense strategies for enterprises.',
    author: 'Alex Thompson',
    date: 'February 2024',
    category: 'Security',
    pages: 38,
    downloads: '1,800+',
    tags: ['Cybersecurity', 'AI', 'Threat Defense'],
    pdfUrl: '#',
  },
];

export default function WhitePapers() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => ['All', ...Array.from(new Set(SAMPLE_PAPERS.map(p => p.category)))], []);

  const filtered = SAMPLE_PAPERS.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO title="White Papers" description="In-depth research and insights from Zion Tech Group" canonical="https://ziontechgroup.com/white-papers" />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4 mr-2" /> Research & Insights
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">White Papers</h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Access our research papers and technical documentation to stay ahead of technology trends and industry insights.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-8 justify-center">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search white papers..."
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((paper) => (
              <div key={paper.title} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="mb-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    {paper.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{paper.title}</h3>
                <p className="text-zion-slate-light mb-4">{paper.description}</p>
                <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                  <span className="flex items-center"><User className="w-4 h-4 mr-1" />{paper.author}</span>
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{paper.date}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                  <span>{paper.pages} pages</span>
                  <span className="flex items-center"><Download className="w-4 h-4 mr-1" />{paper.downloads}</span>
                </div>
                <a href={paper.pdfUrl} className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg">
                  Download PDF
                </a>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-zion-slate-light">No white papers found.</div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
