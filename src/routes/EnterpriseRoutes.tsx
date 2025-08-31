import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EnterpriseAdmin from "../pages/EnterpriseAdmin";
import EnterpriseBilling from "../pages/EnterpriseBilling";
import EnterpriseDemo from "../pages/EnterpriseDemo";
import EnterprisePlans from "../pages/EnterprisePlans";

export default function EnterpriseRoutes() {
  return (
    <Routes>
      {/* Enterprise Routes */}
      <Route path="/enterprise" element={<EnterprisePlans />} />
      <Route path="/plans/enterprise" element={<EnterprisePlans />} />
      <Route path="/enterprise/admin" element={<EnterpriseAdmin />} />
      <Route path="/enterprise/demo" element={<EnterpriseDemo />} />
      <Route path="/company/:compSlug" element={<div>Company Workspace</div>} />
      <Route path="/enterprise/billing" element={<EnterpriseBilling />} />
    </Routes>
  );
}