 
}function defaultState () : MultiverseState {
  return {
  config: defaultConfig (), lastSyncedAt: 0, seenEventIds: {
  
};
latestVersionByEntityId: {
  
};
proposalMerkleById: {
  
};
events: [] 
}
}state.events.push (event);
state.seenEventIds[event.eventId] = true;
state.lastSyncedAt = Math.max (state.lastSyncedAt || 0, event.timestamp || 0);
return state 
}case "token transfer": return (event.payload as any) .txId;
case "talent mobility": return (event.payload as any) .personId + ":" + (event.payload as any) .startDate;
case "dao endorsement": return (event.payload as any) .resolutionId;
case "leaderboard entry": return (event.payload as any) .subjectId + ":" + (event.payload as any) .period;
default: 
}