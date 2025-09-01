import { Route, Routes } from 'react-router-dom';
import EnterprisePlans from "../pages/EnterprisePlans.jsx";
import EnterpriseAdmin from "../pages/EnterpriseAdmin.jsx";
import CompWorkspace from "../pages/CompWorkspace";
import EnterpriseBilling from "../pages/EnterpriseBilling.jsx";
import EnterpriseDemo from "../pages/EnterpriseDemo.jsx";

export default function EnterpriseRoutes() {
  return (
    <Routes>
      {/* Enterprise Routes */}
      <Route path = "/enterprise" element={<EnterprisePlans />} />
      <Route path="/plans/enterprise" element={<EnterprisePlans />} />
