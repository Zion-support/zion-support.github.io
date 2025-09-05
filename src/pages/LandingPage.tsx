
<<<<<<< HEAD
import { Header } from "@/components/Header",;
import { TrustedBySection } from "@/components/TrustedBySection",;
import { TestimonialCarousel } from "@/components/TestimonialCarousel",;
import { FloatingCTA } from "@/components/FloatingCTA",;
import { HeroSection } from "@/components/HeroSection",;
import { CategoriesSection } from "@/components/CategoriesSection",;
import { BenefitsSection } from "@/components/BenefitsSection",;
import { HowItWorksSection } from "@/components/HowItWorksSection",;
import { WaitlistSection } from "@/components/WaitlistSection",;
import { BlogSection } from "@/components/BlogSection",;
import { SEO } from "@/components/SEO",;
import { Button } from "@/components/ui/button",;
import Link from "next/link",;
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection",;
import { FeaturesGuideSection } from "@/components/FeaturesGuideSection",;
import { SocialShareSection } from "@/components/SocialShareSection",;
import { useTranslation } from "react-i18next",;
import { useLanguage } from "@/context/LanguageContext",;
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Sparkles, BarChart3, Smartphone } from 'lucide-react';
;
export default function LandingPage() {;
  const { t } = useTranslation(),;
  const { isRTL } = useLanguage(),;
  ;
  // Tools and features showcase;
  const toolsFeatures = [;
    {;
      title:t("home.tool_ai_matcher"),;
      description:t("home.tool_ai_matcher_desc"),;
      icon:<Sparkles className="h-6 w-6 text-zion-cyan" />,;
      link:"/match";
    },;
    {;
      title:t("home.tool_talent"),;
      description:t("home.tool_talent_desc"),;
      icon:<Users className="h-6 w-6 text-zion-purple" />,;
      link:"/talent";
    },;
    {;
      title:t("home.tool_services"),;
      description:t("home.tool_services_desc"),;
      icon:<Zap className="h-6 w-6 text-zion-cyan" />,;
      link:"/services";
    },;
    {;
      title:t("home.tool_equipment"),;
      description:t("home.tool_equipment_desc"),;
      icon:<Settings className="h-6 w-6 text-zion-purple" />,;
      link:"/equipment";
    },;
    {;
      title:t("home.tool_analytics"),;
      description:t("home.tool_analytics_desc"),;
      icon:<BarChart3 className="h-6 w-6 text-zion-cyan" />,;
      link:"/analytics";
    },;
    {;
      title:"Mobile App",;
      description:"Take Zion with you on the go with our mobile app for iOS and Android",;
      icon:<Smartphone className="h-6 w-6 text-zion-purple" />,;
      link:"/mobile-launch";
    }
  ],;
;
  return (;
    <div className="min-h-screen bg-zion-blue text-white">;
      <SEO ;
        title={t("home.seo_title")} ;
        description={t("home.seo_description")} ;
        keywords={t("home.seo_keywords")}
        canonical="https://app.ziontechgroup.com/";
      />;
      <Header />;
      <HeroSection />;
      ;
      {/* Quick Access Tools Section */}
      <section className="py-16 bg-zion-blue-dark">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">;
              {t("home.explore_tools")}
            </h2>;
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">;
              {t("home.tools_description")}
            </p>;
          </div>;
          ;
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' :''}`}>;
            {toolsFeatures.map((feature, index) => (;
              <Link ;
                key={index} ;
                href={feature.link} ;
                className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300";
              >;
                <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4">;
                  {feature.icon}
                </div>;
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>;
                <p className="text-zion-slate-light mb-4">{feature.description}</p>;
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' :''}`}>;
                  <span>{t("general.explore")}</span>;
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' :'ml-2'} h-4 w-4`} />;
                </div>;
              </Link>;
            ))}
          </div>;
        </div>;
      </section>;
      ;
      <CategoriesSection />;
      <BenefitsSection />;
      ;
      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />;
      ;
      <HowItWorksSection />;
      <FeaturedListingsSection />;
      <TestimonialCarousel />;
      <TrustedBySection />;
      <BlogSection />;
      ;
      {/* Add social share section to encourage users to spread the word */}
      <SocialShareSection />;
      ;
      <WaitlistSection />;
      <FloatingCTA />;
    </div>;
  ),;
=======
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
import { useLanguage } from "@/context/LanguageContext",import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Sparkles, BarChart3, Smartphone } from 'lucide-react'

