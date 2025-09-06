<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useState } from 'react';

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
} from 'lucide-react';
import { use_auth } from '@/hooks / use_auth';
import { use_points } from '@/hooks / use_points';
import {
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle;
} from '@/components/ui/card';import { Button } from '@/components/ui/button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD
=======
  Card,
  CardContent,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
<<<<<<< HEAD

  Card,
  CardContent,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';import { Button } from '@/components/ui/button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';
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


=======
export default function PointsPage() {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const { isAuthenticated, user } = useAuth();
  const { ledger, balance, loading, fetchLedger } = usePoints();
  const [loginOpen, setLoginOpen] = useState(false);
  const [redeeming, setRedeeming] = useState(false);

  async function handleRedeem(): any (reward: {;
    id: string;
    cost: number;
    title: string;
<<<<<<< HEAD

<<<<<<< HEAD
  }) {    if (!user?.id) return;  async function handleRedeem(reward: { id: string, cost: number, title: string }) {



=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default function PointsPage() { const { isAuthenticated, user  } = useAuth(),
  const { ledger, balance, loading, fetchLedger  } = usePoints(),
  const [ loginOpen, setLoginOpen ] = useState(false),
  const [ redeeming, setRedeeming ] = useState(false),


  async function handleRedeem(reward: { id: string, cost: number, title: string }) {
<<<<<<< HEAD
=======
  }) {    if (!user?.id) return;  async function handleRedeem(reward: { id: string, cost: number, title: string }) {

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    if (!user?.id) return;
    setRedeeming(true);
    try {
      await fetch('/api/points/redeem', {

<<<<<<< HEAD
<<<<<<< HEAD
} from '@/components / ui / card';import { Button } from '@/components / ui / button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';
import { use_auth } from '@/hooks / use_auth';
import { use_points } from '@/hooks / use_points';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
=======
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

        body: JSON.stringify({
          userId: user.id
          cost: reward.cost
          reward: reward.title
        })
<<<<<<< HEAD
import React, { useState } from 'react',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      });
      await fetch_ledger ();
    } finally {
<<<<<<< HEAD
<<<<<<< HEAD

  }) {    if (!user?.id) return;  async function handleRedeem(): any (reward: { id: string, cost: number, title: string }) {;
    if (!user?.id) return;
    setRedeeming(true);
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    try {;
      await fetch('/api/points/redeem', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          userId: user && user.id,;
          cost: reward && reward.cost,;
          reward: reward && reward.title,;
        }),;
      });
      await fetchLedger();
    } finally {;
<<<<<<< HEAD
<<<<<<< HEAD
      setRedeeming(false);    }      });
      await fetchLedger();
    } finally {;

      setRedeeming(false);
=======
=======
      setRedeeming(false);

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, cost: reward.cost, reward: reward.title })
      });
      await fetchLedger()
    } finally {
      setRedeeming(false)

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


    }
  }

  const earningOpportunities = [
    {
      icon: <Users className='h - 5 w - 5' />,

      title: 'Sign Up & Profile Setup',
      description: 'Complete your profile and verify your email',
      points: '50 pts',
      action: is_authenticated ? '✓ Completed' : 'Get Started',
    },

      icon: <ShoppingBag className='h - 5 w - 5' />,


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
      setRedeeming(false);
    }
  }

  const earningOpportunities = [
    {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      icon: <Users className='h-5 w-5' />
      title: 'Sign Up & Profile Setup'
      description: 'Complete your profile and verify your email'
      points: '50 pts'
      action: isAuthenticated ? ' Completed' : 'Get Started'
    }
      icon: <ShoppingBag className='h-5 w-5' />
      title: 'First Purchase'
      description: 'Make your first purchase on the marketplace'
      points: '100 pts'
      action: 'Browse Marketplace'
    }
<<<<<<< HEAD
=======
      icon: <Users className="h-5 w-5" />,
      title: "Sign Up & Profile Setup",
      description: "Complete your profile and verify your email",
      points: "50 pts",
      action: isAuthenticated ? "✓ Completed" : "Get Started"
    },
    {
      icon: <ShoppingBag className="h-5 w-5" />,
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      title: "First Purchase",
      description: "Make your first purchase on the marketplace",
      points: "100 pts",
      action: "Browse Marketplace"
<<<<<<< HEAD

    },  ];
