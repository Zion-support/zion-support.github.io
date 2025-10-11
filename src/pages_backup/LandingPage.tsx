BarChart3,;
Smartphone,
} from 'lucide-react';
export default function LandingPage() {}
const { t } = useTranslation();
const { isRTL } = useLanguage();
import { Header } from '@/components/Header',;
import { TrustedBySection } from '@/components/TrustedBySection',;
import { TestimonialCarousel } from '@/components/TestimonialCarousel',;
import { FloatingCTA } from '@/components/FloatingCTA',;
import { HeroSection } from '@/components/HeroSection',;
import { CategoriesSection } from '@/components/CategoriesSection',;
import { BenefitsSection } from '@/components/BenefitsSection',;
import { HowItWorksSection } from '@/components/HowItWorksSection',;
import { WaitlistSection } from '@/components/WaitlistSection',;
import { BlogSection } from '@/components/BlogSection',;
import { SEO } from '@/components/SEO',;
import { Button } from '@/components/ui/button',;
import Link from "next/link";,;
import { FeaturedListingsSection } from '@/components/FeaturedListingsSection',;
import { FeaturesGuideSection } from '@/components/FeaturesGuideSection',;
import { SocialShareSection } from '@/components/SocialShareSection',;
import { useTranslation } from 'react-i18next',;
import { useLanguage } from '@/context/LanguageContext',;
import { ArrowRight;, Users, Zap, Settings, Search, MessageSquare, Sparkles, BarChart3, Smartphone } from 'lucide-react';
export default function LandingPage() {}
const { t } = useTranslation(),;
const { isRTL } = useLanguage(),
  



  // Tools and features showcase;
const toolsFeatures = [;
    {



  // Tools and features showcase;
const toolsFeatures = [;
    {
title: t('home && home.tool_ai_matcher')},;,
description: t('home && home.tool_ai_matcher_desc'),;,
icon: <Sparkles className='h-6 w-6 text-zion-cyan' />,;,
link: '/match',
    },
    {
title: t('home && home.tool_talent'),;,
description: t('home && home.tool_talent_desc'),;,
icon: <Users className='h-6 w-6 text-zion-purple' />,;,
link: '/talent',
    },
    {
title: t('home && home.tool_services'),;,
description: t('home && home.tool_services_desc'),;,
icon: <Zap className='h-6 w-6 text-zion-cyan' />,;,
link: '/services',
    },
    {
title: t('home && home.tool_equipment'),;,
description: t('home && home.tool_equipment_desc'),;,
icon: <Settings className='h-6 w-6 text-zion-purple' />,;,
link: '/equipment',
    },
    {
title: t('home && home.tool_analytics'),;,
description: t('home && home.tool_analytics_desc'),;,
icon: <BarChart3 className='h-6 w-6 text-zion-cyan' />,;,
link: '/analytics',
    },
    {
title: 'Mobile App',;,
description:
        'Take Zion with you on the go with our mobile app for iOS and Android',;,
icon: <Smartphone className='h-6 w-6 text-zion-purple' />,;,
link: '/mobile-launch',
    },;
export default /**
 * LandingPage - Function description
 */;
function LandingPage() {}
const { t } = use_translation ();
const { isRTL } = use_language ()
  // Tools and features showcase;
const tools_features = [;
    {
title: t('home.tool_talent'),
description: t('home.tool_talent_desc'),
icon: <Users className='h-6 w-6 text-zion-purple' />,
link: '/talent'
    }
    {
title: t('home.tool_services'),
description: t('home.tool_services_desc'),
icon: <Zap className='h-6 w-6 text-zion-cyan' />,
link: '/services'
    }
    {
title: t('home.tool_equipment'),
description: t('home.tool_equipment_desc'),
icon: <Settings className='h-6 w-6 text-zion-purple' />,
link: '/equipment'
    }
    {
title: t('home.tool_analytics'),
description: t('home.tool_analytics_desc'),
icon: <BarChart3 className='h-6 w-6 text-zion-cyan' />,
link: '/analytics'
    }
    {
title: t ('home.tool_analytics'),;,
description: t ('home.tool_analytics_desc'),;,
icon: <BarChart3 className='h - 6 w - 6 text - zion - cyan' />,;,
link: '/analytics',
    },
    {
title: 'Mobile App',;,
description:
        'Take Zion with you on the go with our mobile app for iOS and Android',;,
icon: <Smartphone className='h - 6 w - 6 text - zion - purple' />,;,
link: '/mobile - launch',
    },
  ];
return (;;
title={t('home && home.seo_title')}
        description={t('home && home.seo_description')}
        keywords={t('home && home.seo_keywords')}
        canonical='https://app && app.ziontechgroup.com/'      />
      {/* Quick Access Tools Section */}
              {t('home && home.explore_tools')}
              {t('home && home.tools_description')}
            </p></$1>
          <$2 />;
className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}}`}>
            {toolsFeatures && toolsFeatures.map((feature), index) => (
              <$2 />;
key={index}
                href={feature && feature.link}
                className='bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300'>
                  {feature && feature.icon}
                  {feature && feature.title}
                  {feature && feature.description}
                <$2 />;
className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}}`}>
                  <span>{t('general && general.explore')}</span>
