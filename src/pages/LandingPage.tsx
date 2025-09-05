
<<<<<<< HEAD
<<<<<<< HEAD
import { Header } from "@/components/Header",
import { TrustedBySection } from "@/components/TrustedBySection",
import { TestimonialCarousel } from "@/components/TestimonialCarousel",
import { FloatingCTA } from "@/components/FloatingCTA",
import { HeroSection } from "@/components/HeroSection",
import { CategoriesSection } from "@/components/CategoriesSection",
import { BenefitsSection } from "@/components/BenefitsSection",
import { HowItWorksSection } from "@/components/HowItWorksSection",
import { WaitlistSection } from "@/components/WaitlistSection",
import { BlogSection } from "@/components/BlogSection",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import Link from "next/link",
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection",
import { FeaturesGuideSection } from "@/components/FeaturesGuideSection",
import { SocialShareSection } from "@/components/SocialShareSection",
import { useTranslation } from "react-i18next",
import { useLanguage } from "@/context/LanguageContext",
=======
import { Header } from &quot;@/components/Header&quot;;
import { TrustedBySection } from &quot;@/components/TrustedBySection&quot;;
import { TestimonialCarousel } from &quot;@/components/TestimonialCarousel&quot;;
import { FloatingCTA } from &quot;@/components/FloatingCTA&quot;;
import { HeroSection } from &quot;@/components/HeroSection&quot;;
import { CategoriesSection } from &quot;@/components/CategoriesSection&quot;;
import { BenefitsSection } from &quot;@/components/BenefitsSection&quot;;
import { HowItWorksSection } from &quot;@/components/HowItWorksSection&quot;;
import { WaitlistSection } from &quot;@/components/WaitlistSection&quot;;
import { BlogSection } from &quot;@/components/BlogSection&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import Link from &quot;next/link&quot;;
import { FeaturedListingsSection } from &quot;@/components/FeaturedListingsSection&quot;;
import { FeaturesGuideSection } from &quot;@/components/FeaturesGuideSection&quot;;
import { SocialShareSection } from &quot;@/components/SocialShareSection&quot;;
import { useTranslation } from &quot;react-i18next&quot;;
import { useLanguage } from &quot;@/context/LanguageContext&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Sparkles, BarChart3, Smartphone } from 'lucide-react'

export default function LandingPage() {
  const { t } = useTranslation(),
  const { isRTL } = useLanguage(),
  
  // Tools and features showcase
  const toolsFeatures = [
    {
      title: t(&quot;home.tool_ai_matcher&quot;),
      description: t(&quot;home.tool_ai_matcher_desc&quot;),
      icon: <Sparkles className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      link: &quot;/match&quot;
    },
    {
      title: t(&quot;home.tool_talent&quot;),
      description: t(&quot;home.tool_talent_desc&quot;),
      icon: <Users className=&quot;h-6 w-6 text-zion-purple&quot; />,
      link: &quot;/talent&quot;
    },
    {
      title: t(&quot;home.tool_services&quot;),
      description: t(&quot;home.tool_services_desc&quot;),
      icon: <Zap className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      link: &quot;/services&quot;
    },
    {
      title: t(&quot;home.tool_equipment&quot;),
      description: t(&quot;home.tool_equipment_desc&quot;),
      icon: <Settings className=&quot;h-6 w-6 text-zion-purple&quot; />,
      link: &quot;/equipment&quot;
    },
    {
      title: t(&quot;home.tool_analytics&quot;),
      description: t(&quot;home.tool_analytics_desc&quot;),
      icon: <BarChart3 className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      link: &quot;/analytics&quot;
    },
    {
      title: &quot;Mobile App&quot;,
      description: &quot;Take Zion with you on the go with our mobile app for iOS and Android&quot;,
      icon: <Smartphone className=&quot;h-6 w-6 text-zion-purple&quot; />,
      link: &quot;/mobile-launch&quot;
    }
  ],
=======
import Link from "next/link";

export default function LandingPage() {_const { t} = useTranslation();
  const {_isRTL} = useLanguage();
  
  // Tools and features showcase
  const _toolsFeatures = [
    {_title: t("home.tool_ai_matcher"), _description: t("home.tool_ai_matcher_desc"), _icon: <Sparkles className="h-6 w-6 text-zion-cyan" />, _link: "/match"},
    {_title: t("home.tool_talent"), _description: t("home.tool_talent_desc"), _icon: <Users className="h-6 w-6 text-zion-purple" />, _link: "/talent"},
    {_title: t("home.tool_services"), _description: t("home.tool_services_desc"), _icon: <Zap className="h-6 w-6 text-zion-cyan" />, _link: "/services"},
    {_title: t("home.tool_equipment"), _description: t("home.tool_equipment_desc"), _icon: <Settings className="h-6 w-6 text-zion-purple" />, _link: "/equipment"},
    {_title: t("home.tool_analytics"), _description: t("home.tool_analytics_desc"), _icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />, _link: "/analytics"},
    {_title: "Mobile App", _description: "Take Zion with you on the go with our mobile app for iOS and Android", _icon: <Smartphone className="h-6 w-6 text-zion-purple" />, _link: "/mobile-launch"}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;min-h-screen bg-zion-blue text-white&quot;>
      <SEO 
<<<<<<< HEAD
        title={t(&quot;home.seo_title&quot;)} 
        description={t(&quot;home.seo_description&quot;)} 
        keywords={t(&quot;home.seo_keywords&quot;)}
        canonical=&quot;https://app.ziontechgroup.com/&quot;
=======
        title={_t("home.seo_title")} 
        description={_t("home.seo_description")} 
        keywords={_t("home.seo_keywords")}
        canonical="https://app.ziontechgroup.com/"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      />
      <Header />
      <HeroSection />
      
<<<<<<< HEAD
      {/* Quick Access Tools Section */}
      <section className=&quot;py-16 bg-zion-blue-dark&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-12&quot;>
            <h2 className=&quot;text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4&quot;>
              {t(&quot;home.explore_tools&quot;)}
            </h2>
            <p className=&quot;text-zion-slate-light text-xl max-w-3xl mx-auto&quot;>
              {t(&quot;home.tools_description&quot;)}
=======
      {_/* Quick Access Tools Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">
              {_t("home.explore_tools")}
            </h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              {_t("home.tools_description")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
          </div>
          
          <div className={_`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`}>
            {_toolsFeatures.map(_(feature, _index) => (
              <Link 
                key={index} 
<<<<<<< HEAD
                href={feature.link} 
                className=&quot;bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300&quot;
              >
                <div className=&quot;bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4&quot;>
                  {feature.icon}
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{feature.title}</h3>
                <p className=&quot;text-zion-slate-light mb-4&quot;>{feature.description}</p>
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{t(&quot;general.explore&quot;)}</span>
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
=======
                href={_feature.link} 
                className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300"
              >
                <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {_feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{_feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{_feature.description}</p>
                <div className={_`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{_t("general.explore")}</span>
                  <ArrowRight className={_`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <CategoriesSection />
      <BenefitsSection />
      
      {_/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />
      
      <HowItWorksSection />
      <FeaturedListingsSection />
      <TestimonialCarousel />
      <TrustedBySection />
      <BlogSection />
      
      {_/* Add social share section to encourage users to spread the word */}
      <SocialShareSection />
      
      <WaitlistSection />
      <FloatingCTA />
    </div>
  )
}
