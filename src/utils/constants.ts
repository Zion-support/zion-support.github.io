export interface Service {
	id: string;
	title: string;
	description: string;
	icon: string;
}

export const SERVICES: Service[] = [
	{
		id: 'ai-ml',
		title: 'AI & Machine Learning',
		description: 'Cutting-edge artificial intelligence solutions to automate and optimize your business processes.',
		icon: '🤖'
	},
	{
		id: 'cloud',
		title: 'Cloud Solutions',
		description: 'Scalable cloud infrastructure and deployment solutions for modern applications.',
		icon: '☁️'
	},
	{
		id: 'web-dev',
		title: 'Web Development',
		description: 'Modern, responsive web applications built with the latest technologies and best practices.',
		icon: '💻'
	},
	{
		id: 'mobile',
		title: 'Mobile Development',
		description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
		icon: '📱'
	},
	{
		id: 'data-analytics',
		title: 'Data Analytics',
		description: 'Advanced data analysis and business intelligence solutions to drive informed decisions.',
		icon: '📊'
	},
	{
		id: 'cybersecurity',
		title: 'Cybersecurity',
		description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
		icon: '🔒'
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