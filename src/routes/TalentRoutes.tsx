import React from 'react';
import { Route, Routes } from 'react-router-dom';

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