

import { Share, Users } from 'lucide-react'
import { useRouter } from 'next/router', // Changed from useNavigate
import {

  const {
    isLoading,
    referralCode,
    referrals,
    rewards,
    stats,
    getReferralLink,
    copyReferralLink,

    shareOnSocialMedia} = useReferrals(),

  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please login to access the referral program",
        variant: "destructive"}),
      router.push("/login"), // Changed to router.push
    }
  }, [isAuthenticated, router]), // Changed navigate to router in dependencies

  const referralLink = getReferralLink(),

  return (
    <div className="container max-w-7xl py-10">

      <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Referral Program</h1>
          <p className="text-muted-foreground mt-1">
            Invite others to Zion AI Marketplace and earn rewards
          </p>
        </div>
        <Button className="flex items-center gap-2" onClick={copyReferralLink}>
          <Share className="h-4 w-4" />
          Share Referral Link
        </Button>
      </div>
      <ReferralStats stats={stats} isLoading={isLoading} />

                Your Referrals
              </TabsTrigger>
              <TabsTrigger value="rewards" className="flex items-center gap-2">
                <Share className="h-4 w-4" />
                Rewards
              </TabsTrigger>
            </TabsList>
            <TabsContent value="referrals" className="p-0 border rounded-md mt-6">
              <ReferralTable referrals={referrals} isLoading={isLoading} />
            </TabsContent>

            <TabsContent value="rewards" className="p-0 mt-6">
              <RewardsCard rewards={rewards} isLoading={isLoading} />
            </TabsContent>
          </Tabs>
        </div>

          <ReferralGuide />
          <ReferralLeaderboard />
        </div>
      </div>
    </div>
  )
