import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
	Rocket, 
	Brain, 
	Shield, 
	Database, 
	Cloud, 
	Zap, 
	Globe, 
	TrendingUp,
	Users,
	Target,
	CheckCircle,
	Star,
	ArrowRight,
	Phone,
	Mail,
	MapPin
} from 'lucide-react';

const ComprehensiveServicesShowcase2025: React.FC = () => {
	const contactInfo = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709'
	};

	const serviceCategories = [
		{
			name: 'Micro SaaS Solutions',
			description: 'Revolutionary micro SaaS products that transform business operations',
			icon: <Rocket className="w-8 h-8" />,
			services: [
				{
					title: 'AI Content Optimizer Pro',
					price: '$199/month',
					description: 'Advanced content optimization using AI to improve SEO, readability, and engagement',
					features: ['AI-powered SEO optimization', 'Content readability scoring', 'Multi-language support', 'Performance analytics', 'Automated A/B testing'],
					benefits: ['Increase organic traffic by 300%', 'Improve content engagement by 150%', 'Reduce content creation time by 60%']
				},
				{
					title: 'Smart Contract Risk Scanner',
					price: '$299/month',
					description: 'Continuous vulnerability scanning and risk assessment for blockchain smart contracts',
					features: ['Real-time vulnerability detection', 'Automated security scoring', 'Compliance reporting', 'Integration with major blockchains', '24/7 monitoring dashboard'],
					benefits: ['Prevent smart contract exploits', 'Ensure regulatory compliance', 'Protect digital assets worth millions']
				},
				{
					title: 'AI Inventory Optimization Suite',
					price: '$349/month',
					description: 'Intelligent inventory management system that predicts demand and optimizes stock levels',
					features: ['Demand forecasting with 95% accuracy', 'Automated reorder points', 'Seasonal trend analysis', 'Supplier performance tracking', 'Real-time inventory alerts'],
					benefits: ['Reduce inventory costs by 25%', 'Eliminate stockouts and overstock', 'Improve cash flow management']
				}
			]
		},
		{
			name: 'AI Solutions & Machine Learning',
			description: 'Cutting-edge AI solutions that drive business transformation',
			icon: <Brain className="w-8 h-8" />,
			services: [
				{
					title: 'Autonomous Business Manager',
					price: '$2,999/month',
					description: 'AI-powered business management system that autonomously handles operations and decision-making',
					features: ['Autonomous decision making', 'Predictive business modeling', 'Resource optimization', 'Risk assessment', 'Continuous learning'],
					benefits: ['Reduce operational costs by 40%', 'Improve decision accuracy by 85%', 'Enable 24/7 business operations']
				},
				{
					title: 'Quantum AI Drug Discovery Platform',
					price: '$15,000/month',
					description: 'Revolutionary drug discovery platform combining quantum computing with AI',
					features: ['Quantum molecular modeling', 'AI-powered drug screening', 'Protein folding prediction', 'Clinical trial optimization', 'Regulatory compliance tools'],
					benefits: ['Accelerate drug discovery by 10x', 'Reduce development costs by 60%', 'Improve success rates in clinical trials']
				},
				{
					title: 'AI Climate Modeling & Prediction',
					price: '$8,999/month',
					description: 'Advanced climate modeling system using AI to predict weather patterns and climate change impacts',
					features: ['Climate pattern prediction', 'Risk assessment models', 'Real-time monitoring', 'Policy impact analysis', 'Global data integration'],
					benefits: ['Improve climate prediction accuracy by 90%', 'Enable proactive disaster response', 'Support sustainable policy development']
				}
			]
		},
		{
			name: 'IT Infrastructure & Cloud Services',
			description: 'Enterprise-grade IT solutions for modern businesses',
			icon: <Cloud className="w-8 h-8" />,
			services: [
				{
					title: 'Zero Trust Network Architecture',
					price: '$15,000/project',
					description: 'Comprehensive zero trust security implementation with continuous verification',
					features: ['Identity verification', 'Micro-segmentation', 'Continuous monitoring', 'Threat detection', 'Compliance reporting'],
					benefits: ['Reduce security breaches by 95%', 'Ensure regulatory compliance', 'Protect against advanced threats']
				},
				{
					title: 'Quantum Cloud Infrastructure',
					price: '$50,000/project',
					description: 'Next-generation cloud infrastructure leveraging quantum computing principles',
					features: ['Quantum cloud architecture', 'Hybrid quantum-classical', 'Quantum networking', 'Performance optimization', 'Scalable infrastructure'],
					benefits: ['Achieve quantum advantage', 'Process complex calculations 1000x faster', 'Future-proof your infrastructure']
				},
				{
					title: 'AI DevOps Automation Platform',
					price: '$8,999/month',
					description: 'Intelligent DevOps automation using AI to optimize CI/CD pipelines and deployment strategies',
					features: ['AI-powered CI/CD optimization', 'Automated deployment strategies', 'Infrastructure as code', 'Performance monitoring', 'Disaster recovery automation'],
					benefits: ['Reduce deployment time by 80%', 'Eliminate human errors', 'Improve system reliability by 99.9%']
				}
			]
		},
		{
			name: 'Emerging Technologies',
			description: 'Revolutionary technologies that define the future',
			icon: <Zap className="w-8 h-8" />,
			services: [
				{
					title: 'Quantum Machine Learning Platform',
					price: '$25,000/month',
					description: 'Revolutionary machine learning platform using quantum computing for unprecedented AI model training',
					features: ['Quantum neural networks', 'Quantum feature selection', 'Model optimization', 'Training acceleration', 'Research collaboration tools'],
					benefits: ['Train AI models 100x faster', 'Solve previously impossible problems', 'Achieve quantum advantage in ML']
				},
				{
					title: 'AI Biotechnology Platform',
					price: '$18,000/month',
					description: 'Advanced biotechnology platform using AI for genetic engineering and synthetic biology',
					features: ['AI genetic engineering', 'Protein design algorithms', 'Synthetic biology tools', 'Lab automation', 'Regulatory compliance'],
					benefits: ['Accelerate biotech research by 5x', 'Reduce lab costs by 40%', 'Enable breakthrough discoveries']
				},
				{
					title: 'Quantum Communications Network',
					price: '$35,000/project',
					description: 'Secure quantum communication network using quantum key distribution for unbreakable encryption',
					features: ['Quantum key distribution', 'Quantum repeaters', 'Secure communication', 'Network infrastructure', 'Global connectivity'],
					benefits: ['Unbreakable encryption', 'Secure communication across any distance', 'Future-proof security']
				}
			]
		},
		{
			name: 'FinTech & DeFi Solutions',
			description: 'Innovative financial technology solutions for the digital economy',
			icon: <TrendingUp className="w-8 h-8" />,
			services: [
				{
					title: 'Quantum Trading Algorithm Platform',
					price: '$45,000/month',
					description: 'Revolutionary trading platform using quantum algorithms for high-frequency trading and risk management',
					features: ['Quantum trading algorithms', 'Real-time risk management', 'Portfolio optimization', 'Market prediction', 'Regulatory compliance'],
					benefits: ['Increase trading profits by 200%', 'Reduce risk exposure by 80%', 'Achieve market advantage']
				},
				{
					title: 'AI DeFi Protocol Optimizer',
					price: '$8,999/month',
					description: 'Intelligent DeFi protocol optimization using AI for yield farming and liquidity management',
					features: ['AI yield optimization', 'Liquidity management', 'Risk assessment', 'Protocol analysis', 'Automated strategies'],
					benefits: ['Maximize DeFi yields by 300%', 'Minimize impermanent loss', 'Automate DeFi strategies']
				},
				{
					title: 'AI Credit Scoring Platform',
					price: '$5,999/month',
					description: 'Advanced credit scoring using AI and alternative data for more accurate risk assessment',
					features: ['AI risk assessment', 'Alternative data analysis', 'Real-time scoring', 'Regulatory compliance', 'API integration'],
					benefits: ['Improve credit assessment accuracy by 40%', 'Enable financial inclusion', 'Reduce default rates']
				}
			]
		},
		{
			name: 'Healthcare & Biotechnology',
			description: 'Revolutionary healthcare solutions powered by AI and quantum computing',
			icon: <Users className="w-8 h-8" />,
			services: [
				{
					title: 'AI Medical Imaging Analysis',
					price: '$15,000/month',
					description: 'Advanced medical imaging analysis using AI for early disease detection and diagnosis',
					features: ['AI image analysis', 'Disease detection', 'Treatment planning', 'HIPAA compliance', 'Integration with PACS'],
					benefits: ['Improve diagnostic accuracy by 30%', 'Reduce diagnosis time by 60%', 'Enable early disease detection']
				},
				{
					title: 'Quantum Drug Discovery Platform',
					price: '$35,000/month',
					description: 'Revolutionary drug discovery platform using quantum computing for molecular modeling',
					features: ['Quantum molecular modeling', 'Drug screening', 'Clinical trial optimization', 'Regulatory compliance', 'Research collaboration'],
					benefits: ['Accelerate drug discovery by 20x', 'Reduce development costs by 70%', 'Improve success rates']
				},
				{
					title: 'AI Genomics Analysis Platform',
					price: '$12,000/month',
					description: 'Advanced genomics analysis using AI for genetic research and personalized medicine',
					features: ['AI genetic analysis', 'Personalized medicine', 'Disease prediction', 'Research tools', 'Data security'],
					benefits: ['Enable personalized medicine', 'Improve disease prediction accuracy', 'Accelerate genetic research']
				}
			]
		}
	];

	return (
		<>
			<Helmet>
				<title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
				<meta name="description" content="Discover our comprehensive range of innovative micro SAAS, IT services, and AI solutions. Transform your business with cutting-edge technology from Zion Tech Group." />
				<meta name="keywords" content="micro SAAS, IT services, AI solutions, quantum computing, blockchain, cybersecurity, cloud services, Zion Tech Group" />
				<link rel="canonical" href="https://ziontechgroup.com/services/comprehensive-showcase-2025" />
			</Helmet>

			<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
				{/* Hero Section */}
				<section className="relative py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto text-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
								Revolutionary Services
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
									{' '}Showcase 2025
								</span>
							</h1>
							<p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
								Discover our comprehensive range of innovative micro SAAS, IT services, and AI solutions that are transforming industries worldwide.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
								<a
									href={`tel:${contactInfo.mobile}`}
									className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
								>
									<Phone className="w-5 h-5 mr-2" />
									Call Now: {contactInfo.mobile}
								</a>
								<a
									href={`mailto:${contactInfo.email}`}
									className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
								>
									<Mail className="w-5 h-5 mr-2" />
									Get Quote
								</a>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Contact Information */}
				<section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
					<div className="max-w-7xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-white/10"
						>
							<div className="grid md:grid-cols-3 gap-8 text-center">
								<div className="flex flex-col items-center">
									<Phone className="w-8 h-8 text-blue-400 mb-4" />
									<h3 className="text-white font-semibold mb-2">Phone</h3>
									<p className="text-gray-300">{contactInfo.mobile}</p>
								</div>
								<div className="flex flex-col items-center">
									<Mail className="w-8 h-8 text-purple-400 mb-4" />
									<h3 className="text-white font-semibold mb-2">Email</h3>
									<p className="text-gray-300">{contactInfo.email}</p>
								</div>
								<div className="flex flex-col items-center">
									<MapPin className="w-8 h-8 text-green-400 mb-4" />
									<h3 className="text-white font-semibold mb-2">Address</h3>
									<p className="text-gray-300">{contactInfo.address}</p>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Services Categories */}
				<section className="py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="text-center mb-16"
						>
							<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
								Our Revolutionary Services
							</h2>
							<p className="text-xl text-gray-300 max-w-3xl mx-auto">
								From micro SAAS solutions to enterprise AI platforms, we offer cutting-edge technology that drives innovation and growth.
							</p>
						</motion.div>

						<div className="space-y-20">
							{serviceCategories.map((category, categoryIndex) => (
								<motion.div
									key={category.name}
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.6 + categoryIndex * 0.1 }}
									className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-white/10"
								>
									<div className="flex items-center mb-8">
										<div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-4">
											{category.icon}
										</div>
										<div>
											<h3 className="text-2xl md:text-3xl font-bold text-white">
												{category.name}
											</h3>
											<p className="text-gray-300 mt-2">{category.description}</p>
										</div>
									</div>

									<div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
										{category.services.map((service, serviceIndex) => (
											<motion.div
												key={service.title}
												initial={{ opacity: 0, scale: 0.9 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.1 + serviceIndex * 0.1 }}
												className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-xl p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105"
											>
												<div className="flex justify-between items-start mb-4">
													<h4 className="text-xl font-semibold text-white">{service.title}</h4>
													<span className="text-2xl font-bold text-blue-400">{service.price}</span>
												</div>
												<p className="text-gray-300 mb-4">{service.description}</p>
												
												<div className="mb-4">
													<h5 className="text-white font-semibold mb-2 flex items-center">
														<CheckCircle className="w-4 h-4 text-green-400 mr-2" />
														Key Features
													</h5>
													<ul className="space-y-1">
														{service.features.map((feature, index) => (
															<li key={index} className="text-sm text-gray-400 flex items-center">
																<Star className="w-3 h-3 text-yellow-400 mr-2" />
																{feature}
															</li>
														))}
													</ul>
												</div>

												<div className="mb-6">
													<h5 className="text-white font-semibold mb-2 flex items-center">
														<Target className="w-4 h-4 text-purple-400 mr-2" />
														Business Benefits
													</h5>
													<ul className="space-y-1">
														{service.benefits.map((benefit, index) => (
															<li key={index} className="text-sm text-gray-400 flex items-center">
																<ArrowRight className="w-3 h-3 text-blue-400 mr-2" />
																{benefit}
															</li>
														))}
													</ul>
												</div>

												<a
													href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.title}`}
													className="inline-flex items-center w-full justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
												>
													Get Started
													<ArrowRight className="w-4 h-4 ml-2" />
												</a>
											</motion.div>
										))}
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Call to Action */}
				<section className="py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto text-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 1.2 }}
							className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-12 border border-white/10"
						>
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
								Ready to Transform Your Business?
							</h2>
							<p className="text-xl text-gray-300 mb-8">
								Join thousands of businesses that have already revolutionized their operations with our cutting-edge technology solutions.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
								<a
									href={`tel:${contactInfo.mobile}`}
									className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
								>
									<Phone className="w-5 h-5 mr-2" />
									Call {contactInfo.mobile}
								</a>
								<a
									href={`mailto:${contactInfo.email}?subject=Business Transformation Inquiry`}
									className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
								>
									<Mail className="w-5 h-5 mr-2" />
									Schedule Consultation
								</a>
							</div>
						</motion.div>
					</div>
				</section>
			</div>
		</>
	);
};

export default ComprehensiveServicesShowcase2025;
