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
              <CardContent className=&quot;space-y-4&quot;>
                {earningOpportunities.map((opportunity, index) => (
                  <div key={index} className=&quot;flex items-start gap-3 p-3 rounded-lg border&quot;>
                    <div className=&quot;text-primary mt-1&quot;>{opportunity.icon}</div>
                    <div className=&quot;flex-1&quot;>
                      <h4 className=&quot;font-medium&quot;>{opportunity.title}</h4>
                      <p className=&quot;text-sm text-muted-foreground&quot;>{opportunity.description}</p>
                    </div>
                    <Badge variant=&quot;secondary&quot;>{opportunity.points}</Badge>
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
              <CardContent className=&quot;space-y-4&quot;>
                {upcomingRewards.map((reward, index) => (
                  <div key={index} className=&quot;flex items-center justify-between p-3 rounded-lg border&quot;>
                    <div>
                      <h4 className=&quot;font-medium&quot;>{reward.title}</h4>
                      <p className=&quot;text-sm text-muted-foreground&quot;>{reward.category}</p>
                    </div>
                    <Badge variant=&quot;outline&quot;>{reward.cost}</Badge>
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
              <Button onClick={() => setLoginOpen(true)}>
                Create Account
              </Button>
            </CardContent>
          </Card>
        </div>
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
      </>
    )
  }

  return (
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
          {ledger.length === 0 ? (
            <p className=&quot;text-center py-8 text-muted-foreground&quot;>No points activity yet.</p>
          ) : (
            <ScrollArea className=&quot;h-64&quot;>
              <div className=&quot;space-y-2 mt-2&quot;>
                {ledger.map(entry => (
                  <div key={entry.id} className=&quot;flex items-center justify-between py-2 border-b&quot;>
                    <div>
                      <p className=&quot;font-medium capitalize&quot;>{entry.reason || 'adjustment'}</p>
                      <p className=&quot;text-xs text-muted-foreground&quot;>
                        {formatDistanceToNow(new Date(entry.created_at), { addSuffix: true })}
                      </p>
                    </div>
                    <Badge
                      variant=&quot;outline&quot;
                      className={entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                    >
                      {entry.delta >= 0 ? '+' : ''}
                      {entry.delta} pts
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
