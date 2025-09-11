<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';

} from 'lucide-react';
import { use_auth } from '@/hooks / use_auth';
import { use_points } from '@/hooks / use_points';
import {
import React, { useState } from 'react';

import {
  Gift
  Star
  Users
  ShoppingBag
  MessageSquare
  TrendingUp
  History
  Gift,
  Star,
  Users,
  ShoppingBag,
  MessageSquare,
  TrendingUp,;
  History;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle;
} from '@/components/ui/card';import { Button } from '@/components/ui/button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD
  Card,
  CardContent,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {;
  Gift,;
  Star,;
  Users,;
  ShoppingBag,;
  MessageSquare,;
  TrendingUp,;
  History,;
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import {;
  Card,;
  CardContent,;

  Card,
  CardContent,
  CardDescription,;
  CardHeader;
  CardTitle;
} from '@/components/ui/card';import { Button } from '@/components/ui/button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { formatDistanceToNow } from 'date-fns';

import Link from 'next/link';
import { LoginModal } from '@/components/auth/LoginModal';
<<<<<<< HEAD
<<<<<<< HEAD
export default function PointsPage() {;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { isAuthenticated, user } = useAuth();
  const { ledger, balance, loading, fetchLedger } = usePoints();
  const [loginOpen, setLoginOpen] = useState(false);
  const [redeeming, setRedeeming] = useState(false);

  async function handleRedeem(reward: {
    id: string;
    cost: number;
    title: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  }) {    if (!user?.id) return;  async function handleRedeem(reward: { id: string, cost: number, title: string }) {


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export default function PointsPage() { const { isAuthenticated, user  } = useAuth(),
  const { ledger, balance, loading, fetchLedger  } = usePoints(),
  const [ loginOpen, setLoginOpen ] = useState(false),
  const [ redeeming, setRedeeming ] = useState(false),


  async function handleRedeem(reward: { id: string, cost: number, title: string }) {
<<<<<<< HEAD
<<<<<<< HEAD
  }) {    if (!user?.id) return;  async function handleRedeem(reward: { id: string, cost: number, title: string }) {

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!user?.id) return;
    setRedeeming(true);
    try {
      await fetch('/api/points/redeem', {

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }

        body: JSON.stringify({
          userId: user.id
          cost: reward.cost
          reward: reward.title
        })
<<<<<<< HEAD
import React, { useState } from 'react',;
=======
} from '@/components / ui / card';import { Button } from '@/components / ui / button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';
import { use_auth } from '@/hooks / use_auth';
import { use_points } from '@/hooks / use_points';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      });
      await fetchLedger();
    } finally {
      setRedeeming(false);    }      });
      await fetchLedger()
    } finally {
      setRedeeming(false)
import React, { useState } from 'react',;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';
import { use_auth } from '@/hooks / use_auth';
import { use_points } from '@/hooks / use_points';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { ScrollArea } from '@/components / ui / scroll - area';
import { formatDistanceToNow } from 'date - fns';
import Link from 'next / link';
import { LoginModal } from '@/components / auth / LoginModal';
export default /**
 * PointsPage - Function description
 */
function PointsPage() {
  const { is_authenticated, user } = use_auth ();
  const { ledger, balance, loading, fetch_ledger } = use_points ();
  const [login_open, setLoginOpen] = useState (false);
  const [redeeming, set_redeeming] = useState (false);
;
  async /**
 * handle_redeem - Function description
 */
function handle_redeem() {    // Check condition
if (return) {
  $2
}  async /**
 * handle_redeem - Function description
 */
function handle_redeem() {
    // Check condition
if (return) {
  $2
}
    set_redeeming (true);
    try {
      await fetch ('/api / points / redeem', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          user_id: user.id,
          cost: reward.cost,
          reward: reward.title,
        }),

      });
      await fetchLedger();
    } finally {
<<<<<<< HEAD
<<<<<<< HEAD
      setRedeeming(false);    }      });
      await fetchLedger()
    } finally {
      setRedeeming(false)
import React, { useState } from 'react',;
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth',;
import { usePoints } from '@/hooks/usePoints',;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import { ScrollArea } from '@/components/ui/scroll-area',;
import { formatDistanceToNow } from 'date-fns',;
import Link from 'next/link',;
import { LoginModal } from '@/components/auth/LoginModal',;
export default function PointsPage() {;
  const { isAuthenticated, user } = useAuth(),;
  const { ledger, balance, loading, fetchLedger } = usePoints(),;
  const [loginOpen, setLoginOpen] = useState(false),;
  const [redeeming, setRedeeming] = useState(false),;
  async function handleRedeem(reward: { id: string, cost: number, title: string }) {;
    if (!user?.id) return,;
    setRedeeming(true),;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  }) {    if (!user?.id) return;  async function handleRedeem(): any (reward: { id: string, cost: number, title: string }) {;
    if (!user?.id) return;
    setRedeeming(true);
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {;
      await fetch('/api/points/redeem', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ userId: user.id, cost: reward.cost, reward: reward.title });
      }),;
      await fetchLedger();
    } finally {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setRedeeming(false);    }      });
      await fetchLedger();
    } finally {;

      setRedeeming(false);

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, cost: reward.cost, reward: reward.title })
      });
      await fetchLedger()
    } finally {
      setRedeeming(false)

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    }
=======


    }
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      set_redeeming (false);    }      });
      await fetch_ledger ();
    } finally {
      set_redeeming (false);
    }
  }
  const earning_opportunities = [;
    {
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======
      icon: <Users className='h - 5 w - 5' />,

      title: 'Sign Up & Profile Setup',
      description: 'Complete your profile and verify your email',
      points: '50 pts',
      action: is_authenticated ? '✓ Completed' : 'Get Started',
    },

      icon: <ShoppingBag className='h - 5 w - 5' />,

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      icon: <Users className='h-5 w-5' />,
      title: 'Sign Up & Profile Setup',
      description: 'Complete your profile and verify your email',
      points: '50 pts',
      action: isAuthenticated ? '✓ Completed' : 'Get Started',
    },
      icon: <ShoppingBag className='h-5 w-5' />,
      title: 'First Purchase',
      description: 'Make your first purchase on the marketplace',
      points: '100 pts',
      action: 'Browse Marketplace',

<<<<<<< HEAD
<<<<<<< HEAD
      setRedeeming(false);
    }
  }

  const earningOpportunities = [
    {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      icon: <Users className='h-5 w-5' />
      title: 'Sign Up & Profile Setup'
      description: 'Complete your profile and verify your email'
      points: '50 pts'
      action: isAuthenticated ? '✓ Completed' : 'Get Started'
    }
      icon: <ShoppingBag className='h-5 w-5' />
      title: 'First Purchase'
      description: 'Make your first purchase on the marketplace'
      points: '100 pts'
      action: 'Browse Marketplace'
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    {

      icon: <MessageSquare className='h - 5 w - 5' />,
      title: 'Community Engagement',
      description: 'Post in the community or comment on discussions',
      points: '25 pts per post',
      action: 'Join Community',
    },
    {
      icon: <Users className='h - 5 w - 5' />,

      title: 'Refer Friends',
      description: 'Invite friends to join Zion marketplace',
      points: '200 pts per referral',
      action: 'Share Referral Link',



      icon: <Users className="h-5 w-5" />,
      title: "Sign Up & Profile Setup",
      description: "Complete your profile and verify your email",
      points: "50 pts",
      action: isAuthenticated ? "✓ Completed" : "Get Started"




    },
    {
      icon: <ShoppingBag className="h-5 w-5" />,
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      title: "First Purchase",
      description: "Make your first purchase on the marketplace",
      points: "100 pts",
      action: "Browse Marketplace"

    },  ];
