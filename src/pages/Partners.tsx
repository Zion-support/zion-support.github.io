import React from 'react';
import { motion   } from 'framer-motion';
import { SEO   } from '@/components/SEO';
import { Handshake, 
  Users, 
  Globe, 
  Award, 
  Star, 
  TrendingUp, 
  Lightbulb, 
  Shield, 
  Cloud, 
  Brain, 
  Rocket, 
  Zap,
  ArrowRight,
  CheckCircle,
  Building,
  Briefcase
  } from 'lucide-react';

export default function Partners(...args: any[]): any {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies that enhance our solutions',
      icon: Brain,
      partners: [
        { name: 'Microsoft', logo: 'M', tier: 'Platinum', category: 'Cloud & AI' },
        { name: 'AWS', logo: 'AWS', tier: 'Platinum', category: 'Cloud Infrastructure' },
        { name: 'Google Cloud', logo: 'GC', tier: 'Gold', category: 'AI & ML' },
        { name: 'IBM', logo: 'IBM', tier: 'Gold', category: 'Enterprise Solutions' }
      ]
    },
    {
      title: 'System Integrators',
      description: 'Partners who help implement our solutions worldwide',
      icon: Building,
      partners: [
        { name: 'Accenture', logo: 'A', tier: 'Platinum', category: 'Global SI' },
        { name: 'Deloitte', logo: 'D', tier: 'Platinum', category: 'Consulting' },
        { name: 'PwC', logo: 'P', tier: 'Gold', category: 'Advisory' }
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Resellers and distributors expanding our reach',
      icon: Globe,
      partners: [
        { name: 'TechCorp', logo: 'TC', tier: 'Silver', category: 'Reseller' },
        { name: 'InnovateTech', logo: 'IT', tier: 'Silver', category: 'Distributor' }
      ]
    }
  ];

  const benefits = [
    { icon: Star, title: 'Exclusive Access', description: 'Early access to new features and beta programs' },
    { icon: Shield, title: 'Technical Support', description: 'Dedicated technical support and training' },
    { icon: TrendingUp, title: 'Revenue Growth', description: 'Competitive margins and growth opportunities' },
    { icon: Award, title: 'Recognition', description: 'Partner awards and marketing support' }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Partnerships - Zion Tech Group"
        description="Join Zion Tech Group's partner ecosystem. Explore partnership opportunities in AI, cloud, and technology solutions."
        keywords="partnerships, technology partners, channel partners, strategic alliances, Zion Tech Group"
        canonical="https://ziontechgroup.com/partners"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div 
            className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Handshake className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Partner With Us
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our ecosystem of technology innovators and business leaders
          </motion.p>
          <motion.div 
            className="text-slate-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Together, we're transforming industries through AI and technology
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Partnership Types
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals
            </p>
          </motion.div>
          
          <div className="grid md: anygrid-cols-2 gap-8">
            {partnershipTypes.map((type, index)   => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{type.name}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{type.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-slate-300 text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-slate-700 text-white py-3 px-6 rounded-xl font-semibold hover:bg-slate-600 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href='/signup?type=partner&source=partner-program'>
              {t('partner.apply')}
            </Link>
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='text-zion-cyan border-zion-cyan'            disabled={!authServiceAvailable}          <Button
            size="lg"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            asChild><Link href="/signup?type=partner&source=partner-program">{t('partner.apply')}</Link>
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <div className='container max-w-7xl py-10'>
      <h1>DEBUG: Partners Page - Authenticated View</h1>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight text-white'>
            {t('partner.dashboard_title')}
          </h1>
          <p className='text-zion-slate-light'>{t('partner.dashboard_desc')}</p>
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
          <Button variant="outline" className="flex items-center gap-2" onClick={() => window.print()}>
            <FileDown className="h-4 w-4" />
            {t('partner.export_csv')}
          </Button>
        </div>
      </div>
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className='space-y-4'><TabsList className='grid grid-cols-2 md:grid-cols-5 mb-4'>
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
        <TabsContent value="earnings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('partner.earnings_title')}</CardTitle>
              <CardDescription>{t('partner.earnings_desc')}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* This will be implemented later */}
              <p className='text-zion-slate-light'>
                {t('partner.earnings_placeholder')}
              </p>
            </CardContent>
          </Card>
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
          <PartnerResources />
        </TabsContent>
      </Tabs>
    </div>
  );
  async function checkHealth () {try {}checkHealth () ;
}, []);
//If not authenticated, display partner program info and signup CTA </div> <div className="grid md:grid-cols-2 gap-8 mb-12" > <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> </CardHeader> <CardContent className="space-y-4" > <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" /> <div> </div> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> </CardHeader> <CardContent className="space-y-4" > <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" /> <div> </div> </div> </CardContent> </Card> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader className="text-center pb-2" > <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4" > <FileText className="h-6 w-6 text-zion-cyan" /> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader className="text-center pb-2" > <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4" > <PieChart className="h-6 w-6 text-zion-cyan" /> </div> </CardContent> </Card> </div> </div> <div className="flex justify-center gap-4" > <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white" asChild > > {t ('partner.login') ;
}</Button>) ;
}</div> </div>) ";
}//Authenticated user view - Partner Dashboard return (<div className="container max-w-7xl py-10"><h1>DEBUG: Partners Page - Authenticated View</h1> <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"><div> </Button> </div> </div> </TabsList> <TabsContent value="overview" className="space-y-4"><PartnerDashboard /> </TabsContent> <TabsContent value="referrals" className="space-y-4"><PartnerReferralLinks /> </TabsContent> <TabsContent value="earnings" className="space-y-4"><Card> <CardHeader> <CardTitle> {';
  t ('partner.earnings title') ;
}</CardTitle> <CardDescription> {';
  t ('partner.earnings desc') ";
}</CardDescription> </CardHeader> <CardContent> </CardContent> </Card> </TabsContent> <TabsContent value="leaderboard" className="space-y-4" > <PartnerLeaderboard /> </TabsContent> <TabsContent value="resources" className="space-y-4" > <PartnerResources /> </TabsContent> </Tabs> </div>) ;
}'"}
}