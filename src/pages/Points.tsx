} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import {

  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle;
} from '@/components/ui/card';import { Button } from '@/components/ui/button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react'

import {;
  Gift,;
  Star,;
  Users,;
  ShoppingBag,;
  MessageSquare,;
  TrendingUp,;
  History,;
  Card,;
  CardContent,;

  Card,
  CardContent,
  CardDescription,;
  CardHeader;
} from '@/components/ui/card';import { Button } from '@/components/ui/button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { formatDistanceToNow } from 'date-fns';

import Link from 'next/link';
import { LoginModal } from '@/components/auth/LoginModal';

  const { isAuthenticated, user } = useAuth();
  const { ledger, balance, loading, fetchLedger } = usePoints();
  const [loginOpen, setLoginOpen] = useState(false);
  const [redeeming, setRedeeming] = useState(false);

  async function handleRedeem(reward: {
    id: string;
    cost: number;
    title: string;

  }) {    if (!user?.id) return;  async function handleRedeem(reward: { id: string, cost: number, title: string }) {

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
      await fetchLedger();
    } finally {
      setRedeeming(false);    }      });
      await fetchLedger()
      setRedeeming(false)
import React, { useState } from 'react',;
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
function handle_redeem() {    // Check condition
if (return) {
  $2
}  async /**
function handle_redeem() {
    // Check condition
}
    set_redeeming (true);
      await fetch ('/api / points / redeem', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          user_id: user.id,
          cost: reward.cost,
          reward: reward.title,
        }),

  }) {    if (!user?.id) return;  async function handleRedeem(): any (reward: { id: string, cost: number, title: string }) {;
    try {;
      await fetch('/api/points/redeem', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ userId: user.id, cost: reward.cost, reward: reward.title });
      }),;
    } finally {;

      setRedeeming(false);

        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, cost: reward.cost, reward: reward.title })

      set_redeeming (false);    }      });
      await fetch_ledger ();
      set_redeeming (false);
  const earning_opportunities = [;
    {

      icon: <Users className='h - 5 w - 5' />,

      title: 'Sign Up & Profile Setup',
      description: 'Complete your profile and verify your email',
      points: '50 pts',
      action: is_authenticated ? '✓ Completed' : 'Get Started',
    },

      icon: <ShoppingBag className='h - 5 w - 5' />,

      icon: <Users className='h-5 w-5' />,
      action: isAuthenticated ? '✓ Completed' : 'Get Started',
      icon: <ShoppingBag className='h-5 w-5' />,
      title: 'First Purchase',
      description: 'Make your first purchase on the marketplace',
      points: '100 pts',
      action: 'Browse Marketplace',

      icon: <Users className='h-5 w-5' />
      title: 'Sign Up & Profile Setup'
      description: 'Complete your profile and verify your email'
      points: '50 pts'
      action: isAuthenticated ? '✓ Completed' : 'Get Started'
      icon: <ShoppingBag className='h-5 w-5' />
      title: 'First Purchase'
      description: 'Make your first purchase on the marketplace'
      points: '100 pts'
      action: 'Browse Marketplace'

      icon: <MessageSquare className='h - 5 w - 5' />,
      title: 'Community Engagement',
      description: 'Post in the community or comment on discussions',
      points: '25 pts per post',
      action: 'Join Community',

      title: 'Refer Friends',
      description: 'Invite friends to join Zion marketplace',
      points: '200 pts per referral',
      action: 'Share Referral Link',

      icon: <Users className="h-5 w-5" />,
      title: "Sign Up & Profile Setup",
      description: "Complete your profile and verify your email",
      points: "50 pts",
      action: isAuthenticated ? "✓ Completed" : "Get Started"

      icon: <ShoppingBag className="h-5 w-5" />,
      title: "First Purchase",
      description: "Make your first purchase on the marketplace",
      points: "100 pts",
      action: "Browse Marketplace"

    },  ];
  const upcoming_rewards = [;
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },      title: "Refer Friends",

      description: "Invite friends to join Zion marketplace",
      points: "200 pts per referral",
      action: "Share Referral Link";

      title: 'Refer Friends'
      description: 'Invite friends to join Zion marketplace'
      points: '200 pts per referral'
      action: 'Share Referral Link'
  const upcomingRewards = [

      id: 'premium1'
      title: 'Premium Features (1 month)'
      cost: 1000
      category: 'Subscription'
      id: 'swag'
      title: 'Zion Swag Pack'
      cost: 1500
      category: 'Merchandise'

      id: 'coupon25'
      title: '$25 Off Coupon'
      cost: 2000
      category: 'Discount'
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' }

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
      icon: <MessageSquare className='h-5 w-5' />,;
      title: 'Community Engagement',;
      description: 'Post in the community or comment on discussions',;
      points: '25 pts per post',;
      action: 'Join Community',;
      title: 'Refer Friends',;
      description: 'Invite friends to join Zion marketplace',;
      points: '200 pts per referral',;
      action: 'Share Referral Link',;

      icon: <MessageSquare className="h-5 w-5" />,
      title: "Community Engagement",
      description: "Post in the community or comment on discussions",
      points: "25 pts per post",
      action: "Join Community"
      title: "Refer Friends",
      action: "Share Referral Link"
  ],;
  const upcomingRewards = [;
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },;
      id: 'premium1',;
      title: 'Premium Features (1 month)',;
      cost: 1000,;
      category: 'Subscription',;
      id: 'swag',;
      title: 'Zion Swag Pack',;
      cost: 1500,;
      category: 'Merchandise',;
      id: 'coupon25',;
      title: '$25 Off Coupon',;
      cost: 2000,;
      category: 'Discount',;
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' },;

  if (!isAuthenticated) {;
    return (

    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },

  if (!isAuthenticated) {
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
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <TrendingUp className='h-5 w-5' />                  How to Earn Points          <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="grid md:grid-cols-2 gap-8 mb-12">

                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  How to Earn Points

                </CardTitle>
                <CardDescription>
                  Multiple ways to accumulate rewards
                </CardDescription>
              </CardHeader>
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
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">

                    <div className="text-primary mt-1">{opportunity.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-medium">{opportunity.title}</h4>
                      <p className="text-sm text-muted-foreground">{opportunity.description}</p>

                    <Badge variant="secondary">{opportunity.points}</Badge>
                ))}
              </CardContent>
            </Card>
                  <Gift className='h-5 w-5' />                  Upcoming Rewards                <CardTitle className="flex items-center gap-2">

                  <Gift className="h-5 w-5" />
                  Upcoming Rewards
                  What you can redeem your points for

                {upcomingRewards.map((reward, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <h4 className="font-medium">{reward.title}</h4>
                      <p className="text-sm text-muted-foreground">{reward.category}</p>

                    <Badge variant="outline">{reward.cost}</Badge>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground mb-4">
                Our full rewards system is launching soon! Sign up now to start earning points immediately.
              <Button onClick={() => setLoginOpen(true)}>
                Create Account

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

          <div className='grid md:grid-cols-2 gap-8 mb-12'>;
            <Card>;
              <CardHeader>;
                <CardTitle className='flex items-center gap-2'>;
                  <TrendingUp className='h-5 w-5' />                  How to Earn Points          <div className="grid md:grid-cols-2 gap-8 mb-12">;
                <CardTitle className="flex items-center gap-2">;
                  <TrendingUp className="h-5 w-5" />;
                </CardTitle>;
                <CardDescription>;
                  Multiple ways to accumulate rewards;
                </CardDescription>;
              </CardHeader>;
              <CardContent className='space-y-4'>;
                {earningOpportunities && earningOpportunities.map((opportunity, index) => (;
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
                    <Badge variant='secondary'>{opportunity && opportunity.points}</Badge>                  </div>                    </div>;
                    <Badge variant="secondary">{opportunity && opportunity.points}</Badge>;
              </CardContent>;
            </Card>;

                  <Gift className='h-5 w-5' />                  Upcoming Rewards                <CardTitle className="flex items-center gap-2">;
                  <Gift className="h-5 w-5" />;
                  Upcoming Rewards;
                  What you can redeem your points for;
                {upcomingRewards && upcomingRewards.map((reward, index) => (;
                    className='flex items-center justify-between p-3 rounded-lg border'>                    <div>;
                      <h4 className='font-medium'>{reward && reward.title}</h4>;
                        {reward && reward.category}
                    <Badge variant='outline'>{reward && reward.cost}</Badge>                  </div>;
                    <Badge variant="outline">{reward && reward.cost}</Badge>;
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">;
                    <div>;
                      <h4 className="font-medium">{reward && reward.title}</h4>;
                      <p className="text-sm text-muted-foreground">{reward && reward.category}</p>;

          <Card className='text-center'>;
            <CardContent className='pt-6'>;
              <Star className='h-12 w-12 text-primary mx-auto mb-4' />;
              <h3 className='text-2xl font-bold mb-2'>Coming Soon</h3>;
              <p className='text-muted-foreground mb-4'>;
                Our full rewards system is launching soon! Sign up now to start;
                earning points immediately.;
              <Button onClick={() => setLoginOpen(true)}>Create Account</Button>            </CardContent>          <Card className="text-center">;
            <CardContent className="pt-6">;
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />;
              <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>;
              <p className="text-muted-foreground mb-4">;
                Our full rewards system is launching soon! Sign up now to start earning points immediately.;
              <Button onClick={() => setLoginOpen(true)}>;
                      </p>                  <div key={index} className="flex items - start gap - 3 p - 3 rounded - lg border">;
                    <div className="text - primary mt - 1">{opportunity.icon}</div>;
                    <div className="flex - 1">;
                      <h4 className="font - medium">{opportunity.title}</h4>;
                      <p className="text - sm text - muted - foreground">{opportunity.description}</p>;
                    <Badge variant='secondary'>{opportunity.points}</Badge>                  </div>                    </div>;
                    <Badge variant="secondary">{opportunity.points}</Badge>;
                  </div>))}
                <CardTitle className='flex items - center gap - 2'>;
                  <Gift className='h - 5 w - 5' />                  Upcoming Rewards                <CardTitle className="flex items - center gap - 2">;
                  <Gift className="h - 5 w - 5" />;
              <CardContent className='space - y-4'>;
                {upcoming_rewards.map ((reward, index) => (
                  <div;
                    className='flex items - center justify - between p - 3 rounded - lg border';
                  >                    <div>;
                      <h4 className='font - medium'>{reward.title}</h4>;
                      <p className='text - sm text - muted - foreground'>;
                        {reward.category}
                    <Badge variant='outline'>{reward.cost}</Badge>                  </div>;
                    <Badge variant="outline">{reward.cost}</Badge>;
                  <div key={index} className="flex items - center justify - between p - 3 rounded - lg border">;
                      <h4 className="font - medium">{reward.title}</h4>;
                      <p className="text - sm text - muted - foreground">{reward.category}</p>;
          <Card className='text - center'>;
            <CardContent className='pt - 6'>;
              <Star className='h - 12 w - 12 text - primary mx - auto mb - 4' />;
              <h3 className='text - 2xl font - bold mb - 2'>Coming Soon</h3>;
              <p className='text - muted - foreground mb - 4'>;
              <Button on_click={() => setLoginOpen (true)}>Create Account</Button>            </CardContent>          <Card className="text - center">;
            <CardContent className="pt - 6">;
              <Star className="h - 12 w - 12 text - primary mx - auto mb - 4" />;
              <h3 className="text - 2xl font - bold mb - 2">Coming Soon</h3>;
              <p className="text - muted - foreground mb - 4">;
              <Button on_click={() => setLoginOpen (true)}>;
                Create Account;

    );

          <p className="text-sm text-muted-foreground mt-2">
            You haven't earned any points yet. Complete the tasks below to start
            earning and redeem rewards.
        )}

              Keep Earning

              More ways to boost your point balance
                  </p>              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">

                <div className="text-right">
                  <Badge variant="secondary" className="mb-1">{opportunity.points}</Badge>
                  <p className="text-xs text-muted-foreground">{opportunity.action}</p>
              <Gift className='h-5 w-5' />              Available Rewards            <CardTitle className="flex items-center gap-2">

              Available Rewards
              Redeem your points for these rewards
            {upcomingRewards.map(reward => (
                key={reward.id}
              >;

                <div className='text - right space - y-1'>;
                  <Badge variant='outline' className='mb - 1'>;
                    {reward.cost} pts;
                  </Badge>;
                  {balance >= reward.cost ? (

        <p className='text-xl text-muted-foreground'>Points Available</p>;
        {!loading && balance === 0 && (;
          <p className='text-sm text-muted-foreground mt-2'>            You haven't earned any points yet. Complete the tasks below to start        </div>;
        <p className="text-xl text-muted-foreground">Points Available</p>;
          <p className="text-sm text-muted-foreground mt-2">;
            You haven't earned any points yet. Complete the tasks below to start;
            earning and redeem rewards.;

              <TrendingUp className='h-5 w-5' />              Keep Earning      <div className="grid md:grid-cols-2 gap-8 mb-12">;
              More ways to boost your point balance;
                  </p>              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">;
                <div className='text-right'>;
                  <Badge variant='secondary' className='mb-1'>;
                    {opportunity && opportunity.points}
                  <p className='text-xs text-muted-foreground'>;
                    {opportunity && opportunity.action}
                  </p>                </div>                </div>;
                <div className="text-right">;
                  <Badge variant="secondary" className="mb-1">{opportunity && opportunity.points}</Badge>;
                  <p className="text-xs text-muted-foreground">{opportunity && opportunity.action}</p>;

              <Gift className='h-5 w-5' />              Available Rewards            <CardTitle className="flex items-center gap-2">;
              Available Rewards;
              Redeem your points for these rewards;
            {upcomingRewards && upcomingRewards.map(reward => (;
                key={reward && reward.id}
                className='flex items-center justify-between p-3 rounded-lg border'>;
                <div className='text-right space-y-1'>;
                  <Badge variant='outline' className='mb-1'>;
                    {reward && reward.cost} pts;
                  {balance >= reward && reward.cost ? (;
                    <Button
                      size='sm'
                      onClick={() => handleRedeem(reward)}
                      disabled={redeeming}

                    >                      {redeeming ? 'Processing...' : 'Redeem'}
                  ) : (;
                      Need more points;
                    </p>                  )}
                    <p className="text-xs text-muted-foreground">Need more points</p>;
                <div className="text-right space-y-1">;
                  <Badge variant="outline" className="mb-1">{reward && reward.cost} pts</Badge>;
                    <Button size="sm" onClick={() => handleRedeem(reward)} disabled={redeeming}>;
                      {redeeming ? 'Processing...' : 'Redeem'}

            {upcomingRewards.map((reward) => (
              <div key={reward.id} className="flex items-center justify-between p-3 rounded-lg border">

                  ) : (
                    <p className='text-xs text-muted-foreground'>
                      Need more points
                    <p className="text - xs text - muted - foreground">Need more points</p>;
                <div className="text - right space - y-1">;
                  <Badge variant="outline" className="mb - 1">{reward.cost} pts</Badge>;

                    <Button size="sm" on_click={() => handle_redeem (reward)} disabled={redeeming}>;

                <div className="text-right space-y-1">
                  <Badge variant="outline" className="mb-1">{reward.cost} pts</Badge>

                    <Button size="sm" onClick={() => handleRedeem(reward)} disabled={redeeming}>

            <History className='h-5 w-5' />            Points History          <CardTitle className="flex items-center gap-2">

            <History className="h-5 w-5" />
            Points History
          <CardDescription>Your recent points activity</CardDescription>
        <CardContent>
          {ledger.length === 0 ? (
            <p className='text-center py-8 text-muted-foreground'>
              No points activity yet.
            <ScrollArea className='h-64'>
              <div className='space-y-2 mt-2'>
            <p className="text-center py-8 text-muted-foreground">No points activity yet.</p>
            <ScrollArea className="h-64">
              <div className="space-y-2 mt-2">

                      {entry.delta >= 0 ? '+' : ''}
                      {entry.delta} pts;

            </ScrollArea>;

          <h3 className="text-2xl font-bold mb-2">Full Rewards System Coming Soon</h3>
            We're finalizing the redemption system. Keep earning points - they'll be ready to spend soon!

          <div className="flex gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/marketplace">Browse Marketplace</Link>
            <Button variant='outline' asChild>
              <Link href='/community'>Join Community</Link>            <Button variant="outline" asChild>

              <Link href="/community">Join Community</Link>

          <h3 className='text-2xl font-bold mb-2'>;
            Full Rewards System Coming Soon;
          </h3>;
            We're finalizing the redemption system. Keep earning points -;
            they'll be ready to spend soon!;
          <div className='flex gap-4 justify-center'>;
            <Button variant='outline' asChild>;
              <Link href='/marketplace'>Browse Marketplace</Link>          </p>;
          <div className="flex gap-4 justify-center">;
            <Button variant="outline" asChild>;
              <Link href="/marketplace">Browse Marketplace</Link>;
              <Link href='/community'>Join Community</Link>            <Button variant="outline" asChild>;
              <Link href="/community">Join Community</Link>;
                    </Button>) : (
                    <p className="text - xs text - muted - foreground">Need more points</p>)}
            <History className='h - 5 w - 5' />            Points History          <CardTitle className="flex items - center gap - 2">;
            <History className="h - 5 w - 5" />;
            Points History;
          <CardDescription > Your recent points activity</CardDescription>;
        <CardContent>;
            <p className='text - center py - 8 text - muted - foreground'>;
              No points activity yet.;
            <ScrollArea className='h - 64'>;
              <div className='space - y-2 mt - 2'>;
                {ledger.map (entry => (
                    key={entry.id}
                    className='flex items - center justify - between py - 2 border - b';
                      <p className='font - medium capitalize'>;
                        {entry.reason || 'adjustment'}
                      <p className='text - xs text - muted - foreground'>;
                        {formatDistanceToNow (new Date (entry.created_at), {
                          add_suffix: true,
                        })}
                    <Badge;
                      variant='outline';
                      className={
                        entry.delta >= 0;
                          ? 'bg - green - 100 text - green - 800';
                          : 'bg - red - 100 text - red - 800';
                      }                      variant="outline";
                      class_name = {entry.delta >= 0 ? 'bg - green - 100 text - green - 800' : 'bg - red - 100 text - red - 800', }
                      {entry.delta >= 0 ? '+' : ''}                      {entry.delta} pts                    </Badge>;
            </ScrollArea>)}
          <h3 className='text - 2xl font - bold mb - 2'>;
          <div className='flex gap - 4 justify - center'>;
            <Button variant='outline' as_child>;
          <div className="flex gap - 4 justify - center">;
            <Button variant="outline" as_child>;
              <Link href='/community'>Join Community</Link>            <Button variant="outline" as_child>;

              <Link href='/community'>Join Community</Link>            </Button>;

    </div>);

  )