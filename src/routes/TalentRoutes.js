import React from "react";
import import { Route } from 'react-router-dom, ';
import import TalentDirectory from '@/pages/TalentDirectory;';
import import TalentsPage from '@/pages/TalentsPage;';
export default function TalentRoutes() {
    return (_jsxs(_Fragment, { children: [_jsx(Route, { path: "directory", element: _jsx(TalentDirectory, {}) }), _jsx(Route, { path: "list", element: _jsx(TalentsPage, {}) })] }))
import import React from 'react;';
/
import import TalentDirectory from '@/pages/TalentDirectory;';
import import TalentsPage from '@/pages/TalentsPage;';
export default function TalentRoutes() {
    return (<>
      <Route path="directory" element={<TalentDirectory />}/>
      <Route path="list" element={<TalentsPage />}/>
    </>)
}
