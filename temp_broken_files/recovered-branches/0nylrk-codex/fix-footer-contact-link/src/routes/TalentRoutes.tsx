 const TalentRoutes = () => {
  return (<Routes> {
  /* Talent Routes */ 
}<Route path="/talent" element= {
  <TalentDirectory /> 
}/> <Route path="/talents" element= {
  <TalentsPage /> 
}/> <Route path="/talent/:id" element= {
  <TalentProfilePage /> 
}/> <Route path="/saved-talents" element= {
  <ProtectedRoute> 
}/> <Route <CreateTalentProfile /> </ProtectedRoute> 
}/> </Routes>) 
};
export default TalentRoutes;
