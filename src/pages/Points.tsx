
<<<<<<< HEAD
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
import React, { useState } from 'react';

import {
=======
import {
<<<<<<< HEAD
  Gift
  Star
  Users
  ShoppingBag
  MessageSquare
  TrendingUp
  History
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  Gift,
  Star,
  Users,
  ShoppingBag,
  MessageSquare,
<<<<<<< HEAD
  TrendingUp,
  History,
=======
  TrendingUp,;
  History;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
} from 'lucide-react';
import { use_auth } from '@/hooks / use_auth';
import { use_points } from '@/hooks / use_points';
import {
<<<<<<< HEAD
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
=======
<<<<<<< HEAD
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle;
} from '@/components/ui/card';import { Button } from '@/components/ui/button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react'
=======

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';import { Button } from '@/components/ui/button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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

export default function PointsPage() {
export default function PointsPage() {;
  const { isAuthenticated, user } = useAuth();
  const { ledger, balance, loading, fetchLedger } = usePoints();
  const [loginOpen, setLoginOpen] = useState(false);
  const [redeeming, setRedeeming] = useState(false);

  async function handleRedeem(): any (reward: {;
    id: string;
    cost: number;
    title: string;
  }) {

export default function PointsPage() { const { isAuthenticated, user  } = useAuth(),
  const { ledger, balance, loading, fetchLedger  } = usePoints(),
  const [ loginOpen, setLoginOpen ] = useState(false),
  const [ redeeming, setRedeeming ] = useState(false),


  async function handleRedeem(reward: { id: string, cost: number, title: string }) {
    if (!user?.id) return;
    setRedeeming(true);
    try {
      await fetch('/api/points/redeem', {

        method: 'POST'
        headers: { 'Content-Type': 'application/json' }

        body: JSON.stringify({
          userId: user.id
          cost: reward.cost
          reward: reward.title
        })
      });
      await fetch_ledger ();
    } finally {
      setRedeeming(false);
<<<<<<< HEAD
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, cost: reward.cost, reward: reward.title })
      });
      await fetchLedger()
    } finally {
      setRedeeming(false)
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    }
  }

  const earningOpportunities = [
    {
<<<<<<< HEAD
      icon: <Users className='h-5 w-5' />,
      title: 'Sign Up & Profile Setup',
      description: 'Complete your profile and verify your email',
      points: '50 pts',
      action: is_authenticated ? ' Completed' : 'Get Started',
    },
    {
      icon: <ShoppingBag className='h-5 w-5' />,
      title: 'First Purchase',
      description: 'Make your first purchase on the marketplace',
      points: '100 pts',
      action: 'Browse Marketplace',
    },
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
    {
      icon: <MessageSquare className='h-5 w-5' />
      title: 'Community Engagement'
      description: 'Post in the community or comment on discussions'
      points: '25 pts per post'
      action: 'Join Community'
    }
    {
      icon: <Users className='h-5 w-5' />,
      title: 'Refer Friends',
      description: 'Invite friends to join Zion marketplace',
      points: '200 pts per referral',
      action: 'Share Referral Link',
    },
      description: "Invite friends to join Zion marketplace",
      points: "200 pts per referral",
      action: "Share Referral Link";
    }
  ];

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
  const upcoming_rewards = [;
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },
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
      id: 'coupon25',
      title: '$25 Off Coupon',
      cost: 2000,
      category: 'Discount',
    },
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' },
  ];
  const earningOpportunities = [;
    {;
      icon: <Users className='h-5 w-5' />,;
      title: 'Sign Up & Profile Setup',;
      description: 'Complete your profile and verify your email',;
      points: '50 pts',;
      action: isAuthenticated ? ' Completed' : 'Get Started',;
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
=======

      id: 'coupon25'
      title: '$25 Off Coupon'
      cost: 2000
      category: 'Discount'
    }
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' }
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      icon: <Users className="h-5 w-5" />,
      title: "Sign Up & Profile Setup",
      description: "Complete your profile and verify your email",
      points: "50 pts",
      action: isAuthenticated ? "✓ Completed" : "Get Started"
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    },
    {
      icon: <ShoppingBag className="h-5 w-5" />,
      title: "First Purchase",
      description: "Make your first purchase on the marketplace",
      points: "100 pts",
      action: "Browse Marketplace"
    },
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      icon: <Users className='h-5 w-5' />,
      title: 'Refer Friends',
      description: 'Invite friends to join Zion marketplace',
      points: '200 pts per referral',
      action: 'Share Referral Link',
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD

  if (!isAuthenticated) {;
    return (
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Community Engagement",
      description: "Post in the community or comment on discussions",
      points: "25 pts per post",
      action: "Join Community"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Refer Friends",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      description: "Invite friends to join Zion marketplace",
      points: "200 pts per referral",
      action: "Share Referral Link"
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  if (!isAuthenticated) {;
    return (

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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  ],;
  const upcomingRewards = [;
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },;
    { id: 'premium1', title: 'Premium Features (1 month)', cost: 1000, category: 'Subscription' },;
    { id: 'swag', title: 'Zion Swag Pack', cost: 1500, category: 'Merchandise' },;
    { id: 'coupon25', title: '$25 Off Coupon', cost: 2000, category: 'Discount' };
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' }
  ],
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  if (!isAuthenticated) {
    return (
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
            <Button onClick={() => setLoginOpen(true)} size='lg'>
              Join Now to Start Earning
            </Button>
          </div>
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <Button onClick={() => setLoginOpen(true)} size="lg">
              Join Now to Start Earning
            </Button>
          </div>



          <div className="grid md:grid-cols-2 gap-8 mb-12">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <TrendingUp className='h-5 w-5' />
                  How to Earn Points
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                </CardTitle>
                <CardDescription>
                  Multiple ways to accumulate rewards
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                {earningOpportunities.map((opportunity, index) => (
                  <div
                    key={index}
                    className='flex items - start gap - 3 p - 3 rounded - lg border';
                  >;
                    <div className='text - primary mt - 1'>{opportunity.icon}</div>;
                    <div className='flex - 1'>;
                      <h4 className='font - medium'>{opportunity.title}</h4>;
                      <p className='text - sm text - muted - foreground'>;
                        {opportunity.description}
<<<<<<< HEAD
                      </p>
                    </div>
                    <Badge variant='secondary'>{opportunity.points}</Badge>
=======

              <CardContent className="space-y-4">
                {earningOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    <div className="text-primary mt-1">{opportunity.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-medium">{opportunity.title}</h4>
                      <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                    </div>
<<<<<<< HEAD
                    <Badge variant='secondary'>{opportunity.points}</Badge>                  </div>                    </div>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    <Badge variant="secondary">{opportunity.points}</Badge>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
<<<<<<< HEAD
                <CardTitle className='flex items-center gap-2'>
                  <Gift className='h-5 w-5' />
=======

                <CardTitle className="flex items-center gap-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <Gift className="h-5 w-5" />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                  Upcoming Rewards
                </CardTitle>
                <CardDescription>
                  What you can redeem your points for
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
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
                    <Badge variant='outline'>{reward.cost}</Badge>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    <Badge variant="outline">{reward.cost}</Badge>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <Card className='text-center'>
            <CardContent className='pt-6'>
              <Star className='h-12 w-12 text-primary mx-auto mb-4' />
              <h3 className='text-2xl font-bold mb-2'>Coming Soon</h3>
              <p className='text-muted-foreground mb-4'>
                Our full rewards system is launching soon! Sign up now to start
                earning points immediately.
              </p>
              <Button onClick={() => setLoginOpen(true)}>Create Account</Button>
            </CardContent>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          </Card>
        </div>
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
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
      </>;
    );
  }
  return (
<<<<<<< HEAD
    <div className='container py-10 max-w-4xl'>;
      <div className='text-center mb-8'>;
        <Gift className='h-16 w-16 text-primary mx-auto mb-4' />;
        <h1 className='text-4xl font-bold mb-4'>Your Rewards</h1>;
        <div className='text-6xl font-bold text-primary mb-2'>;
          {loading ? '...' : balance}
        </div>
        <p className='text-xl text-muted-foreground'>Points Available</p>
        {!loading && balance === 0 && (
          <p className='text-sm text-muted-foreground mt-2'>
=======
<<<<<<< HEAD
    <div className='container py-10 max-w-4xl'>
      <div className='text-center mb-8'>
        <Gift className='h-16 w-16 text-primary mx-auto mb-4' />
        <h1 className='text-4xl font-bold mb-4'>Your Rewards</h1>
        <div className='text-6xl font-bold text-primary mb-2'>
          {loading ? '...' : balance}
=======
    <div className="container py-10 max-w-4xl">
      <div className="text-center mb-8">
        <Gift className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Your Rewards</h1>
        <div className="text-6xl font-bold text-primary mb-2">
          {loading ? "..." : balance}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        </div>
        <p className="text-xl text-muted-foreground">Points Available</p>
        {!loading && balance === 0 && (
<<<<<<< HEAD
          <p className='text-sm text-muted-foreground mt-2'>            You haven't earned any points yet. Complete the tasks below to start        </div>
        <p className="text-xl text-muted-foreground">Points Available</p>
        {!loading && balance === 0 && (
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <p className="text-sm text-muted-foreground mt-2">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            You haven't earned any points yet. Complete the tasks below to start
            earning and redeem rewards.
          </p>
        )}
      </div>
      <div className='grid md:grid-cols-2 gap-8 mb-12'>
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <TrendingUp className='h-5 w-5' />
              Keep Earning
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            </CardTitle>
            <CardDescription>
              More ways to boost your point balance
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            {earningOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className='flex items - start gap - 3 p - 3 rounded - lg border';
              >;
                <div className='text - primary mt - 1'>{opportunity.icon}</div>;
                <div className='flex - 1'>;
                  <h4 className='font - medium'>{opportunity.title}</h4>;
                  <p className='text - sm text - muted - foreground'>;
                    {opportunity.description}
                  </p>
                </div>
                <div className='text-right'>
                  <Badge variant='secondary' className='mb-1'>
                    {opportunity.points}
                  </Badge>;
                  <p className='text - xs text - muted - foreground'>;
                    {opportunity.action}
<<<<<<< HEAD
                  </p>
=======

          <CardContent className="space-y-4">
            {earningOpportunities.map((opportunity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                <div className="text-primary mt-1">{opportunity.icon}</div>
                <div className="flex-1">
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                <div className="text-right">
                  <Badge variant="secondary" className="mb-1">{opportunity.points}</Badge>
                  <p className="text-xs text-muted-foreground">{opportunity.action}</p>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
<<<<<<< HEAD
            <CardTitle className='flex items-center gap-2'>
              <Gift className='h-5 w-5' />
=======

            <CardTitle className="flex items-center gap-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <Gift className="h-5 w-5" />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
              Available Rewards
            </CardTitle>
            <CardDescription>
              Redeem your points for these rewards
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            {upcomingRewards.map(reward => (
              <div
                key={reward.id}
                className='flex items-center justify-between p-3 rounded-lg border'
              >
                <div>
                  <h4 className='font-medium'>{reward.title}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {reward.category}
                  </p>;
                </div>;
                <div className='text - right space - y-1'>;
                  <Badge variant='outline' className='mb - 1'>;
                    {reward.cost} pts;
                  </Badge>;
                  {balance >= reward.cost ? (
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
                    >
                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>
                  ) : (
                    <p className='text-xs text-muted-foreground'>
                      Need more points
                    </p>
          <CardContent className="space-y-4">
            {upcomingRewards.map((reward) => (
              <div key={reward.id} className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <h4 className="font-medium">{reward.title}</h4>
                  <p className="text-sm text-muted-foreground">{reward.category}</p>
<<<<<<< HEAD
                </div>
                <div className="text-right space-y-1">
                  <Badge variant="outline" className="mb-1">{reward.cost} pts</Badge>
                    <Button;
                      size='sm';
                      on_click={() => handle_redeem (reward)}
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                </div>
                <div className="text-right space-y-1">
                  <Badge variant="outline" className="mb-1">{reward.cost} pts</Badge>
                  {balance >= reward.cost ? (
<<<<<<< HEAD
                    <Button
                      size='sm'
                      onClick={() => handleRedeem(reward)}
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                      disabled={redeeming}
                    >                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>) : (
                    <p className='text - xs text - muted - foreground'>;
                      Need more points;
                    </p>                  )}
                    <p className="text - xs text - muted - foreground">Need more points</p>;
                <div>;
                  <h4 className="font - medium">{reward.title}</h4>;
                  <p className="text - sm text - muted - foreground">{reward.category}</p>;
                </div>;
                <div className="text - right space - y-1">;
                  <Badge variant="outline" className="mb - 1">{reward.cost} pts</Badge>;
                  {balance >= reward.cost ? (
                    <Button size="sm" on_click={() => handle_redeem (reward)} disabled={redeeming}>;
                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>
                  ) : (
                    <p className="text-xs text-muted-foreground">Need more points</p>
                  )}
<<<<<<< HEAD
                </div>;
              </div>;
            ))}
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <History className='h-5 w-5' />
=======
                </div>
              </div>
=======
                    <Button size="sm" onClick={() => handleRedeem(reward)} disabled={redeeming}>
                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>
                  ) : (
                    <p className="text-xs text-muted-foreground">Need more points</p>
                  )}
                </div>;
              </div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            ))}

          <CardTitle className="flex items-center gap-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <History className="h-5 w-5" />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            Points History
          </CardTitle>
          <CardDescription>Your recent points activity</CardDescription>
        </CardHeader>
        <CardContent>
          {ledger.length === 0 ? (
            <p className='text-center py-8 text-muted-foreground'>
              No points activity yet.
            </p>
          ) : (
<<<<<<< HEAD
            <ScrollArea className='h-64'>
              <div className='space-y-2 mt-2'>
=======
            <ScrollArea className="h-64">
              <div className="space-y-2 mt-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                {ledger.map(entry => (
                  <div
                    key={entry.id}
                    className='flex items-center justify-between py-2 border-b'
                  >
                    <div>
                      <p className='font-medium capitalize'>
                        {entry.reason |'adjustment'}
                      </p>
                      <p className='text-xs text-muted-foreground'>
                        {formatDistanceToNow(new Date(entry.created_at), {
                          addSuffix: true
                        })}
                      </p>;
                    </div>;
                    <Badge
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      variant='outline'
                      className={
                        entry.delta >= 0
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
<<<<<<< HEAD
                      }
                    >
                      {entry.delta >= 0 ? '+' : ''}{entry.delta} pts
                    </Badge>
                  </div>
                        entry && entry.delta>= 0;
                          ? 'bg-green-100 text-green-800';
                          : 'bg-red-100 text-red-800';
                      }                      variant="outline";
                      className = {entry && entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',}
                    >;
                      {entry && entry.delta >= 0 ? '+' : ''}                      {entry && entry.delta} pts                    </Badge>;
                  </div>;
=======
                      }                      variant="outline"
                      className = {entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',}
                    >
                      {entry.delta >= 0 ? '+' : ''}                      {entry.delta} pts                    </Badge>
                  </div>
=======
<<<<<<< HEAD
                      <p className="font-medium capitalize">{entry.reason || 'adjustment'}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(entry.created_at), { addSuffix: true })}
                      </p>
                    </div>
                    <Badge
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      variant="outline"
                      className={entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                    >;
                      {entry && entry.delta >= 0 ? '+' : ''}                      {entry && entry.delta} pts                    </Badge>;
                  </div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                ))}
              </div>;
            </ScrollArea>;
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
=======

=======



      <Card className="text-center">
        <CardContent className="pt-6">
          <Star className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Full Rewards System Coming Soon</h3>
          <p className="text-muted-foreground mb-4">
            We're finalizing the redemption system. Keep earning points - they'll be ready to spend soon!
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          </p>
          <div className='flex gap-4 justify-center'>
            <Button variant='outline' asChild>
              <Link href='/marketplace'>Browse Marketplace</Link>
            </Button>
<<<<<<< HEAD
            <Button variant='outline' asChild>
              <Link href='/community'>Join Community</Link>
=======


            <Button variant="outline" asChild>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <Link href="/community">Join Community</Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
              <Link href='/community'>Join Community</Link>            </Button>;
          </div>;
        </CardContent>;
      </Card>;
    </div>;
  );
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  );
}
    </div>);
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  )
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
