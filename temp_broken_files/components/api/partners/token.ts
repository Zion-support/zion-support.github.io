 
}const {
  apiKey, ttlSeconds 
}= req.body || {
  
};
if (!apiKey) {
  
}const match = await findPartnerByApiKey (apiKey);
if (!match) {
  
}const {
  partner, apiKey: key 
}= match;
const token = signJwt ({
  sub: partner.id;
apiKeyId: key.id;
name: partner.name;
entityType: partner.entityType;
useCaseType: partner.useCaseType 
}as any;
typeof ttlSeconds === "number" ? Math.max (300, Math.min (86400, ttlSeconds) ) : 3600);
return res.status (200) .json ({
  token, partner: {
  id: partner.id, name: partner.name 
}
}) ======= typeof ttlSeconds === "number" ? Math.max (300, Math.min (86400, ttlSeconds) ) : 3600);
}