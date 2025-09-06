import React, { useState } from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  Gift,
  Star,
  Users,
  ShoppingBag,
  MessageSquare,
  TrendingUp,
  History,;
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
<<<<<<< HEAD
} from '@/components/ui/card';import { Button } from '@/components/ui/button';
=======
} from '@/components/ui/card';
=======
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { Button } from '@/components/ui/button';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { LoginModal } from '@/components/auth/LoginModal';
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function PointsPage() {
  const { isAuthenticated, user } = useAuth();
  const { ledger, balance, loading, fetchLedger } = usePoints();
  const [loginOpen, setLoginOpen] = useState(false);
  const [redeeming, setRedeeming] = useState(false);

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  async function handleRedeem(reward: {
    id: string;
    cost: number;
    title: string;
<<<<<<< HEAD
  }) {    if (!user?.id) return;
=======
  }) {
=======
export default function PointsPage() { const { isAuthenticated, user  } = useAuth(),
  const { ledger, balance, loading, fetchLedger  } = usePoints(),
  const [ loginOpen, setLoginOpen ] = useState(false),
  const [ redeeming, setRedeeming ] = useState(false),


  async function handleRedeem(reward: { id: string, cost: number, title: string }) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  async function handleRedeem(reward: { id: string, cost: number, title: string }) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    if (!user?.id) return;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    setRedeeming(true);
    try {
      await fetch('/api/points/redeem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        body: JSON.stringify({
          userId: user.id,
          cost: reward.cost,
          reward: reward.title,
        }),
<<<<<<< HEAD
=======
=======
        body: JSON.stringify({ userId: user.id, cost: reward.cost, reward: reward.title })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      });
      await fetchLedger();
    } finally {
<<<<<<< HEAD
      setRedeeming(false);    }
=======
<<<<<<< HEAD
      setRedeeming(false);
=======
        body: JSON.stringify({ userId: user.id, cost: reward.cost, reward: reward.title })
      });
      await fetchLedger()
    } finally {
      setRedeeming(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setRedeeming(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }

  const earningOpportunities = [
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      icon: <Users className='h-5 w-5' />,
      title: 'Sign Up & Profile Setup',
      description: 'Complete your profile and verify your email',
      points: '50 pts',
      action: isAuthenticated ? '✓ Completed' : 'Get Started',
    },
<<<<<<< HEAD
=======
=======
      icon: <Users className="h-5 w-5" />,
      title: "Sign Up & Profile Setup",
      description: "Complete your profile and verify your email",
      points: "50 pts",
      action: isAuthenticated ? "✓ Completed" : "Get Started"
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    {
      icon: <ShoppingBag className='h-5 w-5' />,
      title: 'First Purchase',
      description: 'Make your first purchase on the marketplace',
      points: '100 pts',
      action: 'Browse Marketplace',
    },
    {
      icon: <MessageSquare className='h-5 w-5' />,
      title: 'Community Engagement',
      description: 'Post in the community or comment on discussions',
      points: '25 pts per post',
      action: 'Join Community',
    },
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      icon: <Users className='h-5 w-5' />,
      title: 'Refer Friends',
      description: 'Invite friends to join Zion marketplace',
      points: '200 pts per referral',
      action: 'Share Referral Link',
<<<<<<< HEAD
    },  ];

  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },
=======
    },
=======
      icon: <Users className="h-5 w-5" />,
      title: "Sign Up & Profile Setup",
      description: "Complete your profile and verify your email",
      points: "50 pts",
      action: isAuthenticated ? "✓ Completed" : "Get Started"
    };
    {
      icon: <ShoppingBag className = "h-5 w-5" />,
      title: "First Purchase",
      description: "Make your first purchase on the marketplace",
      points: "100 pts",
      action: "Browse Marketplace"
    };
    {
      icon: <MessageSquare className = "h-5 w-5" />,
      title: "Community Engagement",
      description: "Post in the community or comment on discussions",
      points: "25 pts per post",
      action: "Join Community"
    };
    {
      icon: <Users className = "h-5 w-5" />,
=======
      icon: <Users className="h-5 w-5" />,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      title: "Refer Friends",
      description: "Invite friends to join Zion marketplace",
      points: "200 pts per referral",
      action: "Share Referral Link"
    }
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];

  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
