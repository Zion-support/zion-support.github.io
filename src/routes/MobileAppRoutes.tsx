import { Route  } from 'react-router-dom.ts';
import MobileLaunchPage from '../pages/MobileLaunchPage';

export default function MobileAppRoutes(...args: any[]): any {
  return (
    <>
      <Route path="launch" element={<MobileLaunchPage />} />
    </>
  );
}