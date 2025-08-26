import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Bell, 
  LogOut, 
  UserCheck, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Activity,
  Settings,
  BarChart3,
  Calendar,
  FileText,
  Star
} from 'lucide-react';

export default function Dashboard() {
  const [user] = useState({
    displayName: 'John Doe',
    email: 'john.doe@example.com',
    role: 'User'
  });

  const [stats] = useState({
    projects: 12,
    tasks: 28,
    teamMembers: 8,
    completed: 15
  });

  const [recentActivity] = useState([
    {
      id: 1,
      action: 'Project created',
      description: 'AI Business Solutions project',
      time: '2 hours ago',
      type: 'project'
    },
    {
      id: 2,
      action: 'Task completed',
      description: 'Cybersecurity assessment',
      time: '4 hours ago',
      type: 'task'
    },
    {
      id: 3,
      action: 'Team member added',
      description: 'Sarah Johnson joined',
      time: '1 day ago',
      type: 'team'
    }
  ]);

  const logout = () => {
    // Handle logout logic
    console.log('Logout clicked');
  };

  return (
    <>
      <SEO
        title="Dashboard | Zion Tech Group"
        description="Your personal dashboard for managing projects, tasks, and team collaboration."
        keywords="dashboard, user dashboard, project management, team collaboration"
        canonicalUrl="https://ziontechgroup.com/dashboard"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Header */}
        <header className="bg-slate-800/50 border-b border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-white">Dashboard</h1>
              </div>
              <div className="flex items-center space-x-4">
                <button className="relative p-2 text-slate-300 hover:text-white transition-colors">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
                </button>
                <button
                  onClick={logout}
                  className="flex items-center px-3 py-2 text-slate-300 hover:text-white transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Welcome back, {user.displayName.split(' ')[0]}!
            </h2>
            <p className="text-slate-300">
              Here's what's happening with your projects and team today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="flex items-center">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-400">Total Projects</p>
                  <p className="text-2xl font-bold text-white">{stats.projects}</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="flex items-center">
                <div className="p-2 bg-green-600/20 rounded-lg">
                  <Activity className="w-6 h-6 text-green-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-400">Active Tasks</p>
                  <p className="text-2xl font-bold text-white">{stats.tasks}</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="flex items-center">
                <div className="p-2 bg-purple-600/20 rounded-lg">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-400">Team Members</p>
                  <p className="text-2xl font-bold text-white">{stats.teamMembers}</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="flex items-center">
                <div className="p-2 bg-cyan-600/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-400">Completed</p>
                  <p className="text-2xl font-bold text-white">{stats.completed}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">{activity.action}</p>
                        <p className="text-xs text-slate-400">{activity.description}</p>
                      </div>
                      <span className="text-xs text-slate-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link 
                    to="/activity" 
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    View all activity →
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link 
                    to="/projects/new" 
                    className="flex items-center p-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg transition-colors"
                  >
                    <FileText className="w-4 h-4 text-blue-400 mr-3" />
                    <span className="text-white text-sm">New Project</span>
                  </Link>
                  <Link 
                    to="/tasks/new" 
                    className="flex items-center p-3 bg-green-600/20 hover:bg-green-600/30 rounded-lg transition-colors"
                  >
                    <Activity className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-white text-sm">Create Task</span>
                  </Link>
                  <Link 
                    to="/team/invite" 
                    className="flex items-center p-3 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg transition-colors"
                  >
                    <Users className="w-4 h-4 text-purple-400 mr-3" />
                    <span className="text-white text-sm">Invite Team Member</span>
                  </Link>
                </div>
              </div>

              {/* Upcoming Deadlines */}
              <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Upcoming Deadlines</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-600/20 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-white">Project Review</p>
                      <p className="text-xs text-red-300">Due tomorrow</p>
                    </div>
                    <Calendar className="w-4 h-4 text-red-400" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-600/20 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-white">Client Meeting</p>
                      <p className="text-xs text-yellow-300">Due in 3 days</p>
                    </div>
                    <Calendar className="w-4 h-4 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Overview */}
          <div className="mt-8">
            <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Your Projects</h3>
                <Link 
                  to="/projects" 
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-white">AI Business Solutions</h4>
                    <Star className="w-4 h-4 text-yellow-400" />
                  </div>
                  <p className="text-sm text-slate-400 mb-3">AI-powered business automation platform</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Progress: 75%</span>
                    <div className="w-16 bg-slate-600 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-white">Cybersecurity Suite</h4>
                    <Star className="w-4 h-4 text-slate-400" />
                  </div>
                  <p className="text-sm text-slate-400 mb-3">Enterprise security and threat detection</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Progress: 45%</span>
                    <div className="w-16 bg-slate-600 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-white">Cloud Migration</h4>
                    <Star className="w-4 h-4 text-slate-400" />
                  </div>
                  <p className="text-sm text-slate-400 mb-3">Legacy system modernization</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Progress: 90%</span>
                    <div className="w-16 bg-slate-600 rounded-full h-2">
                      <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
