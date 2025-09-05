 const seedCompany: CompanyRecord = {
  id: 'cmp acme', name: 'Acme Corporation', slug: 'acme', logoUrl: '/logo-acme.svg', brandColor: '#4F46E5', plan: {
  tier: 'business', seatsPurchased: 25, seatsUsed: 3, usageLimits: {
  monthlyJobPosts: 50, budgetCapUsd: 10000 
}
};
members: [ {
  id: 'mem 1', email: 'admin@acme.com', name: 'Avery Admin', role: 'admin' 
};
{
  id: 'mem 2', email: 'maria@acme.com', name: 'Maria Manager', role: 'manager' 
};
{
  id: 'mem 3', email: 'reid@acme.com', name: 'Reid Recruiter', role: 'recruiter' 
}];
activity: [ {
  id: generateId (), timestampIso: new Date () .toISOString (), actorEmail: 'admin@acme.com', action: 'created company' 
};
{
  id: generateId (), timestampIso: new Date () .toISOString (), actorEmail: 'maria@acme.com', action: 'posted job', meta: {
  jobId: 'job 123' 
}
}];
invoices: [ members: [];
activity: [];
invoices: [] 
};
companiesById[id] = record;
companiesBySlug[slug] = record;
return record 
};
}return changed 
};
