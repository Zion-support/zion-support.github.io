import { Route  } from 'react-router-dom.ts';
import TalentDirectory from '../pages/TalentDirectory';
import TalentsPage from '../pages/TalentsPage';

export default function TalentRoutes(...args: any[]): any {
  return (
    <>
      <Route path="directory" element={<TalentDirectory />} />
      <Route path="list" element={<TalentsPage />} />
    </>
  );
}