<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Bell, 
  LogOut, 
  UserCheck, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Activity,
  Settings,
  User,
  Shield,
  Zap,
  Globe
} from 'lucide-react';

export default function Dashboard() {
  const [user] = useState({
    displayName: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '/images/avatar.jpg'
  });

  const logout = () => {
    // Handle logout logic
    console.log('Logout clicked');
  };

  const stats = [
    {
      title: "Total Users",
      value: "12,847",
      change: "+12%",
      icon: Users,
      color: "text-blue-400"
    },
    {
      title: "Active Projects",
      value: "156",
      change: "+8%",
      icon: Activity,
      color: "text-green-400"
    },
    {
      title: "Revenue",
      value: "$2.4M",
      change: "+23%",
      icon: TrendingUp,
      color: "text-purple-400"
    },
    {
      title: "Security Score",
      value: "98.5%",
      change: "+2%",
      icon: Shield,
      color: "text-yellow-400"
    }
  ];

  const recentActivities = [
    {
      type: "login",
      message: "User logged in from New York",
      time: "2 minutes ago",
      icon: User
    },
    {
      type: "security",
      message: "Two-factor authentication enabled",
      time: "1 hour ago",
      icon: Shield
    },
    {
      type: "update",
      message: "Profile information updated",
      time: "3 hours ago",
      icon: Settings
    },
    {
      type: "activity",
      message: "New project created",
      time: "5 hours ago",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              <p className="text-zion-slate-light">Welcome back, {user.displayName}</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-zion-slate-light hover:text-white transition-colors">
                <Bell className="w-6 h-6" />
              </button>
              <button 
                onClick={logout}
                className="px-4 py-2 bg-zinc-800/50 text-white rounded-lg hover:bg-zinc-700/50 transition-colors flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300"
              whileHover={{ y: -2, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 bg-zinc-700/50 rounded-lg`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
=======
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { CommunityDiscussion } from "@/components/CommunityDiscussion";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Bell, MessageSquare, LogOut, Send, Settings } from "lucide-react";
import { createTestNotification, createOnboardingNotification, createSystemNotification } from "@/utils/notifications";
import { NotificationCenter } from "@/components/NotificationCenter";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
export default function Dashboard() {
    const { user, logout } = useAuth();
    const { toast } = useToast();
    if (!user)
        return null;
    const handleTestNotification = async () => {
        const result = await createTestNotification(user.id);
        if (result.success) {
            toast({
                title: "Test notification created",
                description: "Check your notification center",
            });
        }
        else {
            toast({
                title: "Error creating test notification",
                description: "Something went wrong",
                variant: "destructive",
            });
        }
    };
    const Dashboard = () => {
        return (<>
      
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar - User Profile */}
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-zion-purple flex items-center justify-center text-2xl font-bold text-white mb-4">
                    {user.displayName.split(' ').map(name => name[0]).join('')}
                  </div>
                  <h2 className="text-xl font-bold text-white">{user.displayName}</h2>
                  <p className="text-zion-slate-light mb-2">{user.email}</p>
                  
                  <Badge className="bg-zion-purple text-white mb-4">
                    {user.userType ? user.userType.charAt(0).toUpperCase() + user.userType.slice(1) : "New User"}
                  </Badge>
                  
                  <Button className="w-full flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" onClick={() => window.location.href = "/profile"}>
                    <UserCheck size={16}/>
                    Edit Profile
                  </Button>
                </div>
              </div>
              
              {/* Stats & Metrics */}
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-white mb-4">Your Activity</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Profile Completion</span>
                    <span className="text-zion-cyan font-medium">65%</span>
                  </div>
                  <div className="w-full bg-zion-blue rounded-full h-2">
                    <div className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Community Points</span>
                    <span className="text-zion-cyan font-medium">125</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">ZION$ Balance</span>
                    <span className="text-zion-cyan font-medium">
                      <a href="/wallet" className="hover:underline">View Wallet</a>
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Badges Earned</span>
                    <span className="text-zion-cyan font-medium">3/12</span>
                  </div>
                  
                  {/* Test notification buttons */}
                  <div className="flex flex-col gap-2 mt-4">
                    <Button className="w-full flex items-center justify-center gap-2" variant="outline" onClick={handleTestNotification}>
                      <Send size={16} className="text-zion-cyan"/>
                      Send Test Notification
                    </Button>

                    <Button className="w-full flex items-center justify-center gap-2" variant="outline" onClick={async () => {
                await createOnboardingNotification({
                    userId: user.id,
                    missingMilestone: 'profile_completed',
                    userRole: user.userType === 'employer' || user.userType === 'buyer' ? 'client' : 'talent'
                });
                toast({
                    title: "Onboarding notification sent",
                    description: "Check your notification center"
                });
            }}>
                      <Settings size={16} className="text-zion-purple"/>
                      Send Onboarding Nudge
                    </Button>

                    <Button className="w-full flex items-center justify-center gap-2" variant="outline" onClick={async () => {
                await createSystemNotification({
                    userId: user.id,
                    title: "New Feature Available!",
                    message: "We've added a new notification center to help you stay updated with important information.",
                    actionUrl: "/notifications",
                    actionText: "Explore Now"
                });
                toast({
                    title: "System notification sent",
                    description: "Check your notification center"
                });
            }}>
                      <Bell size={16} className="text-yellow-500"/>
                      Send System Alert
                    </Button>
                  </div>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
                </div>
                <span className="text-sm text-green-400 font-medium">{stat.change}</span>
              </div>
<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-zion-slate-light text-sm">{stat.title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Welcome Section */}
            <div className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-4">Welcome to Zion Tech Group</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/20">
                  <h3 className="text-lg font-medium text-white">Getting Started</h3>
                  <p className="text-zion-slate-light mt-1">Complete your profile to unlock all features</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/20">
                  <h3 className="text-lg font-medium text-white">Explore Services</h3>
                  <p className="text-zion-slate-light mt-1">Discover our AI-powered solutions</p>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-zinc-800/50 rounded-lg">
                    <div className="p-2 bg-zinc-700/50 rounded-lg">
                      <activity.icon className="w-5 h-5 text-zion-cyan" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{activity.message}</p>
                      <p className="text-zion-slate-light text-xs">{activity.time}</p>
                    </div>
=======
              
              {/* Notifications */}
              <div className="bg-zion-blue-dark rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Bell size={18} className="mr-2 text-zion-cyan"/>
                  Recent Notifications
                </h3>
                <div className="space-y-4">
                  <Link to="/notifications" className="block">
                    <Button variant="outline" className="w-full">
                      <Bell className="mr-2 h-4 w-4"/>
                      View All Notifications
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Main Content - Dashboard */}
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Dashboard</h2>
                  <div className="flex items-center gap-2">
                    <NotificationCenter />
                    <Button variant="outline" className="text-zion-slate-light border-zion-blue-light hover:bg-zion-blue hover:text-white" onClick={logout}>
                      <LogOut size={16} className="mr-2"/>
                      Logout
                    </Button>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Quick Actions */}
            <div className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  to="/profile" 
                  className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors"
                >
                  <User className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white">Edit Profile</span>
                </Link>
                <Link 
                  to="/settings" 
                  className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors"
                >
                  <Settings className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white">Settings</span>
                </Link>
                <Link 
                  to="/services" 
                  className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors"
                >
                  <Globe className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white">Browse Services</span>
                </Link>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light">Website</span>
                  <span className="text-green-400 text-sm">Operational</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light">API Services</span>
                  <span className="text-green-400 text-sm">Operational</span>
                </div>
<<<<<<< HEAD
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light">Database</span>
                  <span className="text-green-400 text-sm">Operational</span>
<<<<<<< HEAD
=======
                
                {/* Badges Preview */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-white mb-4">Your Badges</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center mb-2">
                        <UserCheck size={24} className="text-white"/>
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">Newcomer</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-purple-light flex items-center justify-center mb-2">
                        <MessageSquare size={24} className="text-white"/>
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">First Post</span>
                    </div>
                    <div className="flex flex-col items-center opacity-40">
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">
                        <Bell size={24} className="text-zion-slate-light"/>
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
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
=======
>>>>>>> 61e30eca5fbfc0775ada7e1bb633889d4df21738
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
  );
<<<<<<< HEAD
=======
      
    </>);
    };
    export default Dashboard;
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
=======
>>>>>>> 61e30eca5fbfc0775ada7e1bb633889d4df21738
}
