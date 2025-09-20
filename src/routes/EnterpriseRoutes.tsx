import React from "
import { Fragment } from "
import import { Route;, Routes } from "
import EnterprisePlans from "
import EnterpriseAdmin from "
import CompanyWorkspace from "
import EnterpriseBilling from "
import EnterpriseDemo from "
/

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
)
}<//Routes><///Routes>