<<<<<<< HEAD
type OperatorEvent = {
  type: string,
  sessionId: string,
  payload?: any
},

export async function logSupportEventToOperator(event: OperatorEvent): Promise<void> {
  // Placeholder for real Operator integration, could POST to external service
  // For now, we just no-op to avoid failures
  return Promise.resolve()
}

export async function tagOperatorSession(sessionId: string, tag: string): Promise<void> {
  return Promise.resolve()
}
=======
type OperatorEvent = {_type: string;
  sessionId: string;
  payload?: unknown;};

export async function logSupportEventToOperator(_event: OperatorEvent): Promise<void> {_// Placeholder for real Operator integration; could POST to external service
  // For now, _we just no-op to avoid failures
  return Promise.resolve();}

export async function tagOperatorSession(_sessionId: string, _tag: string): Promise<void> {_return Promise.resolve();}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
