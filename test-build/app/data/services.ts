export interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  category: 'ai' | 'it' | 'micro-saas' | 'specialized';
  subcategory: string;
  icon: string;
  pricing: {
    starting: number;
    currency: string;
    billing: string;
    features: string[];
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  technicalSpecs: {
    api: boolean;
    integrations: string[];
    deployment: string[];
    scalability: string;
  };
  marketPrice: {
    min: number;
    max: number;
    average: number;
  };
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  path: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export const microSaasServices: Service[] = [
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    description: 'Revolutionary AI-powered content creation platform that generates high-quality articles, blogs, social media posts, and marketing copy in seconds. Features advanced natural language processing, SEO optimization, and brand voice customization.',
    shortDescription: 'AI-powered content creation for blogs, social media, and marketing materials',
    category: 'micro-saas',
    subcategory: 'content-creation',
    icon: '✍️',
    pricing: {
      starting: 29,
      currency: 'USD',
      billing: 'month',
      features: ['10,000 words/month', '5 brand voices', 'SEO optimization', 'Plagiarism check']
    },
    features: [
      'AI-powered article generation',
      'SEO-optimized content',
      'Multiple content formats (blogs, social media, emails)',
      'Brand voice customization',
      'Plagiarism detection',
      'Content scheduling',
      'Multi-language support',
      'Team collaboration tools',
      'Analytics dashboard',
      'API access'
    ],
    benefits: [
      'Save 80% time on content creation',
      'Increase content output by 500%',
      'Improve SEO rankings',
      'Maintain consistent brand voice',
      'Reduce content costs by 70%'
    ],
    useCases: [
      'Blog content creation',
      'Social media management',
      'Email marketing campaigns',
      'Product descriptions',
      'Marketing copywriting'
    ],
    targetAudience: ['Content creators', 'Marketing agencies', 'Small businesses', 'Bloggers', 'E-commerce stores'],
    technicalSpecs: {
      api: true,
      integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Zapier'],
      deployment: ['Cloud', 'On-premise'],
      scalability: 'Unlimited'
    },
    marketPrice: {
      min: 19,
      max: 199,
      average: 49
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-content-generator'
    },
    path: '/ai-content-generator',
    isPopular: true
  },
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder',
    description: 'Create intelligent, conversational AI chatbots for websites, customer support, and sales automation. No coding required. Features natural language understanding, multi-language support, and seamless integration.',
    shortDescription: 'Build intelligent chatbots for customer support and sales automation',
    category: 'micro-saas',
    subcategory: 'automation',
    icon: '🤖',
    pricing: {
      starting: 49,
      currency: 'USD',
      billing: 'month',
      features: ['1,000 conversations/month', '5 chatbots', 'Basic analytics', 'Email support']
    },
    features: [
      'Drag-and-drop chatbot builder',
      'Natural language processing',
      'Multi-language support',
      'Live chat integration',
      'Analytics dashboard',
      'Custom branding',
      'API integration',
      'Lead capture forms',
      'Knowledge base integration',
      'Mobile app support'
    ],
    benefits: [
      'Reduce support costs by 60%',
      'Increase customer satisfaction',
      '24/7 customer support',
      'Qualify leads automatically',
      'Scale customer service'
    ],
    useCases: [
      'Customer support automation',
      'Lead qualification',
      'FAQ automation',
      'Sales assistance',
      'Appointment booking'
    ],
    targetAudience: ['E-commerce stores', 'Service businesses', 'SaaS companies', 'Healthcare providers', 'Educational institutions'],
    technicalSpecs: {
      api: true,
      integrations: ['WordPress', 'Shopify', 'Salesforce', 'Zendesk', 'Slack'],
      deployment: ['Cloud', 'Embedded'],
      scalability: '10,000+ conversations'
    },
    marketPrice: {
      min: 29,
      max: 299,
      average: 79
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-chatbot-builder'
    },
    path: '/ai-chatbot-builder',
    isPopular: true
  },
  {
    id: 'ai-email-marketing',
    name: 'AI Email Marketing Suite',
    description: 'Advanced AI-powered email marketing platform with intelligent segmentation, personalized content generation, and automated campaign optimization. Features predictive analytics and advanced automation workflows.',
    shortDescription: 'AI-powered email marketing with intelligent segmentation and automation',
    category: 'micro-saas',
    subcategory: 'marketing',
    icon: '📧',
    pricing: {
      starting: 39,
      currency: 'USD',
      billing: 'month',
      features: ['10,000 subscribers', 'Unlimited emails', 'AI content generation', 'Advanced analytics']
    },
    features: [
      'AI-powered email generation',
      'Intelligent audience segmentation',
      'Predictive send time optimization',
      'A/B testing automation',
      'Personalization engine',
      'Advanced analytics',
      'Automation workflows',
      'Template library',
      'Spam score checker',
      'Deliverability monitoring'
    ],
    benefits: [
      'Increase open rates by 40%',
      'Boost click-through rates by 60%',
      'Reduce unsubscribe rates',
      'Save 70% time on campaign creation',
      'Improve ROI by 200%'
    ],
    useCases: [
      'E-commerce marketing',
      'Lead nurturing',
      'Customer retention',
      'Product launches',
      'Event promotion'
    ],
    targetAudience: ['E-commerce businesses', 'Marketing agencies', 'SaaS companies', 'Non-profits', 'Event organizers'],
    technicalSpecs: {
      api: true,
      integrations: ['Shopify', 'WooCommerce', 'HubSpot', 'Salesforce', 'Zapier'],
      deployment: ['Cloud'],
      scalability: '1M+ subscribers'
    },
    marketPrice: {
      min: 19,
      max: 399,
      average: 89
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-email-marketing'
    },
    path: '/ai-email-marketing',
    isNew: true
  },
  {
    id: 'ai-social-media-manager',
    name: 'AI Social Media Manager',
    description: 'Comprehensive social media management platform powered by AI. Automatically creates, schedules, and optimizes content across all major platforms. Features sentiment analysis, hashtag optimization, and performance tracking.',
    shortDescription: 'AI-powered social media management and content optimization',
    category: 'micro-saas',
    subcategory: 'social-media',
    icon: '📱',
    pricing: {
      starting: 59,
      currency: 'USD',
      billing: 'month',
      features: ['5 social accounts', 'Unlimited posts', 'AI content creation', 'Analytics dashboard']
    },
    features: [
      'Multi-platform posting',
      'AI content generation',
      'Optimal posting time detection',
      'Hashtag optimization',
      'Sentiment analysis',
      'Competitor analysis',
      'Influencer identification',
      'Engagement tracking',
      'Content calendar',
      'Team collaboration'
    ],
    benefits: [
      'Increase engagement by 150%',
      'Save 80% time on social media',
      'Improve brand consistency',
      'Boost follower growth',
      'Optimize posting schedule'
    ],
    useCases: [
      'Brand management',
      'Content marketing',
      'Community building',
      'Lead generation',
      'Customer support'
    ],
    targetAudience: ['Small businesses', 'Marketing agencies', 'Influencers', 'E-commerce stores', 'Service providers'],
    technicalSpecs: {
      api: true,
      integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok'],
      deployment: ['Cloud'],
      scalability: 'Unlimited accounts'
    },
    marketPrice: {
      min: 29,
      max: 199,
      average: 79
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-social-media-manager'
    },
    path: '/ai-social-media-manager'
  },
  {
    id: 'ai-analytics-dashboard',
    name: 'AI Analytics Dashboard',
    description: 'Advanced business intelligence platform with AI-powered insights, predictive analytics, and automated reporting. Transform raw data into actionable business insights with natural language queries and automated alerts.',
    shortDescription: 'AI-powered business intelligence and predictive analytics',
    category: 'micro-saas',
    subcategory: 'analytics',
    icon: '📊',
    pricing: {
      starting: 79,
      currency: 'USD',
      billing: 'month',
      features: ['10 data sources', 'Unlimited dashboards', 'AI insights', 'Custom reports']
    },
    features: [
      'AI-powered data analysis',
      'Natural language queries',
      'Predictive analytics',
      'Automated insights',
      'Custom dashboard builder',
      'Real-time data visualization',
      'Automated reporting',
      'Anomaly detection',
      'Data integration',
      'Mobile app'
    ],
    benefits: [
      'Make data-driven decisions',
      'Identify trends and opportunities',
      'Reduce analysis time by 90%',
      'Improve forecasting accuracy',
      'Automate reporting processes'
    ],
    useCases: [
      'Sales performance tracking',
      'Marketing ROI analysis',
      'Customer behavior insights',
      'Financial forecasting',
      'Operational efficiency'
    ],
    targetAudience: ['Business owners', 'Data analysts', 'Marketing managers', 'Sales teams', 'Executives'],
    technicalSpecs: {
      api: true,
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'MySQL', 'PostgreSQL'],
      deployment: ['Cloud', 'On-premise'],
      scalability: 'Unlimited data points'
    },
    marketPrice: {
      min: 49,
      max: 499,
      average: 149
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-analytics-dashboard'
    },
    path: '/ai-analytics-dashboard',
    isPopular: true
  },
  {
    id: 'ai-crm-automation',
    name: 'AI CRM Automation',
    description: 'Intelligent customer relationship management system with AI-powered lead scoring, automated follow-ups, and predictive sales analytics. Features smart contact management and automated workflow optimization.',
    shortDescription: 'AI-powered CRM with automated lead scoring and sales optimization',
    category: 'micro-saas',
    subcategory: 'crm',
    icon: '👥',
    pricing: {
      starting: 69,
      currency: 'USD',
      billing: 'month',
      features: ['1,000 contacts', 'Unlimited deals', 'AI lead scoring', 'Email automation']
    },
    features: [
      'AI lead scoring',
      'Automated follow-ups',
      'Predictive analytics',
      'Contact management',
      'Deal tracking',
      'Email automation',
      'Task management',
      'Pipeline visualization',
      'Performance analytics',
      'Mobile app'
    ],
    benefits: [
      'Increase sales by 30%',
      'Improve lead qualification',
      'Automate repetitive tasks',
      'Better customer insights',
      'Streamline sales process'
    ],
    useCases: [
      'Lead management',
      'Sales pipeline tracking',
      'Customer retention',
      'Marketing automation',
      'Team collaboration'
    ],
    targetAudience: ['Sales teams', 'Small businesses', 'Real estate agents', 'Insurance agents', 'Consultants'],
    technicalSpecs: {
      api: true,
      integrations: ['Gmail', 'Outlook', 'Slack', 'Zapier', 'Mailchimp'],
      deployment: ['Cloud'],
      scalability: '100,000+ contacts'
    },
    marketPrice: {
      min: 29,
      max: 299,
      average: 99
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-crm-automation'
    },
    path: '/ai-crm-automation'
  },
  {
    id: 'ai-inventory-manager',
    name: 'AI Inventory Manager',
    description: 'Smart inventory management system with AI-powered demand forecasting, automated reordering, and real-time stock optimization. Features predictive analytics and automated supplier management.',
    shortDescription: 'AI-powered inventory management with demand forecasting',
    category: 'micro-saas',
    subcategory: 'inventory',
    icon: '📦',
    pricing: {
      starting: 89,
      currency: 'USD',
      billing: 'month',
      features: ['1,000 products', 'Unlimited locations', 'AI forecasting', 'Supplier management']
    },
    features: [
      'AI demand forecasting',
      'Automated reordering',
      'Multi-location tracking',
      'Supplier management',
      'Barcode scanning',
      'Low stock alerts',
      'Cost optimization',
      'Reporting dashboard',
      'Mobile app',
      'API integration'
    ],
    benefits: [
      'Reduce stockouts by 80%',
      'Lower inventory costs by 25%',
      'Improve cash flow',
      'Automate reordering',
      'Optimize stock levels'
    ],
    useCases: [
      'E-commerce inventory',
      'Retail management',
      'Manufacturing',
      'Wholesale distribution',
      'Restaurant management'
    ],
    targetAudience: ['E-commerce stores', 'Retailers', 'Manufacturers', 'Distributors', 'Restaurants'],
    technicalSpecs: {
      api: true,
      integrations: ['Shopify', 'WooCommerce', 'QuickBooks', 'Xero', 'SAP'],
      deployment: ['Cloud', 'On-premise'],
      scalability: '1M+ products'
    },
    marketPrice: {
      min: 49,
      max: 399,
      average: 149
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-inventory-manager'
    },
    path: '/ai-inventory-manager'
  },
  {
    id: 'ai-customer-support',
    name: 'AI Customer Support Suite',
    description: 'Comprehensive customer support platform with AI-powered ticket routing, automated responses, and sentiment analysis. Features knowledge base automation and multi-channel support integration.',
    shortDescription: 'AI-powered customer support with automated ticket management',
    category: 'micro-saas',
    subcategory: 'support',
    icon: '🎧',
    pricing: {
      starting: 49,
      currency: 'USD',
      billing: 'month',
      features: ['1,000 tickets/month', '5 agents', 'AI automation', 'Multi-channel support']
    },
    features: [
      'AI ticket routing',
      'Automated responses',
      'Sentiment analysis',
      'Knowledge base',
      'Multi-channel support',
      'Live chat integration',
      'Performance analytics',
      'Customer satisfaction tracking',
      'Escalation management',
      'Mobile app'
    ],
    benefits: [
      'Reduce response time by 70%',
      'Improve customer satisfaction',
      'Automate routine queries',
      'Scale support operations',
      'Reduce support costs'
    ],
    useCases: [
      'Customer service',
      'Technical support',
      'Sales inquiries',
      'Complaint handling',
      'FAQ automation'
    ],
    targetAudience: ['E-commerce stores', 'SaaS companies', 'Service businesses', 'Healthcare providers', 'Educational institutions'],
    technicalSpecs: {
      api: true,
      integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Slack', 'Microsoft Teams'],
      deployment: ['Cloud'],
      scalability: '10,000+ tickets'
    },
    marketPrice: {
      min: 29,
      max: 199,
      average: 79
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-customer-support'
    },
    path: '/ai-customer-support'
  },
  {
    id: 'ai-project-manager',
    name: 'AI Project Manager',
    description: 'Intelligent project management platform with AI-powered task prioritization, resource optimization, and risk prediction. Features automated scheduling and team performance analytics.',
    shortDescription: 'AI-powered project management with intelligent task optimization',
    category: 'micro-saas',
    subcategory: 'productivity',
    icon: '📋',
    pricing: {
      starting: 39,
      currency: 'USD',
      billing: 'month',
      features: ['10 projects', 'Unlimited tasks', 'AI optimization', 'Team collaboration']
    },
    features: [
      'AI task prioritization',
      'Resource optimization',
      'Risk prediction',
      'Automated scheduling',
      'Team collaboration',
      'Time tracking',
      'Progress analytics',
      'Gantt charts',
      'Mobile app',
      'API integration'
    ],
    benefits: [
      'Improve project success rate',
      'Optimize resource allocation',
      'Reduce project delays',
      'Better team coordination',
      'Predict and mitigate risks'
    ],
    useCases: [
      'Software development',
      'Marketing campaigns',
      'Event planning',
      'Construction projects',
      'Consulting projects'
    ],
    targetAudience: ['Project managers', 'Development teams', 'Marketing agencies', 'Consultants', 'Construction companies'],
    technicalSpecs: {
      api: true,
      integrations: ['Slack', 'Microsoft Teams', 'Jira', 'Asana', 'Trello'],
      deployment: ['Cloud'],
      scalability: 'Unlimited projects'
    },
    marketPrice: {
      min: 19,
      max: 199,
      average: 59
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-project-manager'
    },
    path: '/ai-project-manager'
  },
  {
    id: 'ai-finance-tracker',
    name: 'AI Finance Tracker',
    description: 'Smart financial management platform with AI-powered expense categorization, budget optimization, and financial forecasting. Features automated bookkeeping and investment analysis.',
    shortDescription: 'AI-powered financial management with automated categorization',
    category: 'micro-saas',
    subcategory: 'finance',
    icon: '💰',
    pricing: {
      starting: 29,
      currency: 'USD',
      billing: 'month',
      features: ['Unlimited transactions', 'AI categorization', 'Budget tracking', 'Financial reports']
    },
    features: [
      'AI expense categorization',
      'Budget optimization',
      'Financial forecasting',
      'Investment tracking',
      'Tax preparation',
      'Receipt scanning',
      'Bill reminders',
      'Financial reports',
      'Mobile app',
      'Bank integration'
    ],
    benefits: [
      'Save time on bookkeeping',
      'Improve financial visibility',
      'Optimize spending',
      'Better tax preparation',
      'Automate financial tasks'
    ],
    useCases: [
      'Personal finance',
      'Small business accounting',
      'Expense management',
      'Budget planning',
      'Tax preparation'
    ],
    targetAudience: ['Individuals', 'Small businesses', 'Freelancers', 'Consultants', 'Startups'],
    technicalSpecs: {
      api: true,
      integrations: ['QuickBooks', 'Xero', 'Bank APIs', 'PayPal', 'Stripe'],
      deployment: ['Cloud'],
      scalability: 'Unlimited transactions'
    },
    marketPrice: {
      min: 9,
      max: 99,
      average: 39
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-finance-tracker'
    },
    path: '/ai-finance-tracker'
  },
  {
    id: 'ai-hr-manager',
    name: 'AI HR Manager',
    description: 'Comprehensive human resources management system with AI-powered candidate screening, employee performance analytics, and automated onboarding. Features intelligent workforce planning and compliance management.',
    shortDescription: 'AI-powered HR management with automated recruitment and analytics',
    category: 'micro-saas',
    subcategory: 'hr',
    icon: '👔',
    pricing: {
      starting: 79,
      currency: 'USD',
      billing: 'month',
      features: ['50 employees', 'AI screening', 'Performance analytics', 'Compliance tracking']
    },
    features: [
      'AI candidate screening',
      'Employee performance analytics',
      'Automated onboarding',
      'Time tracking',
      'Payroll integration',
      'Compliance management',
      'Benefits administration',
      'Training management',
      'Mobile app',
      'API integration'
    ],
    benefits: [
      'Reduce hiring time by 60%',
      'Improve candidate quality',
      'Streamline HR processes',
      'Better employee insights',
      'Ensure compliance'
    ],
    useCases: [
      'Recruitment',
      'Performance management',
      'Employee onboarding',
      'Time tracking',
      'Compliance monitoring'
    ],
    targetAudience: ['Small businesses', 'HR departments', 'Recruiting agencies', 'Consulting firms', 'Non-profits'],
    technicalSpecs: {
      api: true,
      integrations: ['ADP', 'Workday', 'BambooHR', 'Slack', 'Microsoft Teams'],
      deployment: ['Cloud'],
      scalability: '1,000+ employees'
    },
    marketPrice: {
      min: 39,
      max: 299,
      average: 129
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-hr-manager'
    },
    path: '/ai-hr-manager'
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Optimizer',
    description: 'Advanced SEO management platform with AI-powered keyword research, content optimization, and ranking tracking. Features automated technical SEO audits and competitor analysis.',
    shortDescription: 'AI-powered SEO optimization with automated audits and tracking',
    category: 'micro-saas',
    subcategory: 'seo',
    icon: '🔍',
    pricing: {
      starting: 49,
      currency: 'USD',
      billing: 'month',
      features: ['5 websites', 'Unlimited keywords', 'AI optimization', 'Competitor analysis']
    },
    features: [
      'AI keyword research',
      'Content optimization',
      'Technical SEO audits',
      'Ranking tracking',
      'Competitor analysis',
      'Backlink monitoring',
      'Site speed optimization',
      'Local SEO tools',
      'Reporting dashboard',
      'API access'
    ],
    benefits: [
      'Improve search rankings',
      'Increase organic traffic',
      'Automate SEO tasks',
      'Better keyword targeting',
      'Competitive advantage'
    ],
    useCases: [
      'Website optimization',
      'Content marketing',
      'Local business SEO',
      'E-commerce SEO',
      'Blog optimization'
    ],
    targetAudience: ['Digital marketers', 'SEO agencies', 'Website owners', 'E-commerce stores', 'Content creators'],
    technicalSpecs: {
      api: true,
      integrations: ['Google Analytics', 'Google Search Console', 'WordPress', 'Shopify', 'WooCommerce'],
      deployment: ['Cloud'],
      scalability: 'Unlimited websites'
    },
    marketPrice: {
      min: 29,
      max: 199,
      average: 79
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-seo-optimizer'
    },
    path: '/ai-seo-optimizer'
  },
  {
    id: 'ai-email-automation',
    name: 'AI Email Automation',
    description: 'Intelligent email automation platform with AI-powered sequence optimization, behavioral triggers, and personalized content delivery. Features advanced segmentation and performance analytics.',
    shortDescription: 'AI-powered email automation with behavioral triggers and optimization',
    category: 'micro-saas',
    subcategory: 'automation',
    icon: '📬',
    pricing: {
      starting: 39,
      currency: 'USD',
      billing: 'month',
      features: ['5,000 subscribers', 'Unlimited emails', 'AI optimization', 'Advanced analytics']
    },
    features: [
      'AI sequence optimization',
      'Behavioral triggers',
      'Personalized content',
      'Advanced segmentation',
      'A/B testing',
      'Performance analytics',
      'Drip campaigns',
      'Lead nurturing',
      'Mobile optimization',
      'API integration'
    ],
    benefits: [
      'Increase email engagement',
      'Automate lead nurturing',
      'Improve conversion rates',
      'Save time on campaigns',
      'Better personalization'
    ],
    useCases: [
      'Lead nurturing',
      'Customer onboarding',
      'Product launches',
      'Re-engagement campaigns',
      'Sales follow-ups'
    ],
    targetAudience: ['Marketing agencies', 'E-commerce stores', 'SaaS companies', 'Coaches', 'Consultants'],
    technicalSpecs: {
      api: true,
      integrations: ['HubSpot', 'Salesforce', 'Zapier', 'WordPress', 'Shopify'],
      deployment: ['Cloud'],
      scalability: '1M+ subscribers'
    },
    marketPrice: {
      min: 19,
      max: 299,
      average: 69
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-email-automation'
    },
    path: '/ai-email-automation'
  },
  {
    id: 'ai-video-editor',
    name: 'AI Video Editor',
    description: 'Revolutionary AI-powered video editing platform that automatically creates professional videos from raw footage. Features intelligent scene detection, auto-cropping, and smart transitions.',
    shortDescription: 'AI-powered video editing with automatic scene detection and optimization',
    category: 'micro-saas',
    subcategory: 'video',
    icon: '🎬',
    pricing: {
      starting: 59,
      currency: 'USD',
      billing: 'month',
      features: ['10 hours video/month', 'HD export', 'AI editing', 'Template library']
    },
    features: [
      'AI scene detection',
      'Auto-cropping',
      'Smart transitions',
      'Color correction',
      'Audio enhancement',
      'Text overlay',
      'Template library',
      'Cloud storage',
      'Collaboration tools',
      'Mobile app'
    ],
    benefits: [
      'Save 90% editing time',
      'Create professional videos',
      'No technical skills required',
      'Consistent quality',
      'Faster content production'
    ],
    useCases: [
      'Social media content',
      'Marketing videos',
      'Training materials',
      'Product demos',
      'Event highlights'
    ],
    targetAudience: ['Content creators', 'Marketing agencies', 'Small businesses', 'Educators', 'Event organizers'],
    technicalSpecs: {
      api: true,
      integrations: ['YouTube', 'Vimeo', 'Facebook', 'Instagram', 'TikTok'],
      deployment: ['Cloud'],
      scalability: 'Unlimited video hours'
    },
    marketPrice: {
      min: 29,
      max: 199,
      average: 89
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-video-editor'
    },
    path: '/ai-video-editor'
  },
  {
    id: 'ai-translation-service',
    name: 'AI Translation Service',
    description: 'Advanced AI-powered translation platform supporting 100+ languages with context-aware translations, real-time processing, and industry-specific terminology. Features human-quality accuracy and cultural adaptation.',
    shortDescription: 'AI-powered translation service with 100+ languages and cultural adaptation',
    category: 'micro-saas',
    subcategory: 'translation',
    icon: '🌐',
    pricing: {
      starting: 19,
      currency: 'USD',
      billing: 'month',
      features: ['50,000 characters/month', '100+ languages', 'Real-time translation', 'API access']
    },
    features: [
      '100+ language support',
      'Context-aware translation',
      'Real-time processing',
      'Industry terminology',
      'Cultural adaptation',
      'Batch translation',
      'API integration',
      'Quality scoring',
      'Human review option',
      'Mobile app'
    ],
    benefits: [
      'Break language barriers',
      'Expand global reach',
      'Maintain brand consistency',
      'Reduce translation costs',
      'Faster time to market'
    ],
    useCases: [
      'Website localization',
      'Document translation',
      'E-commerce expansion',
      'Content marketing',
      'Customer support'
    ],
    targetAudience: ['E-commerce stores', 'Content creators', 'Travel companies', 'Educational institutions', 'Government agencies'],
    technicalSpecs: {
      api: true,
      integrations: ['WordPress', 'Shopify', 'Zapier', 'Google Translate', 'Microsoft Translator'],
      deployment: ['Cloud'],
      scalability: 'Unlimited characters'
    },
    marketPrice: {
      min: 9,
      max: 199,
      average: 49
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-translation-service'
    },
    path: '/ai-translation-service'
  },
  {
    id: 'ai-data-scraper',
    name: 'AI Data Scraper',
    description: 'Intelligent web scraping platform with AI-powered data extraction, cleaning, and structuring. Features anti-detection technology, proxy rotation, and automated data validation.',
    shortDescription: 'AI-powered web scraping with intelligent data extraction and cleaning',
    category: 'micro-saas',
    subcategory: 'data',
    icon: '🕷️',
    pricing: {
      starting: 79,
      currency: 'USD',
      billing: 'month',
      features: ['100,000 pages/month', 'AI extraction', 'Proxy rotation', 'Data cleaning']
    },
    features: [
      'AI data extraction',
      'Anti-detection technology',
      'Proxy rotation',
      'Data cleaning',
      'Scheduled scraping',
      'Data validation',
      'Export formats',
      'API integration',
      'Cloud storage',
      'Monitoring dashboard'
    ],
    benefits: [
      'Extract data efficiently',
      'Avoid detection',
      'Clean and structure data',
      'Automate data collection',
      'Scale data operations'
    ],
    useCases: [
      'Market research',
      'Competitor analysis',
      'Lead generation',
      'Price monitoring',
      'Content aggregation'
    ],
    targetAudience: ['Data analysts', 'Market researchers', 'E-commerce stores', 'Marketing agencies', 'Consultants'],
    technicalSpecs: {
      api: true,
      integrations: ['Google Sheets', 'Excel', 'PostgreSQL', 'MongoDB', 'S3'],
      deployment: ['Cloud'],
      scalability: '10M+ pages'
    },
    marketPrice: {
      min: 49,
      max: 499,
      average: 149
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-data-scraper'
    },
    path: '/ai-data-scraper'
  },
  {
    id: 'ai-form-builder',
    name: 'AI Form Builder',
    description: 'Smart form creation platform with AI-powered field suggestions, conditional logic, and automated responses. Features advanced validation, multi-step forms, and seamless integrations.',
    shortDescription: 'AI-powered form builder with intelligent field suggestions and automation',
    category: 'micro-saas',
    subcategory: 'forms',
    icon: '📝',
    pricing: {
      starting: 29,
      currency: 'USD',
      billing: 'month',
      features: ['Unlimited forms', '1,000 submissions/month', 'AI suggestions', 'Advanced logic']
    },
    features: [
      'AI field suggestions',
      'Conditional logic',
      'Multi-step forms',
      'Advanced validation',
      'Payment integration',
      'File uploads',
      'Email notifications',
      'Analytics dashboard',
      'API access',
      'Mobile optimization'
    ],
    benefits: [
      'Create forms faster',
      'Improve conversion rates',
      'Reduce form abandonment',
      'Better user experience',
      'Automate responses'
    ],
    useCases: [
      'Lead generation',
      'Customer feedback',
      'Event registration',
      'Survey collection',
      'Contact forms'
    ],
    targetAudience: ['Small businesses', 'Marketing agencies', 'Event organizers', 'Consultants', 'Non-profits'],
    technicalSpecs: {
      api: true,
      integrations: ['Zapier', 'Mailchimp', 'HubSpot', 'Salesforce', 'Stripe'],
      deployment: ['Cloud'],
      scalability: 'Unlimited forms'
    },
    marketPrice: {
      min: 19,
      max: 199,
      average: 59
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-form-builder'
    },
    path: '/ai-form-builder'
  },
  {
    id: 'ai-calendar-scheduler',
    name: 'AI Calendar Scheduler',
    description: 'Intelligent scheduling platform with AI-powered meeting optimization, time zone management, and automated booking. Features smart conflict resolution and meeting analytics.',
    shortDescription: 'AI-powered calendar scheduling with intelligent meeting optimization',
    category: 'micro-saas',
    subcategory: 'scheduling',
    icon: '📅',
    pricing: {
      starting: 39,
      currency: 'USD',
      billing: 'month',
      features: ['Unlimited bookings', 'AI optimization', 'Team scheduling', 'Analytics dashboard']
    },
    features: [
      'AI meeting optimization',
      'Time zone management',
      'Automated booking',
      'Conflict resolution',
      'Team scheduling',
      'Meeting analytics',
      'Calendar integration',
      'Email reminders',
      'Mobile app',
      'API access'
    ],
    benefits: [
      'Reduce scheduling conflicts',
      'Optimize meeting times',
      'Automate booking process',
      'Improve productivity',
      'Better time management'
    ],
    useCases: [
      'Client meetings',
      'Team coordination',
      'Appointment booking',
      'Event scheduling',
      'Interview management'
    ],
    targetAudience: ['Consultants', 'Service providers', 'Sales teams', 'HR departments', 'Event organizers'],
    technicalSpecs: {
      api: true,
      integrations: ['Google Calendar', 'Outlook', 'Zoom', 'Teams', 'Slack'],
      deployment: ['Cloud'],
      scalability: 'Unlimited bookings'
    },
    marketPrice: {
      min: 19,
      max: 199,
      average: 69
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-calendar-scheduler'
    },
    path: '/ai-calendar-scheduler'
  },
  {
    id: 'ai-workflow-automation',
    name: 'AI Workflow Automation',
    description: 'Powerful workflow automation platform with AI-powered process optimization, intelligent routing, and automated decision making. Features visual workflow builder and advanced integrations.',
    shortDescription: 'AI-powered workflow automation with intelligent process optimization',
    category: 'micro-saas',
    subcategory: 'automation',
    icon: '⚙️',
    pricing: {
      starting: 59,
      currency: 'USD',
      billing: 'month',
      features: ['Unlimited workflows', 'AI optimization', 'Advanced integrations', 'Analytics dashboard']
    },
    features: [
      'Visual workflow builder',
      'AI process optimization',
      'Intelligent routing',
      'Automated decisions',
      'Advanced integrations',
      'Conditional logic',
      'Error handling',
      'Performance analytics',
      'Team collaboration',
      'API access'
    ],
    benefits: [
      'Automate complex processes',
      'Reduce manual work',
      'Improve efficiency',
      'Better error handling',
      'Scale operations'
    ],
    useCases: [
      'Business process automation',
      'Customer onboarding',
      'Order processing',
      'Data processing',
      'Approval workflows'
    ],
    targetAudience: ['Business owners', 'Operations managers', 'IT departments', 'Consultants', 'Enterprise companies'],
    technicalSpecs: {
      api: true,
      integrations: ['Zapier', 'Microsoft Power Automate', 'Salesforce', 'HubSpot', 'Slack'],
      deployment: ['Cloud'],
      scalability: 'Unlimited workflows'
    },
    marketPrice: {
      min: 29,
      max: 399,
      average: 99
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-workflow-automation'
    },
    path: '/ai-workflow-automation'
  },
  {
    id: 'ai-security-monitor',
    name: 'AI Security Monitor',
    description: 'Advanced cybersecurity monitoring platform with AI-powered threat detection, automated incident response, and real-time security analytics. Features behavioral analysis and compliance monitoring.',
    shortDescription: 'AI-powered security monitoring with automated threat detection and response',
    category: 'micro-saas',
    subcategory: 'security',
    icon: '🔒',
    pricing: {
      starting: 99,
      currency: 'USD',
      billing: 'month',
      features: ['5 systems', 'AI monitoring', 'Real-time alerts', 'Compliance tracking']
    },
    features: [
      'AI threat detection',
      'Behavioral analysis',
      'Automated response',
      'Real-time monitoring',
      'Compliance tracking',
      'Incident management',
      'Security analytics',
      'Mobile alerts',
      'API integration',
      'Custom rules'
    ],
    benefits: [
      'Detect threats early',
      'Automate responses',
      'Ensure compliance',
      'Reduce security risks',
      'Better visibility'
    ],
    useCases: [
      'Network security',
      'Endpoint protection',
      'Compliance monitoring',
      'Incident response',
      'Risk assessment'
    ],
    targetAudience: ['IT departments', 'Security teams', 'Compliance officers', 'Small businesses', 'Managed service providers'],
    technicalSpecs: {
      api: true,
      integrations: ['SIEM systems', 'Firewalls', 'Antivirus', 'Cloud platforms', 'Slack'],
      deployment: ['Cloud', 'On-premise'],
      scalability: 'Unlimited systems'
    },
    marketPrice: {
      min: 49,
      max: 999,
      average: 199
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-security-monitor'
    },
    path: '/ai-security-monitor'
  }
];

