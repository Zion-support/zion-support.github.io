import React from 'react';
import { Link } from 'react-router-dom';
import { Cog, Server, Shield, Users, Database, Globe, Zap, BarChart3 } from 'lucide-react';
const EnterpriseIT = () => {
	const services = [
		{
			icon: Server,
			title: "Infrastructure Management",
			description: "Comprehensive IT infrastructure design, implementation, and ongoing management",
			features: ["Network Design & Security", "Server Management", "Cloud Migration", "Disaster Recovery"]
		},
		{
			icon: Shield,
			title: "Cybersecurity",
			description: "Enterprise-grade security solutions to protect your business assets and data",
			features: ["Security Audits", "Threat Detection", "Compliance Management", "Incident Response"]
		},
		{
			icon: Users,
			title: "IT Support & Helpdesk",
			description: "24/7 technical support and helpdesk services for your organization",
			features: ["Remote Support", "On-site Assistance", "Knowledge Base", "Training Programs"]
		},
		{
			icon: Database,
			title: "Data Management",
			description: "Strategic data governance, backup, and recovery solutions",
			features: ["Data Backup", "Storage Optimization", "Compliance", "Data Analytics"]
		}
	];
	const solutions = [
		{
			category: "Small Business",
			description: "Scalable IT solutions for growing businesses",
			icon: "🏢"
		},
		{
			category: "Enterprise",
			description: "Complex IT infrastructure for large organizations",
			icon: "🏗️"
		},
		{
			category: "Healthcare",
			description: "HIPAA-compliant IT solutions",
			icon: "🏥"
		},
		{
			category: "Financial Services",
			description: "Secure, compliant financial IT infrastructure",
			icon: "💼"
		}
	];
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
			{/* Hero Section */}
			<section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto text-center">
					<div className="flex justify-center mb-6">
						<div className="p-3 bg-blue-600/20 rounded-full">
							<Cog className="h-12 w-12 text-blue-400"/>
						</div>
					</div>
					<h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
						Enterprise IT Solutions
					</h1>
					<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
						Comprehensive IT infrastructure and support services designed to keep your business running smoothly, 
						securely, and efficiently. From network management to cybersecurity, we've got you covered.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link 
							to="/contact" 
							className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
						>
							Get Started
						</Link>
						<Link 
							to="/request-quote" 
							className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-lg"
						>
							Request Quote
						</Link>
					</div>
				</div>
			</section>
			{/* Services Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our IT Services</h2>
						<p className="text-xl text-gray-300 max-w-2xl mx-auto">
							End-to-end IT solutions to support your business operations and growth
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{services.map((service, index) => (
							<div
								key={index}
								className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
							>
								<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
									<service.icon className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
								<p className="text-gray-300 mb-4">{service.description}</p>
								<ul className="space-y-2">
									{service.features.map((feature, featureIndex) => (
										<li key={featureIndex} className="flex items-center text-sm text-gray-400">
											<div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
											{feature}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Solutions by Business Type */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Solutions for Every Business</h2>
						<p className="text-xl text-gray-300 max-w-2xl mx-auto">
							Tailored IT solutions designed to meet the unique needs of your industry and business size
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{solutions.map((solution, index) => (
							<div key={index} className="text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
									{solution.icon}
								</div>
								<h3 className="text-xl font-semibold text-white mb-3">{solution.category}</h3>
								<p className="text-gray-300">{solution.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Benefits Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our IT Services?</h2>
							<div className="space-y-4">
								<div className="flex items-start space-x-3">
									<div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<Zap className="w-3 h-3 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-1">24/7 Support</h3>
										<p className="text-gray-300">Round-the-clock technical support and monitoring</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<Shield className="w-3 h-3 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-1">Enterprise Security</h3>
										<p className="text-gray-300">Industry-leading security practices and compliance</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<Globe className="w-3 h-3 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-1">Scalable Solutions</h3>
										<p className="text-gray-300">IT infrastructure that grows with your business</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<BarChart3 className="w-3 h-3 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-1">Proactive Monitoring</h3>
										<p className="text-gray-300">Prevent issues before they impact your business</p>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
							<div className="text-center">
								<Cog className="w-24 h-24 text-blue-400 mx-auto mb-4" />
								<h3 className="text-2xl font-bold text-white mb-2">Managed IT Services</h3>
								<p className="text-gray-300">Focus on your business while we handle your IT infrastructure, security, and support needs.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* CTA Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Optimize Your IT Infrastructure?</h2>
					<p className="text-xl text-gray-300 mb-8">
						Let's discuss how our enterprise IT solutions can improve your business efficiency, security, and productivity.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							to="/contact"
							className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
						>
							Schedule Consultation
						</Link>
						<Link
							to="/case-studies"
							className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
						>
							View Case Studies
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};
export default EnterpriseIT;
