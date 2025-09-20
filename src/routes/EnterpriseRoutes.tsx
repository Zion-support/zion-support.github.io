import React from "react";
import { Fragment } from "react, ";
<<<<<<< HEAD
import { Route, Routes  } from "react-router-dom, ";
=======
import { Route, Routes } from "react-router-dom, ";
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
import EnterprisePlans from "../pages/EnterprisePlans";
import EnterpriseAdmin from "../pages/EnterpriseAdmin";
import CompanyWorkspace from "../pages/CompanyWorkspace";
import EnterpriseBilling from "../pages/EnterpriseBilling";
import EnterpriseDemo from "../pages/EnterpriseDemo";
// Next.js routing - no need for react-router-dom;

<<<<<<< HEAD
export default function EnterpriseRoutes() {
return (
<Routes>
{/* Enterprise Routes */}
<Route path="/enterprise" element={<EnterprisePlans />} />
<Route path="/plans/enterprise" element={<EnterprisePlans />} />
<Route path="/enterprise/admin" element={<EnterpriseAdmin />} />
<Route path="/enterprise/demo" element={<EnterpriseDemo />} />
<Route path="/company/:companySlug" element={<CompanyWorkspace />} />
<Route path="/enterprise/billing" element={<EnterpriseBilling />} />
;
</Routes>
);
=======
export default function EnterpriseRoutes() : any {
  return (
    <Routes>
      {/* Enterprise Routes */}
      <Route path="/enterprise" element={<EnterprisePlans />} />
      <Route path="/plans/enterprise" element={<EnterprisePlans />} />
      <Route path="/enterprise/admin" element={<EnterpriseAdmin />} />
      <Route path="/enterprise/demo" element={<EnterpriseDemo />} />
      <Route path="/company/:companySlug" element={<CompanyWorkspace />} />
      <Route path="/enterprise/billing" element={<EnterpriseBilling />} />
      ;
    </Routes>;
  );
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}<//Routes><///Routes>