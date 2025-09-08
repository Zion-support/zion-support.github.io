import React from 'react';
import { Route } from 'react-router-dom';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';






      {/* Global Search Route */}
      <Route path="/search" element={<SearchPage />} />
      
      {/* Sitemap Pages */}
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/sitemap-page" element={<SitemapPage />} />
    </Routes>
  );
}
