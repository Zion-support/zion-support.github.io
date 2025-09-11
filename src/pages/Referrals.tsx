import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useReferrals } from '@/hooks/useReferrals';
import { ReferralStats } from '@/components/referrals/ReferralStats';
import { ReferralLink } from '@/components/referrals/ReferralLink';
import { ReferralTable } from '@/components/referrals/ReferralTable';
import { RewardsCard } from '@/components/referrals/RewardsCard';
import { ReferralGuide } from '@/components/referrals/ReferralGuide';
import { ReferralLeaderboard } from '@/components/referrals/ReferralLeaderboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

<<<<<<< HEAD
<<<<<<< HEAD
import { Share, Users } from 'lucide-react'
import { useRouter } from 'next/router', // Changed from useNavigate
import {

import { useEffect  } from 'react';
import { useAuth  } from '@/hooks/useAuth';
import { useReferrals  } from '@/hooks/useReferrals';
import { ReferralStats  } from '@/components/referrals/ReferralStats';
import { ReferralLink  } from '@/components/referrals/ReferralLink';
import { ReferralTable  } from '@/components/referrals/ReferralTable';
import { RewardsCard  } from '@/components/referrals/RewardsCard';
import { ReferralGuide  } from '@/components/referrals/ReferralGuide';
import { ReferralLeaderboard  } from '@/components/referrals/ReferralLeaderboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button  } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useReferrals } from '@/hooks/useReferrals'
import { ReferralStats } from '@/components/referrals/ReferralStats'
import { ReferralLink } from '@/components/referrals/ReferralLink'
import { ReferralTable } from '@/components/referrals/ReferralTable'
import { RewardsCard } from '@/components/referrals/RewardsCard'
import { ReferralGuide } from '@/components/referrals/ReferralGuide'
import { ReferralLeaderboard } from '@/components/referrals/ReferralLeaderboard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'
import { Share, Users } from 'lucide-react'
<<<<<<< HEAD
import { useRouter } from 'next/router', // Changed from useNavigate
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useRouter } from 'next/router'; // Changed from useNavigate
export default function ReferralsPage() {
=======
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button  } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

import { Share, Users } from 'lucide-react'
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useRouter } from 'next/router'; // Changed from useNavigate


export default function ReferralsPage() {
  const router = useRouter(); // Changed from navigate
  const { isAuthenticated } = useAuth();
  const {
    isLoading;
    referralCode;
    referrals;
    rewards;
    stats;
    getReferralLink;
    copyReferralLink;
    shareOnSocialMedia} = useReferrals();


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const router = useRouter(); // Changed from navigate
  const { isAuthenticated } = useAuth()
  const {
    isLoading
    referralCode
    referrals
    rewards
    stats
    getReferralLink
    copyReferralLink
    shareOnSocialMedia
  } = useReferrals()
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
<<<<<<< HEAD
<<<<<<< HEAD
        title: 'Authentication required'
        description: 'Please login to access the referral program'
        variant: 'destructive'
      })
      router.push('/login'); // Changed to router.push
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        title: "Authentication required",
        description: "Please login to access the referral program",
        variant: "destructive"}),
      router.push("/login"), // Changed to router.push
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  }, [isAuthenticated, router]), // Changed navigate to router in dependencies

  const referralLink = getReferralLink();

=======
    }
  }, [isAuthenticated, router]), // Changed navigate to router in dependencies

  const referralLink = getReferralLink(),
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <div className="container max-w-7xl py-10">



import { useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useReferrals } from '@/hooks/useReferrals'
import { ReferralStats } from '@/components/referrals/ReferralStats'
import { ReferralLink } from '@/components/referrals/ReferralLink'
import { ReferralTable } from '@/components/referrals/ReferralTable'
import { RewardsCard } from '@/components/referrals/RewardsCard'
import { ReferralGuide } from '@/components/referrals/ReferralGuide'
import { ReferralLeaderboard } from '@/components/referrals/ReferralLeaderboard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'

