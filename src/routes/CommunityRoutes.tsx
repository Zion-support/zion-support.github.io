import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function CommunityRoutes() {
  return (
    <Routes>
      <Route path="" element={<div>Community Page</div>} />
      <Route path="category/:categorySlug" element={<div>Forum Category</div>} />
      <Route path="post/:postId" element={<div>Forum Post</div>} />
      <Route path="create" element={<div>Create Post</div>} />
      <Route path="edit/:postId" element={<div>Edit Post</div>} />
      <Route path="profile/:username" element={<div>Community Profile</div>} />
    </Routes>
  );
}