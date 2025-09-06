 const state = readState ();
if (!state.config.optIn || state.config.paused) {
  
}const event = payload as SyncEvent & {
  propagate?: boolean 
};
if (!event || !event.type || !event.eventId) {
  
}const computed = computeMerkleRootFromVotes (votes);
if (computed !== providedRoot) {
  
}
}const entityId = getEntityId (event);
const currentState = readState ();
upsertEvent (currentState, event);
writeState (currentState);
const alreadyPropagated = payload.propagate === false;
if (!alreadyPropagated && currentState.config.peers.length > 0) {
  await axios.post (url, localBody, {
  headers, timeout: 5000 
}) 
}catch {
  // ignore peer failure 
}
}) ) 
}
}