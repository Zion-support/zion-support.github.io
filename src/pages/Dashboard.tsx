import React from 'react';
import dynamic from 'next / dynamic';
import { use_auth } from '@/hooks / use_auth';
import { useRequireAuth } from '@/hooks / useAuthGuard';
import { Button } from '@/components / ui / button';
import { Header } from '@/components / Header';
import { Badge } from '@/components / ui / badge';
import {
  UserCheck,
  Bell,
  MessageSquare,
  LogOut,
  Send,
  Settings,
  FileText,
  Heart,
  Key,
  ShoppingBag,
} from 'lucide-react';
import { useGetOrdersQuery } from '@/hooks / use_orders';
import { use_favorites } from '@/hooks / use_favorites';
import { use_toast } from '@/hooks / use - toast';
import { EmptyState } from '@/components / ui / empty - state';
import Link from 'next / link';
// Lazy load heavy components to prevent router abort;
const CommunityDiscussion = dynamic (
  () =>;
    import ('@/components / CommunityDiscussion').then (mod => ({
      default: mod.CommunityDiscussion,
    })),
  {
    loading: () => (
      <div className='h - 32 bg - zion - blue - light rounded animate - pulse' />),
    ssr: false,
  }
);
const PointsBadge = dynamic (
  () =>;
    import ('@/components / loyalty / PointsBadge').then (mod => ({
      default: mod.PointsBadge,
    })),
  {
    loading: () => (
      <span className='text - zion - cyan font - medium'>Loading...</span>),
    ssr: false,
  }
);
const ApiKeysManager = dynamic (
  () =>;
    import ('@/components / developers / ApiKeysManager').then (mod => ({
      default: mod.ApiKeysManager,
    })),
  {
    loading: () => (
      <div className='h - 24 bg - zion - blue - light rounded animate - pulse' />),
    ssr: false,
  }
);
const NotificationBell = dynamic (
  () =>;
    import ('@/components / NotificationBell').then (mod => ({
      default: mod.NotificationBell,
    })),
  {
    loading: () => <Bell size={16} className='text - zion - cyan' />,
    ssr: false,
  }
);
const GuidedTour = dynamic (
  () =>;
    import ('@/components / onboarding / GuidedTour').then (mod => ({
      default: mod.GuidedTour,
    })),
  {
    ssr: false
  }
);
// Lazy load notification functions;
const loadNotificationFunctions = () =>: any import ('@/utils / notifications');
export default /**
 * Dashboard - Function description
 */
