
  const router = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  useEffect(() => {
    if (!isAuthenticated) {
      toast({    isLoading
    referralCode
    referrals
    rewards
    stats
    getReferralLink
    copyReferralLink
    shareOnSocialMedia} = useReferrals()
  useEffect((,) => {
    if (!isAuthenticated) {
      toast({
title: 'Authentication required',
        description: 'Please login to access the referral program',
        variant: 'destructive',
      });
      router.push('/login'); // Changed to router.push
    }
  }, [isAuthenticated, router]); // Changed navigate to router in dependencies
  const referralLink = getReferralLink()
  return (
    <div className='container max-w-7xl py-10'>
      <div className='mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>
            Referral Program
          </h1>
          <p className='text-muted-foreground mt-1'>
            Invite others to Zion AI Marketplace and earn rewards
          </p>
        </div>
        <Button className='flex items-center gap-2' onClick={copyReferralLink}>
          <Share className='h-4 w-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
          Share Referral Link
        </Button>
      </div>
      <ReferralStats stats={stats} isLoading={isLoading} />
<div className='grid gap-6 mt-6 lg:grid-cols-3'>
        <div className='lg:col-span-2 space-y-6'>
          <ReferralLink
            referralLink={referralLink}
            onCopy={copyReferralLink}
            onShare={shareOnSocialMedia}          />
          <Tabs defaultValue='referrals' className='w-full'>
            <TabsList className='w-full grid grid-cols-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
              <TabsTrigger
                value='referrals'
                className='flex items-center gap-2'>;
                <Users className='h-4 w-4' />;
                Your Referrals;
              </TabsTrigger>;
              <TabsTrigger value='rewards' className='flex items-center gap-2'>;
                <Share className='h-4 w-4' />;
                Rewards;
              </TabsTrigger>;
            </TabsList>;
            <TabsContent
              value='referrals'
              className='p-0 border rounded-md mt-6'
            >
              <ReferralTable referrals={referrals} isLoading={isLoading} />
            </TabsContent>
            <TabsContent value='rewards' className='p-0 mt-6'>
              <RewardsCard rewards={rewards} isLoading={isLoading} />
origin/cursor/automate-test-improve-and-merge-code-2533
            </TabsContent>
          </Tabs>
        </div>

<div className='space-y-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
          <ReferralGuide />
        </div>
      </div>
    </div>
  );
}, [isAuthenticated, router]), //Changed navigate to router in dependencies return (<div className="container max-w-7xl py-10" > <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4" > <div> <h1 className="text-3xl font-bold tracking-tight" >Referral Program</h1> <p className="text-muted-foreground mt-1" > Invite others to Zion AI Marketplace and earn rewards </p> </div> Share Referral Link </Button> </div> <ReferralStats stats= {;
  stats ;
}isLoading= {;
  isLoading ";
}/> <div className="grid gap-6 mt-6 lg:grid-cols-3" > <div className="lg:col-span-2 space-y-6" > <ReferralLink referralLink= {;
  referralLink ;
}onCopy= {;
  copyReferralLink ;
}onShare= {;
  shareOnSocialMedia ";
}/> <Tabs defaultValue="referrals" className="w-full" > <TabsList className="w-full grid grid-cols-2" > <TabsTrigger value="referrals" className="flex items-center gap-2" > <Users className="h-4 w-4" /> Your Referrals </TabsTrigger> <TabsTrigger value="rewards" className="flex items-center gap-2" > <Share className="h-4 w-4" /> Rewards </TabsTrigger> </TabsList> </TabsContent> </Tabs> </div> <div className="space-y-6" > <ReferralGuide /> <ReferralLeaderboard /> </div> </div> </div>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
