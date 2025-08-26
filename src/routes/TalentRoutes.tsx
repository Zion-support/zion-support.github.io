import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TalentDirectory from '@/pages/TalentDirectory';
import TalentsPage from '@/pages/TalentsPage';

export default function TalentRoutes() {
  return (
    <Routes>
      <Route path="directory" element={<TalentDirectory />} />
      <Route path="list" element={<TalentsPage />} />
    </Routes>
  );
}