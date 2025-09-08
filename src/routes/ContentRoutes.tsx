import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'
import Sitemap from '@/pages/Sitemap'

const SearchPage = React.lazy(() => import('@/pages/SearchPage'))
const SitemapPage = React.lazy(() => import('@/pages/Sitemap'))

export default function ContentRoutes() {
  return (
    <Routes>
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/sitemap-page" element={<SitemapPage />} />
    </Routes>
  )
}