;
  const upcoming_rewards = [;
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },      title: "Refer Friends",

      description: "Invite friends to join Zion marketplace",
      points: "200 pts per referral",
      action: "Share Referral Link";
    }

<<<<<<< HEAD
<<<<<<< HEAD
    {
      icon: <MessageSquare className='h-5 w-5' />
      title: 'Community Engagement'
      description: 'Post in the community or comment on discussions'
      points: '25 pts per post'
      action: 'Join Community'
    }
    {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      icon: <Users className='h-5 w-5' />
      title: 'Refer Friends'
      description: 'Invite friends to join Zion marketplace'
      points: '200 pts per referral'
      action: 'Share Referral Link'
    },  ];
  const upcomingRewards = [
<<<<<<< HEAD
<<<<<<< HEAD
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },      title: "Refer Friends"
      description: "Invite friends to join Zion marketplace"
      points: "200 pts per referral"
      action: "Share Referral Link"
    }
  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: 'premium1'
      title: 'Premium Features (1 month)'
      cost: 1000
      category: 'Subscription'
    }
    {
      id: 'swag'
      title: 'Zion Swag Pack'
      cost: 1500
      category: 'Merchandise'
    }
    {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      id: 'coupon25'
      title: '$25 Off Coupon'
      cost: 2000
      category: 'Discount'
    }
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' }
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Users className='h-5 w-5' />,
      title: 'Sign Up & Profile Setup',
      description: 'Complete your profile and verify your email',
      points: '50 pts',
      action: isAuthenticated ? '✓ Completed' : 'Get Started',
    },
      icon: <ShoppingBag className='h-5 w-5' />,
      title: 'First Purchase',
      description: 'Make your first purchase on the marketplace',
      points: '100 pts',
      action: 'Browse Marketplace',
      icon: <Users className="h-5 w-5" />,
      title: "Sign Up & Profile Setup",
      description: "Complete your profile and verify your email",
      points: "50 pts",
      action: isAuthenticated ? "✓ Completed" : "Get Started"
    },
    {
      icon: <ShoppingBag className="h-5 w-5" />,
      title: "First Purchase",
      description: "Make your first purchase on the marketplace",
      points: "100 pts",
      action: "Browse Marketplace"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const earningOpportunities = [;
    {;
      icon: <Users className='h-5 w-5' />,;
      title: 'Sign Up & Profile Setup',;
      description: 'Complete your profile and verify your email',;
      points: '50 pts',;
      action: isAuthenticated ? '✓ Completed' : 'Get Started',;
    },;
      icon: <ShoppingBag className='h-5 w-5' />,;
      title: 'First Purchase',;
      description: 'Make your first purchase on the marketplace',;
      points: '100 pts',;
      action: 'Browse Marketplace',;
    },;
    {;
      icon: <MessageSquare className='h-5 w-5' />,;
      title: 'Community Engagement',;
      description: 'Post in the community or comment on discussions',;
      points: '25 pts per post',;
      action: 'Join Community',;
    },;
    {;
      icon: <Users className='h-5 w-5' />,;
      title: 'Refer Friends',;
      description: 'Invite friends to join Zion marketplace',;
      points: '200 pts per referral',;
      action: 'Share Referral Link',;
<<<<<<< HEAD
<<<<<<< HEAD
    },  ];

  const upcomingRewards = [;
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },      title: "Refer Friends",;
      description: "Invite friends to join Zion marketplace",;
      points: "200 pts per referral",;
      action: "Share Referral Link";
    }

  const upcomingRewards = [;
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },;
    {;
      id: 'premium1',;
      title: 'Premium Features (1 month)',;
      cost: 1000,;
      category: 'Subscription',;
    },;
    {;
      id: 'swag',;
      title: 'Zion Swag Pack',;
      cost: 1500,;
      category: 'Merchandise',;
    },;
    {;
      id: 'coupon25',;
      title: '$25 Off Coupon',;
      cost: 2000,;
      category: 'Discount',;
    },;
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' },;
    },
    {
      icon: <Users className='h-5 w-5' />,
      title: 'Refer Friends',
      description: 'Invite friends to join Zion marketplace',
      points: '200 pts per referral',
      action: 'Share Referral Link',
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
      icon: <Users className='h-5 w-5' />,
      title: 'Sign Up & Profile Setup',
      description: 'Complete your profile and verify your email',
      points: '50 pts',
      action: isAuthenticated ? '✓ Completed' : 'Get Started',
    },
      icon: <ShoppingBag className='h-5 w-5' />,
      title: 'First Purchase',
      description: 'Make your first purchase on the marketplace',
      points: '100 pts',
      action: 'Browse Marketplace',
=======
      icon: <Users className="h-5 w-5" />,
      title: "Sign Up & Profile Setup",
      description: "Complete your profile and verify your email",
      points: "50 pts",
      action: isAuthenticated ? "✓ Completed" : "Get Started"
    },
    {
      icon: <ShoppingBag className="h-5 w-5" />,
      title: "First Purchase",
      description: "Make your first purchase on the marketplace",
      points: "100 pts",
      action: "Browse Marketplace"
    },
    {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },  ];

  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },      title: "Refer Friends",
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Community Engagement",
      description: "Post in the community or comment on discussions",
      points: "25 pts per post",
      action: "Join Community"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Refer Friends",
      description: "Invite friends to join Zion marketplace",
      points: "200 pts per referral",
      action: "Share Referral Link"
    }
