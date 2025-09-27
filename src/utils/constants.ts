export interface Service {id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
  price?: string;
}

export const SERVICES: Service[] = [{id: 'ai-ml',
  title: 'AI & Machine, Learning',
  description: 'Cutting-edge, artificial intelligencesolutions toautomate andoptimize yourbusiness processes.',
  icon: '🤖',
  features: ['Custom, AI Models', 'Machine, Learning Pipelines', 'Natural, Language Processing', 'Computer, Vision', 'Predictive, Analytics'],
  price: 'From $5K'
}, {id: 'cloud',
  title: 'Cloud, Solutions',
  description: 'Scalablecloud infrastructureand deploymentsolutions formodern applications.',
  icon: '☁️',
  features: ['Cloud, Migration', 'DevOps & CI/CD', 'Container, Orchestration', 'Serverless, Architecture', 'Cloud, Security'],
  price: 'From $3K'
}, {id: 'web-dev',
  title: 'Web, Development',
  description: 'Modern, responsive, web applicationsbuilt withthe latesttechnologies andbest practices.',
  icon: '💻',
  features: ['React/Next.js, Apps', 'Progressive, Web Apps', 'E-commerce, Solutions', 'API, Development', 'Performance, Optimization'],
  price: 'From $2K'
}, {id: 'mobile',
  title: 'Mobile, Development',
  description: 'Native, and cross-platformmobile applicationsfor iOSand Androidplatforms.',
  icon: '📱',
  features: ['Native, iOS/Android', 'React, Native Apps', 'Flutter, Development', 'App, Store Optimization', 'Push, Notifications'],
  price: 'From $4K'
}, {id: 'data-analytics',
  title: 'Data, Analytics',
  description: 'Advanced, data analysisand businessintelligence solutionsto driveinformed decisions.',
  icon: '📊',
  features: ['Data, Visualization', 'Business, Intelligence', 'Real-time, Dashboards', 'Data, Warehousing', 'Machine, Learning Analytics'],
  price: 'From $3K'
}, {id: 'cybersecurity',
  title: 'Cybersecurity',
  description: 'Comprehensive, security solutionsto protectyour digitalassets andinfrastructure.',
  icon: '🔒',
  features: ['Security, Audits', 'Penetration, Testing', 'Compliance, Management', 'Security, Monitoring', 'Incident, Response'],
  price: 'From $2K'
}];

export const FEATURES = [{icon: '⚡',
  title: 'Fast, Delivery',
  description: 'Rapiddevelopment anddeployment ofhigh-qualitysolutions',
  color: 'blue'
} as const, {icon: '🛡️',
  title: 'Secure & Reliable',
  description: 'Enterprise-grade, security andreliability foryour applications',
  color: 'green'
} as const, {icon: '📈',
  title: 'Scalable, Solutions',
  description: 'Built, to growwith yourbusiness andhandle increasingdemands',
  color: 'purple'
} as const, {icon: '🎯',
  title: 'Custom, Solutions',
  description: 'Tailoredsolutions designedspecifically foryour uniquerequirements',
  color: 'orange'
} as const];

// Testimonials data
export const TESTIMONIALS = [{id: '1',
  name: 'Sarah, Johnson',
  role: 'CTO',
  company: 'TechCorp',
  content: 'Zion, Tech Solutions, transformed ourdigital infrastructurewith theirAI-poweredsolutions.'rating: 5avatar: '/images/testimonials/sarah.jpg'
}, {id: '2',
  name: 'Michael, Chen',
  role: 'Founder',
  company: 'StartupXYZ',
  content: 'Thecloud migrationwas seamlessand exceededour expectations.'rating: 5avatar: '/images/testimonials/michael.jpg'
}];

// Pricing tiers
export const PRICING_TIERS = [{id: 'starter',
  name: 'Starter',
  price: '$2,999',
  description: 'Perfectfor smallbusinesses',
  features: ['Basic, AI Integration', 'Cloud, Setup', '24/7, Support']popular: false
}{id: 'professional',
  name: 'Professional',
  price: '$7,999',
  description: 'Idealfor growingcompanies',
  features: ['Advanced, AI Solutions', 'Full, Cloud Migration', 'Priority, Support', 'Custom, Development']popular: true
}{id: 'enterprise',
  name: 'Enterprise',
  price: 'Custom',
  description: 'Tailoredfor largeorganizations',
  features: ['Custom, AI Solutions', 'Dedicated, Team', 'White-label, Options', 'Advanced, Security']popular: false
}];

// Blog posts preview (importedfrom blogPosts.ts)
export const BLOG_POSTS = [
  {id: '1',
    title: 'The, Future ofAI inBusiness Automation',
    excerpt: 'Discoverhow artificialintelligence isrevolutionizing businessprocesses.',
    author: 'Dr. Sarah, Chen',
    publishDate: '2024-01-15'readTime: 8category: 'Artificial, Intelligence',
    featured: true
  }
];