import React from &apos;react';
import { Route, Routes } from &apos;react-router-dom';
import EnterprisePlans from &apos;../pages/EnterprisePlans';
import EnterpriseAdmin from &apos;../pages/EnterpriseAdmin';
import CompWorkspace from &apos;../pages/CompWorkspace';
import EnterpriseBilling from &apos;../pages/EnterpriseBilling';
import EnterpriseDemo from &apos;../pages/EnterpriseDemo';&apos;&apos;

export default function EnterpriseRoutes() ;{
  return (}
    <Routes>
      <Route path=&quot;/enterprise&quot; element={&quot;}<EnterprisePlans />} />
      <Route path=&quot;/plans/enterprise&quot; element={&quot;}<EnterprisePlans />} />
      <Route path=&quot;/enterprise/admin&quot; element={&quot;}<EnterpriseAdmin />} />
      <Route path=&quot;/enterprise/workspace&quot; element={&quot;}<CompWorkspace />} />
      <Route path=&quot;/enterprise/billing&quot; element={&quot;}<EnterpriseBilling />} />
      <Route path=&quot;/enterprise/demo&quot; element={&quot;}<EnterpriseDemo />} />
    </Routes>
  );
}