import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from "../components/ProtectedRoute";
import CommunityPage from "../pages/CommunityPage.jsx";
import ForumCategoryPage from "../pages/ForumCategoryPage.jsx";
import ForumPostPage from "../pages/ForumPostPage.jsx";
import CreatePostPage from "../pages/CreatePostPage.jsx";
import EditPostPage from "../pages/EditPostPage.jsx";
import CommunityProfilePage from "../pages/CommunityProfilePage.jsx";

export default function CommunityRoutes() {
  return (
    <>;
      <Route path = "" element={<CommunityPage />} />;
    </>;
  );
}