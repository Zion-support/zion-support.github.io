
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { CheckCircle, FileDown, FileText, PieChart, Users } from 'lucide-react'
import { useState, useEffect } from &quot;react&quot;;
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { PartnerRegistrationForm } from &quot;@/components/partners/PartnerRegistrationForm&quot;;
import { PartnerReferralLinks } from &quot;@/components/partners/PartnerReferralLinks&quot;;
import { PartnerDashboard } from &quot;@/components/partners/PartnerDashboard&quot;;
import { PartnerLeaderboard } from &quot;@/components/partners/PartnerLeaderboard&quot;;
import { PartnerResources } from &quot;@/components/partners/PartnerResources&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useRouter } from 'next/router';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

export default function Partners() {

  logInfo('PartnersPage rendering');
  const [activeTab, setActiveTab] = useState(&quot;overview&quot;);
  const { t } = useTranslation();
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true);

  useEffect(() => {
    async function checkHealth() {
      try {
        const res = await fetch('/api/auth/health');
        setAuthServiceAvailable(res.ok);
      } catch (err) {
        logErrorToProduction('Partner login auth health check failed', { data: err });
        setAuthServiceAvailable(false);
      }
    }
    checkHealth();
  }, []);

  // If not authenticated, display partner program info and signup CTA
  if (!isAuthenticated) {
    logInfo('PartnersPage rendering Unauthenticated View');
    return (
      <div className=&quot;container max-w-6xl py-10&quot;>
        <div className=&quot;text-center mb-8&quot;>
          <h1 className=&quot;text-4xl font-bold tracking-tight text-white mb-2&quot;>{t('partner.title')}</h1>
          <p className=&quot;text-xl text-zion-slate-light&quot;>{t('partner.subtitle')}</p>
        </div>

        <div className=&quot;grid md:grid-cols-2 gap-8 mb-12&quot;>
          <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
            <CardHeader>
              <CardTitle className=&quot;text-white&quot;>{t('partner.influencers.title')}</CardTitle>
              <CardDescription>{t('partner.influencers.desc')}</CardDescription>
            </CardHeader>
            <CardContent className=&quot;space-y-4&quot;>
              <div className=&quot;flex items-start gap-3&quot;>
                <CheckCircle className=&quot;h-5 w-5 text-zion-cyan mt-0.5&quot; />
                <div>
                  <p className=&quot;font-medium text-white&quot;>{t('partner.influencers.points.audience')}</p>
                  <p className=&quot;text-sm text-zion-slate-light&quot;>{t('partner.influencers.points.audience_desc')}</p>
                </div>
              </div>
              <div className=&quot;flex items-start gap-3&quot;>
                <CheckCircle className=&quot;h-5 w-5 text-zion-cyan mt-0.5&quot; />
                <div>
                  <p className=&quot;font-medium text-white&quot;>{t('partner.influencers.points.insights')}</p>
                  <p className=&quot;text-sm text-zion-slate-light&quot;>{t('partner.influencers.points.insights_desc')}</p>
                </div>
              </div>
              <div className=&quot;flex items-start gap-3&quot;>
                <CheckCircle className=&quot;h-5 w-5 text-zion-cyan mt-0.5&quot; />
                <div>
                  <p className=&quot;font-medium text-white&quot;>{t('partner.influencers.points.resources')}</p>
                  <p className=&quot;text-sm text-zion-slate-light&quot;>{t('partner.influencers.points.resources_desc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
            <CardHeader>
              <CardTitle className=&quot;text-white&quot;>{t('partner.organizations.title')}</CardTitle>
              <CardDescription>{t('partner.organizations.desc')}</CardDescription>
            </CardHeader>
            <CardContent className=&quot;space-y-4&quot;>
              <div className=&quot;flex items-start gap-3&quot;>
                <CheckCircle className=&quot;h-5 w-5 text-zion-purple mt-0.5&quot; />
                <div>
                  <p className=&quot;font-medium text-white&quot;>{t('partner.organizations.points.ecosystem')}</p>
                  <p className=&quot;text-sm text-zion-slate-light&quot;>{t('partner.organizations.points.ecosystem_desc')}</p>
                </div>
              </div>
              <div className=&quot;flex items-start gap-3&quot;>
                <CheckCircle className=&quot;h-5 w-5 text-zion-purple mt-0.5&quot; />
                <div>
                  <p className=&quot;font-medium text-white&quot;>{t('partner.organizations.points.co_brand')}</p>
                  <p className=&quot;text-sm text-zion-slate-light&quot;>{t('partner.organizations.points.co_brand_desc')}</p>
                </div>
              </div>
              <div className=&quot;flex items-start gap-3&quot;>
                <CheckCircle className=&quot;h-5 w-5 text-zion-purple mt-0.5&quot; />
                <div>
                  <p className=&quot;font-medium text-white&quot;>{t('partner.organizations.points.tracking')}</p>
                  <p className=&quot;text-sm text-zion-slate-light&quot;>{t('partner.organizations.points.tracking_desc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className=&quot;text-center mb-12&quot;>
          <h2 className=&quot;text-2xl font-bold text-white mb-4&quot;>{t('partner.how_it_works')}</h2>
          <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
            <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
              <CardHeader className=&quot;text-center pb-2&quot;>
                <div className=&quot;mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4&quot;>
                  <Users className=&quot;h-6 w-6 text-zion-cyan&quot; />
                </div>
                <CardTitle className=&quot;text-lg text-white&quot;>{t('partner.steps.join_title')}</CardTitle>
              </CardHeader>
              <CardContent className=&quot;text-center text-sm text-zion-slate-light&quot;>
                <p>{t('partner.steps.join_desc')}</p>
              </CardContent>
            </Card>
            
            <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
              <CardHeader className=&quot;text-center pb-2&quot;>
                <div className=&quot;mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4&quot;>
                  <FileText className=&quot;h-6 w-6 text-zion-cyan&quot; />
                </div>
                <CardTitle className=&quot;text-lg text-white&quot;>{t('partner.steps.share_title')}</CardTitle>
              </CardHeader>
              <CardContent className=&quot;text-center text-sm text-zion-slate-light&quot;>
                <p>{t('partner.steps.share_desc')}</p>
              </CardContent>
            </Card>
            
            <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
              <CardHeader className=&quot;text-center pb-2&quot;>
                <div className=&quot;mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4&quot;>
                  <PieChart className=&quot;h-6 w-6 text-zion-cyan&quot; />
                </div>
                <CardTitle className=&quot;text-lg text-white&quot;>{t('partner.steps.earn_title')}</CardTitle>
              </CardHeader>
              <CardContent className=&quot;text-center text-sm text-zion-slate-light&quot;>
                <p>{t('partner.steps.earn_desc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className=&quot;flex justify-center gap-4&quot;>
          <Button
            size=&quot;lg&quot;
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;
            asChild
          >
            <Link href=&quot;/signup?type=partner&source=partner-program&quot;>{t('partner.apply')}</Link>
          </Button>
          <Button
            size=&quot;lg&quot;
            variant=&quot;outline&quot;
            className=&quot;text-zion-cyan border-zion-cyan&quot;
            disabled={!authServiceAvailable}
            onClick={() => router.push('/login')}
          >
            {t('partner.login')}
          </Button>
          {!authServiceAvailable && (
            <p className=&quot;text-red-500 text-sm mt-2&quot;>{t('partner.login_unavailable')}</p>
          )}
        </div>
      </div>
    );
  }

  // Authenticated user view - Partner Dashboard
  logInfo('PartnersPage rendering Authenticated View. User:', { data: user });
  return (
    <div className=&quot;container max-w-7xl py-10&quot;>
      <h1>DEBUG: Partners Page - Authenticated View</h1>
      <div className=&quot;flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8&quot;>
        <div>
          <h1 className=&quot;text-3xl font-bold tracking-tight text-white&quot;>{t('partner.dashboard_title')}</h1>
          <p className=&quot;text-zion-slate-light&quot;>{t('partner.dashboard_desc')}</p>
        </div>
        <div className=&quot;flex gap-2&quot;>
          <Button variant=&quot;outline&quot; className=&quot;flex items-center gap-2&quot; onClick={() => window.print()}>
            <FileDown className=&quot;h-4 w-4&quot; />
            {t('partner.export_csv')}
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className=&quot;space-y-4&quot;>
        <TabsList className=&quot;grid grid-cols-2 md:grid-cols-5 mb-4&quot;>
          <TabsTrigger value=&quot;overview&quot;>{t('partner.tabs.overview')}</TabsTrigger>
          <TabsTrigger value=&quot;referrals&quot;>{t('partner.tabs.referrals')}</TabsTrigger>
          <TabsTrigger value=&quot;earnings&quot;>{t('partner.tabs.earnings')}</TabsTrigger>
          <TabsTrigger value=&quot;leaderboard&quot;>{t('partner.tabs.leaderboard')}</TabsTrigger>
          <TabsTrigger value=&quot;resources&quot;>{t('partner.tabs.resources')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value=&quot;overview&quot; className=&quot;space-y-4&quot;>
          <PartnerDashboard />
        </TabsContent>
        
        <TabsContent value=&quot;referrals&quot; className=&quot;space-y-4&quot;>
          <PartnerReferralLinks />
        </TabsContent>
        
        <TabsContent value=&quot;earnings&quot; className=&quot;space-y-4&quot;>
          <Card>
            <CardHeader>
              <CardTitle>{t('partner.earnings_title')}</CardTitle>
              <CardDescription>{t('partner.earnings_desc')}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* This will be implemented later */}
              <p className=&quot;text-zion-slate-light&quot;>{t('partner.earnings_placeholder')}</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value=&quot;leaderboard&quot; className=&quot;space-y-4&quot;>
          <PartnerLeaderboard />
        </TabsContent>
        
        <TabsContent value=&quot;resources&quot; className=&quot;space-y-4&quot;>
          <PartnerResources />
        </TabsContent>
      </Tabs>
    </div>
  );
}