export default function LandingPage() {
  const { t } = useTranslation(),
  const { isRTL } = useLanguage(),
  
  // Tools and features showcase,
const toolsFeatures = [
    {
      title: t(&quot;home.toolai_matcher&quot;),
      description: t(&quot;home.toolai_matcher_desc&quot;),
      icon: <Sparkles className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      link: &quot;/match&quot
    },
    {
      title: t(&quot;home.tooltalent&quot;),
      description: t(&quot;home.tooltalent_desc&quot;),
      icon: <Users className=&quot;h-6 w-6 text-zion-purple&quot; />,
      link: &quot;/talent&quot
    },
    {
      title: t(&quot;home.toolservices&quot;),
      description: t(&quot;home.toolservices_desc&quot;),
      icon: <Zap className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      link: &quot;/services&quot
    },
    {
      title: t(&quot;home.toolequipment&quot;),
      description: t(&quot;home.toolequipment_desc&quot;),
      icon: <Settings className=&quot;h-6 w-6 text-zion-purple&quot; />,
      link: &quot;/equipment&quot
    },
    {
      title: t(&quot;home.toolanalytics&quot;),
      description: t(&quot;home.toolanalytics_desc&quot;),
      icon: <BarChart3 className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      link: &quot;/analytics&quot
    },
    {
      title: &quot;Mobile App&quot;,
      description: &quot;Take Zion with you on the go with our mobile app for iOS and Android&quot;,
      icon: <Smartphone className=&quot;h-6 w-6 text-zion-purple&quot; />,
      link: &quot;/mobile-launch&quot
    }
  ],
import Link from "next/link";

export default function LandingPage() {const { t} = useTranslation();
  const {isRTL} = useLanguage();
  
  // Tools and features showcase,
const toolsFeatures = [
    {title: t("home.toolai_matcher"), description: t("home.toolai_matcher_desc"), icon: <Sparkles className="h-6 w-6 text-zion-cyan" />, link: "/match"},
    {title: t("home.tooltalent"), description: t("home.tooltalent_desc"), icon: <Users className="h-6 w-6 text-zion-purple" />, link: "/talent"},
    {title: t("home.toolservices"), description: t("home.toolservices_desc"), icon: <Zap className="h-6 w-6 text-zion-cyan" />, link: "/services"},
    {title: t("home.toolequipment"), description: t("home.toolequipment_desc"), icon: <Settings className="h-6 w-6 text-zion-purple" />, link: "/equipment"},
    {title: t("home.toolanalytics"), description: t("home.toolanalytics_desc"), icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />, link: "/analytics"},
    {title: "Mobile App", description: "Take Zion with you on the go with our mobile app for iOS and Android", icon: <Smartphone className="h-6 w-6 text-zion-purple" />, link: "/mobile-launch"}
  ];

  return (
    <div className=&quot;min-h-screen bg-zion-blue text-white&quot;>
      <SEO,
title={t(&quot;home.seotitle&quot;)} 
        description={t(&quot;home.seodescription&quot;)} 
        keywords={t(&quot;home.seokeywords&quot;)}
        canonical=&quot;https://app.ziontechgroup.com/&quot;      />
      <Header />
      <HeroSection />
      
      {/* Quick Access Tools Section */}
      <section className=&quot;py-16 bg-zion-blue-dark&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-12&quot;>
            <h2 className=&quot;text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4&quot;>
              {t(&quot;home.exploretools&quot;)}
            </h2>
            <p className=&quot;text-zion-slate-light text-xl max-w-3xl mx-auto&quot;>
              {t(&quot;home.toolsdescription&quot;)}            </p>
          </div>
          
          <div className={_`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`}>
            {toolsFeatures.map(_(feature, index) => (
              <Link,
key={index} 
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
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />                </div>
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
