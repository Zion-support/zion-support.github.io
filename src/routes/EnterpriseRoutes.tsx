
export default function EnterpriseRoutes() {
  return (
    <Routes>
      {/* Enterprise Routes */}
      <Route path = "/enterprise" element={<EnterprisePlans  />} />
      <Route path="/plans/enterprise" element={<EnterprisePlans  />} />
