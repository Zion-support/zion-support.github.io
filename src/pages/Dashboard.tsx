<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import dynamic from 'next/dynamic',
import { useAuth } from "@/hooks/useAuth",
import { useRequireAuth } from "@/hooks/useAuthGuard",
import { Button } from "@/components/ui/button",
import { Header } from "@/components/Header",
import { Badge } from "@/components/ui/badge",
import { UserCheck, Bell, MessageSquare, LogOut, Send, Settings, FileText, Heart, Key, ShoppingBag } from 'lucide-react'
import { useGetOrdersQuery } from '@/hooks/useOrders',
import { useFavorites } from '@/hooks/useFavorites',
import { useToast } from "@/hooks/use-toast",
import { EmptyState } from "@/components/ui/empty-state",
import Link from 'next/link',
// Lazy load heavy components to prevent router abort
const CommunityDiscussion = dynamic(() => import("@/components/CommunityDiscussion").then(mod => ({ default: mod.CommunityDiscussion })), {
  loading: () => <div className="h-32 bg-zion-blue-light rounded animate-pulse" />,
  ssr: false}),

const PointsBadge = dynamic(() => import('@/components/loyalty/PointsBadge').then(mod => ({ default: mod.PointsBadge })), {
  loading: () => <span className="text-zion-cyan font-medium">Loading...</span>,
  ssr: false}),

const ApiKeysManager = dynamic(() => import('@/components/developers/ApiKeysManager').then(mod => ({ default: mod.ApiKeysManager })), {
  loading: () => <div className="h-24 bg-zion-blue-light rounded animate-pulse" />,
  ssr: false}),

const NotificationBell = dynamic(() => import("@/components/NotificationBell").then(mod => ({ default: mod.NotificationBell })), {
  loading: () => <Bell size={16} className="text-zion-cyan" />,
  ssr: false}),

const GuidedTour = dynamic(() => import("@/components/onboarding/GuidedTour").then(mod => ({ default: mod.GuidedTour })), {
  ssr: false}),

// Lazy load notification functions
const loadNotificationFunctions = () => import("@/utils/notifications"),
=======
import React from 'react';
import dynamic from 'next/dynamic';
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useRequireAuth } from &quot;@/hooks/useAuthGuard&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { UserCheck, Bell, MessageSquare, LogOut, Send, Settings, FileText, Heart, Key, ShoppingBag } from 'lucide-react'
import { useGetOrdersQuery } from '@/hooks/useOrders';
import { useFavorites } from '@/hooks/useFavorites';
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { EmptyState } from &quot;@/components/ui/empty-state&quot;;
import Link from 'next/link';

// Lazy load heavy components to prevent router abort
const CommunityDiscussion = dynamic(() => import(&quot;@/components/CommunityDiscussion&quot;).then(mod => ({ default: mod.CommunityDiscussion })), {
  loading: () => <div className=&quot;h-32 bg-zion-blue-light rounded animate-pulse&quot; />,
  ssr: false});

const PointsBadge = dynamic(() => import('@/components/loyalty/PointsBadge').then(mod => ({ default: mod.PointsBadge })), {
  loading: () => <span className=&quot;text-zion-cyan font-medium&quot;>Loading...</span>,
  ssr: false});

const ApiKeysManager = dynamic(() => import('@/components/developers/ApiKeysManager').then(mod => ({ default: mod.ApiKeysManager })), {
  loading: () => <div className=&quot;h-24 bg-zion-blue-light rounded animate-pulse&quot; />,
  ssr: false});

const NotificationBell = dynamic(() => import(&quot;@/components/NotificationBell&quot;).then(mod => ({ default: mod.NotificationBell })), {
  loading: () => <Bell size={16} className=&quot;text-zion-cyan&quot; />,
  ssr: false});

const GuidedTour = dynamic(() => import(&quot;@/components/onboarding/GuidedTour&quot;).then(mod => ({ default: mod.GuidedTour })), {
  ssr: false});

