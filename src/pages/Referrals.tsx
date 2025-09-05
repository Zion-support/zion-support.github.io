
import { useEffect } from 'react',
import { useAuth } from '@/hooks/useAuth',
import { useReferrals } from '@/hooks/useReferrals',
import { ReferralStats } from '@/components/referrals/ReferralStats',
import { ReferralLink } from '@/components/referrals/ReferralLink',
import { ReferralTable } from '@/components/referrals/ReferralTable',
import { RewardsCard } from '@/components/referrals/RewardsCard',
import { ReferralGuide } from '@/components/referrals/ReferralGuide',
import { ReferralLeaderboard } from '@/components/referrals/ReferralLeaderboard',
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Button } from '@/components/ui/button',
import { toast } from '@/hooks/use-toast',import { Share, Users } from 'lucide-react'
import { useRouter } from 'next/router', // Changed from useNavigate,
export default function ReferralsPage() {
  const router = useRouter(), // Changed from navigate,
const { isAuthenticated } = useAuth(),
  const {
    isLoading,
    referralCode,
    referrals,
    rewards,
    stats,
    getReferralLink,
    copyReferralLink,
    shareOnSocialMedia} = useReferrals(),

export default function ReferralsPage() {const router = useRouter(); // Changed from navigate,
const { isAuthenticated} = useAuth();
  const {isLoading, referralCode, referrals, rewards, stats, getReferralLink, copyReferralLink, shareOnSocialMedia} = useReferrals();

  useEffect_(() => {if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please login to access the referral program",
        variant: "destructive"}),
      router.push("/login"), // Changed to router.push        title: "Authentication required", description: "Please login to access the referral program", variant: "destructive"});
      router.push("/login"); // Changed to router.push
    }
  }, [isAuthenticated, router]), // Changed navigate to router in dependencies,
const referralLink = getReferralLink(),
  return (
    <div className=&quot;container max-w-7xl py-10&quot;>
      <div className=&quot;mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4&quot;>
        <div>
          <h1 className=&quot;text-3xl font-bold tracking-tight&quot;>Referral Program</h1>
          <p className=&quot;text-muted-foreground mt-1&quot;>
            Invite others to Zion AI Marketplace and earn rewards
          </p>
        </div>
        <Button className=&quot;flex items-center gap-2&quot; onClick={copyReferralLink}>
          <Share className=&quot;h-4 w-4&quot; />          Share Referral Link
        </Button>
      </div>

      <ReferralStats stats={stats} isLoading={isLoading} />
      
      <div className=&quot;grid gap-6 mt-6 lg:grid-cols-3&quot;>
        <div className=&quot;lg:col-span-2 space-y-6&quot;>
          <ReferralLink,
referralLink={referralLink} 
            onCopy={copyReferralLink} 
            onShare={shareOnSocialMedia}
          />
          
          <Tabs defaultValue=&quot;referrals&quot; className=&quot;w-full&quot;>
            <TabsList className=&quot;w-full grid grid-cols-2&quot;>
              <TabsTrigger value=&quot;referrals&quot; className=&quot;flex items-center gap-2&quot;>
                <Users className=&quot;h-4 w-4&quot; />
                Your Referrals
              </TabsTrigger>
              <TabsTrigger value=&quot;rewards&quot; className=&quot;flex items-center gap-2&quot;>
                <Share className=&quot;h-4 w-4&quot; />
                Rewards
              </TabsTrigger>
            </TabsList>
            <TabsContent value=&quot;referrals&quot; className=&quot;p-0 border rounded-md mt-6&quot;>
              <ReferralTable referrals={referrals} isLoading={isLoading} />
            </TabsContent>
            <TabsContent value=&quot;rewards&quot; className=&quot;p-0 mt-6&quot;>
              <RewardsCard rewards={rewards} isLoading={isLoading} />            </TabsContent>
          </Tabs>
        </div>

        <div className=&quot;space-y-6&quot;>
          <ReferralGuide />
          <ReferralLeaderboard />
        </div>
      </div>
    </div>
  )
}
