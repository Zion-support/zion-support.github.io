export interface Service {
	id: string;
	name: string;
	category: 'AI Services' | 'IT Services' | 'Micro SAAS' | 'Blockchain' | 'IoT & Edge' | 'Cybersecurity' | 'Cloud & DevOps' | 'Data & Analytics';
	description: string;
	features: string[];
	pricing: {
		starter: string;
		professional: string;
		enterprise: string;
		custom?: string;
	};
	technologyStack: string[];
	benefits: string[];
	useCases: string[];
	status: 'active' | 'beta' | 'coming-soon';
	priority: number;
	demoUrl?: string;
	documentationUrl?: string;
	contactInfo: {
		email: string;
		phone: string;
		address: string;
	};
}

export const services: Service[] = [
	// AI Services
	{
		id: 'ai-code-assistant',
		name: 'ZionAI Code Assistant',
		category: 'AI Services',
		description:
			'Advanced AI-powered code generation, review, and optimization platform with context-aware suggestions and multi-language support.',
		features: [
			'Real-time code completion and suggestions',
			'Automated code review and optimization',
			'Multi-language support (Python, JavaScript, Go, Rust)',
			'Security vulnerability detection',
			'Code documentation generation',
			'Integration with popular IDEs',
			'Custom model fine-tuning for enterprise codebases',
		],
		pricing: {
			starter: '$29/month',
			professional: '$99/month',
			enterprise: '$299/month',
			custom: 'Contact for enterprise pricing',
		},
		technologyStack: ['OpenAI GPT-4', 'Claude 3', 'Python', 'React', 'Node.js', 'PostgreSQL'],
		benefits: [
			'Reduce development time by 40-60%',
			'Improve code quality and security',
			'Lower maintenance costs',
			'Accelerate team onboarding',
			'24/7 AI assistance',
		],
		useCases: [
			'Software development teams',
			'Startups and scale-ups',
			'Enterprise development',
			'Freelance developers',
			'Educational institutions',
		],
		status: 'active',
		priority: 1,
		demoUrl: 'https://ziontechgroup.com/demo/ai-code-assistant',
		documentationUrl: 'https://ziontechgroup.com/docs/ai-code-assistant',
		contactInfo: {
			email: 'kleber@ziontechgroup.com',
			phone: '+1 302 464 0950',
			address: '364 E Main St STE 1008 Middletown DE 19709',
		},
	},
	{
		id: 'ai-content-generator',
		name: 'ContentForge AI',
		category: 'AI Services',
		description:
			'Enterprise-grade AI content generation platform for marketing, documentation, and creative writing with brand voice consistency.',
		features: [
			'Multi-format content generation (blogs, emails, social media)',
			'Brand voice training and consistency',
			'SEO optimization and keyword research',
			'Multi-language content creation',
			'Plagiarism detection and originality scoring',
			'Content performance analytics',
			'Team collaboration and approval workflows',
		],
		pricing: {
			starter: '$49/month',
			professional: '$149/month',
			enterprise: '$399/month',
		},
		technologyStack: ['GPT-4', 'Claude 3', 'BERT', 'React', 'FastAPI', 'MongoDB'],
		benefits: [
			'10x faster content creation',
			'Consistent brand messaging',
			'Improved SEO performance',
			'Cost-effective content marketing',
			'Scalable content operations',
		],
		useCases: [
			'Marketing agencies',
			'E-commerce businesses',
			'Content creators',
			'Enterprise marketing teams',
			'Educational institutions',
		],
		status: 'active',
		priority: 2,
		demoUrl: 'https://ziontechgroup.com/demo/content-forge',
		contactInfo: {
			email: 'kleber@ziontechgroup.com',
			phone: '+1 302 464 0950',
			address: '364 E Main St STE 1008 Middletown DE 19709',
		},
	},
	{
		id: 'ai-data-analytics',
		name: 'InsightAI Analytics',
		category: 'AI Services',
		description:
			'Intelligent data analytics platform with predictive modeling, automated insights, and interactive visualizations powered by machine learning.',
		features: [
			'Automated data preprocessing and cleaning',
			'Predictive modeling and forecasting',
			'Natural language query interface',
			'Real-time data streaming analytics',
			'Custom dashboard builder',
			'Anomaly detection and alerting',
			'Integration with 100+ data sources',
		],
		pricing: {
			starter: '$79/month',
			professional: '$199/month',
			enterprise: '$599/month',
		},
		technologyStack: ['Python', 'TensorFlow', 'PyTorch', 'React', 'FastAPI', 'Apache Kafka'],
		benefits: [
			'Uncover hidden patterns in data',
			'Make data-driven decisions faster',
			'Reduce manual analysis time by 80%',
			'Predict future trends accurately',
			'Real-time business intelligence',
		],
		useCases: [
			'Financial services',
			'Healthcare analytics',
			'E-commerce optimization',
			'Supply chain management',
			'Marketing analytics',
		],
		status: 'active',
		priority: 3,
		demoUrl: 'https://ziontechgroup.com/demo/insight-ai',
		contactInfo: {
			email: 'kleber@ziontechgroup.com',
			phone: '+1 302 464 0950',
			address: '364 E Main St STE 1008 Middletown DE 19709',
		},
	},

	// New content: AI Compliance Copilot
	{
		id: 'ai-compliance-copilot',
		name: 'AI Compliance Copilot',
		category: 'AI Services',
		description:
			'Automate SOC2/ISO27001 evidence collection and policy upkeep with AI workflows.',
		features: [
			'Automated evidence collection',
			'Continuous control monitoring',
			'Policy drafting and updates',
			'Audit-ready reports',
			'Integrations with Jira, GitHub, Okta',
		],
		pricing: {
			starter: '$199/month',
			professional: '$499/month',
			enterprise: '$1,299/month',
		},
		technologyStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'OpenAI API'],
		benefits: [
			'Reduce audit prep time by 80%',
			'Up-to-date compliance posture',
			'Lower operational overhead',
			'Single source of truth',
		],
		useCases: [
			'SOC2 automation',
			'ISO27001 compliance',
			'Evidence collection',
			'Policy lifecycle management',
		],
		status: 'active',
		priority: 0,
		demoUrl: 'https://ziontechgroup.com/demo/ai-compliance-copilot',
		contactInfo: {
			email: 'kleber@ziontechgroup.com',
			phone: '+1 302 464 0950',
			address: '364 E Main St STE 1008 Middletown DE 19709',
		},
	},
]

export const getServicesByCategory = (category: Service['category']) => {
	return services.filter((service) => service.category === category)
}

export const getServiceById = (id: string) => {
	return services.find((service) => service.id === id)
}

export const getCategories = () => {
	return Array.from(new Set(services.map((service) => service.category)))
}