;
  const upcoming_rewards = [;
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },      title: "Refer Friends",

      description: "Invite friends to join Zion marketplace",
      points: "200 pts per referral",
      action: "Share Referral Link";
    }

    {
      icon: <MessageSquare className='h-5 w-5' />
      title: 'Community Engagement'
      description: 'Post in the community or comment on discussions'
      points: '25 pts per post'
      action: 'Join Community'
    }
    {
      icon: <Users className='h-5 w-5' />
      title: 'Refer Friends'
      description: 'Invite friends to join Zion marketplace'
      points: '200 pts per referral'
      action: 'Share Referral Link'
    },  ];
  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },      title: "Refer Friends"
      description: "Invite friends to join Zion marketplace"
      points: "200 pts per referral"
      action: "Share Referral Link"
    }
  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' }
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
=======
    },
    {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      id: 'coupon25'
      title: '$25 Off Coupon'
      cost: 2000
      category: 'Discount'
    }
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' }
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

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
      description: "Invite friends to join Zion marketplace",
      points: "200 pts per referral",
      action: "Share Referral Link"
    }
<<<<<<< HEAD
=======
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
      description: "Invite friends to join Zion marketplace",
      points: "200 pts per referral",
      action: "Share Referral Link"
    }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



  if (!isAuthenticated) {;
    return (

  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },
    { id: 'premium1', title: 'Premium Features (1 month)', cost: 1000, category: 'Subscription' },;
    { id: 'swag', title: 'Zion Swag Pack', cost: 1500, category: 'Merchandise' },;
    { id: 'coupon25', title: '$25 Off Coupon', cost: 2000, category: 'Discount' };
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' }
  ],

  if (!isAuthenticated) {
    return (
      <>
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
        <div className="container py-10 max-w-4xl">
          <div className="text-center mb-8">
            <Gift className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Zion Rewards Program</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Earn points for every action you take and redeem them for exclusive rewards!
            </p>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



            <Button onClick={() => setLoginOpen(true)} size="lg">
              Join Now to Start Earning
            </Button>
          </div>
<<<<<<< HEAD
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <TrendingUp className='h-5 w-5' />                  How to Earn Points          <div className="grid md:grid-cols-2 gap-8 mb-12">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



          <div className="grid md:grid-cols-2 gap-8 mb-12">
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                  How to Earn Points


<<<<<<< HEAD
                </CardTitle>
                <CardDescription>
                  Multiple ways to accumulate rewards
                </CardDescription>
              </CardHeader>

=======
                  How to Earn Points
                  How to Earn Points
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </CardTitle>
                  Multiple ways to accumulate rewards
                </CardDescription>
              </CardHeader>
<<<<<<< HEAD
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
              <CardContent className="space-y-4">
                {earningOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    key={index}
                    className='flex items - start gap - 3 p - 3 rounded - lg border';
                  >;
                    <div className='text - primary mt - 1'>{opportunity.icon}</div>;
                    <div className='flex - 1'>;
                      <h4 className='font - medium'>{opportunity.title}</h4>;
<<<<<<< HEAD
                      <p className='text - sm text - muted - foreground'>;
                        {opportunity.description}
            </CardTitle>
            <CardDescription>
              More ways to boost your point balance
            </CardDescription>
          </CardHeader>

=======
                      <p className='text - sm text - muted - foreground'>;
                        {opportunity.description}

              <CardContent className="space-y-4">
                {earningOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                    <div className="text-primary mt-1">{opportunity.icon}</div>
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

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



                    <Badge variant="secondary">{opportunity.points}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
<<<<<<< HEAD
                <CardTitle className='flex items-center gap-2'>
                  <Gift className='h-5 w-5' />                  Upcoming Rewards                <CardTitle className="flex items-center gap-2">
ursor/fix-website-loading-errors-and-merge-6662
                  <Gift className="h-5 w-5" />
                <CardTitle className='flex items-center gap-2'>
                  <Gift className='h-5 w-5' />                  Upcoming Rewards                <CardTitle className="flex items-center gap-2">
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5" />
                <CardTitle className="flex items-center gap-2">

                <CardTitle className="flex items-center gap-2">


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <Gift className="h-5 w-5" />
                  Upcoming Rewards
                </CardTitle>
                <CardDescription>
                  What you can redeem your points for
                </CardDescription>
              </CardHeader>
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


              <CardContent className="space-y-4">
                {upcomingRewards.map((reward, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <h4 className="font-medium">{reward.title}</h4>
                      <p className="text-sm text-muted-foreground">{reward.category}</p>
                    </div>
                    <Badge variant="outline">{reward.cost}</Badge>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



                    <Badge variant="outline">{reward.cost}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
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
            </CardContent>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



          </Card>
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
      </>


<<<<<<< HEAD
    );
  }
  return (
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
        </div>
        <p className="text-xl text-muted-foreground">Points Available</p>
        {!loading && balance === 0 && (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <p className="text-sm text-muted-foreground mt-2">
            You haven't earned any points yet. Complete the tasks below to start
            earning and redeem rewards.
          </p>
        )}
      </div>
<<<<<<< HEAD
      <div className='grid md:grid-cols-2 gap-8 mb-12'>
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <TrendingUp className='h-5 w-5' />              Keep Earning      <div className="grid md:grid-cols-2 gap-8 mb-12">



      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Keep Earning
              Keep Earning
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



            </CardTitle>
              More ways to boost your point balance
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
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
          <CardContent className="space-y-4">
            {earningOpportunities.map((opportunity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                key={index}
                className='flex items - start gap - 3 p - 3 rounded - lg border';
              >;
                <div className='text - primary mt - 1'>{opportunity.icon}</div>;
                <div className='flex - 1'>;
                  <h4 className='font - medium'>{opportunity.title}</h4>;
                  <p className='text - sm text - muted - foreground'>;
                    {opportunity.description}
<<<<<<< HEAD
=======

          <CardContent className="space-y-4">
            {earningOpportunities.map((opportunity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                <div className="text-primary mt-1">{opportunity.icon}</div>
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

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{opportunity.action}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
<<<<<<< HEAD
            <CardTitle className='flex items-center gap-2'>
              <Gift className='h-5 w-5' />              Available Rewards            <CardTitle className="flex items-center gap-2">
ursor/fix-website-loading-errors-and-merge-6662
              <Gift className="h-5 w-5" />
            <CardTitle className='flex items-center gap-2'>
              <Gift className='h-5 w-5' />              Available Rewards            <CardTitle className="flex items-center gap-2">
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5" />
            <CardTitle className="flex items-center gap-2">

            <CardTitle className="flex items-center gap-2">


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <Gift className="h-5 w-5" />
              Available Rewards
            </CardTitle>
            <CardDescription>
              Redeem your points for these rewards
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
          <CardContent className='space-y-4'>
            {upcomingRewards.map(reward => (
              <div
                key={reward.id}
                className='flex items-center justify-between p-3 rounded-lg border'
              >
                  <h4 className='font-medium'>{reward.title}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {reward.category}
                  </p>


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    <Button
                      size='sm'
                      onClick={() => handleRedeem(reward)}
                      disabled={redeeming}
          <CardContent className="space-y-4">
            {upcomingRewards.map((reward) => (
              <div key={reward.id} className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <h4 className="font-medium">{reward.title}</h4>
                  <p className="text-sm text-muted-foreground">{reward.category}</p>
<<<<<<< HEAD
<<<<<<< HEAD

                    <Button;
                      size='sm';
                      on_click={() => handle_redeem (reward)}
=======
                </div>
                <div className="text-right space-y-1">
                  <Badge variant="outline" className="mb-1">{reward.cost} pts</Badge>
                  {balance >= reward.cost ? (
                    <Button
                      size='sm'
                      onClick={() => handleRedeem(reward)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      disabled={redeeming}
                    >                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>) : (
                    <p className='text - xs text - muted - foreground'>;
                      Need more points;
                    </p>                  )}
<<<<<<< HEAD
<<<<<<< HEAD
                    <p className="text - xs text - muted - foreground">Need more points</p>;
                <div>;
                  <h4 className="font - medium">{reward.title}</h4>;
                  <p className="text - sm text - muted - foreground">{reward.category}</p>;
                </div>;
                <div className="text - right space - y-1">;
                  <Badge variant="outline" className="mb - 1">{reward.cost} pts</Badge>;

                  {balance >= reward.cost ? (
                    <Button size="sm" on_click={() => handle_redeem (reward)} disabled={redeeming}>;
=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </div>
                <div className="text-right space-y-1">
                  <Badge variant="outline" className="mb-1">{reward.cost} pts</Badge>
                  {balance >= reward.cost ? (

<<<<<<< HEAD
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
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            ))}
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
<<<<<<< HEAD
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


            ))}

          <CardTitle className="flex items-center gap-2">

          <CardTitle className="flex items-center gap-2">


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <History className="h-5 w-5" />
            Points History
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </CardTitle>
          <CardDescription>Your recent points activity</CardDescription>
        </CardHeader>
        <CardContent>
          {ledger.length === 0 ? (
<<<<<<< HEAD
<<<<<<< HEAD


=======
            <p className='text-center py-8 text-muted-foreground'>
              No points activity yet.
            </p>
            <ScrollArea className='h-64'>
              <div className='space-y-2 mt-2'>
                      <p className="font-medium capitalize">{entry.reason || 'adjustment'}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(entry.created_at), { addSuffix: true })}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <p className="text-center py-8 text-muted-foreground">No points activity yet.</p>
          ) : (
            <ScrollArea className="h-64">
              <div className="space-y-2 mt-2">


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {ledger.map(entry => (
<<<<<<< HEAD
                  <div
                    key={entry.id}
                    className='flex items-center justify-between py-2 border-b'
                  >
                    <div>
<<<<<<< HEAD

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

=======
                  <div key={entry.id} className="flex items-center justify-between py-2 border-b">
                    <div>
                {ledger.map(entry => (
                  <div key={entry.id} className="flex items-center justify-between py-2 border-b">
                    <div>
                      <p className='font-medium capitalize'>
                        {entry.reason |'adjustment'}
                      </p>
                      <p className='text-xs text-muted-foreground'>
                        {formatDistanceToNow(new Date(entry.created_at), {
                          addSuffix: true
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                        })}
                      </p>;
                    </div>;
                    <Badge
                      variant='outline'
                      className={
<<<<<<< HEAD


                        entry && entry.delta>= 0;
                          ? 'bg-green-100 text-green-800';
                          : 'bg-red-100 text-red-800';
                      }                      variant="outline";
                      className = {entry && entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',}
                    >;
                      {entry && entry.delta >= 0 ? '+' : ''}                      {entry && entry.delta} pts                    </Badge>;
                  </div>;




=======
=======
                      variant='outline'
                      className={
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                        entry.delta >= 0
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }                      variant="outline"
                      className = {entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',}
                    >
                      {entry.delta >= 0 ? '+' : ''}                      {entry.delta} pts                    </Badge>
                  </div>
                      variant="outline"
                      className={entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                    >;
                      {entry.delta >= 0 ? '+' : ''}
                      {entry.delta} pts;
                    </Badge>;
                  </div>;
<<<<<<< HEAD
=======




>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                ))}
              </div>
            </ScrollArea>
          )}
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                ))}
              </div>;
            </ScrollArea>;
          )}




=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <Card className="text-center">
        <CardContent className="pt-6">
          <Star className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Full Rewards System Coming Soon</h3>
          <p className="text-muted-foreground mb-4">
            We're finalizing the redemption system. Keep earning points - they'll be ready to spend soon!
<<<<<<< HEAD
<<<<<<< HEAD



          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/marketplace">Browse Marketplace</Link>
            </Button>

=======
=======



        </CardContent>
      </Card>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          </p>
          <div className="flex gap-4 justify-center">
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

            <Button variant="outline" asChild>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


              <Link href="/community">Join Community</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <Link href='/community'>Join Community</Link>            </Button>;
          </div>;
        </CardContent>;
      </Card>;
    </div>;
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
  );
}
;
  )
}
;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  )
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
