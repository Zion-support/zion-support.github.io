import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateTalentProfile from "../pages/CreateTalentProfile";
import ProfilePage from "../pages/ProfilePage";
import SavedTalentsPage from "../pages/SavedTalentsPage";
import TalentDirectory from "../pages/TalentDirectory";
import TalentProfilePage from "../pages/TalentProfilePage";
import TalentsPage from "../pages/TalentsPage";

export default function TalentRoutes() {
  return (
    <Routes>
      <Route path="directory" element={<div>Talent Directory</div>} />
      <Route path="list" element={<div>Talents List</div>} />
      <Route path="profile/:id" element={<div>Talent Profile</div>} />
      <Route path="saved" element={<div>Saved Talents</div>} />
      <Route path="create" element={<div>Create Profile</div>} />
      <Route path="my-profile" element={<div>My Profile</div>} />
    </Routes>
  );
}