import { jsx as _jsx } from "react/jsx-runtime";
import { Route } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
export default function ErrorRoutes() {
    return (_jsx(Route, { path: "*", element: _jsx(NotFound, {}) }));
import React from 'react';
// Next.js routing - no need for react-router-dom
import NotFound from '@/pages/NotFound';
export default function ErrorRoutes() {
    return (<Route path="*" element={<NotFound />}/>);
=======
}
