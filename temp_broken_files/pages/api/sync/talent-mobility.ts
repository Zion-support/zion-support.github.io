 const state = readState ();
if (!state.config.optIn || state.config.paused) {
  
}const {
  personId, fromNation, toNation, role, startDate, endDate 
}= req.body as {
  personId: string, fromNation: string, toNation: string, role: string, startDate: string, endDate?: string 
};
if (!personId || !fromNation || !toNation || !role || !startDate) {
  
}const entityKey = `$ {
  personId 
}:$ {
  startDate 
}`;
const version = nextVersionFor (state, entityKey);
const event = {
  eventId: uuidv4 ();
type: "talent mobility" as const;
payload: {
  id: entityKey, personId, fromNation, toNation, role, startDate, endDate 
};
version;
timestamp: Date.now () 
};
upsertEvent (state, event);
writeState (state);
await axios.post (url, body, {
  headers, timeout: 5000 
}) 
}catch {
  
}
}) );
}