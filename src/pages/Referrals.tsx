<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useReferrals } from '@/hooks/useReferrals';
import { ReferralStats } from '@/components/referrals/ReferralStats';
import { ReferralLink } from '@/components/referrals/ReferralLink';
import { ReferralTable } from '@/components/referrals/ReferralTable';
import { RewardsCard } from '@/components/referrals/RewardsCard';
import { ReferralGuide } from '@/components/referrals/ReferralGuide';
import { ReferralLeaderboard } from '@/components/referrals/ReferralLeaderboard';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Share, Users } from 'lucide-react'
import { useRouter } from 'next/router'; // Changed from useNavigate

=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Share, Users } from 'lucide-react'
import { useRouter } from 'next/router'; // Changed from useNavigate


>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
export default function ReferralsPage() {
  const router = useRouter(), // Changed from navigate
  const { isAuthenticated } = useAuth();
  const {
<<<<<<< HEAD
<<<<<<< HEAD
    isLoading,
    referralCode,
    referrals,
    rewards,
    stats,
    getReferralLink,
    copyReferralLink,
    shareOnSocialMedia,
  } = useReferrals();
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    isLoading;
    referralCode;
    referrals;
    rewards;
    stats;
    getReferralLink;
    copyReferralLink;
    shareOnSocialMedia} = useReferrals();
<<<<<<< HEAD

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  useEffect(() => {
    if (!isAuthenticated) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: 'Authentication required',
        description: 'Please login to access the referral program',
        variant: 'destructive',
      });
      router.push('/login'); // Changed to router.push
=======
        title: "Authentication required",
        description: "Please login to access the referral program",
        variant: "destructive"}),
      router.push("/login"), // Changed to router.push
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }, [isAuthenticated, router]), // Changed navigate to router in dependencies

  const referralLink = getReferralLink();

  return (
    <div className="container max-w-7xl py-10">
      <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Referral Program</h1>
          <p className="text-muted-foreground mt-1">
            Invite others to Zion AI Marketplace and earn rewards
          </p>
        </div>
<<<<<<< HEAD
        <Button className='flex items-center gap-2' onClick={copyReferralLink}>
          <Share className='h-4 w-4' />
=======
        title: "Authentication required",
        description: "Please login to access the referral program",
        variant: "destructive"});
      router.push("/login"), // Changed to router.push
    }
  }, [isAuthenticated, router]), // Changed navigate to router in dependencies

  const referralLink = getReferralLink();


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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <Button className="flex items-center gap-2" onClick={copyReferralLink}>
          <Share className="h-4 w-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          Share Referral Link
        </Button>
      </div>

      <ReferralStats stats={stats} isLoading={isLoading} />
<<<<<<< HEAD
<<<<<<< HEAD

      <div className='grid gap-6 mt-6 lg:grid-cols-3'>
        <div className='lg:col-span-2 space-y-6'>
          <ReferralLink
            referralLink={referralLink}
            onCopy={copyReferralLink}
=======
      
      <div className="grid gap-6 mt-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <ReferralLink 
            referralLink={referralLink} 
            onCopy={copyReferralLink} 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            onShare={shareOnSocialMedia}
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
              <ReferralTable referrals={referrals} isLoading={isLoading} />
            </TabsContent>
<<<<<<< HEAD
            <TabsContent value='rewards' className='p-0 mt-6'>
=======
      
      <div className="grid gap-6 mt-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <ReferralLink 
            referralLink={referralLink} 
            onCopy={copyReferralLink} 
            onShare={shareOnSocialMedia}
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
              <ReferralTable referrals={referrals} isLoading={isLoading} />
            </TabsContent>
            <TabsContent value="rewards" className="p-0 mt-6">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <TabsContent value="rewards" className="p-0 mt-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <RewardsCard rewards={rewards} isLoading={isLoading} />
            </TabsContent>
          </Tabs>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
        <div className='space-y-6'>
=======
        <div className="space-y-6">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="space-y-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <ReferralGuide />
          <ReferralLeaderboard />
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
