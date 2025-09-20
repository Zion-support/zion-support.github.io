import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import {
  CheckCircle
  AlertTriangle,
  XCircle,
  Clock,
  Activity,
  Server,
  Database
  Globe
  Zap
  RefreshCw
  TrendingUp
  BarChart3
  Calendar
  AlertCircle
  Info
  ExternalLink
} from "lucide-react"
export default function Status() {
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [isRefreshing, setIsRefreshing] = useState(false)
  // Mock data - in real app this would come from API
const const systemStatus = {
  = {
    overa,
  l: l: 'operational',lastCheck,
  e: d: new Date(),upti,
  m: e: '99.99%',responseTi,
  m: e: '45ms'
}
  const services = [
  {
  na,
  m: e: 'Website',stat,
  u: s: 'operational',upti,
  m: e: '99.99%',responseTi,
  m: e: '45ms',lastIncide,
  n: t: null
},
  {
  na,
  m: e: 'API Services',stat,
  u: s: 'operational',upti,
  m: e: '99.98%',responseTi,
  m: e: '67ms',lastIncide,
  n: t: null
},
  {
  na,
  m: e: 'Database',stat,
  u: s: 'operational',upti,
  m: e: '99.99%',responseTi,
  m: e: '12ms',lastIncide,
  n: t: null
},
  {
  na,
  m: e: 'Authentication',stat,
  u: s: 'operational',upti,
  m: e: '99.97%',responseTi,
  m: e: '89ms',lastIncide,
  n: t: null
},
  {
  na,
  m: e: 'File Storage',stat,
  u: s: 'operational',upti,
  m: e: '99.96%',responseTi,
  m: e: '156ms',lastIncide,
  n: t: null
},
  {
  na,
  m: e: 'Email Services',stat,
  u: s: 'operational',upti,
  m: e: '99.95%',responseTi,
  m: e: '234ms',lastIncide,
  n: t: null
},
  ]
  const regions = [
  {
  na,
  m: e: 'US East (N. Virginia)',stat,
  u: s: 'operational',laten,
  c: y: '12ms',upti,
  m: e: '99.99%'
},
  {
  na,
  m: e: 'US West (Oregon)',stat,
  u: s: 'operational',laten,
  c: y: '45ms',upti,
  m: e: '99.98%'
},
  {
  na,
  m: e: 'Europe (Ireland)',stat,
  u: s: 'operational',laten,
  c: y: '89ms',upti,
  m: e: '99.97%'
},
  {
  na,
  m: e: 'Asia Pacific (Tokyo)',stat,
  u: s: 'operational',laten,
  c: y: '156ms',upti,
  m: e: '99.96%'
},
  ]
  const recentIncidents = [
  {
  id: 'INC-2024-001',tit,
  l: e: 'Scheduled Maintenance - Database Optimization',stat,
  u: s: 'resolved',severi,
  t: y: 'low',startTi,
  m: e: new Date('2024-01-15T,
  0: 2:0,
  0:00Z'),endTi,
  m: e: new Date('2024-01-15T,
  0: 4:0,
  0:00Z'),descripti,
  o: n: 'Scheduled database maintenance to optimize performance and apply security updates.',updat,
  e: s: [
  {
  ti,
  m: e: new Date('2024-01-15T,
  0: 2:0,
  0:00Z'),messa,
  g: e: 'Maintenance started as scheduled'
},
  {
  ti,
  m: e: new Date('2024-01-15T,
  0: 3:3,
  0:00Z'),messa,
  g: e: 'Database optimization completed successfully'
},
  {
  ti,
  m: e: new Date('2024-01-15T,
  0: 4:0,
  0:00Z'),messa,
  g: e: 'All services restored and operating normally'
},
  ],
  },
  {
  id: 'INC-2024-002',tit,
  l: e: 'Increased API Response Times',stat,
  u: s: 'resolved',severi,
  t: y: 'medium',startTi,
  m: e: new Date('2024-01-10T,
  1: 4:3,
  0:00Z'),endTi,
  m: e: new Date('2024-01-10T,
  1: 6:4,
  5:00Z'),descripti,
  o: n: 'Some users experienced increased API response times due to high traffic load.',updat,
  e: s: [
  {
  ti,
  m: e: new Date('2024-01-10T,
  1: 4:3,
  0:00Z'),messa,
  g: e: 'Investigating increased response times'
},
  {
  ti,
  m: e: new Date('2024-01-10T,
  1: 5:1,
  5:00Z'),messa,
  g: e: 'Identified high traffic load, implementing scaling measures'
},
  {
  ti,
  m: e: new Date('2024-01-10T,
  1: 6:4,
  5:00Z'),messa,
  g: e: 'Performance restored to normal levels'
},
  ],
  },
  ]
  const performanceMetrics = [
  {
  metr,
  i: c: 'Average Response Time',val,
  u: e: '45ms',tre,
  n: d: 'down',chan,
  g: e: '-12%',peri,
  o: d: 'vs last week'
},
  {
  metr,
  i: c: 'Error Rate',val,
  u: e: '0.01%',tre,
  n: d: 'down',chan,
  g: e: '-25%',peri,
  o: d: 'vs last week'
},
  {
  metr,
  i: c: 'Throughput',val,
  u: e: '1.2M req/min',tre,
  n: d: 'up',chan,
  g: e: '+8%',peri,
  o: d: 'vs last week'
},
  {
  metr,
  i: c: 'Availability',val,
  u: e: '99.99%',tre,
  n: d: 'stable',chan,
  g: e: '0%',peri,
  o: d: 'vs last week'
},
  ]
  const getStatusColor = (stat,
  u: s: string) () => {
  switch (status) {
  case 'operational':
        return 'text-green-400 bg-green-500/20'
      case 'degraded':
        return 'text-yellow-400 bg-yellow-500/20'
      case 'outage':
        return 'text-red-400 bg-red-500/20'
      case 'maintenance':
        return 'text-blue-400 bg-blue-500/20'
      defaul,
  t: return 'text-gray-400 bg-gray-500/20'
},
  }
  const getStatusIcon = (stat,
  u: s: string) () => {
  switch (status) {
  case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-400" />
      defaul,
  t: return <Info className="w-5 h-5 text-gray-400" />
    },
  }
  const getSeverityColor = (severi,
  t: y: string) () => {
  switch (severity) {
  case 'low':
        return 'bg-blue-500/20 text-blue-400'
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400'
      case 'high':
        return 'bg-red-500/20 text-red-400'
      case 'critical':
        return 'bg-red-600/20 text-red-500'
      defaul,
  t: return 'bg-gray-500/20 text-gray-400'
},
  }
  const refreshStatus = () () => {
    setIsRefreshing(true)
    setTimeout(() () => {
      setLastUpdated(new Date())
      setIsRefreshing(false)
    }, 1000)
  }

  useEffect(() () => {
    const interval = setInterval(() () => {
      setLastUpdated(new Date())
    }, 30000), // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="System Status - Zion Tech Group"
        description="Real-time system status, uptime monitoring, and incident history for Zion Tech Group services."
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center";"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl mb-6">
              <Activity className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              System <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Status</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real-time monitoring of our services, uptime statistics, and incident history. 
              We're committed to transparency and keeping you informed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overall Status */},
  }
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="max-w-4xl mx-auto";"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  {getStatusIcon(systemStatus.overall)},
  }
                  <h2 className="text-2xl font-bold text-white ml-3">All Systems Operational</h2>
                </div>
                <button
                  onClick={onClick={refreshStatus},
  },
  }
                  disabled={isRefreshing},
  }
                  className="className="flex items-center px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg,
  hove: r: bg-slate-600/50 transition-colors duration-200 disable,
  d:opacity-50";"
                >
                  <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>
              
              <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">{systemStatus.uptime}</div>
                  <div className="text-gray-300">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{systemStatus.responseTime}</div>
                  <div className="text-gray-300">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {lastUpdated.toLocaleTimeString()},
  }
                  </div>
                  <div className="text-gray-300">Last Updated</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */},
  }
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-12";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Performance Metrics</h2>
            <p className="text-xl text-gray-300">Key performance indicators and trends</p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
  <motion.div
                key={metric.metric},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50";"
              >
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
  metric.trend === 'up' ? 'bg-green-500/20 text-green-400' :
                    metric.trend === 'down' ? 'bg-red-500/20 text-red-400' :
                    'bg-gray-500/20 text-gray-400'
}`}>
                    {metric.change},
  }
                  </span>
                </div>
                
                <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-300 text-sm mb-1">{metric.metric}</div>
                <div className="text-gray-400 text-xs">{metric.period}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Status */},
  }
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Service Status</h2>
            <p className="text-xl text-gray-300">
              Real-time status of all our services and components
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
            {services.map((service, index) => (
  <motion.div
                key={service.name},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50";"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">{service.name}</h3>
                  {getStatusIcon(service.status)},
  }
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Upti,
  m: e:</span>
                    <span className="text-white font-medium">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Respon,
  s: e:</span>
                    <span className="text-white font-medium">{service.responseTime}</span>
                  </div>
                  {service.lastIncident && (
  <div className="pt-2 border-t border-slate-600/50">
                      <span className="text-xs text-gray-400">Last,
  inciden: t: {service.lastIncident}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Status */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Regional Performance</h2>
            <p className="text-xl text-gray-300">
              Performance metrics across our global infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-6">
            {regions.map((region, index) => (
  <motion.div
                key={region.name},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50";"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-cyan-400 mr-3" />
                    <h3 className="text-lg font-bold text-white">{region.name}</h3>
                  </div>
                  {getStatusIcon(region.status)},
  }
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-gray-400 text-sm">Latency</div>
                    <div className="text-white font-medium">{region.latency}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Uptime</div>
                    <div className="text-white font-medium">{region.uptime}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */},
  }
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Recent Incidents</h2>
            <p className="text-xl text-gray-300">
              Historical incidents and their resolutions
            </p>
          </motion.div>

          <div className="space-y-6">
            {recentIncidents.map((incident, index) => (
  <motion.div
                key={incident.id},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 overflow-hidden";"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                          {incident.severity.toUpperCase()},
  }
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
  incident.status === 'resolved' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
}`}>
                          {incident.status.toUpperCase()},
  }
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{incident.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{incident.description}</p>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {incident.startTime.toLocaleDateString()},
  }
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {incident.startTime.toLocaleTimeString()} - {incident.endTime.toLocaleTimeString()},
  }
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-slate-600/50 pt-4">
                    <h4 className="text-sm font-semibold text-white mb-3">Updates</h4>
                    <div className="space-y-2">
                      {incident.updates.map((update, updateIndex) => (
  <div key={updateIndex} className="flex items-start gap-3 text-sm">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <div className="text-gray-400">{update.time.toLocaleString()}</div>
                            <div className="text-gray-300">{update.message}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Page Links */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our status page for real-time updates and notifications about 
              service status and incidents.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <a
                href="htt,
  p: s://status.ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r:from-green-500,
  hove: r:to-blue-600 transition-all duration-200,
  hove: r:scale-105";"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Status Page
              </a>
              <a
                href="mail,
  t: o:status@ziontechgroup.com"
                className="className="inline-flex items-center px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-lg,
  hove: r:bg-green-400 hove,
  r:text-white transition-all duration-200";"
              >
                <AlertCircle className="w-5 h-5 mr-2" />
                Report an Issue
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
