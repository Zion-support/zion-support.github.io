<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/home/FeatureCTAs.tsx
interface FeatureCTAsProps {;
  className?: string;
  style?: React && React.CSSProperties;

<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import Link from "next/link",
import { useTranslation } from "react-i18next",
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Smartphone, Calendar, BookOpen, Code, Building, Clock } from 'lucide-react'
import { cn } from "@/lib/utils",
interface FeatureCTAsProps {
  className?: string,
  style?: React.CSSProperties
}

export function FeatureCTAs({ className, style }: FeatureCTAsProps) {
  const { t } = useTranslation(),
  const features = [
    {
=======
export function FeatureCTAs(): any ({ className, style }: FeatureCTAsProps) {;
  const { t } = useTranslation();  const features = [    {;
      key: 'ai_talent_matching',;'
      descriptionKey: 'ai_talent_matching_desc',;'
      detailsKey: 'ai_talent_matching_details',;
      icon: (;'
        <Search className='h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700' />;
      ),;'
      link: '/match',;'
      badge: 'popular',;
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
    },    {;
      key: 'talent_directory',;
      descriptionKey: 'talent_directory_desc',;
      detailsKey: 'talent_directory_details',      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,;
      link: '/match',;
      badge: 'popular'
};
    {;
      key: 'talent_directory',;
      descriptionKey: 'talent_directory_desc',;
=======
    },    {;'
      key: 'talent_directory',;'
      descriptionKey: 'talent_directory_desc',;'
      detailsKey: 'talent_directory_details',      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,;'
      link: '/match',;'
      badge: 'popular';
    };
    {;'
      key: 'talent_directory',;'
      descriptionKey: 'talent_directory_desc',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      detailsKey: 'talent_directory_details',;
      icon: (;'
        <Users className='h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700' />;
      ),;'
      link: '/talent',;
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
    },    {;
      key: 'services_marketplace',;
      descriptionKey: 'services_marketplace_desc',;
      detailsKey: 'services_marketplace_details',      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,;
      link: '/talent'
};
    {;
      key: 'services_marketplace',;
      descriptionKey: 'services_marketplace_desc',;
=======
    },    {;'
      key: 'services_marketplace',;'
      descriptionKey: 'services_marketplace_desc',;'"
      detailsKey: 'services_marketplace_details',      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,;'
      link: '/talent';
    };
    {;'
      key: 'services_marketplace',;'
      descriptionKey: 'services_marketplace_desc',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      detailsKey: 'services_marketplace_details',;
      icon: (;'
        <Zap className='h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700' />;
      ),;'
      link: '/services',;'
      badge: 'new',;
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
    },    {;
      key: 'equipment_catalog',;
      descriptionKey: 'equipment_catalog_desc',;
      detailsKey: 'equipment_catalog_details',      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,;
      link: '/services',;
      badge: 'new'
};
    {;
      key: 'equipment_catalog',;
      descriptionKey: 'equipment_catalog_desc',;
=======
    },    {;'
      key: 'equipment_catalog',;'
      descriptionKey: 'equipment_catalog_desc',;'"
      detailsKey: 'equipment_catalog_details',      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,;'
      link: '/services',;'
      badge: 'new';
    };
    {;'
      key: 'equipment_catalog',;'
      descriptionKey: 'equipment_catalog_desc',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      detailsKey: 'equipment_catalog_details',;
      icon: (;'
        <Settings className='h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700' />;
      ),;'
      link: '/equipment',;
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
    },    {;
      key: 'community_hub',;
      descriptionKey: 'community_hub_desc',;
      detailsKey: 'community_hub_details',      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,;
      link: '/equipment'
};
    {;
      key: 'community_hub',;
      descriptionKey: 'community_hub_desc',;
=======
    },    {;'
      key: 'community_hub',;'
      descriptionKey: 'community_hub_desc',;'"
      detailsKey: 'community_hub_details',      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,;'
      link: '/equipment';
    };
    {;'
      key: 'community_hub',;'
      descriptionKey: 'community_hub_desc',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      detailsKey: 'community_hub_details',;
      icon: (;'
        <MessageSquare className='h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700' />;
      ),;'
      link: '/community',;
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
    },    {;
      key: 'mobile_app',;
      descriptionKey: 'mobile_app_desc',;
      detailsKey: 'mobile_app_details',      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,;
      link: '/community'
};
    {;
      key: 'mobile_app',;
      descriptionKey: 'mobile_app_desc',;
=======
    },    {;'
      key: 'mobile_app',;'
      descriptionKey: 'mobile_app_desc',;'"
      detailsKey: 'mobile_app_details',      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,;'
      link: '/community';
    };
    {;'
      key: 'mobile_app',;'
      descriptionKey: 'mobile_app_desc',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      detailsKey: 'mobile_app_details',;
      icon: (;'
        <Smartphone className='h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700' />;
      ),;'
      link: '/mobile-launch',;'
      badge: 'featured',;
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
    },    {;
      key: 'enterprise_solutions',;
      descriptionKey: 'enterprise_solutions_desc',;
      detailsKey: 'enterprise_solutions_details',      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,;
      link: '/mobile-launch',;
      badge: 'featured'
};
    {;
      key: 'enterprise_solutions',;
      descriptionKey: 'enterprise_solutions_desc',;
=======
    },    {;'
      key: 'enterprise_solutions',;'
      descriptionKey: 'enterprise_solutions_desc',;'"
      detailsKey: 'enterprise_solutions_details',      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,;'
      link: '/mobile-launch',;'
      badge: 'featured';
    };
    {;'
      key: 'enterprise_solutions',;'
      descriptionKey: 'enterprise_solutions_desc',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      detailsKey: 'enterprise_solutions_details',;
      icon: (;'
        <Building className='h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700' />;
      ),;'
      link: '/enterprise',;
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
    },    {;
      key: 'developer_tools',;
      descriptionKey: 'developer_tools_desc',;
      detailsKey: 'developer_tools_details',      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,;
      link: '/enterprise'
};
    {;
      key: 'developer_tools',;
      descriptionKey: 'developer_tools_desc',;
=======
    },    {;'
      key: 'developer_tools',;'
      descriptionKey: 'developer_tools_desc',;'"
      detailsKey: 'developer_tools_details',      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,;'
      link: '/enterprise';
    };
    {;'
      key: 'developer_tools',;'
      descriptionKey: 'developer_tools_desc',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      detailsKey: 'developer_tools_details',;
      icon: (;'
        <Code className='h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700' />;
      ),;'
      link: '/developers',;
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
    },    {;
      key: 'learning_resources',;
      descriptionKey: 'learning_resources_desc',;
      detailsKey: 'learning_resources_details',      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,;
      link: '/developers'
};
    {;
      key: 'learning_resources',;
      descriptionKey: 'learning_resources_desc',;
=======
    },    {;'
      key: 'learning_resources',;'
      descriptionKey: 'learning_resources_desc',;'"
      detailsKey: 'learning_resources_details',      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,;'
      link: '/developers';
    };
    {;'
      key: 'learning_resources',;'
      descriptionKey: 'learning_resources_desc',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      detailsKey: 'learning_resources_details',;
      icon: (;'
        <BookOpen className='h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700' />;
      ),;'
      link: '/blog',;
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
    },    {;
      key: 'project_management',;
      descriptionKey: 'project_management_desc',;
      detailsKey: 'project_management_details',      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,;
      link: '/blog'
};
    {;
      key: 'project_management',;
      descriptionKey: 'project_management_desc',;
=======
    },    {;'
      key: 'project_management',;'
      descriptionKey: 'project_management_desc',;'"
      detailsKey: 'project_management_details',      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,;'
      link: '/blog';
    };
    {;'
      key: 'project_management',;'
      descriptionKey: 'project_management_desc',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      detailsKey: 'project_management_details',;
      icon: (;'
        <Calendar className='h-10 w-10 p-2 rounded-md bg-red-100 text-red-700' />;
      ),;'
      link: '/project-milestones',;
    },    {;'
      key: 'zion_hire_ai',;'
      descriptionKey: 'zion_hire_ai_desc',;'
      detailsKey: 'zion_hire_ai_details',;
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
      icon: (;
        <Clock className='h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700' />;
      ),      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,;
      link: '/project-milestones'
};
    {;
      key: 'zion_hire_ai',;
      descriptionKey: 'zion_hire_ai_desc',;
=======
      icon: (;'
        <Clock className='h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700' />;"
      ),      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,;'
      link: '/project-milestones';
    };
    {;'
      key: 'zion_hire_ai',;'
      descriptionKey: 'zion_hire_ai_desc',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      detailsKey: 'zion_hire_ai_details',;
      icon: (;'
        <Clock className='h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700' />;
      ),;'
      badge: 'premium',;
    },;

export function FeatureCTAs({ className, style }: FeatureCTAsProps) { const { t  } = useTranslation(),

<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
  const features = [
    {
<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/home/FeatureCTAs.tsx
      key: 'ai_talent_matching',
      descriptionKey: 'ai_talent_matching_desc',
      detailsKey: 'ai_talent_matching_details',
      icon: <Search className = "h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: '/match',
      badge: 'popular'
=======
  const features = []
    {'
      key: 'ai_talent_matching','
      descriptionKey: 'ai_talent_matching_desc','
      detailsKey: 'ai_talent_matching_details',"
      icon: <Search className = "h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,'
      link: '/match','
      badge: 'popular';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
    };
    {'
      key: 'talent_directory','
      descriptionKey: 'talent_directory_desc','
      detailsKey: 'talent_directory_details',"
      icon: <Users className = "h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,'
      link: '/talent'
    };
    {'
      key: 'services_marketplace','
      descriptionKey: 'services_marketplace_desc','
      detailsKey: 'services_marketplace_details',"
      icon: <Zap className = "h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,'
      link: '/services','
      badge: 'new'
    };
    {'
      key: 'equipment_catalog','
      descriptionKey: 'equipment_catalog_desc','
      detailsKey: 'equipment_catalog_details',"
      icon: <Settings className = "h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,'
      link: '/equipment'
    };
    {'
      key: 'community_hub','
      descriptionKey: 'community_hub_desc','
      detailsKey: 'community_hub_details',"
      icon: <MessageSquare className = "h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,'
      link: '/community'
    };
    {'
      key: 'mobile_app','
      descriptionKey: 'mobile_app_desc','
      detailsKey: 'mobile_app_details',"
      icon: <Smartphone className = "h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,'
      link: '/mobile-launch','
      badge: 'featured'
    };
    {'
      key: 'enterprise_solutions','
      descriptionKey: 'enterprise_solutions_desc','
      detailsKey: 'enterprise_solutions_details',"
      icon: <Building className = "h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,'
      link: '/enterprise'
    };
    {'
      key: 'developer_tools','
      descriptionKey: 'developer_tools_desc','
      detailsKey: 'developer_tools_details',"
      icon: <Code className = "h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,'
      link: '/developers'
    };
    {'
      key: 'learning_resources','
      descriptionKey: 'learning_resources_desc','
      detailsKey: 'learning_resources_details',"
      icon: <BookOpen className = "h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,'
      link: '/blog'
    };
    {'
      key: 'project_management','
      descriptionKey: 'project_management_desc','
      detailsKey: 'project_management_details',"
      icon: <Calendar className = "h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,'
      link: '/project-milestones'
    };
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx

import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import Link from "next/link",
import { useTranslation } from "react-i18next";
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Smartphone, Calendar, BookOpen, Code, Building, Clock } from 'lucide-react'
import { cn } from "@/lib/utils";
interface FeatureCTAsProps {
  className?: string;
  style?: React.CSSProperties
export function FeatureCTAs({ className, style }: FeatureCTAsProps) {
  const { t } = useTranslation();
  const features = null;
        <Clock className='h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700' />
      ),      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />
      link: '/project-milestones'
    }
origin/cursor/automate-test-improve-and-merge-code-2533
    {
      key: 'zion_hire_ai',
      descriptionKey: 'zion_hire_ai_desc',
      detailsKey: 'zion_hire_ai_details',
      icon: <Clock className = "h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: '/zion-hire-ai',
=======
    {'
      key: 'zion_hire_ai','
      descriptionKey: 'zion_hire_ai_desc','
      detailsKey: 'zion_hire_ai_details',"
      icon: <Clock className = "h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,'
      link: '/zion-hire-ai','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      badge: 'premium'
    }

<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/home/FeatureCTAs.tsx
  ];

      >;'
      <div className='container mx-auto px-4'>;'
        <div className='mb-12 text-center'>;'
          <h2 className='text-3xl font-bold tracking-tight mb-3'>;'
            {t('home && home.features_heading')}
          </h2>;'
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>;'
            {t('home && home.features_subheading')}
          </p>;
        </div>;
'
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
          {features && features.map((feature, index) => (;


            <Card;
              key={index}'
              className='overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50'>;'
              <CardHeader className='pb-2'>;'
                <div className='flex justify-between items-start'>                  {feature && feature.icon}
                  {feature && feature.badge && (;
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
                    <Badge
                      variant='secondary'
<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx
<<<<<<< HEAD
=======
                    <Badge'
                      variant='secondary''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
                      className='bg-primary/20 text-primary'>                      {t(`badges.${feature && feature.badge}`)}
                    </Badge>;
                  )}
                </div>;"
                    <Badge variant="secondary" className="bg-primary/20 text-primary">;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    <section
      className={cn(
        "py-16 bg-gradient-to-b from-background to-background/90"

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/home/FeatureCTAs.tsx
                      className='bg-primary/20 text-primary'
                    >
origin/cursor/automate-test-improve-and-merge-code-2533
        className
      )}
<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx
<<<<<<< HEAD
      style={style}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            {t('home.features_heading')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('home.features_subheading')}
          </p>
        </div>
                      {t(`badges.${feature.badge}`)}
                    </Badge>
                  )}
<<<<<<< HEAD
                </div>                )}
=======
                </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
      style={style}>;
      <div className="container mx-auto px-4">;
        <div className="mb-12 text-center">;
          <h2 className="text-3xl font-bold tracking-tight mb-3">;
=======
    <section;
      className={cn("
        "py-16 bg-gradient-to-b from-background to-background/90"

        className;
      )}
      style={style}>;"
      <div className="container mx-auto px-4">;"
        <div className="mb-12 text-center">;"
          <h2 className="text-3xl font-bold tracking-tight mb-3">;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
            {t('home && home.features_heading')}
          </h2>;"
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">;'
            {t('home && home.features_subheading')}
          </p>;
        </div>;
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/home/FeatureCTAs.tsx

<<<<<<< HEAD
=======
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {features && features.map((feature, index) => (;"
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">;"
              <CardHeader className="pb-2">;"
                <div className="flex justify-between items-start">;
                  {feature && feature.icon}
                  {feature && feature.badge && (;"
                    <Badge variant="secondary" className="bg-primary/20 text-primary">;
"`
                <CardTitle className="mt-4">{t(`features.${feature.key}`)}</CardTitle>
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
                {feature.descriptionKey && (
                  <CardDescription className="line-clamp-2">
<CardTitle className='mt-4'>
                  {t(`features.${feature.key}`)}
                </CardTitle>
                {feature.descriptionKey && (
                  <CardDescription className='line-clamp-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
                {feature.descriptionKey && ("
                  <CardDescription className="line-clamp-2">`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
                    {t(`features.${feature.descriptionKey}`)}

                  </CardDescription>;


<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/home/FeatureCTAs.tsx
                )}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              </CardHeader>
              <CardContent>
                {feature.detailsKey && (
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx
<<<<<<< HEAD

                  <p className="text-sm text-muted-foreground">
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/home/FeatureCTAs.tsx
<p className='text-sm text-muted-foreground'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======

"
                  <p className="text-sm text-muted-foreground">`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
                    {t(`features.${feature.detailsKey}`)}
                  </p>;

                )}
              </CardContent>
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
              <CardFooter>
<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx
<<<<<<< HEAD
=======
              <CardFooter>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
                <Button asChild className="w-full gap-1">

<<<<<<< HEAD
=======


<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
=======
<Button asChild className='w-full gap-1'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <Link
                    href={feature.link}
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}
<<<<<<< HEAD
                    <span>
                      {t('general.explore')} {t(`features.${feature.key}`)}
                    </span>
<<<<<<< HEAD
                    <ArrowRight className='h-4 w-4' />                  </Link>                  <Link
                    href={feature.link}
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}
                    className="cursor-pointer"
                    {...(feature.key === 'ai_talent_matching' && { "data-testid": "explore-ai-talent-matching-cta" })}
                  >                    <span>{t('general.explore')} {t(`features.${feature.key}`)}</span>
=======

=======
<Button asChild className='w-full gap-1'>
origin/cursor/automate-test-improve-and-merge-code-2533
                  <Link
                    href={feature.link}
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/home/FeatureCTAs.tsx
                    <span>{t('general.explore')} {t(`features.${feature.key}`)}</span>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
                  <Link;
                    href={feature.link}'`
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}

'`
                    <span>{t('general.explore')} {t(`features.${feature.key}`)}</span>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
                    <ArrowRight className="h-4 w-4" />
                    <ArrowRight className='h-4 w-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/home/FeatureCTAs.tsx


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
;
}
}

        </div>;
      </div>;
    </section>;
  );  );
}

  )
}
'
import React from 'react';
import {}
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
  CardTitle,
} from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import Link from 'next/link';
=======
  CardTitle,';
} from '@/components / ui / card';'
import { Button } from '@/components / ui / button';'
import { Badge } from '@/components / ui / badge';'
import Link from 'next / link';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
import { use_translation } from 'react - i18next';
<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/home/FeatureCTAs.tsx
  ArrowRight,
  Users,
  Zap,
  Settings,
  Search,
  MessageSquare,
  Smartphone,
  Calendar,
  BookOpen,
  Code,
  Building,
  Clock,'
} from 'lucide-react';'
import { cn } from '@/lib / utils';
interface FeatureCTAsProps {}
  class_name?: string;
  style?: React.CSSProperties;
export /**;
 * FeatureCTAs - Function description;
 */
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
function FeatureCTAs() {
  const { t } = use_translation ();  const features = [    {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      key: 'ai_talent_matching',
      descriptionKey: 'ai_talent_matching_desc',
      detailsKey: 'ai_talent_matching_details',
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: '/match',
<<<<<<< HEAD
      badge: 'popular'
=======
      badge: 'popular',
    },    {
      key: 'talent_directory',
      description_key: 'talent_directory_desc',
      details_key: 'talent_directory_details',      icon: <Search className="h - 10 w - 10 p - 2 rounded - md bg - blue - 100 text - blue-700" />,
      link: '/match',
=======
function FeatureCTAs() {}
  const { t } = use_translation ();  const features = [    {'
      key: 'ai_talent_matching','
      description_key: 'ai_talent_matching_desc','
      details_key: 'ai_talent_matching_details',
      icon: ('
        <Search className='h - 10 w - 10 p - 2 rounded - md bg - blue - 100 text - blue - 700' />),'
      link: '/match','
      badge: 'popular',
    },    {'
      key: 'talent_directory','
      description_key: 'talent_directory_desc','"
      details_key: 'talent_directory_details',      icon: <Search className="h - 10 w - 10 p - 2 rounded - md bg - blue - 100 text - blue - 700" />,'
      link: '/match','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      badge: 'popular';
    }
    {'
      key: 'talent_directory','
      description_key: 'talent_directory_desc','
      details_key: 'talent_directory_details',
      icon: ('
        <Users className='h - 10 w - 10 p - 2 rounded - md bg - purple - 100 text - purple - 700' />),'
      link: '/talent',
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
    },    {
      key: 'services_marketplace',
      description_key: 'services_marketplace_desc',
      details_key: 'services_marketplace_details',      icon: <Users className="h - 10 w - 10 p - 2 rounded - md bg - purple - 100 text - purple-700" />,
=======
    },    {'
      key: 'services_marketplace','
      description_key: 'services_marketplace_desc','"
      details_key: 'services_marketplace_details',      icon: <Users className="h - 10 w - 10 p - 2 rounded - md bg - purple - 100 text - purple - 700" />,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      link: '/talent';
    }
    {'
      key: 'services_marketplace','
      description_key: 'services_marketplace_desc','
      details_key: 'services_marketplace_details',
      icon: ('
        <Zap className='h - 10 w - 10 p - 2 rounded - md bg - cyan - 100 text - cyan - 700' />),'
      link: '/services','
      badge: 'new',
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
    },    {
      key: 'equipment_catalog',
      description_key: 'equipment_catalog_desc',
      details_key: 'equipment_catalog_details',      icon: <Zap className="h - 10 w - 10 p - 2 rounded - md bg - cyan - 100 text - cyan-700" />,
      link: '/services',
=======
    },    {'
      key: 'equipment_catalog','
      description_key: 'equipment_catalog_desc','"
      details_key: 'equipment_catalog_details',      icon: <Zap className="h - 10 w - 10 p - 2 rounded - md bg - cyan - 100 text - cyan - 700" />,'
      link: '/services','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      badge: 'new';
    }
    {'
      key: 'equipment_catalog','
      description_key: 'equipment_catalog_desc','
      details_key: 'equipment_catalog_details',
      icon: ('
        <Settings className='h - 10 w - 10 p - 2 rounded - md bg - amber - 100 text - amber - 700' />),'
      link: '/equipment',
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
    },    {
      key: 'community_hub',
      description_key: 'community_hub_desc',
      details_key: 'community_hub_details',      icon: <Settings className="h - 10 w - 10 p - 2 rounded - md bg - amber - 100 text - amber-700" />,
=======
    },    {'
      key: 'community_hub','
      description_key: 'community_hub_desc','"
      details_key: 'community_hub_details',      icon: <Settings className="h - 10 w - 10 p - 2 rounded - md bg - amber - 100 text - amber - 700" />,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      link: '/equipment';
    }
    {'
      key: 'community_hub','
      description_key: 'community_hub_desc','
      details_key: 'community_hub_details',
      icon: ('
        <MessageSquare className='h - 10 w - 10 p - 2 rounded - md bg - emerald - 100 text - emerald - 700' />),'
      link: '/community',
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
    },    {
      key: 'mobile_app',
      description_key: 'mobile_app_desc',
      details_key: 'mobile_app_details',      icon: <MessageSquare className="h - 10 w - 10 p - 2 rounded - md bg - emerald - 100 text - emerald-700" />,
=======
    },    {'
      key: 'mobile_app','
      description_key: 'mobile_app_desc','"
      details_key: 'mobile_app_details',      icon: <MessageSquare className="h - 10 w - 10 p - 2 rounded - md bg - emerald - 100 text - emerald - 700" />,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      link: '/community';
    }
    {'
      key: 'mobile_app','
      description_key: 'mobile_app_desc','
      details_key: 'mobile_app_details',
      icon: ('
        <Smartphone className='h - 10 w - 10 p - 2 rounded - md bg - indigo - 100 text - indigo - 700' />),'
      link: '/mobile - launch','
      badge: 'featured',
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
    },    {
      key: 'enterprise_solutions',
      description_key: 'enterprise_solutions_desc',
      details_key: 'enterprise_solutions_details',      icon: <Smartphone className="h - 10 w - 10 p - 2 rounded - md bg - indigo - 100 text - indigo-700" />,
      link: '/mobile - launch',
=======
    },    {'
      key: 'enterprise_solutions','
      description_key: 'enterprise_solutions_desc','"
      details_key: 'enterprise_solutions_details',      icon: <Smartphone className="h - 10 w - 10 p - 2 rounded - md bg - indigo - 100 text - indigo - 700" />,'
      link: '/mobile - launch','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      badge: 'featured';
    }
    {'
      key: 'enterprise_solutions','
      description_key: 'enterprise_solutions_desc','
      details_key: 'enterprise_solutions_details',
      icon: ('
        <Building className='h - 10 w - 10 p - 2 rounded - md bg - pink - 100 text - pink - 700' />),'
      link: '/enterprise',
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
    },    {
      key: 'developer_tools',
      description_key: 'developer_tools_desc',
      details_key: 'developer_tools_details',      icon: <Building className="h - 10 w - 10 p - 2 rounded - md bg - pink - 100 text - pink-700" />,
=======
    },    {'
      key: 'developer_tools','
      description_key: 'developer_tools_desc','"
      details_key: 'developer_tools_details',      icon: <Building className="h - 10 w - 10 p - 2 rounded - md bg - pink - 100 text - pink - 700" />,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      link: '/enterprise';
    }
    {'
      key: 'developer_tools','
      description_key: 'developer_tools_desc','
      details_key: 'developer_tools_details',
      icon: ('
        <Code className='h - 10 w - 10 p - 2 rounded - md bg - gray - 100 text - gray - 700' />),'
      link: '/developers',
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
    },    {
      key: 'learning_resources',
      description_key: 'learning_resources_desc',
      details_key: 'learning_resources_details',      icon: <Code className="h - 10 w - 10 p - 2 rounded - md bg - gray - 100 text - gray-700" />,
=======
    },    {'
      key: 'learning_resources','
      description_key: 'learning_resources_desc','"
      details_key: 'learning_resources_details',      icon: <Code className="h - 10 w - 10 p - 2 rounded - md bg - gray - 100 text - gray - 700" />,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      link: '/developers';
    }
    {'
      key: 'learning_resources','
      description_key: 'learning_resources_desc','
      details_key: 'learning_resources_details',
      icon: ('
        <BookOpen className='h - 10 w - 10 p - 2 rounded - md bg - teal - 100 text - teal - 700' />),'
      link: '/blog',
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
    },    {
      key: 'project_management',
      description_key: 'project_management_desc',
      details_key: 'project_management_details',      icon: <BookOpen className="h - 10 w - 10 p - 2 rounded - md bg - teal - 100 text - teal-700" />,
=======
    },    {'
      key: 'project_management','
      description_key: 'project_management_desc','"
      details_key: 'project_management_details',      icon: <BookOpen className="h - 10 w - 10 p - 2 rounded - md bg - teal - 100 text - teal - 700" />,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      link: '/blog';
    }
    {'
      key: 'project_management','
      description_key: 'project_management_desc','
      details_key: 'project_management_details',
      icon: ('
        <Calendar className='h - 10 w - 10 p - 2 rounded - md bg - red - 100 text - red - 700' />),'
      link: '/project - milestones',
    },    {'
      key: 'zion_hire_ai','
      description_key: 'zion_hire_ai_desc','
      details_key: 'zion_hire_ai_details',
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
      icon: (
        <Clock className='h - 10 w - 10 p - 2 rounded - md bg - violet - 100 text - violet - 700' />),      icon: <Calendar className="h - 10 w - 10 p - 2 rounded - md bg - red - 100 text - red-700" />,
=======
      icon: ('"
        <Clock className='h - 10 w - 10 p - 2 rounded - md bg - violet - 100 text - violet - 700' />),      icon: <Calendar className="h - 10 w - 10 p - 2 rounded - md bg - red - 100 text - red - 700" />,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
      link: '/project - milestones';
    }
    {'
      key: 'zion_hire_ai','
      description_key: 'zion_hire_ai_desc','
      details_key: 'zion_hire_ai_details',
      icon: ('
        <Clock className='h - 10 w - 10 p - 2 rounded - md bg - violet - 100 text - violet - 700' />),'
      badge: 'premium',
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    },
<<<<<<< HEAD
    {
      key: 'talent_directory',
      descriptionKey: 'talent_directory_desc',
      detailsKey: 'talent_directory_details',
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: '/talent'
    },
    {
      key: 'services_marketplace',
      descriptionKey: 'services_marketplace_desc',
      detailsKey: 'services_marketplace_details',
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: '/services',
      badge: 'new'
    },
    {
      key: 'equipment_catalog',
      descriptionKey: 'equipment_catalog_desc',
      detailsKey: 'equipment_catalog_details',
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
      link: '/equipment'
    },
    {
      key: 'community_hub',
      descriptionKey: 'community_hub_desc',
      detailsKey: 'community_hub_details',
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: '/community'
    },
    {
      key: 'mobile_app',
      descriptionKey: 'mobile_app_desc',
      detailsKey: 'mobile_app_details',
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: '/mobile-launch',
      badge: 'featured'
    },
    {
      key: 'enterprise_solutions',
      descriptionKey: 'enterprise_solutions_desc',
      detailsKey: 'enterprise_solutions_details',
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: '/enterprise'
    },
    {
      key: 'developer_tools',
      descriptionKey: 'developer_tools_desc',
      detailsKey: 'developer_tools_details',
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: '/developers'
    },
    {
      key: 'learning_resources',
      descriptionKey: 'learning_resources_desc',
      detailsKey: 'learning_resources_details',
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: '/blog'
    },
    {
      key: 'project_management',
      descriptionKey: 'project_management_desc',
      detailsKey: 'project_management_details',
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: '/project-milestones'
    },
    {
      key: 'zion_hire_ai',
      descriptionKey: 'zion_hire_ai_desc',
      detailsKey: 'zion_hire_ai_details',
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: '/zion-hire-ai',
      badge: 'premium'
    }
  ],

=======
  ];
      >;'
      <div className='container mx - auto px - 4'>;'
        <div className='mb - 12 text - center'>;'
          <h2 className='text - 3xl font - bold tracking - tight mb - 3'>;'
            {t ('home.features_heading')}
          </h2>;'
          <p className='text - lg text - muted - foreground max - w-3xl mx - auto'>;'
            {t ('home.features_subheading')}
          </p>;
        </div>;'
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
          {features.map ((feature, index) => (
            <Card;
              key={index}'
              className='overflow - hidden transition - all duration - 300 hover:shadow - lg hover:border - primary / 50';
            >;'
              <CardHeader className='pb - 2'>;'
                <div className='flex justify - between items - start'>                  {feature.icon}
                  {feature.badge && (
                    <Badge;'
                      variant='secondary';'
                      className='bg - primary / 20 text - primary';`
                    >                      {t (`badges.${feature.badge}`)}
                    </Badge>)}
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
                </div>;
                    <Badge variant="secondary" className="bg - primary / 20 text-primary">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                </div>;"
                    <Badge variant="secondary" className="bg - primary / 20 text - primary">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
  return (
    <section
      className={cn(
        "py-16 bg-gradient-to-b from-background to-background/90",
        className
      )}
      style={style}
<<<<<<< HEAD
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            {t('home.features_heading')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('home.features_subheading')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  {feature.icon}
                  {feature.badge && (
<<<<<<< HEAD
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import Link from "next/link",;
import { useTranslation } from "react-i18next",;
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Smartphone, Calendar, BookOpen, Code, Building, Clock } from 'lucide-react';
import { cn } from "@/lib/utils",;
interface FeatureCTAsProps {;
  className?: string,;
  style?: React.CSSProperties;
}
;
export function FeatureCTAs({ className, style }: FeatureCTAsProps) {;
  const { t } = useTranslation(),;
  const features = [;
    {;
      key: 'ai_talent_matching',;
      descriptionKey: 'ai_talent_matching_desc',;
      detailsKey: 'ai_talent_matching_details',;
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,;
      link: '/match',;
      badge: 'popular';
    },;
    {;
      key: 'talent_directory',;
      descriptionKey: 'talent_directory_desc',;
      detailsKey: 'talent_directory_details',;
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,;
      link: '/talent';
    },;
    {;
      key: 'services_marketplace',;
      descriptionKey: 'services_marketplace_desc',;
      detailsKey: 'services_marketplace_details',;
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,;
      link: '/services',;
      badge: 'new';
    },;
    {;
      key: 'equipment_catalog',;
      descriptionKey: 'equipment_catalog_desc',;
      detailsKey: 'equipment_catalog_details',;
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,;
      link: '/equipment';
    },;
    {;
      key: 'community_hub',;
      descriptionKey: 'community_hub_desc',;
      detailsKey: 'community_hub_details',;
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,;
      link: '/community';
    },;
    {;
      key: 'mobile_app',;
      descriptionKey: 'mobile_app_desc',;
      detailsKey: 'mobile_app_details',;
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,;
      link: '/mobile-launch',;
      badge: 'featured';
    },;
    {;
      key: 'enterprise_solutions',;
      descriptionKey: 'enterprise_solutions_desc',;
      detailsKey: 'enterprise_solutions_details',;
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,;
      link: '/enterprise';
    },;
    {;
      key: 'developer_tools',;
      descriptionKey: 'developer_tools_desc',;
      detailsKey: 'developer_tools_details',;
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,;
      link: '/developers';
    },;
    {;
      key: 'learning_resources',;
      descriptionKey: 'learning_resources_desc',;
      detailsKey: 'learning_resources_details',;
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,;
      link: '/blog';
    },;
    {;
      key: 'project_management',;
      descriptionKey: 'project_management_desc',;
      detailsKey: 'project_management_details',;
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,;
      link: '/project-milestones';
    },;
    {;
      key: 'zion_hire_ai',;
      descriptionKey: 'zion_hire_ai_desc',;
      detailsKey: 'zion_hire_ai_details',;
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,;
      link: '/zion-hire-ai',;
      badge: 'premium';
    }
  ];
  return (;
    <section;
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
      className={cn(;
        "py-16 bg-gradient-to-b from-background to-background/90";
        className;
      )}
      style={style}
    >;
      <div className="container mx-auto px-4">;
        <div className="mb-12 text-center">;
          <h2 className="text-3xl font-bold tracking-tight mb-3">;
            {t('home.features_heading')}
          </h2>;
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">;
            {t('home.features_subheading')}
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {features.map((feature, index) => (;
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">;
              <CardHeader className="pb-2">;
                <div className="flex justify-between items-start">;
                  {feature.icon}
                  {feature.badge && (;
                    <Badge variant="secondary" className="bg-primary/20 text-primary">;
                      {t(`badges.${feature.badge}`)}
                    </Badge>;
                  )}
                </div>
                <CardTitle className="mt-4">{t(`features.${feature.key}`)}</CardTitle>
                {feature.descriptionKey && (
                  <CardDescription className="line-clamp-2">
                    {t(`features.${feature.descriptionKey}`)}
                  </CardDescription>;
                )}
              </CardHeader>
              <CardContent>
                {feature.detailsKey && (
                  <p className="text-sm text-muted-foreground">
                    {t(`features.${feature.detailsKey}`)}
                  </p>;
                )}
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-1">
                  <Link
                    href={feature.link}
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}
                    className="cursor-pointer"
                    {...(feature.key === 'ai_talent_matching' && { "data-testid": "explore-ai-talent-matching-cta" })}
                  >
                    <span>{t('general.explore')} {t(`features.${feature.key}`)}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>;
      </div>;
    </section>;
  );
}
=======
                    <Badge variant="secondary" className="bg - primary / 20 text - primary">;
=======
    >;
      <div className="container mx - auto px-4">;
        <div className="mb - 12 text-center">;
          <h2 className="text - 3xl font - bold tracking - tight mb-3">;
            {t ('home.features_heading')}
          </h2>;
          <p className="text - lg text - muted - foreground max - w-3xl mx-auto">;
            {t ('home.features_subheading')}
          </p>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-6">;
          {features.map ((feature, index) => (
            <Card key={index} className="overflow - hidden transition - all duration - 300 hover:shadow - lg hover:border-primary / 50">;
              <CardHeader className="pb-2">;
                <div className="flex justify - between items-start">;
                  {feature.icon}
                  {feature.badge && (
                    <Badge variant="secondary" className="bg - primary / 20 text-primary">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      className={cn ("
        "py - 16 bg - gradient - to - b from - background to - background / 90";
        class_name)}
      style={style}
    >;"
      <div className="container mx - auto px - 4">;"
        <div className="mb - 12 text - center">;"
          <h2 className="text - 3xl font - bold tracking - tight mb - 3">;'
            {t ('home.features_heading')}
          </h2>;"
          <p className="text - lg text - muted - foreground max - w-3xl mx - auto">;'
            {t ('home.features_subheading')}
          </p>;
        </div>;"
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
          {features.map ((feature, index) => ("
            <Card key={index} className="overflow - hidden transition - all duration - 300 hover:shadow - lg hover:border - primary / 50">;"
              <CardHeader className="pb - 2">;"
                <div className="flex justify - between items - start">;
                  {feature.icon}
                  {feature.badge && ("
                    <Badge variant="secondary" className="bg - primary / 20 text - primary">;`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
                      {t (`badges.${feature.badge}`)}
                    </Badge>)}
                </div>;'
                <CardTitle className='mt - 4'>;`
                  {t (`features.${feature.key}`)}
                </CardTitle>;
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
                {feature.description_key && (
                  <CardDescription className='line - clamp - 2'>                    {t (`features.${feature.description_key}`)}                <CardTitle className="mt-4">{t (`features.${feature.key}`)}</CardTitle>;
                {feature.description_key && (
                  <CardDescription className="line - clamp-2">;
=======
                {feature.description_key && ('"`
                  <CardDescription className='line - clamp - 2'>                    {t (`features.${feature.description_key}`)}                <CardTitle className="mt - 4">{t (`features.${feature.key}`)}</CardTitle>;
                {feature.description_key && ("
                  <CardDescription className="line - clamp - 2">;`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
                    {t (`features.${feature.description_key}`)}
                  </CardDescription>)}
              </CardHeader>;
              <CardContent>;
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
                {feature.details_key && (
                  <p className='text - sm text - muted - foreground'>                    {t (`features.${feature.details_key}`)}                  <p className="text - sm text - muted-foreground">;
=======
                {feature.details_key && ('"`
                  <p className='text - sm text - muted - foreground'>                    {t (`features.${feature.details_key}`)}                  <p className="text - sm text - muted - foreground">;`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
                    {t (`features.${feature.details_key}`)}
                  </p>)}
              </CardContent>;
              <CardFooter>;'
                <Button as_child className='w - full gap - 1'>;
                  <Link;
                    href = {feature.link, }'`
                    aria - label={`${t ('general.explore')} ${t (`features.${feature.key}`)}`}'
                    className='cursor - pointer';'
                    {...(feature.key === 'ai_talent_matching' && {'
                      'data - testid': 'explore - ai - talent - matching - cta',
                    })}
                  >;
                    <span>;'`
                      {t ('general.explore')} {t (`features.${feature.key}`)}
                    </span>;'
                    <ArrowRight className='h - 4 w - 4' />                  </Link>                  <Link;
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
                    href={feature.link}
                    aria - label={`${t ('general.explore')} ${t (`features.${feature.key}`)}`}
                    className="cursor-pointer";
                    {...(feature.key === 'ai_talent_matching' && { "data - testid": "explore - ai - talent - matching - cta" })}
                  >;
                    <span>{t ('general.explore')} {t (`features.${feature.key}`)}</span>;
                    <ArrowRight className="h - 4 w-4" />;
=======
                    href={feature.link}'`
                    aria - label={`${t ('general.explore')} ${t (`features.${feature.key}`)}`}"
                    className="cursor - pointer";'"
                    {...(feature.key === 'ai_talent_matching' && { "data - testid": "explore - ai - talent - matching - cta" })}
                  >;'`
                    <span>{t ('general.explore')} {t (`features.${feature.key}`)}</span>;"
                    <ArrowRight className="h - 4 w - 4" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
                  </Link>;
                </Button>;
              </CardFooter>;
            </Card>))}
        </div>;
      </div>;
    </section>));
}
<<<<<<< HEAD:src_backup/components/home/FeatureCTAs.tsx
<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/home/FeatureCTAs.tsx
        </div>
      </div>
    </section>
);
<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/home/FeatureCTAs.tsx
=======
;'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/home/FeatureCTAs.tsx
