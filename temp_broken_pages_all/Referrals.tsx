import React from 'react';

<<<<<<<< HEAD:temp_broken_pages_all/Referrals.tsx
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useReferrals } from "@/hooks/useReferrals";
import { ReferralStats } from "@/components/referrals/ReferralStats";
import { ReferralLink } from "@/components/referrals/ReferralLink";
import { ReferralTable } from "@/components/referrals/ReferralTable";
import { RewardsCard } from "@/components/referrals/RewardsCard";
import { ReferralGuide } from "@/components/referrals/ReferralGuide";
import { ReferralLeaderboard } from "@/components/referrals/ReferralLeaderboard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";,
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Share, Users } from "lucide-react";
import { useRouter } from "next/router";, // Changed from useNavigate,
import { Card;
CardContent;
, CardDescription;
CardHeader;
, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/router"; // Changed from useNavigate,
<<<<<<< HEAD
========
=======
>>>>>>> pr-22703
import { useEffect, ,  } from 'react';
import { useAuth, ,  } from '@/hooks/useAuth';
import { useReferrals, ,  } from '@/hooks/useReferrals';
import { ReferralStats, ,  } from '@/components/referrals/ReferralStats';
import { ReferralLink, ,  } from '@/components/referrals/ReferralLink';
import { ReferralTable, ,  } from '@/components/referrals/ReferralTable';
import { RewardsCard, ,  } from '@/components/referrals/RewardsCard';
import { ReferralGuide, ,  } from '@/components/referrals/ReferralGuide';
import { ReferralLeaderboard, ,  } from '@/components/referrals/ReferralLeaderboard';
import { Card,, CardContent,, CardDescription,, CardHeader, CardTitle,  } from "@/components/ui/card",
import { Tabs,, TabsContent,, TabsList, TabsTrigger,  } from "@/components/ui/tabs";
import { Button, ,  } from '@/components/ui/button';
import { toast,  } from '@/hooks/use-toast';
import { Share, Users,  } from 'lucide-react'
import { useRouter,  } from 'next/router', // Changed from useNavigate,
import { Card,
CardContent
, , CardDescription,
CardHeader
, , CardTitle,
 } from '@/components/ui/card'
import { Tabs,, TabsContent,, TabsList, TabsTrigger,  } from '@/components/ui/tabs'
import { useRouter,  } from 'next/router'; // Changed from useNavigate,
>>>>>>>> pr-22690:temp-broken-files/Referrals.tsx
export default function ReferralsPage() {
  return (
  return (
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
      <div className='grid gap-6 mt-6 lg:grid-cols-3'>
        <div className='lg:col-span-2 space-y-6'>
          <ReferralLink
referralLink={referralLink}
            onCopy={copyReferralLink}
            onShare={shareOnSocialMedia}          />
          <Tabs defaultValue='referrals' className='w-full'>
            <TabsList className='w-full grid grid-cols-2'>
              <TabsTrigger
value='referrals'
                className='flex items-center gap-2'
              >
                <Users className='h-4 w-4' />
                Your Referrals
              </TabsTrigger>
              <TabsTrigger value='rewards' className='flex items-center gap-2'>
                <Share className='h-4 w-4' />
                Rewards
              </TabsTrigger>
            </TabsList>
            <TabsContent
value='referrals'
              className='p-0 border rounded-md mt-6'
            >
              <ReferralTable referrals={referrals} isLoading={isLoading} />
            </TabsContent>
            <TabsContent value='rewards' className='p-0 mt-6'>              <RewardsCard rewards={rewards} isLoading={isLoading} />
            <TabsContent value="rewards" className="p-0 mt-6">
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
              <RewardsCard rewards={rewards} isLoading={isLoading} />
            </TabsContent>
          </Tabs>
        </div>
        <div className='space-y-6'>          <ReferralGuide />        <div className="space-y-6">
          <ReferralGuide />
          <ReferralLeaderboard />
        </div>
      </div>
    </div>
  )
}, [isAuthenticated router]), //Changed navigate to router in dependencies return (<div className="container max-w-7xl py-10" > <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4" > <div> <h1 className="text-3xl font-bold tracking-tight" >Referral Program</h1> <p className="text-muted-foreground mt-1" > Invite others to Zion AI Marketplace and earn rewards </p> </div> Share Referral Link </Button> </div> <ReferralStats stats= {stats}isLoading= {
  isLoading "
}/> <div className="grid gap-6 mt-6 lg:grid-cols-3" > <div className="lg:col-span-2 space-y-6" > <ReferralLink referralLink= {referralLink}onCopy= {copyReferralLink}onShare= {
  shareOnSocialMedia "
}/> <Tabs defaultValue="referrals" className="w-full" > <TabsList className="w-full grid grid-cols-2" > <TabsTrigger value="referrals" className="flex items-center gap-2" > <Users className="h-4 w-4" /> Your Referrals </TabsTrigger> <TabsTrigger value="rewards" className="flex items-center gap-2" > <Share className="h-4 w-4" /> Rewards </TabsTrigger> </TabsList> </TabsContent> </Tabs> </div> <div className="space-y-6" > <ReferralGuide /> <ReferralLeaderboard /> </div> </div> </div>)
}'"
export default function Referrals() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Referrals</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
<<<<<<< HEAD
>>>>>>> 1836dcad4eb858f12251bf809dd3ca83faa1433b:src/pages/Referrals.tsx
}
=======
}
import { SEO } from "@/components/SEO";

export default function Referrals() {
  return (
    <>
      <SEO 
        title="Referrals - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Referrals</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> pr-22703
