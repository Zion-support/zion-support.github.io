import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { TrustedBySection } from "@/components/TrustedBySection"
import { TestimonialCarousel } from "@/components/TestimonialCarousel"
import { FloatingCTA } from "@/components/FloatingCTA"
import { HeroSection } from "@/components/HeroSection"
import { CategoriesSection } from "@/components/CategoriesSection"
import { BenefitsSection } from "@/components/BenefitsSection"
import { HowItWorksSection } from "@/components/HowItWorksSection"
import { WaitlistSection } from "@/components/WaitlistSection"
import { BlogSection } from "@/components/BlogSection"
import SEO from "@/components/SEO"
import { Link } from "react-router-dom"
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection"
import { FeaturesGuideSection } from "@/components/FeaturesGuideSection"
import { SocialShareSection } from "@/components/SocialShareSection"
import { useTranslation } from "react-i18next"
import { useLanguage } from "@/context/LanguageContext"
import { ArrowRight, Users, Zap, Settings, Sparkles, BarChart3, Smartphone } from "lucide-react"
export default function Index() {
  const { t } = useTranslation()
    const { isRTL } = useLanguage()
    // Tools and features showcase
const toolsFeatures = [
  {
  tit,
  l: e: t("home.tool_ai_matcher"),descripti,
  o: n: t("home.tool_ai_matcher_desc"),ic,
  o: n: <Sparkles className="h-6 w-6 text-zion-cyan"/>,li,
  n: k: "/match"
},
  {
  tit,
  l: e: t("home.tool_talent"),descripti,
  o: n: t("home.tool_talent_desc"),ic,
  o: n: <Users className="h-6 w-6 text-zion-purple"/>,li,
  n: k: "/talent"
},
  {
  tit,
  l: e: t("home.tool_services"),descripti,
  o: n: t("home.tool_services_desc"),ic,
  o: n: <Zap className="h-6 w-6 text-zion-cyan"/>,li,
  n: k: "/services"
},
  {
  tit,
  l: e: t("home.tool_equipment"),descripti,
  o: n: t("home.tool_equipment_desc"),ic,
  o: n: <Settings className="h-6 w-6 text-zion-purple"/>,li,
  n: k: "/equipment"
},
  {
  tit,
  l: e: t("home.tool_analytics"),descripti,
  o: n: t("home.tool_analytics_desc"),ic,
  o: n: <BarChart3 className="h-6 w-6 text-zion-cyan"/>,li,
  n: k: "/analytics"
},
  {
  tit,
  l: e: "Mobile App",descripti,
  o: n: "Take Zion with you on the go with our mobile app for iOS and Android",ic,
  o: n: <Smartphone className="h-6 w-6 text-zion-purple"/>,li,
  n: k: "/mobile-launch"
},
  ]
    return (<div className="min-h-screen bg-zion-blue text-white">
      <SEO title={t("home.seo_title")} description={t("home.seo_description")} keywords={t("home.seo_keywords")} canonical="htt,
  p: s://ziontechgroup.com/"/>
      <Header />
      <HeroSection />
      {/* Quick Access Tools Section */},
  }
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">
              {t("home.explore_tools")},
  }
            </h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              {t("home.tools_description")},
  }
            </p>
          </div>
          <div className={`grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`}>
            {toolsFeatures.map((feature, index) => (<Link key={index} to={feature.link} className="bg-zion-blue border border-zion-blue-light,
  hove: r:border-zion-purple/50 rounded-lg p-6 transition-all duration-300">
                <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon},
  }
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{t("general.explore")}</span>
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`}/>
                </div>
              </Link>))}
          </div>
        </div>
      </section>
      <CategoriesSection />
      <BenefitsSection />
      {/* Add the comprehensive features guide section */},
  }
      <FeaturesGuideSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <TestimonialCarousel />
      <TrustedBySection />
      <BlogSection />
      {/* Add social share section to encourage users to spread the word */},
  }
      <SocialShareSection />
      <WaitlistSection />
      <FloatingCTA />
      <Footer />
    </div>)
}
