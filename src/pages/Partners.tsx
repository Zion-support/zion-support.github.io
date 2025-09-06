<<<<<<< HEAD
<<<<<<< HEAD

} from '@/components/ui/card';
=======
=======
import { Button } from '@/components/ui/button';
import {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> } from '@/components/ui/card';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  Card,
  CardContent,
  CardDescription,
  CardHeader,;
  CardTitle;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from '@/components/ui/card';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, FileDown, FileText, PieChart, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PartnerRegistrationForm } from '@/components/partners/PartnerRegistrationForm';
import { PartnerReferralLinks } from '@/components/partners/PartnerReferralLinks';
import { PartnerDashboard } from '@/components/partners/PartnerDashboard';
import { PartnerLeaderboard } from '@/components/partners/PartnerLeaderboard';
import { PartnerResources } from '@/components/partners/PartnerResources';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======

import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { CheckCircle, FileDown, FileText, PieChart, Users } from 'lucide-react'
import { useState, useEffect } from "react",
import { useTranslation } from 'react-i18next',
import Link from 'next/link',
import { PartnerRegistrationForm } from "@/components/partners/PartnerRegistrationForm",
import { PartnerReferralLinks } from "@/components/partners/PartnerReferralLinks",
import { PartnerDashboard } from "@/components/partners/PartnerDashboard",
import { PartnerLeaderboard } from "@/components/partners/PartnerLeaderboard",
import { PartnerResources } from "@/components/partners/PartnerResources",
import { useAuth } from "@/hooks/useAuth",
import { useRouter } from 'next/router',
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

export default function Partners() {;
=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662

xport default function Partners() {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  logInfo('PartnersPage rendering');
  const [activeTab, setActiveTab] = useState('overview');
  const { t } = useTranslation();
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true);
<<<<<<< HEAD


=======
  useEffect(() => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, FileDown, FileText, PieChart, Users } from 'lucide-react';

import { useState, useEffect } from "react";
import { useTranslation  } from 'react-i18next';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { CheckCircle, FileDown, FileText, PieChart, Users } from 'lucide-react'
import { useState, useEffect } from "react",
import { useTranslation } from 'react-i18next',
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import Link from 'next/link',
=======
>>>>>>> import Link from 'next/link',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { PartnerRegistrationForm } from "@/components/partners/PartnerRegistrationForm",
import { PartnerReferralLinks } from "@/components/partners/PartnerReferralLinks",
import { PartnerDashboard } from "@/components/partners/PartnerDashboard",
import { PartnerLeaderboard } from "@/components/partners/PartnerLeaderboard",
import { PartnerResources } from "@/components/partners/PartnerResources",
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useAuth } from "@/hooks/useAuth";
import { useRouter  } from 'next/router';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
export default function Partners() {

  logInfo('PartnersPage rendering')
  const [activeTab, setActiveTab] = useState("overview")
  const { t } = useTranslation()
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true)
  useEffect((,) => {
    async function checkHealth() {
      try {
        const res = await fetch('/api/auth/health');
        setAuthServiceAvailable(res.ok);
        logErrorToProduction('Partner login auth health check failed', {
          data: err
        });
        setAuthServiceAvailable(false);
      }
    }
    checkHealth();  }, []);    checkHealth()
  }, []);
<<<<<<< HEAD
=======
=======
import { useAuth } from "@/hooks/useAuth",
import { useRouter } from 'next/router',
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',

