import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Activity, Target, Users, Database, Zap, Brain, Globe, Shield, Clock } from 'lucide-react';
<<<<<<< HEAD
const AIBusinessIntelligence = () => {
    const features = [
        {
            icon: Brain,
            title: "AI-Powered Analytics",
            description: "Advanced machine learning algorithms that automatically identify patterns, trends, and insights from your data",
            benefits: ["Predictive modeling", "Anomaly detection", "Pattern recognition", "Automated insights"]
        },
        {
            icon: BarChart3,
            title: "Real-time Dashboards",
            description: "Interactive, customizable dashboards that provide instant visibility into key business metrics",
            benefits: ["Live data updates", "Customizable views", "Role-based access", "Mobile responsive"]
        },
        {
            icon: TrendingUp,
            title: "Predictive Analytics",
            description: "Forecast future trends and outcomes using historical data and advanced statistical models",
            benefits: ["Sales forecasting", "Demand planning", "Risk assessment", "Trend prediction"]
        },
        {
            icon: Target,
            title: "Performance Tracking",
            description: "Monitor and measure business performance against goals and benchmarks in real-time",
            benefits: ["KPI monitoring", "Goal tracking", "Benchmarking", "Performance alerts"]
        }
    ];
    const solutions = [
        {
            category: "Sales & Marketing",
            icon: Users,
            solutions: [
                "Customer behavior analysis",
                "Lead scoring and qualification",
                "Campaign performance optimization",
                "Market trend analysis",
                "Customer lifetime value prediction"
            ]
        },
        {
            category: "Operations & Supply Chain",
            icon: Activity,
            solutions: [
                "Inventory optimization",
                "Supply chain risk assessment",
                "Operational efficiency analysis",
                "Quality control monitoring",
                "Resource allocation optimization"
            ]
        },
        {
            category: "Financial Analytics",
            icon: TrendingUp,
            solutions: [
                "Revenue forecasting",
                "Cost analysis and optimization",
                "Profitability analysis",
                "Cash flow prediction",
                "Investment decision support"
            ]
        },
        {
            category: "Human Resources",
            icon: Users,
            solutions: [
                "Employee performance analytics",
                "Talent acquisition insights",
                "Workforce planning",
                "Employee retention prediction",
                "Training effectiveness analysis"
            ]
        }
    ];
    const technologies = [
        {
            name: "Machine Learning",
            description: "Advanced ML algorithms for pattern recognition and prediction",
            icon: Brain
        },
        {
            name: "Big Data Processing",
            description: "Scalable data processing for large datasets",
            icon: Database
        },
        {
            name: "Real-time Analytics",
            description: "Instant data processing and insights delivery",
            icon: Zap
        },
        {
            name: "Cloud Infrastructure",
            description: "Scalable cloud-based BI platform",
            icon: Globe
        },
        {
            name: "Data Security",
            description: "Enterprise-grade security and compliance",
            icon: Shield
        },
        {
            name: "24/7 Monitoring",
            description: "Continuous monitoring and alerting",
            icon: Clock
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
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"/>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6">
              <TrendingUp className="w-10 h-10 text-white"/>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                AI Business Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business data into actionable insights with our AI-powered business intelligence platform. 
              Make data-driven decisions with confidence using advanced analytics and predictive modeling.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Get Started
              </Link>
              <Link to="/services-showcase" className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Key Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI Business Intelligence platform combines cutting-edge technology with intuitive design 
            to deliver powerful insights that drive business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (<motion.div key={feature.title} variants={itemVariants} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white"/>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
              
              <div className="ml-16">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (<li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>))}
                </ul>
              </div>
            </motion.div>))}
        </div>
      </div>

      {/* Solutions by Industry */}
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Solutions by Industry</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI Business Intelligence solutions designed to address the unique challenges 
              and opportunities in your industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((category, index) => (<motion.div key={category.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white"/>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.solutions.map((solution, idx) => (<li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {solution}
                    </li>))}
                </ul>
              </motion.div>))}
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Technology Stack</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built on cutting-edge technologies to ensure scalability, performance, and reliability 
            for enterprise-grade business intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (<motion.div key={tech.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <tech.icon className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
              <p className="text-gray-400 text-sm">{tech.description}</p>
            </motion.div>))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you implement a comprehensive business intelligence solution 
              that will drive growth and competitive advantage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Schedule Consultation
              </Link>
              <Link to="/case-studies" className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>);
};
=======

