 const state = readState ();
if (!state.config.optIn || state.config.paused) {
  
}const {
  txId, token, amount, fromSubnet, toSubnet, timestamp 
}= req.body as {
  txId: string;
token: string;
amount: number;
fromSubnet: string;
toSubnet: string;
timestamp?: number 
};
}const version = nextVersionFor (state, txId);
const event = {
  eventId: uuidv4 ();
type: "token transfer" as const;
payload: {
  id: txId, txId, token, amount, fromSubnet, toSubnet, timestamp: timestamp || Date.now () 
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