=======
=======
    { id: 'premium1', title: 'Premium Features (1 month)', cost: 1000, category: 'Subscription' },
    { id: 'swag', title: 'Zion Swag Pack', cost: 1500, category: 'Merchandise' },
    { id: 'coupon25', title: '$25 Off Coupon', cost: 2000, category: 'Discount' },
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  ];

  if (!isAuthenticated) {
    return (
      <>
        <div className='container py-10 max-w-4xl'>
          <div className='text-center mb-8'>
            <Gift className='h-16 w-16 text-primary mx-auto mb-4' />
            <h1 className='text-4xl font-bold mb-4'>Zion Rewards Program</h1>
            <p className='text-xl text-muted-foreground mb-6'>
              Earn points for every action you take and redeem them for
              exclusive rewards!
            </p>
<<<<<<< HEAD
            <Button onClick={() => setLoginOpen(true)} size='lg'>              Join Now to Start Earning
            </Button>
          </div>

=======
<<<<<<< HEAD
            <Button onClick={() => setLoginOpen(true)} size='lg'>
=======
    { id: 'premium1', title: 'Premium Features (1 month)', cost: 1000, category: 'Subscription' },
    { id: 'swag', title: 'Zion Swag Pack', cost: 1500, category: 'Merchandise' },
    { id: 'coupon25', title: '$25 Off Coupon', cost: 2000, category: 'Discount' },
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' }
  ];


  if (!isAuthenticated) {
    return (
      <>
        <div className="container py-10 max-w-4xl">
          <div className="text-center mb-8">
            <Gift className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Zion Rewards Program</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Earn points for every action you take and redeem them for exclusive rewards!
            </p>
            <Button onClick={() => setLoginOpen(true)} size="lg">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <Button onClick={() => setLoginOpen(true)} size="lg">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Join Now to Start Earning
            </Button>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
<<<<<<< HEAD
                  <TrendingUp className='h-5 w-5' />                  How to Earn Points
=======
                  <TrendingUp className='h-5 w-5' />
=======
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  How to Earn Points
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </CardTitle>
                <CardDescription>
                  Multiple ways to accumulate rewards
                </CardDescription>
              </CardHeader>
<<<<<<< HEAD
              <CardContent className='space-y-4'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <CardContent className='space-y-4'>
=======
              <CardContent className="space-y-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                      </p>
                    </div>
<<<<<<< HEAD
                    <Badge variant='secondary'>{opportunity.points}</Badge>                  </div>
=======
<<<<<<< HEAD
                    <Badge variant='secondary'>{opportunity.points}</Badge>
=======
              <CardContent className="space-y-4">
                {earningOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                    <div className="text-primary mt-1">{opportunity.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-medium">{opportunity.title}</h4>
                      <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                    </div>
                    <Badge variant="secondary">{opportunity.points}</Badge>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <Badge variant="secondary">{opportunity.points}</Badge>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
<<<<<<< HEAD
                <CardTitle className='flex items-center gap-2'>
                  <Gift className='h-5 w-5' />                  Upcoming Rewards
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <CardTitle className='flex items-center gap-2'>
                  <Gift className='h-5 w-5' />
=======
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Upcoming Rewards
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </CardTitle>
                <CardDescription>
                  What you can redeem your points for
                </CardDescription>
              </CardHeader>
<<<<<<< HEAD
              <CardContent className='space-y-4'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <CardContent className='space-y-4'>
=======
              <CardContent className="space-y-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                {upcomingRewards.map((reward, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-3 rounded-lg border'
                  >
                    <div>
                      <h4 className='font-medium'>{reward.title}</h4>
                      <p className='text-sm text-muted-foreground'>
                        {reward.category}
                      </p>
                    </div>
<<<<<<< HEAD
                    <Badge variant='outline'>{reward.cost}</Badge>                  </div>
=======
<<<<<<< HEAD
                    <Badge variant='outline'>{reward.cost}</Badge>
=======
              <CardContent className="space-y-4">
                {upcomingRewards.map((reward, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <h4 className="font-medium">{reward.title}</h4>
                      <p className="text-sm text-muted-foreground">{reward.category}</p>
                    </div>
                    <Badge variant="outline">{reward.cost}</Badge>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <Badge variant="outline">{reward.cost}</Badge>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                ))}
              </CardContent>
            </Card>
          </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <Card className='text-center'>
            <CardContent className='pt-6'>
              <Star className='h-12 w-12 text-primary mx-auto mb-4' />
              <h3 className='text-2xl font-bold mb-2'>Coming Soon</h3>
              <p className='text-muted-foreground mb-4'>
                Our full rewards system is launching soon! Sign up now to start
                earning points immediately.
              </p>
<<<<<<< HEAD
              <Button onClick={() => setLoginOpen(true)}>Create Account</Button>            </CardContent>
=======
              <Button onClick={() => setLoginOpen(true)}>Create Account</Button>
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </CardContent>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </Card>
        </div>
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
      </>
    );
  }

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    <div className='container py-10 max-w-4xl'>
      <div className='text-center mb-8'>
        <Gift className='h-16 w-16 text-primary mx-auto mb-4' />
        <h1 className='text-4xl font-bold mb-4'>Your Rewards</h1>
        <div className='text-6xl font-bold text-primary mb-2'>
          {loading ? '...' : balance}
<<<<<<< HEAD
=======
=======
    <div className="container py-10 max-w-4xl">
      <div className="text-center mb-8">
        <Gift className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Your Rewards</h1>
        <div className="text-6xl font-bold text-primary mb-2">
          {loading ? "..." : balance}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </div>
        <p className='text-xl text-muted-foreground'>Points Available</p>
        {!loading && balance === 0 && (
<<<<<<< HEAD
          <p className='text-sm text-muted-foreground mt-2'>            You haven't earned any points yet. Complete the tasks below to start
=======
<<<<<<< HEAD
          <p className='text-sm text-muted-foreground mt-2'>
=======
    <div className="container py-10 max-w-4xl">
      <div className="text-center mb-8">
        <Gift className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Your Rewards</h1>
        <div className="text-6xl font-bold text-primary mb-2">
          {loading ? "..." : balance}
        </div>
        <p className="text-xl text-muted-foreground">Points Available</p>
        {!loading && balance === 0 && (
          <p className="text-sm text-muted-foreground mt-2">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <p className="text-sm text-muted-foreground mt-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            You haven't earned any points yet. Complete the tasks below to start
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            earning and redeem rewards.
          </p>
        )}
      </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div className='grid md:grid-cols-2 gap-8 mb-12'>
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
<<<<<<< HEAD
              <TrendingUp className='h-5 w-5' />              Keep Earning
=======
              <TrendingUp className='h-5 w-5' />
=======
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Keep Earning
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </CardTitle>
            <CardDescription>
              More ways to boost your point balance
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
          <CardContent className='space-y-4'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <CardContent className='space-y-4'>
=======
          <CardContent className="space-y-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                  </p>
                </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div className='text-right'>
                  <Badge variant='secondary' className='mb-1'>
                    {opportunity.points}
                  </Badge>
                  <p className='text-xs text-muted-foreground'>
                    {opportunity.action}
<<<<<<< HEAD
                  </p>                </div>
=======
                  </p>
=======
          <CardContent className="space-y-4">
            {earningOpportunities.map((opportunity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                <div className="text-primary mt-1">{opportunity.icon}</div>
                <div className="flex-1">
                  <h4 className="font-medium">{opportunity.title}</h4>
                  <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="mb-1">{opportunity.points}</Badge>
                  <p className="text-xs text-muted-foreground">{opportunity.action}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="text-right">
                  <Badge variant="secondary" className="mb-1">{opportunity.points}</Badge>
                  <p className="text-xs text-muted-foreground">{opportunity.action}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
<<<<<<< HEAD
            <CardTitle className='flex items-center gap-2'>
              <Gift className='h-5 w-5' />              Available Rewards
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <CardTitle className='flex items-center gap-2'>
              <Gift className='h-5 w-5' />
=======
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Available Rewards
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </CardTitle>
            <CardDescription>
              Redeem your points for these rewards
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <CardContent className='space-y-4'>
            {upcomingRewards.map(reward => (
              <div
                key={reward.id}
                className='flex items-center justify-between p-3 rounded-lg border'
              >
<<<<<<< HEAD
=======
=======
          <CardContent className="space-y-4">
            {upcomingRewards.map((reward) => (
              <div key={reward.id} className="flex items-center justify-between p-3 rounded-lg border">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div>
                  <h4 className='font-medium'>{reward.title}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {reward.category}
                  </p>
                </div>
                <div className='text-right space-y-1'>
                  <Badge variant='outline' className='mb-1'>
                    {reward.cost} pts
                  </Badge>
                  {balance >= reward.cost ? (
                    <Button
                      size='sm'
                      onClick={() => handleRedeem(reward)}
                      disabled={redeeming}
                    >
                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>
                  ) : (
<<<<<<< HEAD
                    <p className='text-xs text-muted-foreground'>
                      Need more points
                    </p>                  )}
=======
<<<<<<< HEAD
                    <p className='text-xs text-muted-foreground'>
                      Need more points
                    </p>
=======
          <CardContent className="space-y-4">
            {upcomingRewards.map((reward) => (
              <div key={reward.id} className="flex items-center justify-between p-3 rounded-lg border">
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <p className="text-xs text-muted-foreground">Need more points</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  )}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
<<<<<<< HEAD
          <CardTitle className='flex items-center gap-2'>
            <History className='h-5 w-5' />            Points History
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <CardTitle className='flex items-center gap-2'>
            <History className='h-5 w-5' />
=======
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            Points History
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </CardTitle>
          <CardDescription>Your recent points activity</CardDescription>
        </CardHeader>
        <CardContent>
          {ledger.length === 0 ? (
<<<<<<< HEAD
            <p className='text-center py-8 text-muted-foreground'>
              No points activity yet.
            </p>
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <p className='text-center py-8 text-muted-foreground'>
              No points activity yet.
            </p>
=======
            <p className="text-center py-8 text-muted-foreground">No points activity yet.</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          ) : (
            <ScrollArea className='h-64'>
              <div className='space-y-2 mt-2'>
                {ledger.map(entry => (
                  <div
                    key={entry.id}
                    className='flex items-center justify-between py-2 border-b'
                  >
                    <div>
                      <p className='font-medium capitalize'>
                        {entry.reason || 'adjustment'}
                      </p>
                      <p className='text-xs text-muted-foreground'>
                        {formatDistanceToNow(new Date(entry.created_at), {
                          addSuffix: true,
                        })}
                      </p>
                    </div>
                    <Badge
                      variant='outline'
                      className={
                        entry.delta >= 0
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }
                    >
                      {entry.delta >= 0 ? '+' : ''}                      {entry.delta} pts
                    </Badge>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </CardContent>
      </Card>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <Card className='text-center'>
        <CardContent className='pt-6'>
          <Star className='h-12 w-12 text-primary mx-auto mb-4' />
          <h3 className='text-2xl font-bold mb-2'>
            Full Rewards System Coming Soon
          </h3>
          <p className='text-muted-foreground mb-4'>
            We're finalizing the redemption system. Keep earning points -
            they'll be ready to spend soon!
<<<<<<< HEAD
          </p>
          <div className='flex gap-4 justify-center'>
            <Button variant='outline' asChild>
              <Link href='/marketplace'>Browse Marketplace</Link>
=======
=======
      <Card className="text-center">
        <CardContent className="pt-6">
          <Star className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Full Rewards System Coming Soon</h3>
          <p className="text-muted-foreground mb-4">
            We're finalizing the redemption system. Keep earning points - they'll be ready to spend soon!
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/marketplace">Browse Marketplace</Link>
            </Button>
<<<<<<< HEAD
            <Button variant='outline' asChild>
              <Link href='/community'>Join Community</Link>
=======
      <Card className="text-center">
        <CardContent className="pt-6">
          <Star className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Full Rewards System Coming Soon</h3>
          <p className="text-muted-foreground mb-4">
            We're finalizing the redemption system. Keep earning points - they'll be ready to spend soon!
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/marketplace">Browse Marketplace</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/community">Join Community</Link>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <Button variant="outline" asChild>
              <Link href="/community">Join Community</Link>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </Button>
            <Button variant='outline' asChild>
              <Link href='/community'>Join Community</Link>            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
