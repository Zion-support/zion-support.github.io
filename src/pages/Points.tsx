<<<<<<< HEAD
import React, { useState } from 'react',
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth',
import { usePoints } from '@/hooks/usePoints',
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',
import { Button } from '@/components/ui/button',
import { Badge } from '@/components/ui/badge',
import { ScrollArea } from '@/components/ui/scroll-area',
import { formatDistanceToNow } from 'date-fns',
import Link from 'next/link',
import { LoginModal } from '@/components/auth/LoginModal',
export default function PointsPage() {
  const { isAuthenticated, user } = useAuth(),
  const { ledger, balance, loading, fetchLedger } = usePoints(),
  const [loginOpen, setLoginOpen] = useState(false),
  const [redeeming, setRedeeming] = useState(false),

  async function handleRedeem(reward: { id: string, cost: number, title: string }) {
    if (!user?.id) return,
    setRedeeming(true),
    try {
      await fetch('/api/points/redeem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, cost: reward.cost, reward: reward.title })
      }),
      await fetchLedger()
    } finally {
      setRedeeming(false)
    }
  }

  const earningOpportunities = [
    {
      icon: <Users className=&quot;h-5 w-5&quot; />,
      title: &quot;Sign Up & Profile Setup&quot;,
      description: &quot;Complete your profile and verify your email&quot;,
      points: &quot;50 pts&quot;,
      action: isAuthenticated ? &quot;✓ Completed&quot; : &quot;Get Started&quot;
    },
    {
      icon: <ShoppingBag className=&quot;h-5 w-5&quot; />,
      title: &quot;First Purchase&quot;,
      description: &quot;Make your first purchase on the marketplace&quot;,
      points: &quot;100 pts&quot;,
      action: &quot;Browse Marketplace&quot;
    },
    {
      icon: <MessageSquare className=&quot;h-5 w-5&quot; />,
      title: &quot;Community Engagement&quot;,
      description: &quot;Post in the community or comment on discussions&quot;,
      points: &quot;25 pts per post&quot;,
      action: &quot;Join Community&quot;
    },
    {
      icon: <Users className=&quot;h-5 w-5&quot; />,
      title: &quot;Refer Friends&quot;,
      description: &quot;Invite friends to join Zion marketplace&quot;,
      points: &quot;200 pts per referral&quot;,
      action: &quot;Share Referral Link&quot;
    }
  ],

  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },
    { id: 'premium1', title: 'Premium Features (1 month)', cost: 1000, category: 'Subscription' },
    { id: 'swag', title: 'Zion Swag Pack', cost: 1500, category: 'Merchandise' },
    { id: 'coupon25', title: '$25 Off Coupon', cost: 2000, category: 'Discount' },
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' }
  ],

  if (!isAuthenticated) {
    return (
      <>
        <div className=&quot;container py-10 max-w-4xl&quot;>
          <div className=&quot;text-center mb-8&quot;>
            <Gift className=&quot;h-16 w-16 text-primary mx-auto mb-4&quot; />
            <h1 className=&quot;text-4xl font-bold mb-4&quot;>Zion Rewards Program</h1>
            <p className=&quot;text-xl text-muted-foreground mb-6&quot;>
=======
import React, {_useState} from 'react';
import Link from 'next/link';

export default function PointsPage() {_const { isAuthenticated, _user} = useAuth();
  const {_ledger, _balance, _loading, _fetchLedger} = usePoints();
  const [loginOpen, setLoginOpen] = useState(false);
  const [redeeming, setRedeeming] = useState(false);

  async function handleRedeem(_reward: {_id: string; cost: number; title: string}) {_if (!user?.id) return;
    setRedeeming(true);
    try {
      await fetch('/api/points/redeem', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_userId: user.id, _cost: reward.cost, _reward: reward.title})
      });
      await fetchLedger();
    } finally {_setRedeeming(false);}
  }

  const _earningOpportunities = [
    {_icon: <Users className="h-5 w-5" />, _title: "Sign Up & Profile Setup", _description: "Complete your profile and verify your email", _points: "50 pts", _action: isAuthenticated ? "✓ Completed" : "Get Started"},
    {_icon: <ShoppingBag className="h-5 w-5" />, _title: "First Purchase", _description: "Make your first purchase on the marketplace", _points: "100 pts", _action: "Browse Marketplace"},
    {_icon: <MessageSquare className="h-5 w-5" />, _title: "Community Engagement", _description: "Post in the community or comment on discussions", _points: "25 pts per post", _action: "Join Community"},
    {_icon: <Users className="h-5 w-5" />, _title: "Refer Friends", _description: "Invite friends to join Zion marketplace", _points: "200 pts per referral", _action: "Share Referral Link"}
  ];

  const _upcomingRewards = [
    {_id: 'coupon5', _title: '$5 Off Coupon', _cost: 500, _category: 'Discount'},
    {_id: 'premium1', _title: 'Premium Features (1 month)', _cost: 1000, _category: 'Subscription'},
    {_id: 'swag', _title: 'Zion Swag Pack', _cost: 1500, _category: 'Merchandise'},
    {_id: 'coupon25', _title: '$25 Off Coupon', _cost: 2000, _category: 'Discount'},
    {_id: 'vip', _title: 'VIP Support Access', _cost: 3000, _category: 'Service'}
  ];

  if (!isAuthenticated) {_return (_<>
        <div className="container py-10 max-w-4xl">
          <div className="text-center mb-8">
            <Gift className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Zion Rewards Program</h1>
            <p className="text-xl text-muted-foreground mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Earn points for every action you take and redeem them for exclusive rewards!
            </p>
            <Button onClick={() => setLoginOpen(true)} size=&quot;lg&quot;>
              Join Now to Start Earning
            </Button>
          </div>

          <div className=&quot;grid md:grid-cols-2 gap-8 mb-12&quot;>
            <Card>
              <CardHeader>
                <CardTitle className=&quot;flex items-center gap-2&quot;>
                  <TrendingUp className=&quot;h-5 w-5&quot; />
                  How to Earn Points
                </CardTitle>
                <CardDescription>
                  Multiple ways to accumulate rewards
                </CardDescription>
              </CardHeader>
<<<<<<< HEAD
              <CardContent className=&quot;space-y-4&quot;>
                {earningOpportunities.map((opportunity, index) => (
                  <div key={index} className=&quot;flex items-start gap-3 p-3 rounded-lg border&quot;>
                    <div className=&quot;text-primary mt-1&quot;>{opportunity.icon}</div>
                    <div className=&quot;flex-1&quot;>
                      <h4 className=&quot;font-medium&quot;>{opportunity.title}</h4>
                      <p className=&quot;text-sm text-muted-foreground&quot;>{opportunity.description}</p>
                    </div>
                    <Badge variant=&quot;secondary&quot;>{opportunity.points}</Badge>
=======
              <CardContent className="space-y-4">
                {_earningOpportunities.map(_(opportunity, _index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                    <div className="text-primary mt-1">{_opportunity.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-medium">{_opportunity.title}</h4>
                      <p className="text-sm text-muted-foreground">{_opportunity.description}</p>
                    </div>
                    <Badge variant="secondary">{_opportunity.points}</Badge>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className=&quot;flex items-center gap-2&quot;>
                  <Gift className=&quot;h-5 w-5&quot; />
                  Upcoming Rewards
                </CardTitle>
                <CardDescription>
                  What you can redeem your points for
                </CardDescription>
              </CardHeader>
<<<<<<< HEAD
              <CardContent className=&quot;space-y-4&quot;>
                {upcomingRewards.map((reward, index) => (
                  <div key={index} className=&quot;flex items-center justify-between p-3 rounded-lg border&quot;>
                    <div>
                      <h4 className=&quot;font-medium&quot;>{reward.title}</h4>
                      <p className=&quot;text-sm text-muted-foreground&quot;>{reward.category}</p>
                    </div>
                    <Badge variant=&quot;outline&quot;>{reward.cost}</Badge>
=======
              <CardContent className="space-y-4">
                {_upcomingRewards.map(_(reward, _index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <h4 className="font-medium">{_reward.title}</h4>
                      <p className="text-sm text-muted-foreground">{_reward.category}</p>
                    </div>
                    <Badge variant="outline">{_reward.cost}</Badge>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className=&quot;text-center&quot;>
            <CardContent className=&quot;pt-6&quot;>
              <Star className=&quot;h-12 w-12 text-primary mx-auto mb-4&quot; />
              <h3 className=&quot;text-2xl font-bold mb-2&quot;>Coming Soon</h3>
              <p className=&quot;text-muted-foreground mb-4&quot;>
                Our full rewards system is launching soon! Sign up now to start earning points immediately.
              </p>
              <Button onClick={_() => setLoginOpen(true)}>
                Create Account
              </Button>
            </CardContent>
          </Card>
        </div>
        <LoginModal isOpen={_loginOpen} onOpenChange={_setLoginOpen} />
      </>
    )
  }

  return (
<<<<<<< HEAD
    <div className=&quot;container py-10 max-w-4xl&quot;>
      <div className=&quot;text-center mb-8&quot;>
        <Gift className=&quot;h-16 w-16 text-primary mx-auto mb-4&quot; />
        <h1 className=&quot;text-4xl font-bold mb-4&quot;>Your Rewards</h1>
        <div className=&quot;text-6xl font-bold text-primary mb-2&quot;>
          {loading ? &quot;...&quot; : balance}
        </div>
        <p className=&quot;text-xl text-muted-foreground&quot;>Points Available</p>
        {!loading && balance === 0 && (
          <p className=&quot;text-sm text-muted-foreground mt-2&quot;>
=======
    <div className="container py-10 max-w-4xl">
      <div className="text-center mb-8">
        <Gift className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Your Rewards</h1>
        <div className="text-6xl font-bold text-primary mb-2">
          {_loading ? "..." : balance}
        </div>
        <p className="text-xl text-muted-foreground">Points Available</p>
        {_!loading && balance === 0 && (
          <p className="text-sm text-muted-foreground mt-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            You haven't earned any points yet. Complete the tasks below to start
            earning and redeem rewards.
          </p>
        )}
      </div>

      <div className=&quot;grid md:grid-cols-2 gap-8 mb-12&quot;>
        <Card>
          <CardHeader>
            <CardTitle className=&quot;flex items-center gap-2&quot;>
              <TrendingUp className=&quot;h-5 w-5&quot; />
              Keep Earning
            </CardTitle>
            <CardDescription>
              More ways to boost your point balance
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
          <CardContent className=&quot;space-y-4&quot;>
            {earningOpportunities.map((opportunity, index) => (
              <div key={index} className=&quot;flex items-start gap-3 p-3 rounded-lg border&quot;>
                <div className=&quot;text-primary mt-1&quot;>{opportunity.icon}</div>
                <div className=&quot;flex-1&quot;>
                  <h4 className=&quot;font-medium&quot;>{opportunity.title}</h4>
                  <p className=&quot;text-sm text-muted-foreground&quot;>{opportunity.description}</p>
                </div>
                <div className=&quot;text-right&quot;>
                  <Badge variant=&quot;secondary&quot; className=&quot;mb-1&quot;>{opportunity.points}</Badge>
                  <p className=&quot;text-xs text-muted-foreground&quot;>{opportunity.action}</p>
=======
          <CardContent className="space-y-4">
            {_earningOpportunities.map(_(opportunity, _index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                <div className="text-primary mt-1">{_opportunity.icon}</div>
                <div className="flex-1">
                  <h4 className="font-medium">{_opportunity.title}</h4>
                  <p className="text-sm text-muted-foreground">{_opportunity.description}</p>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="mb-1">{_opportunity.points}</Badge>
                  <p className="text-xs text-muted-foreground">{_opportunity.action}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className=&quot;flex items-center gap-2&quot;>
              <Gift className=&quot;h-5 w-5&quot; />
              Available Rewards
            </CardTitle>
            <CardDescription>
              Redeem your points for these rewards
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
          <CardContent className=&quot;space-y-4&quot;>
            {upcomingRewards.map((reward) => (
              <div key={reward.id} className=&quot;flex items-center justify-between p-3 rounded-lg border&quot;>
                <div>
                  <h4 className=&quot;font-medium&quot;>{reward.title}</h4>
                  <p className=&quot;text-sm text-muted-foreground&quot;>{reward.category}</p>
                </div>
                <div className=&quot;text-right space-y-1&quot;>
                  <Badge variant=&quot;outline&quot; className=&quot;mb-1&quot;>{reward.cost} pts</Badge>
                  {balance >= reward.cost ? (
                    <Button size=&quot;sm&quot; onClick={() => handleRedeem(reward)} disabled={redeeming}>
                      {redeeming ? 'Processing...' : 'Redeem'}
=======
          <CardContent className="space-y-4">
            {_upcomingRewards.map(_(reward) => (_<div key={reward.id} className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <h4 className="font-medium">{_reward.title}</h4>
                  <p className="text-sm text-muted-foreground">{_reward.category}</p>
                </div>
                <div className="text-right space-y-1">
                  <Badge variant="outline" className="mb-1">{_reward.cost} pts</Badge>
                  {_balance >= reward.cost ? (
                    <Button size="sm" onClick={() => handleRedeem(reward)} disabled={_redeeming}>
                      {_redeeming ? 'Processing...' : 'Redeem'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </Button>
                  ) : (
                    <p className=&quot;text-xs text-muted-foreground&quot;>Need more points</p>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className=&quot;flex items-center gap-2&quot;>
            <History className=&quot;h-5 w-5&quot; />
            Points History
          </CardTitle>
          <CardDescription>Your recent points activity</CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
          {ledger.length === 0 ? (
            <p className=&quot;text-center py-8 text-muted-foreground&quot;>No points activity yet.</p>
=======
          {_ledger.length === 0 ? (
            <p className="text-center py-8 text-muted-foreground">No points activity yet.</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          ) : (
            <ScrollArea className=&quot;h-64&quot;>
              <div className=&quot;space-y-2 mt-2&quot;>
                {ledger.map(entry => (
                  <div key={entry.id} className=&quot;flex items-center justify-between py-2 border-b&quot;>
                    <div>
<<<<<<< HEAD
                      <p className=&quot;font-medium capitalize&quot;>{entry.reason || 'adjustment'}</p>
                      <p className=&quot;text-xs text-muted-foreground&quot;>
                        {formatDistanceToNow(new Date(entry.created_at), { addSuffix: true })}
                      </p>
                    </div>
                    <Badge
                      variant=&quot;outline&quot;
                      className={entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
=======
                      <p className="font-medium capitalize">{_entry.reason || 'adjustment'}</p>
                      <p className="text-xs text-muted-foreground">
                        {_formatDistanceToNow(new Date(entry.created_at), _{ addSuffix: true})}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={_entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      {_entry.delta >= 0 ? '+' : ''}
                      {_entry.delta} pts
                    </Badge>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </CardContent>
      </Card>

      <Card className=&quot;text-center&quot;>
        <CardContent className=&quot;pt-6&quot;>
          <Star className=&quot;h-12 w-12 text-primary mx-auto mb-4&quot; />
          <h3 className=&quot;text-2xl font-bold mb-2&quot;>Full Rewards System Coming Soon</h3>
          <p className=&quot;text-muted-foreground mb-4&quot;>
            We're finalizing the redemption system. Keep earning points - they'll be ready to spend soon!
          </p>
          <div className=&quot;flex gap-4 justify-center&quot;>
            <Button variant=&quot;outline&quot; asChild>
              <Link href=&quot;/marketplace&quot;>Browse Marketplace</Link>
            </Button>
            <Button variant=&quot;outline&quot; asChild>
              <Link href=&quot;/community&quot;>Join Community</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
