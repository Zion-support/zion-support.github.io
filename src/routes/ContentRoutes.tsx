import React from "react";
import { Routes, Route } from "react-router-dom";

export default function ContentRoutes(): JSX.Element {
  return (
    <Routes>
      {/* Placeholder routes kept minimal for successful compilation */}
      <Route path="/sitemap" element={<div>Sitemap</div>} />
      <Route path="/sitemap-page" element={<div>Sitemap Page</div>} />
      <Route path="/search" element={<div>Search</div>} />
    </Routes>
  );
}

