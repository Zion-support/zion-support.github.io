=======
Card,
  CardContent,
  CardDescription,
  CardHeader,;
  CardTitle;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

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

export default function Partners() {;
  logInfo('PartnersPage rendering');
  const [activeTab, setActiveTab] = useState('overview');
  const { t } = useTranslation();
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true);


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, FileDown, FileText, PieChart, Users } from 'lucide-react';

import { useState, useEffect } from "react";
import { useTranslation  } from 'react-i18next';

import Link from 'next/link',
import { PartnerRegistrationForm } from "@/components/partners/PartnerRegistrationForm",
import { PartnerReferralLinks } from "@/components/partners/PartnerReferralLinks",
import { PartnerDashboard } from "@/components/partners/PartnerDashboard",
import { PartnerLeaderboard } from "@/components/partners/PartnerLeaderboard",
import { PartnerResources } from "@/components/partners/PartnerResources",

<<<<<<< HEAD
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

  // If not authenticated, display partner program info and signup CTA
  if (!isAuthenticated) {
    logInfo('PartnersPage rendering Unauthenticated View'),
    return (

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

                  <p className="font-medium text-white">{t('partner.influencers.points.resources')}</p>
                  <p className="text-sm text-zion-slate-light">{t('partner.influencers.points.resources_desc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>

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

                  <p className="font-medium text-white">{t('partner.organizations.points.tracking')}</p>
                  <p className="text-sm text-zion-slate-light">{t('partner.organizations.points.tracking_desc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

                </div>
                <CardTitle className="text-lg text-white">{t('partner.steps.join_title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-zion-slate-light">
                <p>{t('partner.steps.join_desc')}</p>
              </CardContent>
            </Card>

                </div>
                <CardTitle className="text-lg text-white">{t('partner.steps.share_title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-zion-slate-light">
                <p>{t('partner.steps.share_desc')}</p>
              </CardContent>
            </Card>

                </div>
                <CardTitle className="text-lg text-white">{t('partner.steps.earn_title')}</CardTitle>
              </CardHeader>

                <p>{t('partner.steps.earn_desc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>

          <Button
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
  logInfo('PartnersPage rendering Authenticated View. User:', { data: user }),
  return (

      <h1>DEBUG: Partners Page - Authenticated View</h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">{t('partner.dashboard_title')}</h1>
          <p className="text-zion-slate-light">{t('partner.dashboard_desc')}</p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2" onClick={() => window.print()}>
            <FileDown className="h-4 w-4" />
            {t('partner.export_csv')}
          </Button>
        </div>
      </div>

        <TabsContent value="earnings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('partner.earnings_title')}</CardTitle>
              <CardDescription>{t('partner.earnings_desc')}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* This will be implemented later */}
              <p className="text-zion-slate-light">{t('partner.earnings_placeholder')}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <PartnerResources />
        </TabsContent>
      </Tabs>
    </div>

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
