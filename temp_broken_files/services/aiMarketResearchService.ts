 async analyzeMarketTrends (request: MarketResearchRequest) : Promise<MarketTrend[]> {
  try {
  const response = await fetch (`$ {
  this.baseUrl 
}/api/market-research/trends`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  this.apiKey 
}`;
'Content-Type': 'application/json' 
};
body: JSON.stringify (request) 
});
}async analyzeCompetitors (request: MarketResearchRequest) : Promise<CompetitorAnalysis[]> {
  try {
  const response = await fetch (`$ {
  this.baseUrl 
}/api/market-research/competitors`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  this.apiKey 
}`;
'Content-Type': 'application/json' 
};
body: JSON.stringify (request) 
});
}async segmentMarket (request: MarketResearchRequest) : Promise<MarketSegment[]> {
  try {
  const response = await fetch (`$ {
  this.baseUrl 
}/api/market-research/segments`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  this.apiKey 
}`;
'Content-Type': 'application/json' 
};
body: JSON.stringify (request) 
});
}async generateComprehensiveReport (request: MarketResearchRequest) : Promise<MarketReport> {
  try {
  const response = await fetch (`$ {
  this.baseUrl 
}/api/market-research/comprehensive`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  this.apiKey 
}`;
'Content-Type': 'application/json' 
};
body: JSON.stringify (request) 
});
}async exportReport (reportId: string, format: 'pdf' | 'csv' | 'excel') : Promise<string> {
  try {
  const response = await fetch (`$ {
  this.baseUrl 
}/api/market-research/export/$ {
  reportId 
}`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  this.apiKey 
}`;
'Content-Type': 'application/json' 
};
}async scheduleReport (request: MarketResearchRequest, schedule: 'daily' | 'weekly' | 'monthly') : Promise<string> {
  try {
  const response = await fetch (`$ {
  this.baseUrl 
}/api/market-research/schedule`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  this.apiKey 
}`;
'Content-Type': 'application/json' 
};
