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
                  How to Earn Points
                </CardTitle>
                <CardDescription>
                  Multiple ways to accumulate rewards
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {_earningOpportunities.map(_(opportunity, _index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                    <div className="text-primary mt-1">{_opportunity.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-medium">{_opportunity.title}</h4>
                      <p className="text-sm text-muted-foreground">{_opportunity.description}</p>
                    </div>
                    <Badge variant="secondary">{_opportunity.points}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5" />
                  Upcoming Rewards
                </CardTitle>
                <CardDescription>
                  What you can redeem your points for
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {_upcomingRewards.map(_(reward, _index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <h4 className="font-medium">{_reward.title}</h4>
                      <p className="text-sm text-muted-foreground">{_reward.category}</p>
                    </div>
                    <Badge variant="outline">{_reward.cost}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground mb-4">
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
    );
  }

  return (
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
            You haven't earned any points yet. Complete the tasks below to start
            earning and redeem rewards.
          </p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Keep Earning
            </CardTitle>
            <CardDescription>
              More ways to boost your point balance
            </CardDescription>
          </CardHeader>
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
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5" />
              Available Rewards
            </CardTitle>
            <CardDescription>
              Redeem your points for these rewards
            </CardDescription>
          </CardHeader>
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
                    </Button>
                  ) : (
                    <p className="text-xs text-muted-foreground">Need more points</p>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Points History
          </CardTitle>
          <CardDescription>Your recent points activity</CardDescription>
        </CardHeader>
        <CardContent>
          {_ledger.length === 0 ? (
            <p className="text-center py-8 text-muted-foreground">No points activity yet.</p>
          ) : (
            <ScrollArea className="h-64">
              <div className="space-y-2 mt-2">
                {ledger.map(entry => (
                  <div key={entry.id} className="flex items-center justify-between py-2 border-b">
                    <div>
                      <p className="font-medium capitalize">{_entry.reason || 'adjustment'}</p>
                      <p className="text-xs text-muted-foreground">
                        {_formatDistanceToNow(new Date(entry.created_at), _{ addSuffix: true})}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={_entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
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
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
