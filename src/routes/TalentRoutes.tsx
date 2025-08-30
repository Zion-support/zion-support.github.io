import { Route } from 'react-router-dom';

export default function TalentRoutes() {
  return (
    <>
      <Route path="directory" element={<TalentDirectory />} />
      <Route path="list" element={<TalentsPage />} />
    </>
  );
}