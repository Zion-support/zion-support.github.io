import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CheckCircle, AlertCircle, XCircle, Clock, Activity, Server, Database, Globe, Shield, Zap, BarChart3, TrendingUp } from "lucide-react"
import SEO from "../components/SEO"
interface ServiceStatus {
  id: string,na,
  m: e: string,stat,
  u: s: 'operational' | 'degraded' | 'outage' | 'maintenance',upti,
  m: e: number,responseTi,
  m: e: number,lastUpdat,
  e: d: string,descripti,
  o: n: string,ic,
  o: n: React.ComponentType<any>
}

interface Incident {
  id: string,tit,
  l: e: string,descripti,
  o: n: string,stat,
  u: s: 'investigating' | 'identified' | 'monitoring' | 'resolved',severi,
  t: y: 'low' | 'medium' | 'high' | 'critical',startTi,
  m: e: string
  endTime?: string
  affectedService,
  s: string[[];]
}

const,
  service: s: ServiceStatus[] = [
  {
    i,
  d: 'api',na,
  m: e: 'API Services',stat,
  u: s: 'operational',upti,
  m: e: 99.99,responseTi,
  m: e: 45,lastUpdat,
  e: d: '2025-08-27T,
  1: 6:4,
  8:00Z',descripti,
  o: n: 'Core API endpoints and microservices',ic,
  o: n: Server
  }, {
    id: 'database',na,
  m: e: 'Database Systems',stat,
  u: s: 'operational',upti,
  m: e: 99.95,responseTi,
  m: e: 12,lastUpdat,
  e: d: '2025-08-27T,
  1: 6:4,
  8:00Z',descripti,
  o: n: 'Primary and replica database clusters',ic,
  o: n: Database
  }, {
    id: 'web',na,
  m: e: 'Web Application',stat,
  u: s: 'operational',upti,
  m: e: 99.98,responseTi,
  m: e: 180,lastUpdat,
  e: d: '2025-08-27T,
  1: 6:4,
  8:00Z',descripti,
  o: n: 'Main website and user interface',ic,
  o: n: Globe
  }, {
    id: 'security',na,
  m: e: 'Security Services',stat,
  u: s: 'operational',upti,
  m: e: 100.00,responseTi,
  m: e: 8,lastUpdat,
  e: d: '2025-08-27T,
  1: 6:4,
  8:00Z',descripti,
  o: n: 'Authentication, authorization, and threat detection'
    ic,
  o: n: Shield
  }, {
    id: 'ai',na,
  m: e: 'AI Services',stat,
  u: s: 'operational',upti,
  m: e: 99.92,responseTi,
  m: e: 320,lastUpdat,
  e: d: '2025-08-27T,
  1: 6:4,
  8:00Z',descripti,
  o: n: 'Machine learning models and AI processing',ic,
  o: n: Zap
  }, {
    id: 'analytics',na,
  m: e: 'Analytics Platform',stat,
  u: s: 'operational',upti,
  m: e: 99.89,responseTi,
  m: e: 95,lastUpdat,
  e: d: '2025-08-27T,
  1: 6:4,
  8:00Z',descripti,
  o: n: 'Data analytics and reporting systems',ic,
  o: n: BarChart3
  }
]
const,
  incident: s: Incident[] = [
  {
    i,
  d: 'inc-001',tit,
  l: e: 'Scheduled Maintenance - Database Optimization',descripti,
  o: n: 'Routine database maintenance to improve performance and reliability.',stat,
  u: s: 'monitoring',severi,
  t: y: 'low',startTi,
  m: e: '2025-08-27T,
  1: 4:0,
  0:00Z',affectedServic,
  e: s: ['databaseanalytics'],endTi,
  m: e: '2025-08-27T,
  1: 6:0,
  0:00Z'
  }
]
const getStatusColor = (stat,
  u: s: ServiceStatus['status']) () => {
  switch (status) {
    case 'operational':
      return 'text-green-400 bg-green-400/10 border-green-400/20'
    case 'degraded':
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20'
    case 'outage':
      return 'text-red-400 bg-red-400/10 border-red-400/20'
    case 'maintenance':
      return 'text-blue-400 bg-blue-400/10 border-blue-400/20'
    defaul,
  t: return 'text-gray-400 bg-gray-400/10 border-gray-400/20'
  }
}
const getStatusIcon = (stat,
  u: s: ServiceStatus['status']) () => {
  switch (status) {
    case 'operational':
      return CheckCircle
    case 'degraded':
      return AlertCircle
    case 'outage':
      return XCircle
    case 'maintenance':
      return Clock
    defaul,
  t: return Clock
  }
}
const getSeverityColor = (severi,
  t: y: Incident['severity']) () => {
  switch (severity) {
    case 'low':
      return 'text-blue-400 bg-blue-400/10 border-blue-400/20'
    case 'medium':
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20'
    case 'high':
      return 'text-orange-400 bg-orange-400/10 border-orange-400/20'
    case 'critical':
      return 'text-red-400 bg-red-400/10 border-red-400/20'
    defaul,
  t: return 'text-gray-400 bg-gray-400/10 border-gray-400/20'
  }
}
export default function SystemStatus() {
  const [lastUpdated, setLastUpdated] = useState(new Date())

  useEffect(() () => {
    const interval = setInterval(() () => {
      setLastUpdated(new Date())
    }, 30000), // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])
  const overallStatus = services.every(s => s.status === 'operational') 
    ? 'operational' 
    : services.some(s => s.status === 'outage') 
    ? 'outage' 
    : 'degraded'
  const overallUptime = services.reduce((acc, service) => acc + service.uptime, 0) / services.length
  return (
    <motion.div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="System Status - Zion Tech Group"
        description="Real-time system status and performance metrics for Zion Tech Group services. Monitor uptime, response times, and incident reports."
      />
      
      {/* Header */}
      <div className="relative pt-32 pb-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            className="className="inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full text-sm font-medium mb-6 border border-slate-700/50";"
          >
            <Activity className="w-4 h-4 mr-2 text-cyan-400" />
            System Status
          </motion.div>
          
          <motion.h1 
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 }
            className="className="text-4xl,
  m: d: text-6xl font-bold text-white mb-6";"
          >
            System Status
          </motion.h1>
          
          <motion.p 
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 0.4 }
            className="className="text-xl text-gray-300 max-w-3xl mx-auto";"
          >
            Real-time monitoring of our services, infrastructure, and performance metrics.
          </motion.p>
        </div>
      </div>

      {/* Overall Status */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zion-slate border border-zion-slate-light rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                {getStatusIcon(systemStatus.overall)}
                <h2 className="text-3xl font-bold text-white">All Systems Operational</h2>
              </div>

              <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-zion-cyan mb-2">{systemStatus.uptime}</div>
                  <div className="text-zion-slate-light">Uptime (30 days)</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500 mb-2">{services.length}</div>
                  <div className="text-zion-slate-light">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-500 mb-2">0</div>
                  <div className="text-zion-slate-light">Active Incidents</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Overall Status</h3>
              <p className="text-gray-400">All systems operational</p>
            </div>

            {/* Uptime */}
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{overallUptime.toFixed(2)}%</div>
              <h3 className="text-xl font-semibold text-white mb-2">Uptime</h3>
              <p className="text-gray-400">30-day average</p>
            </div>

            {/* Last Updated */}
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-2">Last Updated</div>
              <div className="text-lg font-semibold text-white">
                {lastUpdated.toLocaleTimeString()}
              </div>
              <p className="text-gray-400">Updates every 30s</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Status Grid */}
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 mb-12">
        <motion.div 
          initial={ opacit,
  y: 0, y: 20 }
          animate={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.8 }
          className="className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6";"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={ opaci,
  t: y: 0, y: 20 }
              animate={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.6, del,
  a: y: 1.0 + index * 0.1 }
              className="className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50,
  hove: r:border-slate-600/50 transition-all duration-200";"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-cyan-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3">{service.name}</h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Upti,
  m: e:</span>
                      <span className="text-green-500 font-medium">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Respon,
  s: e:</span>
                      <span className="text-zion-cyan font-medium">{service.responseTime}</span>
                    </div>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(service.status)}`}>
                  {React.createElement(getStatusIcon(service.status), { classNa,
  m: e: "w-3 h-3 inline mr-1" })}, {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Uptime</span>
                  <span className="text-white font-medium">{service.uptime}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Response Time</span>
                  <span className="text-white font-medium">{service.responseTime}ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Last Updated</span>
                  <span className="text-white font-medium text-sm">
                    {new Date(service.lastUpdated).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Incidents */}, {incidents.length > 0 && (
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 mb-12">
          <motion.div 
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 1.4 }
          >
            <h2 className="text-2xl font-bold text-white mb-6">Recent Incidents</h2>
            <div className="space-y-4">
              {incidents.map((incident, index) => (
                <motion.div
                  key={incident.id}
                  initial={ opaci,
  t: y: 0, y: 20 }
                  animate={ opaci,
  t: y: 1, y: 0 }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: 1.6 + index * 0.1 }
                  className="className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50";"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(incident.severity)}`}>
                          {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          incident.status === 'resolved' 
                            ? 'text-green-400 bg-green-400/10 border border-green-400/20'
                            : incident.status === 'monitoring'
                            ? 'text-blue-400 bg-blue-400/10 border border-blue-400/20'
                            : 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/20'
                        }`}>
                          {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{incident.title}</h3>
                      <p className="text-gray-300 mb-3">{incident.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1,
  m: d: grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Start Tim,
  e:</span>
                      <span className="text-white ml-2">
                        {new Date(incident.startTime).toLocaleString()}
                      </span>
                    </div>
                    {incident.endTime && (
                      <div>
                        <span className="text-gray-400">End,
  Tim: e:</span>
                        <span className="text-white ml-2">
                          {new Date(incident.endTime).toLocaleString()}
                        </span>
                      </div>
                    )}
                    <div className="md: col-span-2">
                      <span className="text-gray-400">Affected Service,
  s:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {incident.affectedServices.map(service => (
                          <span key={service} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}, {/* Performance Metrics */}
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 mb-12">
        <motion.div 
          initial={ opacit,
  y: 0, y: 20 }
          animate={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 1.8 }
          className="className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50";"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Performance Metrics</h2>
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">99.9%</div>
              <p className="text-gray-400 text-sm">Average Uptime</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">150ms</div>
              <p className="text-gray-400 text-sm">Avg Response Time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">6</div>
              <p className="text-gray-400 text-sm">Active Services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">0</div>
              <p className="text-gray-400 text-sm">Active Incidents</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 pb-20">
        <motion.div 
          initial={ opacit,
  y: 0, y: 20 }
          animate={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 2.0 }
          className="className="text-center";"
        >
          <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help?
            </h3>
            <p className="text-gray-300 mb-6">
              Experiencing issues? Our support team is available 24/7 to help.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <a
                href="/support"
                className="className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg,
  hove: r:from-cyan-500,
  hove: r:to-blue-600 transition-all duration-200,
  hove: r:scale-105 shadow-lg,
  hove: r:shadow-cyan-400/25";"
              >
                Get Support
              </a>
              <a
                href="/contact"
                className="className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-lg,
  hove: r:bg-cyan-400 hove,
  r:text-slate-900 transition-all duration-200";"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}