

export default function ReferralsPage() {_const _router = useRouter(); // Changed from navigate
  const { isAuthenticated} = useAuth();
  const {_isLoading, _referralCode, _referrals, _rewards, _stats, _getReferralLink, _copyReferralLink, _shareOnSocialMedia} = useReferrals();

  useEffect__(() => {_if (!isAuthenticated) {
      toast({
        title: "Authentication required", _description: "Please login to access the referral program", _variant: "destructive"});
      router.push("/login"); // Changed to router.push
    }
  }, [isAuthenticated, router]); // Changed navigate to router in dependencies

  const _referralLink = getReferralLink();

  return (
    <div className="container max-w-7xl py-10">
      <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Referral Program</h1>
          <p className="text-muted-foreground mt-1">
            Invite others to Zion AI Marketplace and earn rewards
          </p>
        </div>
        <Button className="flex items-center gap-2" onClick={_copyReferralLink}>
          <Share className="h-4 w-4" />
          Share Referral Link
        </Button>
      </div>

      <ReferralStats stats={_stats} isLoading={_isLoading} />
      
      <div className="grid gap-6 mt-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <ReferralLink 
            referralLink={_referralLink} 
            onCopy={_copyReferralLink} 
            onShare={_shareOnSocialMedia}
          />
          
          <Tabs defaultValue="referrals" className="w-full">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="referrals" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Your Referrals
              </TabsTrigger>
              <TabsTrigger value="rewards" className="flex items-center gap-2">
                <Share className="h-4 w-4" />
                Rewards
              </TabsTrigger>
            </TabsList>
            <TabsContent value="referrals" className="p-0 border rounded-md mt-6">
              <ReferralTable referrals={_referrals} isLoading={_isLoading} />
            </TabsContent>
            <TabsContent value="rewards" className="p-0 mt-6">
              <RewardsCard rewards={_rewards} isLoading={_isLoading} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <ReferralGuide />
          <ReferralLeaderboard />
        </div>
      </div>
    </div>
  );
}
