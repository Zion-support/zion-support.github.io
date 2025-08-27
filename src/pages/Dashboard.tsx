import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
          Dashboard
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Welcome Card */}
            <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
              <h3 className="text-xl font-semibold text-white mb-4">Welcome Back!</h3>
              <p className="text-zion-slate-light mb-4">
                Here's what's happening with your Zion Tech Group account today.
              </p>
              <div className="flex gap-3">
                <Link 
                  to="/profile" 
                  className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
                >
                  View Profile
                </Link>
                <Link 
                  to="/services" 
                  className="px-4 py-2 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-colors"
                >
                  Browse Services
                </Link>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
              <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-zion-slate-dark/30 rounded-lg">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                  <span className="text-zion-slate-light">Account created successfully</span>
                  <span className="text-xs text-zion-slate-light ml-auto">2 days ago</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zion-slate-dark/30 rounded-lg">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                  <span className="text-zion-slate-light">Profile information updated</span>
                  <span className="text-xs text-zion-slate-light ml-auto">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  to="/profile" 
                  className="flex items-center gap-3 p-3 bg-zion-slate-dark/30 rounded-lg hover:bg-zion-slate-dark/50 transition-colors"
                >
                  <span className="text-zion-cyan">👤</span>
                  <span className="text-white">Edit Profile</span>
                </Link>
                <Link 
                  to="/services" 
                  className="flex items-center gap-3 p-3 bg-zion-slate-dark/30 rounded-lg hover:bg-zion-slate-dark/50 transition-colors"
                >
                  <span className="text-zion-cyan">🌐</span>
                  <span className="text-white">Browse Services</span>
                </Link>
                <Link 
                  to="/contact" 
                  className="flex items-center gap-3 p-3 bg-zion-slate-dark/30 rounded-lg hover:bg-zion-slate-dark/50 transition-colors"
                >
                  <span className="text-zion-cyan">📞</span>
                  <span className="text-white">Contact Support</span>
                </Link>
              </div>
            </div>
            
            {/* System Status */}
            <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
              <h3 className="text-xl font-semibold text-white mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light">Website</span>
                  <span className="text-green-400 text-sm">Operational</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light">API Services</span>
                  <span className="text-green-400 text-sm">Operational</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light">Database</span>
                  <span className="text-green-400 text-sm">Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
