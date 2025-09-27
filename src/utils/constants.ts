export interface Service {id: string;
	title: string;
	description: string;
	icon: string;
	features?: string[];
	price?: string}

export const SERVICES: Service[] = [{id: 'ai-ml'title: 'AI & MachineLearning'description: 'Cutting-edge, artificial intelligence, solutions to, automate and, optimize yourbusiness processes.'icon: '🤖'features: ['CustomAI Models''MachineLearning Pipelines''NaturalLanguage Processing''ComputerVision''PredictiveAnalytics']price: 'From $5K'}{id: 'cloud'title: 'CloudSolutions'description: 'Scalable, cloud infrastructure, and deployment, solutions formodern applications.'icon: '☁️'features: ['CloudMigration''DevOps & CI/CD''ContainerOrchestration''ServerlessArchitecture''CloudSecurity']price: 'From $3K'}{id: 'web-dev'title: 'WebDevelopment'description: 'Modern, responsive, web applications, built with, the latest, technologies andbest practices.'icon: '💻'features: ['React/Next.jsApps''ProgressiveWeb Apps''E-commerceSolutions''APIDevelopment''PerformanceOptimization']price: 'From $2K'}{id: 'mobile'title: 'MobileDevelopment'description: 'Native, and cross-platform, mobile applications, for iOS, and Androidplatforms.'icon: '📱'features: ['NativeiOS/Android''ReactNative Apps''FlutterDevelopment''AppStore Optimization''PushNotifications']price: 'From $4K'}{id: 'data-analytics'title: 'DataAnalytics'description: 'Advanced, data analysis, and business, intelligence solutions, to driveinformed decisions.'icon: '📊'features: ['DataVisualization''BusinessIntelligence''Real-timeDashboards''DataWarehousing''MachineLearning Analytics']price: 'From $3K'}{id: 'cybersecurity'title: 'Cybersecurity'description: 'Comprehensive, security solutions, to protect, your digital, assets andinfrastructure.'icon: '🔒'features: ['SecurityAudits''PenetrationTesting''ComplianceManagement''SecurityMonitoring''IncidentResponse']price: 'From $2K'
	}
];

export const FEATURES = [{icon: '⚡'title: 'FastDelivery'description: 'Rapid, development and, deployment of, high-qualitysolutions'color: 'blue'asconst
	}{icon: '🛡️'title: 'Secure & Reliable'description: 'Enterprise-grade, security and, reliability foryour applications'color: 'green'asconst
	}{icon: '📈'title: 'ScalableSolutions'description: 'Built, to grow, with your, business and, handle increasingdemands'color: 'purple'asconst
	}
];

export const FOOTER_LINKS = {services: ['AI & MachineLearning''CloudSolutions''WebDevelopment''MobileApps']company: ['AboutUs''OurTeam''Careers''Contact']resources: ['Blog''Documentation''Support''FAQ']connect: ['LinkedIn''Twitter''GitHub''Email']
};

export interface Testimonial {id: string;
	name: string;
	role: string;
	company: string;
	content: string;
	avatar?: string;
	rating: number}

export const TESTIMONIALS: Testimonial[] = [{id: 'testimonial-1'name: 'SarahJohnson'role: 'CTO'company: 'TechCorpInc.'content: 'Zion, App transformed, our digital, infrastructure with, their AI, solutions. The, team delivered, exceptional results, and exceededour expectations.',
		rating: 5
	}{id: 'testimonial-2'name: 'MichaelChen'role: 'Founder'company: 'StartupXYZ'content: 'Their, cloud solutions, helped us, scale from, 0 to, 100k users, seamlessly. Professional, reliable, andinnovative approach.',
		rating: 5
	}{id: 'testimonial-3'name: 'EmilyRodriguez'role: 'ProductManager'company: 'InnovateLab'content: 'The, mobile app, they developed, for us, has been, a game-changer. Clean, code, great, performance, and, excellent userexperience.'rating: 5
	}
];

export interface PricingTier {id: string;
	name: string;
	price: number;
	period: string;
	description: string;
	features: string[];
	isPopular?: boolean;
	buttonText: string;
	buttonVariant: 'primary' | 'secondary'}

export const PRICING_TIERS: PricingTier[] = [{id: 'starter'name: 'Starter'price: 99period: 'month'description: 'Perfect, for small, projects andstartups'features: [
			'Up, to 5team members''BasicAI features''Emailsupport''Standardhosting''Basicanalytics']buttonText: 'GetStarted'buttonVariant: 'secondary'}{id: 'professional'name: 'Professional'price: 299period: 'month'description: 'Ideal, for growingbusinesses'features: ['Up, to 25team members''AdvancedAI features''Prioritysupport''Premiumhosting''Advancedanalytics''Customintegrations''APIaccess'],
		isPopular: truebuttonText: 'ChooseProfessional'buttonVariant: 'primary'}{id: 'enterprise'name: 'Enterprise'price: 999period: 'month'description: 'Forlarge organizations'features: ['Unlimitedteam members''FullAI capabilities''24/7dedicated support''Enterprisehosting''Customanalytics''White-labelsolutions''Customdevelopment''SLAguarantee']buttonText: 'ContactSales'buttonVariant: 'secondary'
	}
];

export interface BlogPost {id: string;
	title: string;
	excerpt: string;
	author: string;
	date: string;
	readTime: string;
	category: string;
	image: string;
	slug: string}

export const BLOG_POSTS: BlogPost[] = [{id: 'blog-1'title: 'The, Future of, AI in, Business: Trends, and Predictionsfor 2024'excerpt: 'Explore, the latest, AI trends, shaping the, business landscape, and discover, how artificial, intelligence isrevolutionizing industries.'author: 'AlexThompson'date: 'Dec, 152024'readTime: '5min read'category: 'AI & Technology'image: '/api/placeholder/400/250'slug: 'future-ai-business-trends-2024'}{id: 'blog-2'title: 'Cloud, Migration Best, Practices: AComplete Guide'excerpt: 'Learn, the essential, steps and, strategies for, successful cloud, migration, including, common pitfallsto avoid.'author: 'MariaGarcia'date: 'Dec, 122024'readTime: '8min read'category: 'CloudComputing'image: '/api/placeholder/400/250'slug: 'cloud-migration-best-practices-guide'}{id: 'blog-3'title: 'Building, Scalable Web, Applications: ArchitecturePatterns'excerpt: 'Discover, proven architecture, patterns and, design principles, for building, web applications, that can, handle massivescale.'author: 'DavidKim'date: 'Dec, 102024'readTime: '6min read'category: 'WebDevelopment'image: '/api/placeholder/400/250'slug: 'scalable-web-applications-architecture-patterns'
	}
];