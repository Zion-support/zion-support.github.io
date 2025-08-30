import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoute';
import CommunityPage from '../pages/CommunityPage';
import ForumCategoryPage from '../pages/ForumCategoryPage';
import ForumPostPage from '../pages/ForumPostPage';
import CreatePostPage from '../pages/CreatePostPage';
import EditPostPage from '../pages/EditPostPage';
import CommunityProfilePage from '../pages/CommunityProfilePage';

export default function CommunityRoutes() {
  return (
    <Routes>
      <Route path="" element={<CommunityPage />} />
      <Route path="category/:categorySlug" element={<ForumCategoryPage />} />
      <Route path="post/:postId" element={<ForumPostPage />} />
      <Route path="create" element={<CreatePostPage />} />
      <Route path="edit/:postId" element={<EditPostPage />} />
      <Route path="profile/:username" element={<CommunityProfilePage />} />
    </Routes>
  );
}