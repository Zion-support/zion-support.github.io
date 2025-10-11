} from 'lucide-react'
import { use_auth } from '@/hooks / use_auth'
import { use_points } from '@/hooks / use_points'
import {





  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card';import { Button } from '@/components/ui/button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react'

import {
  Gift,
  Star,
  Users,
  ShoppingBag,
  MessageSquare,
  TrendingUp,
  History } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { usePoints } from '@/hooks/usePoints'
import {
  Card,
  CardContent,
  Card,
  CardContent,

  CardDescription,
  CardHeader
  CardTitle
} from '@/components/ui/card';import { Button } from '@/components/ui/button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { usePoints } from '@/hooks/usePoints'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { usePoints } from '@/hooks/usePoints'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { usePoints } from '@/hooks/usePoints'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { formatDistanceToNow } from 'date-fns'
import Link from 'next/link'
import { LoginModal } from '@/components/auth/LoginModal'
  const { isAuthenticated, user } = useAuth()
  const { ledger, balance, loading, fetchLedger } = usePoints()
  const [loginOpen, setLoginOpen] = useState(false)
  const [redeeming, setRedeeming] = useState(false)
  async function handleRedeem(): any (reward: {
    id: string
    cost: number
    title: string
  }) {    if (!user?.id) return;  async function handleRedeem(reward: { id: string, cost: number, title: string }) {



export default function PointsPage() { const { isAuthenticated, user  } = useAuth(),
  const { ledger, balance, loading, fetchLedger  } = usePoints(),
  const [ loginOpen, setLoginOpen ] = useState(false),
  const [ redeeming, setRedeeming ] = useState(false),


  async function handleRedeem(reward: { id: string, cost: number, title: string }) {
    if (!user?.id) return
    setRedeeming(true)
    try {
      await fetch('/api/points/redeem', {

        method: 'POST'
        headers: { 'Content-Type': 'application/json' }

        body: JSON.stringify({
          userId: user.id
          cost: reward.cost
          reward: reward.title
        })
      })
      await fetchLedger()
    } finally {
      setRedeeming(false);    }      })
      await fetchLedger()
    } finally {
      setRedeeming(false)
import React, { useState } from 'react',
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react'
import { use_auth } from '@/hooks / use_auth'
import { use_points } from '@/hooks / use_points'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card'
import { Button } from '@/components / ui / button'
import { Badge } from '@/components / ui / badge'
import { ScrollArea } from '@/components / ui / scroll - area'
import { formatDistanceToNow } from 'date - fns'
import Link from 'next / link'
import { LoginModal } from '@/components / auth / LoginModal'
export default /**
 * PointsPage - Function description
 */
function PointsPage() {
  const { is_authenticated, user } = use_auth ()
  const { ledger, balance, loading, fetch_ledger } = use_points ()
  const [login_open, setLoginOpen] = useState (false)
  const [redeeming, set_redeeming] = useState (false)
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

    set_redeeming (true)
    try {
      await fetch ('/api / points / redeem', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          user_id: user.id,
          cost: reward.cost,
          reward: reward.title }) })
      await fetchLedger()
    } finally {

  }) {    if (!user?.id) return;  async function handleRedeem(): any (reward: { id: string, cost: number, title: string }) {
    if (!user?.id) return
    setRedeeming(true)
    try {
      await fetch('/api/points/redeem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, cost: reward.cost, reward: reward.title })
      }),
      await fetchLedger()
    } finally {
      setRedeeming(false);    }      })
      await fetchLedger()
    } finally {
      setRedeeming(false)
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, cost: reward.cost, reward: reward.title })
      })
      await fetchLedger()
    } finally {
      setRedeeming(false)




    }

  }

      set_redeeming (false);    }      })
      await fetch_ledger ()
    } finally {
      set_redeeming (false)
    }

  }

  const earning_opportunities = [
    {

      icon: <Users className='h - 5 w - 5' />,

      title: 'Sign Up & Profile Setup',
      description: 'Complete your profile and verify your email',
      points: '50 pts',
      action: is_authenticated ? '✓ Completed' : 'Get Started' },

      icon: <ShoppingBag className='h - 5 w - 5' />,



      icon: <Users className='h-5 w-5' />,
      title: 'Sign Up & Profile Setup',
      description: 'Complete your profile and verify your email',
      points: '50 pts',
      action: isAuthenticated ? '✓ Completed' : 'Get Started' },
      icon: <ShoppingBag className='h-5 w-5' />,
      title: 'First Purchase',
      description: 'Make your first purchase on the marketplace',
      points: '100 pts',
      action: 'Browse Marketplace',






      icon: <Users />
      title: 'Sign Up & Profile Setup'
      description: 'Complete your profile and verify your email'
      points: '50 pts'
      action: isAuthenticated ? '✓ Completed' : 'Get Started'
    }

      icon: <ShoppingBag />
      title: 'First Purchase'
      description: 'Make your first purchase on the marketplace'
      points: '100 pts'
      action: 'Browse Marketplace'
    }

    {

      icon: <MessageSquare className='h - 5 w - 5' />,
      title: 'Community Engagement',
      description: 'Post in the community or comment on discussions',
      points: '25 pts per post',
      action: 'Join Community' },
    {
      icon: <Users className='h - 5 w - 5' />,

      title: 'Refer Friends',
      description: 'Invite friends to join Zion marketplace',
      points: '200 pts per referral',
      action: 'Share Referral Link',




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

    } ]

  const upcoming_rewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },      title: "Refer Friends",

      description: "Invite friends to join Zion marketplace",
      points: "200 pts per referral",
      action: "Share Referral Link"
    }

      icon: <Users />
      title: 'Refer Friends'
      description: 'Invite friends to join Zion marketplace'
      points: '200 pts per referral'
      action: 'Share Referral Link'
    } ]

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

  const earningOpportunities = [
    {
      icon: <Users className='h-5 w-5' />,
      title: 'Sign Up & Profile Setup',
      description: 'Complete your profile and verify your email',
      points: '50 pts',
      action: isAuthenticated ? '✓ Completed' : 'Get Started' },
      icon: <ShoppingBag className='h-5 w-5' />,
      title: 'First Purchase',
      description: 'Make your first purchase on the marketplace',
      points: '100 pts',
      action: 'Browse Marketplace' },
    {
      icon: <MessageSquare className='h-5 w-5' />,
      title: 'Community Engagement',
      description: 'Post in the community or comment on discussions',
      points: '25 pts per post',
      action: 'Join Community' },
    {
      icon: <Users className='h-5 w-5' />,
      title: 'Refer Friends',
      description: 'Invite friends to join Zion marketplace',
      points: '200 pts per referral',
      action: 'Share Referral Link' },
    {
      icon: <ShoppingBag className="h-5 w-5" />,
      title: "First Purchase",
      description: "Make your first purchase on the marketplace",
      points: "100 pts",
      action: "Browse Marketplace"
    },
    {

    {
      id: 'premium1',
      title: 'Premium Features (1 month)',
      cost: 1000,
      category: 'Subscription' },
    {
      id: 'swag',
      title: 'Zion Swag Pack',
      cost: 1500,
      category: 'Merchandise' },
    {
      id: 'coupon25',
      title: '$25 Off Coupon',
      cost: 2000,
      category: 'Discount' },
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' } },
    {
      icon: <ShoppingBag className="h-5 w-5" />,
      title: "First Purchase",
      description: "Make your first purchase on the marketplace",
      points: "100 pts",
      action: "Browse Marketplace"
    },
    {
      icon: <Users className='h-5 w-5' />,
      title: 'Refer Friends',
      description: 'Invite friends to join Zion marketplace',
      points: '200 pts per referral',
      action: 'Share Referral Link' } ]

  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },      title: "Refer Friends",
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

  ],
  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },
    {
      id: 'premium1',
      title: 'Premium Features (1 month)',
      cost: 1000,
      category: 'Subscription' },
    {
      id: 'swag',
      title: 'Zion Swag Pack',
      cost: 1500,
      category: 'Merchandise' },
    {
      id: 'coupon25',
      title: '$25 Off Coupon',
      cost: 2000,
      category: 'Discount' },
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' } },
    {



      icon: <ShoppingBag className="h-5 w-5" />,
      title: "First Purchase",
      description: "Make your first purchase on the marketplace",
      points: "100 pts",
      action: "Browse Marketplace"
    },
    {
      icon: <Users className='h-5 w-5' />,
      title: 'Refer Friends',
      description: 'Invite friends to join Zion marketplace',
      points: '200 pts per referral',
      action: 'Share Referral Link' } ]

  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },      title: "Refer Friends",
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

  if (!isAuthenticated) {
    return (

    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },




  if (!isAuthenticated) {
    return (
      <>
      <>



        <div>
          <div>
            <Gift />
            <h1 className="text-4xl font-bold mb-4">Zion Rewards Program</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Earn points for every action you take and redeem them for exclusive rewards!
            </p>



            <Button onClick={() => setLoginOpen(true)} size="lg">
              Join Now to Start Earning
            </Button>
          </div>

          <div>
            <Card />
              <CardHeader />
                <CardTitle />
                  <TrendingUp className='h-5 w-5' />                  How to Earn Points          <div>
          <div>
            <Card />
              <CardHeader />
                <CardTitle />
                  <TrendingUp />
                  How to Earn Points


                </CardTitle>
                <CardDescription />
                  Multiple ways to accumulate rewards
                </CardDescription>
              </CardHeader>
              <CardContent />
                {earningOpportunities.map((opportunity, index) => (
                  <$2 />
                    key={index}

                    className='flex items-start gap-3 p-3 rounded-lg border'
                  >
                    <div className='text-primary mt-1'>{opportunity.icon}</div>
                    <div>
                      <h4 className='font-medium'>{opportunity.title}</h4>
                      <p className='text-sm text-muted-foreground'>
                        {opportunity.description}

                      </p>                  <div>
              <CardContent />
                {earningOpportunities.map((opportunity, index) => (
                  <div>
              <CardContent />
                {earningOpportunities.map((opportunity, index) => (
                  <div>
                    <div className="text-primary mt-1">{opportunity.icon}</div>
                    <div>
                      <h4 className="font-medium">{opportunity.title}</h4>
                      <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                    </div>











                    <Badge variant="secondary">{opportunity.points}</Badge>
                  </div>
                ))}

              </CardContent>
            </Card>
            <Card />
              <CardHeader />
                <CardTitle />
                  <Gift className='h-5 w-5' />                  Upcoming Rewards                <CardTitle />
                <CardTitle />
                <CardTitle />
                  <Gift />
                  Upcoming Rewards
                </CardTitle>
                <CardDescription />
                  What you can redeem your points for
                </CardDescription>
              </CardHeader>



              <CardContent />
                {upcomingRewards.map((reward, index) => (
                  <div>
          <div>
                      <h4 className="font-medium">{reward.title}</h4>
                      <p className="text-sm text-muted-foreground">{reward.category}</p>
                    </div>



                    <Badge variant="outline">{reward.cost}</Badge>
                  </div>
                ))}

              </CardContent>
            </Card>
          </div>





          <Card />
            <CardContent />
              <Star />
              <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground mb-4">
                Our full rewards system is launching soon! Sign up now to start earning points immediately.
              </p>
              <Button onClick={() => setLoginOpen(true)}>
                Create Account
              </Button>
            </CardContent>



          </Card>
        </div>
        <LoginModal />
      </>
      <>
        <div>
          <div>
            <Gift />
            <h1 className='text-4xl font-bold mb-4'>Zion Rewards Program</h1>
            <p className='text-xl text-muted-foreground mb-6'>
              Earn points for every action you take and redeem them for
              exclusive rewards!</$1>
            <Button onClick={() => setLoginOpen(true)} size='lg'>              Join Now to Start Earning</$1></$1>
            <Button onClick={(,) => setLoginOpen(true)} size="lg">
            <Button onClick={() => setLoginOpen(true)} size="lg">
              Join Now to Start Earning</$1></$1>
          <div>
            <Card />
              <CardHeader />
                <CardTitle />
                  <TrendingUp className='h-5 w-5' />                  How to Earn Points          <div>
            <Card />
              <CardHeader />
                <CardTitle />
                  <TrendingUp className="h-5 w-5" /></$1>
                <CardDescription />
                  Multiple ways to accumulate rewards</$1></$1>
              <CardContent />
                {earningOpportunities && earningOpportunities.map((opportunity, index) => (
                  <$2 />
                    key={index}

                    className='flex items-start gap-3 p-3 rounded-lg border'>
                    <div className='text-primary mt-1'>{opportunity && opportunity.icon}</div>
                    <div>
                      <h4 className='font-medium'>{opportunity && opportunity.title}</h4>
                      <p className='text-sm text-muted-foreground'>
                        {opportunity && opportunity.description}

                      </p>                  <div>
                    <div className="text-primary mt-1">{opportunity && opportunity.icon}</div>
                    <div>
                      <h4 className="font-medium">{opportunity && opportunity.title}</h4>
                      <p className="text-sm text-muted-foreground">{opportunity && opportunity.description}</p></$1>
                    <Badge variant='secondary'>{opportunity && opportunity.points}</Badge>                  </div>                    </div>
                    <Badge variant="secondary">{opportunity && opportunity.points}</Badge></$1>
                ))}

              </CardContent></$1>
            <Card />
              <CardHeader />
                <CardTitle />
                  <Gift className='h-5 w-5' />                  Upcoming Rewards                <CardTitle />
                  <Gift />
                  Upcoming Rewards</$1>
                <CardDescription />
                  What you can redeem your points for</$1></$1>
              <CardContent />
                {upcomingRewards && upcomingRewards.map((reward, index) => (
                  <$2 />
                    key={index}

                    className='flex items-center justify-between p-3 rounded-lg border'>                    <div>
                      <h4 className='font-medium'>{reward && reward.title}</h4>
                      <p className='text-sm text-muted-foreground'>
                        {reward && reward.category}

                      </p></$1>
                    <Badge variant='outline'>{reward && reward.cost}</Badge>                  </div>
                    <Badge variant="outline">{reward && reward.cost}</Badge>
                {upcomingRewards && upcomingRewards.map((reward, index) => (
                  <div>
          <div>
                      <h4 className="font-medium">{reward && reward.title}</h4>
                      <p className="text-sm text-muted-foreground">{reward && reward.category}</p></$1>
                    <Badge variant="outline">{reward && reward.cost}</Badge></$1>
                ))}

              </CardContent></$1></$1>
          <Card />
            <CardContent />
              <Star />
              <h3 className='text-2xl font-bold mb-2'>Coming Soon</h3>
              <p className='text-muted-foreground mb-4'>
                Our full rewards system is launching soon! Sign up now to start
                earning points immediately.</$1>
              <Button onClick={() => setLoginOpen(true)}>Create Account</Button>            </CardContent>          <Card />
            <CardContent />
              <Star />
              <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground mb-4">
                Our full rewards system is launching soon! Sign up now to start earning points immediately.</$1>
              <Button onClick={() => setLoginOpen(true)}></$1>                  <div>
                    <div className="text - primary mt - 1">{opportunity.icon}</div>
                    <div>
                      <h4 className="font - medium">{opportunity.title}</h4>
                      <p className="text - sm text - muted - foreground">{opportunity.description}</p></$1>
                    <Badge variant='secondary'>{opportunity.points}</Badge>                  </div>                    </div>
                    <Badge variant="secondary">{opportunity.points}</Badge></$1>))}

              </CardContent></$1>
            <Card />
              <CardHeader />
                <CardTitle />
                  <Gift className='h - 5 w - 5' />                  Upcoming Rewards                <CardTitle />
                  <Gift />
                  Upcoming Rewards</$1>
                <CardDescription />
                  What you can redeem your points for</$1></$1>
              <CardContent />
                {upcoming_rewards.map ((reward, index) => (
                  <;$2 />
                    key={index}

                    className='flex items - center justify - between p - 3 rounded - lg border'
                  >                    <div>
                      <h4 className='font - medium'>{reward.title}</h4>
                      <p className='text - sm text - muted - foreground'>
                        {reward.category}

                      </p></$1>
                    <Badge variant='outline'>{reward.cost}</Badge>                  </div>
                    <Badge variant="outline">{reward.cost}</Badge>
                {upcoming_rewards.map ((reward, index) => (
                  <div>
          <div>
                      <h4 className="font - medium">{reward.title}</h4>
                      <p className="text - sm text - muted - foreground">{reward.category}</p></$1>
                    <Badge variant="outline">{reward.cost}</Badge></$1>))}

              </CardContent></$1></$1>
          <Card />
            <CardContent />
              <Star />
              <h3 className='text - 2xl font - bold mb - 2'>Coming Soon</h3>
              <p className='text - muted - foreground mb - 4'>
                Our full rewards system is launching soon! Sign up now to start
                earning points immediately.</$1>
              <Button on_click={() => setLoginOpen (true)}>Create Account</Button>            </CardContent>          <Card />
            <CardContent />
              <Star />
              <h3 className="text - 2xl font - bold mb - 2">Coming Soon</h3>
              <p className="text - muted - foreground mb - 4">
                Our full rewards system is launching soon! Sign up now to start earning points immediately.</$1>
              <Button on_click={() => setLoginOpen (true)}>
                Create Account</$1></$1></$1>
    )
  }

  return (




          <p className="text-sm text-muted-foreground mt-2">
            You haven't earned any points yet. Complete the tasks below to start
            earning and redeem rewards.
          </p>
        )}

      </div>





      <div>
        <Card />
          <CardHeader />
            <CardTitle />
              <TrendingUp />
              Keep Earning



            </CardTitle>
            <CardDescription />
              More ways to boost your point balance
            </CardDescription>
          </CardHeader>
          <CardContent />
            {earningOpportunities.map((opportunity, index) => (
              <$2 />
                key={index}

                className='flex items-start gap-3 p-3 rounded-lg border'
              >
                <div className='text-primary mt-1'>{opportunity.icon}</div>
                <div>
                  <h4 className='font-medium'>{opportunity.title}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {opportunity.description}

                  </p>              <div>
          <CardContent />
            {earningOpportunities.map((opportunity, index) => (
              <div>
          <CardContent />
            {earningOpportunities.map((opportunity, index) => (
              <div>
                <div className="text-primary mt-1">{opportunity.icon}</div>
                <div>
                  <h4 className="font-medium">{opportunity.title}</h4>
                  <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                </div>











                <div>
                  <Badge variant="secondary" className="mb-1">{opportunity.points}</Badge>
                  <p className="text-xs text-muted-foreground">{opportunity.action}</p>
                </div>
              </div>
            ))}

          </CardContent>
        </Card>
        <Card />
          <CardHeader />
            <CardTitle />
              <Gift className='h-5 w-5' />              Available Rewards            <CardTitle />
            <CardTitle />
            <CardTitle />
              <Gift />
              Available Rewards
            </CardTitle>
            <CardDescription />
              Redeem your points for these rewards
            </CardDescription>
          </CardHeader>
          <CardContent />
            {upcomingRewards.map(reward => (
              <$2 />
                key={reward.id}

                className='flex items - center justify - between p - 3 rounded - lg border'
              >
                  <h4 className='font - medium'>{reward.title}</h4>
                  <p className='text - sm text - muted - foreground'>
                    {reward.category}

                  </p></$1>
                <div>
                  <Badge />
                    {reward.cost} pts</$1>
                  {balance >= reward.cost ? (




        </div>
        <p className='text-xl text-muted-foreground'>Points Available</p>
        {!loading && balance === 0 && (
          <p className='text-sm text-muted-foreground mt-2'>            You haven't earned any points yet. Complete the tasks below to start        </div>
        <p className="text-xl text-muted-foreground">Points Available</p>
        {!loading && balance === 0 && (
          <p className="text-sm text-muted-foreground mt-2">
            You haven't earned any points yet. Complete the tasks below to start
            earning and redeem rewards.</$1>
        )}

      </div>
      <div>
        <Card />
          <CardHeader />
            <CardTitle />
              <TrendingUp className='h-5 w-5' />              Keep Earning      <div>
        <Card />
          <CardHeader />
            <CardTitle />
              <TrendingUp className="h-5 w-5" /></$1>
            <CardDescription />
              More ways to boost your point balance</$1></$1>
          <CardContent />
            {earningOpportunities && earningOpportunities.map((opportunity, index) => (
              <$2 />
                key={index}

                className='flex items-start gap-3 p-3 rounded-lg border'>
                <div className='text-primary mt-1'>{opportunity && opportunity.icon}</div>
                <div>
                  <h4 className='font-medium'>{opportunity && opportunity.title}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {opportunity && opportunity.description}

                  </p>              <div>
                <div className="text-primary mt-1">{opportunity && opportunity.icon}</div>
                <div>
                  <h4 className="font-medium">{opportunity && opportunity.title}</h4>
                  <p className="text-sm text-muted-foreground">{opportunity && opportunity.description}</p></$1>
                <div>
                  <Badge />
                    {opportunity && opportunity.points}

                  </Badge>
                  <p className='text-xs text-muted-foreground'>
                    {opportunity && opportunity.action}

                  </p>                </div>                </div>
                <div>
                  <Badge variant="secondary" className="mb-1">{opportunity && opportunity.points}</Badge>
                  <p className="text-xs text-muted-foreground">{opportunity && opportunity.action}</p></$1></$1>
            ))}

          </CardContent></$1>
        <Card />
          <CardHeader />
            <CardTitle />
              <Gift className='h-5 w-5' />              Available Rewards            <CardTitle />
              <Gift />
              Available Rewards</$1>
            <CardDescription />
              Redeem your points for these rewards</$1></$1>
          <CardContent />
            {upcomingRewards && upcomingRewards.map(reward => (
              <$2 />
                key={reward && reward.id}

                className='flex items-center justify-between p-3 rounded-lg border'>
                  <h4 className='font-medium'>{reward && reward.title}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {reward && reward.category}

                  </p></$1>
                <div>
                  <Badge />
                    {reward && reward.cost} pts</$1>
                  {balance >= reward && reward.cost ? (
                    <Button />
                      size='sm'
                      onClick={() => handleRedeem(reward)}

                      disabled={redeeming}

                    >                      {redeeming ? 'Processing...' : 'Redeem'}

                    </Button>
                  ) : (
                    <p className='text-xs text-muted-foreground'>
                      Need more points</$1>                  )}

                    <p className="text-xs text-muted-foreground">Need more points</p>
                <div>
                  <h4 className="font-medium">{reward && reward.title}</h4>
                  <p className="text-sm text-muted-foreground">{reward && reward.category}</p></$1>
                <div>
                  <Badge variant="outline" className="mb-1">{reward && reward.cost} pts</Badge>
                  {balance >= reward && reward.cost ? (
                    <Button size="sm" onClick={() => handleRedeem(reward)} disabled={redeeming}>
                      {redeeming ? 'Processing...' : 'Redeem'}

                    </Button>
                  ) : (
                    <p className="text-xs text-muted-foreground">Need more points</p>
          <CardContent />
            {upcomingRewards.map((reward) => (
              <div>
          <div>
                  <h4 className="font-medium">{reward.title}</h4>
                  <p className="text-sm text-muted-foreground">{reward.category}</p>

                </div>
                <div>
                  <Badge variant="outline" className="mb-1">{reward.cost} pts</Badge>
                  {balance >= reward.cost ? (
                    <Button />
                      size='sm'
                      onClick={() => handleRedeem(reward)}

                      disabled={redeeming}

                    >                      {redeeming ? 'Processing...' : 'Redeem'}

                    </Button>
                  ) : (
                    <p className='text-xs text-muted-foreground'>
                      Need more points
                    </p>                  )}

                    <p className="text - xs text - muted - foreground">Need more points</p>
                <div>
                  <h4 className="font - medium">{reward.title}</h4>
                  <p className="text - sm text - muted - foreground">{reward.category}</p></$1>
                <div>
                  <Badge variant="outline" className="mb - 1">{reward.cost} pts</Badge>
                  {balance >= reward.cost ? (
                    <Button size="sm" on_click={() => handle_redeem (reward)} disabled={redeeming}></$1>
                <div>
                  <Badge variant="outline" className="mb-1">{reward.cost} pts</Badge>
                  {balance >= reward.cost ? (


                    <Button size="sm" onClick={() => handleRedeem(reward)} disabled={redeeming}>
                      {redeeming ? 'Processing...' : 'Redeem'}

            ))}

          </CardContent>
        </Card>
      </div>
      <Card />
        <CardHeader />
          <CardTitle />
            <History className='h-5 w-5' />            Points History          <CardTitle />
          <CardTitle />
          <CardTitle />
            <History />
            Points History
          </CardTitle>
          <CardDescription>Your recent points activity</CardDescription>
        </CardHeader>
        <CardContent />
          {ledger.length === 0 ? (
            <p className='text-center py-8 text-muted-foreground'>
              No points activity yet.
            </p>

            <ScrollArea />
              <div>
            <p className="text-center py-8 text-muted-foreground">No points activity yet.</p>
          ) : (
            <ScrollArea />
              <div>
                      <p className="font-medium capitalize">{entry.reason || 'adjustment'}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(entry.created_at), { addSuffix: true })}

                      </p>
                    </div>
                    <Badge />
                      variant="outline"
                      className={entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}

                    >
                      {entry.delta >= 0 ? '+' : ''}

                      {entry.delta} pts</$1></$1>
                ))}

              </div></$1>
          )}

      <Card />
        <CardContent />
          <Star />
          <h3 className="text-2xl font-bold mb-2">Full Rewards System Coming Soon</h3>
          <p className="text-muted-foreground mb-4">
            We're finalizing the redemption system. Keep earning points - they'll be ready to spend soon!


          </p>
          <div>
            <Button />
              <Link href="/marketplace">Browse Marketplace</Link>
            </Button>
            <Button />
              <Link href='/community'>Join Community</Link>            <Button />
            <Button />
              <Link href="/community">Join Community</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>


        </CardContent></$1>
      <Card />
        <CardContent />
          <Star />
          <h3 className='text-2xl font-bold mb-2'>
            Full Rewards System Coming Soon</$1>
          <p className='text-muted-foreground mb-4'>
            We're finalizing the redemption system. Keep earning points -
            they'll be ready to spend soon!</$1>
          <div>
            <Button />
              <Link href='/marketplace'>Browse Marketplace</Link>          </p>
          <div>
            <Button />
              <Link href="/marketplace">Browse Marketplace</Link></$1>
            <Button />
              <Link href='/community'>Join Community</Link>            <Button />
              <Link href="/community">Join Community</Link></$1>
            <Button variant='outline' asChild></$1>) : (
                    <p className="text - xs text - muted - foreground">Need more points</p>)}

                </div></$1>))}

          </CardContent></$1></$1>
      <Card />
        <CardHeader />
          <CardTitle />
            <History className='h - 5 w - 5' />            Points History          <CardTitle />
            <History />
            Points History</$1>
          <CardDescription > Your recent points activity</CardDescription></$1>
        <CardContent />
          {ledger.length === 0 ? (
            <p className='text - center py - 8 text - muted - foreground'>
              No points activity yet.</$1>
            <ScrollArea />
              <div>
                {ledger.map (entry => (
                  <;$2 />
                    key={entry.id}

                    className='flex items - center justify - between py - 2 border - b'
                  >
                    <div>
                      <p className='font - medium capitalize'>
                        {entry.reason || 'adjustment'}

                      </p>
                      <p className='text - xs text - muted - foreground'>
                        {formatDistanceToNow (new Date (entry.created_at), {
                          add_suffix: true })}

                      </p></$1>
                    <Badge />
                      variant='outline'
                      className={
                        entry.delta >= 0
                          ? 'bg - green - 100 text - green - 800'
                          : 'bg - red - 100 text - red - 800'
                      }                      variant="outline"
                      class_name = {entry.delta >= 0 ? 'bg - green - 100 text - green - 800' : 'bg - red - 100 text - red - 800' }

                    >
                      {entry.delta >= 0 ? '+' : ''}                      {entry.delta} pts                    </Badge></$1>))}

              </div></$1>)}

        </CardContent></$1>
      <Card />
        <CardContent />
          <Star />
          <h3 className='text - 2xl font - bold mb - 2'>
            Full Rewards System Coming Soon</$1>
          <p className='text - muted - foreground mb - 4'>
            We're finalizing the redemption system. Keep earning points -
            they'll be ready to spend soon!</$1>
          <div>
            <Button />
              <Link href='/marketplace'>Browse Marketplace</Link>          </p>
          <div>
            <Button />
              <Link href="/marketplace">Browse Marketplace</Link></$1>
            <Button />
              <Link href='/community'>Join Community</Link>            <Button />
              <Link href="/community">Join Community</Link></$1>
            <Button />
              <Link href='/community'>Join Community</Link>            </Button></$1></$1></$1>
  )
}

  )
}

    </div>)
}

  )

}

    </div>)
}
