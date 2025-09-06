
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

import {
<<<<<<< HEAD
  Gift,
  Star,
  Users,
  ShoppingBag,
  MessageSquare,
  TrendingUp,
  History,
=======
  Gift
  Star
  Users
  ShoppingBag
  MessageSquare
  TrendingUp
  History
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
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
<<<<<<< HEAD
} from '@/components/ui/card';
=======
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle;
} from '@/components/ui/card';import { Button } from '@/components/ui/button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react'
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { formatDistanceToNow } from 'date-fns';

import Link from 'next/link';
import { LoginModal } from '@/components/auth/LoginModal';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

export default function PointsPage() {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default function PointsPage() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
  }) {
=======
  }) {    if (!user?.id) return;  async function handleRedeem(reward: { id: string, cost: number, title: string }) {

>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======

export default function PointsPage() { const { isAuthenticated, user  } = useAuth(),
  const { ledger, balance, loading, fetchLedger  } = usePoints(),
  const [ loginOpen, setLoginOpen ] = useState(false),
  const [ redeeming, setRedeeming ] = useState(false),


  async function handleRedeem(reward: { id: string, cost: number, title: string }) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    if (!user?.id) return;
    setRedeeming(true);
    try {
      await fetch('/api/points/redeem', {
<<<<<<< HEAD

        method: 'POST'
        headers: { 'Content-Type': 'application/json' }

        body: JSON.stringify({
          userId: user.id
          cost: reward.cost
          reward: reward.title
        })
=======
} from '@/components / ui / card';import { Button } from '@/components / ui / button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';
import { use_auth } from '@/hooks / use_auth';
import { use_points } from '@/hooks / use_points';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      });
      await fetch_ledger ();
    } finally {
<<<<<<< HEAD
=======
  }) {    if (!user?.id) return;  async function handleRedeem(): any (reward: { id: string, cost: number, title: string }) {;
    if (!user?.id) return;
    setRedeeming(true);
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
      setRedeeming(false);    }      });
      await fetchLedger();
    } finally {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setRedeeming(false);
=======
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, cost: reward.cost, reward: reward.title })
      });
      await fetchLedger()
    } finally {
      setRedeeming(false)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
  }

<<<<<<< HEAD
  const earningOpportunities = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Users className='h-5 w-5' />,
=======
      set_redeeming (false);    }      });
      await fetch_ledger ();
    } finally {
      set_redeeming (false);
    }
  }
  const earning_opportunities = [;
    {
      icon: <Users className='h - 5 w - 5' />,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      title: 'Sign Up & Profile Setup',
      description: 'Complete your profile and verify your email',
      points: '50 pts',
      action: is_authenticated ? '✓ Completed' : 'Get Started',
    },
<<<<<<< HEAD
    {
      icon: <ShoppingBag className='h-5 w-5' />,
=======
      icon: <ShoppingBag className='h - 5 w - 5' />,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      title: 'First Purchase',
      description: 'Make your first purchase on the marketplace',
      points: '100 pts',
      action: 'Browse Marketplace',
    },
=======
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
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    {
<<<<<<< HEAD
      icon: <MessageSquare className='h-5 w-5' />
      title: 'Community Engagement'
      description: 'Post in the community or comment on discussions'
      points: '25 pts per post'
      action: 'Join Community'
    }
    {
<<<<<<< HEAD
      icon: <Users className='h-5 w-5' />,
=======
      icon: <MessageSquare className='h - 5 w - 5' />,
      title: 'Community Engagement',
      description: 'Post in the community or comment on discussions',
      points: '25 pts per post',
      action: 'Join Community',
    },
    {
      icon: <Users className='h - 5 w - 5' />,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      title: 'Refer Friends',
      description: 'Invite friends to join Zion marketplace',
      points: '200 pts per referral',
      action: 'Share Referral Link',
<<<<<<< HEAD
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
      title: "Refer Friends",
=======
    },  ];
;
  const upcoming_rewards = [;
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },      title: "Refer Friends",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      description: "Invite friends to join Zion marketplace",
      points: "200 pts per referral",
      action: "Share Referral Link";
    }
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  ];

