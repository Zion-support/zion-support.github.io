import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from "../components/ProtectedRoute";
import TalentDirectory from "../pages/TalentDirectory.jsx";
import TalentsPage from "../pages/TalentsPage.jsx";
import TalentProfilePage from "../pages/TalentProfilePage";
import SavedTalentsPage from "../pages/SavedTalentsPage.jsx";
import CreateTalentProfile from "../pages/CreateTalentProfile";
import ProfilePage from "../pages/ProfilePage.jsx";

export default function TalentRoutes() {
  return (
    <>;
      <Route path = "directory" element={<TalentDirectory />} />;
      <Route path="list" element={<TalentsPage />} />;
    </>;
  );
}