export const aiServices: Service[] = [
  {
    id: 'ai-machine-learning',
    name: 'AI Machine Learning Solutions',
    description: 'Comprehensive machine learning services including custom model development, data preprocessing, model training, and deployment. Features advanced algorithms, real-time inference, and continuous learning capabilities.',
    shortDescription: 'Custom machine learning models and AI solutions for enterprise applications',
    category: 'ai',
    subcategory: 'machine-learning',
    icon: '🧠',
    pricing: {
      starting: 2500,
      currency: 'USD',
      billing: 'month',
      features: ['Custom model development', 'Data preprocessing', 'Model training', 'Deployment support']
    },
    features: [
      'Custom ML model development',
      'Data preprocessing and cleaning',
      'Model training and optimization',
      'Real-time inference APIs',
      'Continuous learning systems',
      'Model monitoring and maintenance',
      'A/B testing framework',
      'Scalable deployment',
      'Performance optimization',
      'Documentation and training'
    ],
    benefits: [
      'Improve business decision making',
      'Automate complex processes',
      'Increase operational efficiency',
      'Reduce manual errors',
      'Gain competitive advantage'
    ],
    useCases: [
      'Predictive analytics',
      'Recommendation systems',
      'Fraud detection',
      'Image recognition',
      'Natural language processing'
    ],
    targetAudience: ['Enterprise companies', 'E-commerce platforms', 'Financial institutions', 'Healthcare organizations', 'Manufacturing companies'],
    technicalSpecs: {
      api: true,
      integrations: ['TensorFlow', 'PyTorch', 'AWS', 'Azure', 'Google Cloud'],
      deployment: ['Cloud', 'On-premise', 'Edge'],
      scalability: 'Unlimited'
    },
    marketPrice: {
      min: 1500,
      max: 10000,
      average: 4000
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-machine-learning'
    },
    path: '/ai-machine-learning'
  },
  {
    id: 'ai-natural-language-processing',
    name: 'AI Natural Language Processing',
    description: 'Advanced NLP services including text analysis, sentiment analysis, language translation, and conversational AI. Features state-of-the-art transformer models and custom language model training.',
    shortDescription: 'Advanced NLP services for text analysis, translation, and conversational AI',
    category: 'ai',
    subcategory: 'nlp',
    icon: '💬',
    pricing: {
      starting: 1800,
      currency: 'USD',
      billing: 'month',
      features: ['Text analysis', 'Sentiment analysis', 'Language translation', 'Chatbot development']
    },
    features: [
      'Text analysis and classification',
      'Sentiment analysis',
      'Named entity recognition',
      'Language translation',
      'Text summarization',
      'Question answering systems',
      'Conversational AI',
      'Custom model training',
      'Multi-language support',
      'Real-time processing'
    ],
    benefits: [
      'Extract insights from text data',
      'Improve customer communication',
      'Automate text processing',
      'Support multiple languages',
      'Enhance user experience'
    ],
    useCases: [
      'Customer service automation',
      'Content moderation',
      'Market research',
      'Document analysis',
      'Voice assistants'
    ],
    targetAudience: ['Customer service teams', 'Content platforms', 'Market research firms', 'Publishing companies', 'Government agencies'],
    technicalSpecs: {
      api: true,
      integrations: ['OpenAI', 'Hugging Face', 'Google Cloud NLP', 'AWS Comprehend', 'Azure Cognitive Services'],
      deployment: ['Cloud', 'On-premise'],
      scalability: 'Unlimited requests'
    },
    marketPrice: {
      min: 1000,
      max: 8000,
      average: 3000
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-natural-language-processing'
    },
    path: '/ai-natural-language-processing'
  },
  {
    id: 'ai-computer-vision',
    name: 'AI Computer Vision',
    description: 'Cutting-edge computer vision services including image recognition, object detection, facial recognition, and video analysis. Features real-time processing and custom model development.',
    shortDescription: 'Advanced computer vision solutions for image and video analysis',
    category: 'ai',
    subcategory: 'computer-vision',
    icon: '👁️',
    pricing: {
      starting: 2200,
      currency: 'USD',
      billing: 'month',
      features: ['Image recognition', 'Object detection', 'Facial recognition', 'Video analysis']
    },
    features: [
      'Image classification and recognition',
      'Object detection and tracking',
      'Facial recognition and analysis',
      'Video content analysis',
      'OCR and text extraction',
      'Medical image analysis',
      'Quality inspection',
      'Real-time processing',
      'Custom model training',
      'Edge deployment'
    ],
    benefits: [
      'Automate visual inspection',
      'Improve security systems',
      'Enhance user experience',
      'Reduce manual work',
      'Enable new applications'
    ],
    useCases: [
      'Quality control',
      'Security surveillance',
      'Medical diagnosis',
      'Autonomous vehicles',
      'Retail analytics'
    ],
    targetAudience: ['Manufacturing companies', 'Security firms', 'Healthcare providers', 'Retail chains', 'Automotive industry'],
    technicalSpecs: {
      api: true,
      integrations: ['OpenCV', 'TensorFlow', 'PyTorch', 'AWS Rekognition', 'Google Vision API'],
      deployment: ['Cloud', 'Edge', 'Mobile'],
      scalability: 'Unlimited images'
    },
    marketPrice: {
      min: 1200,
      max: 12000,
      average: 4500
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-computer-vision'
    },
    path: '/ai-computer-vision'
  }
];

