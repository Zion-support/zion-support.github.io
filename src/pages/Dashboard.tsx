// Lazy load heavy components to prevent router abort
const CommunityDiscussion = dynamic(
  () =>
    import('@/components/CommunityDiscussion').then(mod => ({
      default: mod.CommunityDiscussion
    }))
  {
    loading: () => (
      <div className='h-32 bg-zion-blue-light rounded animate-pulse' />
    )
    ssr: false
  }
)
const PointsBadge = dynamic(
  () =>
    import('@/components/loyalty/PointsBadge').then(mod => ({
      default: mod.PointsBadge
    }))
  {
    loading: () => (
      <span className='text-zion-cyan font-medium'>Loading...</span>
    )
    ssr: false
  }
)
const ApiKeysManager = dynamic(
  () =>
    import('@/components/developers/ApiKeysManager').then(mod => ({
      default: mod.ApiKeysManager
    }))
  {
    loading: () => (
      <div className='h-24 bg-zion-blue-light rounded animate-pulse' />
    )
    ssr: false
  }
)
const NotificationBell = dynamic(
  () =>
    import('@/components/NotificationBell').then(mod => ({
      default: mod.NotificationBell
    }))
  {
    loading: () => <Bell size={16} className='text-zion-cyan' />
    ssr: false
  }
)
const GuidedTour = dynamic(
  () =>
    import('@/components/onboarding/GuidedTour').then(mod => ({
      default: mod.GuidedTour
    }))
  const { user, loading } = useRequireAuth(); // This will handle authentication and redirects
  const { toast } = useToast()
  // Add safe checks for user ID to prevent premature API calls
  const userId = user?.id
  const { data: orders = [], isLoading: ordersLoading } =
    useGetOrdersQuery(userId)
  const { favorites } = useFavorites()
  // Type assertion to work around Supabase User type limitations
  const userWithExtendedProps = user as any
const loadNotificationFunctions = () => import("@/utils/notifications"),

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
    }
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
        </div>;
      </div>;
    );
  }
                    <UserCheck size={16} />
                  </Button>
                </div>
              </div>
                    <UserCheck size={16} />;
                    Edit Profile;
                  </Button>;
                </div>;
              </div>;

                  Your Activity;
                </h3>;
                <div className='space-y-4'>;
                  <div className='flex justify-between items-center'>;
                    <span className='text-zion-slate-light'>;
                      Profile Completion;
                    </span>;
                    <span className='text-zion-cyan font-medium'>65%</span>;
                  </div>;
                  <div className='w-full bg-zion-blue rounded-full h-2'>;
                    <div
                      className='bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full'
                      style={{ width: '65%' }}
                    ></div>
                  </div>
                      <Link href='/wallet' className='hover:underline'>;
                        View Wallet;
                      </Link>;
                    </span>;
                  </div>;

                        }
                    >
                      <Settings size={16} className="text-zion-purple" />
                      Send Onboarding Nudge
                    </Button>
                      Send System Alert;
                    </Button>;
                  </div>;
                </div>;
              </div>;
                  Recent Notifications
                </h3>
                <div className="space-y-4">
                  <Link href="/notifications" className="block" id="notifications-link">
                    <Button variant="outline" className="w-full">
                      <Bell className="mr-2 h-4 w-4" />
                      View All Notifications
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
                      View All Notifications;
                    </Button>;
                  </Link>;
                </div>;
              </div>;
            </div>;

                    <Button
                      variant='outline'
                      className='text-zion-slate-light border-zion-blue-light hover:bg-zion-blue hover:text-white'
                      onClick={logout}                    >
                      <LogOut size={16} className='mr-2' />
                      Logout
                    </Button>
                  </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6'>
                  <div className='p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-purple/30 border border-zion-blue-light'>
                    <h3 className='text-lg font-medium text-white'>
                      Welcome,{' '}
                      {userWithExtendedProps?.displayName?.split(' ')[0] |
                        'User'}
                    </h3>
                    <p className='text-zion-slate-light mt-1'>
                      Your journey on Zion has just begun!
                    </p>
                  </div>
                  <div className='p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light'>
                    <h3 className='text-lg font-medium text-white'>
                      Getting Started
                    </h3>
                    <p className='text-zion-slate-light mt-1'>
                      Complete your profile to unlock all features.
                    </p>
                  </div>
                </div>
                {/* Badges Preview */}
                <div className='mb-8'>
                  <h3 className='text-lg font-bold text-white mb-4'>
                    Your Badges
                  </h3>
                  <div className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
                    <div className='flex flex-col items-center'>
                      <div className='w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center mb-2'>
                        <UserCheck size={24} className='text-white' />
                  </h3>;
                  <CommunityDiscussion />;
                </div>;

                {/* User Overview */}
                <div className='mt-8 space-y-8'>;
                  <div className='bg-zion-blue-dark rounded-xl p-6'>;
                    <h3 className='text-lg font-bold text-white mb-4 flex items-center'>;
                      <FileText className='mr-2' size={18} /> Recent Orders;
                    </h3>;
                    {ordersLoading ? (;
                      <p className='text-zion-slate-light'>Loading...</p>;
                    ) : orders && orders.length === 0 ? (;
                      <EmptyState
                        icon={<ShoppingBag className='h-8 w-8' />}
                        title='No Orders'                        description="You haven't purchased anything yet."
                        action={{
                          text: 'Visit Marketplace'
                          href: '/marketplace'
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">Newcomer</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-purple-light flex items-center justify-center mb-2">
                        <MessageSquare size={24} className="text-white" />
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">First Post</span>
                    </div>
                    <div className="flex flex-col items-center opacity-40">
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">
                        <Bell size={24} className="text-zion-slate-light" />
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
                <div id="community-section">
                  <h3 className="text-lg font-bold text-white mb-4">Community</h3>
                  <CommunityDiscussion />
                </div>
                {/* User Overview */}
                <div className="mt-8 space-y-8">
                  <div className="bg-zion-blue-dark rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                      <FileText className="mr-2" size={18} /> Recent Orders
                    </h3>
                    {ordersLoading ? (
                      <p className="text-zion-slate-light">Loading...</p>
                    ) : orders.length === 0 ? (
                      <EmptyState
                        icon={<ShoppingBag className="h-8 w-8" />}
                        title="No Orders"
                        description="You haven't purchased anything yet."
                        action={{ text: 'Visit Marketplace', href: '/marketplace' }}
                        className="border-none bg-transparent text-center";
                        ))}
                      </ul>;
                    )}
                      <Link
                        href='/wishlist'
                        className='text-zion-purple underline'
                      >
                        View all
                      </Link>
                    </div>
                  </div>
                  <div className='bg-zion-blue-dark rounded-xl p-6'>
                    <h3 className='text-lg font-bold text-white mb-4 flex items-center'>
                      <Key className='mr-2' size={18} /> API Keys
                    </h3>
                    <ApiKeysManager />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GuidedTour role={roleForTour} />
    </>
  )
};"
return (<> <Header /> <div className="min-h-screen bg-zion-blue"> <div className="container mx-auto px-4 py-8"> <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> {
  /* Left Sidebar - User Profile */ "
}<div className="lg:col-span-1"> <div className="bg-zion-blue-dark rounded-xl p-6 mb-6"> <div className="flex flex-col items-center text-center"> <div className="w-24 h-24 rounded-full bg-zion-purple flex items-center justify-center text-2xl font-bold text-white mb-4"> {'
  userWithExtendedProps?.displayName?.split (' ') .map ( (name: string) => name[0]) .join ('') |userWithExtendedProps?.email?.charAt (0) .toUpperCase () "
}</div> <h2 className="text-xl font-bold text-white"> {
  userWithExtendedProps?.displayName |userWithExtendedProps?.email "
}</h2> <p className="text-zion-slate-light mb-2"> {
  user?.email "
}</p> <Badge className="bg-zion-purple text-white mb-4" > > <UserCheck size= {
  16
}/> Edit Profile </Button> </div> </div> {
  /* Stats & Metrics */ "
}<div className="bg-zion-blue-dark rounded-xl p-6 mb-6"> <h3 className="text-lg font-bold text-white mb-4">Your Activity</h3> <div className="space-y-4"> <div className="flex justify-between items-center"> <span className="text-zion-slate-light">Profile Completion</span> <span className="text-zion-cyan font-medium">65%</span> </div> <div className="w-full bg-zion-blue rounded-full h-2"> </div> <div className="flex justify-between items-center"> <span className="text-zion-slate-light">Points</span> <PointsBadge /> </div> <div className="flex justify-between items-center"> <span className="text-zion-slate-light">ZION$ Balance</span> <span className="text-zion-cyan font-medium"> <Link href="/wallet" className="hover:underline">View Wallet</Link> </span> </div> <div className="flex justify-between items-center"> <span className="text-zion-slate-light">Badges Earned</span> <span className="text-zion-cyan font-medium">3/12</span> </div> {
  /* Test notification buttons */ "
}<div className="flex flex-col gap-2 mt-4"> <Button > <Send size= {
  16 "
}className="text-zion-cyan" /> Send Test Notification </Button> <Button
}> <Settings size= {
  16 ";
}className="text - zion - purple" /> async () => {
  try {
  const {
;
