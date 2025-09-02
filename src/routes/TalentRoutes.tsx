import React from 'react';'
import { Route, Routes } from 'react-router-dom';''
import { ProtectedRoute } from '../components/ProtectedRoute';''
import TalentDirectory from '../pages/TalentDirectory';''
import TalentsPage from '../pages/TalentsPage';''
import TalentProfilePage from '../pages/TalentProfilePage';''
import SavedTalentsPage from '../pages/SavedTalentsPage';''
import CreateTalentProfile from '../pages/CreateTalentProfile';''
import ProfilePage from '../pages/ProfilePage';
export default function TalentRoutes() {
  return (
    <Routes></Routes>
      <Route path="directory" element={<TalentDirectory /></Route>} />""
      <Route path="list" element={<TalentsPage /></Route>} />""
      <Route path="profile/: id" element={<TalentProfilePage /></Route>} />""
      <Route path="saved" element={<SavedTalentsPage /></Route>} />""
      <Route path="create" element={<CreateTalentProfile /></Route>} />""
      <Route path="profile" element={<ProfilePage /></Route>} />
    </Routes>
  );'"
}'"'"