export const itServices: Service[] = [
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Solutions',
    description: 'Comprehensive cloud infrastructure services including migration, optimization, and management. Features multi-cloud strategies, cost optimization, and 99.9% uptime guarantee.',
    shortDescription: 'Complete cloud infrastructure migration, optimization, and management services',
    category: 'it',
    subcategory: 'cloud',
    icon: '☁️',
    pricing: {
      starting: 1500,
      currency: 'USD',
      billing: 'month',
      features: ['Cloud migration', 'Infrastructure optimization', '24/7 monitoring', 'Security management']
    },
    features: [
      'Cloud migration planning',
      'Infrastructure optimization',
      'Multi-cloud strategies',
      'Cost optimization',
      'Security implementation',
      'Disaster recovery',
      'Backup solutions',
      'Performance monitoring',
      'Compliance management',
      '24/7 support'
    ],
    benefits: [
      'Reduce infrastructure costs',
      'Improve scalability',
      'Enhance security',
      'Increase reliability',
      'Simplify management'
    ],
    useCases: [
      'Digital transformation',
      'Application migration',
      'Disaster recovery',
      'Cost optimization',
      'Compliance requirements'
    ],
    targetAudience: ['Enterprise companies', 'SMBs', 'Startups', 'Government agencies', 'Healthcare organizations'],
    technicalSpecs: {
      api: true,
      integrations: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Docker'],
      deployment: ['Cloud', 'Hybrid'],
      scalability: 'Unlimited'
    },
    marketPrice: {
      min: 800,
      max: 5000,
      average: 2500
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    path: '/cloud-infrastructure'
  },
  {
    id: 'cybersecurity-solutions',
    name: 'Cybersecurity Solutions',
    description: 'Advanced cybersecurity services including threat detection, vulnerability assessment, penetration testing, and security monitoring. Features 24/7 SOC services and compliance management.',
    shortDescription: 'Comprehensive cybersecurity services with threat detection and compliance management',
    category: 'it',
    subcategory: 'security',
    icon: '🛡️',
    pricing: {
      starting: 2000,
      currency: 'USD',
      billing: 'month',
      features: ['Threat detection', 'Vulnerability assessment', '24/7 monitoring', 'Compliance management']
    },
    features: [
      'Threat detection and response',
      'Vulnerability assessment',
      'Penetration testing',
      'Security monitoring',
      'Incident response',
      'Compliance management',
      'Security training',
      'Risk assessment',
      'Security audits',
      '24/7 SOC services'
    ],
    benefits: [
      'Protect against cyber threats',
      'Ensure compliance',
      'Reduce security risks',
      'Improve security posture',
      'Minimize downtime'
    ],
    useCases: [
      'Data protection',
      'Compliance requirements',
      'Threat prevention',
      'Security audits',
      'Incident response'
    ],
    targetAudience: ['Enterprise companies', 'Financial institutions', 'Healthcare organizations', 'Government agencies', 'E-commerce platforms'],
    technicalSpecs: {
      api: true,
      integrations: ['SIEM systems', 'Firewalls', 'EDR solutions', 'Cloud platforms', 'Identity providers'],
      deployment: ['Cloud', 'On-premise', 'Hybrid'],
      scalability: 'Unlimited endpoints'
    },
    marketPrice: {
      min: 1000,
      max: 15000,
      average: 5000
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/cybersecurity-solutions'
    },
    path: '/cybersecurity-solutions'
  }
];

