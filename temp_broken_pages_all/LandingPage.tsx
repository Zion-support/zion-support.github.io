import React from 'react';

export default function LandingPage() {
  return (
<<<<<<< HEAD:temp_broken_pages_all/LandingPage.tsx
  return (
  return (
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  // Tools and features showcase,
return (
    <div className='min-h-screen bg-zion-blue text-white'>
      <SEO
title={t('home.seo_title')}
        description={t('home.seo_description')}
        keywords={t('home.seo_keywords')}
        canonical='https://app.ziontechgroup.com/'      />
      <Header />
      <HeroSection />
      {/* Quick Access Tools Section */}
      <section className='py-16 bg-zion-blue-dark'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4'>
              {t('home.explore_tools')}
            </h2>
            <p className='text-zion-slate-light text-xl max-w-3xl mx-auto'>
              {t('home.tools_description')}
            </p>
          </div>
          <div
className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`}
          >
            {toolsFeatures.map((feature index) => (
              <Link
key={index}
                href={feature.link}
                className='bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300'              >
                <div className='bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                  {feature.icon}
                </div>
                <h3 className='text-xl font-bold text-white mb-2'>
                  {feature.title}
                </h3>
                <p className='text-zion-slate-light mb-4'>
                  {feature.description}
                </p>
                <div
className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span>{t('general.explore')}</span>
                  <ArrowRight
className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`}
                  />                </div>                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{t("general.explore")}</span>
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CategoriesSection />
      <BenefitsSection />
      <CategoriesSection />
      <BenefitsSection />
      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />
      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />
      <CategoriesSection />
      <BenefitsSection />
      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <TestimonialCarousel />
      <TrustedBySection />
      <BlogSection />
      {/* Add social share section to encourage users to spread the word */}
      <SocialShareSection />
      {/* Add social share section to encourage users to spread the word */}
      <SocialShareSection />
      <FloatingCTA />
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Zion Tech</h1>
        <p className="text-lg text-gray-600">Your technology partner...</p>
      </div>
>>>>>>> 1836dcad4eb858f12251bf809dd3ca83faa1433b:src/pages/LandingPage.tsx
    </div>
  );
}