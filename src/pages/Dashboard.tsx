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
                </div>
                <span className="text-sm text-green-400 font-medium">{stat.change}</span>
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
          </motion.div>
        </div>
      </div>
      
    </>);
    };
    export default Dashboard;
}
