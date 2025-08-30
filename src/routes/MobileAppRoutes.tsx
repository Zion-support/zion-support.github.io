import { Route } from 'react-router-dom';

export default function MobileAppRoutes() {
  return (
    <>
      <Route path="launch" element={<MobileLaunchPage />} />
    </>
  );
}