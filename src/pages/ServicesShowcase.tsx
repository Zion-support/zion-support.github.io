import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Rocket, Target } from 'lucide-react';
interface Service {
	name: string;
	description: string;
	href: string;
	features: string[];
}
interface ServiceCategory {
	category: string;
	icon: React.ComponentType<{ className?: string }>;
	services: Service[];
}
const ServicesShowcase: React.FC = () => {
	const services: ServiceCategory[] = [
		{
			category: 'AI & Machine Learning',
			icon: Brain,
			services: [
				{
					name: 'AI Business Intelligence',
					description: 'Advanced analytics and business intelligence powered by artificial intelligence',
					href: '/services/ai-business-intelligence',
					features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards'],
				},
				{
					name: 'AI Marketing Automation',
					description: 'Intelligent marketing automation with AI-driven optimization',
					href: '/services/ai-marketing-automation',
					features: ['Campaign Optimization', 'Customer Segmentation', 'ROI Tracking'],
				},
				{
					name: 'AI Workflow Automation',
					description: 'Streamline business processes with intelligent automation',
					href: '/services/ai-workflow-automation',
					features: ['Process Optimization', 'Error Reduction', 'Efficiency Gains'],
				},
			],
		},
		{
			category: 'Cloud & Infrastructure',
			icon: Cloud,
			services: [
				{
					name: 'Cloud & DevOps',
					description: 'Comprehensive cloud infrastructure and DevOps automation',
					href: '/services/cloud',
					features: ['Multi-cloud Strategy', 'CI/CD Pipelines', 'Infrastructure as Code'],
				},
				{
					name: 'IT Infrastructure',
					description: 'Enterprise-grade IT infrastructure solutions',
					href: '/services/infrastructure',
					features: ['Network Design', 'Security Implementation', 'Scalability Planning'],
				},
				{
					name: 'Digital Transformation',
					description: 'End-to-end digital transformation consulting and implementation',
					href: '/services/transformation',
					features: ['Strategy Development', 'Technology Selection', 'Change Management'],
				},
			],
		},
		{
			category: 'Cybersecurity & Compliance',
			icon: Shield,
			services: [
				{
					name: 'Cybersecurity Services',
					description: 'Comprehensive cybersecurity solutions for modern threats',
					href: '/services/cybersecurity',
					features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response'],
				},
				{
					name: 'SOC2 Compliance Automation',
					description: 'Automated SOC2 compliance and audit preparation',
					href: '/soc2-compliance-automation',
					features: ['Compliance Monitoring', 'Audit Preparation', 'Risk Management'],
				},
				{
					name: 'Zero Trust Architecture',
					description: 'Modern zero trust security implementation',
					href: '/zero-trust-network-architecture',
					features: ['Identity Verification', 'Access Control', 'Continuous Monitoring'],
				},
			],
		},
		{
			category: 'Emerging Technologies',
			icon: Rocket,
			services: [
				{
					name: 'Quantum Technology',
					description: 'Next-generation quantum computing solutions',
					href: '/quantum-technology',
					features: ['Quantum Algorithms', 'Quantum Security', 'Research & Development'],
				},
				{
					name: 'Space Technology',
					description: 'Innovative space technology and satellite solutions',
					href: '/space-tech',
					features: ['Satellite Systems', 'Space Analytics', 'Ground Station Solutions'],
				},
				{
					name: '5G Enterprise Solutions',
					description: 'Enterprise-grade 5G network optimization',
					href: '/5g-enterprise-solutions',
					features: ['Network Optimization', 'Edge Computing', 'IoT Integration'],
				},
			],
		},
		{
			category: 'Specialized Solutions',
			icon: Target,
			services: [
				{
					name: 'AI-Powered IT Asset Management',
					description: 'Intelligent IT asset lifecycle management',
					href: '/ai-powered-it-asset-management',
					features: ['Asset Tracking', 'Predictive Maintenance', 'Cost Optimization'],
				},
				{
					name: 'Autonomous Business Operations',
					description: 'AI-driven business process automation platform',
					href: '/autonomous-business-operations-platform',
					features: ['Process Automation', 'Decision Support', 'Performance Analytics'],
				},
				{
					name: 'Micro SAAS Services',
					description: 'Specialized software-as-a-service solutions',
					href: '/micro-saas-services',
					features: ['Custom Development', 'Scalable Architecture', 'API Integration'],
				},
			],
		},
	];
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};
	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
			{/* Hero Section */}
			<div className="relative overflow-hidden">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center"
					>
						<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
							<span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
								Services Showcase
							</span>
						</h1>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
							Discover our comprehensive portfolio of cutting-edge technology solutions, from AI and cloud services to emerging technologies and specialized enterprise solutions.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link
								to="/contact"
								className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
							>
								Get Started
							</Link>
							<Link
								to="/comprehensive-pricing-2025"
								className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
							>
								View Pricing
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
			{/* Services Grid */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="space-y-16"
				>
					{services.map((category, categoryIndex) => (
						<motion.div key={category.category} variants={itemVariants}>
							<div className="text-center mb-12">
								<div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-4">
									<category.icon className="w-8 h-8 text-white" />
								</div>
								<h2 className="text-3xl font-bold text-white mb-4">{category.category}</h2>
								<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{category.services.map((service, serviceIndex) => (
									<motion.div
										key={service.name}
										variants={itemVariants}
										className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-blue-500/50 transition-all duration-300 group"
									>
										<div className="mb-4">
											<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
												{service.name}
											</h3>
											<p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
										</div>
										<div className="mb-6">
											<h4 className="text-sm font-medium text-gray-300 mb-3">Key Features:</h4>
											<ul className="space-y-2">
												{service.features.map((feature, featureIndex) => (
													<li key={featureIndex} className="flex items-center text-sm text-gray-400">
														<div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
														{feature}
													</li>
												))}
											</ul>
										</div>
										<Link
											to={service.href}
											className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
										>
											Learn More
											<svg
												className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
											</svg>
										</Link>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
			{/* CTA Section */}
			<div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-t border-blue-500/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center"
					>
						<h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
						<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
							Let our team of experts help you implement the right technology solutions to drive growth and innovation in your organization.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link
								to="/contact"
								className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
							>
								Schedule Consultation
							</Link>
							<Link
								to="/case-studies"
								className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
							>
								View Case Studies
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
export default ServicesShowcase;
