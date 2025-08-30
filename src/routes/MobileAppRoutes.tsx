import { Route, Routes  } from 'react-router-dom';
import MobileAppPage from '../pages/MobileAppPage';
import MobileLaunchPage from '../pages/MobileLaunchPage';
import OpenAppRedirect from '../pages/OpenAppRedirect';

export default function MobileAppRoutes(...args: any[]): any {
  return (
    <>
      <Route path="launch" element={<MobileLaunchPage />} />
    </>
  );
}