import { Share, Users } from 'lucide-react'
import { useRouter } from 'next/router', // Changed from useNavigate
import {

  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/router'; // Changed from useNavigate
export default function ReferralsPage() {;
  const router = useRouter(); // Changed from navigate
  const { isAuthenticated } = useAuth()

<<<<<<< HEAD
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
import { toast } from '@/hooks/use-toast',
import { Share, Users } from 'lucide-react'
import { useRouter } from 'next/router', // Changed from useNavigate

export default function ReferralsPage() {
  const router = useRouter(), // Changed from navigate
  const { isAuthenticated } = useAuth(),
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/router'; // Changed from useNavigate
export default function ReferralsPage() {;
  const router = useRouter(); // Changed from navigate
  const { isAuthenticated } = useAuth()
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
import { toast } from '@/hooks/use-toast',
import { Share, Users } from 'lucide-react'
import { useRouter } from 'next/router', // Changed from useNavigate
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const {
    isLoading,
    referralCode,
    referrals,
    rewards,
    stats,
    getReferralLink,
    copyReferralLink,
<<<<<<< HEAD
    shareOnSocialMedia,
  } = useReferrals()
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
      })
      router.push('/login'); // Changed to router.push
    }
  }, [isAuthenticated, router]); // Changed navigate to router in dependencies
  const referralLink = getReferralLink()
  return (
    <div className='container max-w-7xl py-10'>
      <div className='mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4'>

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>
            Referral Program
          </h1>
          <p className='text-muted-foreground mt-1'>
            Invite others to Zion AI Marketplace and earn rewards
          </p>
        </div>
        <Button className='flex items-center gap-2' onClick={copyReferralLink}>
          <Share className='h-4 w-4' />          Share Referral Link    <div className="container max-w-7xl py-10">
    shareOnSocialMedia} = useReferrals(),

  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please login to access the referral program",
        variant: "destructive"}),
      router.push("/login"), // Changed to router.push
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
          <Share className='h-4 w-4' />          Share Referral Link    <div className="container max-w-7xl py-10">
    shareOnSocialMedia} = useReferrals(),

  const referralLink = getReferralLink(),

  return (
    <div className="container max-w-7xl py-10">
ursor/fix-website-loading-errors-and-merge-6662
      <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4">
=======


      <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='grid gap-6 mt-6 lg:grid-cols-3'>
        <div className='lg:col-span-2 space-y-6'>
          <ReferralLink
            referralLink={referralLink}
            onCopy={copyReferralLink}
<<<<<<< HEAD
            onShare={shareOnSocialMedia}          />
          <Tabs defaultValue='referrals' className='w-full'>
            <TabsList className='w-full grid grid-cols-2'>
=======

import { Share, Users } from 'lucide-react';
import { useRouter } from 'next/router', // Changed from useNavigate;

import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useReferrals } from '@/hooks/useReferrals';
import { ReferralStats } from '@/components/referrals/ReferralStats';
import { ReferralLink } from '@/components/referrals/ReferralLink';
import { ReferralTable } from '@/components/referrals/ReferralTable';
import { RewardsCard } from '@/components/referrals/RewardsCard';
import { ReferralGuide } from '@/components/referrals/ReferralGuide';
import { ReferralLeaderboard } from '@/components/referrals/ReferralLeaderboard';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { Share, Users } from 'lucide-react';
import { useRouter } from 'next/router'; // Changed from useNavigate;
export default function ReferralsPage() {;
  const router = useRouter(); // Changed from navigate;
  const { isAuthenticated } = useAuth();
  const {;
    isLoading,;
    referralCode,;
    referrals,;
    rewards,;
    stats,;
    getReferralLink,;
    copyReferralLink,;
    shareOnSocialMedia,;
  } = useReferrals();
  useEffect(() => {;
    if (!isAuthenticated) {;
      toast({    isLoading;
    referralCode;
    referrals;
    rewards;
    stats;
    getReferralLink;
    copyReferralLink;
    shareOnSocialMedia} = useReferrals();

  useEffect((,) => {;
    if (!isAuthenticated) {;
      toast({;
        title: 'Authentication required',;
        description: 'Please login to access the referral program',;
        variant: 'destructive',;
      });
      router && router.push('/login'); // Changed to router && router.push;
    }
  }, [isAuthenticated, router]); // Changed navigate to router in dependencies;
  const referralLink = getReferralLink();

  return (
    <div className='container max-w-7xl py-10'>;
      <div className='mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4'>;
        <div>;
          <h1 className='text-3xl font-bold tracking-tight'>;
            Referral Program;
          </h1>;
          <p className='text-muted-foreground mt-1'>;
            Invite others to Zion AI Marketplace and earn rewards;
          </p>;
        </div>;
        <Button className='flex items-center gap-2' onClick={copyReferralLink}>;
          <Share className='h-4 w-4' />          Share Referral Link    <div className="container max-w-7xl py-10">;
      <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4">;
        <div>;
          <h1 className="text-3xl font-bold tracking-tight">Referral Program</h1>;
          <p className="text-muted-foreground mt-1">;
            Invite others to Zion AI Marketplace and earn rewards;
          </p>;
        </div>;
        <Button className="flex items-center gap-2" onClick={copyReferralLink}>;
          <Share className="h-4 w-4" />;
          Share Referral Link;
        </Button>;
      </div>;

      <ReferralStats stats={stats} isLoading={isLoading} />;

      <div className='grid gap-6 mt-6 lg:grid-cols-3'>;
        <div className='lg:col-span-2 space-y-6'>;
          <ReferralLink
            referralLink={referralLink}
            onCopy={copyReferralLink}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            onShare={shareOnSocialMedia}          />;

          <Tabs defaultValue='referrals' className='w-full'>;
            <TabsList className='w-full grid grid-cols-2'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              className='p-0 border rounded-md mt-6'>;
              <ReferralTable referrals={referrals} isLoading={isLoading} />;
            </TabsContent>;
            <TabsContent value='rewards' className='p-0 mt-6'>              <RewardsCard rewards={rewards} isLoading={isLoading} />;
            <TabsContent value="rewards" className="p-0 mt-6">;

      
      <div className="grid gap-6 mt-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <ReferralLink 
            referralLink={referralLink} 
            onCopy={copyReferralLink} 
            onShare={shareOnSocialMedia}
<<<<<<< HEAD
<<<<<<< HEAD
          />
          
=======

          />
          

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Tabs defaultValue="referrals" className="w-full">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="referrals" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
<<<<<<< HEAD
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            <TabsContent value='rewards' className='p-0 mt-6'>              <RewardsCard rewards={rewards} isLoading={isLoading} />
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




            <TabsContent value="rewards" className="p-0 mt-6">
<<<<<<< HEAD
            onShare={shareOnSocialMedia}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <TabsContent value="rewards" className="p-0 mt-6">
=======
              <RewardsCard rewards={rewards} isLoading={isLoading} />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </TabsContent>
          </Tabs>
        </div>
        <div className='space-y-6'>          <ReferralGuide />        <div className="space-y-6">

<<<<<<< HEAD
        <div className='space-y-6'>          <ReferralGuide />        <div className="space-y-6">
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="space-y-6">



          <ReferralGuide />
<<<<<<< HEAD
=======
          <ReferralLeaderboard />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>
      </div>
    </div>

<<<<<<< HEAD
  )
<<<<<<< HEAD
}, [isAuthenticated, router]), //Changed navigate to router in dependencies return (<div className="container max-w-7xl py-10" > <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4" > <div> <h1 className="text-3xl font-bold tracking-tight" >Referral Program</h1> <p className="text-muted-foreground mt-1" > Invite others to Zion AI Marketplace and earn rewards </p> </div> Share Referral Link </Button> </div> <ReferralStats stats= {
  stats
}isLoading= {
  isLoading "
}/> <div className="grid gap-6 mt-6 lg:grid-cols-3" > <div className="lg:col-span-2 space-y-6" > <ReferralLink referralLink= {
  referralLink
}onCopy= {
  copyReferralLink
}onShare= {
  shareOnSocialMedia "
}/> <Tabs defaultValue="referrals" className="w-full" > <TabsList className="w-full grid grid-cols-2" > <TabsTrigger value="referrals" className="flex items-center gap-2" > <Users className="h-4 w-4" /> Your Referrals </TabsTrigger> <TabsTrigger value="rewards" className="flex items-center gap-2" > <Share className="h-4 w-4" /> Rewards </TabsTrigger> </TabsList> </TabsContent> </Tabs> </div> <div className="space-y-6" > <ReferralGuide /> <ReferralLeaderboard /> </div> </div> </div>)
}'"
}
;
=======