=======
      icon: <Users className='h-5 w-5' />
      title: 'Refer Friends'
      description: 'Invite friends to join Zion marketplace'
      points: '200 pts per referral'
      action: 'Share Referral Link'
    },  ];
  const upcomingRewards = [
<<<<<<< HEAD
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },      title: "Refer Friends"
      description: "Invite friends to join Zion marketplace"
      points: "200 pts per referral"
      action: "Share Referral Link"
    }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' }
=======
  const upcoming_rewards = [;
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD
  ];
=======
      id: 'coupon25'
      title: '$25 Off Coupon'
      cost: 2000
      category: 'Discount'
    }
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  if (!isAuthenticated) {;
    return (
<<<<<<< HEAD
      <>
        <div className='container py-10 max-w-4xl'>
          <div className='text-center mb-8'>
            <Gift className='h-16 w-16 text-primary mx-auto mb-4' />
            <h1 className='text-4xl font-bold mb-4'>Zion Rewards Program</h1>
            <p className='text-xl text-muted-foreground mb-6'>
              Earn points for every action you take and redeem them for
              exclusive rewards!
            </p>
            <Button onClick={() => setLoginOpen(true)} size='lg'>
              Join Now to Start Earning
            </Button>
          </div>
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <TrendingUp className='h-5 w-5' />
=======
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },
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
              Join Now to Start Earning
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  How to Earn Points
                </CardTitle>
                <CardDescription>
                  Multiple ways to accumulate rewards
                </CardDescription>
              </CardHeader>
<<<<<<< HEAD
              <CardContent className='space-y-4'>
                {earningOpportunities.map((opportunity, index) => (
                  <div
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
                    <div className="text-primary mt-1">{opportunity.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-medium">{opportunity.title}</h4>
                      <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                    </div>
                    <Badge variant="secondary">{opportunity.points}</Badge>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
                  <Gift className="h-5 w-5" />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
                  >
                    <div>
                      <h4 className='font-medium'>{reward.title}</h4>
                      <p className='text-sm text-muted-foreground'>
                        {reward.category}
                      </p>
                    </div>
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            </CardContent>
          </Card>
        </div>
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
      </>
=======
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                Create Account;
              </Button>;
          </Card>;
        </div>;
<<<<<<< HEAD
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
      </>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    );
  }
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    <div className='container py-10 max-w-4xl'>;
      <div className='text-center mb-8'>;
        <Gift className='h-16 w-16 text-primary mx-auto mb-4' />;
        <h1 className='text-4xl font-bold mb-4'>Your Rewards</h1>;
        <div className='text-6xl font-bold text-primary mb-2'>;
          {loading ? '...' : balance}
<<<<<<< HEAD
=======
<<<<<<< HEAD
        </div>
        <p className='text-xl text-muted-foreground'>Points Available</p>
        {!loading && balance === 0 && (
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
              <TrendingUp className='h-5 w-5' />
=======

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              Keep Earning
            </CardTitle>
            <CardDescription>
              More ways to boost your point balance
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
          <CardContent className='space-y-4'>
            {earningOpportunities.map((opportunity, index) => (
              <div
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
                <div className='text-right'>
                  <Badge variant='secondary' className='mb-1'>
=======
                  </p>              <div key={index} className="flex items - start gap - 3 p - 3 rounded - lg border">;
                <div className="text - primary mt - 1">{opportunity.icon}</div>;
                <div className="flex - 1">;
                  <h4 className="font - medium">{opportunity.title}</h4>;
                  <p className="text - sm text - muted - foreground">{opportunity.description}</p>;
                </div>;
                <div className='text - right'>;
                  <Badge variant='secondary' className='mb - 1'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
                <div className="text-primary mt-1">{opportunity.icon}</div>
                <div className="flex-1">
                  <h4 className="font-medium">{opportunity.title}</h4>
                  <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="mb-1">{opportunity.points}</Badge>
                  <p className="text-xs text-muted-foreground">{opportunity.action}</p>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
              <Gift className="h-5 w-5" />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
                <div>
                  <h4 className='font-medium'>{reward.title}</h4>
                  <p className='text-sm text-muted-foreground'>
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
                className='flex items - center justify - between p - 3 rounded - lg border';
              >;
                  <h4 className='font - medium'>{reward.title}</h4>;
                  <p className='text - sm text - muted - foreground'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                    {reward.category}
                  </p>;
                </div>;
                <div className='text - right space - y-1'>;
                  <Badge variant='outline' className='mb - 1'>;
                    {reward.cost} pts;
                  </Badge>;
                  {balance >= reward.cost ? (
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    <Button
                      size='sm'
                      onClick={() => handleRedeem(reward)}
                      disabled={redeeming}
<<<<<<< HEAD
                    >
                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>
                  ) : (
                    <p className='text-xs text-muted-foreground'>
                      Need more points
                    </p>
=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
=======
                    <Button;
                      size='sm';
                      on_click={() => handle_redeem (reward)}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                  {balance >= reward.cost ? (
                    <Button size="sm" on_click={() => handle_redeem (reward)} disabled={redeeming}>;
                      {redeeming ? 'Processing...' : 'Redeem'}
<<<<<<< HEAD
                    </Button>
                  ) : (
                    <p className="text-xs text-muted-foreground">Need more points</p>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  )}
                </div>;
              </div>;
            ))}
<<<<<<< HEAD
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
<<<<<<< HEAD
          <CardTitle className='flex items-center gap-2'>
            <History className='h-5 w-5' />
=======
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            Points History
          </CardTitle>
          <CardDescription>Your recent points activity</CardDescription>
        </CardHeader>
        <CardContent>
          {ledger.length === 0 ? (
<<<<<<< HEAD
            <p className='text-center py-8 text-muted-foreground'>
              No points activity yet.
            </p>
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
                        {entry.reason |'adjustment'}
                      </p>
                      <p className='text-xs text-muted-foreground'>
                        {formatDistanceToNow(new Date(entry.created_at), {
                          addSuffix: true
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                        })}
                      </p>;
                    </div>;
                    <Badge
                      variant='outline'
                      className={
<<<<<<< HEAD
=======
<<<<<<< HEAD
                        entry.delta >= 0
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }
                    >
                      {entry.delta >= 0 ? '+' : ''}{entry.delta} pts
=======
            <p className="text-center py-8 text-muted-foreground">No points activity yet.</p>
          ) : (
            <ScrollArea className="h-64">
              <div className="space-y-2 mt-2">
                {ledger.map(entry => (
                  <div key={entry.id} className="flex items-center justify-between py-2 border-b">
                    <div>
                      <p className="font-medium capitalize">{entry.reason || 'adjustment'}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(entry.created_at), { addSuffix: true })}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                    >
                      {entry.delta >= 0 ? '' : ''}
                      {entry.delta} pts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                    </Badge>
                  </div>
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                        entry && entry.delta>= 0;
                          ? 'bg-green-100 text-green-800';
                          : 'bg-red-100 text-red-800';
                      }                      variant="outline";
                      className = {entry && entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',}
                    >;
                      {entry && entry.delta >= 0 ? '+' : ''}                      {entry && entry.delta} pts                    </Badge>;
                  </div>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                ))}
              </div>;
            </ScrollArea>;
          )}
<<<<<<< HEAD
        </CardContent>
      </Card>
<<<<<<< HEAD
      <Card className='text-center'>
        <CardContent className='pt-6'>
          <Star className='h-12 w-12 text-primary mx-auto mb-4' />
          <h3 className='text-2xl font-bold mb-2'>
            Full Rewards System Coming Soon
          </h3>
          <p className='text-muted-foreground mb-4'>
            We're finalizing the redemption system. Keep earning points -
            they'll be ready to spend soon!
          </p>
          <div className='flex gap-4 justify-center'>
            <Button variant='outline' asChild>
              <Link href='/marketplace'>Browse Marketplace</Link>
            </Button>
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              <Link href='/community'>Join Community</Link>            </Button>;
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
    </div>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  );
}
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
