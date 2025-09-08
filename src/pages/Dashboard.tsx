

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
)
// Lazy load notification functions
const loadNotificationFunctions = () => import('@/utils/notifications')
export default function Dashboard() {
  const { logout } = useAuth()
const loadNotificationFunctions = () => import('@/utils/notifications')
export default function Dashboard() {
  const { logout } = useAuth()
const loadNotificationFunctions = () => import('@/utils/notifications');
export default function Dashboard() {;
  const { logout } = useAuth();

                  </Button>
                </div>
              </div>


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


              



                  <div className='flex justify-between items-center'>
                    <span className='text-zion-slate-light'>ZION$ Balance</span>
                    <span className='text-zion-cyan font-medium'>
                      <Link href='/wallet' className='hover:underline'>
                        View Wallet
                      </Link>
                    </span>
                  </div>


                  <div className='flex justify-between items-center'>
                    <span className='text-zion-slate-light'>Badges Earned</span>
                    <span className='text-zion-cyan font-medium'>3/12</span>
                  </div>

                  {/* Test notification buttons */}


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
                    >
                      <Bell size={16} className='text-yellow-500' />
                      Send System Alert
                    </Button>
                  </div>
                </div>
              </div>


              {/* Notifications */}
              <div className='bg-zion-blue-dark rounded-xl p-6'>
                <h3 className='text-lg font-bold text-white mb-4 flex items-center'>
                  <Bell size={18} className='mr-2 text-zion-cyan' />

                    <Button
                      className='w-full flex items-center justify-center gap-2'
                      variant='outline'
                      onClick={async () => {
                        try {
                          const { createSystemNotification } =
                            await loadNotificationFunctions()
                          await createSystemNotification({
                            userId: user?.id ?? ''
                            title: 'New Feature Available!'
                            message:
                              "We've added a new notification center to help you stay updated with important information."
                            actionUrl: '/notifications'
                            actionText: 'Explore Now'
                          })
                          toast({
                            title: 'System notification sent'
                            description: 'Check your notification center'
                          })
                        } catch (error) {
                          toast({
                            title: 'Error sending notification'
                            description: 'Please try again'
                            variant: 'destructive'
                          })

                        }
                      }}
                    >;
                      <Bell size={16} className='text-yellow-500' />;
                  <div className='flex justify - between items - center'>;
                    <span className='text - zion - slate - light'>Badges Earned</span>;
                    <span className='text - zion - cyan font - medium'>3 / 12</span>;
                  </div>;
                  {/* Test notification buttons */}
                  <div className="flex flex-col gap-2 mt-4">;
                    <Button;
                      className="w-full flex items-center justify-center gap-2";
                      variant="outline";
                      onClick={handleTestNotification}
                    >;
                      <Send size={16} className="text-zion-cyan" />;
                      Send Test Notification;
                    </Button>;
                    <Button;
                      className="w-full flex items-center justify-center gap-2";
                      variant="outline";
                      onClick={async () => {;
                        try {;
                          const { createOnboardingNotification } = await loadNotificationFunctions(),;
                          await createOnboardingNotification({;
                            userId: user?.id ?? "",;
                            missingMilestone: 'profile_completed',;
                            userRole: roleForTour;
                          }),;
                          toast({;
                            title: "Onboarding notification sent",;
                            description: "Check your notification center";
                          });
                        } catch (error) {;
                          toast({;
                            title: "Error sending notification",;
                            description: "Please try again",;
                            variant: "destructive"});
                        }
                      }}
                    >;
                      <Settings size={16} className="text-zion-purple" />;
                      Send Onboarding Nudge;
                    </Button>;
                    <Button;
                      className="w-full flex items-center justify-center gap-2";
                      variant="outline";
                      onClick={async () => {;
                        try {;
                          const { createSystemNotification } = await loadNotificationFunctions(),;
                          await createSystemNotification({;
                            userId: user?.id ?? "",;
                            title: "New Feature Available!",;
                            message: "We've added a new notification center to help you stay updated with important information.",;
                            actionUrl: "/notifications",;
                            actionText: "Explore Now";
                          }),;
                          toast({;
                            title: "System notification sent",;
                            description: "Check your notification center";
                          });
                        } catch (error) {;
                          toast({;
                            title: "Error sending notification";
                            description: "Please try again";
                            variant: "destructive"});
                        }
                      }}
                    >;
                      <Bell size={16} className='text - yellow - 500' />;
                      Send System Alert;
                    </Button>;
                  </div>;
                </div>;
              </div>;

                      View All Notifications
                    </Button>
                  </Link>
                </div>
              </div>
            </div>


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

            