export const specializedServices: Service[] = [
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    description: 'Next-generation quantum computing services including quantum algorithm development, quantum machine learning, and quantum optimization. Features access to leading quantum hardware and software platforms.',
    shortDescription: 'Advanced quantum computing solutions for complex problem solving and optimization',
    category: 'specialized',
    subcategory: 'quantum',
    icon: '⚛️',
    pricing: {
      starting: 5000,
      currency: 'USD',
      billing: 'month',
      features: ['Quantum algorithm development', 'Quantum ML', 'Hardware access', 'Expert consultation']
    },
    features: [
      'Quantum algorithm development',
      'Quantum machine learning',
      'Quantum optimization',
      'Quantum simulation',
      'Hardware access',
      'Expert consultation',
      'Custom solutions',
      'Performance optimization',
      'Documentation',
      'Training programs'
    ],
    benefits: [
      'Solve complex optimization problems',
      'Accelerate machine learning',
      'Enable new applications',
      'Gain competitive advantage',
      'Future-proof technology'
    ],
    useCases: [
      'Financial modeling',
      'Drug discovery',
      'Supply chain optimization',
      'Cryptography',
      'Climate modeling'
    ],
    targetAudience: ['Research institutions', 'Financial services', 'Pharmaceutical companies', 'Government agencies', 'Tech companies'],
    technicalSpecs: {
      api: true,
      integrations: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum', 'Rigetti', 'IonQ'],
      deployment: ['Cloud', 'On-premise'],
      scalability: 'Custom'
    },
    marketPrice: {
      min: 3000,
      max: 50000,
      average: 15000
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/quantum-computing'
    },
    path: '/quantum-computing'
  },
  {
    id: 'autonomous-systems',
    name: 'Autonomous Systems Development',
    description: 'Advanced autonomous systems including self-driving vehicles, robotic process automation, and intelligent IoT systems. Features AI-powered decision making and real-time adaptation.',
    shortDescription: 'Development of autonomous systems with AI-powered decision making and adaptation',
    category: 'specialized',
    subcategory: 'autonomous',
    icon: '🤖',
    pricing: {
      starting: 8000,
      currency: 'USD',
      billing: 'month',
      features: ['System design', 'AI integration', 'Testing and validation', 'Deployment support']
    },
    features: [
      'Autonomous vehicle development',
      'Robotic process automation',
      'Intelligent IoT systems',
      'AI decision making',
      'Real-time adaptation',
      'Safety systems',
      'Performance optimization',
      'Testing and validation',
      'Deployment support',
      'Maintenance services'
    ],
    benefits: [
      'Reduce operational costs',
      'Improve efficiency',
      'Enable new capabilities',
      'Enhance safety',
      'Scale operations'
    ],
    useCases: [
      'Autonomous vehicles',
      'Manufacturing automation',
      'Smart cities',
      'Agricultural automation',
      'Logistics optimization'
    ],
    targetAudience: ['Automotive companies', 'Manufacturing firms', 'Logistics companies', 'Government agencies', 'Tech startups'],
    technicalSpecs: {
      api: true,
      integrations: ['ROS', 'TensorFlow', 'PyTorch', 'AWS IoT', 'Azure IoT'],
      deployment: ['Edge', 'Cloud', 'Hybrid'],
      scalability: 'Custom'
    },
    marketPrice: {
      min: 5000,
      max: 100000,
      average: 25000
    },
    contactInfo: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/autonomous-systems'
    },
    path: '/autonomous-systems'
  }
];

export const allServices = [...microSaasServices, ...aiServices, ...itServices, ...specializedServices];

export const getServiceById = (id: string): Service | undefined => {
  return allServices.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return allServices.filter(service => service.category === category);
};

export const getPopularServices = (): Service[] => {
  return allServices.filter(service => service.isPopular);
};

export const getNewServices = (): Service[] => {
  return allServices.filter(service => service.isNew);
};