// Lazy load notification functions
const loadNotificationFunctions = () => import(&quot;@/utils/notifications&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export default function Dashboard() {
  const { logout } = useAuth(),
  const { user, loading } = useRequireAuth(), // This will handle authentication and redirects
  const { toast } = useToast(),
  
  // Add safe checks for user ID to prevent premature API calls
  const userId = user?.id,
  const { data: orders = [], isLoading: ordersLoading } = useGetOrdersQuery(userId),
  const { favorites } = useFavorites(),

  // Type assertion to work around Supabase User type limitations
  const userWithExtendedProps = user as any,
  const userType = userWithExtendedProps?.userType || user?.user_metadata?.userType || 'talent',
  const roleForTour = userType === 'client' || userType === 'admin' ? 'client' : 'talent',

  if (loading) {
    return (
      <div className=&quot;min-h-screen flex items-center justify-center&quot;>
        <div className=&quot;text-center&quot;>
          <div className=&quot;animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4&quot;></div>
          <p className=&quot;text-gray-600&quot;>Loading dashboard...</p>
        </div>
      </div>
    )
  }

  // useRequireAuth will handle redirect if user is not authenticated
  if (!user) {
    return (
      <div className=&quot;min-h-screen flex items-center justify-center&quot;>
        <div className=&quot;text-center&quot;>
          <div className=&quot;animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4&quot;></div>
          <p className=&quot;text-gray-600&quot;>Redirecting to login...</p>
        </div>
      </div>
    )
  }

  const handleTestNotification = async () => {
    try {
<<<<<<< HEAD
      const { createTestNotification } = await loadNotificationFunctions(),
      const result = await createTestNotification(user?.id ?? ""),
      if (result.success) {
        toast({
          title: "Test notification created",
          description: "Check your notification center"})
      } else {
        toast({
          title: "Error creating test notification",
          description: "Something went wrong",
          variant: "destructive"})
      }
    } catch (error) {
      toast({
        title: "Error loading notification system",
        description: "Please try again",
        variant: "destructive"})
=======
      const { createTestNotification } = await loadNotificationFunctions();
      const result = await createTestNotification(user?.id ?? "&quot;);
      if (result.success) {
        toast({
          title: &quot;Test notification created&quot;,
          description: &quot;Check your notification center&quot;});
      } else {
        toast({
          title: &quot;Error creating test notification&quot;,
          description: &quot;Something went wrong&quot;,
          variant: &quot;destructive&quot;});
      }
    } catch (error) {
      toast({
        title: &quot;Error loading notification system&quot;,
        description: &quot;Please try again&quot;,
        variant: &quot;destructive"});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Lazy load heavy components to prevent router abort
const _CommunityDiscussion = dynamic__(() => import("@/components/CommunityDiscussion").then(mod => ({_default: mod.CommunityDiscussion})), {_loading: () => <div className="h-32 bg-zion-blue-light rounded animate-pulse" />, _ssr: false});

const _PointsBadge = dynamic__(() => import('@/components/loyalty/PointsBadge').then(mod => ({_default: mod.PointsBadge})), {_loading: () => <span className="text-zion-cyan font-medium">Loading...</span>, _ssr: false});

const _ApiKeysManager = dynamic__(() => import('@/components/developers/ApiKeysManager').then(mod => ({_default: mod.ApiKeysManager})), {_loading: () => <div className="h-24 bg-zion-blue-light rounded animate-pulse" />, _ssr: false});

const _NotificationBell = dynamic__(() => import("@/components/NotificationBell").then(mod => ({_default: mod.NotificationBell})), {_loading: () => <Bell size={16} className="text-zion-cyan" />,
  ssr: false});

const _GuidedTour = dynamic__(() => import("@/components/onboarding/GuidedTour").then(mod => ({_default: mod.GuidedTour})), {_ssr: false});

// Lazy load notification functions
const _loadNotificationFunctions = () => import("@/utils/notifications");

export default function Dashboard() {_const { logout} = useAuth();
  const {_user, _loading} = useRequireAuth(); // This will handle authentication and redirects
  const {_toast} = useToast();
  
  // Add safe checks for user ID to prevent premature API calls
  const _userId = user?.id;
  const {_data: orders = [], _isLoading: ordersLoading} = useGetOrdersQuery(userId);
  const {_favorites} = useFavorites();

  // Type assertion to work around Supabase User type limitations
  const _userWithExtendedProps = user as any;
  const _userType = userWithExtendedProps?.userType || user?.user_metadata?.userType || 'talent';
  const _roleForTour = userType === 'client' || userType === 'admin' ? 'client' : 'talent';

  if (loading) {_return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );}

  // useRequireAuth will handle redirect if user is not authenticated
  if (!user) {_return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );}

  const _handleTestNotification = async () => {_try {
      const { createTestNotification} = await loadNotificationFunctions();
      const _result = await createTestNotification(user?.id ?? "");
      if (result.success) {_toast({
          title: "Test notification created", _description: "Check your notification center"});
      } else {_toast({
          title: "Error creating test notification", _description: "Something went wrong", _variant: "destructive"});
      }
    } catch (error) {_toast({
        title: "Error loading notification system", _description: "Please try again", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {_/* Left Sidebar - User Profile */}
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-zion-purple flex items-center justify-center text-2xl font-bold text-white mb-4">
                    {_userWithExtendedProps?.displayName?.split(' ').map(_(name: string) => name[0]).join('') || userWithExtendedProps?.email?.charAt(0).toUpperCase()}
                  </div>
                  <h2 className="text-xl font-bold text-white">{_userWithExtendedProps?.displayName || userWithExtendedProps?.email}</h2>
                  <p className="text-zion-slate-light mb-2">{_user?.email}</p>
                  
                  <Badge
                    className="bg-zion-purple text-white mb-4&quot;
                  >
<<<<<<< HEAD
                    {userType ? userType.charAt(0).toUpperCase() + userType.slice(1) : &quot;New User&quot;}
                  </Badge>
                  
                  <Button
                    id=&quot;profile-link"
                    className="w-full flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
                    onClick={() => window.location.href = &quot;/profile"}
=======
                    {_userType ? userType.charAt(0).toUpperCase() + userType.slice(1) : "New User"}
                  </Badge>
                  
                  <Button
                    id="profile-link"
                    className="w-full flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    onClick={_() => window.location.href = "/profile"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <UserCheck size={_16} />
                    Edit Profile
                  </Button>
                </div>
              </div>
              
              {_/* Stats & Metrics */}
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-white mb-4">Your Activity</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Profile Completion</span>
                    <span className="text-zion-cyan font-medium">65%</span>
                  </div>
                  <div className="w-full bg-zion-blue rounded-full h-2">
<<<<<<< HEAD
                    <div className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full&quot; style={{ width: &quot;65%" }}></div>
=======
                    <div className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" style={_{ width: "65%"}}></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Points</span>
                    <PointsBadge />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">ZION$ Balance</span>
                    <span className="text-zion-cyan font-medium">
                      <Link href="/wallet" className="hover:underline">View Wallet</Link>
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Badges Earned</span>
                    <span className="text-zion-cyan font-medium">3/12</span>
                  </div>
                  
                  {_/* Test notification buttons */}
                  <div className="flex flex-col gap-2 mt-4">
                    <Button 
<<<<<<< HEAD
                      className="w-full flex items-center justify-center gap-2&quot;
                      variant=&quot;outline"
                      onClick={handleTestNotification}
=======
                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
                      onClick={_handleTestNotification}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      <Send size={_16} className="text-zion-cyan" />
                      Send Test Notification
                    </Button>

                    <Button 
<<<<<<< HEAD
                      className="w-full flex items-center justify-center gap-2&quot;
                      variant=&quot;outline&quot;
                      onClick={async () => {
                        try {
                          const { createOnboardingNotification } = await loadNotificationFunctions(),
                          await createOnboardingNotification({
                            userId: user?.id ?? "&quot;,
                            missingMilestone: 'profile_completed',
                            userRole: roleForTour
                          }),
                          toast({
<<<<<<< HEAD
                            title: "Onboarding notification sent",
                            description: "Check your notification center"
                          })
                        } catch (error) {
                          toast({
                            title: "Error sending notification",
                            description: "Please try again",
                            variant: "destructive"})
=======
                            title: &quot;Onboarding notification sent&quot;,
                            description: &quot;Check your notification center&quot;
                          });
                        } catch (error) {
                          toast({
                            title: &quot;Error sending notification&quot;,
                            description: &quot;Please try again&quot;,
                            variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                        }
                      }}
                    >
                      <Settings size={16} className=&quot;text-zion-purple&quot; />
=======
                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
                      onClick={_async () => {
                        try {
                          const { createOnboardingNotification} = await loadNotificationFunctions();
                          await createOnboardingNotification({_userId: user?.id ?? "", _missingMilestone: 'profile_completed', _userRole: roleForTour});
                          toast({_title: "Onboarding notification sent", _description: "Check your notification center"});
                        } catch (error) {_toast({
                            title: "Error sending notification", _description: "Please try again", _variant: "destructive"});
                        }
                      }}
                    >
                      <Settings size={_16} className="text-zion-purple" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      Send Onboarding Nudge
                    </Button>

                    <Button 
<<<<<<< HEAD
                      className=&quot;w-full flex items-center justify-center gap-2&quot;
                      variant=&quot;outline&quot;
                      onClick={async () => {
                        try {
                          const { createSystemNotification } = await loadNotificationFunctions(),
                          await createSystemNotification({
<<<<<<< HEAD
                            userId: user?.id ?? "",
                            title: "New Feature Available!",
                            message: "We've added a new notification center to help you stay updated with important information.",
                            actionUrl: "/notifications",
                            actionText: "Explore Now"
                          }),
                          toast({
                            title: "System notification sent",
                            description: "Check your notification center"
                          })
                        } catch (error) {
                          toast({
                            title: "Error sending notification",
                            description: "Please try again",
                            variant: "destructive"})
=======
                            userId: user?.id ?? "&quot;,
                            title: &quot;New Feature Available!&quot;,
                            message: &quot;We've added a new notification center to help you stay updated with important information.&quot;,
                            actionUrl: &quot;/notifications&quot;,
                            actionText: &quot;Explore Now&quot;
                          });
                          toast({
                            title: &quot;System notification sent&quot;,
                            description: &quot;Check your notification center&quot;
                          });
                        } catch (error) {
                          toast({
                            title: &quot;Error sending notification&quot;,
                            description: &quot;Please try again&quot;,
                            variant: &quot;destructive"});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
                      onClick={_async () => {
                        try {
                          const { createSystemNotification} = await loadNotificationFunctions();
                          await createSystemNotification({_userId: user?.id ?? "", _title: "New Feature Available!", _message: "We've added a new notification center to help you stay updated with important information.", _actionUrl: "/notifications", _actionText: "Explore Now"});
                          toast({_title: "System notification sent", _description: "Check your notification center"});
                        } catch (error) {_toast({
                            title: "Error sending notification", _description: "Please try again", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        }
                      }}
                    >
                      <Bell size={_16} className="text-yellow-500" />
                      Send System Alert
                    </Button>
                  </div>
                </div>
              </div>
              
              {_/* Notifications */}
              <div className="bg-zion-blue-dark rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Bell size={_18} className="mr-2 text-zion-cyan" />
                  Recent Notifications
                </h3>
                <div className="space-y-4">
                  <Link href="/notifications" className="block&quot; id=&quot;notifications-link&quot;>
                    <Button variant=&quot;outline" className="w-full">
                      <Bell className="mr-2 h-4 w-4" />
                      View All Notifications
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {_/* Main Content - Dashboard */}
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white&quot; data-testid=&quot;dashboard-header">Dashboard</h2>
                  <div className="flex items-center gap-2&quot;>
                    <NotificationBell />
                    <Button 
                      variant=&quot;outline" 
                      className="text-zion-slate-light border-zion-blue-light hover:bg-zion-blue hover:text-white"
                      onClick={_logout}
                    >
                      <LogOut size={_16} className="mr-2" />
                      Logout
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-purple/30 border border-zion-blue-light">
                    <h3 className="text-lg font-medium text-white">Welcome, {_userWithExtendedProps?.displayName?.split(' ')[0] || 'User'}</h3>
                    <p className="text-zion-slate-light mt-1">Your journey on Zion has just begun!</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light">
                    <h3 className="text-lg font-medium text-white">Getting Started</h3>
                    <p className="text-zion-slate-light mt-1">Complete your profile to unlock all features.</p>
                  </div>
                </div>
                
                {_/* Badges Preview */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-white mb-4">Your Badges</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center mb-2">
                        <UserCheck size={_24} className="text-white" />
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">Newcomer</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-purple-light flex items-center justify-center mb-2">
                        <MessageSquare size={_24} className="text-white" />
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">First Post</span>
                    </div>
                    <div className="flex flex-col items-center opacity-40">
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">
                        <Bell size={_24} className="text-zion-slate-light" />
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">Locked</span>
                    </div>
                    <div className="flex flex-col items-center opacity-40">
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">
                        <span className="text-zion-slate-light text-xl">?</span>
                      </div>
                      <span className="text-xs text-center text-zion-slate-light&quot;>Locked</span>
                    </div>
                  </div>
                </div>
                
<<<<<<< HEAD
                {/* Community Section */}
                <div id=&quot;community-section">
=======
                {_/* Community Section */}
                <div id="community-section">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <h3 className="text-lg font-bold text-white mb-4">Community</h3>
                  <CommunityDiscussion />
                </div>

                {_/* User Overview */}
                <div className="mt-8 space-y-8">
                  <div className="bg-zion-blue-dark rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                      <FileText className="mr-2" size={_18} /> Recent Orders
                    </h3>
                    {_ordersLoading ? (
                      <p className="text-zion-slate-light">Loading...</p>
                    ) : orders.length === 0 ? (
                      <EmptyState
<<<<<<< HEAD
                        icon={<ShoppingBag className="h-8 w-8&quot; />}
                        title=&quot;No Orders&quot;
                        description=&quot;You haven't purchased anything yet."
                        action={{ text: 'Visit Marketplace', href: '/marketplace' }}
=======
                        icon={<ShoppingBag className="h-8 w-8" />}
                        title="No Orders"
                        description="You haven't purchased anything yet."
                        action={_{ text: 'Visit Marketplace', _href: '/marketplace'}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        className="border-none bg-transparent text-center"
                      />
                    ) : (
                      <ul className="space-y-1">
                        {_orders.slice(0, _3).map(o => (
                          <li key={o.orderId} className="flex justify-between">
                            <span>#{_o.orderId}</span>
                            <Link href={_`/orders/${o.orderId}`} className="text-zion-purple underline">View</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-2 text-right">
                      <Link href="/orders" className="text-zion-purple underline">View all</Link>
                    </div>
                  </div>

                  <div className="bg-zion-blue-dark rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                      <Heart className="mr-2" size={_18} /> Wishlist
                    </h3>
                    {_favorites.length === 0 ? (
                      <p className="text-zion-slate-light">No items saved.</p>
                    ) : (
                      <ul className="space-y-1">
                        {favorites.slice(0, _3).map(f => (
                          <li key={f.item_id}>{_f.item_id}</li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-2 text-right">
                      <Link href="/wishlist" className="text-zion-purple underline">View all</Link>
                    </div>
                  </div>

                  <div className="bg-zion-blue-dark rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                      <Key className="mr-2" size={_18} /> API Keys
                    </h3>
                    <ApiKeysManager />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GuidedTour role={_roleForTour} />
    </>
  )
}
