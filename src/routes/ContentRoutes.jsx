import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Content-related routes
const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/content" element={<div>Content Hub</div>} />
      <Route path="/content/blog" element={<div>Blog</div>} />
      <Route path="/content/resources" element={<div>Resources</div>} />
    </Routes>
  );
};

export default ContentRoutes;