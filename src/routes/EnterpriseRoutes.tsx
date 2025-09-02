import React from 'react';'
import { Route, Routes } from 'react-router-dom';''
import EnterprisePlans from '../pages/EnterprisePlans';''
import EnterpriseAdmin from '../pages/EnterpriseAdmin';''
import CompWorkspace from '../pages/CompWorkspace';''
import EnterpriseBilling from '../pages/EnterpriseBilling';''
import EnterpriseDemo from '../pages/EnterpriseDemo';
export default function EnterpriseRoutes() {
  return (
    <Routes></Routes>
      <Route path="/enterprise" element={<EnterprisePlans /></Route>} />""
      <Route path="/plans/enterprise" element={<EnterprisePlans /></Route>} />""
      <Route path="/enterprise/admin" element={<EnterpriseAdmin /></Route>} />""
      <Route path="/enterprise/workspace" element={<CompWorkspace /></Route>} />""
      <Route path="/enterprise/billing" element={<EnterpriseBilling /></Route>} />""
      <Route path="/enterprise/demo" element={<EnterpriseDemo /></Route>} />
    </Routes>
  );'"
}'"'"