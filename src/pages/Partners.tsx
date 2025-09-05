
import Link from 'next/link';

export default function Partners() {_logInfo('PartnersPage rendering');
  const [activeTab, _setActiveTab] = useState("overview");
  const { t} = useTranslation();
  const {_user, _isAuthenticated} = useAuth();
  const _router = useRouter();
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true);

  useEffect__(() => {_async function checkHealth() {
      try {
        const _res = await fetch('/api/auth/health');
        setAuthServiceAvailable(res.ok);} catch (err) {_logErrorToProduction('Partner login auth health check failed', _{ data: err});
        setAuthServiceAvailable(false);
      }
    }
    checkHealth();
  }, []);

  // If not authenticated, display partner program info and signup CTA
  if (!isAuthenticated) {_logInfo('PartnersPage rendering Unauthenticated View');
    return (
      <div className="container max-w-6xl py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">{t('partner.title')}</h1>
          <p className="text-xl text-zion-slate-light">{_t('partner.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-zion-blue-dark border-zion-blue-light">
            <CardHeader>
              <CardTitle className="text-white">{_t('partner.influencers.title')}</CardTitle>
              <CardDescription>{_t('partner.influencers.desc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />
                <div>
                  <p className="font-medium text-white">{_t('partner.influencers.points.audience')}</p>
                  <p className="text-sm text-zion-slate-light">{_t('partner.influencers.points.audience_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />
                <div>
                  <p className="font-medium text-white">{_t('partner.influencers.points.insights')}</p>
                  <p className="text-sm text-zion-slate-light">{_t('partner.influencers.points.insights_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />
                <div>
                  <p className="font-medium text-white">{_t('partner.influencers.points.resources')}</p>
                  <p className="text-sm text-zion-slate-light">{_t('partner.influencers.points.resources_desc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zion-blue-dark border-zion-blue-light">
            <CardHeader>
              <CardTitle className="text-white">{_t('partner.organizations.title')}</CardTitle>
              <CardDescription>{_t('partner.organizations.desc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />
                <div>
                  <p className="font-medium text-white">{_t('partner.organizations.points.ecosystem')}</p>
                  <p className="text-sm text-zion-slate-light">{_t('partner.organizations.points.ecosystem_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />
                <div>
                  <p className="font-medium text-white">{_t('partner.organizations.points.co_brand')}</p>
                  <p className="text-sm text-zion-slate-light">{_t('partner.organizations.points.co_brand_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />
                <div>
                  <p className="font-medium text-white">{_t('partner.organizations.points.tracking')}</p>
                  <p className="text-sm text-zion-slate-light">{_t('partner.organizations.points.tracking_desc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">{_t('partner.how_it_works')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-zion-cyan" />
                </div>
                <CardTitle className="text-lg text-white">{_t('partner.steps.join_title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-zion-slate-light">
                <p>{_t('partner.steps.join_desc')}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-zion-cyan" />
                </div>
                <CardTitle className="text-lg text-white">{_t('partner.steps.share_title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-zion-slate-light">
                <p>{_t('partner.steps.share_desc')}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <PieChart className="h-6 w-6 text-zion-cyan" />
                </div>
                <CardTitle className="text-lg text-white">{_t('partner.steps.earn_title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-zion-slate-light">
                <p>{_t('partner.steps.earn_desc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            asChild
          >
            <Link href="/signup?type=partner&source=partner-program">{_t('partner.apply')}</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-zion-cyan border-zion-cyan"
            disabled={_!authServiceAvailable}
            onClick={_() => router.push('/login')}
          >
            {_t('partner.login')}
          </Button>
          {_!authServiceAvailable && (
            <p className="text-red-500 text-sm mt-2">{t('partner.login_unavailable')}</p>
          )}
        </div>
      </div>
    );
  }

  // Authenticated user view - Partner Dashboard
  logInfo('PartnersPage rendering Authenticated View. User:', {_data: user});
  return (
    <div className="container max-w-7xl py-10">
      <h1>DEBUG: Partners Page - Authenticated View</h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">{_t('partner.dashboard_title')}</h1>
          <p className="text-zion-slate-light">{_t('partner.dashboard_desc')}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2" onClick={_() => window.print()}>
            <FileDown className="h-4 w-4" />
            {_t('partner.export_csv')}
          </Button>
        </div>
      </div>

      <Tabs value={_activeTab} onValueChange={_setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">
          <TabsTrigger value="overview">{_t('partner.tabs.overview')}</TabsTrigger>
          <TabsTrigger value="referrals">{_t('partner.tabs.referrals')}</TabsTrigger>
          <TabsTrigger value="earnings">{_t('partner.tabs.earnings')}</TabsTrigger>
          <TabsTrigger value="leaderboard">{_t('partner.tabs.leaderboard')}</TabsTrigger>
          <TabsTrigger value="resources">{_t('partner.tabs.resources')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <PartnerDashboard />
        </TabsContent>
        
        <TabsContent value="referrals" className="space-y-4">
          <PartnerReferralLinks />
        </TabsContent>
        
        <TabsContent value="earnings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{_t('partner.earnings_title')}</CardTitle>
              <CardDescription>{_t('partner.earnings_desc')}</CardDescription>
            </CardHeader>
            <CardContent>
              {_/* This will be implemented later */}
              <p className="text-zion-slate-light">{_t('partner.earnings_placeholder')}</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="leaderboard" className="space-y-4">
          <PartnerLeaderboard />
        </TabsContent>
        
        <TabsContent value="resources" className="space-y-4">
          <PartnerResources />
        </TabsContent>
      </Tabs>
    </div>
  );
}
