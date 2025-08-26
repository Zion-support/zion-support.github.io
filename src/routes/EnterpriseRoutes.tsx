<<<<<<< HEAD
import React from 'react';
import { Route } from 'react-router-dom';
=======
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import EnterprisePlans from "../pages/EnterprisePlans";
import EnterpriseAdmin from "../pages/EnterpriseAdmin";
import CompanyWorkspace from "../pages/CompanyWorkspace";
import EnterpriseBilling from "../pages/EnterpriseBilling";
import EnterpriseDemo from "../pages/EnterpriseDemo";
>>>>>>> origin/cursor/website-audit-and-enhancement-915d

export default function EnterpriseRoutes() {
  return (
<<<<<<< HEAD
    <>
      {/* Enterprise-specific routes can be added here */}
    </>
=======
    <Routes>
      {/* Enterprise Routes */}
      <Route path="/enterprise" element={<EnterprisePlans />} />
      <Route path="/plans/enterprise" element={<EnterprisePlans />} />
      <Route path="/enterprise/admin" element={<EnterpriseAdmin />} />
      <Route path="/enterprise/demo" element={<EnterpriseDemo />} />
      <Route path="/company/:companySlug" element={<CompanyWorkspace />} />
      <Route path="/enterprise/billing" element={<EnterpriseBilling />} />
      
    </Routes>
>>>>>>> origin/cursor/website-audit-and-enhancement-915d
  );
}