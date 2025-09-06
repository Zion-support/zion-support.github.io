// Operator utilities
export interface OperatorEvent {
  type: string;
  sessionId: string;
  payload: any;
  timestamp?: string;
}

export interface OperatorLog {
  id: string;
  type: string;
  sessionId: string;
  payload: any;
  timestamp: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

class OperatorLogger {
  private logs: OperatorLog[] = [];

  async log(event: OperatorEvent): Promise<void> {
    const log: OperatorLog = {
      id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: event.type,
      sessionId: event.sessionId,
      payload: event.payload,
      timestamp: event.timestamp || new Date().toISOString(),
      severity: this.determineSeverity(event.type)
    };

    this.logs.push(log);
    
    // In a real app, this would be sent to a logging service
    console.log('Operator log:', log);
  }

  private determineSeverity(type: string): 'low' | 'medium' | 'high' | 'critical' {
    switch (type) {
      case 'chat_completion':
        return 'low';
      case 'user_error':
        return 'medium';
      case 'system_error':
        return 'high';
      case 'security_alert':
        return 'critical';
      default:
        return 'low';
    }
  }

  getLogs(sessionId?: string): OperatorLog[] {
    if (sessionId) {
      return this.logs.filter(log => log.sessionId === sessionId);
    }
    return this.logs;
  }

  getLogsBySeverity(severity: OperatorLog['severity']): OperatorLog[] {
    return this.logs.filter(log => log.severity === severity);
  }
}

export const operatorLogger = new OperatorLogger();

export async function logSupportEventToOperator(event: OperatorEvent): Promise<void> {
  await operatorLogger.log(event);
}