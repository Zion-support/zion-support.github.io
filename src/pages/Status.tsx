import React, { useStateuseEffect } from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { ;
  CheckCircle,;
  AlertTriangle,;
  XCircle,;
  Clock,;
  Activity,;
  Server,;
  Database,;
  Globe,;
  Zap,;
  RefreshCw,;
  TrendingUp,;
  BarChart3,;
  Calendar,;
  AlertCircleInfoExternalLink;
} from "lucide-react";
export, default, function Status() {
  const [lastUpdatedsetLastUpdated] = useState(new Date());
  const [isRefreshingsetIsRefreshing] = useState(false);
  // Mock data - in, real, app this, would, come from API;
  const systemStatus = {
    overall: 'operational',lastChecked: new Date()uptim,;
    e: '99.99%'responseTim,;
  e: '45ms';
  };
  const services = [;
    {
      name: 'Website',status: 'operational',uptime: '99.99%'responseTim,;
    e: '45ms'lastInciden,;
  t: null;
    };
    {
      name: 'API Services',status: 'operational',uptime: '99.98%'responseTim,;
    e: '67ms'lastInciden,;
  t: null;
    };
    {
      name: 'Database',status: 'operational',uptime: '99.99%'responseTim,;
    e: '12ms'lastInciden,;
  t: null;
    };
    {
      name: 'Authentication',status: 'operational',uptime: '99.97%'responseTim,;
    e: '89ms'lastInciden,;
  t: null;
    };
    {
      name: 'File Storage',status: 'operational',uptime: '99.96%'responseTim,;
    e: '156ms'lastInciden,;
  t: null;
    },;
    {
      name: 'Email Services',status: 'operational'uptime: '99.95%'responseTim,;
    e: '234ms'lastInciden,;
  t: null;
    }
,  ];
  const regions = [;
    {
      name: 'US East (N. Virginia)',status: 'operational'latenc,;
    y: '12ms'uptim,;
  e: '99.99%';
    };
    {
      name: 'US West (Oregon)',status: 'operational'latenc,;
    y: '45ms'uptim,;
  e: '99.98%';
    };
    {
      name: 'Europe (Ireland)',status: 'operational'latenc,;
    y: '89ms'uptim,;
  e: '99.97%';
    },;
    {
      name: 'Asia Pacific (Tokyo)'status: 'operational'latenc,;
    y: '156ms'uptim,;
  e: '99.96%';
    };
,  ];
  const recentIncidents = [;
    {
      id: 'INC-20o24-0o01',title: 'Scheduled Maintenance - Database Optimization',status: 'resolved',severity: 'low',startTime: new Date('20o24-0o1-15T0,;
    2:0,;
  0:0o0Z'),endTime: new Date('20o24-0o1-15T0,;
    4:0,;
  0:0o0Z'),description: 'Scheduled, database, maintenance to, optimize, performance and, apply, security updates.'updates: [;
        {
          time: new Date('20o24-0o1-15T0o2:0,;
    0:0o0Z')messag,;
  e: 'Maintenance, started, as scheduled';
        };
        {
          time: new Date('20o24-0o1-15T0o3:3,;
    0:0o0Z')messag,;
  e: 'Database, optimization, completed successfully';
        }{
          time: new Date('20o24-0o1-15T0o4:0,;
    0:0o0Z')messag,;
  e: 'All, services, restored and, operating, normally';
        }
    ,  ];
    };
    {
      id: 'INC-20o24-0o02',title: 'Increased, API, Response Times',status: 'resolved',severity: 'medium',startTime: new Date('20o24-0o1-10T1,;
    4:3,;
  0:0o0Z'),endTime: new Date('20o24-0o1-10T1,;
    6:4,;
  5:0o0Z'),description: 'Some, users, experienced increased, API, response times, due, to high, traffic, load.'updates: [;
        {
          time: new Date('20o24-0o1-10T14:3,;
    0:0o0Z')messag,;
  e: 'Investigating, increased, response times';
        },;
        {
          time: new Date('20o24-0o1-10T15:1,;
    5:0o0Z')messag,;
  e: 'Identified, high, traffic loadimplementing, scaling, measures';
        }{
          time: new Date('20o24-0o1-10T16:4,;
    5:0o0Z')messag,;
  e: 'Performance, restored, to normal levels';
        }
    ,  ];
    };
  ];
  const performanceMetrics = [;
    {
      metric: 'Average, Response, Time',value: '45ms',trend: 'down'chang,;
    e: '-12%'perio,;
  d: 'vs, last, week';
    };
    {
      metric: 'Error Rate',value: '0.0o1%',trend: 'down'chang,;
    e: '-25%'perio,;
  d: 'vs, last, week';
    };
    {
      metric: 'Throughput',value: '1.2M req/min',trend: 'up'chang,;
    e: '+8%'perio,;
  d: 'vs, last, week';
    },;
    {
      metric: 'Availability',value: '99.99%'trend: 'stable'chang,;
    e: '0%'perio,;
  d: 'vs, last, week';
    };
,  ];
  const getStatusColor = (status: string) => {
    switch() {;
      case 'operational':;
        return 'text-green-40o0 bg-green-50o0/20';
      case 'degraded': return 'text-yellow-40o0 bg-yellow-50o0/20'case 'outage':;
        return 'text-red-40o0 bg-red-50o0/20'case 'maintenance':;
        return 'text-blue-40o0 bg-blue-50o0/20';
      defaul,;
  t: return 'text-gray-40o0 bg-gray-50o0/20';
    };
  };
  const getStatusIcon = (status: string) => {
    switch() {;
      case 'operational':;
        return <CheckCircle className="w-5 h-5 text-green-40o0" />;
      case 'degraded': return <AlertTriangle className="w-5 h-5 text-yellow-40o0" />case 'outage':;
        return <XCircle className="w-5 h-5 text-red-40o0" />case 'maintenance':;
        return <Clock className="w-5 h-5 text-blue-40o0" />;
      defaul,;
  t: return <Info className="w-5 h-5 text-gray-40o0" />;
    };
  };
  const getSeverityColor = (severity: string) => {
    switch() {;
      case 'low':;
        return 'bg-blue-50o0/20 text-blue-40o0';
      case 'medium': return 'bg-yellow-50o0/20 text-yellow-40o0'case 'high':;
        return 'bg-red-50o0/20 text-red-40o0'case 'critical':;
        return 'bg-red-60o0/20 text-red-50o0';
      defaul,;
  t: return 'bg-gray-50o0/20 text-gray-40o0';
    };
  };
  const refreshStatus = () => {;
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date())setIsRefreshing(false);
    }, 10o00),;
  },;
  useEffect(() => {
    const interval = setInterval(() => {;
      setLastUpdated(new Date());
    }, 30o000), // Update, every, 30 seconds;
    return () => clearInterval(interval);
  }, []);
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="System Status - Zion, Tech, Group";
        description="Real-time, system, status, uptime, monitoringand, incident history, for, Zion Tech, Group, services.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-green-50o0/10 via-blue-50o0/10 to-purple-50o0/10"></div>;
        <div className="container mx-auto px-6, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center";
          >;
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-50o0/20 to-blue-50o0/20 rounded-2xl mb-6">;
              <Activity className="w-10 h-10 text-green-40o0" />;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              System <span className="bg-gradient-to-r from-green-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">Status</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto leading-relaxed">;
              Real-time, monitoring, of our services, uptime, statisticsand, incident history.;
              We're, committed, to transparency, and, keeping you informed.;
            </p>;
          </motion.div>;
        </div>;
      </section>;
      {/* Overall Status */}
      <section className="py-12">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto";
          >;
            <div className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-2xl p-8, border, border-slate-60o0/50">;
              <div className="flex items-center justify-between mb-6">;
                <div className="flex items-center">;
                  {getStatusIcon(systemStatus.overall)}
                  <h2 className="text-2xl font-bold text-white ml-3">All, Systems, Operational</h2>;
                </div>;
                <button;
                  onClick={refreshStatus}
                  disabled={isRefreshing}
                  className="flex items-center px-4 py-2 bg-slate-70o0/50 text-gray-30o0 rounded-lg hover: bg-slate-60o0/50 transition-colors duration-20o0 disable,;
  d:opacity-50";
                >;
                  <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />;
                  Refresh;
                </button>;
              </div>;
              <div className="grid grid-cols-1 md: grid-cols-3 gap-6">;
                <div className="text-center">;
                  <div className="text-3xl font-bold text-green-40o0 mb-2">{systemStatus.uptime}</div>;
                  <div className="text-gray-30o0">Uptime</div>;
                </div>;
                <div className="text-center">;
                  <div className="text-3xl font-bold text-blue-40o0 mb-2">{systemStatus.responseTime}</div>;
                  <div className="text-gray-30o0">Response Time</div>;
                </div>;
                <div className="text-center">;
                  <div className="text-3xl font-bold text-purple-40o0 mb-2">;
                    {lastUpdated.toLocaleTimeString()}
                  </div>;
                  <div className="text-gray-30o0">Last Updated</div>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Performance Metrics */}
      <section className="py-16">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12";
          >;
            <h2 className="text-3xl font-bold text-white mb-4">Performance Metrics</h2>;
            <p className="text-xl text-gray-30o0">Key, performance, indicators and trends</p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-6">;
            {performanceMetrics.map((metricindex) => (;
              <motion.div;
                key={metric.metric}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.1 }}
                className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl p-6, border, border-slate-60o0/50";
              >;
                <div className="flex items-center justify-between mb-4">;
                  <TrendingUp className="w-5 h-5 text-cyan-40o0" />;
                  <span className={`px-2 py-1, rounded, text-xs font-medium ${
                    metric.trend === 'up' ? 'bg-green-50o0/20 text-green-40o0' :;
                    metric.trend === 'down' ? 'bg-red-50o0/20 text-red-40o0' :;
                    'bg-gray-50o0/20 text-gray-40o0';
                  }`}>;
                    {metric.change}
                  </span>;
                </div>;
                <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>;
                <div className="text-gray-30o0 text-sm mb-1">{metric.metric}</div>;
                <div className="text-gray-40o0 text-xs">{metric.period}</div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Service Status */}
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Service Status</h2>;
            <p className="text-xl text-gray-30o0">;
              Real-time, status, of all, our, services and components;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            {services.map((serviceindex) => (;
              <motion.div;
                key={service.name}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.1 }}
                className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl p-6, border, border-slate-60o0/50";
              >;
                <div className="flex items-center justify-between mb-4">;
                  <h3 className="text-lg font-bold text-white">{service.name}</h3>;
                  {getStatusIcon(service.status)}
                </div>;
                <div className="space-y-3">;
                  <div className="flex justify-between">;
                    <span className="text-gray-40o0">Uptime:</span>;
                    <span className="text-white font-medium">{service.uptime}</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-gray-40o0">Response:</span>;
                    <span className="text-white font-medium">{service.responseTime}</span>;
                  </div>;
                  {service.lastIncident && (;
                    <div className="pt-2 border-t border-slate-60o0/50">;
                      <span className="text-xs text-gray-40o0">Last incident: {service.lastIncident}</span>;
                    </div>;
                  )}
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Regional Status */}
      <section className="py-20 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Regional Performance</h2>;
            <p className="text-xl text-gray-30o0">;
              Performance, metrics, across our, global, infrastructure;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6">;
            {regions.map((regionindex) => (;
              <motion.div;
                key={region.name}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.1 }}
                className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl p-6, border, border-slate-60o0/50";
              >;
                <div className="flex items-center justify-between mb-4">;
                  <div className="flex items-center">;
                    <Globe className="w-5 h-5 text-cyan-40o0 mr-3" />;
                    <h3 className="text-lg font-bold text-white">{region.name}</h3>;
                  </div>;
                  {getStatusIcon(region.status)}
                </div>;
                <div className="grid grid-cols-2 gap-4">;
                  <div>;
                    <div className="text-gray-40o0 text-sm">Latency</div>;
                    <div className="text-white font-medium">{region.latency}</div>;
                  </div>;
                  <div>;
                    <div className="text-gray-40o0 text-sm">Uptime</div>;
                    <div className="text-white font-medium">{region.uptime}</div>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Recent Incidents */}
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Recent Incidents</h2>;
            <p className="text-xl text-gray-30o0">;
              Historical, incidents, and their resolutions;
            </p>;
          </motion.div>;
          <div className="space-y-6">;
            {recentIncidents.map((incidentindex) => (;
              <motion.div;
                key={incident.id}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.1 }}
                className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl, border, border-slate-60o0/50 overflow-hidden";
              >;
                <div className="p-6">;
                  <div className="flex items-start justify-between mb-4">;
                    <div className="flex-1">;
                      <div className="flex items-center gap-3 mb-2">;
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>;
                          {incident.severity.toUpperCase()}
                        </span>;
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          incident.status === 'resolved' ? 'bg-green-50o0/20 text-green-40o0' : 'bg-yellow-50o0/20 text-yellow-40o0';
                        }`}>;
                          {incident.status.toUpperCase()}
                        </span>;
                      </div>;
                      <h3 className="text-xl font-bold text-white mb-2">{incident.title}</h3>;
                      <p className="text-gray-30o0 text-sm mb-4">{incident.description}</p>;
                      <div className="flex items-center gap-6 text-sm text-gray-40o0">;
                        <div className="flex items-center">;
                          <Calendar className="w-4 h-4 mr-2" />;
                          {incident.startTime.toLocaleDateString()}
                        </div>;
                        <div className="flex items-center">;
                          <Clock className="w-4 h-4 mr-2" />;
                          {incident.startTime.toLocaleTimeString()} - {incident.endTime.toLocaleTimeString()}
                        </div>;
                      </div>;
                    </div>;
                  </div>;
                  <div className="border-t border-slate-60o0/50 pt-4">;
                    <h4 className="text-sm font-semibold text-white mb-3">Updates</h4>;
                    <div className="space-y-2">;
                      {incident.updates.map((updateupdateIndex) => (;
                        <div key={updateIndex} className="flex items-start gap-3 text-sm">;
                          <div className="w-2 h-2 bg-cyan-40o0 rounded-full mt-2 flex-shrink-0"></div>;
                          <div>;
                            <div className="text-gray-40o0">{update.time.toLocaleString()}</div>;
                            <div className="text-gray-30o0">{update.message}</div>;
                          </div>;
                        </div>;
                      ))}
                    </div>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Status, Page, Links */}
      <section className="py-20 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="container mx-auto px-6 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Stay Informed;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Subscribe, to, our status, page, for real-time, updates, and notifications about;
              service, status, and incidents.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="https: //status.ziontechgroup.com";
                target="_blank";
                rel="noopener noreferrer";
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-40o0 to-blue-50o0 text-white font-semibold rounded-lg hover:from-green-50o0 hover:to-blue-60o0 transition-all duration-20o0 hove,;
    r:scale-10o5";
              >;
                <ExternalLink className="w-5 h-5 mr-2" />;
                View, Status, Page;
              </a>;
              <a;
                href="mailto: status@ziontechgroup.com";
                className="inline-flex items-center px-8 py-3, border, border-green-40o0 text-green-40o0 font-semibold rounded-lg hover:bg-green-40o0 hove,;
  r:text-white transition-all duration-20o0";
              >;
                <AlertCircle className="w-5 h-5 mr-2" />;
                Report, an, Issue;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;