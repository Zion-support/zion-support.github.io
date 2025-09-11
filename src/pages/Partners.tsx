<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import {
import { Button } from '@/components/ui/button';
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
  Card,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
Card,
  CardContent,
  CardDescription,
  CardHeader,;
  CardTitle;

} from '@/components/ui/card';
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



export default function Partners() {;
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662

xport default function Partners() {;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  logInfo('PartnersPage rendering');
  const [activeTab, setActiveTab] = useState('overview');
  const { t } = useTranslation();
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true);
<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, FileDown, FileText, PieChart, Users } from 'lucide-react';

import { useState, useEffect } from "react";
import { useTranslation  } from 'react-i18next';

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
import { useAuth } from "@/hooks/useAuth",
import { useRouter } from 'next/router',
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',
<<<<<<< HEAD
=======

  logInfo('PartnersPage rendering'),;
  const [activeTab, setActiveTab] = useState("overview"),;
  const { t } = useTranslation(),;
  const { user, isAuthenticated } = useAuth(),;
  const router = useRouter(),;
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true),;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export default function Partners() {

  logInfo('PartnersPage rendering'),
  const [activeTab, setActiveTab] = useState("overview"),
  const { t } = useTranslation(),
  const { user, isAuthenticated } = useAuth(),
  const router = useRouter(),
<<<<<<< HEAD
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true),

  useEffect((,) => {
=======

  useEffect((,) => {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    async function checkHealth() {;
      try {;
        const res = await fetch('/api/auth/health');
        setAuthServiceAvailable(res && res.ok);
        logErrorToProduction('Partner login auth health check failed', {;
          data: err,;

} from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { CheckCircle, FileDown, FileText, PieChart, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next / link';
import { PartnerRegistrationForm } from '@/components / partners / PartnerRegistrationForm';
import { PartnerReferralLinks } from '@/components / partners / PartnerReferralLinks';
import { PartnerDashboard } from '@/components / partners / PartnerDashboard';
import { PartnerLeaderboard } from '@/components / partners / PartnerLeaderboard';
import { PartnerResources } from '@/components / partners / PartnerResources';
import { use_auth } from '@/hooks / use_auth';
import { use_router } from 'next / router';
import { log_info, logErrorToProduction } from '@/utils / production_logger';
;
export default /**
 * Partners - Function description
 */
function Partners() {
  log_info ('PartnersPage rendering');
  const [active_tab, setActiveTab] = useState ('overview');
  const { t } = use_translation ();
  const { user, is_authenticated } = use_auth ();
  const router = use_router ();
  const [authServiceAvailable, setAuthServiceAvailable] = useState (true);
  useEffect (() => {
import { Button  } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components / ui / tabs';
import { CheckCircle, FileDown, FileText, PieChart, Users } from 'lucide-react';
import { useState, useEffect  } from './react';
import { use_translation } from 'react - i18next';
import Link from 'next / link';
import { PartnerRegistrationForm  } from '@/components / partners / PartnerRegistrationForm';
import { PartnerReferralLinks  } from '@/components / partners / PartnerReferralLinks';
import { PartnerDashboard  } from '@/components / partners / PartnerDashboard';
import { PartnerLeaderboard  } from '@/components / partners / PartnerLeaderboard';
import { PartnerResources  } from '@/components / partners / PartnerResources';
import { use_auth  } from '@/hooks / use_auth';
import { use_router } from 'next / router';
import { log_info, logErrorToProduction } from '@/utils / production_logger';
export default /**
 * Partners - Function description
 */
function Partners() {
  log_info ('PartnersPage rendering'),
  const [active_tab, setActiveTab] = useState ("overview"),
  const { t } = use_translation (),
  const { user, is_authenticated } = use_auth (),
  const router = use_router (),
  const [authServiceAvailable, setAuthServiceAvailable] = useState (true),
  useEffect ((, ) => {
    async /**
 * check_health - Function description
 */
function check_health() {
      try {
        const res = await fetch ('/api / auth / health');
        setAuthServiceAvailable (res.ok);
        logErrorToProduction ('Partner login auth health check failed', {
          data: err,
        });
<<<<<<< HEAD
        setAuthServiceAvailable(false);
      }
    }
    checkHealth();  }, []);    checkHealth()
  }, []);
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
ursor/fix-website-loading-errors-and-merge-6662
  // If not authenticated, display partner program info and signup CTA
    logInfo('PartnersPage rendering Unauthenticated View');

  // If not authenticated, display partner program info and signup CTA
  if (!isAuthenticated) {
    logInfo('PartnersPage rendering Unauthenticated View'),
    return (
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
=======
        setAuthServiceAvailable (false);
      }
    }


  // If not authenticated, display partner program info and signup CTA
  if (!isAuthenticated) {
    logInfo('PartnersPage rendering Unauthenticated View');
    return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </p>                </div>        </div>


      <div className="container max-w-6xl py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">{t('partner.title')}</h1>
          <p className="text-xl text-zion-slate-light">{t('partner.subtitle')}</p>
        </div>

<<<<<<< HEAD
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
                  <p className='font-medium text-white'>
                    {t('partner.influencers.points.resources')}
                  </p>
                  <p className='text-sm text-zion-slate-light'>
                    {t('partner.influencers.points.resources_desc')}
                  </p>                </div>        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-zion-blue-dark border-zion-blue-light">
=======

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-zion-blue-dark border-zion-blue-light">

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
                  <p className="font-medium text-white">{t('partner.influencers.points.resources')}</p>
                  <p className="text-sm text-zion-slate-light">{t('partner.influencers.points.resources_desc')}</p>
=======


                  <p className="font-medium text-white">{t('partner.influencers.points.resources')}</p>
                  <p className="text-sm text-zion-slate-light">{t('partner.influencers.points.resources_desc')}</p>


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
              </div>
            </CardContent>
          </Card>
<<<<<<< HEAD
          <Card className='bg-zion-blue-dark border-zion-blue-light'>

          <Card className="bg-zion-blue-dark border-zion-blue-light">

                  <p className='font-medium text-white'>
                    {t('partner.organizations.points.tracking')}
                  </p>
                  <p className='text-sm text-zion-slate-light'>
                    {t('partner.organizations.points.tracking_desc')}
                  </p>                </div>            <CardHeader>
          <Card className='bg-zion-blue-dark border-zion-blue-light'>
=======


          <Card className="bg-zion-blue-dark border-zion-blue-light">

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <Card className="bg-zion-blue-dark border-zion-blue-light">


            <CardHeader>
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




                  <p className="font-medium text-white">{t('partner.organizations.points.tracking')}</p>
                  <p className="text-sm text-zion-slate-light">{t('partner.organizations.points.tracking_desc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
<<<<<<< HEAD
        <div className='text-center mb-12'>
          <h2 className='text-2xl font-bold text-white mb-4'>
            {t('partner.how_it_works')}
          </h2>
          <div className='grid md:grid-cols-3 gap-6'>
            <Card className='bg-zion-blue-dark border-zion-blue-light'>
              <CardHeader className='text-center pb-2'>
                <div className='mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                  <Users className='h-6 w-6 text-zion-cyan' />
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">{t('partner.how_it_works')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-zion-cyan" />



                </div>
                <CardTitle className="text-lg text-white">{t('partner.steps.join_title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-zion-slate-light">
                <p>{t('partner.steps.join_desc')}</p>
              </CardContent>
            </Card>
<<<<<<< HEAD
            <Card className='bg-zion-blue-dark border-zion-blue-light'>
              <CardHeader className='text-center pb-2'>
                <div className='mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                  <FileText className='h-6 w-6 text-zion-cyan' />
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            
            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-zion-cyan" />



                </div>
                <CardTitle className="text-lg text-white">{t('partner.steps.share_title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-zion-slate-light">
                <p>{t('partner.steps.share_desc')}</p>
              </CardContent>
            </Card>
<<<<<<< HEAD
            <Card className='bg-zion-blue-dark border-zion-blue-light'>
              <CardHeader className='text-center pb-2'>
                <div className='mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                  <PieChart className='h-6 w-6 text-zion-cyan' />
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            
            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <PieChart className="h-6 w-6 text-zion-cyan" />
<<<<<<< HEAD
                </div>
                <CardTitle className="text-lg text-white">{t('partner.steps.earn_title')}</CardTitle>
              </CardHeader>
              <CardContent className='text-center text-sm text-zion-slate-light'>                <p>{t('partner.steps.earn_desc')}</p>              <CardContent className="text-center text-sm text-zion-slate-light">
              <CardContent className="text-center text-sm text-zion-slate-light">

                <p>{t('partner.steps.earn_desc')}</p>
            </Card>
          </div>
        </div>
        <div className='flex justify-center gap-4'>
            size="lg"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            asChild
          >
            <Link href="/signup?type=partner&source=partner-program">{t('partner.apply')}</Link>
          </Button>
          <Button
    );
  }
  // Authenticated user view - Partner Dashboard
  logInfo('PartnersPage rendering Authenticated View. User:', { data: user });

  return (
    <div className='container max-w-7xl py-10'>
=======



                </div>
                <CardTitle className="text-lg text-white">{t('partner.steps.earn_title')}</CardTitle>
              </CardHeader>

              <CardContent className="text-center text-sm text-zion-slate-light">

                <p>{t('partner.steps.earn_desc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>


    checkHealth();  }, []);    checkHealth();
  }, []);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        <div className="flex justify-center gap-4">

          <Button
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


          )}
        </div>;
      </div>;
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



    );
<<<<<<< HEAD
=======
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  // Authenticated user view - Partner Dashboard;

  logInfo('PartnersPage rendering Authenticated View. User:', { data: user });

  return (
<<<<<<< HEAD
        <div className='flex justify-center gap-4'>

        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            asChild
          >
            <Link href="/signup?type=partner&source=partner-program">{t('partner.apply')}</Link>
          </Button>
          <Button
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
    );
  }
  // Authenticated user view - Partner Dashboard
  logInfo('PartnersPage rendering Authenticated View. User:', { data: user });

  return (
    <div className='container max-w-7xl py-10'>
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
    );
  }

  // Authenticated user view - Partner Dashboard
  logInfo('PartnersPage rendering Authenticated View. User:', { data: user }),
  return (
    <div className="container max-w-7xl py-10">
    <div className='container max-w-7xl py-10'>
    <div className="container max-w-7xl py-10">
      <h1>DEBUG: Partners Page - Authenticated View</h1>
    <div className="container max-w-7xl py-10">
    <div className='container max-w-7xl py-10'>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">{t('partner.dashboard_title')}</h1>
          <p className="text-zion-slate-light">{t('partner.dashboard_desc')}</p>
        </div>
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
        <div className="flex gap-2">
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
    <div className='container max-w-7xl py-10'>;
      <h1>DEBUG: Partners Page - Authenticated View</h1>;
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>;
        <div>;
          <h1 className='text-3xl font-bold tracking-tight text-white'>;
            {t('partner && partner.dashboard_title')}
          </h1>;
          <p className='text-zion-slate-light'>{t('partner && partner.dashboard_desc')}</p>;
        </div>;
        <div className='flex gap-2'>;
          <Button
            variant='outline'
            className='flex items-center gap-2'


  // Authenticated user view - Partner Dashboard
  logInfo('PartnersPage rendering Authenticated View. User:', { data: user });
  return (

        <div className="flex gap-2">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Button variant="outline" className="flex items-center gap-2" onClick={() => window.print()}>
            <FileDown className="h-4 w-4" />
            {t('partner.export_csv')}
          </Button>
        </div>
      </div>
<<<<<<< HEAD
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

        </TabsList>        </TabsList>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">
          <TabsTrigger value="overview">{t('partner.tabs.overview')}</TabsTrigger>
          <TabsTrigger value="referrals">{t('partner.tabs.referrals')}</TabsTrigger>
          <TabsTrigger value="earnings">{t('partner.tabs.earnings')}</TabsTrigger>
          <TabsTrigger value="leaderboard">{t('partner.tabs.leaderboard')}</TabsTrigger>
          <TabsTrigger value="resources">{t('partner.tabs.resources')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <PartnerDashboard />
        </TabsContent>
<<<<<<< HEAD
        
        <TabsContent value="referrals" className="space-y-4">
          <PartnerReferralLinks />
        </TabsContent>
=======
        <TabsContent value="referrals" className="space-y-4">
          <PartnerReferralLinks />
        </TabsContent>

        <TabsContent value='earnings' className='space-y-4'>          <Card>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        


        <TabsContent value="earnings" className="space-y-4">


<<<<<<< HEAD
        
        <TabsContent value="earnings" className="space-y-4">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Card>
            <CardHeader>
              <CardTitle>{t('partner.earnings_title')}</CardTitle>
              <CardDescription>{t('partner.earnings_desc')}</CardDescription>
            </CardHeader>
            <CardContent>
<<<<<<< HEAD
=======

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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* This will be implemented later */}
              <p className="text-zion-slate-light">{t('partner.earnings_placeholder')}</p>
            </CardContent>
          </Card>
        </TabsContent>
<<<<<<< HEAD
        <TabsContent value="leaderboard" className="space-y-4">
          <PartnerLeaderboard />
        </TabsContent>
        <TabsContent value='leaderboard' className='space-y-4'>
          <PartnerLeaderboard />
        </TabsContent>
        <TabsContent value='resources' className='space-y-4'>          <PartnerResources />
ursor/fix-website-loading-errors-and-merge-6662
        <TabsContent value="resources" className="space-y-4">
        <TabsContent value="leaderboard" className="space-y-4">
          <PartnerLeaderboard />
        </TabsContent>
        <TabsContent value='leaderboard' className='space-y-4'>
          <PartnerLeaderboard />
        </TabsContent>
        <TabsContent value='resources' className='space-y-4'>          <PartnerResources />
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        
        <TabsContent value="leaderboard" className="space-y-4">
          <PartnerLeaderboard />
        </TabsContent>
        



        <TabsContent value="resources" className="space-y-4">
          <PartnerResources />
        </TabsContent>
      </Tabs>
    </div>
<<<<<<< HEAD
  async function checkHealth () {try {}checkHealth () ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  async function checkHealth () {try {}checkHealth () ;

  async function checkHealth () {;
  try {}checkHealth () ;


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
              </p>;
            </CardContent>;
          </Card>;
        </TabsContent>            </CardContent>;
          </Card>;
        </TabsContent>;


}
}
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
<<<<<<< HEAD
  );
  async function checkHealth () {try {}checkHealth () ;
  async function checkHealth () {;
  try {}checkHealth () ;
}, []);
//If not authenticated, display partner program info and signup CTA </div> <div className="grid md:grid-cols-2 gap-8 mb-12" > <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> </CardHeader> <CardContent className="space-y-4" > <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" /> <div> </div> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> </CardHeader> <CardContent className="space-y-4" > <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" /> <div> </div> </div> </CardContent> </Card> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader className="text-center pb-2" > <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4" > <FileText className="h-6 w-6 text-zion-cyan" /> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader className="text-center pb-2" > <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4" > <PieChart className="h-6 w-6 text-zion-cyan" /> </div> </CardContent> </Card> </div> </div> <div className="flex justify-center gap-4" > <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white" asChild > > {t ('partner.login') ;
}</Button>) ;
}</div> </div>) ";
}//Authenticated user view - Partner Dashboard return (<div className="container max-w-7xl py-10" > <h1>DEBUG: Partners Page - Authenticated View</h1> <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8" > <div> </Button> </div> </div> </TabsList> <TabsContent value="overview" className="space-y-4" > <PartnerDashboard /> </TabsContent> <TabsContent value="referrals" className="space-y-4" > <PartnerReferralLinks /> </TabsContent> <TabsContent value="earnings" className="space-y-4" > <Card> <CardHeader> <CardTitle> {';
  t ('partner.earnings title') ;
}</CardTitle> <CardDescription> {';
  t ('partner.earnings desc') ";
}</CardDescription> </CardHeader> <CardContent> </CardContent> </Card> </TabsContent> <TabsContent value="leaderboard" className="space-y-4" > <PartnerLeaderboard /> </TabsContent> <TabsContent value="resources" className="space-y-4" > <PartnerResources /> </TabsContent> </Tabs> </div>) ;
}'"}
}
;
  )
}
;
;
  )
}
;
=======
  t ('partner.earnings title') ;
}</CardTitle> <CardDescription> {';
  t ('partner.earnings desc') ";
}</CardDescription> </CardHeader> <CardContent> </CardContent> </Card> </TabsContent> <TabsContent value="leaderboard" className="space - y-4" > <PartnerLeaderboard /> </TabsContent> <TabsContent value="resources" className="space - y-4" > <PartnerResources /> </TabsContent> </Tabs> </div>) ;
}'"}
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

;

  )
}
;
<<<<<<< HEAD
=======
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true),
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
