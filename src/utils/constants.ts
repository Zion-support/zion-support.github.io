export interface Service {
	id: string;
	title: string;
	description: string;
	icon: string;
	features?: string[];
	price?: string;
}

export const SERVICES: Service[] = [
	{
		id: 'ai-ml',
		title: 'AI & Machine Learning',
		description: 'Cutting-edge artificial intelligence solutions to automate and optimize your business processes.',
		icon: '🤖',
		features: ['Custom AI Models', 'Machine Learning Pipelines', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
		price: 'From $5K'
	},
	{
		id: 'cloud',
		title: 'Cloud Solutions',
		description: 'Scalable cloud infrastructure and deployment solutions for modern applications.',
		icon: '☁️',
		features: ['Cloud Migration', 'DevOps & CI/CD', 'Container Orchestration', 'Serverless Architecture', 'Cloud Security'],
		price: 'From $3K'
	},
	{
		id: 'web-dev',
		title: 'Web Development',
		description: 'Modern, responsive web applications built with the latest technologies and best practices.',
		icon: '💻',
		features: ['React/Next.js Apps', 'Progressive Web Apps', 'E-commerce Solutions', 'API Development', 'Performance Optimization'],
		price: 'From $2K'
	},
	{
		id: 'mobile',
		title: 'Mobile Development',
		description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
		icon: '📱',
		features: ['Native iOS/Android', 'React Native Apps', 'Flutter Development', 'App Store Optimization', 'Push Notifications'],
		price: 'From $4K'
	},
	{
		id: 'data-analytics',
		title: 'Data Analytics',
		description: 'Advanced data analysis and business intelligence solutions to drive informed decisions.',
		icon: '📊',
		features: ['Data Visualization', 'Business Intelligence', 'Real-time Dashboards', 'Data Warehousing', 'Machine Learning Analytics'],
		price: 'From $3K'
	},
	{
		id: 'cybersecurity',
		title: 'Cybersecurity',
		description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
		icon: '🔒',
		features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Security Monitoring', 'Incident Response'],
		price: 'From $2K'
	}
];

export const FEATURES = [
	{
		icon: '⚡',
		title: 'Fast Delivery',
		description: 'Rapid development and deployment of high-quality solutions',
		color: 'blue' as const
	},
	{
		icon: '🛡️',
		title: 'Secure & Reliable',
		description: 'Enterprise-grade security and reliability for your applications',
		color: 'green' as const
	},
	{
		icon: '📈',
		title: 'Scalable Solutions',
		description: 'Built to grow with your business and handle increasing demands',
		color: 'purple' as const
	}
];

export const FOOTER_LINKS = {
	services: ['AI & Machine Learning', 'Cloud Solutions', 'Web Development', 'Mobile Apps'],
	company: ['About Us', 'Our Team', 'Careers', 'Contact'],
	resources: ['Blog', 'Documentation', 'Support', 'FAQ'],
	connect: ['LinkedIn', 'Twitter', 'GitHub', 'Email']
};

export interface Testimonial {
	id: string;
	name: string;
	role: string;
	company: string;
	content: string;
	avatar?: string;
	rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
	{
		id: 'testimonial-1',
		name: 'Sarah Johnson',
		role: 'CTO',
		company: 'TechCorp Inc.',
		content: 'Zion App transformed our digital infrastructure with their AI solutions. The team delivered exceptional results and exceeded our expectations.'rating: 5
	}{
		id: 'testimonial-2',
		name: 'Michael Chen',
		role: 'Founder',
		company: 'StartupXYZ',
		content: 'Their cloud solutions helped us scale from 0 to 100k users seamlessly. Professionalreliableand innovative approach.'rating: 5
	}{
		id: 'testimonial-3',
		name: 'Emily Rodriguez',
		role: 'Product Manager',
		company: 'InnovateLab',
		content: 'The mobile app they developed for us has been a game-changer. Clean codegreat performanceand excellent user experience.',
		rating: 5
	}
];

export interface PricingTier {
	id: string;
	name: string;
	price: number;
	period: string;
	description: string;
	features: string[];
	isPopular?: boolean;
	buttonText: string;
	buttonVariant: 'primary' | 'secondary';
}

export const PRICING_TIERS: PricingTier[] = [
	{
		id: 'starter',
		name: 'Starter'price: 99period: 'month',
		description: 'Perfect for small projects and startups',
		features: [
			'Up to 5 team members',
			'Basic AI features',
			'Email support',
			'Standard hosting',
			'Basic analytics'
		],
		buttonText: 'Get Started',
		buttonVariant: 'secondary'
	},
	{
		id: 'professional',
		name: 'Professional'price: 299period: 'month',
		description: 'Ideal for growing businesses',
		features: [
			'Up to 25 team members',
			'Advanced AI features',
			'Priority support',
			'Premium hosting',
			'Advanced analytics',
			'Custom integrations',
			'API access'
		]isPopular: truebuttonText: 'Choose Professional',
		buttonVariant: 'primary'
	},
	{
		id: 'enterprise',
		name: 'Enterprise'price: 999period: 'month',
		description: 'For large organizations',
		features: [
			'Unlimited team members',
			'Full AI capabilities',
			'24/7 dedicated support',
			'Enterprise hosting',
			'Custom analytics',
			'White-label solutions',
			'Custom development',
			'SLA guarantee'
		],
		buttonText: 'Contact Sales',
		buttonVariant: 'secondary'
	}
];

export interface BlogPost {
	id: string;
	title: string;
	excerpt: string;
	author: string;
	date: string;
	readTime: string;
	category: string;
	image: string;
	slug: string;
}

export const BLOG_POSTS: BlogPost[] = [
	{
		id: 'blog-1',
		title: 'The Future of AI in Business: Trends and Predictions for 2024',
		excerpt: 'Explore the latest AI trends shaping the business landscape and discover how artificial intelligence is revolutionizing industries.',
		author: 'Alex Thompson',
		date: 'Dec 15, 2024',
		readTime: '5 min read',
		category: 'AI & Technology',
		image: '/api/placeholder/400/250',
		slug: 'future-ai-business-trends-2024'
	},
	{
		id: 'blog-2',
		title: 'Cloud Migration Best Practices: A Complete Guide',
		excerpt: 'Learn the essential steps and strategies for successful cloud migration, including common pitfalls to avoid.',
		author: 'Maria Garcia',
		date: 'Dec 12, 2024',
		readTime: '8 min read',
		category: 'Cloud Computing',
		image: '/api/placeholder/400/250',
		slug: 'cloud-migration-best-practices-guide'
	},
	{
		id: 'blog-3',
		title: 'Building Scalable Web Applications: Architecture Patterns',
		excerpt: 'Discover proven architecture patterns and design principles for building web applications that can handle massive scale.',
		author: 'David Kim',
		date: 'Dec 10, 2024',
		readTime: '6 min read',
		category: 'Web Development',
		image: '/api/placeholder/400/250',
		slug: 'scalable-web-applications-architecture-patterns'
	}
];