;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useEffect } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { useReferrals } from '@/hooks/useReferrals',;
import { ReferralStats } from '@/components/referrals/ReferralStats',;
import { ReferralLink } from '@/components/referrals/ReferralLink',;
import { ReferralTable } from '@/components/referrals/ReferralTable',;
import { RewardsCard } from '@/components/referrals/RewardsCard',;
import { ReferralGuide } from '@/components/referrals/ReferralGuide',;
import { ReferralLeaderboard } from '@/components/referrals/ReferralLeaderboard',;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Button } from '@/components/ui/button',;
import { toast } from '@/hooks/use-toast',;
import { Share, Users } from 'lucide-react';
import { useRouter } from 'next/router', // Changed from useNavigate;
export default function ReferralsPage() {;
  const router = useRouter(), // Changed from navigate;
  const { isAuthenticated } = useAuth(),;
  const {;
    isLoading,;
    referralCode,;
    referrals,;
    rewards,;
    stats,;
    getReferralLink,;
    copyReferralLink,;
    shareOnSocialMedia} = useReferrals(),;
  useEffect(() => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please login to access the referral program",;
        variant: "destructive"});
      router.push("/login"), // Changed to router.push;
    }
  }, [isAuthenticated, router]), // Changed navigate to router in dependencies;
  const referralLink = getReferralLink();
  return (;
    <div className="container max-w-7xl py-10">;
      <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4">;
        <div>;
          <h1 className="text-3xl font-bold tracking-tight">Referral Program</h1>;
          <p className="text-muted-foreground mt-1">;
            Invite others to Zion AI Marketplace and earn rewards;
          </p>;
        </div>;
        <Button className="flex items-center gap-2" onClick={copyReferralLink}>;
          <Share className="h-4 w-4" />;
          Share Referral Link;
        </Button>;
      </div>;
      <ReferralStats stats={stats} isLoading={isLoading} />;
      <div className="grid gap-6 mt-6 lg:grid-cols-3">;
        <div className="lg:col-span-2 space-y-6">;
          <ReferralLink;
            referralLink={referralLink} ;
            onCopy={copyReferralLink} ;
            onShare={shareOnSocialMedia}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          />;
          <Tabs defaultValue="referrals" className="w-full">;
            <TabsList className="w-full grid grid-cols-2">;
              <TabsTrigger value="referrals" className="flex items-center gap-2">;
                <Users className="h-4 w-4" />;
                Your Referrals;
              </TabsTrigger>;
              <TabsTrigger value="rewards" className="flex items-center gap-2">;
                <Share className="h-4 w-4" />;
                Rewards;
              </TabsTrigger>;
            </TabsList>;
            <TabsContent value="referrals" className="p-0 border rounded-md mt-6">;
              <ReferralTable referrals={referrals} isLoading={isLoading} />;
            </TabsContent>;
            <TabsContent value="rewards" className="p-0 mt-6">;
              <RewardsCard rewards={rewards} isLoading={isLoading} />;
            </TabsContent>;
          </Tabs>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="space-y-6">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className='space-y-6'>          <ReferralGuide />        <div className="space-y-6">;
import { useEffect } from 'react';
import { use_auth } from '@/hooks / use_auth';
import { useReferrals } from '@/hooks / useReferrals';
import { ReferralStats } from '@/components / referrals / ReferralStats';
import { ReferralLink } from '@/components / referrals / ReferralLink';
import { ReferralTable } from '@/components / referrals / ReferralTable';
import { RewardsCard } from '@/components / referrals / RewardsCard';
import { ReferralGuide } from '@/components / referrals / ReferralGuide';
import { ReferralLeaderboard } from '@/components / referrals / ReferralLeaderboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components / ui / tabs';
import { Button } from '@/components / ui / button';
import { toast } from '@/hooks / use - toast';
import { Share, Users } from 'lucide-react';
import { use_router } from 'next / router', // Changed from use_navigate;
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { use_router } from 'next / router'; // Changed from use_navigate;
export default /**
 * ReferralsPage - Function description
 */
function ReferralsPage() {
  const router = use_router (); // Changed from navigate;
  const { is_authenticated } = use_auth ();
  const {
    is_loading,
    referral_code,
    referrals,
    rewards,
    stats,
    getReferralLink,
    copyReferralLink,
    shareOnSocialMedia,
  } = useReferrals ();
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      toast ({    is_loading;
    referral_code;
    referrals;
    rewards;
    stats;
    getReferralLink;
    copyReferralLink;
    shareOnSocialMedia} = useReferrals ();
  useEffect ((, ) => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'Authentication required',
        description: 'Please login to access the referral program',
        variant: 'destructive',
      });
      router.push ('/login'); // Changed to router.push;
    }
  }, [is_authenticated, router]); // Changed navigate to router in dependencies;
  const referral_link = getReferralLink ();
  return (
    <div className='container max - w-7xl py - 10'>;
      <div className='mb - 8 flex flex - col md:flex - row justify - between md:items - center gap - 4'>;
        <div>;
          <h1 className='text - 3xl font - bold tracking - tight'>;
            Referral Program;
          </h1>;
          <p className='text - muted - foreground mt - 1'>;
            Invite others to Zion AI Marketplace and earn rewards;
          </p>;
        </div>;
        <Button className='flex items - center gap - 2' on_click={copyReferralLink}>;
          <Share className='h - 4 w - 4' />          Share Referral Link    <div className="container max - w-7xl py - 10">;
      <div className="mb - 8 flex flex - col md:flex - row justify - between md:items - center gap - 4">;
        <div>;
          <h1 className="text - 3xl font - bold tracking - tight">Referral Program</h1>;
          <p className="text - muted - foreground mt - 1">;
            Invite others to Zion AI Marketplace and earn rewards;
          </p>;
        </div>;
        <Button className="flex items - center gap - 2" on_click={copyReferralLink}>;
          <Share className="h - 4 w - 4" />;
          Share Referral Link;
        </Button>;
      </div>;
      <ReferralStats stats={stats} is_loading={is_loading} />;
      <div className='grid gap - 6 mt - 6 lg:grid - cols - 3'>;
        <div className='lg:col - span - 2 space - y-6'>;
          <ReferralLink;
            referral_link={referral_link}
            on_copy={copyReferralLink}
            on_share={shareOnSocialMedia}          />;
          <Tabs default_value='referrals' className='w - full'>;
            <TabsList className='w - full grid grid - cols - 2'>;
              <TabsTrigger;
                value='referrals';
                className='flex items - center gap - 2';
              >;
                <Users className='h - 4 w - 4' />;
                Your Referrals;
              </TabsTrigger>;
              <TabsTrigger value='rewards' className='flex items - center gap - 2'>;
                <Share className='h - 4 w - 4' />;
                Rewards;
              </TabsTrigger>;
            </TabsList>;
            <TabsContent;
              value='referrals';
              className='p - 0 border rounded - md mt - 6';
            >;
              <ReferralTable referrals={referrals} is_loading={is_loading} />;
            </TabsContent>;
            <TabsContent value='rewards' className='p - 0 mt - 6'>              <RewardsCard rewards={rewards} is_loading={is_loading} />;
            <TabsContent value="rewards" className="p - 0 mt - 6">;
            on_share={shareOnSocialMedia}
          />;
          <Tabs default_value="referrals" className="w - full">;
            <TabsList className="w - full grid grid - cols - 2">;
              <TabsTrigger value="referrals" className="flex items - center gap - 2">;
                <Users className="h - 4 w - 4" />;
                Your Referrals;
              </TabsTrigger>;
              <TabsTrigger value="rewards" className="flex items - center gap - 2">;
                <Share className="h - 4 w - 4" />;
                Rewards;
              </TabsTrigger>;
            </TabsList>;
            <TabsContent value="referrals" className="p - 0 border rounded - md mt - 6">;
              <ReferralTable referrals={referrals} is_loading={is_loading} />;
            </TabsContent>;
            <TabsContent value="rewards" className="p - 0 mt - 6">;
              <RewardsCard rewards={rewards} is_loading={is_loading} />;
            </TabsContent>;
          </Tabs>;
        </div>;
        <div className='space - y-6'>          <ReferralGuide />        <div className="space - y-6">;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <ReferralGuide />;
          <ReferralLeaderboard />;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
}

    </div>);
}, [is_authenticated, router]), //Changed navigate to router in dependencies return (<div className="container max - w-7xl py - 10" > <div className="mb - 8 flex flex - col md:flex - row justify - between md:items - center gap - 4" > <div> <h1 className="text - 3xl font - bold tracking - tight" >Referral Program</h1> <p className="text - muted - foreground mt - 1" > Invite others to Zion AI Marketplace and earn rewards </p> </div> Share Referral Link </Button> </div> <ReferralStats stats= {
  stats;
}is_loading= {
  is_loading ";
}/> <div className="grid gap - 6 mt - 6 lg:grid - cols - 3" > <div className="lg:col - span - 2 space - y-6" > <ReferralLink referral_link= {
  referral_link;
}on_copy= {
  copyReferralLink;
}on_share= {
  shareOnSocialMedia ";
}/> <Tabs default_value="referrals" className="w - full" > <TabsList className="w - full grid grid - cols - 2" > <TabsTrigger value="referrals" className="flex items - center gap - 2" > <Users className="h - 4 w - 4" /> Your Referrals </TabsTrigger> <TabsTrigger value="rewards" className="flex items - center gap - 2" > <Share className="h - 4 w - 4" /> Rewards </TabsTrigger> </TabsList> </TabsContent> </Tabs> </div> <div className="space - y-6" > <ReferralGuide /> <ReferralLeaderboard /> </div> </div> </div>);
}'";
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  );
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
