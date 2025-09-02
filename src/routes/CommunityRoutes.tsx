import React from 'react';'
import { Route, Routes } from 'react-router-dom';''
import { ProtectedRoute } from '../components/ProtectedRoute';''
import CommunityPage from '../pages/CommunityPage';''
import ForumCategoryPage from '../pages/ForumCategoryPage';''
import ForumPostPage from '../pages/ForumPostPage';''
import CreatePostPage from '../pages/CreatePostPage';''
import EditPostPage from '../pages/EditPostPage';''
import CommunityProfilePage from '../pages/CommunityProfilePage';
export default function CommunityRoutes() {
  return (
    <Routes></Routes>
      <Route path="" element={<CommunityPage /></Route>} />""
      <Route path="category/: categoryId" element={<ForumCategoryPage /></Route>} />""
      <Route path="post/:postId" element={<ForumPostPage /></Route>} />""
      <Route path="create" element={<CreatePostPage /></Route>} />""
      <Route path="edit/:postId" element={<EditPostPage /></Route>} />""
      <Route path="profile/:userId" element={<CommunityProfilePage /></Route>} />
    </Routes>
  );'"
}'"'"