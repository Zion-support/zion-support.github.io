import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime, ";
import { Route } from 'react-router-dom, ';
import MobileLaunchPage from '@/pages/MobileLaunchPage;';
export default function MobileAppRoutes() {
  return (
  return (
  return (_jsx(_Fragment, { children: _jsx(Route, { path: "launch", element: _jsx(MobileLaunchPage, {}) }) }));
import React from 'react;';
// Next.js routing - no need for react-router-dom;
import MobileLaunchPage from '@/pages/MobileLaunchPage;';
export default function MobileAppRoutes() {
  return (
  return (
  return (<>
      <Route path="launch" element={<MobileLaunchPage />}/>
</>);
}
