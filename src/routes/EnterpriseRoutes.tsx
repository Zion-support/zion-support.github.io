import { Route, Routes  } from 'react-router-dom.ts';
import EnterprisePlans from '../pages/EnterprisePlans';
import EnterpriseAdmin from '../pages/EnterpriseAdmin';
import CompanyWorkspace from '../pages/CompanyWorkspace';
import EnterpriseBilling from '../pages/EnterpriseBilling';
import EnterpriseDemo from '../pages/EnterpriseDemo';


export default function EnterpriseRoutes(...args: any[]): any {
  return (
    <Routes>
      {/* Enterprise Routes */}
      <Route path="/enterprise" element={<EnterprisePlans />} />
      <Route path="/plans/enterprise" element={<EnterprisePlans />} />
      <Route path="/enterprise/admin" element={<EnterpriseAdmin />} />
      <Route path="/enterprise/demo" element={<EnterpriseDemo />} />
      <Route path="/company/:companySlug" element={<CompanyWorkspace />} />
      <Route path="/enterprise/billing" element={<EnterpriseBilling />} />
      
    </Routes>
  );
}