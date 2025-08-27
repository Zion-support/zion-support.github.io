import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Atom, Satellite, Brain, Cpu, Network, CircuitBoard } from 'lucide-react';
<<<<<<< HEAD
const EmergingTech = () => {
    const technologies = [
        {
            category: "Quantum Computing",
            icon: Atom,
            description: "Next-generation computing that leverages quantum mechanics for unprecedented processing power",
            technologies: [
                {
                    name: "Quantum Neural Networks",
                    description: "AI systems powered by quantum computing for complex pattern recognition",
                    href: "/quantum-neural-network-platform",
                    features: ["Quantum Algorithms", "Superior Performance", "Future-Proof Architecture"],
                    status: "Research & Development"
                },
                {
                    name: "Quantum Edge Computing",
                    description: "Quantum processing at the edge for real-time applications",
                    href: "/quantum-edge-computing-platform",
                    features: ["Low Latency", "High Security", "Scalable Infrastructure"],
                    status: "Emerging Technology"
                }
            ]
        },
        {
            category: "Space Technology",
            icon: Satellite,
            description: "Innovative solutions for space exploration, satellite systems, and space-based services",
            technologies: [
                {
                    name: "Satellite IoT Networks",
                    description: "Global IoT connectivity through satellite constellations",
                    href: "/space-tech",
                    features: ["Global Coverage", "Low Power", "Real-time Data"],
                    status: "Active Development"
                },
                {
                    name: "Space Analytics Platform",
                    description: "AI-powered analysis of space data and satellite imagery",
                    href: "/space-tech",
                    features: ["Earth Observation", "Climate Monitoring", "Resource Management"],
                    status: "Production Ready"
                }
            ]
        },
        {
            category: "5G & Edge Computing",
            icon: Network,
            description: "Advanced networking technologies enabling ultra-fast connectivity and edge processing",
            technologies: [
                {
                    name: "5G Enterprise Solutions",
                    description: "Enterprise-grade 5G network optimization and management",
                    href: "/5g-enterprise-solutions",
                    features: ["Network Slicing", "Edge Computing", "IoT Integration"],
                    status: "Deployment Ready"
                },
                {
                    name: "Edge AI Processing",
                    description: "AI processing at the network edge for real-time applications",
                    href: "/services/edge-computing",
                    features: ["Low Latency", "High Bandwidth", "Distributed Processing"],
                    status: "Production Ready"
                }
            ]
        },
        {
            category: "Autonomous Systems",
            icon: Brain,
            description: "Self-learning and self-optimizing systems that operate independently",
            technologies: [
                {
                    name: "Autonomous Business Operations",
                    description: "AI-driven business process automation platform",
                    href: "/autonomous-business-operations-platform",
                    features: ["Process Automation", "Decision Support", "Performance Analytics"],
                    status: "Production Ready"
                },
                {
                    name: "AI Autonomous Research Assistant",
                    description: "Intelligent research and development automation",
                    href: "/ai-autonomous-research-assistant",
                    features: ["Research Automation", "Data Analysis", "Insight Generation"],
                    status: "Research & Development"
                }
            ]
        },
        {
            category: "Advanced AI & ML",
            icon: Cpu,
            description: "Cutting-edge artificial intelligence and machine learning technologies",
            technologies: [
                {
                    name: "AI-Powered IT Asset Management",
                    description: "Intelligent IT asset lifecycle management",
                    href: "/ai-powered-it-asset-management",
                    features: ["Asset Tracking", "Predictive Maintenance", "Cost Optimization"],
                    status: "Production Ready"
                },
                {
                    name: "AI Workflow Automation",
                    description: "Intelligent business process automation",
                    href: "/services/ai-workflow-automation",
                    features: ["Process Optimization", "Error Reduction", "Efficiency Gains"],
                    status: "Production Ready"
                }
            ]
        },
        {
            category: "Blockchain & Web3",
            icon: CircuitBoard,
            description: "Decentralized technologies and next-generation internet infrastructure",
            technologies: [
                {
                    name: "Blockchain Enterprise Solutions",
                    description: "Enterprise-grade blockchain implementation and consulting",
                    href: "/services/blockchain-enterprise-solutions",
                    features: ["Smart Contracts", "Supply Chain", "Digital Identity"],
                    status: "Production Ready"
                },
                {
                    name: "DeFi Infrastructure",
                    description: "Decentralized finance infrastructure and solutions",
                    href: "/services/blockchain-defi-solutions",
                    features: ["DeFi Protocols", "Liquidity Management", "Risk Assessment"],
                    status: "Active Development"
                }
            ]
        }
    ];
    const researchAreas = [
        {
            title: "Quantum-Classical Hybrid Systems",
            description: "Researching the integration of quantum and classical computing for practical applications",
            progress: 75,
            timeline: "2025-2026"
        },
        {
            title: "AI-Quantum Synergy",
            description: "Exploring how AI can enhance quantum computing and vice versa",
            progress: 60,
            timeline: "2025-2027"
        },
        {
            title: "Space-Based Quantum Networks",
            description: "Developing quantum communication networks using satellite technology",
            progress: 40,
            timeline: "2026-2028"
        },
        {
            title: "Autonomous AI Systems",
            description: "Creating truly autonomous AI systems with minimal human intervention",
            progress: 80,
            timeline: "2025-2026"
        }
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };
    const getStatusColor = (status) => {
        switch (status) {
            case "Production Ready":
                return "text-green-400 bg-green-400/20";
            case "Active Development":
                return "text-yellow-400 bg-yellow-400/20";
            case "Research & Development":
                return "text-blue-400 bg-blue-400/20";
            case "Emerging Technology":
                return "text-purple-400 bg-purple-400/20";
            default:
                return "text-gray-400 bg-gray-400/20";
        }
    };
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"/>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Emerging Technologies
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore the cutting-edge technologies that are shaping the future. 
              From quantum computing to autonomous systems, discover innovations that will transform industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Explore Innovations
              </Link>
              <Link to="/research-development" className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Research & Development
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technologies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-16">
          {technologies.map((category, categoryIndex) => (<motion.div key={category.category} variants={itemVariants}>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  <category.icon className="w-8 h-8 text-white"/>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{category.category}</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-6">{category.description}</p>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.technologies.map((tech, techIndex) => (<motion.div key={tech.name} variants={itemVariants} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-purple-500/50 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        {tech.name}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(tech.status)}`}>
                        {tech.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {tech.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {tech.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                            {feature}
                          </li>))}
                      </ul>
                    </div>
                    
                    <Link to={tech.href} className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300">
                      Learn More
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </motion.div>))}
              </div>
            </motion.div>))}
        </motion.div>
      </div>

      {/* Research & Development Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Research & Development
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our dedicated R&D team is constantly pushing the boundaries of what's possible, 
              working on next-generation technologies that will shape the future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (<motion.div key={area.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                  <span className="text-sm text-purple-400">{area.timeline}</span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{area.description}</p>
                
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{area.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000" style={{ width: `${area.progress}%` }}></div>
                  </div>
                </div>
              </motion.div>))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in exploring and implementing the next generation of technologies 
            that will transform your business and industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
              Schedule Innovation Consultation
            </Link>
            <Link to="/services-showcase" className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>);
};
export default EmergingTech;
=======

interface Technology {
	name: string;
	description: string;
	href: string;
	features: string[];
	status: string;
}

interface TechnologyCategory {
	category: string;
	icon: React.ComponentType<{ className?: string }>;
	description: string;
	technologies: Technology[];
}

interface ResearchArea {
	title: string;
	description: string;
	progress: number;
	timeline: string;
}

const EmergingTech: React.FC = () => {
	const technologies: TechnologyCategory[] = [
		{
			category: 'Quantum Computing',
			icon: Atom,
			description: 'Next-generation computing that leverages quantum mechanics for unprecedented processing power',
			technologies: [
				{
					name: 'Quantum Neural Networks',
					description: 'AI systems powered by quantum computing for complex pattern recognition',
					href: '/quantum-neural-network-platform',
					features: ['Quantum Algorithms', 'Superior Performance', 'Future-Proof Architecture'],
					status: 'Research & Development',
				},
				{
					name: 'Quantum Edge Computing',
					description: 'Quantum processing at the edge for real-time applications',
					href: '/quantum-edge-computing-platform',
					features: ['Low Latency', 'High Security', 'Scalable Infrastructure'],
					status: 'Emerging Technology',
				},
			],
		},
		{
			category: 'Space Technology',
			icon: Satellite,
			description: 'Innovative solutions for space exploration, satellite systems, and space-based services',
			technologies: [
				{
					name: 'Satellite IoT Networks',
					description: 'Global IoT connectivity through satellite constellations',
					href: '/space-tech',
					features: ['Global Coverage', 'Low Power', 'Real-time Data'],
					status: 'Active Development',
				},
				{
					name: 'Space Analytics Platform',
					description: 'AI-powered analysis of space data and satellite imagery',
					href: '/space-tech',
					features: ['Earth Observation', 'Climate Monitoring', 'Resource Management'],
					status: 'Production Ready',
				},
			],
		},
		{
			category: '5G & Edge Computing',
			icon: Network,
			description: 'Advanced networking technologies enabling ultra-fast connectivity and edge processing',
			technologies: [
				{
					name: '5G Enterprise Solutions',
					description: 'Enterprise-grade 5G network optimization and management',
					href: '/5g-enterprise-solutions',
					features: ['Network Slicing', 'Edge Computing', 'IoT Integration'],
					status: 'Deployment Ready',
				},
				{
					name: 'Edge AI Processing',
					description: 'AI processing at the network edge for real-time applications',
					href: '/services/edge-computing',
					features: ['Low Latency', 'High Bandwidth', 'Distributed Processing'],
					status: 'Production Ready',
				},
			],
		},
		{
			category: 'Autonomous Systems',
			icon: Brain,
			description: 'Self-learning and self-optimizing systems that operate independently',
			technologies: [
				{
					name: 'Autonomous Business Operations',
					description: 'AI-driven business process automation platform',
					href: '/autonomous-business-operations-platform',
					features: ['Process Automation', 'Decision Support', 'Performance Analytics'],
					status: 'Production Ready',
				},
				{
					name: 'AI Autonomous Research Assistant',
					description: 'Intelligent research and development automation',
					href: '/ai-autonomous-research-assistant',
					features: ['Research Automation', 'Data Analysis', 'Insight Generation'],
					status: 'Research & Development',
				},
			],
		},
		{
			category: 'Advanced AI & ML',
			icon: Cpu,
			description: 'Cutting-edge artificial intelligence and machine learning technologies',
			technologies: [
				{
					name: 'AI-Powered IT Asset Management',
					description: 'Intelligent IT asset lifecycle management',
					href: '/ai-powered-it-asset-management',
					features: ['Asset Tracking', 'Predictive Maintenance', 'Cost Optimization'],
					status: 'Production Ready',
				},
				{
					name: 'AI Workflow Automation',
					description: 'Intelligent business process automation',
					href: '/services/ai-workflow-automation',
					features: ['Process Optimization', 'Error Reduction', 'Efficiency Gains'],
					status: 'Production Ready',
				},
			],
		},
		{
			category: 'Blockchain & Web3',
			icon: CircuitBoard,
			description: 'Decentralized technologies and next-generation internet infrastructure',
			technologies: [
				{
					name: 'Blockchain Enterprise Solutions',
					description: 'Enterprise-grade blockchain implementation and consulting',
					href: '/services/blockchain-enterprise-solutions',
					features: ['Smart Contracts', 'Supply Chain', 'Digital Identity'],
					status: 'Production Ready',
				},
				{
					name: 'DeFi Infrastructure',
					description: 'Decentralized finance infrastructure and solutions',
					href: '/services/blockchain-defi-solutions',
					features: ['DeFi Protocols', 'Liquidity Management', 'Risk Assessment'],
					status: 'Active Development',
				},
			],
		},
	];

	const researchAreas: ResearchArea[] = [
		{
			title: 'Quantum-Classical Hybrid Systems',
			description: 'Researching the integration of quantum and classical computing for practical applications',
			progress: 75,
			timeline: '2025-2026',
		},
		{
			title: 'AI-Quantum Synergy',
			description: 'Exploring how AI can enhance quantum computing and vice versa',
			progress: 60,
			timeline: '2025-2027',
		},
		{
			title: 'Space-Based Quantum Networks',
			description: 'Developing quantum communication networks using satellite technology',
			progress: 40,
			timeline: '2026-2028',
		},
		{
			title: 'Autonomous AI Systems',
			description: 'Creating truly autonomous AI systems with minimal human intervention',
			progress: 80,
			timeline: '2025-2026',
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

	const getStatusColor = (status: string): string => {
		switch (status) {
			case 'Production Ready':
				return 'text-green-400 bg-green-400/20';
			case 'Active Development':
				return 'text-yellow-400 bg-yellow-400/20';
			case 'Research & Development':
				return 'text-blue-400 bg-blue-400/20';
			case 'Emerging Technology':
				return 'text-purple-400 bg-purple-400/20';
			default:
				return 'text-gray-400 bg-gray-400/20';
		}
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
							<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
								Emerging Technologies
							</span>
						</h1>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
							Explore the cutting-edge technologies that are shaping the future. From quantum computing to autonomous systems, discover innovations that will transform industries.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link
								to="/contact"
								className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
							>
								Explore Innovations
							</Link>
							<Link
								to="/research-development"
								className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
							>
								Research & Development
							</Link>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Technologies Grid */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="space-y-16"
				>
					{technologies.map((category, categoryIndex) => (
						<motion.div key={category.category} variants={itemVariants}>
							<div className="text-center mb-12">
								<div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
									<category.icon className="w-8 h-8 text-white" />
								</div>
								<h2 className="text-3xl font-bold text-white mb-4">{category.category}</h2>
								<p className="text-gray-400 max-w-2xl mx-auto mb-6">{category.description}</p>
								<div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								{category.technologies.map((tech, techIndex) => (
									<motion.div
										key={tech.name}
										variants={itemVariants}
										className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-purple-500/50 transition-all duration-300 group"
									>
										<div className="flex items-start justify-between mb-4">
											<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
												{tech.name}
											</h3>
											<span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(tech.status)}`}>
												{tech.status}
											</span>
										</div>

										<p className="text-gray-400 text-sm leading-relaxed mb-4">{tech.description}</p>

										<div className="mb-6">
											<h4 className="text-sm font-medium text-gray-300 mb-3">Key Features:</h4>
											<ul className="space-y-2">
												{tech.features.map((feature, featureIndex) => (
													<li key={featureIndex} className="flex items-center text-sm text-gray-400">
														<div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
														{feature}
													</li>
												))}
											</ul>
										</div>

										<Link
											to={tech.href}
											className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
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

			{/* Research & Development Section */}
			<div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-t border-purple-500/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-bold text-white mb-6">Research & Development</h2>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto">
							Our dedicated R&D team is constantly pushing the boundaries of what's possible, working on next-generation technologies that will shape the future.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{researchAreas.map((area, index) => (
							<motion.div
								key={area.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6"
							>
								<div className="flex items-center justify-between mb-4">
									<h3 className="text-lg font-semibold text-white">{area.title}</h3>
									<span className="text-sm text-purple-400">{area.timeline}</span>
								</div>

								<p className="text-gray-400 text-sm mb-4">{area.description}</p>

								<div className="mb-2">
									<div className="flex justify-between text-sm text-gray-400 mb-1">
										<span>Progress</span>
										<span>{area.progress}%</span>
									</div>
									<div className="w-full bg-slate-700 rounded-full h-2">
										<div
											className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000"
											style={{ width: `${area.progress}%` }}
										></div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center"
				>
					<h2 className="text-4xl font-bold text-white mb-6">Ready to Explore the Future?</h2>
					<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
						Join us in exploring and implementing the next generation of technologies that will transform your business and industry.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Link
							to="/contact"
							className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
						>
							Schedule Innovation Consultation
						</Link>
						<Link
							to="/services-showcase"
							className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
						>
							View All Services
						</Link>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default EmergingTech;
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
