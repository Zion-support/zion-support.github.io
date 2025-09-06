
import React from 'react'
import dynamic from 'next/dynamic'
import { useAuth } from '@/hooks/useAuth'
import { useRequireAuth } from '@/hooks/useAuthGuard'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { Badge } from '@/components/ui/badge'
import {
  UserCheck
  Bell
  MessageSquare
  LogOut
  Send
  Settings
  FileText
  Heart
  Key
  ShoppingBag
} from 'lucide-react'
import { useGetOrdersQuery } from '@/hooks/useOrders'
import { useFavorites } from '@/hooks/useFavorites'
import { useToast } from '@/hooks/use-toast'
import { EmptyState } from '@/components/ui/empty-state'
import Link from 'next/link'


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
=======


  const userType = null;
    userWithExtendedProps?.userType ||
    user?.user_metadata?.userType ||
    'talent'
  const roleForTour = null;
    userType === 'client' || userType === 'admin' ? 'client' : 'talent'
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

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    )
  }
  const handleTestNotification = async () => {
    try {

                    <UserCheck size={16} />
                    Edit Profile
                  </Button>
                </div>
              </div>

              {/* Stats & Metrics */}

                        }
                      }}
                    >
                      <Settings size={16} className="text-zion-purple" />
                      Send Onboarding Nudge
                    </Button>

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

            {/* Main Content - Dashboard */}
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white" data-testid="dashboard-header">Dashboard</h2>
                  <div className="flex items-center gap-2">
                    <NotificationBell />

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

                        ))}
                      </ul>
                    )}

                        ))}
                      </ul>
                    )}
<<<<<<< HEAD
