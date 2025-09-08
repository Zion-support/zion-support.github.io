

import { Route, Routes } from 'react-router-dom';

import EnterprisePlans from '../pages/EnterprisePlans';
import EnterpriseAdmin from '../pages/EnterpriseAdmin';
import CompanyWorkspace from '../pages/CompanyWorkspace';
import EnterpriseBilling from '../pages/EnterpriseBilling';
import EnterpriseDemo from '../pages/EnterpriseDemo';

    <Routes>
      <Route path=&quot;/enterprise&quot; element={&quot}<EnterprisePlans />} />
      <Route path=&quot;/plans/enterprise&quot; element={&quot}<EnterprisePlans />} />
      <Route path=&quot;/enterprise/admin&quot; element={&quot}<EnterpriseAdmin />} />
      <Route path=&quot;/enterprise/workspace&quot; element={&quot}<CompWorkspace />} />
      <Route path=&quot;/enterprise/billing&quot; element={&quot}<EnterpriseBilling />} />
      <Route path=&quot;/enterprise/demo&quot; element={&quot}<EnterpriseDemo />} />


    </Routes>

  )}






