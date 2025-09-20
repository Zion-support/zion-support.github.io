import { jsx as _jsx, Fragment as _Fragment } from ";
import { Route } from 'react-router-dom, ';
import MobileLaunchPage from '@/pages/MobileLaunchPage;';
export default function MobileAppRoutes() {
    return (_jsx(_Fragment, { children: _jsx(Route, { path: "launch", element: _jsx(MobileLaunchPage, {}) }) }))
import React from 'react;';
/
import MobileLaunchPage from '@/pages/MobileLaunchPage;';
export default function MobileAppRoutes() {
    return (
    <>
      <Route path="launch" element={<MobileLaunchPage />}/>
    </>)
}
