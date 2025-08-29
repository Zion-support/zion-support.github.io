import { Route  } from 'react-router-dom.ts';
import CommunityPage from '../pages/CommunityPage';

export default function CommunityRoutes(...args: any[]): any {
  return (
    <>
      <Route path="" element={<CommunityPage />} />
    </>
  );
}