import React, { useState } from 'react';

import { Button } from '@/components/ui/button';

import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { LoginModal } from '@/components/auth/LoginModal';

export default function PointsPage() {
  const { isAuthenticated, user } = useAuth();
  const { ledger, balance, loading, fetchLedger } = usePoints();
  const [loginOpen, setLoginOpen] = useState(false);
  const [redeeming, setRedeeming] = useState(false);

  async function handleRedeem(reward: {
    id: string;
    cost: number;
    title: string;
  }) {    if (!user?.id) return;

    if (!user?.id) return;

    setRedeeming(true);
    try {
      await fetch('/api/points/redeem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          cost: reward.cost,
          reward: reward.title,
        }),

      });
      await fetchLedger();
    } finally {
      setRedeeming(false);    }

    }

  }

  const earningOpportunities = [
    {
      icon: <Users className='h-5 w-5' />,
      title: 'Sign Up & Profile Setup',
      description: 'Complete your profile and verify your email',
      points: '50 pts',
      action: isAuthenticated ? '✓ Completed' : 'Get Started',
    },

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
      icon: <Users className='h-5 w-5' />,
      title: 'Refer Friends',
      description: 'Invite friends to join Zion marketplace',
      points: '200 pts per referral',
      action: 'Share Referral Link',
    },  ];

  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },
      title: "Refer Friends",
      description: "Invite friends to join Zion marketplace",
      points: "200 pts per referral",
      action: "Share Referral Link"
    }

  ];

  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },

              Join Now to Start Earning
            </Button>
          </div>

                  How to Earn Points

                </CardTitle>
                <CardDescription>
                  Multiple ways to accumulate rewards
                </CardDescription>
              </CardHeader>

                    </div>
                    <Badge variant='secondary'>{opportunity.points}</Badge>                  </div>

                  </div>

                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Gift className='h-5 w-5' />                  Upcoming Rewards

                  Upcoming Rewards

                </CardTitle>
                <CardDescription>
                  What you can redeem your points for
                </CardDescription>
              </CardHeader>

                    <div>
                      <h4 className='font-medium'>{reward.title}</h4>
                      <p className='text-sm text-muted-foreground'>
                        {reward.category}
                      </p>
                    </div>
                    <Badge variant='outline'>{reward.cost}</Badge>                  </div>

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
              <Button onClick={() => setLoginOpen(true)}>Create Account</Button>            </CardContent>

            </CardContent>

          </Card>
        </div>
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
      </>
    );
  }

  return (
    <div className='container py-10 max-w-4xl'>
      <div className='text-center mb-8'>
        <Gift className='h-16 w-16 text-primary mx-auto mb-4' />
        <h1 className='text-4xl font-bold mb-4'>Your Rewards</h1>
        <div className='text-6xl font-bold text-primary mb-2'>
          {loading ? '...' : balance}

        </div>
        <p className='text-xl text-muted-foreground'>Points Available</p>
        {!loading && balance === 0 && (
          <p className='text-sm text-muted-foreground mt-2'>            You haven't earned any points yet. Complete the tasks below to start

            You haven't earned any points yet. Complete the tasks below to start

            earning and redeem rewards.
          </p>
        )}
      </div>

      <div className='grid md:grid-cols-2 gap-8 mb-12'>
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <TrendingUp className='h-5 w-5' />              Keep Earning

              Keep Earning

            </CardTitle>
            <CardDescription>
              More ways to boost your point balance
            </CardDescription>
          </CardHeader>

                </div>
                <div className='text-right'>
                  <Badge variant='secondary' className='mb-1'>
                    {opportunity.points}
                  </Badge>
                  <p className='text-xs text-muted-foreground'>
                    {opportunity.action}
                  </p>                </div>

                </div>

              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Gift className='h-5 w-5' />              Available Rewards

              Available Rewards

            </CardTitle>
            <CardDescription>
              Redeem your points for these rewards
            </CardDescription>
          </CardHeader>

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

                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>
                  ) : (
                    <p className='text-xs text-muted-foreground'>
                      Need more points
                    </p>                  )}

                  )}

                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <History className='h-5 w-5' />            Points History

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
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/marketplace">Browse Marketplace</Link>
            </Button>
            <Button variant='outline' asChild>
              <Link href='/community'>Join Community</Link>

            </Button>
            <Button variant='outline' asChild>
              <Link href='/community'>Join Community</Link>            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}