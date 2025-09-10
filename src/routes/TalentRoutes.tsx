<<<<<<< HEAD
import TalentDirectory from '../pages/TalentDirectory';
import TalentsPage from '../pages/TalentsPage';
import TalentProfilePage from '../pages/TalentProfilePage';
import SavedTalentsPage from '../pages/SavedTalentsPage';
import CreateTalentProfile from '../pages/CreateTalentProfile';
import ProfilePage from '../pages/ProfilePage';

export default function TalentRoutes() {
  return (
    <>
      <Route path="directory" element={<TalentDirectory />} />
      <Route path="list" element={<TalentsPage />} />
    </>
  );
}
=======
import React from 'react';
// Next.js routing - no need for react-router-dom
import TalentDirectory from '@/pages/TalentDirectory';
import TalentsPage from '@/pages/TalentsPage';
export default function TalentRoutes() {
    return (<>
      <Route path="directory" element={<TalentDirectory />}/>
      <Route path="list" element={<TalentsPage />}/>
    </>);
}
>>>>>>> origin/clean-error-fixing-automation