<<<<<<< HEAD
<<<<<<< HEAD



  if (!isAuthenticated) {;
    return (

  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },
    {
      id: 'premium1',
      title: 'Premium Features (1 month)',
      cost: 1000,
      category: 'Subscription',
    },
    {
      id: 'swag',
      title: 'Zion Swag Pack',
      cost: 1500,
      category: 'Merchandise',
    },
    {
      id: 'coupon25',
      title: '$25 Off Coupon',
      cost: 2000,
      category: 'Discount',
    },
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' },
  ],;
  const upcomingRewards = [;
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },;
    { id: 'premium1', title: 'Premium Features (1 month)', cost: 1000, category: 'Subscription' },;
    { id: 'swag', title: 'Zion Swag Pack', cost: 1500, category: 'Merchandise' },;
    { id: 'coupon25', title: '$25 Off Coupon', cost: 2000, category: 'Discount' };
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' }
  ],
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ],;
  const upcomingRewards = [;
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },;
    {;
      id: 'premium1',;
      title: 'Premium Features (1 month)',;
      cost: 1000,;
      category: 'Subscription',;
    },;
    {;
      id: 'swag',;
      title: 'Zion Swag Pack',;
      cost: 1500,;
      category: 'Merchandise',;
    },;
    {;
      id: 'coupon25',;
      title: '$25 Off Coupon',;
      cost: 2000,;
      category: 'Discount',;
    },;
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' },;
    },
    {


      description: "Invite friends to join Zion marketplace",
      points: "200 pts per referral",
      action: "Share Referral Link"
    }



  if (!isAuthenticated) {;
    return (

    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },
    { id: 'premium1', title: 'Premium Features (1 month)', cost: 1000, category: 'Subscription' },
    { id: 'swag', title: 'Zion Swag Pack', cost: 1500, category: 'Merchandise' },
    { id: 'coupon25', title: '$25 Off Coupon', cost: 2000, category: 'Discount' },
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' }
  ];

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (!isAuthenticated) {
    return (
      <>
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='container py-10 max-w-4xl'>
          <div className='text-center mb-8'>
            <Gift className='h-16 w-16 text-primary mx-auto mb-4' />
            <h1 className='text-4xl font-bold mb-4'>Zion Rewards Program</h1>
            <p className='text-xl text-muted-foreground mb-6'>
              Earn points for every action you take and redeem them for
              exclusive rewards!
            </p>
            <Button onClick={() => setLoginOpen(true)} size='lg'>              Join Now to Start Earning
            </Button>
          </div>
            <Button onClick={(,) => setLoginOpen(true)} size="lg">
=======
      <>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <>


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="container py-10 max-w-4xl">
          <div className="text-center mb-8">
            <Gift className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Zion Rewards Program</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Earn points for every action you take and redeem them for exclusive rewards!
            </p>



            <Button onClick={() => setLoginOpen(true)} size="lg">
              Join Now to Start Earning
            </Button>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <TrendingUp className='h-5 w-5' />                  How to Earn Points          <div className="grid md:grid-cols-2 gap-8 mb-12">
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



          <div className="grid md:grid-cols-2 gap-8 mb-12">
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          <div className="grid md:grid-cols-2 gap-8 mb-12">


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                  How to Earn Points


<<<<<<< HEAD
                  How to Earn Points
                  How to Earn Points
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </CardTitle>
                  Multiple ways to accumulate rewards
                </CardDescription>
              </CardHeader>
<<<<<<< HEAD
=======
                  How to Earn Points


                </CardTitle>
                <CardDescription>
                  Multiple ways to accumulate rewards
                </CardDescription>
              </CardHeader>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <CardContent className='space-y-4'>
                {earningOpportunities.map((opportunity, index) => (
                  <div
                    key={index}
                    className='flex items-start gap-3 p-3 rounded-lg border'
                  >
                    <div className='text-primary mt-1'>{opportunity.icon}</div>
                    <div className='flex-1'>
                      <h4 className='font-medium'>{opportunity.title}</h4>
                      <p className='text-sm text-muted-foreground'>
                        {opportunity.description}
                      </p>                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
              <CardContent className="space-y-4">
                {earningOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
<<<<<<< HEAD
              <CardContent className="space-y-4">
                {earningOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Check condition
if ( {) {
  $2
}
    return (
      <>;
        <div className='container py - 10 max - w-4xl'>;
          <div className='text - center mb - 8'>;
            <Gift className='h - 16 w - 16 text - primary mx - auto mb - 4' />;
            <h1 className='text - 4xl font - bold mb - 4'>Zion Rewards Program</h1>;
            <p className='text - xl text - muted - foreground mb - 6'>;
              Earn points for every action you take and redeem them for;
              exclusive rewards!;
            </p>;
            <Button on_click={() => setLoginOpen (true)} size='lg'>              Join Now to Start Earning;
            </Button>;
          </div>;
            <Button on_click={(, ) => setLoginOpen (true)} size="lg">;
            <Button on_click={() => setLoginOpen (true)} size="lg">;
              Join Now to Start Earning;
            </Button>;
          </div>;
          <div className='grid md:grid - cols - 2 gap - 8 mb - 12'>;
            <Card>;
              <CardHeader>;
                <CardTitle className='flex items - center gap - 2'>;
                  <TrendingUp className='h - 5 w - 5' />                  How to Earn Points          <div className="grid md:grid - cols - 2 gap - 8 mb - 12">;
            <Card>;
              <CardHeader>;
                <CardTitle className="flex items - center gap - 2">;
                  <TrendingUp className="h - 5 w - 5" />;
                </CardTitle>;
                <CardDescription>;
                  Multiple ways to accumulate rewards;
                </CardDescription>;
              </CardHeader>;
              <CardContent className='space - y-4'>;
                {earning_opportunities.map ((opportunity, index) => (
                  <div;

                    key={index}
                    className='flex items - start gap - 3 p - 3 rounded - lg border';
                  >;
                    <div className='text - primary mt - 1'>{opportunity.icon}</div>;
                    <div className='flex - 1'>;
                      <h4 className='font - medium'>{opportunity.title}</h4>;
                      <p className='text - sm text - muted - foreground'>;
                        {opportunity.description}

              <CardContent className="space-y-4">
                {earningOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <CardContent className="space-y-4">
                {earningOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">


                    <div className="text-primary mt-1">{opportunity.icon}</div>
<<<<<<< HEAD
                      <h4 className="font-medium">{opportunity.title}</h4>
                      <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                    </div>
<<<<<<< HEAD
                    <Badge variant='secondary'>{opportunity.points}</Badge>                  </div>                    </div>
ursor/fix-website-loading-errors-and-merge-6662
                    <Badge variant="secondary">{opportunity.points}</Badge>
                    <Badge variant='secondary'>{opportunity.points}</Badge>                  </div>                    </div>
                    <Badge variant="secondary">{opportunity.points}</Badge>



=======
=======
                    <div className="flex-1">
                      <h4 className="font-medium">{opportunity.title}</h4>
                      <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                    </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Badge variant="secondary">{opportunity.points}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
                <CardTitle className='flex items-center gap-2'>
                  <Gift className='h-5 w-5' />                  Upcoming Rewards                <CardTitle className="flex items-center gap-2">
ursor/fix-website-loading-errors-and-merge-6662
                  <Gift className="h-5 w-5" />
                <CardTitle className='flex items-center gap-2'>
                  <Gift className='h-5 w-5' />                  Upcoming Rewards                <CardTitle className="flex items-center gap-2">
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5" />
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                <CardTitle className='flex items-center gap-2'>
                  <Gift className='h-5 w-5' />                  Upcoming Rewards                <CardTitle className="flex items-center gap-2">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <CardTitle className="flex items-center gap-2">

                <CardTitle className="flex items-center gap-2">


                  <Gift className="h-5 w-5" />
                  Upcoming Rewards
                </CardTitle>
                <CardDescription>
                  What you can redeem your points for
                </CardDescription>
              </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
              <CardContent className='space-y-4'>
                {upcomingRewards.map((reward, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-3 rounded-lg border'
                  >                    <div>
                      <h4 className='font-medium'>{reward.title}</h4>
                      <p className='text-sm text-muted-foreground'>
                        {reward.category}
                      </p>
                    </div>
                    <Badge variant='outline'>{reward.cost}</Badge>                  </div>
                    <Badge variant="outline">{reward.cost}</Badge>


=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <CardContent className="space-y-4">
                {upcomingRewards.map((reward, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <h4 className="font-medium">{reward.title}</h4>
                      <p className="text-sm text-muted-foreground">{reward.category}</p>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
                    <Badge variant="outline">{reward.cost}</Badge>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



                    <Badge variant="outline">{reward.cost}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <Card className='text-center'>
            <CardContent className='pt-6'>
              <Star className='h-12 w-12 text-primary mx-auto mb-4' />
              <h3 className='text-2xl font-bold mb-2'>Coming Soon</h3>
              <p className='text-muted-foreground mb-4'>
                Our full rewards system is launching soon! Sign up now to start
                earning points immediately.
              </p>
              <Button onClick={() => setLoginOpen(true)}>Create Account</Button>            </CardContent>          <Card className="text-center">



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Card className="text-center">
            <CardContent className="pt-6">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground mb-4">
                Our full rewards system is launching soon! Sign up now to start earning points immediately.
              </p>
              <Button onClick={() => setLoginOpen(true)}>
                Create Account
              </Button>
            </CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
            </CardContent>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



          </Card>
<<<<<<< HEAD
=======
        </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
      </>
      <>;
        <div className='container py-10 max-w-4xl'>;
          <div className='text-center mb-8'>;
            <Gift className='h-16 w-16 text-primary mx-auto mb-4' />;
            <h1 className='text-4xl font-bold mb-4'>Zion Rewards Program</h1>;
            <p className='text-xl text-muted-foreground mb-6'>;
              Earn points for every action you take and redeem them for;
              exclusive rewards!;
            </p>;
            <Button onClick={() => setLoginOpen(true)} size='lg'>              Join Now to Start Earning;
            </Button>;
          </div>;
            <Button onClick={(,) => setLoginOpen(true)} size="lg">;
            <Button onClick={() => setLoginOpen(true)} size="lg">;
              Join Now to Start Earning;
            </Button>;
          </div>;

          <div className='grid md:grid-cols-2 gap-8 mb-12'>;
            <Card>;
              <CardHeader>;
                <CardTitle className='flex items-center gap-2'>;
                  <TrendingUp className='h-5 w-5' />                  How to Earn Points          <div className="grid md:grid-cols-2 gap-8 mb-12">;
            <Card>;
              <CardHeader>;
                <CardTitle className="flex items-center gap-2">;
                  <TrendingUp className="h-5 w-5" />;
                </CardTitle>;
                <CardDescription>;
                  Multiple ways to accumulate rewards;
                </CardDescription>;
              </CardHeader>;
              <CardContent className='space-y-4'>;
                {earningOpportunities && earningOpportunities.map((opportunity, index) => (;
                  <div
                    key={index}
                    className='flex items-start gap-3 p-3 rounded-lg border'>;
                    <div className='text-primary mt-1'>{opportunity && opportunity.icon}</div>;
                    <div className='flex-1'>;
                      <h4 className='font-medium'>{opportunity && opportunity.title}</h4>;
                      <p className='text-sm text-muted-foreground'>;
                        {opportunity && opportunity.description}
                      </p>                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">;
                    <div className="text-primary mt-1">{opportunity && opportunity.icon}</div>;
                    <div className="flex-1">;
                      <h4 className="font-medium">{opportunity && opportunity.title}</h4>;
                      <p className="text-sm text-muted-foreground">{opportunity && opportunity.description}</p>;
                    </div>;
                    <Badge variant='secondary'>{opportunity && opportunity.points}</Badge>                  </div>                    </div>;
                    <Badge variant="secondary">{opportunity && opportunity.points}</Badge>;
                  </div>;
                ))}
              </CardContent>;
            </Card>;

            <Card>;
              <CardHeader>;
                <CardTitle className='flex items-center gap-2'>;
                  <Gift className='h-5 w-5' />                  Upcoming Rewards                <CardTitle className="flex items-center gap-2">;
                  <Gift className="h-5 w-5" />;
                  Upcoming Rewards;
                </CardTitle>;
                <CardDescription>;
                  What you can redeem your points for;
                </CardDescription>;
              </CardHeader>;
              <CardContent className='space-y-4'>;
                {upcomingRewards && upcomingRewards.map((reward, index) => (;
                  <div
                    key={index}
                    className='flex items-center justify-between p-3 rounded-lg border'>                    <div>;
                      <h4 className='font-medium'>{reward && reward.title}</h4>;
                      <p className='text-sm text-muted-foreground'>;
                        {reward && reward.category}
                      </p>;
                    </div>;
                    <Badge variant='outline'>{reward && reward.cost}</Badge>                  </div>;
                    <Badge variant="outline">{reward && reward.cost}</Badge>;
                {upcomingRewards && upcomingRewards.map((reward, index) => (;
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">;
                    <div>;
                      <h4 className="font-medium">{reward && reward.title}</h4>;
                      <p className="text-sm text-muted-foreground">{reward && reward.category}</p>;
                    </div>;
                    <Badge variant="outline">{reward && reward.cost}</Badge>;
                  </div>;
                ))}
              </CardContent>;
            </Card>;
          </div>;

          <Card className='text-center'>;
            <CardContent className='pt-6'>;
              <Star className='h-12 w-12 text-primary mx-auto mb-4' />;
              <h3 className='text-2xl font-bold mb-2'>Coming Soon</h3>;
              <p className='text-muted-foreground mb-4'>;
                Our full rewards system is launching soon! Sign up now to start;
                earning points immediately.;
              </p>;
              <Button onClick={() => setLoginOpen(true)}>Create Account</Button>            </CardContent>          <Card className="text-center">;
            <CardContent className="pt-6">;
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />;
              <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>;
              <p className="text-muted-foreground mb-4">;
                Our full rewards system is launching soon! Sign up now to start earning points immediately.;
              </p>;
              <Button onClick={() => setLoginOpen(true)}>;
                      </p>                  <div key={index} className="flex items - start gap - 3 p - 3 rounded - lg border">;
                    <div className="text - primary mt - 1">{opportunity.icon}</div>;
                    <div className="flex - 1">;
                      <h4 className="font - medium">{opportunity.title}</h4>;
                      <p className="text - sm text - muted - foreground">{opportunity.description}</p>;
                    </div>;
                    <Badge variant='secondary'>{opportunity.points}</Badge>                  </div>                    </div>;
                    <Badge variant="secondary">{opportunity.points}</Badge>;
                  </div>))}
              </CardContent>;
            </Card>;
            <Card>;
              <CardHeader>;
                <CardTitle className='flex items - center gap - 2'>;
                  <Gift className='h - 5 w - 5' />                  Upcoming Rewards                <CardTitle className="flex items - center gap - 2">;
                  <Gift className="h - 5 w - 5" />;
                  Upcoming Rewards;
                </CardTitle>;
                <CardDescription>;
                  What you can redeem your points for;
                </CardDescription>;
              </CardHeader>;
              <CardContent className='space - y-4'>;
                {upcoming_rewards.map ((reward, index) => (
                  <div;
                    key={index}
                    className='flex items - center justify - between p - 3 rounded - lg border';
                  >                    <div>;
                      <h4 className='font - medium'>{reward.title}</h4>;
                      <p className='text - sm text - muted - foreground'>;
                        {reward.category}
                      </p>;
                    </div>;
                    <Badge variant='outline'>{reward.cost}</Badge>                  </div>;
                    <Badge variant="outline">{reward.cost}</Badge>;
                {upcoming_rewards.map ((reward, index) => (
                  <div key={index} className="flex items - center justify - between p - 3 rounded - lg border">;
                    <div>;
                      <h4 className="font - medium">{reward.title}</h4>;
                      <p className="text - sm text - muted - foreground">{reward.category}</p>;
                    </div>;
                    <Badge variant="outline">{reward.cost}</Badge>;
                  </div>))}
              </CardContent>;
            </Card>;
          </div>;
          <Card className='text - center'>;
            <CardContent className='pt - 6'>;
              <Star className='h - 12 w - 12 text - primary mx - auto mb - 4' />;
              <h3 className='text - 2xl font - bold mb - 2'>Coming Soon</h3>;
              <p className='text - muted - foreground mb - 4'>;
                Our full rewards system is launching soon! Sign up now to start;
                earning points immediately.;
              </p>;
              <Button on_click={() => setLoginOpen (true)}>Create Account</Button>            </CardContent>          <Card className="text - center">;
            <CardContent className="pt - 6">;
              <Star className="h - 12 w - 12 text - primary mx - auto mb - 4" />;
              <h3 className="text - 2xl font - bold mb - 2">Coming Soon</h3>;
              <p className="text - muted - foreground mb - 4">;
                Our full rewards system is launching soon! Sign up now to start earning points immediately.;
              </p>;
              <Button on_click={() => setLoginOpen (true)}>;
                Create Account;
              </Button>;
          </Card>;
        </div>;


    );
  }
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='container py-10 max-w-4xl'>
      <div className='text-center mb-8'>
        <Gift className='h-16 w-16 text-primary mx-auto mb-4' />
        <h1 className='text-4xl font-bold mb-4'>Your Rewards</h1>
        <div className='text-6xl font-bold text-primary mb-2'>
          {loading ? '...' : balance}
        <p className="text-xl text-muted-foreground">Points Available</p>
        {!loading && balance === 0 && (
          <p className='text-sm text-muted-foreground mt-2'>            You haven't earned any points yet. Complete the tasks below to start        </div>
        <p className="text-xl text-muted-foreground">Points Available</p>
        {!loading && balance === 0 && (
ursor/fix-website-loading-errors-and-merge-6662
          <p className="text-sm text-muted-foreground mt-2">
    )
  }
  return (
    <div className='container py-10 max-w-4xl'>
      <div className='text-center mb-8'>
        <Gift className='h-16 w-16 text-primary mx-auto mb-4' />
        <h1 className='text-4xl font-bold mb-4'>Your Rewards</h1>
        <div className='text-6xl font-bold text-primary mb-2'>
          {loading ? '...' : balance}
    <div className="container py-10 max-w-4xl">
      <div className="text-center mb-8">
        <Gift className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Your Rewards</h1>
        <div className="text-6xl font-bold text-primary mb-2">
          {loading ? "..." : balance}
        </div>
        <p className="text-xl text-muted-foreground">Points Available</p>
        {!loading && balance === 0 && (
          <p className='text-sm text-muted-foreground mt-2'>            You haven't earned any points yet. Complete the tasks below to start        </div>
        <p className="text-xl text-muted-foreground">Points Available</p>
        {!loading && balance === 0 && (
          <p className="text-sm text-muted-foreground mt-2">
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <p className="text-sm text-muted-foreground mt-2">
            You haven't earned any points yet. Complete the tasks below to start
            earning and redeem rewards.
          </p>
        )}
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='grid md:grid-cols-2 gap-8 mb-12'>
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <TrendingUp className='h-5 w-5' />              Keep Earning      <div className="grid md:grid-cols-2 gap-8 mb-12">



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Keep Earning
<<<<<<< HEAD
<<<<<<< HEAD
              Keep Earning
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



            </CardTitle>
<<<<<<< HEAD
              More ways to boost your point balance
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
=======
            <CardDescription>
              More ways to boost your point balance
            </CardDescription>
          </CardHeader>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <CardContent className='space-y-4'>
            {earningOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className='flex items-start gap-3 p-3 rounded-lg border'
              >
                <div className='text-primary mt-1'>{opportunity.icon}</div>
                <div className='flex-1'>
                  <h4 className='font-medium'>{opportunity.title}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {opportunity.description}
                  </p>              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
          <CardContent className="space-y-4">
            {earningOpportunities.map((opportunity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
<<<<<<< HEAD
          <CardContent className="space-y-4">
            {earningOpportunities.map((opportunity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />;
      </>);
  }
  return (
    <div className='container py - 10 max - w-4xl'>;
      <div className='text - center mb - 8'>;
        <Gift className='h - 16 w - 16 text - primary mx - auto mb - 4' />;
        <h1 className='text - 4xl font - bold mb - 4'>Your Rewards</h1>;
        <div className='text - 6xl font - bold text - primary mb - 2'>;
          {loading ? '...' : balance}
        </div>;
        <p className='text - xl text - muted - foreground'>Points Available</p>;
        {!loading && balance === 0 && (
          <p className='text - sm text - muted - foreground mt - 2'>            You haven't earned any points yet. Complete the tasks below to start        </div>;
        <p className="text - xl text - muted - foreground">Points Available</p>;
        {!loading && balance === 0 && (
          <p className="text - sm text - muted - foreground mt - 2">;
            You haven't earned any points yet. Complete the tasks below to start;
            earning and redeem rewards.;
          </p>)}
      </div>;
      <div className='grid md:grid - cols - 2 gap - 8 mb - 12'>;
        <Card>;
          <CardHeader>;
            <CardTitle className='flex items - center gap - 2'>;
              <TrendingUp className='h - 5 w - 5' />              Keep Earning      <div className="grid md:grid - cols - 2 gap - 8 mb - 12">;
        <Card>;
          <CardHeader>;
            <CardTitle className="flex items - center gap - 2">;
              <TrendingUp className="h - 5 w - 5" />;
            </CardTitle>;
            <CardDescription>;
              More ways to boost your point balance;
            </CardDescription>;
          </CardHeader>;
          <CardContent className='space - y-4'>;
            {earning_opportunities.map ((opportunity, index) => (
              <div;

                key={index}
                className='flex items - start gap - 3 p - 3 rounded - lg border';
              >;
                <div className='text - primary mt - 1'>{opportunity.icon}</div>;
                <div className='flex - 1'>;
                  <h4 className='font - medium'>{opportunity.title}</h4>;
                  <p className='text - sm text - muted - foreground'>;
                    {opportunity.description}

                  </p>              <div key={index} className="flex items - start gap - 3 p - 3 rounded - lg border">;
                <div className="text - primary mt - 1">{opportunity.icon}</div>;
                <div className="flex - 1">;
                  <h4 className="font - medium">{opportunity.title}</h4>;
                  <p className="text - sm text - muted - foreground">{opportunity.description}</p>;
                </div>;
                <div className='text - right'>;
                  <Badge variant='secondary' className='mb - 1'>;

                    {opportunity.points}
                  </Badge>;
                  <p className='text - xs text - muted - foreground'>;
                    {opportunity.action}

          <CardContent className="space-y-4">
            {earningOpportunities.map((opportunity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <CardContent className="space-y-4">
            {earningOpportunities.map((opportunity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">


                <div className="text-primary mt-1">{opportunity.icon}</div>
<<<<<<< HEAD
                  <h4 className="font-medium">{opportunity.title}</h4>
                  <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                </div>
<<<<<<< HEAD
                <div className='text-right'>
                  <Badge variant='secondary' className='mb-1'>
                    {opportunity.points}
                  </Badge>
                  <p className='text-xs text-muted-foreground'>
                    {opportunity.action}
                  </p>                </div>                </div>



=======
=======
                <div className="flex-1">
                  <h4 className="font-medium">{opportunity.title}</h4>
                  <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className="text-right">
=======
                <div className="text-right">
                  <Badge variant="secondary" className="mb-1">{opportunity.points}</Badge>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <p className="text-xs text-muted-foreground">{opportunity.action}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
            <CardTitle className='flex items-center gap-2'>
              <Gift className='h-5 w-5' />              Available Rewards            <CardTitle className="flex items-center gap-2">
ursor/fix-website-loading-errors-and-merge-6662
              <Gift className="h-5 w-5" />
            <CardTitle className='flex items-center gap-2'>
              <Gift className='h-5 w-5' />              Available Rewards            <CardTitle className="flex items-center gap-2">
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5" />
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <CardTitle className='flex items-center gap-2'>
              <Gift className='h-5 w-5' />              Available Rewards            <CardTitle className="flex items-center gap-2">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <CardTitle className="flex items-center gap-2">

            <CardTitle className="flex items-center gap-2">


              <Gift className="h-5 w-5" />
              Available Rewards
            </CardTitle>
            <CardDescription>
              Redeem your points for these rewards
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <CardContent className='space-y-4'>
            {upcomingRewards.map(reward => (
              <div
                key={reward.id}
<<<<<<< HEAD
                className='flex items-center justify-between p-3 rounded-lg border'
              >
                  <h4 className='font-medium'>{reward.title}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {reward.category}
                  </p>
=======

                  </p>                </div>                </div>;
                <div className="text - right">;
                  <Badge variant="secondary" className="mb - 1">{opportunity.points}</Badge>;
                  <p className="text - xs text - muted - foreground">{opportunity.action}</p>;
                </div>;
              </div>))}
          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader>;
            <CardTitle className='flex items - center gap - 2'>;
              <Gift className='h - 5 w - 5' />              Available Rewards            <CardTitle className="flex items - center gap - 2">;
              <Gift className="h - 5 w - 5" />;
              Available Rewards;
            </CardTitle>;
            <CardDescription>;
              Redeem your points for these rewards;
            </CardDescription>;
          </CardHeader>;
          <CardContent className='space - y-4'>;
            {upcoming_rewards.map (reward => (
              <div;
                key={reward.id}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className='flex items - center justify - between p - 3 rounded - lg border';
              >;
                  <h4 className='font - medium'>{reward.title}</h4>;
                  <p className='text - sm text - muted - foreground'>;

                    {reward.category}
                  </p>;
                </div>;
                <div className='text - right space - y-1'>;
                  <Badge variant='outline' className='mb - 1'>;
                    {reward.cost} pts;
                  </Badge>;
                  {balance >= reward.cost ? (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        </div>;
        <p className='text-xl text-muted-foreground'>Points Available</p>;
        {!loading && balance === 0 && (;
          <p className='text-sm text-muted-foreground mt-2'>            You haven't earned any points yet. Complete the tasks below to start        </div>;
        <p className="text-xl text-muted-foreground">Points Available</p>;
        {!loading && balance === 0 && (;
          <p className="text-sm text-muted-foreground mt-2">;
            You haven't earned any points yet. Complete the tasks below to start;
            earning and redeem rewards.;
          </p>;
        )}
      </div>;

      <div className='grid md:grid-cols-2 gap-8 mb-12'>;
        <Card>;
          <CardHeader>;
            <CardTitle className='flex items-center gap-2'>;
              <TrendingUp className='h-5 w-5' />              Keep Earning      <div className="grid md:grid-cols-2 gap-8 mb-12">;
        <Card>;
          <CardHeader>;
            <CardTitle className="flex items-center gap-2">;
              <TrendingUp className="h-5 w-5" />;
            </CardTitle>;
            <CardDescription>;
              More ways to boost your point balance;
            </CardDescription>;
          </CardHeader>;
          <CardContent className='space-y-4'>;
            {earningOpportunities && earningOpportunities.map((opportunity, index) => (;
              <div
                key={index}
                className='flex items-start gap-3 p-3 rounded-lg border'>;
                <div className='text-primary mt-1'>{opportunity && opportunity.icon}</div>;
                <div className='flex-1'>;
                  <h4 className='font-medium'>{opportunity && opportunity.title}</h4>;
                  <p className='text-sm text-muted-foreground'>;
                    {opportunity && opportunity.description}
                  </p>              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">;
                <div className="text-primary mt-1">{opportunity && opportunity.icon}</div>;
                <div className="flex-1">;
                  <h4 className="font-medium">{opportunity && opportunity.title}</h4>;
                  <p className="text-sm text-muted-foreground">{opportunity && opportunity.description}</p>;
                </div>;
                <div className='text-right'>;
                  <Badge variant='secondary' className='mb-1'>;
                    {opportunity && opportunity.points}
                  </Badge>;
                  <p className='text-xs text-muted-foreground'>;
                    {opportunity && opportunity.action}
                  </p>                </div>                </div>;
                <div className="text-right">;
                  <Badge variant="secondary" className="mb-1">{opportunity && opportunity.points}</Badge>;
                  <p className="text-xs text-muted-foreground">{opportunity && opportunity.action}</p>;
                </div>;
              </div>;
            ))}
          </CardContent>;
        </Card>;

        <Card>;
          <CardHeader>;
            <CardTitle className='flex items-center gap-2'>;
              <Gift className='h-5 w-5' />              Available Rewards            <CardTitle className="flex items-center gap-2">;
              <Gift className="h-5 w-5" />;
              Available Rewards;
            </CardTitle>;
            <CardDescription>;
              Redeem your points for these rewards;
            </CardDescription>;
          </CardHeader>;
          <CardContent className='space-y-4'>;
            {upcomingRewards && upcomingRewards.map(reward => (;
              <div
                key={reward && reward.id}
                className='flex items-center justify-between p-3 rounded-lg border'>;
                  <h4 className='font-medium'>{reward && reward.title}</h4>;
                  <p className='text-sm text-muted-foreground'>;
                    {reward && reward.category}
                  </p>;
                </div>;
                <div className='text-right space-y-1'>;
                  <Badge variant='outline' className='mb-1'>;
                    {reward && reward.cost} pts;
                  </Badge>;
                  {balance >= reward && reward.cost ? (;
                    <Button
                      size='sm'
                      onClick={() => handleRedeem(reward)}
                      disabled={redeeming}

                    >                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>;
                  ) : (;
                    <p className='text-xs text-muted-foreground'>;
                      Need more points;
                    </p>                  )}
                    <p className="text-xs text-muted-foreground">Need more points</p>;
                <div>;
                  <h4 className="font-medium">{reward && reward.title}</h4>;
                  <p className="text-sm text-muted-foreground">{reward && reward.category}</p>;
                </div>;
                <div className="text-right space-y-1">;
                  <Badge variant="outline" className="mb-1">{reward && reward.cost} pts</Badge>;
                  {balance >= reward && reward.cost ? (;
                    <Button size="sm" onClick={() => handleRedeem(reward)} disabled={redeeming}>;
                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>;
                  ) : (;
                    <p className="text-xs text-muted-foreground">Need more points</p>;

          <CardContent className="space-y-4">
            {upcomingRewards.map((reward) => (
              <div key={reward.id} className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <h4 className="font-medium">{reward.title}</h4>
                  <p className="text-sm text-muted-foreground">{reward.category}</p>
<<<<<<< HEAD
<<<<<<< HEAD
                </div>
                <div className="text-right space-y-1">
                  <Badge variant="outline" className="mb-1">{reward.cost} pts</Badge>
                  {balance >= reward.cost ? (
                    <Button
                      size='sm'
                      onClick={() => handleRedeem(reward)}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    <Button;
                      size='sm';
                      on_click={() => handle_redeem (reward)}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      disabled={redeeming}
                    >                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>
                  ) : (
                    <p className='text-xs text-muted-foreground'>
                      Need more points
                    </p>                  )}
<<<<<<< HEAD
<<<<<<< HEAD

                </div>
                <div className="text-right space-y-1">
                  <Badge variant="outline" className="mb-1">{reward.cost} pts</Badge>
                  {balance >= reward.cost ? (

                    <Button size="sm" onClick={() => handleRedeem(reward)} disabled={redeeming}>
                    <p className="text-xs text-muted-foreground">Need more points</p>
                <div>
                  <h4 className="font-medium">{reward.title}</h4>
                  <p className="text-sm text-muted-foreground">{reward.category}</p>
                </div>
                <div className="text-right space-y-1">
                  <Badge variant="outline" className="mb-1">{reward.cost} pts</Badge>
                  {balance >= reward.cost ? (
                    <Button size="sm" onClick={() => handleRedeem(reward)} disabled={redeeming}>
                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>
                  ) : (
                    <p className="text-xs text-muted-foreground">Need more points</p>
                  )}
                </div>
              </div>
                    <Button size="sm" onClick={() => handleRedeem(reward)} disabled={redeeming}>
                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>
                  ) : (
                    <p className="text-xs text-muted-foreground">Need more points</p>
                  )}
                </div>;
              </div>;
            ))}
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <History className='h-5 w-5' />            Points History          <CardTitle className="flex items-center gap-2">
          <CardTitle className='flex items-center gap-2'>
            <History className='h-5 w-5' />            Points History          <CardTitle className="flex items-center gap-2">
ursor/fix-website-loading-errors-and-merge-6662
            ))}

          <CardTitle className="flex items-center gap-2">
          <CardTitle className='flex items-center gap-2'>
            <History className='h-5 w-5' />            Points History          <CardTitle className="flex items-center gap-2">
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <p className="text - xs text - muted - foreground">Need more points</p>;
                <div>;
                  <h4 className="font - medium">{reward.title}</h4>;
                  <p className="text - sm text - muted - foreground">{reward.category}</p>;
                </div>;
                <div className="text - right space - y-1">;
                  <Badge variant="outline" className="mb - 1">{reward.cost} pts</Badge>;

                  {balance >= reward.cost ? (
                    <Button size="sm" on_click={() => handle_redeem (reward)} disabled={redeeming}>;

                </div>
                <div className="text-right space-y-1">
                  <Badge variant="outline" className="mb-1">{reward.cost} pts</Badge>
                  {balance >= reward.cost ? (

                    <Button size="sm" onClick={() => handleRedeem(reward)} disabled={redeeming}>
                      {redeeming ? 'Processing...' : 'Redeem'}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


            ))}

=======


            ))}
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <History className='h-5 w-5' />            Points History          <CardTitle className="flex items-center gap-2">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <CardTitle className="flex items-center gap-2">

          <CardTitle className="flex items-center gap-2">


            <History className="h-5 w-5" />
            Points History
          </CardTitle>
          <CardDescription>Your recent points activity</CardDescription>
        </CardHeader>
        <CardContent>
          {ledger.length === 0 ? (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <p className='text-center py-8 text-muted-foreground'>
              No points activity yet.
            </p>
            <ScrollArea className='h-64'>
              <div className='space-y-2 mt-2'>
<<<<<<< HEAD
                      <p className="font-medium capitalize">{entry.reason || 'adjustment'}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(entry.created_at), { addSuffix: true })}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
ursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <p className="text-center py-8 text-muted-foreground">No points activity yet.</p>
          ) : (
            <ScrollArea className="h-64">
              <div className="space-y-2 mt-2">


                {ledger.map(entry => (
<<<<<<< HEAD
                  <div key={entry.id} className="flex items-center justify-between py-2 border-b">
                    <div>
<<<<<<< HEAD
                {ledger.map(entry => (
                  <div key={entry.id} className="flex items-center justify-between py-2 border-b">
                    <div>
                      <p className='font-medium capitalize'>
                        {entry.reason |'adjustment'}
                      </p>
                      <p className='text-xs text-muted-foreground'>
                        {formatDistanceToNow(new Date(entry.created_at), {
                          addSuffix: true
=======
=======
                  <div
                    key={entry.id}
                    className='flex items-center justify-between py-2 border-b'
                  >
                    <div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </CardContent>;
        </Card>;
      </div>;

      <Card>;
        <CardHeader>;
          <CardTitle className='flex items-center gap-2'>;
            <History className='h-5 w-5' />            Points History          <CardTitle className="flex items-center gap-2">;
            <History className="h-5 w-5" />;
            Points History;
          </CardTitle>;
          <CardDescription>Your recent points activity</CardDescription>;
        </CardHeader>;
        <CardContent>;
          {ledger && ledger.length === 0 ? (;
            <p className='text-center py-8 text-muted-foreground'>;
              No points activity yet.;
            </p>;
            <ScrollArea className='h-64'>;
              <div className='space-y-2 mt-2'>;
                {ledger && ledger.map(entry => (;
                  <div
                    key={entry && entry.id}
                    className='flex items-center justify-between py-2 border-b'>;
                    <div>;
                      <p className='font-medium capitalize'>;
                        {entry && entry.reason || 'adjustment'}
                      </p>;
                      <p className='text-xs text-muted-foreground'>;
                        {formatDistanceToNow(new Date(entry && entry.created_at), {;
                          addSuffix: true,;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        })}
                      </p>
                    </div>
                    <Badge
                      variant='outline'
                      className={
<<<<<<< HEAD
                        entry.delta >= 0
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }                      variant="outline"
                      className = {entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',}
                    >
                      {entry.delta >= 0 ? '+' : ''}                      {entry.delta} pts                    </Badge>
                  </div>
                      <p className="font-medium capitalize">{entry.reason || 'adjustment'}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(entry.created_at), { addSuffix: true })}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
=======
=======
                        })}
                      </p>;
                    </div>;
                    <Badge
                      variant='outline'
                      className={
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                        entry && entry.delta>= 0;
                          ? 'bg-green-100 text-green-800';
                          : 'bg-red-100 text-red-800';
                      }                      variant="outline";
                      className = {entry && entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    >;
                      {entry.delta >= 0 ? '+' : ''}
                      {entry.delta} pts;
                    </Badge>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                ))}
              </div>
            </ScrollArea>
          )}
        </CardContent>
      </Card>


      <Card className='text-center'>
        <CardContent className='pt-6'>
          <Star className='h-12 w-12 text-primary mx-auto mb-4' />
          <h3 className='text-2xl font-bold mb-2'>
            Full Rewards System Coming Soon
          </h3>
          <p className='text-muted-foreground mb-4'>
            We're finalizing the redemption system. Keep earning points -
            they'll be ready to spend soon!
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ))}
              </div>;
            </ScrollArea>;
          )}




      <Card className="text-center">
        <CardContent className="pt-6">
          <Star className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Full Rewards System Coming Soon</h3>
          <p className="text-muted-foreground mb-4">
            We're finalizing the redemption system. Keep earning points - they'll be ready to spend soon!
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </p>
            <Button variant="outline" asChild>
              <Link href="/marketplace">Browse Marketplace</Link>
            </Button>
<<<<<<< HEAD
            <Button variant='outline' asChild>
              <Link href='/community'>Join Community</Link>            <Button variant="outline" asChild>
ursor/fix-website-loading-errors-and-merge-6662
              <Link href="/community">Join Community</Link>
            <Button variant='outline' asChild>
              <Link href='/community'>Join Community</Link>            <Button variant="outline" asChild>
            <Button variant="outline" asChild>
              <Link href="/community">Join Community</Link>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======



          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/marketplace">Browse Marketplace</Link>
            </Button>
            <Button variant='outline' asChild>
              <Link href='/community'>Join Community</Link>            <Button variant="outline" asChild>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button variant="outline" asChild>


              <Link href="/community">Join Community</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </CardContent>;
      </Card>;

      <Card className='text-center'>;
        <CardContent className='pt-6'>;
          <Star className='h-12 w-12 text-primary mx-auto mb-4' />;
          <h3 className='text-2xl font-bold mb-2'>;
            Full Rewards System Coming Soon;
          </h3>;
          <p className='text-muted-foreground mb-4'>;
            We're finalizing the redemption system. Keep earning points -;
            they'll be ready to spend soon!;
          </p>;
          <div className='flex gap-4 justify-center'>;
            <Button variant='outline' asChild>;
              <Link href='/marketplace'>Browse Marketplace</Link>          </p>;
          <div className="flex gap-4 justify-center">;
            <Button variant="outline" asChild>;
              <Link href="/marketplace">Browse Marketplace</Link>;
            </Button>;
            <Button variant='outline' asChild>;
              <Link href='/community'>Join Community</Link>            <Button variant="outline" asChild>;
              <Link href="/community">Join Community</Link>;
            </Button>;
            <Button variant='outline' asChild>;
                    </Button>) : (
                    <p className="text - xs text - muted - foreground">Need more points</p>)}
                </div>;
              </div>))}
          </CardContent>;
        </Card>;
      </div>;
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items - center gap - 2'>;
            <History className='h - 5 w - 5' />            Points History          <CardTitle className="flex items - center gap - 2">;
            <History className="h - 5 w - 5" />;
            Points History;
          </CardTitle>;
          <CardDescription > Your recent points activity</CardDescription>;
        </CardHeader>;
        <CardContent>;
          {ledger.length === 0 ? (
            <p className='text - center py - 8 text - muted - foreground'>;
              No points activity yet.;
            </p>;
            <ScrollArea className='h - 64'>;
              <div className='space - y-2 mt - 2'>;
                {ledger.map (entry => (
                  <div;
                    key={entry.id}
                    className='flex items - center justify - between py - 2 border - b';
                  >;
                    <div>;
                      <p className='font - medium capitalize'>;
                        {entry.reason || 'adjustment'}
                      </p>;
                      <p className='text - xs text - muted - foreground'>;
                        {formatDistanceToNow (new Date (entry.created_at), {
                          add_suffix: true,
                        })}
                      </p>;
                    </div>;
                    <Badge;
                      variant='outline';
                      className={
                        entry.delta >= 0;
                          ? 'bg - green - 100 text - green - 800';
                          : 'bg - red - 100 text - red - 800';
                      }                      variant="outline";
                      class_name = {entry.delta >= 0 ? 'bg - green - 100 text - green - 800' : 'bg - red - 100 text - red - 800', }
                    >;
                      {entry.delta >= 0 ? '+' : ''}                      {entry.delta} pts                    </Badge>;
                  </div>))}
              </div>;
            </ScrollArea>)}
        </CardContent>;
      </Card>;
      <Card className='text - center'>;
        <CardContent className='pt - 6'>;
          <Star className='h - 12 w - 12 text - primary mx - auto mb - 4' />;
          <h3 className='text - 2xl font - bold mb - 2'>;
            Full Rewards System Coming Soon;
          </h3>;
          <p className='text - muted - foreground mb - 4'>;
            We're finalizing the redemption system. Keep earning points -;
            they'll be ready to spend soon!;
          </p>;
          <div className='flex gap - 4 justify - center'>;
            <Button variant='outline' as_child>;
              <Link href='/marketplace'>Browse Marketplace</Link>          </p>;
          <div className="flex gap - 4 justify - center">;
            <Button variant="outline" as_child>;
              <Link href="/marketplace">Browse Marketplace</Link>;
            </Button>;
            <Button variant='outline' as_child>;
              <Link href='/community'>Join Community</Link>            <Button variant="outline" as_child>;
              <Link href="/community">Join Community</Link>;
            </Button>;
            <Button variant='outline' as_child>;

              <Link href='/community'>Join Community</Link>            </Button>;
          </div>;
        </CardContent>;
      </Card>;


  );
}
  );
}
    </div>);
}

;
<<<<<<< HEAD

  )
}
<<<<<<< HEAD
  );
}
;
  )
}
;
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
