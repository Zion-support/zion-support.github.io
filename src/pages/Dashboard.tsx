import React, { useState } from "react"
import { motion } from "framer-motion"
import { ;
  ArrowRight,;
  Calendar, ;
  BarChart3, ;
  Users, ;
  TrendingUp, ;
  Shield, ;
  Cloud, ;
  Brain,;
  Plus,;
  Settings,;
  Bell,;
  Search,;
  Filter;
} from "lucide-react"
import { SEO } from "../components/SEO"
const quickActions = [;
  { name: 'New Project', icon: Plus, color: 'from-blue-500 to-cyan-500' };
  { name: 'Add Service', icon: Cloud, color: 'from-purple-500 to-pink-500' };
  { name: 'Security Scan', icon: Shield, color: 'from-green-500 to-emerald-500' };
  { name: 'AI Analysis', icon: Brain, color: 'from-orange-500 to-red-500' };
];
const upcomingEvents = [;
  {;
    title: 'Team Meeting',date: 'Today',time: '2:00 PM',type: 'Internal',icon: Users;
  };
  {;
    title: 'Client Presentation',date: 'Tomorrow',time: '10:00 AM',type: 'External',icon: TrendingUp;
  };
  {;
    title: 'Security Review',date: 'Friday',time: '3:00 PM',type: 'Review',icon: Shield;
  };
];
const recentProjects = [;
  {;
    name: 'AI Business Intelligence Platform',progress: 75,status: 'In Progress',team: 'AI Team'
  };
  {;
    name: 'Cloud Migration Project',progress: 45,status: 'Planning',team: 'DevOps Team'
  };
  {;
    name: 'Cybersecurity Enhancement',progress: 90,status: 'Testing',team: 'Security Team'
  };
];
export default function Dashboard() {;
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <div className="min-h-screen bg-gray-50">;
      <SEO;
        title="Dashboard - Zion Tech Group"
        description="Manage your projects, monitor performance, and access quick actions from your personalized dashboard."
        keywords="dashboard, project management, performance monitoring, quick actions"
        canonical="https://ziontechgroup.com/dashboard"
      />;
      ;
      {/* Header */};
      <header className="bg-white shadow-sm border-b border-gray-200">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex items-center justify-between h-16">;
            <div className="flex items-center">;
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</[^>]*>
            </[^>]*>
            <div className="flex items-center space-x-4">;
              <div className="relative">;
                <[^>]*/>
                <input;
                  type="text"
                  placeholder="Search..."
                  value={searchQuery};
                  onChange={(e) => setSearchQuery(e.target.value)};
                  className="[^"]*"
                />;
              </[^>]*>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">;
                <[^>]*/>
              </[^>]*>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Main Content */};
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">;
        {/* Stats Overview */};
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">;
          {[;
            { label: 'Active Projects', value: '12', icon: TrendingUp, color: 'from-blue-500 to-cyan-500' };
            { label: 'Team Members', value: '48', icon: Users, color: 'from-purple-500 to-pink-500' };
            { label: 'Services Running', value: '24', icon: Cloud, color: 'from-green-500 to-emerald-500' };
            { label: 'Security Score', value: '98%', icon: Shield, color: 'from-orange-500 to-red-500' };
          ].map((stat, index) => (;
            <motion.div
              key={stat.label};
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ delay: index * 0.1 }};
              className="[^"]*"
            >;
              <div className="flex items-center">;
                <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-lg mr-4`}>;
                  <[^>]*/>
                </[^>]*>
                <div>;
                  <p className="text-sm font-medium text-gray-600">{stat.label}</[^>]*>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        {/* Main Dashboard Grid */};
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
          {/* Recent Projects */};
          <div className="lg:col-span-2">;
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">;
              <div className="flex items-center justify-between mb-6">;
                <h2 className="text-xl font-semibold text-gray-900">Recent Projects</[^>]*>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">;
                  View All;
                </[^>]*>
              </[^>]*>
              ;
              <div className="space-y-4">;
                {recentProjects.map((project, index) => (;
                  <motion.div
                    key={project.name};
                    initial={{ opacity: 0, x: -20 }};
                    animate={{ opacity: 1, x: 0 }};
                    transition={{ delay: index * 0.1 }};
                    className="[^"]*"
                  >;
                    <div className="flex-1">;
                      <h3 className="font-medium text-gray-900">{project.name}</[^>]*>
                      <p className="text-sm text-gray-500">{project.team}</[^>]*>
                      <div className="mt-2">;
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-1">;
                          <span>Progress</[^>]*>
                          <span>{project.progress}%</[^>]*>
                        </[^>]*>
                        <div className="w-full bg-gray-200 rounded-full h-2">;
                          <div;
                            className="[^"]*"
                            style={{ width: `${project.progress}%` }};
                          ></[^>]*>
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>

                    <button className="p-2 text-zion-slate-light hover:text-white transition-colors">;
                      <[^>]*/>
                    </[^>]*>
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Quick Actions & Events */};
          <div className="space-y-6">;
            {/* Quick Actions */};
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">;
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</[^>]*>
              <div className="grid grid-cols-2 gap-3">;
                {quickActions.map((action, index) => (;
                  <motion.button
                    key={action.name};
                    initial={{ opacity: 0, scale: 0.9 }};
                    animate={{ opacity: 1, scale: 1 }};
                    transition={{ delay: index * 0.1 }};
                    className={`p-3 rounded-lg bg-gradient-to-r ${action.color} text-white text-sm font-medium hover:shadow-lg transition-shadow flex flex-col items-center`};
                  >;
                    <[^>]*/>
                    {action.name};
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>

            {/* Upcoming Events */};
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">;
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</[^>]*>
              <div className="space-y-3">;
                {upcomingEvents.map((event, index) => (;
                  <motion.div
                    key={event.title};
                    initial={{ opacity: 0, y: 10 }};
                    animate={{ opacity: 1, y: 0 }};
                    transition={{ delay: index * 0.1 }};
                    className="[^"]*"
                  >;
                    <div className="p-2 rounded-lg bg-blue-100 mr-3">;
                      <[^>]*/>
                    </[^>]*>
                    <div className="flex-1">;
                      <h4 className="text-sm font-medium text-gray-900">{event.title}</[^>]*>
                      <div className="flex items-center mt-1 text-xs text-gray-500 space-x-2">;
                        <span className="flex items-center">;
                          <[^>]*/>
                          {event.date};
                        </[^>]*>
                        <span>{event.time}</[^>]*>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">;
                          {event.type};
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Service Performance Chart */};
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">;
          <div className="flex items-center justify-between mb-6">;
            <h2 className="text-xl font-semibold text-gray-900">Service Performance</[^>]*>
            <div className="flex items-center space-x-4">;
              <div className="flex items-center space-x-2">;
                <div className="w-3 h-3 bg-blue-500 rounded-full"></[^>]*>
                <span className="text-sm text-gray-600">AI Services</[^>]*>
              </[^>]*>
              <div className="flex items-center space-x-2">;
                <div className="w-3 h-3 bg-green-500 rounded-full"></[^>]*>
                <span className="text-sm text-gray-600">Cloud Services</[^>]*>
              </[^>]*>
              <div className="flex items-center space-x-2">;
                <div className="w-3 h-3 bg-purple-500 rounded-full"></[^>]*>
                <span className="text-sm text-gray-600">Security Services</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
          ;
          {/* Placeholder for chart */};
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">;
            <div className="text-center">;
              <[^>]*/>
              <p className="text-gray-500">Performance chart will be displayed here</[^>]*>
              <p className="text-sm text-gray-400">Integration with analytics service required</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};