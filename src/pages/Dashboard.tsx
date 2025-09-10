import React from 'react';
import SEO from '../components/SEO';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Active Projects', value: '12', change: '+2 this month' },
    { label: 'Total Revenue', value: '$125,430', change: '+15% from last month' },
    { label: 'Client Satisfaction', value: '98%', change: '+3% from last month' },
    { label: 'Team Members', value: '24', change: '+2 new hires' }
  ];

  const recentProjects = [
    { name: 'AI Healthcare Platform', status: 'In Progress', progress: 75 },
    { name: 'Cybersecurity Suite', status: 'Completed', progress: 100 },
    { name: 'Cloud Migration', status: 'Planning', progress: 25 },
    { name: 'Mobile App Development', status: 'In Progress', progress: 60 }
  ];

  return (
    <>
      <SEO 
        title="Dashboard - Zion Tech Group"
        description="Access your project dashboard and manage your AI and technology services."
        keywords="dashboard, projects, management, ai services, technology services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-gray-300">Welcome back! Here's an overview of your projects and services.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-300 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-green-400">{stat.change}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Projects */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-white mb-6">Recent Projects</h2>
                <div className="space-y-4">
                  {recentProjects.map((project, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{project.name}</h3>
                        <p className="text-sm text-gray-300">{project.status}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-24 bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-300">{project.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
                <div className="space-y-4">
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-left">
                    Start New Project
                  </button>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-left">
                    View All Services
                  </button>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-left">
                    Schedule Meeting
                  </button>
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-left">
                    Download Reports
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div>
                    <p className="text-white">Project "AI Healthcare Platform" status updated to In Progress</p>
                    <p className="text-sm text-gray-300">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div>
                    <p className="text-white">New client "TechCorp Solutions" added to your account</p>
                    <p className="text-sm text-gray-300">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div>
                    <p className="text-white">Monthly report generated and sent to your email</p>
                    <p className="text-sm text-gray-300">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;