  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
ursor/fix-website-loading-errors-and-merge-6662


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

                  </p>                </div>        </div>


      <div className="container max-w-6xl py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">{t('partner.title')}</h1>
          <p className="text-xl text-zion-slate-light">{t('partner.subtitle')}</p>


          <Card className="bg-zion-blue-dark border-zion-blue-light">


          <Card className="bg-zion-blue-dark border-zion-blue-light">






                  <p className="font-medium text-white">{t('partner.organizations.points.tracking')}</p>
                  <p className="text-sm text-zion-slate-light">{t('partner.organizations.points.tracking_desc')}</p>
        <div className='text-center mb-12'>
          <h2 className='text-2xl font-bold text-white mb-4'>
            {t('partner.how_it_works')}
          </h2>
          <div className='grid md:grid-cols-3 gap-6'>
            <Card className='bg-zion-blue-dark border-zion-blue-light'>
              <CardHeader className='text-center pb-2'>
                <div className='mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                  <Users className='h-6 w-6 text-zion-cyan' />
            <Card className='bg-zion-blue-dark border-zion-blue-light'>
              <CardHeader className='text-center pb-2'>
                <div className='mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                  <FileText className='h-6 w-6 text-zion-cyan' />
              <CardContent className='text-center text-sm text-zion-slate-light'>                <p>{t('partner.steps.earn_desc')}</p>              <CardContent className="text-center text-sm text-zion-slate-light">

    checkHealth();  }, []);    checkHealth();
  }, []);



        <div className="flex justify-center gap-4">

            size="lg"
          )}
        </div>;
      </div>;







      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">
          <TabsTrigger value="overview">{t('partner.tabs.overview')}</TabsTrigger>
          <TabsTrigger value="referrals">{t('partner.tabs.referrals')}</TabsTrigger>
          <TabsTrigger value="earnings">{t('partner.tabs.earnings')}</TabsTrigger>
          <TabsTrigger value="leaderboard">{t('partner.tabs.leaderboard')}</TabsTrigger>
          <TabsTrigger value="resources">{t('partner.tabs.resources')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value='leaderboard' className='space-y-4'>
          <PartnerLeaderboard />
        </TabsContent>
        <TabsContent value='resources' className='space-y-4'>          <PartnerResources />

  async function checkHealth () {;
  try {}checkHealth () ;


}
}


;

  )
}
;
