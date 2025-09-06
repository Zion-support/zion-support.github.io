
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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const { user, loading } = useRequireAuth(); // This will handle authentication and redirects
  const { toast } = useToast()
  // Add safe checks for user ID to prevent premature API calls
  const userId = user?.id
  const { data: orders = [], isLoading: ordersLoading } =
    useGetOrdersQuery(userId)
  const { favorites } = useFavorites()
  // Type assertion to work around Supabase User type limitations
  const userWithExtendedProps = user as any
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
            {/* Main Content - Dashboard */}
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white" data-testid="dashboard-header">Dashboard</h2>
                  <div className="flex items-center gap-2">
                    <NotificationBell />

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======
                
<<<<<<< HEAD
<<<<<<< HEAD

                        ))}
                      </ul>
                    )}

                        ))}
                      </ul>
                    )}
<<<<<<< HEAD


                        ))}
                      </ul>
                    )}
                    <div className='mt-2 text-right'>
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
  /* Stats & Metrics */ ";
}<div className="bg - zion - blue - dark rounded - xl p - 6 mb - 6"> <h3 className="text - lg font - bold text - white mb - 4">Your Activity</h3> <div className="space - y-4"> <div className="flex justify - between items - center"> <span className="text - zion - slate - light">Profile Completion</span> <span className="text - zion - cyan font - medium">65%</span> </div> <div className="w - full bg - zion - blue rounded - full h - 2"> </div> <div className="flex justify - between items - center"> <span className="text - zion - slate - light">Points</span> <PointsBadge /> </div> <div className="flex justify - between items - center"> <span className="text - zion - slate - light">ZION$ Balance</span> <span className="text - zion - cyan font - medium"> <Link href="/wallet" className="hover:underline">View Wallet</Link> </span> </div> <div className="flex justify - between items - center"> <span className="text - zion - slate - light">Badges Earned</span> <span className="text - zion - cyan font - medium">3 / 12</span> </div> {
  /* Test notification buttons */ ";
}<div className="flex flex - col gap - 2 mt - 4"> <Button > <Send size= {
  16 ";
}className="text - zion - cyan" /> Send Test Notification </Button> <Button;

}> <Settings size= {
  16 "
}className="text-zion-purple" /> async () => {
  try {
  const {
<<<<<<< HEAD
