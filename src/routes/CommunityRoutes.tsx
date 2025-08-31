<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from "../components/ProtectedRoute";
import CommunityPage from "../pages/CommunityPage";
import ForumCategoryPage from "../pages/ForumCategoryPage";
import ForumPostPage from "../pages/ForumPostPage";
import CreatePostPage from "../pages/CreatePostPage";
import EditPostPage from "../pages/EditPostPage";
import CommunityProfilePage from "../pages/CommunityProfilePage";
export default function CommunityRoutes() {
=======
import { Route, Routes              } from 'react-router-dom.ts';
import { ProtectedRoute              } from '../components/ProtectedRoute';
import CommunityPage from '../pages/CommunityPage';
import ForumCategoryPage from '../pages/ForumCategoryPage';
import ForumPostPage from '../pages/ForumPostPage';
import CreatePostPage from '../pages/CreatePostPage';
import EditPostPage from '../pages/EditPostPage';
import CommunityProfilePage from '../pages/CommunityProfilePage';

export default function CommunityRoutes(...args: any[]): any {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  return (
    <>;
      <Route path = "" element={<CommunityPage />} />;
    </>;
  );
}