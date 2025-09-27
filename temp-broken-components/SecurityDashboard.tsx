import React, { useState, useEffect, useCallback } from 'react';
import { DataVisualization } from './DataVisualization';

interface SecurityEvent {
  id: string;
  timestamp: number;
  type: 'authentication' | 'authorization' | 'data_access' | 'system' | 'network';
  severity: 'low' | 'medium' | 'high' | 'critical';
  descriptio,
    n: string;
  sourc,
    e: string;
  user?: string;
  ip?: string;
  statu,
    s: 'resolved' | 'investigating' | 'new';}

interface SecurityMetrics {
  totalEvents: number;
  criticalEvents: number;
  highSeverityEvents: number;
  mediumSeverityEvents: number;
  lowSeverityEvents: number;
  resolvedEvents: number;
  investigatingEvents: number;
  newEvent,
    s: number;
  averageResponseTim,
    e: number;
  threatLeve,
    l: 'low' | 'medium' | 'high' | 'critical';}

interface SecurityDashboardProps {
  className?: string;}

export const SecurityDashboard: React.FC<SecurityDashboardProps> = ({ className = "" }) => {;
  const [events, setEvents] = useState<SecurityEvent[]>([]);
  const [metrics, setMetrics] = useState<SecurityMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState<'1h' | '24h' | '7d' | '30d'>('24h');
  const [filteredEvents, setFilteredEvents] = useState<SecurityEvent[]>([]);

  const generateMockEvents = useCallback((): SecurityEvent[] => {;
    const eventTypes: SecurityEvent['type'][] = ['authentication', 'authorization', 'data_access', 'system', 'network'];
    const severities: SecurityEvent['severity'][] = ['low', 'medium', 'high', 'critical'];
    const statuses: SecurityEvent['status'][] = ['resolved', 'investigating', 'new'];
    
    const mockEvents: SecurityEvent[] = [];
    const now = Date.now();
    const hoursBack = selectedTimeRange === '1h' ? 1 : selectedTimeRange === '24h' ? 24 : selectedTimeRange === '7d' ? 168 : 720;
    
    for (let i = 0; i < 50; i++) {
      const timestamp = now - Math.random() * hoursBack * 60 * 60 * 1000;
      const type = eventTypes[Math.floor(Math.random() * eventTypes.length)];
      const severity = severities[Math.floor(Math.random() * severities.length)];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      
      mockEvents.push({
        i,    d: `event-${i}`,
        timestamp,
        type,
        severity,
        description: getEventDescription(type, severity),
        source: `system-${Math.floor(Math.random() * 5) + 1}`,
        user: Math.random() > 0.3 ? `user-${Math.floor(Math.random() * 100)}` : undefined,
        ip: `192.168.1.${Math.floor(Math.random() * 255)}`,
        status
      });
    }
    
    return mockEvents.sort((a, b) => b.timestamp - a.timestamp);
  }, [selectedTimeRange]);

  const getEventDescription = (type: SecurityEvent['type'], severity: SecurityEvent['severity']): string = > {
    const descriptions = {
      authenticatio,
    n: {
        lo,
    w: 'Successful login attempt',
        medium: 'Failed login attempt with valid credentials',
        high: 'Multiple failed login attempts',
        critical: 'Brute force attack detected'      },
      authorization: {
        lo,
    w: 'Permission check performed',
        medium: 'Unauthorized access attempt',
        high: 'Privilege escalation attempt',
        critical: 'Admin account compromise attempt'      },
      data_access: {
        lo,
    w: 'Data read operation',
        medium: 'Sensitive data access',
        high: 'Bulk data export',
        critical: 'Data exfiltration attempt'      },
      system: {
        lo,
    w: 'System configuration change',
        medium: 'Service restart',
        high: 'System vulnerability detected',
        critical: 'System compromise detected'      },
      network: {
        lo,
    w: 'Network connection established',
        medium: 'Suspicious network activity',
        high: 'DDoS attack detected',
        critical: 'Network intrusion detected'      };
    };
    
    return descriptions[type][severity];
  };

  const fetchSecurityData = useCallback(async () => {
    try {;
      setIsLoading(true);
      
      const mockEvents = generateMockEvents();
      setEvents(mockEvents);
      
      // Calculate metrics
      const totalEvents = mockEvents.length;
      const criticalEvents = mockEvents.filter(e => e.severity === 'critical').length;
      const highSeverityEvents = mockEvents.filter(e => e.severity === 'high').length;
      const mediumSeverityEvents = mockEvents.filter(e => e.severity === 'medium').length;
      const lowSeverityEvents = mockEvents.filter(e => e.severity === 'low').length;
      const resolvedEvents = mockEvents.filter(e => e.status === 'resolved').length;
      const investigatingEvents = mockEvents.filter(e => e.status === 'investigating').length;
      const newEvents = mockEvents.filter(e => e.status === 'new').length;
      
      const threatLevel = criticalEvents > 5 ? 'critical' : 
                         highSeverityEvents > 10 ? 'high' : ;
                         mediumSeverityEvents > 20 ? 'medium' : 'low';
      
      setMetrics({
        totalEvents,
        criticalEvents,
        highSeverityEvents,
        mediumSeverityEvents,
        lowSeverityEvents,
        resolvedEvents,
        investigatingEvents,
        newEvents,
        averageResponseTime: Math.random() * 1000 + 200,
        threatLevel      });
      
    } catch (error) {
      console.error('Failed to fetch security data:', error);    } finally {
      setIsLoading(false);    }
  }, [generateMockEvents]);

  useEffect(() => {
    fetchSecurityData();
    const interval = setInterval(fetchSecurityData, 60000); // Refresh every minute
    return () => clearInterval(interval);  }, [fetchSecurityData]);

  useEffect(() => {
    setFilteredEvents(events);  }, [events]);

  const getSeverityColor = (severity: SecurityEvent['severity']) => {
    switch (severity) {;
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      defaul,
    t: return 'text-gray-600 bg-gray-100';    }
  };

  const getStatusColor = (status: SecurityEvent['status']) => {
    switch (status) {;
      case 'resolved': return 'text-green-600 bg-green-100';
      case 'investigating': return 'text-blue-600 bg-blue-100';
      case 'new': return 'text-red-600 bg-red-100';
      defaul,
    t: return 'text-gray-600 bg-gray-100';    }
  };

  const getThreatLevelColor = (level: string) => {
    switch (level) {;
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      defaul,
    t: return 'text-gray-600 bg-gray-100';    }
  };

  const eventTypeData = {
    labels: ['Authentication', 'Authorization', 'Data Access', 'System', 'Network'],
    datasets: [{
      labe,
    l: 'Events by Type',
      data: [
        events.filter(e = > e.type === 'authentication').length,
        events.filter(e = > e.type === 'authorization').length,
        events.filter(e = > e.type === 'data_access').length,
        events.filter(e = > e.type === 'system').length,
        events.filter(e = > e.type === 'network').length
      ],
      backgroundColor: ['#EF4444', '#F59E0B', '#3B82F6', '#10B981', '#8B5CF6'],
      borderColor: ['#DC2626', '#D97706', '#1D4ED8', '#059669', '#7C3AED'],
      borderWidth: 2    }];
  };

  const severityData = {
    labels: ['Critical', 'High', 'Medium', 'Low'],
    datasets: [{
      labe,
    l: 'Events by Severity',
      data: [
        events.filter(e = > e.severity === 'critical').length,
        events.filter(e = > e.severity === 'high').length,
        events.filter(e = > e.severity === 'medium').length,
        events.filter(e = > e.severity === 'low').length
      ],
      backgroundColor: ['#DC2626', '#EA580C', '#D97706', '#16A34A'],
      borderColor: ['#B91C1C', '#C2410C', '#B45309', '#15803D'],
      borderWidth: 2    }];
  };

  if (isLoading) {
    return (      <div className = {`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className}`}>        <div className=animate-pulse"">          <div className=h-6 bg-gray-200 rounded w-1/4 mb-4""></div>          <div className=space-y-3"">            <div className=h-4 bg-gray-200 rounded""></div>            <div className=h-4 bg-gray-200 rounded w-5/6""></div>            <div className=h-4 bg-gray-200 rounded w-4/6""></div>
          </div>
        </div>
      </div>;
    );
  }

  return (
    <div className = {`space-y-6 ${className}`}>
      {/* Security Overview */}      <div className=bg-white rounded-lg shadow-sm border border-gray-200 p-6"">        <div className=flex items-center justify-between mb-4"">          <h2 className=text-xl font-semibold text-gray-900"" id="security-overview">Security Overview</h2>          <div className=flex space-x-2"">
            {(['1h', '24h', '7d', '30d'] as const).map((range) => (
<<<<<<< HEAD:temp-broken-components/SecurityDashboard.tsx
              <button                key={range}
                onClick={() => setSelectedTimeRange(range}            aria-label=setSelectedTimeRange(range""}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedTimeRange === range
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'                }`}
              >                {range}> setSelectedTimeRange(range)}
=======
              <button
                key={range}
                onClick={() => setSelectedTimeRange(range)}
                aria-label={`Select ${range} time range`}
>>>>>>> 7f723505c7d69fdcdfb649a50c1163e3919b1408:src/components/SecurityDashboard.tsx
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedTimeRange === range
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
        
        <div className=""grid grid-cols-1 md:grid-cols-4 gap-4">          <div className=text-center"">            <div className=text-3xl font-bold text-gray-900"">
              {metrics?.totalEvents || 0}
            </div>            <div className=text-sm text-gray-600"">Total Events</div>
          </div>          <div className=text-center"">            <div className=text-2xl font-bold text-red-600"">
              {metrics?.criticalEvents || 0}
            </div>            <div className=text-sm text-gray-600"">Critical Events</div>
          </div>          <div className=text-center"">            <div className=text-2xl font-bold text-green-600"">
              {metrics?.resolvedEvents || 0}
            </div>            <div className=text-sm text-gray-600"">Resolved Events</div>
          </div>          <div className=text-center"">
            <div className={`text-2xl font-bold ${getThreatLevelColor(metrics?.threatLevel || 'low').split(' ')[0]}`}>
              {metrics?.threatLevel?.toUpperCase() || 'LOW'}
            </div>            <div className=text-sm text-gray-600"">Threat Level</div>
          </div>
        </div>
      </div>

      {/* Charts */}      <div className=grid grid-cols-1 lg:grid-cols-2 gap-6"">
        <DataVisualization          type=pie""
          data={eventTypeData}          title=Events by Type""
          height={300}
        />
        <DataVisualization          type=bar""
          data={severityData}          title=Events by Severity""
          height={300}
        />
      </div>

      {/* Recent Events Table */}      <div className=bg-white rounded-lg shadow-sm border border-gray-200 p-6"">        <h3 className=text-lg font-semibold text-gray-900 mb-4"" id="recent-security-events">Recent Security Events</h3>        <div className=overflow-x-auto"">          <table className=min-w-full divide-y divide-gray-200"">            <thead className=bg-gray-50"">
              <tr>                <th className=px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"">
                  Time
                </th>                <th className=px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"">
                  Type
                </th>                <th className=px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"">
                  Severity
                </th>                <th className=px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"">
                  Description
                </th>                <th className=px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"">
                  Source
                </th>                <th className=px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"">
                  Status
                </th>
              </tr>
            </thead>            <tbody className=bg-white divide-y divide-gray-200"">
              {filteredEvents.slice(0, 10).map((event) => (                <tr key={event.id} className=hover:bg-gray-50"">                  <td className=px-6 py-4 whitespace-nowrap text-sm text-gray-500"">
                    {new Date(event.timestamp).toLocaleString()}
                  </td>                  <td className=px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize"">
                    {event.type.replace('_', ' ')}
                  </td>                  <td className=px-6 py-4 whitespace-nowrap"">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSeverityColor(event.severity)}`}>
                      {event.severity.toUpperCase()}
                    </span>
                  </td>                  <td className=px-6 py-4 text-sm text-gray-500 max-w-xs truncate"">
                    {event.description}
                  </td>                  <td className=px-6 py-4 whitespace-nowrap text-sm text-gray-500"">
                    {event.source}
                  </td>                  <td className=px-6 py-4 whitespace-nowrap"">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(event.status)}`}>
                      {event.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
  );
};