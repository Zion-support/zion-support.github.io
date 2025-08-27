import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Bell, LogOut, UserCheck, MessageSquare } from 'lucide-react';

const Dashboard = () => {
  const user = {
    displayName: 'John Doe',
    email: 'john@example.com'
  };

  const logout = () => {
    // Handle logout
    console.log('Logout clicked');
  };

  const NotificationCenter = () => (
    <Button variant="outline" size="sm" className="text-zion-slate-light border-zion-blue-light hover:bg-zion-blue hover:text-white">
      <Bell className="h-4 w-4 mr-2"/>
      Notifications
    </Button>
  );

  const CommunityDiscussion = () => (
    <div className="bg-zion-blue-light/10 rounded-lg p-4 border border-zion-blue-light/20">
      <h4 className="text-white font-medium mb-2">Recent Discussions</h4>
      <p className="text-zion-slate-light text-sm">No recent discussions yet. Start a conversation!</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* User Profile Card */}
            <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-zion-purple flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  {user.displayName.split(' ').map(name => name[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-white">{user.displayName}</h3>
                <p className="text-zion-slate-light">{user.email}</p>
              </div>
              
              <div className="space-y-3">
                <Link to="/profile" className="block w-full text-center bg-zion-purple hover:bg-zion-purple-light text-white py-2 px-4 rounded-lg transition-colors">
                  Edit Profile
                </Link>
                <Link to="/settings" className="block w-full text-center bg-zion-blue-light hover:bg-zion-blue text-white py-2 px-4 rounded-lg transition-colors">
                  Settings
                </Link>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full text-zion-slate-light border-zion-blue-light hover:bg-zion-blue hover:text-white"
                  onClick={() => {
                    // Handle system alert
                    console.log('System alert sent');
                  }}
                >
                  <Bell size={16} className="mr-2 text-yellow-500"/>
                  Send System Alert
                </Button>
              </div>
            </div>
            
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
