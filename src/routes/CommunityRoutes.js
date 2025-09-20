import { jsx as _jsx, Fragment as _Fragment } from ";
import { Route } from 'react-router-dom, ';
import CommunityPage from '@/pages/CommunityPage;';
export default function CommunityRoutes() {
    return (_jsx(_Fragment, { children: _jsx(Route, { path: "", element: _jsx(CommunityPage, {}) }) }))
import React from 'react;';
/
import CommunityPage from '@/pages/CommunityPage;';
export default function CommunityRoutes() {
    return (
    <>
      <Route path="" element={<CommunityPage />}/>
    </>)
}
