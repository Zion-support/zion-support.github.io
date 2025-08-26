import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Route } from 'react-router-dom';
import CommunityPage from '@/pages/CommunityPage';
export default function CommunityRoutes() {
    return (_jsx(_Fragment, { children: _jsx(Route, { path: "", element: _jsx(CommunityPage, {}) }) }));
import React from 'react';
// Next.js routing - no need for react-router-dom
import CommunityPage from '@/pages/CommunityPage';
export default function CommunityRoutes() {
    return (<>
      <Route path="" element={<CommunityPage />}/>
    </>);
=======
}