function Dashboard() {
  const { logout } = use_auth ();
  const { user, loading } = useRequireAuth (); // This will handle authentication and redirects;
  const { toast } = use_toast ();
  // Add safe checks for user ID to prevent premature API calls;
  const user_id = user?.id;
  const { data: orders = [], is_loading: orders_loading } =;
    useGetOrdersQuery (user_id);
  const { favorites } = use_favorites ();
  // Type assertion to work around Supabase User type limitations;
  const userWithExtendedProps = user as any;
  const user_type =;
    userWithExtendedProps?.user_type ||;
    user?.user_metadata?.user_type ||;
    'talent';
  const roleForTour =;
    user_type === 'client' || user_type === 'admin' ? 'client' : 'talent';
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='min - h-screen flex items - center justify - center'>;
        <div className='text - center'>;
          <div className='animate - spin rounded - full h - 8 w - 8 border - b-2 border - blue - 600 mx - auto mb - 4'></div>;
          <p className='text - gray - 600'>Loading dashboard...</p>;
        </div>;
      </div>);
  }
  // useRequireAuth will handle redirect if user is not authenticated;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='min - h-screen flex items - center justify - center'>;
        <div className='text - center'>;
          <div className='animate - spin rounded - full h - 8 w - 8 border - b-2 border - blue - 600 mx - auto mb - 4'></div>;
          <p className='text - gray - 600'>Redirecting to login...</p>;
        </div>;
      </div>);
  }
  const handleTestNotification = async () => {
    try {
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import dynamic from 'next/dynamic';
import { useAuth } from '@/hooks/useAuth';
import { useRequireAuth } from '@/hooks/useAuthGuard';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import {;
  UserCheck,;
  Bell,;
  MessageSquare,;
  LogOut,;
  Send,;
  Settings,;
  FileText,;
  Heart,;
  Key,;
  ShoppingBag,;
} from 'lucide-react';
import { useGetOrdersQuery } from '@/hooks/useOrders';
import { useFavorites } from '@/hooks/useFavorites';
import { useToast } from '@/hooks/use-toast';
import { EmptyState } from '@/components/ui/empty-state';
import Link from 'next/link';
// Lazy load heavy components to prevent router abort;
const CommunityDiscussion = dynamic(;
  () =>;
    import('@/components/CommunityDiscussion').then(mod => ({;
      default: mod && mod.CommunityDiscussion,;
    })),;
  {;
    loading: () => (;
      <div className='h-32 bg-zion-blue-light rounded animate-pulse' />;
    ),;
    ssr: false,;
  }
);
const PointsBadge = dynamic(;
  () =>;
    import('@/components/loyalty/PointsBadge').then(mod => ({;
      default: mod && mod.PointsBadge,;
    })),;
  {;
    loading: () => (;
      <span className='text-zion-cyan font-medium'>Loading...</span>;
    ),;
    ssr: false,;
  }
);
const ApiKeysManager = dynamic(;
  () =>;
    import('@/components/developers/ApiKeysManager').then(mod => ({;
      default: mod && mod.ApiKeysManager,;
    })),;
  {;
    loading: () => (;
      <div className='h-24 bg-zion-blue-light rounded animate-pulse' />;
    ),;
    ssr: false,;
  }
);
const NotificationBell = dynamic(;
  () =>;
    import('@/components/NotificationBell').then(mod => ({;
      default: mod && mod.NotificationBell,;
    })),;
  {;
    loading: () => <Bell size={16} className='text-zion-cyan' />,;
    ssr: false,;
  }
);
const GuidedTour = dynamic(;
  () =>;
    import('@/components/onboarding/GuidedTour').then(mod => ({;
      default: mod && mod.GuidedTour,;
    })),;
  {;
    ssr: false,;
  }
);
// Lazy load notification functions;
const loadNotificationFunctions = () => import('@/utils/notifications');
export default function Dashboard() {;
  const { logout } = useAuth();
  const { user, loading } = useRequireAuth(); // This will handle authentication and redirects;
  const { toast } = useToast();
  // Add safe checks for user ID to prevent premature API calls;
  const userId = user?.id;
  const { data: orders = [], isLoading: ordersLoading } =;
    useGetOrdersQuery(userId);
  const { favorites } = useFavorites();
  // Type assertion to work around Supabase User type limitations;
  const userWithExtendedProps = user as any;
  const userType =;
    userWithExtendedProps?.userType ||;
    user?.user_metadata?.userType ||;
    'talent';
  const roleForTour =;
    userType === 'client' || userType === 'admin' ? 'client' : 'talent';
  if (loading) {;
    return (
      <div className='min-h-screen flex items-center justify-center'>;
        <div className='text-center'>;
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4'></div>;
          <p className='text-gray-600'>Loading dashboard...</p>;
        </div>;
      </div>;
    );
  }
  // useRequireAuth will handle redirect if user is not authenticated;
  if (!user) {;
    return (
      <div className='min-h-screen flex items-center justify-center'>;
        <div className='text-center'>;
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4'></div>;
          <p className='text-gray-600'>Redirecting to login...</p>;
        </div>;
      </div>;
    );
  }
  const handleTestNotification = async () => {;
    try {;
      const { createTestNotification } = await loadNotificationFunctions();
      const result = await createTestNotification(user?.id ?? '');
      if (result && result.success) {;
        toast({;
          title: 'Test notification created',;
          description: 'Check your notification center',;
        });
      } else {;
        toast({;
          title: 'Error creating test notification',;
          description: 'Something went wrong',;
          variant: 'destructive',;
        });
      }
    } catch (error) {;
      toast({;
        title: 'Error loading notification system',;
        description: 'Please try again',;
        variant: 'destructive',;
      });
      const { createTestNotification } = await loadNotificationFunctions ();
      const result = await createTestNotification (user?.id ?? '');
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: 'Test notification created',
          description: 'Check your notification center',
        });
      } else {
        toast ({
          title: 'Error creating test notification',
          description: 'Something went wrong',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast ({
        title: 'Error loading notification system',
        description: 'Please try again',
        variant: 'destructive',
      });
    }
  }
  return (
    <>;
      <Header />;
            <div className='lg:col-span-1'>;
              <div className='bg-zion-blue-dark rounded-xl p-6 mb-6'>;
                <div className='flex flex-col items-center text-center'>;
                  <div className='w-24 h-24 rounded-full bg-zion-purple flex items-center justify-center text-2xl font-bold text-white mb-4'>;
                    {userWithExtendedProps?.displayName;
                      ?.split(' ');
                      .map((name: string) => name[0]);
                      .join('') ||;
                      userWithExtendedProps?.email?.charAt(0).toUpperCase()}                  </div>;
                  <h2 className='text-xl font-bold text-white'>;
                    {userWithExtendedProps?.displayName ||;
                      userWithExtendedProps?.email}
                  </h2>;
                  <p className='text-zion-slate-light mb-2'>{user?.email}</p>;
                  <Badge className='bg-zion-purple text-white mb-4'>;
                    {userType;
                      ? userType && userType.charAt(0).toUpperCase() + userType && userType.slice(1);
                      : 'New User'}
                  </Badge>;
                  <Button
                    id='profile-link'
                    className='w-full flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'
                    onClick={() => (window && window.location.href = '/profile')}                  >;
      <div className='min - h-screen bg - zion - blue'>;
        <div className='container mx - auto px - 4 py - 8'>;
          <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 8'>;
            {/* Left Sidebar - User Profile */}
            <div className='lg:col - span - 1'>;
              <div className='bg - zion - blue - dark rounded - xl p - 6 mb - 6'>;
                <div className='flex flex - col items - center text - center'>;
                  <div className='w - 24 h - 24 rounded - full bg - zion - purple flex items - center justify - center text - 2xl font - bold text - white mb - 4'>;
                    {userWithExtendedProps?.display_name;
                      ?.split (' ');
                      .map ((name: string) => name[0]);
                      .join ('') ||;
                      userWithExtendedProps?.email?.char_at (0).toUpperCase ()}                  </div>;
                  <h2 className='text - xl font - bold text - white'>;
                    {userWithExtendedProps?.display_name ||;
                      userWithExtendedProps?.email}
                  </h2>;
                  <p className='text - zion - slate - light mb - 2'>{user?.email}</p>;
                  <Badge className='bg - zion - purple text - white mb - 4'>;
                    {user_type;
                      ? user_type.char_at (0).toUpperCase () + user_type.slice (1);
                      : 'New User'}
                  </Badge>;
                  <Button;
                    id='profile - link';
                    className='w - full flex items - center gap - 2 bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white';
                    on_click={() => (window.location.href = '/profile')}                  >;
                    <UserCheck size={16} />;
                    Edit Profile;
                  </Button>;
                </div>;
              </div>;
                      style={{ width: '65%' }}></div>;
                  </div>;
                  <div className='flex justify-between items-center'>;
                    <span className='text-zion-slate-light'>Points</span>;
                    <PointsBadge />;
                  </div>;
                  <div className='flex justify-between items-center'>;
                    <span className='text-zion-slate-light'>ZION$ Balance</span>;
                    <span className='text-zion-cyan font-medium'>;
              {/* Stats & Metrics */}
              <div className='bg - zion - blue - dark rounded - xl p - 6 mb - 6'>;
                <h3 className='text - lg font - bold text - white mb - 4'>;
                  Your Activity;
                </h3>;
                <div className='space - y-4'>;
                  <div className='flex justify - between items - center'>;
                    <span className='text - zion - slate - light'>;
                      Profile Completion;
                    </span>;
                    <span className='text - zion - cyan font - medium'>65%</span>;
                  </div>;
                  <div className='w - full bg - zion - blue rounded - full h - 2'>;
                    <div;
                      className='bg - gradient - to - r from - zion - cyan to - zion - purple h - 2 rounded - full';
                      style={{ width: '65%' }}
                    ></div>;
                  </div>;
                  <div className='flex justify - between items - center'>;
                    <span className='text - zion - slate - light'>Points</span>;
                    <PointsBadge />;
                  </div>;
                  <div className='flex justify - between items - center'>;
                    <span className='text - zion - slate - light'>ZION$ Balance</span>;
                    <span className='text - zion - cyan font - medium'>;
                      <Link href='/wallet' className='hover:underline'>;
                        View Wallet;
                      </Link>;
                    </span>;
                  </div>;
                      onClick={handleTestNotification}>;
                      <Send size={16} className='text-zion-cyan' />;
                      Send Test Notification;
                    </Button>;
                    <Button
                      className='w-full flex items-center justify-center gap-2'
                      variant='outline'
                      onClick={async () => {;
                        try {;
                          const { createOnboardingNotification } =;
                            await loadNotificationFunctions();
                          await createOnboardingNotification({;
                            userId: user?.id ?? '',;
                            missingMilestone: 'profile_completed',;
                            userRole: roleForTour,;
                          });
                          toast({;
                            title: 'Onboarding notification sent',;
                            description: 'Check your notification center',;
                          });
                        } catch (error) {;
                          toast({;
                            title: 'Error sending notification',;
                            description: 'Please try again',;
                            variant: 'destructive',;
                          });
                        }
                      }}
                    >;
                      <Settings size={16} className='text-zion-purple' />;
                      Send Onboarding Nudge;
                    </Button>;
                    <Button
                      className='w-full flex items-center justify-center gap-2'
                      variant='outline'
                      onClick={async () => {;
                        try {;
                          const { createSystemNotification } =;
                            await loadNotificationFunctions();
                          await createSystemNotification({;
                            userId: user?.id ?? '',;
                            title: 'New Feature Available!',;
                            message:;
                              "We've added a new notification center to help you stay updated with important information.",;
                            actionUrl: '/notifications',;
                            actionText: 'Explore Now',;
                          });
                          toast({;
                            title: 'System notification sent',;
                            description: 'Check your notification center',;
                          });
                        } catch (error) {;
                          toast({;
                            title: 'Error sending notification',;
                            description: 'Please try again',;
                            variant: 'destructive',;
                          });
                        }
                      }}
                    >;
                      <Bell size={16} className='text-yellow-500' />;
                  <div className='flex justify - between items - center'>;
                    <span className='text - zion - slate - light'>Badges Earned</span>;
                    <span className='text - zion - cyan font - medium'>3 / 12</span>;
                  </div>;
                  {/* Test notification buttons */}
                  <div className='flex flex - col gap - 2 mt - 4'>;
                    <Button;
                      className='w - full flex items - center justify - center gap - 2';
                      variant='outline';
                      on_click={handleTestNotification}                    >;
                      <Send size={16} className='text - zion - cyan' />;
                      Send Test Notification;
                    </Button>;
                    <Button;
                      className='w - full flex items - center justify - center gap - 2';
                      variant='outline';
                      on_click={async () => {
                        try {
                          const { createOnboardingNotification } =;
                            await loadNotificationFunctions ();
                          await createOnboardingNotification ({
                            user_id: user?.id ?? '',
                            missing_milestone: 'profile_completed',
                            user_role: roleForTour,
                          });
                          toast ({
                            title: 'Onboarding notification sent',
                            description: 'Check your notification center',
                          });
                        } catch (error) {
                          toast ({
                            title: 'Error sending notification',
                            description: 'Please try again',
                            variant: 'destructive',
                          });
                        }
                      }}
                    >;
                      <Settings size={16} className='text - zion - purple' />;
                      Send Onboarding Nudge;
                    </Button>;
                    <Button;
                      className='w - full flex items - center justify - center gap - 2';
                      variant='outline';
                      on_click={async () => {
                        try {
                          const { createSystemNotification } =;
                            await loadNotificationFunctions ();
                          await createSystemNotification ({
                            user_id: user?.id ?? '',
                            title: 'New Feature Available!',
                            message:;
                              "We've added a new notification center to help you stay updated with important information.",
                            action_url: '/notifications',
                            action_text: 'Explore Now',
                          });
                          toast ({
                            title: 'System notification sent',
                            description: 'Check your notification center',
                          });
                        } catch (error) {
                          toast ({
                            title: 'Error sending notification',
                            description: 'Please try again',
                            variant: 'destructive',
                          });
                        }
                      }}
                    >;
                      <Bell size={16} className='text - yellow - 500' />;
                      Send System Alert;
                    </Button>;
                  </div>;
                </div>;
              </div>;
                    id='notifications-link'>;
                    <Button variant='outline' className='w-full'>;
                      <Bell className='mr-2 h-4 w-4' />;
              {/* Notifications */}
              <div className='bg - zion - blue - dark rounded - xl p - 6'>;
                <h3 className='text - lg font - bold text - white mb - 4 flex items - center'>;
                  <Bell size={18} className='mr - 2 text - zion - cyan' />;
                  Recent Notifications;
                </h3>;
                <div className='space - y-4'>;
                  <Link;
                    href='/notifications';
                    className='block';
                    id='notifications - link';
                  >;
                    <Button variant='outline' className='w - full'>;
                      <Bell className='mr - 2 h - 4 w - 4' />;
                      View All Notifications;
                    </Button>;
                  </Link>;
                </div>;
              </div>;
            </div>;
                      onClick={logout}>;
                      <LogOut size={16} className='mr-2' />;
                      Logout;
                    </Button>;
                  </div>;
                </div>;
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6'>;
                  <div className='p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-purple/30 border border-zion-blue-light'>;
                    <h3 className='text-lg font-medium text-white'>;
                      Welcome,{' '}
                      {userWithExtendedProps?.displayName?.split(' ')[0] ||;
                        'User'}
                    </h3>;
                    <p className='text-zion-slate-light mt-1'>;
                      Your journey on Zion has just begun!;
                    </p>;
                  </div>;
                  <div className='p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light'>;
                    <h3 className='text-lg font-medium text-white'>;
                      Getting Started;
                    </h3>;
                    <p className='text-zion-slate-light mt-1'>;
                      Complete your profile to unlock all features.;
                    </p>;
                  </div>;
                </div>;
                {/* Badges Preview */}
                <div className='mb-8'>;
                  <h3 className='text-lg font-bold text-white mb-4'>;
                    Your Badges;
                  </h3>;
                  <div className='grid grid-cols-3 sm:grid-cols-4 gap-4'>;
                    <div className='flex flex-col items-center'>;
                      <div className='w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center mb-2'>;
                        <UserCheck size={24} className='text-white' />;
                      </div>;
                      <span className='text-xs text-center text-zion-slate-light'>;
                        Newcomer;
                      </span>;
                    </div>;
                    <div className='flex flex-col items-center'>;
                      <div className='w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-purple-light flex items-center justify-center mb-2'>;
                        <MessageSquare size={24} className='text-white' />;
                      </div>;
                      <span className='text-xs text-center text-zion-slate-light'>;
                        First Post;
                      </span>;
                    </div>;
                    <div className='flex flex-col items-center opacity-40'>;
                      <div className='w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2'>;
                        <Bell size={24} className='text-zion-slate-light' />;
                      </div>;
                      <span className='text-xs text-center text-zion-slate-light'>;
                        Locked;
                      </span>;
                    </div>;
                    <div className='flex flex-col items-center opacity-40'>;
                      <div className='w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2'>;
                        <span className='text-zion-slate-light text-xl'>?</span>;
                      </div>;
                      <span className='text-xs text-center text-zion-slate-light'>;
                        Locked;
                      </span>;
                    </div>;
                  </div>;
                </div>;
                {/* Community Section */}
                <div id='community-section'>;
                  <h3 className='text-lg font-bold text-white mb-4'>;
            {/* Main Content - Dashboard */}
            <div className='lg:col - span - 2'>;
              <div className='bg - zion - blue - dark rounded - xl p - 6 mb - 6'>;
                <div className='flex items - center justify - between mb - 6'>;
                  <h2;
                    className='text - 2xl font - bold text - white';
                    data - testid='dashboard - header';
                  >;
                    Dashboard;
                  </h2>;
                  <div className='flex items - center gap - 2'>;
                    <NotificationBell />;
                    <Button;
                      variant='outline';
                      className='text - zion - slate - light border - zion - blue - light hover:bg - zion - blue hover:text - white';
                      on_click={logout}                    >;
                      <LogOut size={16} className='mr - 2' />;
                      Logout;
                    </Button>;
                  </div>;
                </div>;
                <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 2 gap - 4 mb - 6'>;
                  <div className='p - 4 rounded - lg bg - gradient - to - br from - zion - blue to - zion - purple / 30 border border - zion - blue - light'>;
                    <h3 className='text - lg font - medium text - white'>;
                      Welcome, {' '}
                      {userWithExtendedProps?.display_name?.split (' ')[0] ||;
                        'User'}
                    </h3>;
                    <p className='text - zion - slate - light mt - 1'>;
                      Your journey on Zion has just begun!;
                    </p>;
                  </div>;
                  <div className='p - 4 rounded - lg bg - gradient - to - br from - zion - blue to - zion - cyan / 30 border border - zion - blue - light'>;
                    <h3 className='text - lg font - medium text - white'>;
                      Getting Started;
                    </h3>;
                    <p className='text - zion - slate - light mt - 1'>;
                      Complete your profile to unlock all features.;
                    </p>;
                  </div>;
                </div>;
                {/* Badges Preview */}
                <div className='mb - 8'>;
                  <h3 className='text - lg font - bold text - white mb - 4'>;
                    Your Badges;
                  </h3>;
                  <div className='grid grid - cols - 3 sm:grid - cols - 4 gap - 4'>;
                    <div className='flex flex - col items - center'>;
                      <div className='w - 16 h - 16 rounded - full bg - gradient - to - br from - zion - purple to - zion - cyan flex items - center justify - center mb - 2'>;
                        <UserCheck size={24} className='text - white' />;
                      </div>;
                      <span className='text - xs text - center text - zion - slate - light'>;
                        Newcomer;
                      </span>;
                    </div>;
                    <div className='flex flex - col items - center'>;
                      <div className='w - 16 h - 16 rounded - full bg - gradient - to - br from - zion - purple to - zion - purple - light flex items - center justify - center mb - 2'>;
                        <MessageSquare size={24} className='text - white' />;
                      </div>;
                      <span className='text - xs text - center text - zion - slate - light'>;
                        First Post;
                      </span>;
                    </div>;
                    <div className='flex flex - col items - center opacity - 40'>;
                      <div className='w - 16 h - 16 rounded - full bg - zion - blue - light flex items - center justify - center mb - 2'>;
                        <Bell size={24} className='text - zion - slate - light' />;
                      </div>;
                      <span className='text - xs text - center text - zion - slate - light'>;
                        Locked;
                      </span>;
                    </div>;
                    <div className='flex flex - col items - center opacity - 40'>;
                      <div className='w - 16 h - 16 rounded - full bg - zion - blue - light flex items - center justify - center mb - 2'>;
                        <span className='text - zion - slate - light text - xl'>?</span>;
                      </div>;
                      <span className='text - xs text - center text - zion - slate - light'>;
                        Locked;
                      </span>;
                    </div>;
                  </div>;
                </div>;
                {/* Community Section */}
                <div id='community - section'>;
                  <h3 className='text - lg font - bold text - white mb - 4'>;
                    Community;
                  </h3>;
                  <CommunityDiscussion />;
                </div>;
                {/* User Overview */}
                <div className='mt - 8 space - y-8'>;
                  <div className='bg - zion - blue - dark rounded - xl p - 6'>;
                    <h3 className='text - lg font - bold text - white mb - 4 flex items - center'>;
                      <FileText className='mr - 2' size={18} /> Recent Orders;
                    </h3>;
                    {orders_loading ? (
                      <p className='text - zion - slate - light'>Loading...</p>) : orders.length === 0 ? (
                      <EmptyState;
                        icon={<ShoppingBag className='h - 8 w - 8' />}
                        title='No Orders'                        description="You haven't purchased anything yet.";
                        action={{
                          text: 'Visit Marketplace'
                          href: '/marketplace'
                        title='No Orders'                        description="You haven't purchased anything yet.";
                        action={{;
                          text: 'Visit Marketplace',;
                          href: '/marketplace',;
                        }}
                        className='text-zion-purple underline'>;
                        className='border - none bg - transparent text - center';
                      />) : (
                      <ul className='space - y-1'>;
                        {orders.slice (0, 3).map (object => (
                          <li key={o.order_id} className='flex justify - between'>;
                            <span>#{o.order_id}</span>;
                            <Link;
                              href={`/orders/${o.order_id}`}
                              className='text - zion - purple underline';
                            >;
                              View;
                            </Link>;
                          </li>))}
                      </ul>)}
                    <div className='mt - 2 text - right'>;
                      <Link;
                        href='/orders';
                        className='text - zion - purple underline';
                      >;
                        View all;
                      </Link>;
                    </div>;
                  </div>;
                  <div className='bg - zion - blue - dark rounded - xl p - 6'>;
                    <h3 className='text - lg font - bold text - white mb - 4 flex items - center'>;
                      <Heart className='mr - 2' size={18} /> Wishlist;
                    </h3>;
                    {favorites.length === 0 ? (
                      <p className='text - zion - slate - light'>No items saved.</p>) : (
                      <ul className='space - y-1'>;
                        {favorites.slice (0, 3).map (function => (
                          <li key={f.item_id}>{f.item_id}</li>))}
                      </ul>)}
                    <div className='mt - 2 text - right'>;
                      <Link;
                        href='/wishlist';
                        className='text - zion - purple underline';
                      >;
                        View all;
                      </Link>;
                    </div>;
                  </div>;
                  <div className='bg - zion - blue - dark rounded - xl p - 6'>;
                    <h3 className='text - lg font - bold text - white mb - 4 flex items - center'>;
                      <Key className='mr - 2' size={18} /> API Keys;
                    </h3>;
                    <ApiKeysManager />;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <GuidedTour role={roleForTour} />;
    </>);
}";
return (<> <Header /> <div className="min - h-screen bg - zion - blue"> <div className="container mx - auto px - 4 py - 8"> <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8"> {
  /* Left Sidebar - User Profile */ ";
}<div className="lg:col - span - 1"> <div className="bg - zion - blue - dark rounded - xl p - 6 mb - 6"> <div className="flex flex - col items - center text - center"> <div className="w - 24 h - 24 rounded - full bg - zion - purple flex items - center justify - center text - 2xl font - bold text - white mb - 4"> {';
  userWithExtendedProps?.display_name?.split (' ') .map ( (name: string) => name[0]) .join ('') || userWithExtendedProps?.email?.char_at (0) .toUpperCase () ";
}</div> <h2 className="text - xl font - bold text - white"> {
  userWithExtendedProps?.display_name || userWithExtendedProps?.email ";
}</h2> <p className="text - zion - slate - light mb - 2"> {
  user?.email ";
}</p> <Badge className="bg - zion - purple text - white mb - 4" > > <UserCheck size= {
  16;
}/> Edit Profile </Button> </div> </div> {
  /* Stats & Metrics */ ";
}<div className="bg - zion - blue - dark rounded - xl p - 6 mb - 6"> <h3 className="text - lg font - bold text - white mb - 4">Your Activity</h3> <div className="space - y-4"> <div className="flex justify - between items - center"> <span className="text - zion - slate - light">Profile Completion</span> <span className="text - zion - cyan font - medium">65%</span> </div> <div className="w - full bg - zion - blue rounded - full h - 2"> </div> <div className="flex justify - between items - center"> <span className="text - zion - slate - light">Points</span> <PointsBadge /> </div> <div className="flex justify - between items - center"> <span className="text - zion - slate - light">ZION$ Balance</span> <span className="text - zion - cyan font - medium"> <Link href="/wallet" className="hover:underline">View Wallet</Link> </span> </div> <div className="flex justify - between items - center"> <span className="text - zion - slate - light">Badges Earned</span> <span className="text - zion - cyan font - medium">3 / 12</span> </div> {
  /* Test notification buttons */ ";
}<div className="flex flex - col gap - 2 mt - 4"> <Button > <Send size= {
  16 ";
}className="text - zion - cyan" /> Send Test Notification </Button> <Button;
}> <Settings size= {
  16 ";
}className="text - zion - purple" /> async () => {
  try {
  const {
                        className='text-zion-purple underline'>;
                        View all;
                      </Link>;
                    </div>;
                  </div>;
                  <div className='bg-zion-blue-dark rounded-xl p-6'>;
                    <h3 className='text-lg font-bold text-white mb-4 flex items-center'>;
                      <Key className='mr-2' size={18} /> API Keys;
                    </h3>;
                    <ApiKeysManager />;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <GuidedTour role={roleForTour} />;
    </>;
  );
};";
return (<> <Header /> <div className="min-h-screen bg-zion-blue"> <div className="container mx-auto px-4 py-8"> <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> {;
  /* Left Sidebar - User Profile */ ";
}<div className="lg:col-span-1"> <div className="bg-zion-blue-dark rounded-xl p-6 mb-6"> <div className="flex flex-col items-center text-center"> <div className="w-24 h-24 rounded-full bg-zion-purple flex items-center justify-center text-2xl font-bold text-white mb-4"> {';
  userWithExtendedProps?.displayName?.split (' ') .map ( (name: string) => name[0]) .join ('') || userWithExtendedProps?.email?.charAt (0) .toUpperCase () ";
}</div> <h2 className="text-xl font-bold text-white"> {;
  userWithExtendedProps?.displayName || userWithExtendedProps?.email ";
}</h2> <p className="text-zion-slate-light mb-2"> {;
  user?.email ";
}</p> <Badge className="bg-zion-purple text-white mb-4" > > <UserChecksize= {
  16 
}/> Edit Profile </Button> </div> </div> {;
  /* Stats & Metrics */ ";
}<div className="bg-zion-blue-dark rounded-xl p-6 mb-6"> <h3 className="text-lg font-bold text-white mb-4">Your Activity</h3> <div className="space-y-4"> <div className="flex justify-between items-center"> <span className="text-zion-slate-light">Profile Completion</span> <span className="text-zion-cyan font-medium">65%</span> </div> <div className="w-full bg-zion-blue rounded-full h-2"> </div> <div className="flex justify-between items-center"> <span className="text-zion-slate-light">Points</span> <PointsBadge /> </div> <div className="flex justify-between items-center"> <span className="text-zion-slate-light">ZION$ Balance</span> <span className="text-zion-cyan font-medium"> <Link href="/wallet" className="hover:underline">View Wallet</Link> </span> </div> <div className="flex justify-between items-center"> <span className="text-zion-slate-light">Badges Earned</span> <span className="text-zion-cyan font-medium">3/12</span> </div> {;
  /* Test notification buttons */ ";
}<div className="flex flex-col gap-2 mt-4"> <Button > <Sendsize= {
  16 "
}className="text-zion-cyan" /> Send Test Notification </Button> <Button
}> <Settingssize= {
  16 "
}className="text-zion-purple" /> async () => {;
  try {;
  const {;
  createSystemNotification ;
}= await loadNotificationFunctions ();
await createSystemNotification ({'";
  userId: user?.id ?? "", title: "New Feature Available!", message: "We've added a new notification center to help you stay updated with important information.",  actionUrl: "/notifications", actionText: "Explore Now" ;
});
toast ({";
  title: "System notification sent", description: "Check your notification center" ;
});
}catch (error) {;
  toast ({";
  title: "Error sending notification",  description: "Please try again", variant: "destructive" ;
});
}> <Bellsize= {
  16 "
}className="text-yellow-500"/> Send System Alert </Button> </div> </div> </div> {;
  /* Notifications */ ";
}<div className="bg-zion-blue-dark rounded-xl p-6"> <h3 className="text-lg font-bold text-white mb-4 flex items-center"> <Bellsize= {
  18 "
}className="mr-2 text-zion-cyan"/> Recent Notifications </h3> <div className="space-y-4"> <Link href="/notifications"className="block"id=" notifications-link"> <Button variant=" outline"className="w-full"> <Bell className="mr-2 h-4 w-4"/> View All Notifications </Button> </Link> </div> </div> </div> {;
  /* Main Content - Dashboard */ ";
}<div className="lg:col-span-2"> <div className="bg-zion-blue-dark rounded-xl p-6 mb-6"> <div className="flex items-center justify-between mb-6"> <h2 className="text-2xl font-bold text-white"data-testid=" dashboard-header">Dashboard</h2> <div className="flex items-center gap-2"> <NotificationBell /> <Buttonvariant=" outline"className="text-zion-slate-light border-zion-blue-light hover:bg-zion-blue hover:text-white"onClick={
  logout 
}> <LogOutsize= {
  16 "
}className="mr-2"/> Logout </Button> </div> </div> <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6"> <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-purple/30 border border-zion-blue-light"> <h3 className="text-lg font-medium text-white">Welcome, {';
  userWithExtendedProps?.displayName?.split (' ') [0] || 'User' ";
}</h3> <p className="text-zion-slate-light mt-1">Your journey on Zion has just begun!</p> </div> <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light"> <h3 className="text-lg font-medium text-white">Getting Started</h3> <p className="text-zion-slate-light mt-1">Complete your profile to unlock all features.</p> </div> </div> {;
  /* Badges Preview */ ";
}<div className="mb-8"> <h3 className="text-lg font-bold text-white mb-4">Your Badges</h3> <div className="grid grid-cols-3 sm:grid-cols-4 gap-4"> <div className="flex flex-col items-center"> <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center mb-2"> <UserChecksize= {
  24 "
}className="text-white"/> </div> <span className="text-xs text-center text-zion-slate-light">Newcomer</span> </div> <div className="flex flex-col items-center"> <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-purple-light flex items-center justify-center mb-2"> <MessageSquaresize= {
  24 "
}className="text-white"/> </div> <span className="text-xs text-center text-zion-slate-light">First Post</span> </div> <div className="flex flex-col items-center opacity-40"> <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2"> <Bellsize= {
  24 "
}className="text-zion-slate-light"/> </div> <span className="text-xs text-center text-zion-slate-light">Locked</span> </div> <div className="flex flex-col items-center opacity-40"> <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2"> <span className="text-zion-slate-light text-xl">?</span> </div> <span className="text-xs text-center text-zion-slate-light">Locked</span> </div> </div> </div> <h3 className="text-lg font-bold text-white mb-4">Community</h3> <CommunityDiscussion /> </div> {;
  /* User Overview */ ";
}<div className="mt-8 space-y-8"> <div className="bg-zion-blue-dark rounded-xl p-6"> <h3 className="text-lg font-bold text-white mb-4 flex items-center"> <FileTextclassName="mr-2"size= {
  18 
}/> Recent Orders </h3> {";
  ordersLoading ? (<p className="text-zion-slate-light">Loading...</p>) : orders && orders.length === 0 ? (<EmptyState className="border-none bg-transparent text-center"/>) : (<ul className="space-y-1"> {;
  orders && orders.slice (0, 3) .map (o => (<likey= {
  o && o.orderId "
}className="flex justify-between"> <span># {;
  o && o.orderId ;
}</span> <Linkhref= {
  `/orders/$ {
  o && o.orderId 
}` "
}className="text-zion-purple underline">View</Link> </li>) ) ;
}</ul>) ";
}<div className="mt-2 text-right"> <Link href="/orders"className="text-zion-purple underline">View all</Link> </div> </div> <div className="bg-zion-blue-dark rounded-xl p-6"> <h3 className="text-lg font-bold text-white mb-4 flex items-center"> <HeartclassName="mr-2"size= {
  18 
}/> Wishlist </h3> {";
  favorites && favorites.length === 0 ? (<p className="text-zion-slate-light">No items saved.</p>) : (<ul className="space-y-1"> {;
  favorites && favorites.slice (0, 3) .map (f => (<likey= {
  f && f.item id 
}> {;
  f && f.item id ;
}</li>) ) ;
}</ul>) ";
}<div className="mt-2 text-right"> <Link href="/wishlist"className="text-zion-purple underline">View all</Link> </div> </div> <div className="bg-zion-blue-dark rounded-xl p-6"> <h3 className="text-lg font-bold text-white mb-4 flex items-center"> <KeyclassName="mr-2" size= {
  18 
}/> API Keys </h3> <ApiKeysManager /> </div> </div> </div> </div> </div> </div> </div> <GuidedTourrole= {
  roleForTour 
}/> </>) ;
}'";
}
DollarSign, Activity, DollarSign, Activity, Shield, Zap, Settings, Bell, Search, Calendar, FileText, MessageSquare, Star, ArrowRight } from 'lucide-react'; export default function Dashboard(): any (...args[]): { const stats = [icon: <TrendingUp className="h-6 w-6 text-orange-500" />; }; ]; const recentProjects = [{ id: 1, name: "AI Chatbot Development", status: "In Progress", progress: 75, dueDate: "2024-02-15", priority: "High" }, { id: 2, name: "Cybersecurity Audit", status: "Completed", progress: 100, dueDate: "2024-01-30", priority: "Medium" }, { id: 3, name: "Cloud Migration", status: "Planning", progress: 25, dueDate: "2024-03-01", priority: "High" }, { id: 4, name: "Mobile App Development", status: "In Progress", progress: 60, dueDate: "2024-02-28", priority: "Medium"; }; ]; const notifications = [{ id: 1, title: "New project assigned", message: "You have been assigned to the AI Chatbot project", time: "2 hours ago", read: false }, { id: 2, title: "Meeting reminder", message: "Team standup meeting in 30 minutes", time: "4 hours ago", read: false }, { id: 3, title: "System update", message: "Scheduled maintenance completed successfully", time: "1 day ago", read: true; }; ]; const quickActions = [{ title: "Create Project", description: "Start a new project", icon: <FileText className="h-8 w-8 text-zion-cyan" />, color: "bg-zion-cyan/10 border-zion-cyan/20" }, { title: "Schedule Meeting", description: "Book a team meeting", icon: <Calendar className="h-8 w-8 text-zion-purple" />, color: "bg-zion-purple/10 border-zion-purple/20" }, { title: "Generate Report", description: "Create analytics report", icon: <BarChart3 className="h-8 w-8 text-zion-cyan" />, color: "bg-zion-cyan/10 border-zion-cyan/20" }, { title: "Support Ticket", description: "Submit support request", icon: <MessageSquare className="h-8 w-8 text-zion-purple" />, color: "bg-zion-purple/10 border-zion-purple/20" } { name: 'Active Services', value: '12', icon: Zap, change: '+2', changeType: 'positive', color: 'from-blue-500 to-cyan-500' }, { name: 'AI Solutions', value: '8', icon: Brain, change: '+3', changeType: 'positive', color: 'from-purple-500 to-pink-500' }, { name: 'Cloud Services', value: '5', icon: Cloud, change: '+1', changeType: 'positive', color: 'from-indigo-500 to-blue-500' }, { name: 'Security Score', value: '98%', icon: Shield, change: '+2%', changeType: 'positive', color: 'from-green-500 to-emerald-500' }, { name: 'Monthly Usage', value: '2 && 2.4TB', icon: Database, change: '+15%', changeType: 'positive', color: 'from-orange-500 to-red-500' }, { name: 'Response Time', value: '45ms', icon: Activity, change: '-12ms', changeType: 'negative', color: 'from-teal-500 to-green-500' }; ]; const recentServices = [; { name: 'AI Business Intelligence', status: 'Active', lastUsed: '2 hours ago', usage: '85%', icon: Brain, color: 'from-blue-500 to-indigo-500' }, { name: 'Cloud DevOps Platform', status: 'Active', lastUsed: '1 day ago', usage: '92%', icon: Cloud, color: 'from-indigo-500 to-blue-500' }, { name: 'AI Cybersecurity Suite', status: 'Active', lastUsed: '3 days ago', usage: '78%', icon: Shield, color: 'from-red-500 to-orange-500' }, { name: 'Quantum Computing Lab', status: 'Active', lastUsed: '1 week ago', usage: '45%', icon: Atom, color: 'from-purple-500 to-indigo-500' }, { name: 'IoT Edge Platform', status: 'Active', lastUsed: '2 weeks ago', usage: '67%', icon: Network, color: 'from-cyan-500 to-blue-500' }; ]; const upcomingEvents = [; { title: 'AI Strategy Workshop', date: 'Dec 15, 2024', time: '10:00 AM', type: 'Workshop', icon: Brain }, { title: 'Security Audit Review', date: 'Dec 18, 2024', time: '2:00 PM', type: 'Review', icon: Shield }, { title: 'Cloud Migration Planning', date: 'Dec 22, 2024', time: '11:00 AM', type: 'Planning', icon: Cloud }, { title: 'Quantum Computing Demo', date: 'Dec 25, 2024', time: '3:00 PM', type: 'Demo', icon: Atom }; ]; const quickActions = [; { name: 'Add New Service', icon: Plus, href: '/services', color: 'from-green-500 to-emerald-500' }, { name: 'View Analytics', icon: BarChart3, href: '/analytics', color: 'from-blue-500 to-indigo-500' }, { name: 'Security Settings', icon: Shield, href: '/security', color: 'from-red-500 to-orange-500' }, { name: 'Support Request', icon: HelpCircle, href: '/help', color: 'from-purple-500 to-pink-500' }, { name: 'Billing & Plans', icon: DollarSign, href: '/pricing', color: 'from-yellow-500 to-orange-500' }, { name: 'API Documentation', icon: Code, href: '/api-docs', color: 'from-gray-500 to-slate-500' }; ]; const getStatusColor: React.FC = ($2) => { switch(status) {; case "Completed":; return "bg-green-100 text-green-800"; case "In Progress":; return "bg-blue-100 text-blue-800"; case "Planning":; return "bg-yellow-100 text-yellow-800"; default:; return "bg-gray-100 text-gray-800"} }; const getPriorityColor: React.FC = ($2) => { switch(priority) {; case "High":; return "bg-red-100 text-red-800"; case "Medium":; return "bg-yellow-100 text-yellow-800"; case "Low":; return "bg-green-100 text-green-800"; default:; return "bg-gray-100 text-gray-800"} }; return (<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"> {} <div className="bg-zion-blue-dark border-b border-zion-purple/20 px-6 py-4"> <div className="flex items-center justify-between"> <div> <h1 className="text-2xl font-bold text-white">Dashboard</h1> <p className="text-zion-slate-light">Welcome back! Here's what's happening today.</p> </div> <div className="flex items-center gap-4"> <button className="relative p-2 text-zion-slate-light hover:text-white transition-colors"> <Bell className="h-6 w-6" /> <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span> </button> <button className="p-2 text-zion-slate-light hover:text-white transition-colors"> <Settings className="h-6 w-6" /> </button> import { BarChart3, Users, TrendingUp, Shield, Cloud, Brain, Zap, Star, Activity, DollarSign, Clock, CheckCircle, AlertCircle, Settings, Bell, Search, Filter, Download, Eye, Edit, Trash2, Plus, ArrowRight, Calendar, Target, Award, Rocket, Globe, Server, Database, Network, Lock, Heart, ShoppingCart, MessageCircle, HelpCircle, FileText, Video, TestTube, Leaf, Atom, Satellite, Cpu, Building, Truck, Mail, Phone, MapPin  } from 'lucide-react'; export default function Dashboard() { const stats = [{ name: 'Active Services', value: '12', icon: Zap, change: '+2', changeType: 'positive', color: 'from-blue-500 to-cyan-500' }, { name: 'AI Solutions', value: '8', icon: Brain, change: '+3', changeType: 'positive', color: 'from-purple-500 to-pink-500' }, { name: 'Cloud Services', value: '5', icon: Cloud, change: '+1', changeType: 'positive', color: 'from-indigo-500 to-blue-500' }, { name: 'Security Score', value: '98%', icon: Shield, change: '+2%', changeType: 'positive', color: 'from-green-500 to-emerald-500' }, { name: 'Monthly Usage', value: '2 && 2.4TB', icon: Database, change: '+15%', changeType: 'positive', color: 'from-orange-500 to-red-500' }, { name: 'Response Time', value: '45ms', icon: Activity, change: '-12ms', changeType: 'negative', color: 'from-teal-500 to-green-500' } ]; const recentServices = [{ name: 'AI Business Intelligence', status: 'Active', lastUsed: '2 hours ago', usage: '85%', icon: Brain, color: 'from-blue-500 to-indigo-500' }, { name: 'Cloud DevOps Platform', status: 'Active', lastUsed: '1 day ago', usage: '92%', icon: Cloud, color: 'from-indigo-500 to-blue-500' }, { name: 'AI Cybersecurity Suite', status: 'Active', lastUsed: '3 days ago', usage: '78%', icon: Shield, color: 'from-red-500 to-orange-500' }, { name: 'Quantum Computing Lab', status: 'Active', lastUsed: '1 week ago', usage: '45%', icon: Atom, color: 'from-purple-500 to-indigo-500' }, { name: 'IoT Edge Platform', status: 'Active', lastUsed: '2 weeks ago', usage: '67%', icon: Network, color: 'from-cyan-500 to-blue-500' } ]; const upcomingEvents = [{ title: 'AI Strategy Workshop', date: 'Dec 15, 2024', time: '10:00 AM', type: 'Workshop', icon: Brain }, { title: 'Security Audit Review', date: 'Dec 18, 2024', time: '2:00 PM', type: 'Review', icon: Shield }, { title: 'Cloud Migration Planning', date: 'Dec 22, 2024', time: '11:00 AM', type: 'Planning', icon: Cloud }, { title: 'Quantum Computing Demo', date: 'Dec 25, 2024', time: '3:00 PM', type: 'Demo', icon: Atom } ]; const quickActions = [{ name: 'Add New Service', icon: Plus, href: '/services', color: 'from-green-500 to-emerald-500' }, { name: 'View Analytics', icon: BarChart3, href: '/analytics', color: 'from-blue-500 to-indigo-500' }, { name: 'Security Settings', icon: Shield, href: '/security', color: 'from-red-500 to-orange-500' }, { name: 'Support Request', icon: HelpCircle, href: '/help', color: 'from-purple-500 to-pink-500' }, { name: 'Billing & Plans', icon: DollarSign, href: '/pricing', color: 'from-yellow-500 to-orange-500' }, { name: 'API Documentation', icon: Code, href: '/api-docs', color: 'from-gray-500 to-slate-500' } ]; return (<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"> {} <div className="bg-white border-b border-gray-200"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> <div className="flex items-center justify-between"> <div> <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1> <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your services.</p> </div> <div className="flex items-center space-x-4"> <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors"> <Bell className="h-6 w-6" /> </button> <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors"> <Settings className="h-6 w-6" /> </button> <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold"> ZT </div> </div> </div> </div> </div> initial = { { opacity: 0, y: 20 }} animate = { { opacity: 1, y: 0 }} transition = { { duration: 0 && 0.5, delay: index * 0 && 0.1 }} key={stat && stat.name} initial = { { opacity: 0, y: 20 }} animate = { { opacity: 1, y: 0 }} transition={{ delay: index * 0 && 0.1   }} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"> <div className="flex items-center justify-between mb-4"> <div className="p-2 bg-zion-purple/20 rounded-lg"> {stat && stat.icon} </div> <span className={`text-sm font-medium ${stat && stat.changeType === "positive" ? "text-green-400" : "text-red-400" }`}> {stat && stat.change} </span> </div> <h3 className="text-2xl font-bold text-white mb-1">{stat && stat.value}</h3> <p className="text-zion-slate-light text-sm">{stat && stat.title}</p> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> {} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> {stats && stats.map((stat, index) => ( <motion && motion.div key={stat && stat.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0 && 0.1   }} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"> <div className="flex items-center justify-between"> <div> <p className="text-sm font-medium text-gray-600">{stat && stat.name}</p> <p className="text-2xl font-bold text-gray-900 mt-1">{stat && stat.value}</p> <div className={`flex items-center mt-2 text-sm ${stat && stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600' }`}> <span>{stat && stat.change}</span> <span className="ml-1">from last month</span> </div> </div> <div className={`p-3 rounded-lg bg-gradient-to-r ${stat && stat.color}`}> <stat && stat.icon className="h-6 w-6 text-white" /> </div> </div> </motion && motion.div> ))} </div> initial = { { opacity: 0, x: -20 }} animate = { { opacity: 1, x: 0 }} transition = { { duration: 0 && 0.5, delay: 0 && 0.4 }} > <div className="flex items-center justify-between mb-6"> <h2 className="text-xl font-semibold text-white">Recent Projects</h2> <button className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium"> View All </button> </div> <div className="space-y-4"> {recentServices && recentServices.map((service, index) => ( <motion && motion.div key={service && service.name} initial = { { opacity: 0, x: -20 }} animate = { { opacity: 1, x: 0 }} <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> {} <div className="lg:col-span-2"> <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"> <div className="flex items-center justify-between mb-6"> <h2 className="text-xl font-semibold text-gray-900">Recent Services</h2> <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"> View All <ArrowRight className="h-4 w-4 ml-1" /> </button> </div> <div className="space-y-4"> {recentServices && recentServices.map((service, index) => ( <motion && motion.div key={service && service.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0 && 0.1   }} className="flex items-center p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"> <div className={`p-2 rounded-lg bg-gradient-to-r ${service && service.color} mr-4`}> <service && service.icon className="h-5 w-5 text-white" /> </div> initial = { { opacity: 0, x: 20 }} animate = { { opacity: 1, x: 0 }} transition = { { duration: 0 && 0.5, delay: 0 && 0.6 }} > <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2> <div className="grid grid-cols-2 gap-3"> {quickActions && quickActions.map((action, index) => ( <motion && motion.button key={action && action.name} initial = { { opacity: 0, scale: 0 && 0.9 }} animate = { { opacity: 1, scale: 1 }} transition={{ delay: index * 0 && 0.1   }} className={`p-3 rounded-lg bg-gradient-to-r ${action && action.color} text-white text-sm font-medium hover:shadow-lg transition-shadow flex flex-col items-center`} > <div className="mb-2">{action && action.icon}</div> <h3 className="font-medium text-white text-sm mb-1">{action && action.title}</h3> <p className="text-zion-slate-light text-xs">{action && action.description}</p> </button> ))} </div> </motion && motion.div> {} <motion&& motion.div className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-6" initial = { { opacity: 0, x: 20 }} animate = { { opacity: 1, x: 0 }} transition = { { duration: 0 && 0.5, delay: 0 && 0.8 }}> <h2 className="text-xl font-semibold text-white mb-4">Notifications</h2> <div className="space-y-3"> <div className="flex-1"> <h3 className="font-medium text-gray-900">{service && service.name}</h3> <div className="flex items-center mt-1 space-x-4 text-sm text-gray-500"> <span className="flex items-center"> <CheckCircle className="h-4 w-4 text-green-500 mr-1" /> {service && service.status} </span> <span>{service && service.lastUsed}</span> </div> </div> <div className="text-right"> <div className="text-sm font-medium text-gray-900">{service && service.usage}</div> <div className="w-20 bg-gray-200 rounded-full h-2 mt-1"> <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: service && service.usage   }} ></div> </div> </div> </motion && motion.div> ))} </div> </div> </div> {} <div className="space-y-6"> {} <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"> <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3> <div className="grid grid-cols-2 gap-3"> {quickActions && quickActions.map((action, index) => ( <motion && motion.button key={action && action.name} initial={{ opacity: 0, scale: 0 && 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0 && 0.1   }} className={`p-3 rounded-lg bg-gradient-to-r ${action && action.color} text-white text-sm font-medium hover:shadow-lg transition-shadow flex flex-col items-center`} > <action && action.icon className="h-5 w-5 mb-1" /> {action && action.name} </motion && motion.button> ))} </div> </div> {} <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"> <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3> <div className="space-y-3"> {upcomingEvents && upcomingEvents.map((event, index) => ( <motion && motion.div key={event && event.title} initial = { { opacity: 0, y: 10 }} animate = { { opacity: 1, y: 0 }} transition={{ delay: index * 0 && 0.1   }} className="flex items-start p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"> <div className="p-2 rounded-lg bg-blue-100 mr-3"> <event && event.icon className="h-4 w-4 text-blue-600" /> </div> <div className="flex-1"> <h4 className="text-sm font-medium text-gray-900">{event && event.title}</h4> <div className="flex items-center mt-1 text-xs text-gray-500 space-x-2"> <span className="flex items-center"> <Calendar className="h-3 w-3 mr-1" /> {event && event.date} </span> <span>{event && event.time}</span> <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"> {event && event.type} </span> </div> </div> </motion && motion.div> ))} </div> initial = { { opacity: 0, x: 20 }} animate = { { opacity: 1, x: 0 }} transition = { { duration: 0 && 0.5, delay: 1 }} > <h2 className="text-xl font-semibold text-white mb-4">System Status</h2> <div className="space-y-3"> <div className="flex items-center justify-between"> <span className="text-zion-slate-light">API Status</span> <div className="flex items-center gap-2"> <div className="w-2 h-2 bg-green-500 rounded-full"></div> <span className="text-green-400 text-sm">Operational</span> </div> </div> <div className="flex items-center justify-between"> <span className="text-zion-slate-light">Database</span> <div className="flex items-center gap-2"> <div className="w-2 h-2 bg-green-500 rounded-full"></div> <span className="text-green-400 text-sm">Healthy</span> </div> </div> <div className="flex items-center justify-between"> <span className="text-zion-slate-light">Uptime</span> <span className="text-white text-sm">99 && 99.9%</span> </div> </div> </div> </div> </div> {} <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">; <div className="flex items-center justify-between mb-6"> <h2 className="text-xl font-semibold text-gray-900">Service Performance</h2> <div className="flex items-center space-x-4"> <div className="flex items-center space-x-2"> <div className="w-3 h-3 bg-blue-500 rounded-full"></div> <span className="text-sm text-gray-600">AI Services</span> </div> <div className="flex items-center space-x-2"> <div className="w-3 h-3 bg-green-500 rounded-full"></div> <span className="text-sm text-gray-600">Cloud Services</span> </div> <div className="flex items-center space-x-2"> <div className="w-3 h-3 bg-purple-500 rounded-full"></div> <span className="text-sm text-gray-600">Security Services</span> </div> </div> </div> {} <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">; <div className="text-center"> <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" /> <p className="text-gray-500">Performance chart will be displayed here</p> <p className="text-sm text-gray-400">Integration with analytics service required</p> </div> </div>; </div> </div> </div> )} <div className="flex items-center space-x-2"> <div className="w-3 h-3 bg-green-500 rounded-full"></div> <span className="text-sm text-gray-600">Cloud Services</span> </div> <div className="flex items-center space-x-2"> <div className="w-3 h-3 bg-purple-500 rounded-full"></div> <span className="text-sm text-gray-600">Security Services</span> </div> </div> </div> {} <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center"> <div className="text-center"> <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" /> <p className="text-gray-500">Performance chart will be displayed here</p>; <p className="text-sm text-gray-400">Integration with analytics service required</p>; </div>; </div>; </div>; </div>; </div>; ); } }
));
}
  createSystemNotification;
}= await loadNotificationFunctions ();
await createSystemNotification ({'";
  user_id: user?.id ?? "", title: "New Feature Available!", message: "We've added a new notification center to help you stay updated with important information.",  action_url: "/notifications", action_text: "Explore Now";
});
toast ({";
  title: "System notification sent", description: "Check your notification center";
});
}catch (error) {
  toast ({";
  title: "Error sending notification",  description: "Please try again", variant: "destructive";
});
}> <Bell size= {
  16 ";
}className="text - yellow - 500"/> Send System Alert </Button> </div> </div> </div> {
  /* Notifications */ ";
}<div className="bg - zion - blue - dark rounded - xl p - 6"> <h3 className="text - lg font - bold text - white mb - 4 flex items - center"> <Bell size= {
  18 ";
}className="mr - 2 text - zion - cyan"/> Recent Notifications </h3> <div className="space - y-4"> <Link href="/notifications"className="block"id=" notifications - link"> <Button variant=" outline"className="w - full"> <Bell className="mr - 2 h - 4 w - 4"/> View All Notifications </Button> </Link> </div> </div> </div> {
  /* Main Content - Dashboard */ ";
}<div className="lg:col - span - 2"> <div className="bg - zion - blue - dark rounded - xl p - 6 mb - 6"> <div className="flex items - center justify - between mb - 6"> <h2 className="text - 2xl font - bold text - white"data - testid=" dashboard - header">Dashboard</h2> <div className="flex items - center gap - 2"> <NotificationBell /> <Button variant=" outline"className="text - zion - slate - light border - zion - blue - light hover:bg - zion - blue hover:text - white"on_click={
  logout;
}> <LogOut size= {
  16 ";
}className="mr - 2"/> Logout </Button> </div> </div> <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 2 gap - 4 mb - 6"> <div className="p - 4 rounded - lg bg - gradient - to - br from - zion - blue to - zion - purple / 30 border border - zion - blue - light"> <h3 className="text - lg font - medium text - white">Welcome, {';
  userWithExtendedProps?.display_name?.split (' ') [0] || 'User' ";
}</h3> <p className="text - zion - slate - light mt - 1">Your journey on Zion has just begun!</p> </div> <div className="p - 4 rounded - lg bg - gradient - to - br from - zion - blue to - zion - cyan / 30 border border - zion - blue - light"> <h3 className="text - lg font - medium text - white">Getting Started</h3> <p className="text - zion - slate - light mt - 1">Complete your profile to unlock all features.</p> </div> </div> {
  /* Badges Preview */ ";
}<div className="mb - 8"> <h3 className="text - lg font - bold text - white mb - 4">Your Badges</h3> <div className="grid grid - cols - 3 sm:grid - cols - 4 gap - 4"> <div className="flex flex - col items - center"> <div className="w - 16 h - 16 rounded - full bg - gradient - to - br from - zion - purple to - zion - cyan flex items - center justify - center mb - 2"> <UserCheck size= {
  24 ";
}className="text - white"/> </div> <span className="text - xs text - center text - zion - slate - light">Newcomer</span> </div> <div className="flex flex - col items - center"> <div className="w - 16 h - 16 rounded - full bg - gradient - to - br from - zion - purple to - zion - purple - light flex items - center justify - center mb - 2"> <MessageSquare size= {
  24 ";
}className="text - white"/> </div> <span className="text - xs text - center text - zion - slate - light">First Post</span> </div> <div className="flex flex - col items - center opacity - 40"> <div className="w - 16 h - 16 rounded - full bg - zion - blue - light flex items - center justify - center mb - 2"> <Bell size= {
  24 ";
}className="text - zion - slate - light"/> </div> <span className="text - xs text - center text - zion - slate - light">Locked</span> </div> <div className="flex flex - col items - center opacity - 40"> <div className="w - 16 h - 16 rounded - full bg - zion - blue - light flex items - center justify - center mb - 2"> <span className="text - zion - slate - light text - xl">?</span> </div> <span className="text - xs text - center text - zion - slate - light">Locked</span> </div> </div> </div> <h3 className="text - lg font - bold text - white mb - 4">Community</h3> <CommunityDiscussion /> </div> {
  /* User Overview */ ";
}<div className="mt - 8 space - y-8"> <div className="bg - zion - blue - dark rounded - xl p - 6"> <h3 className="text - lg font - bold text - white mb - 4 flex items - center"> <FileText className="mr - 2"size= {
  18;
}/> Recent Orders </h3> {";
  orders_loading ? (<p className="text - zion - slate - light">Loading...</p>) : orders.length === 0 ? (<EmptyState className="border - none bg - transparent text - center"/>) : (<ul className="space - y-1"> {
  orders.slice (0, 3) .map (object => (<li key= {
  o.order_id ";
}className="flex justify - between"> <span># {
  o.order_id;
}</span> <Link href= {
  `/orders/$ {
  o.order_id;
}` ";
}className="text - zion - purple underline">View</Link> </li>) );
}</ul>) ";
}<div className="mt - 2 text - right"> <Link href="/orders"className="text - zion - purple underline">View all</Link> </div> </div> <div className="bg - zion - blue - dark rounded - xl p - 6"> <h3 className="text - lg font - bold text - white mb - 4 flex items - center"> <Heart className="mr - 2"size= {
  18;
}/> Wishlist </h3> {";
  favorites.length === 0 ? (<p className="text - zion - slate - light">No items saved.</p>) : (<ul className="space - y-1"> {
  favorites.slice (0, 3) .map (function => (<li key= {
  f.item id;
}> {
  f.item id;
}</li>) );
}</ul>) ";
}<div className="mt - 2 text - right"> <Link href="/wishlist"className="text - zion - purple underline">View all</Link> </div> </div> <div className="bg - zion - blue - dark rounded - xl p - 6"> <h3 className="text - lg font - bold text - white mb - 4 flex items - center"> <Key className="mr - 2" size= {
  18;
}/> API Keys </h3> <ApiKeysManager /> </div> </div> </div> </div> </div> </div> </div> <GuidedTour role= {
  roleForTour;
}/> </>);
}'";
}
DollarSign, Activity, DollarSign, Activity, Shield, Zap, Settings, Bell, Search, Calendar, FileText, MessageSquare, Star, ArrowRight } from 'lucide-react'; export default function Dashboard (...args[]): { const stats = [icon: <TrendingUp className="h - 6 w - 6 text - orange - 500" /> } ]; const recent_projects = [{ id: 1, name: "AI Chatbot Development", status: "In Progress", progress: 75, due_date: "2024 - 02 - 15", priority: "High" }, { id: 2, name: "Cybersecurity Audit", status: "Completed", progress: 100, due_date: "2024 - 01 - 30", priority: "Medium" }, { id: 3, name: "Cloud Migration", status: "Planning", progress: 25, due_date: "2024 - 03 - 01", priority: "High" }, { id: 4, name: "Mobile App Development", status: "In Progress", progress: 60, due_date: "2024 - 02 - 28", priority: "Medium" } ]; const notifications = [{ id: 1, title: "New project assigned", message: "You have been assigned to the AI Chatbot project", time: "2 hours ago", read: false }, { id: 2, title: "Meeting reminder", message: "Team standup meeting in 30 minutes", time: "4 hours ago", read: false }, { id: 3, title: "System update", message: "Scheduled maintenance completed successfully", time: "1 day ago", read: true } ]; const quick_actions = [{ title: "Create Project", description: "Start a new project", icon: <FileText className="h - 8 w - 8 text - zion - cyan" />, color: "bg - zion - cyan / 10 border - zion - cyan / 20" }, { title: "Schedule Meeting", description: "Book a team meeting", icon: <Calendar className="h - 8 w - 8 text - zion - purple" />, color: "bg - zion - purple / 10 border - zion - purple / 20" }, { title: "Generate Report", description: "Create analytics report", icon: <BarChart3 className="h - 8 w - 8 text - zion - cyan" />, color: "bg - zion - cyan / 10 border - zion - cyan / 20" }, { title: "Support Ticket", description: "Submit support request", icon: <MessageSquare className="h - 8 w - 8 text - zion - purple" />, color: "bg - zion - purple / 10 border - zion - purple / 20" } { name: 'Active Services', value: '12', icon: Zap, change: '+2', change_type: 'positive', color: 'from - blue - 500 to - cyan - 500' }, { name: 'AI Solutions', value: '8', icon: Brain, change: '+3', change_type: 'positive', color: 'from - purple - 500 to - pink - 500' }, { name: 'Cloud Services', value: '5', icon: Cloud, change: '+1', change_type: 'positive', color: 'from - indigo - 500 to - blue - 500' }, { name: 'Security Score', value: '98%', icon: Shield, change: '+2%', change_type: 'positive', color: 'from - green - 500 to - emerald - 500' }, { name: 'Monthly Usage', value: '2.4TB', icon: Database, change: '+15%', change_type: 'positive', color: 'from - orange - 500 to - red - 500' }, { name: 'Response Time', value: '45ms', icon: Activity, change: '-12ms', change_type: 'negative', color: 'from - teal - 500 to - green - 500' } ]; const recent_services = [ { name: 'AI Business Intelligence', status: 'Active', last_used: '2 hours ago', usage: '85%', icon: Brain, color: 'from - blue - 500 to - indigo - 500' }, { name: 'Cloud DevOps Platform', status: 'Active', last_used: '1 day ago', usage: '92%', icon: Cloud, color: 'from - indigo - 500 to - blue - 500' }, { name: 'AI Cybersecurity Suite', status: 'Active', last_used: '3 days ago', usage: '78%', icon: Shield, color: 'from - red - 500 to - orange - 500' }, { name: 'Quantum Computing Lab', status: 'Active', last_used: '1 week ago', usage: '45%', icon: Atom, color: 'from - purple - 500 to - indigo - 500' }, { name: 'IoT Edge Platform', status: 'Active', last_used: '2 weeks ago', usage: '67%', icon: Network, color: 'from - cyan - 500 to - blue - 500' } ]; const upcoming_events = [ { title: 'AI Strategy Workshop', date: 'Dec 15, 2024', time: '10:00 AM', type: 'Workshop', icon: Brain }, { title: 'Security Audit Review', date: 'Dec 18, 2024', time: '2:00 PM', type: 'Review', icon: Shield }, { title: 'Cloud Migration Planning', date: 'Dec 22, 2024', time: '11:00 AM', type: 'Planning', icon: Cloud }, { title: 'Quantum Computing Demo', date: 'Dec 25, 2024', time: '3:00 PM', type: 'Demo', icon: Atom } ]; const quick_actions = [ { name: 'Add New Service', icon: Plus, href: '/services', color: 'from - green - 500 to - emerald - 500' }, { name: 'View Analytics', icon: BarChart3, href: '/analytics', color: 'from - blue - 500 to - indigo - 500' }, { name: 'Security Settings', icon: Shield, href: '/security', color: 'from - red - 500 to - orange - 500' }, { name: 'Support Request', icon: HelpCircle, href: '/help', color: 'from - purple - 500 to - pink - 500' }, { name: 'Billing & Plans', icon: DollarSign, href: '/pricing', color: 'from - yellow - 500 to - orange - 500' }, { name: 'API Documentation', icon: Code, href: '/api - docs', color: 'from - gray - 500 to - slate - 500' } ]; const getStatusColor: React.FC = ($2) => { switch (status) {case "Completed":; return "bg - green - 100 text - green - 800"; case "In Progress":; return "bg - blue - 100 text - blue - 800"; case "Planning":; return "bg - yellow - 100 text - yellow - 800"; default:; return "bg - gray - 100 text - gray - 800"} } const getPriorityColor: React.FC = ($2) => { switch (priority) {case "High":; return "bg - red - 100 text - red - 800"; case "Medium":; return "bg - yellow - 100 text - yellow - 800"; case "Low":; return "bg - green - 100 text - green - 800"; default:; return "bg - gray - 100 text - gray - 800"} } return (<div className="min - h-screen bg - gradient - to - br from - slate - 50 via - blue - 50 to - indigo - 50"> {} <div className="bg - zion - blue - dark border - b border - zion - purple / 20 px - 6 py - 4"> <div className="flex items - center justify - between"> <div> <h1 className="text - 2xl font - bold text - white">Dashboard</h1> <p className="text - zion - slate - light">Welcome back! Here's what's happening today.</p> </div> <div className="flex items - center gap - 4"> <button className="relative p - 2 text - zion - slate - light hover:text - white transition - colors"> <Bell className="h - 6 w - 6" /> <span className="absolute top - 0 right - 0 w - 2 h - 2 bg - red - 500 rounded - full"></span> </button> <button className="p - 2 text - zion - slate - light hover:text - white transition - colors"> <Settings className="h - 6 w - 6" /> </button> import { BarChart3, Users, TrendingUp, Shield, Cloud, Brain, Zap, Star, Activity, DollarSign, Clock, CheckCircle, AlertCircle, Settings, Bell, Search, Filter, Download, Eye, Edit, Trash2, Plus, ArrowRight, Calendar, Target, Award, Rocket, Globe, Server, Database, Network, Lock, Heart, ShoppingCart, MessageCircle, HelpCircle, FileText, Video, TestTube, Leaf, Atom, Satellite, Cpu, Building, Truck, Mail, Phone, MapPin  } from 'lucide-react'; export default /**
 * Dashboard - Function description
 */
function Dashboard() { const stats = [{ name: 'Active Services', value: '12', icon: Zap, change: '+2', change_type: 'positive', color: 'from - blue - 500 to - cyan - 500' }, { name: 'AI Solutions', value: '8', icon: Brain, change: '+3', change_type: 'positive', color: 'from - purple - 500 to - pink - 500' }, { name: 'Cloud Services', value: '5', icon: Cloud, change: '+1', change_type: 'positive', color: 'from - indigo - 500 to - blue - 500' }, { name: 'Security Score', value: '98%', icon: Shield, change: '+2%', change_type: 'positive', color: 'from - green - 500 to - emerald - 500' }, { name: 'Monthly Usage', value: '2.4TB', icon: Database, change: '+15%', change_type: 'positive', color: 'from - orange - 500 to - red - 500' }, { name: 'Response Time', value: '45ms', icon: Activity, change: '-12ms', change_type: 'negative', color: 'from - teal - 500 to - green - 500' } ]; const recent_services = [{ name: 'AI Business Intelligence', status: 'Active', last_used: '2 hours ago', usage: '85%', icon: Brain, color: 'from - blue - 500 to - indigo - 500' }, { name: 'Cloud DevOps Platform', status: 'Active', last_used: '1 day ago', usage: '92%', icon: Cloud, color: 'from - indigo - 500 to - blue - 500' }, { name: 'AI Cybersecurity Suite', status: 'Active', last_used: '3 days ago', usage: '78%', icon: Shield, color: 'from - red - 500 to - orange - 500' }, { name: 'Quantum Computing Lab', status: 'Active', last_used: '1 week ago', usage: '45%', icon: Atom, color: 'from - purple - 500 to - indigo - 500' }, { name: 'IoT Edge Platform', status: 'Active', last_used: '2 weeks ago', usage: '67%', icon: Network, color: 'from - cyan - 500 to - blue - 500' } ]; const upcoming_events = [{ title: 'AI Strategy Workshop', date: 'Dec 15, 2024', time: '10:00 AM', type: 'Workshop', icon: Brain }, { title: 'Security Audit Review', date: 'Dec 18, 2024', time: '2:00 PM', type: 'Review', icon: Shield }, { title: 'Cloud Migration Planning', date: 'Dec 22, 2024', time: '11:00 AM', type: 'Planning', icon: Cloud }, { title: 'Quantum Computing Demo', date: 'Dec 25, 2024', time: '3:00 PM', type: 'Demo', icon: Atom } ]; const quick_actions = [{ name: 'Add New Service', icon: Plus, href: '/services', color: 'from - green - 500 to - emerald - 500' }, { name: 'View Analytics', icon: BarChart3, href: '/analytics', color: 'from - blue - 500 to - indigo - 500' }, { name: 'Security Settings', icon: Shield, href: '/security', color: 'from - red - 500 to - orange - 500' }, { name: 'Support Request', icon: HelpCircle, href: '/help', color: 'from - purple - 500 to - pink - 500' }, { name: 'Billing & Plans', icon: DollarSign, href: '/pricing', color: 'from - yellow - 500 to - orange - 500' }, { name: 'API Documentation', icon: Code, href: '/api - docs', color: 'from - gray - 500 to - slate - 500' } ]; return (<div className="min - h-screen bg - gradient - to - br from - slate - 50 via - blue - 50 to - indigo - 50"> {} <div className="bg - white border - b border - gray - 200"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 6"> <div className="flex items - center justify - between"> <div> <h1 className="text - 3xl font - bold text - gray - 900">Dashboard</h1> <p className="text - gray - 600 mt - 1">Welcome back! Here's what's happening with your services.</p> </div> <div className="flex items - center space - x-4"> <button className="p - 2 text - gray - 400 hover:text - gray - 600 transition - colors"> <Bell className="h - 6 w - 6" /> </button> <button className="p - 2 text - gray - 400 hover:text - gray - 600 transition - colors"> <Settings className="h - 6 w - 6" /> </button> <div className="w - 10 h - 10 bg - gradient - to - r from - blue - 500 to - purple - 500 rounded - full flex items - center justify - center text - white font - semibold"> ZT </div> </div> </div> </div> </div> initial = { { opacity: 0, coordinate_y: 20 }} animate = { { opacity: 1, coordinate_y: 0 }} transition = { { duration: 0.5, delay: index * 0.1 }} key={stat.name} initial = { { opacity: 0, coordinate_y: 20 }} animate = { { opacity: 1, coordinate_y: 0 }} transition={{ delay: index * 0.1   }} className="bg - white rounded - xl shadow - sm border border - gray - 200 p - 6 hover:shadow - md transition - shadow"> <div className="flex items - center justify - between mb - 4"> <div className="p - 2 bg - zion - purple / 20 rounded - lg"> {stat.icon} </div> <span className={`text - sm font - medium ${stat.change_type === "positive" ? "text - green - 400" : "text - red - 400" }`}> {stat.change} </span> </div> <h3 className="text - 2xl font - bold text - white mb - 1">{stat.value}</h3> <p className="text - zion - slate - light text - sm">{stat.title}</p> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 8"> {} <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6 mb - 8"> {stats.map ((stat, index) => ( <motion.div key={stat.name} initial={{ opacity: 0, coordinate_y: 20 }} animate={{ opacity: 1, coordinate_y: 0 }} transition={{ delay: index * 0.1   }} className="bg - white rounded - xl shadow - sm border border - gray - 200 p - 6 hover:shadow - md transition - shadow"> <div className="flex items - center justify - between"> <div> <p className="text - sm font - medium text - gray - 600">{stat.name}</p> <p className="text - 2xl font - bold text - gray - 900 mt - 1">{stat.value}</p> <div className={`flex items - center mt - 2 text - sm ${stat.change_type === 'positive' ? 'text - green - 600' : 'text - red - 600' }`}> <span>{stat.change}</span> <span className="ml - 1">from last month</span> </div> </div> <div className={`p - 3 rounded - lg bg - gradient - to - r ${stat.color}`}> <stat.icon className="h - 6 w - 6 text - white" /> </div> </div> </motion.div> ))} </div> initial = { { opacity: 0, coordinate_x: -20 }} animate = { { opacity: 1, coordinate_x: 0 }} transition = { { duration: 0.5, delay: 0.4 }} > <div className="flex items - center justify - between mb - 6"> <h2 className="text - xl font - semibold text - white">Recent Projects</h2> <button className="text - zion - cyan hover:text - zion - cyan - light text - sm font - medium"> View All </button> </div> <div className="space - y-4"> {recent_services.map ((service, index) => ( <motion.div key={service.name} initial = { { opacity: 0, coordinate_x: -20 }} animate = { { opacity: 1, coordinate_x: 0 }} <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8"> {} <div className="lg:col - span - 2"> <div className="bg - white rounded - xl shadow - sm border border - gray - 200 p - 6"> <div className="flex items - center justify - between mb - 6"> <h2 className="text - xl font - semibold text - gray - 900">Recent Services</h2> <button className="text - blue - 600 hover:text - blue - 700 text - sm font - medium flex items - center"> View All <ArrowRight className="h - 4 w - 4 ml - 1" /> </button> </div> <div className="space - y-4"> {recent_services.map ((service, index) => ( <motion.div key={service.name} initial={{ opacity: 0, coordinate_x: -20 }} animate={{ opacity: 1, coordinate_x: 0 }} transition={{ delay: index * 0.1   }} className="flex items - center p - 4 rounded - lg border border - gray - 100 hover:border - gray - 200 transition - colors"> <div className={`p - 2 rounded - lg bg - gradient - to - r ${service.color} mr - 4`}> <service.icon className="h - 5 w - 5 text - white" /> </div> initial = { { opacity: 0, coordinate_x: 20 }} animate = { { opacity: 1, coordinate_x: 0 }} transition = { { duration: 0.5, delay: 0.6 }} > <h2 className="text - xl font - semibold text - white mb - 4">Quick Actions</h2> <div className="grid grid - cols - 2 gap - 3"> {quick_actions.map ((action, index) => ( <motion.button key={action.name} initial = { { opacity: 0, scale: 0.9 }} animate = { { opacity: 1, scale: 1 }} transition={{ delay: index * 0.1   }} className={`p - 3 rounded - lg bg - gradient - to - r ${action.color} text - white text - sm font - medium hover:shadow - lg transition - shadow flex flex - col items - center`} > <div className="mb - 2">{action.icon}</div> <h3 className="font - medium text - white text - sm mb - 1">{action.title}</h3> <p className="text - zion - slate - light text - xs">{action.description}</p> </button> ))} </div> </motion.div> {} <motion.div className="bg - zion - blue - dark border border - zion - purple / 20 rounded - lg p - 6"; initial = { { opacity: 0, coordinate_x: 20 }} animate = { { opacity: 1, coordinate_x: 0 }} transition = { { duration: 0.5, delay: 0.8 }} > <h2 className="text - xl font - semibold text - white mb - 4">Notifications</h2> <div className="space - y-3"> <div className="flex - 1"> <h3 className="font - medium text - gray - 900">{service.name}</h3> <div className="flex items - center mt - 1 space - x-4 text - sm text - gray - 500"> <span className="flex items - center"> <CheckCircle className="h - 4 w - 4 text - green - 500 mr - 1" /> {service.status} </span> <span>{service.last_used}</span> </div> </div> <div className="text - right"> <div className="text - sm font - medium text - gray - 900">{service.usage}</div> <div className="w - 20 bg - gray - 200 rounded - full h - 2 mt - 1"> <div className="bg - gradient - to - r from - blue - 500 to - purple - 500 h - 2 rounded - full" style={{ width: service.usage   }} ></div> </div> </div> </motion.div> ))} </div> </div> </div> {} <div className="space - y-6"> {} <div className="bg - white rounded - xl shadow - sm border border - gray - 200 p - 6"> <h3 className="text - lg font - semibold text - gray - 900 mb - 4">Quick Actions</h3> <div className="grid grid - cols - 2 gap - 3"> {quick_actions.map ((action, index) => ( <motion.button key={action.name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1   }} className={`p - 3 rounded - lg bg - gradient - to - r ${action.color} text - white text - sm font - medium hover:shadow - lg transition - shadow flex flex - col items - center`} > <action.icon className="h - 5 w - 5 mb - 1" /> {action.name} </motion.button> ))} </div> </div> {} <div className="bg - white rounded - xl shadow - sm border border - gray - 200 p - 6"> <h3 className="text - lg font - semibold text - gray - 900 mb - 4">Upcoming Events</h3> <div className="space - y-3"> {upcoming_events.map ((event, index) => ( <motion.div key={event.title} initial = { { opacity: 0, coordinate_y: 10 }} animate = { { opacity: 1, coordinate_y: 0 }} transition={{ delay: index * 0.1   }} className="flex items - start p - 3 rounded - lg border border - gray - 100 hover:border - gray - 200 transition - colors"> <div className="p - 2 rounded - lg bg - blue - 100 mr - 3"> <event.icon className="h - 4 w - 4 text - blue - 600" /> </div> <div className="flex - 1"> <h4 className="text - sm font - medium text - gray - 900">{event.title}</h4> <div className="flex items - center mt - 1 text - xs text - gray - 500 space - x-2"> <span className="flex items - center"> <Calendar className="h - 3 w - 3 mr - 1" /> {event.date} </span> <span>{event.time}</span> <span className="px - 2 py - 1 bg - blue - 100 text - blue - 700 rounded - full text - xs"> {event.type} </span> </div> </div> </motion.div> ))} </div> initial = { { opacity: 0, coordinate_x: 20 }} animate = { { opacity: 1, coordinate_x: 0 }} transition = { { duration: 0.5, delay: 1 }} > <h2 className="text - xl font - semibold text - white mb - 4">System Status</h2> <div className="space - y-3"> <div className="flex items - center justify - between"> <span className="text - zion - slate - light">API Status</span> <div className="flex items - center gap - 2"> <div className="w - 2 h - 2 bg - green - 500 rounded - full"></div> <span className="text - green - 400 text - sm">Operational</span> </div> </div> <div className="flex items - center justify - between"> <span className="text - zion - slate - light">Database</span> <div className="flex items - center gap - 2"> <div className="w - 2 h - 2 bg - green - 500 rounded - full"></div> <span className="text - green - 400 text - sm">Healthy</span> </div> </div> <div className="flex items - center justify - between"> <span className="text - zion - slate - light">Uptime</span> <span className="text - white text - sm">99.9%</span> </div> </div> </div> </div> </div> {} <div className="mt - 8 bg - white rounded - xl shadow - sm border border - gray - 200 p - 6"> <div className="flex items - center justify - between mb - 6"> <h2 className="text - xl font - semibold text - gray - 900">Service Performance</h2> <div className="flex items - center space - x-4"> <div className="flex items - center space - x-2"> <div className="w - 3 h - 3 bg - blue - 500 rounded - full"></div> <span className="text - sm text - gray - 600">AI Services</span> </div> <div className="flex items - center space - x-2"> <div className="w - 3 h - 3 bg - green - 500 rounded - full"></div> <span className="text - sm text - gray - 600">Cloud Services</span> </div> <div className="flex items - center space - x-2"> <div className="w - 3 h - 3 bg - purple - 500 rounded - full"></div> <span className="text - sm text - gray - 600">Security Services</span> </div> </div> </div> {} <div className="h - 64 bg - gray - 50 rounded - lg flex items - center justify - center"> <div className="text - center"> <BarChart3 className="h - 12 w - 12 text - gray - 400 mx - auto mb - 2" /> <p className="text - gray - 500">Performance chart will be displayed here</p> <p className="text - sm text - gray - 400">Integration with analytics service required</p> </div> </div> </div> </div> </div> )} <div className="flex items - center space - x-2"> <div className="w - 3 h - 3 bg - green - 500 rounded - full"></div> <span className="text - sm text - gray - 600">Cloud Services</span> </div> <div className="flex items - center space - x-2"> <div className="w - 3 h - 3 bg - purple - 500 rounded - full"></div> <span className="text - sm text - gray - 600">Security Services</span> </div> </div> </div> {} <div className="h - 64 bg - gray - 50 rounded - lg flex items - center justify - center"> <div className="text - center"> <BarChart3 className="h - 12 w - 12 text - gray - 400 mx - auto mb - 2" /> <p className="text - gray - 500">Performance chart will be displayed here</p> <p className="text - sm text - gray - 400">Integration with analytics service required</p> </div> </div> </div> </div> </div>) } }
));
}