import React from 'react';
// Next.js routing - no need for react-router-dom
import CommunityPage from '@/pages/CommunityPage';
export default function CommunityRoutes() {
    return (<>
      <Route path="" element={<CommunityPage />}/>
    </>);
}
