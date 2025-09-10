import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoute';
import ContentPage from '../pages/ContentPage';
import CreateContentPage from '../pages/CreateContentPage';
import EditContentPage from '../pages/EditContentPage';
import ContentDetailPage from '../pages/ContentDetailPage';

export default function ContentRoutes() {
  return (
    <>
      <Route path="" element={<ContentPage />} />
      <Route path="create" element={<CreateContentPage />} />
      <Route path="edit/:id" element={<EditContentPage />} />
      <Route path="detail/:id" element={<ContentDetailPage />} />
    </>
  );
}

export { ContentRoutes };