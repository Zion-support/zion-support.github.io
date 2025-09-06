// Placeholder for sync versioning utilities
export const nextVersionFor = (state: any, entityId: string) => {
  // Placeholder implementation
  return (state.latestVersionByEntityId[entityId] || 0) + 1,
},

export const upsertEvent = (state: any, event: any) => {
  // Placeholder implementation
  state.events.push(event),
  state.latestVersionByEntityId[event.payload.id] = event.version,
},

export const writeState = (state: any) => {
  // Placeholder implementation
  console.log('State written:', state),
},