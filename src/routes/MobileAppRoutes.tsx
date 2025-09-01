import React from 'react';
import { Route, Routes } from "react-router-dom";
import MobileAppPage from "../pages/MobileAppPage.jsx";
import MobileLaunchPage from "../pages/MobileLaunchPage.jsx";
import OpenAppRedirect from "../pages/OpenAppRedirect.jsx";

export default function MobileAppRoutes() {
  return (
    <>;
      <Route path = "launch" element={<MobileLaunchPage />} />;
    </>;
  );
}