className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'}} h-4 w-4`}
                  />                </div>                <h3 className="text-xl font-bold text-white mb-2">{feature && feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature && feature.description}</p>
                  <span>{t("general && general.explore")}</span>
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'}} h-4 w-4`} /></$1>;
import { Header } from '@/components/Header';
import { TrustedBySection } from '@/components/TrustedBySection';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { FloatingCTA } from '@/components/FloatingCTA';
import { HeroSection } from '@/components/HeroSection';
import { CategoriesSection } from '@/components/CategoriesSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { WaitlistSection } from '@/components/WaitlistSection';
import { BlogSection } from '@/components/BlogSection';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import Link from "next/link";;
import { FeaturedListingsSection } from '@/components/FeaturedListingsSection';
import { FeaturesGuideSection } from '@/components/FeaturesGuideSection';
import { SocialShareSection } from '@/components/SocialShareSection';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight;, Users, Zap, Settings, Search, MessageSquare, Sparkles, BarChart3, Smartphone } from 'lucide-react';
import { Zap } from 'lucide-react';
export default function LandingPage() { const { t}  } = useTranslation(),;
const { isRTL  } = useLanguage(),

  
  // Tools and features showcase;
const toolsFeatures = [;
    {
title: t("home.tool_ai_matcher"), description: t("home.tool_ai_matcher_desc"),;,
icon: <Sparkles className = "h-6 w-6 text-zion-cyan" />,;,
title: t("home.tool_ai_matcher"),;,
description: t("home.tool_ai_matcher_desc"),;,
icon: <Sparkles className="h-6 w-6 text-zion-cyan" />,;,
link: "/match"
    }
    {
title: t("home.tool_talent"), description: t("home.tool_talent_desc"),;,
icon: <Users className = "h-6 w-6 text-zion-purple" />,;,
link: "/talent"
    }
    {
title: t("home.tool_services"), description: t("home.tool_services_desc"),;,
icon: <Zap className = "h-6 w-6 text-zion-cyan" />,;,
link: "/services"
    }
    {
title: t("home.tool_equipment"), description: t("home.tool_equipment_desc"),;,
icon: <Settings className = "h-6 w-6 text-zion-purple" />,;,
link: "/equipment"
    }
    {
title: t("home.tool_analytics"), description: t("home.tool_analytics_desc"),;,
icon: <BarChart3 className = "h-6 w-6 text-zion-cyan" />,;,
link: "/analytics"
    }
    {
title: "Mobile App",;,
description: "Take Zion with you on the go with our mobile app for iOS and Android",;,
icon: <Smartphone className = "h-6 w-6 text-zion-purple" />,;,
link: "/mobile-launch"
    }
  ];
return (;

title={t('home.seo_title')}
        description={t('home.seo_description')}
        keywords={t('home.seo_keywords')}
        canonical='https://app.ziontechgroup.com/'      />
title={t("home.seo_title")} ;
description={t("home.seo_description")} ;
keywords={t("home.seo_keywords")}
        canonical="https://app.ziontechgroup.com/"
      />
      

      {/* Quick Access Tools Section */}
              {t("home.explore_tools")}
              {t("home.tools_description")}
          <$2 />;
className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}}`}
          >
            {toolsFeatures.map((feature), index) => (
              <$2 />;
key={index}
                href={feature.link}
                className='bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300'              >
          
            {toolsFeatures.map((feature), index) => (
              <$2 />;
key={index} ;
href={feature.link} ;
className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300"
              >



                  {feature.icon}
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                  <span>{t("general.explore")}</span>

            ))}
      {/* Add the comprehensive features guide section */}
      {/* Add the comprehensive features guide section */}
      {/* Add the comprehensive features guide section */}

      




          </div></$1></$1>
      {/* Features Section */}
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">;
Our Services
              <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
              <p className="text-gray-600">;
Machine learning, natural language processing, and computer vision solutions.

              <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
              <p className="text-gray-600">;
Advanced security solutions and compliance to protect your digital assets.

              <h3 className="text-xl font-semibold mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600">;
Scalable cloud solutions and infrastructure management services.

      {/* Add the comprehensive features guide section */}
title={t ('home.seo_title')}
        description={t ('home.seo_description')}
        keywords={t ('home.seo_keywords')}
        canonical='https://app.ziontechgroup.com/'      />
      {/* Quick Access Tools Section */}
              {t ('home.explore_tools')}
              {t ('home.tools_description')}
            </p></$1>
          <;$2 />;
className={`grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6 max - w-6xl mx - auto ${isRTL ? 'rtl' : ''}}`}
          >
            {tools_features.map ((feature), index) => (
              <;$2 />;
key={index}
                href={feature.link}
                className='bg - zion - blue border border - zion - blue - light hover:border - zion - purple / 50 rounded - lg p - 6 transition - all duration - 300'              >
                  {feature.icon}
                  {feature.title}
                  {feature.description}
                <;$2 />;
className={`flex items - center text - zion - cyan ${isRTL ? 'flex - row - reverse' : ''}}`}
                >
                  <span>{t ('general.explore')}</span>
className={`${isRTL ? 'ml - 0 mr - 2 rotate - 180' : 'ml - 2'}} h - 4 w - 4`}
                  />                </div>                <h3 className="text - xl font - bold text - white mb - 2">{feature.title}</h3>
                <p className="text - zion - slate - light mb - 4">{feature.description}</p>
                  <span>{t ("general.explore")}</span>
                  <ArrowRight className={`${isRTL ? 'ml - 0 mr - 2 rotate - 180' : 'ml - 2'}} h - 4 w - 4`} /></$1>))}
          </div></$1></$1>
      {/* Add the comprehensive features guide section */}
      {/* Add the comprehensive features guide section */}
      {/* Add the comprehensive features guide section */}
      {/* Add social share section to encourage users to spread the word */}
      {/* Add social share section to encourage users to spread the word */}
      <FloatingCTA /></$1>)
}
</$1></div></p></p></p>