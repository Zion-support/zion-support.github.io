import React from 'react';

const News: React.FC = () => {
  const newsItems = [
    {
      title: 'ZionTech Group Launches New AI Platform',
      excerpt: 'Revolutionary AI platform designed to accelerate business transformation.',
      date: 'January 20, 2025',
      category: 'Product Launch'
    },
    {
      title: 'Partnership with Leading Cloud Provider',
      excerpt: 'Strategic partnership to enhance cloud computing capabilities.',
      date: 'January 18, 2025',
      category: 'Partnership'
    },
    {
      title: 'Industry Recognition for Innovation',
      excerpt: 'ZionTech Group receives award for outstanding technological innovation.',
      date: 'January 15, 2025',
      category: 'Awards'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Latest News</h1>
        <p className="text-gray-300 text-lg text-center mb-12 max-w-3xl mx-auto">
          Stay informed about our latest developments, partnerships, and industry insights.
        </p>
        <div className="space-y-8">
          {newsItems.map((item, index) => (
            <article key={index} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </span>
                <span className="text-gray-400 text-sm">{item.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">{item.title}</h2>
              <p className="text-gray-300">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;