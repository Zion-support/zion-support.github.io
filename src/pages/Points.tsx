  Gift,
  Star,
  Users,
  ShoppingBag,
  MessageSquare,
} from 'lucide-react';
import { use_auth } from '@/hooks / use_auth';
import { use_points } from '@/hooks / use_points';
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
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader;
  CardTitle;
} from '@/components/ui/card';import { Button } from '@/components/ui/button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';
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
  const { isAuthenticated, user } = useAuth();
  const { ledger, balance, loading, fetchLedger } = usePoints();
  const [loginOpen, setLoginOpen] = useState(false);
  const [redeeming, setRedeeming] = useState(false);

  async function handleRedeem(): any (reward: {;
    id: string;
    cost: number;
    title: string;

export default function PointsPage() { const { isAuthenticated, user  } = useAuth(),
  const { ledger, balance, loading, fetchLedger  } = usePoints(),
  const [ loginOpen, setLoginOpen ] = useState(false),
  const [ redeeming, setRedeeming ] = useState(false),


  async function handleRedeem(reward: { id: string, cost: number, title: string }) {
    if (!user?.id) return;
    setRedeeming(true);
    try {
      await fetch('/api/points/redeem', {

      });
      await fetch_ledger ();
    } finally {

    }

  const earningOpportunities = [
    {
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
      id: 'coupon25'
      title: '$25 Off Coupon'
      cost: 2000
      category: 'Discount'
    }
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' }
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

  if (!isAuthenticated) {;
    return (

  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },
  ],;
  const upcomingRewards = [;
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },;
    { id: 'premium1', title: 'Premium Features (1 month)', cost: 1000, category: 'Subscription' },;
    { id: 'swag', title: 'Zion Swag Pack', cost: 1500, category: 'Merchandise' },;
    { id: 'coupon25', title: '$25 Off Coupon', cost: 2000, category: 'Discount' };
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' }
  ],

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
            <Button onClick={() => setLoginOpen(true)} size="lg">
              Join Now to Start Earning
            </Button>
          </div>
                  How to Earn Points
                </CardTitle>
                  Multiple ways to accumulate rewards
                </CardDescription>
              </CardHeader>
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
                    <div className="text-primary mt-1">{opportunity.icon}</div>
                      <h4 className="font-medium">{opportunity.title}</h4>
                      <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                    </div>
                    <Badge variant="secondary">{opportunity.points}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                  <Gift className="h-5 w-5" />
                  Upcoming Rewards
                </CardTitle>
                <CardDescription>
                  What you can redeem your points for
                </CardDescription>
              </CardHeader>
                    <Badge variant="outline">{reward.cost}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          </Card>
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
          <p className="text-sm text-muted-foreground mt-2">
            You haven't earned any points yet. Complete the tasks below to start
            earning and redeem rewards.
          </p>
        )}
      </div>
            </CardTitle>
              More ways to boost your point balance
            </CardDescription>
          </CardHeader>
                key={index}
                className='flex items - start gap - 3 p - 3 rounded - lg border';
              >;
                <div className='text - primary mt - 1'>{opportunity.icon}</div>;
                <div className='flex - 1'>;
                  <h4 className='font - medium'>{opportunity.title}</h4>;
                  <p className='text - sm text - muted - foreground'>;
                    {opportunity.description}
                    {opportunity.points}
                  </Badge>;
                  <p className='text - xs text - muted - foreground'>;
                    {opportunity.action}

          <CardContent className="space-y-4">
            {earningOpportunities.map((opportunity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                <div className="text-primary mt-1">{opportunity.icon}</div>
                  <h4 className="font-medium">{opportunity.title}</h4>
                  <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{opportunity.action}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
              <Gift className="h-5 w-5" />
              Available Rewards
            </CardTitle>
            <CardDescription>
              Redeem your points for these rewards
            </CardDescription>
          </CardHeader>
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
                      disabled={redeeming}
                    >                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>
                  ) : (
                    <p className='text-xs text-muted-foreground'>
                      Need more points
                    </p>                  )}
                </div>
              </div>
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
            <History className="h-5 w-5" />
            Points History
          </CardTitle>
          <CardDescription>Your recent points activity</CardDescription>
        </CardHeader>
        <CardContent>
          {ledger.length === 0 ? (
                  </div>;
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
          </p>
              <Link href="/community">Join Community</Link>
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
  );
}
    </div>);
}

;
  )
}
