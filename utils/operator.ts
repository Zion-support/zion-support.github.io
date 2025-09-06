// Operator utilities for support escalation and monitoring
export interface OperatorEvent {
  id: string;
  type: 'chat_completion' | 'escalation' | 'feedback' | 'alert';
  sessionId: string;
  payload: any;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'new' | 'assigned' | 'in_progress' | 'resolved' | 'closed';
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
}

export interface OperatorMetrics {
  totalEvents: number;
  resolvedEvents: number;
  averageResolutionTime: number;
  eventsByType: Record<string, number>;
  eventsByPriority: Record<string, number>;
  eventsByStatus: Record<string, number>;
}

// Mock operator events store
const operatorEvents: OperatorEvent[] = [];

export function logSupportEventToOperator(event: Omit<OperatorEvent, 'id' | 'createdAt' | 'updatedAt' | 'priority' | 'status'>): void {
  const operatorEvent: OperatorEvent = {
    ...event,
    id: `op_event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    priority: determinePriority(event),
    status: 'new',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  operatorEvents.push(operatorEvent);
  
  // In a real app, this would trigger notifications to operators
  console.log('Operator Event Logged:', operatorEvent);
}

function determinePriority(event: Omit<OperatorEvent, 'id' | 'createdAt' | 'updatedAt' | 'priority' | 'status'>): 'low' | 'medium' | 'high' | 'urgent' {
  // Simple priority determination based on event type and content
  if (event.type === 'alert') {
    return 'urgent';
  }
  
  if (event.type === 'escalation') {
    return 'high';
  }
  
  if (event.type === 'chat_completion') {
    // Check if there are any error indicators in the payload
    const payloadStr = JSON.stringify(event.payload).toLowerCase();
    if (payloadStr.includes('error') || payloadStr.includes('failed') || payloadStr.includes('issue')) {
      return 'medium';
    }
    return 'low';
  }
  
  return 'medium';
}

export function getOperatorEvents(filters?: {
  type?: string;
  priority?: string;
  status?: string;
  assignedTo?: string;
  limit?: number;
}): OperatorEvent[] {
  let filtered = [...operatorEvents];
  
  if (filters) {
    if (filters.type) {
      filtered = filtered.filter(event => event.type === filters.type);
    }
    if (filters.priority) {
      filtered = filtered.filter(event => event.priority === filters.priority);
    }
    if (filters.status) {
      filtered = filtered.filter(event => event.status === filters.status);
    }
    if (filters.assignedTo) {
      filtered = filtered.filter(event => event.assignedTo === filters.assignedTo);
    }
  }
  
  // Sort by priority and creation time
  filtered.sort((a, b) => {
    const priorityOrder = { urgent: 4, high: 3, medium: 2, low: 1 };
    const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
    if (priorityDiff !== 0) return priorityDiff;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  
  if (filters?.limit) {
    filtered = filtered.slice(0, filters.limit);
  }
  
  return filtered;
}

export function updateOperatorEvent(id: string, updates: Partial<OperatorEvent>): OperatorEvent | null {
  const index = operatorEvents.findIndex(event => event.id === id);
  if (index === -1) return null;
  
  operatorEvents[index] = {
    ...operatorEvents[index],
    ...updates,
    updatedAt: new Date().toISOString(),
    resolvedAt: updates.status === 'resolved' ? new Date().toISOString() : operatorEvents[index].resolvedAt
  };
  
  return operatorEvents[index];
}

export function assignOperatorEvent(id: string, assignedTo: string): OperatorEvent | null {
  return updateOperatorEvent(id, { 
    assignedTo, 
    status: 'assigned' 
  });
}

export function resolveOperatorEvent(id: string, resolution?: string): OperatorEvent | null {
  return updateOperatorEvent(id, { 
    status: 'resolved',
    resolvedAt: new Date().toISOString(),
    payload: {
      ...operatorEvents.find(e => e.id === id)?.payload,
      resolution
    }
  });
}

export function getOperatorMetrics(): OperatorMetrics {
  const totalEvents = operatorEvents.length;
  const resolvedEvents = operatorEvents.filter(event => event.status === 'resolved').length;
  
  // Calculate average resolution time
  const resolvedWithTime = operatorEvents.filter(event => 
    event.status === 'resolved' && event.resolvedAt
  );
  
  const averageResolutionTime = resolvedWithTime.length > 0
    ? resolvedWithTime.reduce((sum, event) => {
        const created = new Date(event.createdAt).getTime();
        const resolved = new Date(event.resolvedAt!).getTime();
        return sum + (resolved - created);
      }, 0) / resolvedWithTime.length / (1000 * 60) // Convert to minutes
    : 0;
  
  // Count events by type
  const eventsByType = operatorEvents.reduce((acc, event) => {
    acc[event.type] = (acc[event.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // Count events by priority
  const eventsByPriority = operatorEvents.reduce((acc, event) => {
    acc[event.priority] = (acc[event.priority] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // Count events by status
  const eventsByStatus = operatorEvents.reduce((acc, event) => {
    acc[event.status] = (acc[event.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  return {
    totalEvents,
    resolvedEvents,
    averageResolutionTime,
    eventsByType,
    eventsByPriority,
    eventsByStatus
  };
}

export function getOperatorDashboard(): {
  metrics: OperatorMetrics;
  recentEvents: OperatorEvent[];
  urgentEvents: OperatorEvent[];
} {
  return {
    metrics: getOperatorMetrics(),
    recentEvents: getOperatorEvents({ limit: 10 }),
    urgentEvents: getOperatorEvents({ priority: 'urgent', status: 'new' })
  };
}