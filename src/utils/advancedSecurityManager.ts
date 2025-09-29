/**
 * Advanced Security Manager
 * Provides comprehensive security monitoring and threat detection
 */

export interface SecurityEvent {
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: number;
  source: string;
  details: Record<string, unknown>;
}

export interface SecurityMetrics {
  totalEvents: number;
  blockedEvents: number;
  eventsByType: Record<string, number>;
  eventsBySeverity: Record<string, number>;
  threatLevel: 'low' | 'medium' | 'high' | 'critical';
}

export class AdvancedSecurityManager {
  private events: SecurityEvent[] = [];
  private metrics: SecurityMetrics;
  private maxEvents: number = 1000;

  constructor() {
    this.metrics = {
      totalEvents: 0,
      blockedEvents: 0,
      eventsByType: {},
      eventsBySeverity: {},
      threatLevel: 'low'
    };
  }

  logEvent(event: SecurityEvent): void {
    this.events.push(event);
    this.updateMetrics(event);
    this.cleanupOldEvents();
  }

  private updateMetrics(event: SecurityEvent): void {
    this.metrics.totalEvents++;
    
    if (event.severity === 'critical' || event.severity === 'high') {
      this.metrics.blockedEvents++;
    }

    this.metrics.eventsByType[event.type] = (this.metrics.eventsByType[event.type] || 0) + 1;
    this.metrics.eventsBySeverity[event.severity] = (this.metrics.eventsBySeverity[event.severity] || 0) + 1;

    this.updateThreatLevel();
  }

  private updateThreatLevel(): void {
    const criticalCount = this.metrics.eventsBySeverity.critical || 0;
    const highCount = this.metrics.eventsBySeverity.high || 0;
    
    if (criticalCount > 5 || highCount > 20) {
      this.metrics.threatLevel = 'critical';
    } else if (criticalCount > 2 || highCount > 10) {
      this.metrics.threatLevel = 'high';
    } else if (highCount > 5) {
      this.metrics.threatLevel = 'medium';
    } else {
      this.metrics.threatLevel = 'low';
    }
  }

  private cleanupOldEvents(): void {
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents);
    }
  }

  getMetrics(): SecurityMetrics {
    return { ...this.metrics };
  }

  getRecentEvents(count: number = 10): SecurityEvent[] {
    return this.events.slice(-count);
  }

  clearEvents(): void {
    this.events = [];
    this.metrics = {
      totalEvents: 0,
      blockedEvents: 0,
      eventsByType: {},
      eventsBySeverity: {},
      threatLevel: 'low'
    };
  }
}
