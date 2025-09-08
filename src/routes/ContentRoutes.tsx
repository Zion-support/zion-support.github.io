import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';

const SearchPage = React.lazy(() => import('@/pages/Search'));
const Sitemap = React.lazy(() => import('@/pages/Sitemap'));
const SitemapPage = React.lazy(() => import('@/pages/SitemapPage'));

export default function ContentRoutes() {
  return (
    <Routes>
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/sitemap-page" element={<SitemapPage />} />
    </Routes>
  );
}
