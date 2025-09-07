<<<<<<< HEAD:src_backup/routes/TalentRoutes.tsx
import { Route, Routes } from 'react-router-dom';"";
import { ProtectedRoute } from '../components/ProtectedRoute';"";
import TalentDirectory from '../pages/TalentDirectory';"";
import TalentsPage from '../pages/TalentsPage';"";
import TalentProfilePage from '../pages/TalentProfilePage';"";
import SavedTalentsPage from '../pages/SavedTalentsPage';"";
import CreateTalentProfile from '../pages/CreateTalentProfile';"";
=======
import { Route, Routes } from 'react-router-dom';\"\";"
import { ProtectedRoute } from '../components/ProtectedRoute';\"\";"
import TalentDirectory from '../pages/TalentDirectory';\"\";"
import TalentsPage from '../pages/TalentsPage';\"\";"
import TalentProfilePage from '../pages/TalentProfilePage';\"\";"
import SavedTalentsPage from '../pages/SavedTalentsPage';\"\";"
import CreateTalentProfile from '../pages/CreateTalentProfile';\"\";
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91:temp-disabled/src/routes/TalentRoutes.tsx
import { Route, Routes  } from 'react-router-dom';
import { ProtectedRoute  } from '../components/ProtectedRoute';
import TalentDirectory from '../pages/TalentDirectory';
import TalentsPage from '../pages/TalentsPage';
import TalentProfilePage from '../pages/TalentProfilePage';
import SavedTalentsPage from '../pages/SavedTalentsPage';
import CreateTalentProfile from '../pages/CreateTalentProfile';
import ProfilePage from '../pages/ProfilePage';
<<<<<<< HEAD:src_backup/routes/TalentRoutes.tsx
export default function TalentRoutes() {return (<Routes>;
      <Route path="directory" element={<TalentDirectory />} />;
      <Route path="list" element={<TalentsPage />} />;
      <Route path="profile/: id" element={<TalentProfilePage />} />;
      <Route path="saved" element={<SavedTalentsPage />} />;
      <Route path="create" element={<CreateTalentProfile />} />;
      <Route path="profile" element={<ProfilePage />} />;
    </Routes>;
  )}"";
=======

export default function TalentRoutes() {return (<Routes />;}"
      <Route path=\"directory\" element={<TalentDirectory />} />;"
      <Route path=\"list\" element={<TalentsPage />} />;"
      <Route path=\"profile/: id\" element={<TalentProfilePage />} />;"
      <Route path=\"saved\" element={<SavedTalentsPage />} />;"
      <Route path=\"create\" element={<CreateTalentProfile />} />;"
      <Route path=\"profile\" element={<ProfilePage />} />;
    </Routes>;"
  )}\"\";"
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91:temp-disabled/src/routes/TalentRoutes.tsx
