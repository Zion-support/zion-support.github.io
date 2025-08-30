import React from 'react';
// Next.js routing - no need for react-router-dom
import CommunityPage from '@/pages/CommunityPage';
export default function CommunityRoutes() {
    return (<React.Fragment>
      <Route path="" element={<CommunityPage />}/>
    </React.Fragment>);
}
