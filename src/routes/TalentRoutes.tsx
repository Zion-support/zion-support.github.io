import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from "../components/ProtectedRoute";
import TalentDirectory from "../pages/TalentDirectory";
import TalentsPage from "../pages/TalentsPage";
import TalentProfilePage from "../pages/TalentProfilePage";
import SavedTalentsPage from "../pages/SavedTalentsPage";
import CreateTalentProfile from "../pages/CreateTalentProfile";
import ProfilePage from "../pages/ProfilePage";
;
export { function };
export default function TalentRoutes(...args: unknown[]): unknown {
  return (
    <>;
      <Route path = "directory" element={<TalentDirectory />} />;
      <Route path="list" element={<TalentsPage />} />;
    </>;
  );
}