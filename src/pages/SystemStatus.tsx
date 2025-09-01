import {

  CheckCircle,
  AlertTriangle,
  XCircle,
  Clock,
  Activity,
  Server,
  Database,
  Globe,
  Shield,
  Brain,
  Zap,
  BarChart3,
  TrendingUp,
  RefreshCw} from 'lucide-react';
<<<<<<< HEAD

interface ServiceStatus {

  id: string;
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  uptime: number;
  responseTime: number;
  lastUpdated: string;
  description: string;
  icon: React.ComponentType < any>}

=======
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
interface Incident {

  id: string;
  title: string;
  description: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  severity: 'low' | 'medium' | 'high' | 'critical';
  startTime: string;
  endTime?: string;
  affectedServices: string[]}
;
const services: ServiceStatus[] = [
  {

    id: 'api',
    name: 'API Services',
    status: 'operational',
    uptime: 99.99,
    responseTime: 45,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Core API endpoints and microservices',
    icon: Server},
  {

    id: 'database',
    name: 'Database Systems',
    status: 'operational',
    uptime: 99.95,
    responseTime: 12,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Primary and replica database clusters',
    icon: Database},
  {

    id: 'web',
    name: 'Web Application',
    status: 'operational',
    uptime: 99.98,
    responseTime: 180,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Main website and user interface',
    icon: Globe},
  {

    id: 'security',
    name: 'Security Services',
    status: 'operational',
    uptime: 100.0,
    responseTime: 8,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Authentication, authorization, and threat detection',
    icon: Shield},
  {

    id: 'ai',
    name: 'AI Services',
    status: 'operational',
    uptime: 99.92,
    responseTime: 320,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Machine learning models and AI processing',
    icon: Brain},
  {

    id: 'analytics',
    name: 'Analytics Platform',
    status: 'operational',
    uptime: 99.97,
    responseTime: 95,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Data analytics and reporting services',
    icon: BarChart3},
];
;
const incidents: Incident[] = [
  {

    id: 'inc-001',
    title: 'Scheduled Maintenance - Database Optimization',
    description:'
      'Routine database maintenance to improve performance and reliability',
    status: 'resolved',
    severity: 'low',
    startTime: '2025-08-27T02:00:00Z',
    endTime: '2025-08-27T04:00:00Z',
    affectedServices: ['database']},
];
;
const SystemStatus: React.FC = props {
  const [lastUpdated, setLastUpdated] = useState<typeof new Date(>(new Date());
  const [isRefreshing, setIsRefreshing] = useState<typeof false>(false);

const SystemStatus: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState (new Date () ) ;
  const [isRefreshing, setIsRefreshing] = useState (false) ;

  
    setTimeout ( () => {
      setLastUpdated (new Date () ) ;
      setIsRefreshing (false) }, 1000) };

  
      case 'degraded':'
        return 'text-yellow-400 bg-yellow-500/20';
      case 'outage':'
        return 'text-red-400 bg-red-500/20';
      case 'maintenance':'
        return 'text-blue-400 bg-blue-500/20';
      default:'
        return 'text-gray-400 bg-gray-500/20'}
  };

  
      case 'degraded':"
        return <AlertTriangle className="w-5 h-5"  />;
      case 'outage':"
        return <XCircle className="w-5 h-5"  />;
      case 'maintenance':"
        return <Clock className="w-5 h-5"  />;
      default:"
        return <Activity className="w-5 h-5"  />}
  };

  
      case 'high':'
        return 'text-orange-400 bg-orange-500/20';
      case 'medium':'
        return 'text-yellow-400 bg-yellow-500/20';
      case 'low':'
        return 'text-blue-400 bg-blue-500/20';
      default:'
        return 'text-gray-400 bg-gray-500/20'}
  };

  
  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}"
      <section className="relative overflow-hidden py-20 lg:py-32">"
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10"></div>"
        <div className="container mx-auto px-4 relative z-10">"
          <div className="text-center max-w-4xl mx-auto">"
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full border border-blue-400/30 mb-6">"
              <Activity className="w-5 h-5 text-blue-400 mr-2"  />"              <span className="text-blue-300 font-medium">System Status</span>
            </div>
"
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">"
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-600 bg-clip-text text-transparent">
                System
              </span>
              <br />"
              <span className="text-white">Status</span>
            </h1>
"
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real-time monitoring of our platform's performance, uptime, and
              service status. Stay informed about any issues or maintenance
              activities.
            </p>

            {/* Overall Status */}"
            <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl mb-8">"
              <span className="text-gray-300 mr-4">Overall Status:</span>
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(overallStatus)}`}
              >
                {getStatusIcon(overallStatus)}"
                <span className="ml-2 capitalize">{overallStatus}</span>
              </div>
            </div>

            {/* Last Updated */}"
            <div className="flex items-center justify-center text-gray-400 text-sm">"
              <Clock className="w-4 h-4 mr-2"  />              Last updated: {lastUpdated.toLocaleString()}
              <button
                onClick={refreshData}
                disabled={isRefreshing}"
                className="ml-4 p-2 hover:bg-slate-700/50 rounded-lg transition-colors disabled:opacity-50"
              >
                <RefreshCw'`
                  className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`}
                />              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Status */}"
      <section className="py-20">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Service Status
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Current status of all our core services and infrastructure
              components.
            </p>
          </div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}"
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300"
              >"
                <div className="flex items-center justify-between mb-4">"
                  <div className="flex items-center">"
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg flex items-center justify-center mr-3">"
                      <service.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>"
                      <h3 className="text-lg font-semibold text-white">
                        {service.name}
                      </h3>"
                      <p className="text-gray-400 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div`
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}
                  >
                    {getStatusIcon(service.status)}
                  </div>
                </div>
