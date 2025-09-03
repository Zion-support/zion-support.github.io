<<<<<<< HEAD
import React from &apos;react';
import { Route, Routes } from &apos;react-router-dom';
import EnterprisePlans from &apos;../pages/EnterprisePlans';
import EnterpriseAdmin from &apos;../pages/EnterpriseAdmin';
import CompWorkspace from &apos;../pages/CompWorkspace';
import EnterpriseBilling from &apos;../pages/EnterpriseBilling';
import EnterpriseDemo from &apos;../pages/EnterpriseDemo';&apos;&apos;

export default function EnterpriseRoutes() ;{
  return (}
=======
import { Route, Routes } from 'react-router-dom';
import EnterprisePlans from '../pages/EnterprisePlans';
import EnterpriseAdmin from '../pages/EnterpriseAdmin';
import CompWorkspace from '../pages/CompWorkspace';
import EnterpriseBilling from '../pages/EnterpriseBilling';
import EnterpriseDemo from '../pages/EnterpriseDemo';
export default function EnterpriseRoutes() {
  return (
>>>>>>> main
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