const AIBusinessIntelligence = () => {
	const features = [
		{
			icon: Brain,
			title: "AI-Powered Analytics",
			description: "Advanced machine learning algorithms that automatically identify patterns, trends, and insights from your data",
			benefits: ["Predictive modeling", "Anomaly detection", "Pattern recognition", "Automated insights"]
		},
		{
			icon: BarChart3,
			title: "Real-time Dashboards",
			description: "Interactive, customizable dashboards that provide instant visibility into key business metrics",
			benefits: ["Live data updates", "Customizable views", "Role-based access", "Mobile responsive"]
		},
		{
			icon: TrendingUp,
			title: "Predictive Analytics",
			description: "Forecast future trends and outcomes using historical data and advanced statistical models",
			benefits: ["Sales forecasting", "Demand planning", "Risk assessment", "Trend prediction"]
		},
		{
			icon: Target,
			title: "Performance Tracking",
			description: "Monitor and measure business performance against goals and benchmarks in real-time",
			benefits: ["KPI monitoring", "Goal tracking", "Benchmarking", "Performance alerts"]
		}
	];

	const solutions = [
		{
			category: "Sales & Marketing",
			icon: Users,
			solutions: [
				"Customer behavior analysis",
				"Lead scoring and qualification",
				"Campaign performance optimization",
				"Market trend analysis",
				"Customer lifetime value prediction"
			]
		},
		{
			category: "Operations & Supply Chain",
			icon: Activity,
			solutions: [
				"Inventory optimization",
				"Supply chain risk assessment",
				"Operational efficiency analysis",
				"Quality control monitoring",
				"Resource allocation optimization"
			]
		},
		{
			category: "Financial Analytics",
			icon: TrendingUp,
			solutions: [
				"Revenue forecasting",
				"Cost analysis and optimization",
				"Profitability analysis",
				"Cash flow prediction",
				"Investment decision support"
			]
		},
		{
			category: "Human Resources",
			icon: Users,
			solutions: [
				"Employee performance analytics",
				"Talent acquisition insights",
				"Workforce planning",
				"Employee retention prediction",
				"Training effectiveness analysis"
			]
		}
	];

	const technologies = [
		{
			name: "Machine Learning",
			description: "Advanced ML algorithms for pattern recognition and prediction",
			icon: Brain
		},
		{
			name: "Big Data Processing",
			description: "Scalable data processing for large datasets",
			icon: Database
		},
		{
			name: "Real-time Analytics",
			description: "Instant data processing and insights delivery",
			icon: Zap
		},
		{
			name: "Cloud Infrastructure",
			description: "Scalable cloud-based BI platform",
			icon: Globe
		},
		{
			name: "Data Security",
			description: "Enterprise-grade security and compliance",
			icon: Shield
		},
		{
			name: "24/7 Monitoring",
			description: "Continuous monitoring and alerting",
			icon: Clock
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

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
			{/* Hero Section */}
			<div className="relative overflow-hidden">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"/>
				
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
					<motion.div 
						initial={{ opacity: 0, y: 20 }} 
						animate={{ opacity: 1, y: 0 }} 
						transition={{ duration: 0.8 }} 
						className="text-center"
					>
						<div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6">
							<TrendingUp className="w-10 h-10 text-white"/>
						</div>
						<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
							<span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
								AI Business Intelligence
							</span>
						</h1>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
							Transform your business data into actionable insights with our AI-powered business intelligence platform. 
							Make data-driven decisions with confidence using advanced analytics and predictive modeling.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link 
								to="/contact" 
								className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
							>
								Get Started
							</Link>
							<Link 
								to="/services-showcase" 
								className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
							>
								View All Services
							</Link>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Features Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
				<motion.div 
					variants={containerVariants} 
					initial="hidden" 
					whileInView="visible" 
					viewport={{ once: true }} 
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-white mb-6">Key Features</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						Our AI Business Intelligence platform combines cutting-edge technology with intuitive design 
						to deliver powerful insights that drive business growth.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{features.map((feature, index) => (
						<motion.div 
							key={feature.title} 
							variants={itemVariants} 
							className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-blue-500/50 transition-all duration-300"
						>
							<div className="flex items-start mb-4">
								<div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
									<feature.icon className="w-6 h-6 text-white"/>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
									<p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
								</div>
							</div>
							
							<div className="ml-16">
								<h4 className="text-sm font-medium text-gray-300 mb-3">Key Benefits:</h4>
								<ul className="space-y-2">
									{feature.benefits.map((benefit, idx) => (
										<li key={idx} className="flex items-center text-sm text-gray-400">
											<div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
											{benefit}
										</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Solutions by Industry */}
			<div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-t border-blue-500/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
					<motion.div 
						initial={{ opacity: 0, y: 20 }} 
						whileInView={{ opacity: 1, y: 0 }} 
						viewport={{ once: true }} 
						transition={{ duration: 0.8 }} 
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-bold text-white mb-6">Solutions by Industry</h2>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto">
							Tailored AI Business Intelligence solutions designed to address the unique challenges 
							and opportunities in your industry.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{solutions.map((category, index) => (
							<motion.div 
								key={category.category} 
								initial={{ opacity: 0, y: 20 }} 
								whileInView={{ opacity: 1, y: 0 }} 
								viewport={{ once: true }} 
								transition={{ duration: 0.5, delay: index * 0.1 }} 
								className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6"
							>
								<div className="flex items-center mb-6">
									<div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
										<category.icon className="w-6 h-6 text-white"/>
									</div>
									<h3 className="text-xl font-semibold text-white">{category.category}</h3>
								</div>
								
								<ul className="space-y-3">
									{category.solutions.map((solution, idx) => (
										<li key={idx} className="flex items-center text-sm text-gray-400">
											<div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
											{solution}
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* Technology Stack */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<motion.div 
					initial={{ opacity: 0, y: 20 }} 
					whileInView={{ opacity: 1, y: 0 }} 
					viewport={{ once: true }} 
					transition={{ duration: 0.8 }} 
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-white mb-6">Technology Stack</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						Built on cutting-edge technologies to ensure scalability, performance, and reliability 
						for enterprise-grade business intelligence.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{technologies.map((tech, index) => (
						<motion.div 
							key={tech.name} 
							initial={{ opacity: 0, y: 20 }} 
							whileInView={{ opacity: 1, y: 0 }} 
							viewport={{ once: true }} 
							transition={{ duration: 0.5, delay: index * 0.1 }} 
							className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 text-center hover:border-blue-500/50 transition-all duration-300"
						>
							<div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
								<tech.icon className="w-8 h-8 text-white"/>
							</div>
							<h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
							<p className="text-gray-400 text-sm">{tech.description}</p>
						</motion.div>
					))}
				</div>
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
						<h2 className="text-4xl font-bold text-white mb-6">
							Ready to Transform Your Business Intelligence?
						</h2>
						<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
							Let our AI experts help you implement a comprehensive business intelligence solution 
							that will drive growth and competitive advantage.
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

>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
export default AIBusinessIntelligence;