"
                <div className="space-y-3">"
                  <div className="flex justify-between items-center">"
                    <span className="text-gray-400 text-sm">Uptime</span>"
                    <span className="text-white font-semibold">
                      {service.uptime}%
                    </span>
                  </div>"
                  <div className="flex justify-between items-center">"
                    <span className="text-gray-400 text-sm">Response Time</span>"
                    <span className="text-white font-semibold">
                      {service.responseTime}ms
                    </span>
                  </div>"
                  <div className="flex justify-between items-center">"
                    <span className="text-gray-400 text-sm">Last Updated</span>"
                    <span className="text-white text-sm">
                      {new Date(service.lastUpdated).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </motion.div>) ) }
          </div>
        </div>
      </section>

      {/* Performance Metrics */}"
      <section className="py-20 bg-slate-800/30">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Performance Metrics
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key performance indicators and system metrics for the last 30
              days.
            </p>
          </div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}"
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300"
            >"
              <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-4">"
                <TrendingUp className="w-6 h-6 text-green-400"  />
              </div>"
              <div className="text-3xl font-bold text-white mb-2">99.97%</div>"
              <h3 className="text-lg font-semibold text-white mb-1">
                Average Uptime
              </h3>"              <p className="text-gray-400 text-sm">Last 30 days</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}"
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300"
            >"
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4">"
                <Zap className="w-6 h-6 text-blue-400"  />
              </div>"
              <div className="text-3xl font-bold text-white mb-2">127ms</div>"
              <h3 className="text-lg font-semibold text-white mb-1">
                Average Response
              </h3>"              <p className="text-gray-400 text-sm">Global average</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}"
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300"
            >"
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4">"
                <BarChart3 className="w-6 h-6 text-purple-400" />
              </div>"
              <div className="text-3xl font-bold text-white mb-2">1.2M</div>"
              <h3 className="text-lg font-semibold text-white mb-1">
                Requests/Day
              </h3>"
              <p className="text-gray-400 text-sm">API calls</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}"
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300"
            >"
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mb-4">"
                <AlertTriangle className="w-6 h-6 text-orange-400"  />
              </div>"
              <div className="text-3xl font-bold text-white mb-2">0</div>"
              <h3 className="text-lg font-semibold text-white mb-1">
                Active Incidents
              </h3>"              <p className="text-gray-400 text-sm">Current issues</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      {incidents.length > 0 && ("
        <section className="py-20">"
          <div className="container mx-auto px-4">"
            <div className="text-center mb-16">"
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Recent Incidents
              </h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Information about recent incidents, maintenance, and
                resolutions.
              </p>
            </div>
"
            <div className="max-w-4xl mx-auto">
              {incidents.map((incident, index) => (
                <motion.div
                  key={incident.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}"
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 mb-6 hover:border-blue-400/30 transition-all duration-300"
                >"
                  <div className="flex items-start justify-between mb-4">"
                    <div className="flex-1">"
                      <div className="flex items-center mb-2">"
                        <h3 className="text-lg font-semibold text-white mr-3">
                          {incident.title}
                        </h3>
                        <div`
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}
                        >
                          {incident.severity}
                        </div>
                      </div>"
                      <p className="text-gray-300 text-sm mb-3">
                        {incident.description}
                      </p>"
                      <div className="flex items-center text-gray-400 text-sm">"
                        <Clock className="w-4 h-4 mr-1"  />                        Started: {new Date(incident.startTime).toLocaleString()}
                        {incident.endTime && (
                          <>"
                            <span className="mx-2">•</span>
                            <span>
                              Resolved:{' '}
                              {new Date(incident.endTime).toLocaleString()}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <div`
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(incident.status)}`}
                    >
                      {getStatusIcon(incident.status)}"
                      <span className="ml-2 capitalize">{incident.status}</span>
                    </div>
                  </div>

                  {incident.affectedServices.length > 0 && (
                    <div>"
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">
                        Affected Services:
                      </h4>"
                      <div className="flex flex-wrap gap-2">
                        {incident.affectedServices.map(serviceId => {

                          const service = services.find()
                            s => s.id === serviceId
                          );                          return service ? (
                            <span
                              key={serviceId}"
                              className="inline-flex items-center px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300"
                            >"
                              <service.icon className="w-3 h-3 mr-1" />
                              {service.name}
                            </span>) : null}) }                      </div>
                    </div>) }
                </motion.div>) ) }
            </div>
          </div>
        </section>) }

      {/* Contact Section */}"
      <section className="py-20 bg-slate-800/30">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Need Help?
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experiencing issues or need technical support? Our team is here to
              help.
            </p>
          </div>
"
          <div className="max-w-2xl mx-auto text-center">"
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300">"
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">"
                <Activity className="w-8 h-8 text-blue-400"  />
              </div>"
              <h3 className="text-xl font-semibold text-white mb-4">
                Technical Support
              </h3>"
<<<<<<< HEAD
              <p className="text-gray-300 mb-6">
                If you're experiencing issues not reflected in our status page,
                please contact our technical support team.
=======
              <p className="text-gray-300 mb-6">'
                If you're experiencing issues not reflected in our status page,                please contact our technical support team.
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
              </p>"
              <div className="space-y-2 text-gray-400">
                <p>Email: support@ziontechgroup.com</p>
                <p>Phone: +1 302 464 0950</p>
                <p>Response time: 2-4 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>) };
export default SystemStatus;
'"`