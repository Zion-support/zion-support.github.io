import { Route, Routes } from 'react-router-dom';
import EnterprisePlans from '../pages/EnterprisePlans';
import EnterpriseAdmin from '../pages/EnterpriseAdmin';
import CompWorkspace from '../pages/CompWorkspace';
import EnterpriseBilling from '../pages/EnterpriseBilling';
import EnterpriseDemo from '../pages/EnterpriseDemo';

export default function EnterpriseRoutes() {
  return (
    <Routes>
      {/* Enterprise Routes */}
      <Route path="/enterprise" element={<EnterprisePlans />} />
      <Route path="/plans/enterprise" element={<EnterprisePlans />} />
      <Route path="/enterprise/admin" element={<EnterpriseAdmin />} />
      <Route path="/enterprise/demo" element={<EnterpriseDemo />} />
      <Route path="/company/:compSlug" element={<CompWorkspace />} />
      <Route path="/enterprise/billing" element={<EnterpriseBilling />} />
    </Routes>
  );
  {/* Removed stray closing brace */}