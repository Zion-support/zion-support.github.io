=======
BarChart3,;
  Smartphone,;
} from 'lucide-react';


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159


export default function LandingPage() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  // Tools and features showcase

  const toolsFeatures = [
    {

    <div className="min-h-screen bg-zion-blue text-white">
      <SEO
        title={t("home.seo_title")}
        description={t("home.seo_description")}
        keywords={t("home.seo_keywords")}
        canonical="https://app.ziontechgroup.com/"
      />
      <Header />
      <HeroSection />

      {/* Quick Access Tools Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">
              {t("home.explore_tools")}
            </h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              {t("home.tools_description")}
            </p>
          </div>

                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{t("general.explore")}</span>
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
<<<<<<< HEAD
