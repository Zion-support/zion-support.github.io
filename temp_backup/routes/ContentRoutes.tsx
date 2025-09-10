import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchPage from '@/pages/SearchPage';
import Sitemap from '@/pages/Sitemap';
import SitemapPage from '@/pages/SitemapPage';

export default function ContentRoutes() {
  return (
    <Routes>
      <Route path="/search" element={<SearchPage />} />
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/sitemap-page" element={<SitemapPage />} />
    </Routes>
  );
}

