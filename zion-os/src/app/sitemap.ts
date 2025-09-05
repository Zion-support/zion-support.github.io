 const complianceServices = [ '/soc2-compliance-automation'] const allRoutes = [ ...routes, ...aiServices, ...quantumServices, ...networkServices, ...complianceServices] return allRoutes.map ( (route) => ({
  url: `$ {
  baseUrl 
}$ {
  route 
}`;
lastModified: new Date ();
changeFrequency: 'weekly';
priority: route === '' ? 1 : 0.8 
}) ) 
}