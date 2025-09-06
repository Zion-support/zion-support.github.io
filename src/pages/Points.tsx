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

      });
      await fetchLedger();
    } finally {

  }) {    if (!user?.id) return;  async function handleRedeem(): any (reward: { id: string, cost: number, title: string }) {;
    if (!user?.id) return;
    setRedeeming(true);
    try {;
      await fetch('/api/points/redeem', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ userId: user.id, cost: reward.cost, reward: reward.title });
      }),;
      await fetchLedger();
    } finally {;
      setRedeeming(false);    }      });
      await fetchLedger();
    } finally {;

      setRedeeming(false);



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

                    key={index}
                    className='flex items-start gap-3 p-3 rounded-lg border'
                  >
                    <div className='text-primary mt-1'>{opportunity.icon}</div>
                    <div className='flex-1'>
                      <h4 className='font-medium'>{opportunity.title}</h4>
                      <p className='text-sm text-muted-foreground'>
                        {opportunity.description}
            </CardTitle>
            <CardDescription>
              More ways to boost your point balance
            </CardDescription>
          </CardHeader>

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

                key={index}
                className='flex items-start gap-3 p-3 rounded-lg border'
              >
                <div className='text-primary mt-1'>{opportunity.icon}</div>
                <div className='flex-1'>
                  <h4 className='font-medium'>{opportunity.title}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {opportunity.description}
                    <Button
                      size='sm'
                      onClick={() => handleRedeem(reward)}
                      disabled={redeeming}

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

          <CardContent className="space-y-4">
            {upcomingRewards.map((reward) => (
              <div key={reward.id} className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <h4 className="font-medium">{reward.title}</h4>
                  <p className="text-sm text-muted-foreground">{reward.category}</p>

                    <Button;
                      size='sm';
                      on_click={() => handle_redeem (reward)}
                      disabled={redeeming}
                    >                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>
                  ) : (
                    <p className='text-xs text-muted-foreground'>
                      Need more points
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
          </CardTitle>
          <CardDescription>Your recent points activity</CardDescription>
        </CardHeader>
        <CardContent>
          {ledger.length === 0 ? (


            <p className="text-center py-8 text-muted-foreground">No points activity yet.</p>
          ) : (
            <ScrollArea className="h-64">
              <div className="space-y-2 mt-2">


                {ledger.map(entry => (
                  <div key={entry.id} className="flex items-center justify-between py-2 border-b">
                    <div>

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

                        })}
                      </p>
                    </div>
                    <Badge
                      variant='outline'
                      className={


                        entry && entry.delta>= 0;
                          ? 'bg-green-100 text-green-800';
                          : 'bg-red-100 text-red-800';
                      }                      variant="outline";
                      className = {entry && entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',}
                    >;
                      {entry.delta >= 0 ? '+' : ''}
                      {entry.delta} pts;
                    </Badge>;
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
