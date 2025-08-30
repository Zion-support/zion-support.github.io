import { Route, Routes  } from 'react-router-dom.ts';
import MobileAppPage from '../pages/MobileAppPage';
import MobileLaunchPage from '../pages/MobileLaunchPage';
import OpenAppRedirect from '../pages/OpenAppRedirect';

export default function MobileAppRoutes(...args: []):  {
  return (
    <>
      <Route path="launch" element={<MobileLaunchPage />} />
    </>
  );
}