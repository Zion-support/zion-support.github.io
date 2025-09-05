<<<<<<< HEAD
type OperatorEvent = {;
  type:string,;
  sessionId:string,;
  payload?:any;
},;
;
export async function logSupportEventToOperator(event:OperatorEvent):Promise<void> {;
  // Placeholder for real Operator integration, could POST to external service;
  // For now, we just no-op to avoid failures;
  return Promise.resolve(),;
=======
type OperatorEvent = {
  type: string,
  sessionId: string,
  payload?: any
},

export async function logSupportEventToOperator(event: OperatorEvent): Promise<void> {
  // Placeholder for real Operator integration, could POST to external service
  // For now, we just no-op to avoid failures
  return Promise.resolve()
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export async function tagOperatorSession(sessionId:string, tag:string):Promise<void> {;
  return Promise.resolve();
}