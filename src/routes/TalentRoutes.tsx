import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Talent-related routes
const TalentRoutes = () => {
  return (
    <Routes>
      <Route path="/talent" element={<div>Talent Directory</div>} />
      <Route path="/talent/:id" element={<div>Talent Profile</div>} />
      <Route path="/talent/search" element={<div>Talent Search</div>} />
    </Routes>
  );
};

export default TalentRoutes;