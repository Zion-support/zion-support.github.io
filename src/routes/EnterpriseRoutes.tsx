import EnterprisePlans from '../pages/EnterprisePlans';
import EnterpriseAdmin from '../pages/EnterpriseAdmin';
import CompWorkspace from '../pages/CompWorkspace';
import EnterpriseBilling from '../pages/EnterpriseBilling';
import EnterpriseDemo from '../pages/EnterpriseDemo';

export default function EnterpriseRoutes() {
  return (
    <Routes>
      <Route path="/enterprise" element={<EnterprisePlans />} />
      <Route path="/plans/enterprise" element={<EnterprisePlans />} />
      <Route path="/admin" element={<EnterpriseAdmin />} />
      <Route path="/workspace" element={<CompWorkspace />} />
      <Route path="/billing" element={<EnterpriseBilling />} />
      <Route path="/demo" element={<EnterpriseDemo />} />
    </Routes>
  );
}