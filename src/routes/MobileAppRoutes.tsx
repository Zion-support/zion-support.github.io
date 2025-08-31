import React from 'react';
import { Route, Routes } from "react-router-dom";
import MobileAppPage from "../pages/MobileAppPage";
import { MobileLaunchPage } from "../pages/MobileLaunchPage";
import OpenAppRedirect from "../pages/OpenAppRedirect";

export default function MobileAppRoutes() {
  return (
    <Routes>
      <Route path="launch" element={<MobileLaunchPage />} />
      <Route path="redirect" element={<OpenAppRedirect />} />
      <Route path="" element={<MobileAppPage />} />
    </Routes>
  );
}