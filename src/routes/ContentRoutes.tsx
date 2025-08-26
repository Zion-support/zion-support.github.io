
import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
// trimmed disabled routes

const ContentRoutes = () => {
  return (
    <Routes>
      {/* Content Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default ContentRoutes;
