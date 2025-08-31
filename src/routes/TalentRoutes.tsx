<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from "../components/ProtectedRoute";
import TalentDirectory from "../pages/TalentDirectory";
import TalentsPage from "../pages/TalentsPage";
import TalentProfilePage from "../pages/TalentProfilePage";
import SavedTalentsPage from "../pages/SavedTalentsPage";
import CreateTalentProfile from "../pages/CreateTalentProfile";
import ProfilePage from "../pages/ProfilePage";
export default function TalentRoutes() {
=======
import { Route, Routes              } from 'react-router-dom.ts';
import { ProtectedRoute              } from '../components/ProtectedRoute';
import TalentDirectory from '../pages/TalentDirectory';
import TalentsPage from '../pages/TalentsPage';
import TalentProfilePage from '../pages/TalentProfilePage';
import SavedTalentsPage from '../pages/SavedTalentsPage';
import CreateTalentProfile from '../pages/CreateTalentProfile';
import ProfilePage from '../pages/ProfilePage';

export default function TalentRoutes(...args: any[]): any {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  return (
    <>;
      <Route path = "directory" element={<TalentDirectory />} />;
      <Route path="list" element={<TalentsPage />} />;
    </>;
  );
}