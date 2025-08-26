import React from 'react';
import { Helmet } from 'react-helmet-async';

const WhitePapers: React.FC = () => {
  const papers = [
    {
      id: 1,
      title: 'AI-Powered Business Transformation: A Comprehensive Guide',
      category: 'Artificial Intelligence',
      date: '2024-12-20',
      description: 'How AI is transforming business operations with practical steps and case studies.',
    },
    {
      id: 2,
      title: 'Zero-Trust Security Architecture: Implementation and Best Practices',
      category: 'Cybersecurity',
      date: '2024-11-15',
      description: 'Implementing zero-trust security at scale with actionable guidance.',
    },
  ];

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Helmet>
        <title>White Papers - Zion Tech Group</title>
        <meta name="description" content="Download technology white papers and research insights from Zion Tech Group." />
        <link rel="canonical" href="https://ziontechgroup.com/white-papers" />
      </Helmet>

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">White Papers</h1>
        <p className="text-zion-slate-light max-w-3xl mx-auto">
          In-depth research and insights on technology trends and best practices.
        </p>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
          {papers.map((p) => (
            <div key={p.id} className="bg-white/10 border border-white/20 rounded-xl p-6">
              <div className="mb-3 text-sm text-zion-cyan">{p.category}</div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-zion-slate-light mb-3">{p.description}</p>
              <div className="text-sm text-zion-slate-light">Published {formatDate(p.date)}</div>
              <a href="#" className="mt-4 inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-md font-semibold hover:from-blue-700 hover:to-cyan-700 transition-colors">
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhitePapers;
