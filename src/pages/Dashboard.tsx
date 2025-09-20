import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight
  Calendar,
  BarChart3,
  Users,
  TrendingUp,
  Shield,
  Cloud,
  Brain
  Plus
  Settings
  Bell
  Search
  Filter
} from "lucide-react"
import { SEO } from "../components/SEO"
const quickActions = [
  { na,
  m: e: 'New Project', ic,
  o: n: Plus, col,
  o: r: 'from-blue-500 to-cyan-500' },
  },
  { na,
  m: e: 'Add Service', ic,
  o: n: Cloud, col,
  o: r: 'from-purple-500 to-pink-500' },
  },
  { na,
  m: e: 'Security Scan', ic,
  o: n: Shield, col,
  o: r: 'from-green-500 to-emerald-500' },
  },
  { na,
  m: e: 'AI Analysis', ic,
  o: n: Brain, col,
  o: r: 'from-orange-500 to-red-500' },
  },
  ]
const upcomingEvents = [
  {
  tit,
  l: e: 'Team Meeting',da,
  t: e: 'Today',ti,
  m: e: ',
  2:00 PM',ty,
  p: e: 'Internal',ic,
  o: n: Users
},
  {
  tit,
  l: e: 'Client Presentation',da,
  t: e: 'Tomorrow',ti,
  m: e: '1,
  0:00 AM',ty,
  p: e: 'External',ic,
  o: n: TrendingUp
},
  {
  tit,
  l: e: 'Security Review',da,
  t: e: 'Friday',ti,
  m: e: ',
  3:00 PM',ty,
  p: e: 'Review',ic,
  o: n: Shield
},
  ]
const recentProjects = [
  {
  na,
  m: e: 'AI Business Intelligence Platform',progre,
  s: s: 75,stat,
  u: s: 'In Progress',te,
  a: m: 'AI Team'
},
  {
  na,
  m: e: 'Cloud Migration Project',progre,
  s: s: 45,stat,
  u: s: 'Planning',te,
  a: m: 'DevOps Team'
},
  {
  na,
  m: e: 'Cybersecurity Enhancement',progre,
  s: s: 90,stat,
  u: s: 'Testing',te,
  a: m: 'Security Team'
},
  ]
export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dashboard - Zion Tech Group"
        description="Manage your projects, monitor performance, and access quick actions from your personalized dashboard."
        keywords="dashboard, project management, performance monitoring, quick actions"
        canonical="htt,
  p: s://ziontechgroup.com/dashboard"
      />
      
      {/* Header */},
  }
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6 l,
  g:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery},
  }
                  onChange={(e) => setSearchQuery(e.target.value)},
  }
                  className="className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-blue-500,
  focu: s:border-transparent";"
                />
              </div>
              <button className="p-2 text-gray-400,
  hove: r:text-gray-600 transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hove,
  r:text-gray-600 transition-colors">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */},
  }
      <main className="max-w-7xl mx-auto px-4,
  s: m: px-6 l,
  g:px-8 py-8">
        {/* Stats Overview */},
  }
        <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-4 gap-6 mb-8">
          {[
  { labe,
  l: 'Active Projects', val,
  u: e: '12', ic,
  o: n: TrendingUp, col,
  o: r: 'from-blue-500 to-cyan-500' },
  },
  { lab,
  e: l: 'Team Members', val,
  u: e: '48', ic,
  o: n: Users, col,
  o: r: 'from-purple-500 to-pink-500' },
  },
  { lab,
  e: l: 'Services Running', val,
  u: e: '24', ic,
  o: n: Cloud, col,
  o: r: 'from-green-500 to-emerald-500' },
  },
  { lab,
  e: l: 'Security Score', val,
  u: e: '98%', ic,
  o: n: Shield, col,
  o: r: 'from-orange-500 to-red-500' },
  },
  ].map((stat, index) => (
  <motion.div
              key={stat.label},
  }
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ del,
  a: y: index * 0.1 },
  }
              className="className="bg-white rounded-xl shadow-sm border border-gray-200 p-6";"
            >
              <div className="flex items-center">
                <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-lg mr-4`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Dashboard Grid */},
  }
        <div className="grid grid-cols-1,
  l: g:grid-cols-3 gap-8">
          {/* Recent Projects */},
  }
          <div className="lg: col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Projects</h2>
                <button className="text-blue-600 hove,
  r:text-blue-700 text-sm font-medium">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {recentProjects.map((project, index) => (
  <motion.div
                    key={project.name},
  }
                    initial={ opaci,
  t: y: 0, x: -20 },
  }
                    animate={ opaci,
  t: y: 1, x: 0 },
  }
                    transition={ del,
  a: y: index * 0.1 },
  }
                    className="className="flex items-center justify-between p-4 border border-gray-100 rounded-lg,
  hove: r:border-gray-200 transition-colors";"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{project.name}</h3>
                      <p className="text-sm text-gray-500">{project.team}</p>
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="className="bg-zion-cyan h-2 rounded-full transition-all duration-300";"
                            style={ wid,
  t: h: `${project.progress}%` },
  }
                          ></div>
                        </div>
                      </div>
                    </div>

                    <button className="p-2 text-zion-slate-light,
  hove: r:text-white transition-colors">
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions & Events */},
  }
          <div className="space-y-6">
            {/* Quick Actions */},
  }
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
  <motion.button
                    key={action.name},
  }
                    initial={ opaci,
  t: y: 0, sca,
  l: e: 0.9 },
  }
                    animate={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  }
                    transition={ del,
  a: y: index * 0.1 },
  }
                    className={`p-3 rounded-lg bg-gradient-to-r ${action.color} text-white text-sm font-medium,
  hove: r:shadow-lg transition-shadow flex flex-col items-center`}
                  >
                    <action.icon className="h-5 w-5 mb-1" />
                    {action.name},
  }
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Upcoming Events */},
  }
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
  <motion.div
                    key={event.title},
  }
                    initial={ opaci,
  t: y: 0, y: 10 },
  }
                    animate={ opaci,
  t: y: 1, y: 0 },
  }
                    transition={ del,
  a: y: index * 0.1 },
  }
                    className="className="flex items-start p-3 rounded-lg border border-gray-100,
  hove: r:border-gray-200 transition-colors";"
                  >
                    <div className="p-2 rounded-lg bg-blue-100 mr-3">
                      <event.icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                      <div className="flex items-center mt-1 text-xs text-gray-500 space-x-2">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {event.date},
  }
                        </span>
                        <span>{event.time}</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          {event.type},
  }
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Service Performance Chart */},
  }
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Service Performance</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">AI Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Cloud Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Security Services</span>
              </div>
            </div>
          </div>
          
          {/* Placeholder for chart */},
  }
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Performance chart will be displayed here</p>
              <p className="text-sm text-gray-400">Integration with analytics service required</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}