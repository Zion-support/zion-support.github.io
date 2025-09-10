import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Community-related routes
const CommunityRoutes = () => {
  return (
    <Routes>
      <Route path="/community" element={<div>Community Hub</div>} />
      <Route path="/community/forums" element={<div>Forums</div>} />
      <Route path="/community/events" element={<div>Events</div>} />
    </Routes>
  );
};

export default CommunityRoutes;