export default function Partners() {

  logInfo('PartnersPage rendering'),
  const [activeTab, setActiveTab] = useState("overview"),
  const { t } = useTranslation(),
  const { user, isAuthenticated } = useAuth(),
  const router = useRouter(),
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true),

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect((,) => {
    async function checkHealth() {;
      try {;
        const res = await fetch('/api/auth/health');
        setAuthServiceAvailable(res.ok);
        logErrorToProduction('Partner login auth health check failed', {
          data: err,
        });
        setAuthServiceAvailable(false);
      }
    }
    checkHealth();  }, []);    checkHealth()
  }, []);
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {
    async function checkHealth() {
      try {
        const res = await fetch('/api/auth/health'),
        setAuthServiceAvailable(res.ok)
      } catch (err) {
        logErrorToProduction('Partner login auth health check failed', { data: err }),
        setAuthServiceAvailable(false)
      }
    }
    checkHealth()
  }, []),
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>>   // If not authenticated, display partner program info and signup CTA
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  // If not authenticated, display partner program info and signup CTA
>>>>>>>   if (!isAuthenticated) {
    logInfo('PartnersPage rendering Unauthenticated View');
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // If not authenticated, display partner program info and signup CTA
  if (!isAuthenticated) {
    logInfo('PartnersPage rendering Unauthenticated View'),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return (
<<<<<<< HEAD

=======
      <div className='container max-w-6xl py-10'>
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold tracking-tight text-white mb-2'>
            {t('partner.title')}
          </h1>
          <p className='text-xl text-zion-slate-light'>
            {t('partner.subtitle')}
          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <Card className='bg-zion-blue-dark border-zion-blue-light'>
<<<<<<< HEAD
>>>>>>>             <CardHeader>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <CardHeader>
>>>>>>>               <CardTitle className="text-white">{t('partner.influencers.title')}</CardTitle>
=======
=======
      <div className="container max-w-6xl py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">{t('partner.title')}</h1>
          <p className="text-xl text-zion-slate-light">{t('partner.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-zion-blue-dark border-zion-blue-light">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <CardHeader>
              <CardTitle className="text-white">{t('partner.influencers.title')}</CardTitle>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <CardDescription>{t('partner.influencers.desc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />
                <div>
                  <p className="font-medium text-white">{t('partner.influencers.points.audience')}</p>
                  <p className="text-sm text-zion-slate-light">{t('partner.influencers.points.audience_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />
                <div>
                  <p className="font-medium text-white">{t('partner.influencers.points.insights')}</p>
                  <p className="text-sm text-zion-slate-light">{t('partner.influencers.points.insights_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />
                <div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <p className='font-medium text-white'>
                    {t('partner.influencers.points.resources')}
                  </p>
                  <p className='text-sm text-zion-slate-light'>
                    {t('partner.influencers.points.resources_desc')}
                  </p>                </div>        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-zion-blue-dark border-zion-blue-light">
            <CardHeader>
              <CardTitle className="text-white">{t('partner.influencers.title')}</CardTitle>
              <CardDescription>{t('partner.influencers.desc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />
                <div>
                  <p className="font-medium text-white">{t('partner.influencers.points.audience')}</p>
                  <p className="text-sm text-zion-slate-light">{t('partner.influencers.points.audience_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />
                <div>
                  <p className="font-medium text-white">{t('partner.influencers.points.insights')}</p>
                  <p className="text-sm text-zion-slate-light">{t('partner.influencers.points.insights_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />
                <div>
<<<<<<< HEAD
>>>>>>>                   <p className="font-medium text-white">{t('partner.influencers.points.resources')}</p>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  <p className="font-medium text-white">{t('partner.influencers.points.resources')}</p>
>>>>>>>                   <p className="text-sm text-zion-slate-light">{t('partner.influencers.points.resources_desc')}</p>


=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <p className="font-medium text-white">{t('partner.influencers.points.resources')}</p>
                  <p className="text-sm text-zion-slate-light">{t('partner.influencers.points.resources_desc')}</p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </div>
              </div>
            </CardContent>
          </Card>
<<<<<<< HEAD

=======
          <Card className='bg-zion-blue-dark border-zion-blue-light'>
<<<<<<< HEAD
>>>>>>>             <CardHeader>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <CardHeader>
>>>>>>>               <CardTitle className="text-white">{t('partner.organizations.title')}</CardTitle>
              <CardDescription>{t('partner.organizations.desc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />
                <div>
                  <p className="font-medium text-white">{t('partner.organizations.points.ecosystem')}</p>
                  <p className="text-sm text-zion-slate-light">{t('partner.organizations.points.ecosystem_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />
                <div>
                  <p className="font-medium text-white">{t('partner.organizations.points.co_brand')}</p>
                  <p className="text-sm text-zion-slate-light">{t('partner.organizations.points.co_brand_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />
                <div>
<<<<<<< HEAD

=======
                  <p className='font-medium text-white'>
                    {t('partner.organizations.points.tracking')}
                  </p>
                  <p className='text-sm text-zion-slate-light'>
                    {t('partner.organizations.points.tracking_desc')}
                  </p>                </div>            <CardHeader>
=======
=======

          <Card className="bg-zion-blue-dark border-zion-blue-light">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <CardHeader>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <CardTitle className="text-white">{t('partner.organizations.title')}</CardTitle>
              <CardDescription>{t('partner.organizations.desc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />
                <div>
                  <p className="font-medium text-white">{t('partner.organizations.points.ecosystem')}</p>
                  <p className="text-sm text-zion-slate-light">{t('partner.organizations.points.ecosystem_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />
                <div>
                  <p className="font-medium text-white">{t('partner.organizations.points.co_brand')}</p>
                  <p className="text-sm text-zion-slate-light">{t('partner.organizations.points.co_brand_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />
                <div>
<<<<<<< HEAD
>>>>>>>                   <p className="font-medium text-white">{t('partner.organizations.points.tracking')}</p>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  <p className="font-medium text-white">{t('partner.organizations.points.tracking')}</p>
>>>>>>>                   <p className="text-sm text-zion-slate-light">{t('partner.organizations.points.tracking_desc')}</p>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD
                  <p className='font-medium text-white'>
                    {t('partner.organizations.points.tracking')}
                  </p>
                  <p className='text-sm text-zion-slate-light'>
                    {t('partner.organizations.points.tracking_desc')}
                  </p>                </div>            <CardHeader>
              <CardTitle className="text-white">{t('partner.organizations.title')}</CardTitle>
              <CardDescription>{t('partner.organizations.desc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />
                <div>
                  <p className="font-medium text-white">{t('partner.organizations.points.ecosystem')}</p>
                  <p className="text-sm text-zion-slate-light">{t('partner.organizations.points.ecosystem_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />
                <div>
                  <p className="font-medium text-white">{t('partner.organizations.points.co_brand')}</p>
                  <p className="text-sm text-zion-slate-light">{t('partner.organizations.points.co_brand_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />
                <div>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <p className="font-medium text-white">{t('partner.organizations.points.tracking')}</p>
                  <p className="text-sm text-zion-slate-light">{t('partner.organizations.points.tracking_desc')}</p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
<<<<<<< HEAD

=======
        <div className='text-center mb-12'>
          <h2 className='text-2xl font-bold text-white mb-4'>
            {t('partner.how_it_works')}
          </h2>
          <div className='grid md:grid-cols-3 gap-6'>
            <Card className='bg-zion-blue-dark border-zion-blue-light'>
              <CardHeader className='text-center pb-2'>
                <div className='mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                  <Users className='h-6 w-6 text-zion-cyan' />
<<<<<<< HEAD
>>>>>>>                 </div>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                </div>
>>>>>>>                 <CardTitle className="text-lg text-white">{t('partner.steps.join_title')}</CardTitle>
=======
=======

        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">{t('partner.how_it_works')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-zion-cyan" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                </div>
                <CardTitle className="text-lg text-white">{t('partner.steps.join_title')}</CardTitle>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </CardHeader>
              <CardContent className="text-center text-sm text-zion-slate-light">
                <p>{t('partner.steps.join_desc')}</p>
              </CardContent>
            </Card>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Card className='bg-zion-blue-dark border-zion-blue-light'>
              <CardHeader className='text-center pb-2'>
                <div className='mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                  <FileText className='h-6 w-6 text-zion-cyan' />
<<<<<<< HEAD
>>>>>>>                 </div>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                </div>
>>>>>>>                 <CardTitle className="text-lg text-white">{t('partner.steps.share_title')}</CardTitle>
=======
=======
            
            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-zion-cyan" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                </div>
                <CardTitle className="text-lg text-white">{t('partner.steps.share_title')}</CardTitle>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </CardHeader>
              <CardContent className="text-center text-sm text-zion-slate-light">
                <p>{t('partner.steps.share_desc')}</p>
              </CardContent>
            </Card>
<<<<<<< HEAD
<<<<<<< HEAD

                </div>
                <CardTitle className="text-lg text-white">{t('partner.steps.earn_title')}</CardTitle>
              </CardHeader>

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Card className='bg-zion-blue-dark border-zion-blue-light'>
              <CardHeader className='text-center pb-2'>
                <div className='mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                  <PieChart className='h-6 w-6 text-zion-cyan' />
<<<<<<< HEAD
>>>>>>>                 </div>
                <CardTitle className="text-lg text-white">{t('partner.steps.earn_title')}</CardTitle>
              </CardHeader>
              <CardContent className='text-center text-sm text-zion-slate-light'>                <p>{t('partner.steps.earn_desc')}</p>              <CardContent className="text-center text-sm text-zion-slate-light">
>>>>>>>                 <p>{t('partner.steps.earn_desc')}</p>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
            
            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <PieChart className="h-6 w-6 text-zion-cyan" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                </div>
                <CardTitle className="text-lg text-white">{t('partner.steps.earn_title')}</CardTitle>
              </CardHeader>
<<<<<<< HEAD
              <CardContent className='text-center text-sm text-zion-slate-light'>                <p>{t('partner.steps.earn_desc')}</p>              <CardContent className="text-center text-sm text-zion-slate-light">
=======
              <CardContent className="text-center text-sm text-zion-slate-light">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <p>{t('partner.steps.earn_desc')}</p>
>>>>>>>               </CardContent>
            </Card>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

          <Button
=======
        <div className='flex justify-center gap-4'>
>>>>>>>           <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            size="lg"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            asChild
          >
            <Link href="/signup?type=partner&source=partner-program">{t('partner.apply')}</Link>
          </Button>
          <Button
<<<<<<< HEAD

=======
    );
  }
  // Authenticated user view - Partner Dashboard
  logInfo('PartnersPage rendering Authenticated View. User:', { data: user });

  return (
    <div className='container max-w-7xl py-10'>
          <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            size="lg"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            asChild
          >
            <Link href="/signup?type=partner&source=partner-program">{t('partner.apply')}</Link>
          </Button>
          <Button


>>>>>>>             size="lg"
            variant="outline"
            className="text-zion-cyan border-zion-cyan"
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { CheckCircle, FileDown, FileText, PieChart, Users } from 'lucide-react';
import { useState, useEffect } from "react",;
import { useTranslation } from 'react-i18next',;
import Link from 'next/link',;
import { PartnerRegistrationForm } from "@/components/partners/PartnerRegistrationForm",;
import { PartnerReferralLinks } from "@/components/partners/PartnerReferralLinks",;
import { PartnerDashboard } from "@/components/partners/PartnerDashboard",;
import { PartnerLeaderboard } from "@/components/partners/PartnerLeaderboard",;
import { PartnerResources } from "@/components/partners/PartnerResources",;
import { useAuth } from "@/hooks/useAuth",;
import { useRouter } from 'next/router',;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
export default function Partners() {;
  logInfo('PartnersPage rendering'),;
  const [activeTab, setActiveTab] = useState("overview"),;
  const { t } = useTranslation(),;
  const { user, isAuthenticated } = useAuth(),;
  const router = useRouter(),;
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true),;
  useEffect(() => {;
    async function checkHealth() {;
      try {;
        const res = await fetch('/api/auth/health'),;
        setAuthServiceAvailable(res.ok);
      } catch (err) {;
        logErrorToProduction('Partner login auth health check failed', { data: err }),;
        setAuthServiceAvailable(false);
      }
    }
    checkHealth();
  }, []),;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  // If not authenticated, display partner program info and signup CTA;
  if (!isAuthenticated) {;
    logInfo('PartnersPage rendering Unauthenticated View');
    return (
      <div className='container max-w-6xl py-10'>;
        <div className='text-center mb-8'>;
          <h1 className='text-4xl font-bold tracking-tight text-white mb-2'>;
            {t('partner && partner.title')}
          </h1>;
          <p className='text-xl text-zion-slate-light'>;
            {t('partner && partner.subtitle')}
          </p>;
        </div>;

        <div className='grid md:grid-cols-2 gap-8 mb-12'>;
          <Card className='bg-zion-blue-dark border-zion-blue-light'>;
            <CardHeader>;
              <CardTitle className='text-white'>;
                {t('partner && partner.influencers.title')}
              </CardTitle>;
              <CardDescription>{t('partner && partner.influencers.desc')}</CardDescription>;
            </CardHeader>;
            <CardContent className='space-y-4'>;
              <div className='flex items-start gap-3'>;
                <CheckCircle className='h-5 w-5 text-zion-cyan mt-0 && 0.5' />;
                <div>;
                  <p className='font-medium text-white'>;
                    {t('partner && partner.influencers.points && points.audience')}
                  </p>;
                  <p className='text-sm text-zion-slate-light'>;
                    {t('partner && partner.influencers.points && points.audience_desc')}
                  </p>;
                </div>;
              </div>;
              <div className='flex items-start gap-3'>;
                <CheckCircle className='h-5 w-5 text-zion-cyan mt-0 && 0.5' />;
                <div>;
                  <p className='font-medium text-white'>;
                    {t('partner && partner.influencers.points && points.insights')}
                  </p>;
                  <p className='text-sm text-zion-slate-light'>;
                    {t('partner && partner.influencers.points && points.insights_desc')}
                  </p>;
                </div>;
              </div>;
              <div className='flex items-start gap-3'>;
                <CheckCircle className='h-5 w-5 text-zion-cyan mt-0 && 0.5' />;
                <div>;
                  <p className='font-medium text-white'>;
                    {t('partner && partner.influencers.points && points.resources')}
                  </p>;
                  <p className='text-sm text-zion-slate-light'>;
                    {t('partner && partner.influencers.points && points.resources_desc')}
                  </p>                </div>        </div>;

        <div className="grid md:grid-cols-2 gap-8 mb-12">;
          <Card className="bg-zion-blue-dark border-zion-blue-light">;
            <CardHeader>;
              <CardTitle className="text-white">{t('partner && partner.influencers.title')}</CardTitle>;
              <CardDescription>{t('partner && partner.influencers.desc')}</CardDescription>;
            </CardHeader>;
            <CardContent className="space-y-4">;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0 && 0.5" />;
                <div>;
                  <p className="font-medium text-white">{t('partner && partner.influencers.points && points.audience')}</p>;
                  <p className="text-sm text-zion-slate-light">{t('partner && partner.influencers.points && points.audience_desc')}</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0 && 0.5" />;
                <div>;
                  <p className="font-medium text-white">{t('partner && partner.influencers.points && points.insights')}</p>;
                  <p className="text-sm text-zion-slate-light">{t('partner && partner.influencers.points && points.insights_desc')}</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0 && 0.5" />;
                <div>;
                  <p className="font-medium text-white">{t('partner && partner.influencers.points && points.resources')}</p>;
                  <p className="text-sm text-zion-slate-light">{t('partner && partner.influencers.points && points.resources_desc')}</p>;
    check_health ();  }, []);    check_health ();
  }, []);
;
  // If not authenticated, display partner program info and signup CTA;
  // Check condition
if ( {) {
  $2
}
    log_info ('PartnersPage rendering Unauthenticated View');
    return (
      <div className='container max - w-6xl py - 10'>;
        <div className='text - center mb - 8'>;
          <h1 className='text - 4xl font - bold tracking - tight text - white mb - 2'>;
            {t ('partner.title')}
          </h1>;
          <p className='text - xl text - zion - slate - light'>;
            {t ('partner.subtitle')}
          </p>;
        </div>;
        <div className='grid md:grid - cols - 2 gap - 8 mb - 12'>;
          <Card className='bg - zion - blue - dark border - zion - blue - light'>;
            <CardHeader>;
              <CardTitle className='text - white'>;
                {t ('partner.influencers.title')}
              </CardTitle>;
              <CardDescription>{t ('partner.influencers.desc')}</CardDescription>;
            </CardHeader>;
            <CardContent className='space - y-4'>;
              <div className='flex items - start gap - 3'>;
                <CheckCircle className='h - 5 w - 5 text - zion - cyan mt - 0.5' />;
                <div>;
                  <p className='font - medium text - white'>;
                    {t ('partner.influencers.points.audience')}
                  </p>;
                  <p className='text - sm text - zion - slate - light'>;
                    {t ('partner.influencers.points.audience_desc')}
                  </p>;
                </div>;
              </div>;
              <div className='flex items - start gap - 3'>;
                <CheckCircle className='h - 5 w - 5 text - zion - cyan mt - 0.5' />;
                <div>;
                  <p className='font - medium text - white'>;
                    {t ('partner.influencers.points.insights')}
                  </p>;
                  <p className='text - sm text - zion - slate - light'>;
                    {t ('partner.influencers.points.insights_desc')}
                  </p>;
                </div>;
              </div>;
              <div className='flex items - start gap - 3'>;
                <CheckCircle className='h - 5 w - 5 text - zion - cyan mt - 0.5' />;
                <div>;
                  <p className='font - medium text - white'>;
                    {t ('partner.influencers.points.resources')}
                  </p>;
                  <p className='text - sm text - zion - slate - light'>;
                    {t ('partner.influencers.points.resources_desc')}
                  </p>                </div>        </div>;
        <div className="grid md:grid - cols - 2 gap - 8 mb - 12">;
          <Card className="bg - zion - blue - dark border - zion - blue - light">;
            <CardHeader>;
              <CardTitle className="text - white">{t ('partner.influencers.title')}</CardTitle>;
              <CardDescription>{t ('partner.influencers.desc')}</CardDescription>;
            </CardHeader>;
            <CardContent className="space - y-4">;
              <div className="flex items - start gap - 3">;
                <CheckCircle className="h - 5 w - 5 text - zion - cyan mt - 0.5" />;
                <div>;
                  <p className="font - medium text - white">{t ('partner.influencers.points.audience')}</p>;
                  <p className="text - sm text - zion - slate - light">{t ('partner.influencers.points.audience_desc')}</p>;
                </div>;
              </div>;
              <div className="flex items - start gap - 3">;
                <CheckCircle className="h - 5 w - 5 text - zion - cyan mt - 0.5" />;
                <div>;
                  <p className="font - medium text - white">{t ('partner.influencers.points.insights')}</p>;
                  <p className="text - sm text - zion - slate - light">{t ('partner.influencers.points.insights_desc')}</p>;
                </div>;
              </div>;
              <div className="flex items - start gap - 3">;
                <CheckCircle className="h - 5 w - 5 text - zion - cyan mt - 0.5" />;
                <div>;
                  <p className="font - medium text - white">{t ('partner.influencers.points.resources')}</p>;
                  <p className="text - sm text - zion - slate - light">{t ('partner.influencers.points.resources_desc')}</p>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                </div>;
              </div>;
            </CardContent>;
          </Card>;

          <Card className='bg - zion - blue - dark border - zion - blue - light'>;
            <CardHeader>;
              <CardTitle className='text - white'>;
                {t ('partner.organizations.title')}
              </CardTitle>;
              <CardDescription>;
                {t ('partner.organizations.desc')}
              </CardDescription>;
            </CardHeader>;
            <CardContent className='space - y-4'>;
              <div className='flex items - start gap - 3'>;
                <CheckCircle className='h - 5 w - 5 text - zion - purple mt - 0.5' />;
                <div>;
                  <p className='font - medium text - white'>;
                    {t ('partner.organizations.points.ecosystem')}
                  </p>;
                  <p className='text - sm text - zion - slate - light'>;
                    {t ('partner.organizations.points.ecosystem_desc')}
                  </p>;
                </div>;
              </div>;
              <div className='flex items - start gap - 3'>;
                <CheckCircle className='h - 5 w - 5 text - zion - purple mt - 0.5' />;
                <div>;
                  <p className='font - medium text - white'>;
                    {t ('partner.organizations.points.co_brand')}
                  </p>;
                  <p className='text - sm text - zion - slate - light'>;
                    {t ('partner.organizations.points.co_brand_desc')}
                  </p>;
                </div>;
              </div>;
              <div className='flex items - start gap - 3'>;
                <CheckCircle className='h - 5 w - 5 text - zion - purple mt - 0.5' />;
                <div>;
                  <p className='font - medium text - white'>;
                    {t ('partner.organizations.points.tracking')}
                  </p>;
                  <p className='text - sm text - zion - slate - light'>;
                    {t ('partner.organizations.points.tracking_desc')}
                  </p>                </div>            <CardHeader>;
              <CardTitle className="text - white">{t ('partner.organizations.title')}</CardTitle>;
              <CardDescription>{t ('partner.organizations.desc')}</CardDescription>;
            </CardHeader>;
            <CardContent className="space - y-4">;
              <div className="flex items - start gap - 3">;
                <CheckCircle className="h - 5 w - 5 text - zion - purple mt - 0.5" />;
                <div>;
                  <p className="font - medium text - white">{t ('partner.organizations.points.ecosystem')}</p>;
                  <p className="text - sm text - zion - slate - light">{t ('partner.organizations.points.ecosystem_desc')}</p>;
                </div>;
              </div>;
              <div className="flex items - start gap - 3">;
                <CheckCircle className="h - 5 w - 5 text - zion - purple mt - 0.5" />;
                <div>;
                  <p className="font - medium text - white">{t ('partner.organizations.points.co_brand')}</p>;
                  <p className="text - sm text - zion - slate - light">{t ('partner.organizations.points.co_brand_desc')}</p>;
                </div>;
              </div>;
              <div className="flex items - start gap - 3">;
                <CheckCircle className="h - 5 w - 5 text - zion - purple mt - 0.5" />;
                <div>;
                  <p className="font - medium text - white">{t ('partner.organizations.points.tracking')}</p>;
                  <p className="text - sm text - zion - slate - light">{t ('partner.organizations.points.tracking_desc')}</p>;

                </div>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;

        <div className='text - center mb - 12'>;
          <h2 className='text - 2xl font - bold text - white mb - 4'>;
            {t ('partner.how_it_works')}
          </h2>;
          <div className='grid md:grid - cols - 3 gap - 6'>;
            <Card className='bg - zion - blue - dark border - zion - blue - light'>;
              <CardHeader className='text - center pb - 2'>;
                <div className='mx - auto bg - zion - blue - light rounded - full w - 12 h - 12 flex items - center justify - center mb - 4'>;
                  <Users className='h - 6 w - 6 text - zion - cyan' />;
                </div>;
                <CardTitle className='text - lg text - white'>;
                  {t ('partner.steps.join_title')}
                </CardTitle>;
              </CardHeader>;
              <CardContent className='text - center text - sm text - zion - slate - light'>                <p>{t ('partner.steps.join_desc')}</p>;
              </CardContent>;
            </Card>;
            <Card className='bg - zion - blue - dark border - zion - blue - light'>;
              <CardHeader className='text - center pb - 2'>;
                <div className='mx - auto bg - zion - blue - light rounded - full w - 12 h - 12 flex items - center justify - center mb - 4'>;
                  <FileText className='h - 6 w - 6 text - zion - cyan' />;
                </div>;
                <CardTitle className='text - lg text - white'>;
                  {t ('partner.steps.share_title')}
                </CardTitle>;
              </CardHeader>;
              <CardContent className='text - center text - sm text - zion - slate - light'>;
                <p>{t ('partner.steps.share_desc')}</p>;
              </CardContent>;
            </Card>;
            <Card className='bg - zion - blue - dark border - zion - blue - light'>;
              <CardHeader className='text - center pb - 2'>;
                <div className='mx - auto bg - zion - blue - light rounded - full w - 12 h - 12 flex items - center justify - center mb - 4'>;
                  <PieChart className='h - 6 w - 6 text - zion - cyan' />;
                </div>;
                <CardTitle className='text - lg text - white'>;
                  {t ('partner.steps.earn_title')}
                </CardTitle>;
              </CardHeader>;
              <CardContent className='text - center text - sm text - zion - slate - light'>                <p>{t ('partner.steps.earn_desc')}</p>              <CardContent className="text - center text - sm text - zion - slate - light">;
                <p>{t ('partner.steps.earn_desc')}</p>;

              </CardContent>;
            </Card>;
          </div>;
        </div>;


>>>>>>>           )}
        </div>;
      </div>;
<<<<<<< HEAD

=======
>>>>>>>     );
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    );
>>>>>>>   }


  // Authenticated user view - Partner Dashboard;

  logInfo('PartnersPage rendering Authenticated View. User:', { data: user });

  return (
<<<<<<< HEAD

=======
        <div className='flex justify-center gap-4'>
=======

        <div className="flex justify-center gap-4">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <Button
            size="lg"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            asChild
          >
            <Link href="/signup?type=partner&source=partner-program">{t('partner.apply')}</Link>
          </Button>
          <Button
<<<<<<< HEAD
            size='lg'
            variant='outline'
            className='text-zion-cyan border-zion-cyan'            disabled={!authServiceAvailable}          <Button
            size="lg"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            asChild
          >
            <Link href="/signup?type=partner&source=partner-program">{t('partner.apply')}</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-zion-cyan border-zion-cyan"
            disabled={!authServiceAvailable}
            onClick={() => router.push('/login')}
            disabled = {!authServiceAvailable,}
            onClick = {() => router.push('/login'),}
          >
            {t('partner.login')}
          </Button>
          {!authServiceAvailable && (
            <p className='text-red-500 text-sm mt-2'>
              {t('partner.login_unavailable')}
            </p>          )}            <p className="text-red-500 text-sm mt-2">{t('partner.login_unavailable')}</p>
          )}
        </div>
      </div>
<<<<<<< HEAD
    );
  }
  // Authenticated user view - Partner Dashboard
  logInfo('PartnersPage rendering Authenticated View. User:', { data: user });

  return (
    <div className='container max-w-7xl py-10'>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
            size="lg"
            variant="outline"
            className="text-zion-cyan border-zion-cyan"
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { CheckCircle, FileDown, FileText, PieChart, Users } from 'lucide-react';
import { useState, useEffect } from "react",;
import { useTranslation } from 'react-i18next',;
import Link from 'next/link',;
import { PartnerRegistrationForm } from "@/components/partners/PartnerRegistrationForm",;
import { PartnerReferralLinks } from "@/components/partners/PartnerReferralLinks",;
import { PartnerDashboard } from "@/components/partners/PartnerDashboard",;
import { PartnerLeaderboard } from "@/components/partners/PartnerLeaderboard",;
import { PartnerResources } from "@/components/partners/PartnerResources",;
import { useAuth } from "@/hooks/useAuth",;
import { useRouter } from 'next/router',;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
export default function Partners() {;
  logInfo('PartnersPage rendering'),;
  const [activeTab, setActiveTab] = useState("overview"),;
  const { t } = useTranslation(),;
  const { user, isAuthenticated } = useAuth(),;
  const router = useRouter(),;
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true),;
  useEffect(() => {;
    async function checkHealth() {;
      try {;
        const res = await fetch('/api/auth/health'),;
        setAuthServiceAvailable(res.ok);
      } catch (err) {;
        logErrorToProduction('Partner login auth health check failed', { data: err }),;
        setAuthServiceAvailable(false);
      }
    }
    checkHealth();
  }, []),;
  // If not authenticated, display partner program info and signup CTA;
  if (!isAuthenticated) {;
    logInfo('PartnersPage rendering Unauthenticated View');
    return (;
      <div className="container max-w-6xl py-10">;
        <div className="text-center mb-8">;
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">{t('partner.title')}</h1>;
          <p className="text-xl text-zion-slate-light">{t('partner.subtitle')}</p>;
        </div>;
        <div className="grid md:grid-cols-2 gap-8 mb-12">;
          <Card className="bg-zion-blue-dark border-zion-blue-light">;
            <CardHeader>;
              <CardTitle className="text-white">{t('partner.influencers.title')}</CardTitle>;
              <CardDescription>{t('partner.influencers.desc')}</CardDescription>;
            </CardHeader>;
            <CardContent className="space-y-4">;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />;
                <div>;
                  <p className="font-medium text-white">{t('partner.influencers.points.audience')}</p>;
                  <p className="text-sm text-zion-slate-light">{t('partner.influencers.points.audience_desc')}</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />;
                <div>;
                  <p className="font-medium text-white">{t('partner.influencers.points.insights')}</p>;
                  <p className="text-sm text-zion-slate-light">{t('partner.influencers.points.insights_desc')}</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />;
                <div>;
                  <p className="font-medium text-white">{t('partner.influencers.points.resources')}</p>;
                  <p className="text-sm text-zion-slate-light">{t('partner.influencers.points.resources_desc')}</p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
          <Card className="bg-zion-blue-dark border-zion-blue-light">;
            <CardHeader>;
              <CardTitle className="text-white">{t('partner.organizations.title')}</CardTitle>;
              <CardDescription>{t('partner.organizations.desc')}</CardDescription>;
            </CardHeader>;
            <CardContent className="space-y-4">;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />;
                <div>;
                  <p className="font-medium text-white">{t('partner.organizations.points.ecosystem')}</p>;
                  <p className="text-sm text-zion-slate-light">{t('partner.organizations.points.ecosystem_desc')}</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />;
                <div>;
                  <p className="font-medium text-white">{t('partner.organizations.points.co_brand')}</p>;
                  <p className="text-sm text-zion-slate-light">{t('partner.organizations.points.co_brand_desc')}</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />;
                <div>;
                  <p className="font-medium text-white">{t('partner.organizations.points.tracking')}</p>;
                  <p className="text-sm text-zion-slate-light">{t('partner.organizations.points.tracking_desc')}</p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
        <div className="text-center mb-12">;
          <h2 className="text-2xl font-bold text-white mb-4">{t('partner.how_it_works')}</h2>;
          <div className="grid md:grid-cols-3 gap-6">;
            <Card className="bg-zion-blue-dark border-zion-blue-light">;
              <CardHeader className="text-center pb-2">;
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">;
                  <Users className="h-6 w-6 text-zion-cyan" />;
                </div>;
                <CardTitle className="text-lg text-white">{t('partner.steps.join_title')}</CardTitle>;
              </CardHeader>;
              <CardContent className="text-center text-sm text-zion-slate-light">;
                <p>{t('partner.steps.join_desc')}</p>;
              </CardContent>;
            </Card>;
            <Card className="bg-zion-blue-dark border-zion-blue-light">;
              <CardHeader className="text-center pb-2">;
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">;
                  <FileText className="h-6 w-6 text-zion-cyan" />;
                </div>;
                <CardTitle className="text-lg text-white">{t('partner.steps.share_title')}</CardTitle>;
              </CardHeader>;
              <CardContent className="text-center text-sm text-zion-slate-light">;
                <p>{t('partner.steps.share_desc')}</p>;
              </CardContent>;
            </Card>;
            <Card className="bg-zion-blue-dark border-zion-blue-light">;
              <CardHeader className="text-center pb-2">;
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">;
                  <PieChart className="h-6 w-6 text-zion-cyan" />;
                </div>;
                <CardTitle className="text-lg text-white">{t('partner.steps.earn_title')}</CardTitle>;
              </CardHeader>;
              <CardContent className="text-center text-sm text-zion-slate-light">;
                <p>{t('partner.steps.earn_desc')}</p>;
              </CardContent>;
            </Card>;
          </div>;
        </div>;
        <div className="flex justify-center gap-4">;
          <Button;
            size="lg";
            className="bg-zion-purple hover:bg-zion-purple-dark text-white";
            asChild;
          >;
            <Link href="/signup?type=partner&source=partner-program">{t('partner.apply')}</Link>;
          </Button>;
          <Button;
            size="lg";
            variant="outline";
            className="text-zion-cyan border-zion-cyan";
            disabled={!authServiceAvailable}
            onClick={() => router.push('/login')}
          >;
            {t('partner.login')}
          </Button>
          {!authServiceAvailable && (
            <p className="text-red-500 text-sm mt-2">{t('partner.login_unavailable')}</p>
          )}
        </div>;
      </div>;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    );
  }

  // Authenticated user view - Partner Dashboard
  logInfo('PartnersPage rendering Authenticated View. User:', { data: user }),
  return (
<<<<<<< HEAD
    <div className="container max-w-7xl py-10">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
    <div className='container max-w-7xl py-10'>
=======
    <div className="container max-w-7xl py-10">
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <h1>DEBUG: Partners Page - Authenticated View</h1>
=======
    <div className="container max-w-7xl py-10">
    <div className='container max-w-7xl py-10'>
>>>>>>>       <h1>DEBUG: Partners Page - Authenticated View</h1>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">{t('partner.dashboard_title')}</h1>
          <p className="text-zion-slate-light">{t('partner.dashboard_desc')}</p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
        <div className='flex gap-2'>
          <Button
            variant='outline'
            className='flex items-center gap-2'
            onClick={() => window.print()}
          >
            <FileDown className='h-4 w-4' />            {t('partner.export_csv')}      <h1>DEBUG: Partners Page - Authenticated View</h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">{t('partner.dashboard_title')}</h1>
          <p className="text-zion-slate-light">{t('partner.dashboard_desc')}</p>
        </div>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="flex gap-2">
=======
        <div className='flex gap-2'>
          <Button
            variant='outline'
            className='flex items-center gap-2'
            onClick={() => window.print()}
          >
            <FileDown className='h-4 w-4' />            {t('partner.export_csv')}      <h1>DEBUG: Partners Page - Authenticated View</h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">{t('partner.dashboard_title')}</h1>
          <p className="text-zion-slate-light">{t('partner.dashboard_desc')}</p>
        </div>
>>>>>>>         <div className="flex gap-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <Button variant="outline" className="flex items-center gap-2" onClick={() => window.print()}>
            <FileDown className="h-4 w-4" />
            {t('partner.export_csv')}
          </Button>
        </div>
      </div>
<<<<<<< HEAD

=======
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className='space-y-4'
      >
        <TabsList className='grid grid-cols-2 md:grid-cols-5 mb-4'>
          <TabsTrigger value='overview'>
            {t('partner.tabs.overview')}
          </TabsTrigger>
          <TabsTrigger value='referrals'>
            {t('partner.tabs.referrals')}
          </TabsTrigger>
          <TabsTrigger value='earnings'>
            {t('partner.tabs.earnings')}
          </TabsTrigger>
          <TabsTrigger value='leaderboard'>
            {t('partner.tabs.leaderboard')}
          </TabsTrigger>
          <TabsTrigger value='resources'>
            {t('partner.tabs.resources')}
          </TabsTrigger>
        </TabsList>        </TabsList>
<<<<<<< HEAD
=======
        <TabsContent value="overview" className="space-y-4">
          <PartnerDashboard />
        </TabsContent>
        <TabsContent value="referrals" className="space-y-4">
          <PartnerReferralLinks />
        </TabsContent>
        <TabsContent value='overview' className='space-y-4'>
          <PartnerDashboard />
        </TabsContent>
        <TabsContent value='referrals' className='space-y-4'>
          <PartnerReferralLinks />
        </TabsContent>
        <TabsContent value='earnings' className='space-y-4'>          <Card>
=======

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">
          <TabsTrigger value="overview">{t('partner.tabs.overview')}</TabsTrigger>
          <TabsTrigger value="referrals">{t('partner.tabs.referrals')}</TabsTrigger>
          <TabsTrigger value="earnings">{t('partner.tabs.earnings')}</TabsTrigger>
          <TabsTrigger value="leaderboard">{t('partner.tabs.leaderboard')}</TabsTrigger>
          <TabsTrigger value="resources">{t('partner.tabs.resources')}</TabsTrigger>
        </TabsList>
        
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <TabsContent value="overview" className="space-y-4">
          <PartnerDashboard />
        </TabsContent>
        
        <TabsContent value="referrals" className="space-y-4">
          <PartnerReferralLinks />
        </TabsContent>
<<<<<<< HEAD
        <TabsContent value='overview' className='space-y-4'>
          <PartnerDashboard />
        </TabsContent>
        <TabsContent value='referrals' className='space-y-4'>
          <PartnerReferralLinks />
        </TabsContent>
        <TabsContent value='earnings' className='space-y-4'>          <Card>
>>>>>>>         <TabsContent value="earnings" className="space-y-4">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <TabsContent value="earnings" className="space-y-4">


>>>>>>>           <Card>
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <TabsContent value="earnings" className="space-y-4">
          <Card>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <CardHeader>
              <CardTitle>{t('partner.earnings_title')}</CardTitle>
              <CardDescription>{t('partner.earnings_desc')}</CardDescription>
            </CardHeader>
            <CardContent>
<<<<<<< HEAD

        </TabsContent>            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="leaderboard" className="space-y-4">
          <PartnerLeaderboard />

        </TabsContent>
        <TabsContent value='leaderboard' className='space-y-4'>
          <PartnerLeaderboard />
        </TabsContent>

        <TabsContent value='resources' className='space-y-4'>          <PartnerResources />
        <TabsContent value="resources" className="space-y-4">

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {/* This will be implemented later */}
              <p className="text-zion-slate-light">{t('partner.earnings_placeholder')}</p>
            </CardContent>
          </Card>
        </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD

=======
        <TabsContent value="leaderboard" className="space-y-4">
          <PartnerLeaderboard />
        </TabsContent>
        <TabsContent value='leaderboard' className='space-y-4'>
          <PartnerLeaderboard />
        </TabsContent>
        <TabsContent value='resources' className='space-y-4'>          <PartnerResources />
>>>>>>>         <TabsContent value="resources" className="space-y-4">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <TabsContent value="resources" className="space-y-4">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>           <PartnerResources />
=======
        <TabsContent value="leaderboard" className="space-y-4">
          <PartnerLeaderboard />
        </TabsContent>
        <TabsContent value='leaderboard' className='space-y-4'>
          <PartnerLeaderboard />
        </TabsContent>
        <TabsContent value='resources' className='space-y-4'>          <PartnerResources />
=======
        
        <TabsContent value="leaderboard" className="space-y-4">
          <PartnerLeaderboard />
        </TabsContent>
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <TabsContent value="resources" className="space-y-4">
          <PartnerResources />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </TabsContent>
      </Tabs>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
  async function checkHealth () {try {}checkHealth () ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}, []);
//If not authenticated, display partner program info and signup CTA </div> <div className="grid md:grid-cols-2 gap-8 mb-12" > <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> </CardHeader> <CardContent className="space-y-4" > <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" /> <div> </div> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> </CardHeader> <CardContent className="space-y-4" > <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" /> <div> </div> </div> </CardContent> </Card> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader className="text-center pb-2" > <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4" > <FileText className="h-6 w-6 text-zion-cyan" /> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader className="text-center pb-2" > <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4" > <PieChart className="h-6 w-6 text-zion-cyan" /> </div> </CardContent> </Card> </div> </div> <div className="flex justify-center gap-4" > <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white" asChild > > {t ('partner.login') ;
            onClick={() => window && window.print()}
          >;
            <FileDown className='h-4 w-4' />            {t('partner && partner.export_csv')}      <h1>DEBUG: Partners Page - Authenticated View</h1>;
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">;
        <div>;
          <h1 className="text-3xl font-bold tracking-tight text-white">{t('partner && partner.dashboard_title')}</h1>;
          <p className="text-zion-slate-light">{t('partner && partner.dashboard_desc')}</p>;
        </div>;
        <div className="flex gap-2">;
          <Button variant="outline" className="flex items-center gap-2" onClick={() => window && window.print()}>;
            <FileDown className="h-4 w-4" />;
            {t('partner && partner.export_csv')}
          </Button>;
        </div>;
      </div>;

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className='space-y-4'>;
        <TabsList className='grid grid-cols-2 md:grid-cols-5 mb-4'>;
          <TabsTrigger value='overview'>;
            {t('partner && partner.tabs.overview')}
          </TabsTrigger>;
          <TabsTrigger value='referrals'>;
            {t('partner && partner.tabs.referrals')}
          </TabsTrigger>;
          <TabsTrigger value='earnings'>;
            {t('partner && partner.tabs.earnings')}
          </TabsTrigger>;
          <TabsTrigger value='leaderboard'>;
            {t('partner && partner.tabs.leaderboard')}
          </TabsTrigger>;
          <TabsTrigger value='resources'>;
            {t('partner && partner.tabs.resources')}
          </TabsTrigger>;
        </TabsList>        </TabsList>;

        <TabsContent value="overview" className="space-y-4">;
          <PartnerDashboard />;
        </TabsContent>;

        <TabsContent value="referrals" className="space-y-4">;
          <PartnerReferralLinks />;
        </TabsContent>;

        <TabsContent value='overview' className='space-y-4'>;
          <PartnerDashboard />;
        </TabsContent>;

        <TabsContent value='referrals' className='space-y-4'>;
          <PartnerReferralLinks />;
        </TabsContent>;

        <TabsContent value='earnings' className='space-y-4'>          <Card>        ;
        <TabsContent value="earnings" className="space-y-4">;
          <Card>;
            <CardHeader>;
              <CardTitle>{t('partner && partner.earnings_title')}</CardTitle>;
              <CardDescription>{t('partner && partner.earnings_desc')}</CardDescription>;
            </CardHeader>;
            <CardContent>;
              {/* This will be implemented later */}
              <p className='text-zion-slate-light'>;
                {t('partner && partner.earnings_placeholder')}
        <div className='flex justify - center gap - 4'>;
          <Button;
            size='lg';
            className='bg - zion - purple hover:bg - zion - purple - dark text - white';
            as_child;
          >;
            <Link href='/signup?type = partner & source = partner - program'>;
              {t ('partner.apply')}
            </Link>;
          </Button>;
          <Button;
            size='lg';
            variant='outline';
            className='text - zion - cyan border - zion - cyan'            disabled={!authServiceAvailable}          <Button;
            size="lg";
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";
            as_child;
          >;
            <Link href="/signup?type = partner & source = partner - program">{t ('partner.apply')}</Link>;
          </Button>;
          <Button;
            size="lg";
            variant="outline";
            className="text - zion - cyan border - zion - cyan";
            disabled={!authServiceAvailable}
            on_click={() => router.push ('/login')}
            disabled = {!authServiceAvailable, }
            on_click = {() => router.push ('/login'), }
          >;
            {t ('partner.login')}
          </Button>;
          {!authServiceAvailable && (
            <p className='text - red - 500 text - sm mt - 2'>;
              {t ('partner.login_unavailable')}
            </p>          )}            <p className="text - red - 500 text - sm mt - 2">{t ('partner.login_unavailable')}</p>)}
        </div>;
      </div>);
  }
  // Authenticated user view - Partner Dashboard;
  log_info ('PartnersPage rendering Authenticated View. User:', { data: user });
  return (
    <div className='container max - w-7xl py - 10'>;
      <h1 > DEBUG: Partners Page - Authenticated View</h1>;
      <div className='flex flex - col md:flex - row justify - between items - start md:items - center gap - 4 mb - 8'>;
        <div>;
          <h1 className='text - 3xl font - bold tracking - tight text - white'>;
            {t ('partner.dashboard_title')}
          </h1>;
          <p className='text - zion - slate - light'>{t ('partner.dashboard_desc')}</p>;
        </div>;
        <div className='flex gap - 2'>;
          <Button;
            variant='outline';
            className='flex items - center gap - 2';
            on_click={() => window.print ()}
          >;
            <FileDown className='h - 4 w - 4' />            {t ('partner.export_csv')}      <h1 > DEBUG: Partners Page - Authenticated View</h1>;
      <div className="flex flex - col md:flex - row justify - between items - start md:items - center gap - 4 mb - 8">;
        <div>;
          <h1 className="text - 3xl font - bold tracking - tight text - white">{t ('partner.dashboard_title')}</h1>;
          <p className="text - zion - slate - light">{t ('partner.dashboard_desc')}</p>;
        </div>;
        <div className="flex gap - 2">;
          <Button variant="outline" className="flex items - center gap - 2" on_click={() => window.print ()}>;
            <FileDown className="h - 4 w - 4" />;
            {t ('partner.export_csv')}
          </Button>;
        </div>;
      </div>;
      <Tabs;
        value={active_tab}
        onValueChange={setActiveTab}
        className='space - y-4';
      >;
        <TabsList className='grid grid - cols - 2 md:grid - cols - 5 mb - 4'>;
          <TabsTrigger value='overview'>;
            {t ('partner.tabs.overview')}
          </TabsTrigger>;
          <TabsTrigger value='referrals'>;
            {t ('partner.tabs.referrals')}
          </TabsTrigger>;
          <TabsTrigger value='earnings'>;
            {t ('partner.tabs.earnings')}
          </TabsTrigger>;
          <TabsTrigger value='leaderboard'>;
            {t ('partner.tabs.leaderboard')}
          </TabsTrigger>;
          <TabsTrigger value='resources'>;
            {t ('partner.tabs.resources')}
          </TabsTrigger>;
        </TabsList>        </TabsList>;
        <TabsContent value="overview" className="space - y-4">;
          <PartnerDashboard />;
        </TabsContent>;
        <TabsContent value="referrals" className="space - y-4">;
          <PartnerReferralLinks />;
        </TabsContent>;
        <TabsContent value='overview' className='space - y-4'>;
          <PartnerDashboard />;
        </TabsContent>;
        <TabsContent value='referrals' className='space - y-4'>;
          <PartnerReferralLinks />;
        </TabsContent>;
        <TabsContent value='earnings' className='space - y-4'>          <Card>;
        <TabsContent value="earnings" className="space - y-4">;
          <Card>;
            <CardHeader>;
              <CardTitle>{t ('partner.earnings_title')}</CardTitle>;
              <CardDescription>{t ('partner.earnings_desc')}</CardDescription>;
            </CardHeader>;
            <CardContent>;
              {/* This will be implemented later */}
              <p className='text - zion - slate - light'>;
                {t ('partner.earnings_placeholder')}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              </p>;
            </CardContent>;
          </Card>;
        </TabsContent>            </CardContent>;
          </Card>;
        </TabsContent>;


>>>>>>> }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        <TabsContent value="leaderboard" className="space - y-4">;
          <PartnerLeaderboard />;
        </TabsContent>;
        <TabsContent value='leaderboard' className='space - y-4'>;
          <PartnerLeaderboard />;
        </TabsContent>;
        <TabsContent value='resources' className='space - y-4'>          <PartnerResources />;
        <TabsContent value="resources" className="space - y-4">;
          <PartnerResources />;
        </TabsContent>;
      </Tabs>;
    </div>);
  async /**
 * check_health - Function description
 */
function check_health() {
  try {
  ;
;
}check_health () ;
}, []);
//If not authenticated, display partner program info and signup CTA </div> <div className="grid md:grid - cols - 2 gap - 8 mb - 12" > <Card className="bg - zion - blue - dark border - zion - blue - light" > <CardHeader> </CardHeader> <CardContent className="space - y-4" > <div className="flex items - start gap - 3" > <CheckCircle className="h - 5 w - 5 text - zion - cyan mt - 0.5" /> <div> </div> </div> <div className="flex items - start gap - 3" > <CheckCircle className="h - 5 w - 5 text - zion - cyan mt - 0.5" /> <div> </div> </div> <div className="flex items - start gap - 3" > <CheckCircle className="h - 5 w - 5 text - zion - cyan mt - 0.5" /> <div> </div> </div> </CardContent> </Card> <Card className="bg - zion - blue - dark border - zion - blue - light" > <CardHeader> </CardHeader> <CardContent className="space - y-4" > <div className="flex items - start gap - 3" > <CheckCircle className="h - 5 w - 5 text - zion - purple mt - 0.5" /> <div> </div> </div> <div className="flex items - start gap - 3" > <CheckCircle className="h - 5 w - 5 text - zion - purple mt - 0.5" /> <div> </div> </div> <div className="flex items - start gap - 3" > <CheckCircle className="h - 5 w - 5 text - zion - purple mt - 0.5" /> <div> </div> </div> </CardContent> </Card> </div> </CardContent> </Card> <Card className="bg - zion - blue - dark border - zion - blue - light" > <CardHeader className="text - center pb - 2" > <div className="mx - auto bg - zion - blue - light rounded - full w - 12 h - 12 flex items - center justify - center mb - 4" > <FileText className="h - 6 w - 6 text - zion - cyan" /> </div> </CardContent> </Card> <Card className="bg - zion - blue - dark border - zion - blue - light" > <CardHeader className="text - center pb - 2" > <div className="mx - auto bg - zion - blue - light rounded - full w - 12 h - 12 flex items - center justify - center mb - 4" > <PieChart className="h - 6 w - 6 text - zion - cyan" /> </div> </CardContent> </Card> </div> </div> <div className="flex justify - center gap - 4" > <Button size="lg" className="bg - zion - purple hover:bg - zion - purple - dark text - white" as_child > > {
  t ('partner.login') ;
}</Button>) ;
}</div> </div>) ";
}//Authenticated user view - Partner Dashboard return (<div className="container max - w-7xl py - 10" > <h1 > DEBUG: Partners Page - Authenticated View</h1> <div className="flex flex - col md:flex - row justify - between items - start md:items - center gap - 4 mb - 8" > <div> </Button> </div> </div> </TabsList> <TabsContent value="overview" className="space - y-4" > <PartnerDashboard /> </TabsContent> <TabsContent value="referrals" className="space - y-4" > <PartnerReferralLinks /> </TabsContent> <TabsContent value="earnings" className="space - y-4" > <Card> <CardHeader> <CardTitle> {';
=======
  );
<<<<<<< HEAD
  async function checkHealth () {try {}checkHealth () ;
=======
  async function checkHealth () {;
  try {}checkHealth () ;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}, []);
//If not authenticated, display partner program info and signup CTA </div> <div className="grid md:grid-cols-2 gap-8 mb-12" > <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> </CardHeader> <CardContent className="space-y-4" > <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" /> <div> </div> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> </CardHeader> <CardContent className="space-y-4" > <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" /> <div> </div> </div> </CardContent> </Card> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader className="text-center pb-2" > <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4" > <FileText className="h-6 w-6 text-zion-cyan" /> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader className="text-center pb-2" > <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4" > <PieChart className="h-6 w-6 text-zion-cyan" /> </div> </CardContent> </Card> </div> </div> <div className="flex justify-center gap-4" > <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white" asChild > > {t ('partner.login') ;
}</Button>) ;
}</div> </div>) ";
}//Authenticated user view - Partner Dashboard return (<div className="container max-w-7xl py-10" > <h1>DEBUG: Partners Page - Authenticated View</h1> <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8" > <div> </Button> </div> </div> </TabsList> <TabsContent value="overview" className="space-y-4" > <PartnerDashboard /> </TabsContent> <TabsContent value="referrals" className="space-y-4" > <PartnerReferralLinks /> </TabsContent> <TabsContent value="earnings" className="space-y-4" > <Card> <CardHeader> <CardTitle> {';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  t ('partner.earnings title') ;
}</CardTitle> <CardDescription> {';
  t ('partner.earnings desc') ";
}</CardDescription> </CardHeader> <CardContent> </CardContent> </Card> </TabsContent> <TabsContent value="leaderboard" className="space-y-4" > <PartnerLeaderboard /> </TabsContent> <TabsContent value="resources" className="space-y-4" > <PartnerResources /> </TabsContent> </Tabs> </div>) ;
}'"}
}
<<<<<<< HEAD
<<<<<<< HEAD

  )
}
;

=======
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  )
}
;
<<<<<<< HEAD
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
