import React from 'react';
<<<<<<< HEAD
import { BarChart3, Users, Settings, Bell } from 'lucide-react';
import SEO from '../components/SEO';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Dashboard - Zion Tech Group"
        description="Access your Zion Tech Group dashboard and manage your services."
        keywords={["dashboard", "account", "services", "management"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Dashboard</h1>
          <p className="text-xl text-gray-300">
            Manage your services and account
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 rounded-lg p-6">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-blue-400 mr-3" />
              <div>
                <p className="text-gray-400 text-sm">Active Services</p>
                <p className="text-2xl font-bold text-white">3</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-green-400 mr-3" />
              <div>
                <p className="text-gray-400 text-sm">Team Members</p>
                <p className="text-2xl font-bold text-white">12</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6">
            <div className="flex items-center">
              <Settings className="h-8 w-8 text-purple-400 mr-3" />
              <div>
                <p className="text-gray-400 text-sm">Projects</p>
                <p className="text-2xl font-bold text-white">5</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6">
            <div className="flex items-center">
              <Bell className="h-8 w-8 text-orange-400 mr-3" />
              <div>
                <p className="text-gray-400 text-sm">Notifications</p>
                <p className="text-2xl font-bold text-white">2</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-700">
              <div>
                <p className="text-white font-semibold">AI Model Training Completed</p>
                <p className="text-gray-400 text-sm">2 hours ago</p>
              </div>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Completed</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-slate-700">
              <div>
                <p className="text-white font-semibold">Cloud Infrastructure Updated</p>
                <p className="text-gray-400 text-sm">1 day ago</p>
              </div>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">In Progress</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-white font-semibold">Security Audit Scheduled</p>
                <p className="text-gray-400 text-sm">3 days ago</p>
              </div>
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
=======
import SEO from '../components/SEO';

export default function Dashboard() {
  return (
    <>
      <SEO 
        title="Dashboard - Zion Tech Group"
        description="Access your personalized dashboard and project management tools."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Dashboard</h1>
            <p className="text-xl text-slate-300">Your personalized project dashboard.</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40
