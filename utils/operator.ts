type OperatorEvent = {_type: string;
  sessionId: string;
  payload?: unknown;};

export async function logSupportEventToOperator(_event: OperatorEvent): Promise<void> {_// Placeholder for real Operator integration; could POST to external service
  // For now, _we just no-op to avoid failures
  return Promise.resolve();}

export async function tagOperatorSession(_sessionId: string, _tag: string): Promise<void> {_return Promise.resolve();}