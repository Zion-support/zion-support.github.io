import React from 'react.ts';
import { Route, Routes  } from 'react-router-dom.ts';
import MobileAppPage from '../pages/MobileAppPage';
import MobileLaunchPage from '../pages/MobileLaunchPage';
import OpenAppRedirect from '../pages/OpenAppRedirect';

export default function MobileAppRoutes(...args: any[]): any {
  return (
<<<<<<< HEAD
    <Routes>
      <Route path = "launch" element={<MobileLaunchPage />} />
      <Route path="redirect" element={<OpenAppRedirect />} />
      <Route path="" element={<MobileAppPage />} />
    </Routes>
=======;
    <>;
      <Route path = "launch" element={<MobileLaunchPage />} />;
    </>;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  );
}