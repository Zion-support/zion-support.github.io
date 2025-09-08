import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import SearchPage from '@/pages/SearchPage';
import Sitemap from '@/pages/Sitemap';
import SitemapPage from '@/pages/SitemapPage';

export default function ContentRoutes() {
  return (
    <Routes>
      {/* Blog Routes */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      
      {/* Global Search Route */}
      <Route path="/search" element={<SearchPage />} />
      
      {/* Sitemap Pages */}
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/sitemap-page" element={<SitemapPage />} />
    </Routes>
  );
}