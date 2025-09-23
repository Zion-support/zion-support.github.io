

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
	{
		id: 'ai-code-assistant',
		name: 'ZionAI Code Assistant',
		category: 'AI Services',
		description: 'AI-powered code generation and review platform.',
		features: ['Code completion', 'Code review', 'Docs generation'],
		pricing: { starter: '$29/month', professional: '$99/month', enterprise: '$299/month' },
		technologyStack: ['OpenAI', 'TypeScript', 'React'],
		benefits: ['Faster development'],
		useCases: ['Software teams'],
		status: 'active',
		priority: 1,
		demoUrl: 'https://ziontechgroup.com/demo/ai-code-assistant',
		documentationUrl: 'https://ziontechgroup.com/docs/ai-code-assistant',
		contactInfo: { email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950', address: '364 E Main St STE 1008 Middletown DE 19709' }
	}
];

export const getCategories = () => {
	return Array.from(new Set(services.map((service) => service.category)));
};

