<<<<<<< HEAD
import React from 'react';
import { Route, Routes } from "react-router-dom";
import MobileAppPage from "../pages/MobileAppPage";
import MobileLaunchPage from "../pages/MobileLaunchPage";
import OpenAppRedirect from "../pages/OpenAppRedirect";
export default function MobileAppRoutes() {
=======
import React from 'react.ts';
import { Route, Routes              } from 'react-router-dom.ts';
import MobileAppPage from '../pages/MobileAppPage';
import MobileLaunchPage from '../pages/MobileLaunchPage';
import OpenAppRedirect from '../pages/OpenAppRedirect';

export default function MobileAppRoutes(...args: any[]): any {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  return (
    <>;
      <Route path = "launch" element={<MobileLaunchPage />} />;
    </>;
  );
}