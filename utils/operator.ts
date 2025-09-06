<<<<<<< HEAD
type OperatorEvent = {
  type: string;
  sessionId: string;
  payload?: any;
};

export async function logSupportEventToOperator(
  event: OperatorEvent
): Promise<void> {
  // Placeholder for real Operator integration; could POST to external service
  // For now, we just no-op to avoid failures
  return Promise.resolve();
}

export async function tagOperatorSession(
  sessionId: string,
  tag: string
): Promise<void> {
  return Promise.resolve();
}
=======
 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
