import React from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, Globe, UserCheck, MessageSquare, Bell, TrendingUp, DollarSign, Users, Activity } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Dashboard() {
  return (
    <>
      <SEO 
        title="Dashboard - Zion Tech Group"
        description="Manage your projects, track progress, and access your account dashboard."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Header */}
        <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                <p className="text-slate-400">Welcome back! Here's what's happening.</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="p-2 text-slate-400 hover:text-white transition-colors">
                  <User className="w-5 h-5" />
                </Link>
                <Link to="/settings" className="p-2 text-slate-400 hover:text-white transition-colors">
                  <Settings className="w-5 h-5" />
                </Link>
                <Link to="/website" className="p-2 text-slate-400 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Total Projects</p>
                  <p className="text-2xl font-bold text-white">24</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Revenue</p>
                  <p className="text-2xl font-bold text-white">$125,000</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Team Members</p>
                  <p className="text-2xl font-bold text-white">12</p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Active Tasks</p>
                  <p className="text-2xl font-bold text-white">8</p>
                </div>
                <Activity className="w-8 h-8 text-purple-500" />
              </div>
            </div>
          </div>

          {/* Recent Projects */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-6">Recent Projects</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                <div>
                  <h3 className="text-white font-medium">AI Automation Platform</h3>
                  <p className="text-slate-400 text-sm">Completed</p>
                </div>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                  Completed
                </span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                <div>
                  <h3 className="text-white font-medium">Cloud Migration</h3>
                  <p className="text-slate-400 text-sm">In Progress</p>
                </div>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                  In Progress
                </span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                <div>
                  <h3 className="text-white font-medium">Mobile App Development</h3>
                  <p className="text-slate-400 text-sm">Planning</p>
                </div>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  Planning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}