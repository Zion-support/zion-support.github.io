<<<<<<< HEAD
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
=======
import React from "react";

const Home = () => {
>>>>>>> 6995d05efbf958465be8e251001703bdbc87a50a
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
<<<<<<< HEAD
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
=======
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading the future of technology with innovative solutions and cutting-edge expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">AI Solutions</h3>
            <p className="text-gray-300 mb-4">
              Advanced artificial intelligence solutions for modern businesses
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Machine learning models</li>
              <li>• Natural language processing</li>
              <li>• Computer vision</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-400/20">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Cloud Services</h3>
            <p className="text-gray-300 mb-4">
              Scalable cloud infrastructure and deployment solutions
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Cloud migration</li>
              <li>• DevOps automation</li>
              <li>• Microservices architecture</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-800/50 to-teal-800/50 rounded-xl p-6 backdrop-blur-sm border border-green-400/20">
            <h3 className="text-2xl font-bold mb-4 text-green-300">Data Analytics</h3>
            <p className="text-gray-300 mb-4">
              Transform your data into actionable business insights
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Real-time analytics</li>
              <li>• Predictive modeling</li>
              <li>• Business intelligence</li>
            </ul>
          </div>
        </div>
>>>>>>> 6995d05efbf958465be8e251001703bdbc87a50a
