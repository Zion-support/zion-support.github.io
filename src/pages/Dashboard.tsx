import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CommunityDiscussion } from "@/components/CommunityDiscussion";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Bell, MessageSquare, LogOut, Send, Settings } from "lucide-react";
import { createTestNotification, createOnboardingNotification, createSystemNotification } from "@/utils/notifications";
import { NotificationBell } from "@/components/NotificationBell";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'error': return 'text-red-400';
      case 'info': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-400/10 border-green-400/20';
      case 'warning': return 'bg-yellow-400/10 border-yellow-400/20';
      case 'error': return 'bg-red-400/10 border-red-400/20';
      case 'info': return 'bg-blue-400/10 border-blue-400/20';
      default: return 'bg-gray-400/10 border-gray-400/20';
    }
  };

  const filteredProjects = recentProjects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Dashboard - Zion Tech Group"
        description="Monitor your technology infrastructure, track performance metrics, and manage services from one central dashboard."
      />
      
      {/* Header */}
      <section className="relative py-8 px-4 border-b border-slate-700/50">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              <p className="text-slate-400">Monitor and manage your technology infrastructure</p>
            </div>
            
            {/* Main Content - Dashboard */}
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Dashboard</h2>
                  <div className="flex items-center gap-2">
                    <NotificationBell />
                    <Button 
                      variant="outline" 
                      className="text-zion-slate-light border-zion-blue-light hover:bg-zion-blue hover:text-white"
                      onClick={logout}
                    >
                      <LogOut size={16} className="mr-2" />
                      Logout
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-purple/30 border border-zion-blue-light">
                    <h3 className="text-lg font-medium text-white">Welcome, {user.displayName.split(' ')[0]}</h3>
                    <p className="text-zion-slate-light mt-1">Your journey on Zion has just begun!</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light">
                    <h3 className="text-lg font-medium text-white">Getting Started</h3>
                    <p className="text-zion-slate-light mt-1">Complete your profile to unlock all features.</p>
                  </div>
                </div>
                
                {/* Badges Preview */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-white mb-4">Your Badges</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center mb-2">
                        <UserCheck size={24} className="text-white" />
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">Newcomer</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-purple-light flex items-center justify-center mb-2">
                        <MessageSquare size={24} className="text-white" />
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">First Post</span>
                    </div>
                    <div className="flex flex-col items-center opacity-40">
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">
                        <Bell size={24} className="text-zion-slate-light" />
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">Locked</span>
                    </div>
                    <div className="flex flex-col items-center opacity-40">
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">
                        <span className="text-zion-slate-light text-xl">?</span>
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">Locked</span>
                    </div>
                  </div>
                </div>
                
                {/* Community Section */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Community</h3>
                  <CommunityDiscussion />
                </div>
              </div>
              
              <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors duration-200">
                <Bell className="w-5 h-5" />
              </button>
              
              <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors duration-200">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="px-4 py-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Overview</h2>
            <div className="flex items-center space-x-2">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-3 py-1 bg-slate-800 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-400"
              >
                <option value="24h">Last 24 hours</option>
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${
                    stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.changeType === 'positive' ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    <span>{stat.change}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-slate-400 text-sm">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions & System Health */}
      <section className="px-4 py-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
                <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors duration-200">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <Link
                    key={action.title}
                    to={action.href}
                    className="group p-4 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                          {action.title}
                        </h4>
                        <p className="text-slate-400 text-sm">{action.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* System Health */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <h3 className="text-lg font-semibold text-white mb-6">System Health</h3>
              
              <div className="space-y-4">
                {systemHealth.map((service, index) => (
                  <div key={service.name} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <service.icon className={`w-5 h-5 ${service.color}`} />
                      <div>
                        <h4 className="text-white font-medium">{service.name}</h4>
                        <p className="text-slate-400 text-xs">{service.uptime} uptime</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`text-sm font-medium ${
                        service.status === 'healthy' ? 'text-green-400' : 
                        service.status === 'warning' ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {service.status}
                      </div>
                      <p className="text-slate-400 text-xs">{service.response} response</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Recent Activities & Deployments */}
      <section className="px-4 py-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Recent Activities</h3>
                <Link to="/activities" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  View All
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-lg">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getStatusBg(activity.status)}`}>
                      <activity.icon className={`w-4 h-4 ${getStatusColor(activity.status)}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm">{activity.title}</h4>
                      <p className="text-slate-400 text-xs mt-1">{activity.description}</p>
                      <p className="text-slate-500 text-xs mt-2">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Deployments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Recent Deployments</h3>
                <Link to="/deployments" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  View All
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentDeployments.map((deployment, index) => (
                  <div key={deployment.id} className="p-3 bg-slate-800/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium text-sm">{deployment.service}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        deployment.status === 'success' ? 'bg-green-400/10 text-green-400' :
                        deployment.status === 'pending' ? 'bg-yellow-400/10 text-yellow-400' :
                        'bg-red-400/10 text-red-400'
                      }`}>
                        {deployment.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                      <div>
                        <span className="text-slate-500">Version:</span> {deployment.version}
                      </div>
                      <div>
                        <span className="text-slate-500">Environment:</span> {deployment.environment}
                      </div>
                      <div>
                        <span className="text-slate-500">Deployed by:</span> {deployment.deployedBy}
                      </div>
                      <div>
                        <span className="text-slate-500">Time:</span> {deployment.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="px-4 py-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Performance Metrics</h3>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors duration-200">
                  <Filter className="w-4 h-4" />
                </button>
                <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors duration-200">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-white font-medium mb-2">Response Time</h4>
                <p className="text-3xl font-bold text-cyan-400">45ms</p>
                <p className="text-slate-400 text-sm">Average</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-white font-medium mb-2">Throughput</h4>
                <p className="text-3xl font-bold text-emerald-400">2.4K</p>
                <p className="text-slate-400 text-sm">Requests/sec</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-white font-medium mb-2">Error Rate</h4>
                <p className="text-3xl font-bold text-pink-400">0.02%</p>
                <p className="text-slate-400 text-sm">Last 24h</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 border border-slate-600/50 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Need Help with Your Infrastructure?
            </h2>
            <p className="text-slate-300 mb-6">
              Our team of experts is here to help optimize your technology stack and ensure peak performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              >
                Get Support
              </Link>
              <Link
                to="/documentation"
                className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
              >
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
