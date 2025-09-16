<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home= () => {
=======

import { getRecentBlogPosts } from '@/data/blog-posts';
import { Link } from 'react-router-dom';

const Home = () => {
  const recent = getRecentBlogPosts(2);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Home | Zion Tech Group</title>
        <meta name="description" content="Home - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
<<<<<<< HEAD
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Home</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
=======
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Welcome</h1>
          <p className="text-lg opacity-90">Build, ship, and scale intelligent products with confidence.</p>
        </div>

        <section aria-labelledby="latest-insights" className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 id="latest-insights" className="text-2xl font-semibold">Latest insights</h2>
            <Link to="/blog" className="text-indigo-300 hover:text-white underline-offset-4 hover:underline">View all</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {recent.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="block rounded-lg bg-white/10 backdrop-blur border border-white/20 p-5 hover:bg-white/15 transition">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-sm text-zinc-200 mt-1">{post.excerpt}</p>
                <span className="text-xs text-zinc-300 mt-2 inline-block">Published {new Date(post.publishDate).toLocaleDateString(undefined, { month: 'short', day: '2-digit', year: 'numeric' })}</span>
              </Link>
            ))}
          </div>
        </section>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
      </div>
    </div>
  );
};

export default Home;