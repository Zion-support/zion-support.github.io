import React from 'react';
import { Link } from 'react-router-dom';
import { comprehensiveInnovativeServices2030 } from '../data/comprehensiveInnovativeServices2030';
import { SEO } from '../components/SEO';

const ComprehensiveServicesLanding2030: React.FC = () => {
	return (
		<>
			<SEO
				title="Comprehensive Services Landing 2030 | Zion Tech Group"
				description="Complete overview of our innovative micro SAAS services, IT solutions, and AI platforms. Transform your business with cutting-edge technology solutions."
				keywords="micro SAAS, IT services, AI solutions, cybersecurity, cloud computing, data analytics, blockchain, IoT, sustainability, digital transformation"
			/>
			
			<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
				{/* Hero Section */}
				<section className="relative py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto text-center">
						<div className="relative z-10">
							<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-600 bg-clip-text text-transparent">
								Comprehensive Services 2030
							</h1>
							<p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
								Discover our complete portfolio of innovative solutions designed to drive digital transformation 
								and business growth in the next decade and beyond.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link
									to="/comprehensive-services-showcase-2030"
									className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
								>
									Explore All Services
								</Link>
								<Link
									to="/comprehensive-pricing-guide-2030"
									className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
								>
									View Pricing
								</Link>
							</div>
						</div>
					</div>
					
					{/* Background Elements */}
					<div className="absolute inset-0 overflow-hidden">
						<div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
						<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
						<div className="absolute top-40 left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
					</div>
				</section>

				{/* Service Categories Overview */}
				<section className="py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
								Service Categories
							</h2>
							<p className="text-xl text-gray-300 max-w-3xl mx-auto">
								Our comprehensive portfolio covers all major technology domains with innovative solutions 
								designed for modern business challenges.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{comprehensiveInnovativeServices2030.map((category) => (
								<div
									key={category.slug}
									className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 group"
								>
									<div className="text-center mb-6">
										<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
											<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
											</svg>
										</div>
										<h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
										<p className="text-gray-300 text-sm">
											{category.items.length} innovative solutions
										</p>
									</div>

									<div className="space-y-3 mb-6">
										{category.items.slice(0, 3).map((service, index) => (
											<div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
												<div>
													<div className="font-semibold text-white text-sm">{service.title}</div>
													<div className="text-gray-400 text-xs">{service.price} per {service.billing}</div>
												</div>
												<div className="text-blue-400 text-xs font-semibold">
													{service.category}
												</div>
											</div>
										))}
										{category.items.length > 3 && (
											<div className="text-center text-gray-400 text-sm">
												+{category.items.length - 3} more services
											</div>
										)}
									</div>

									<Link
										to={`/comprehensive-services-showcase-2030#${category.slug}`}
										className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
									>
										Explore {category.name}
									</Link>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Featured Services */}
				<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
								Featured Services
							</h2>
							<p className="text-xl text-gray-300 max-w-3xl mx-auto">
								Highlighted solutions that are transforming industries and driving innovation across the globe.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{/* AI Enterprise Workflow Automation */}
							<div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30">
								<div className="mb-6">
									<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
										</svg>
									</div>
									<h3 className="text-2xl font-bold text-white mb-3">AI Enterprise Workflow Automation</h3>
									<p className="text-gray-300 text-sm mb-4">
										Intelligent workflow automation that learns from your business processes and automatically optimizes operations.
									</p>
									<div className="flex items-center justify-between mb-4">
										<span className="text-2xl font-bold text-blue-400">$2,499</span>
										<span className="text-gray-300 text-sm">per month</span>
									</div>
									<div className="space-y-2 mb-6">
										<div className="flex items-center text-gray-300 text-sm">
											<span className="text-blue-400 mr-2">✓</span>
											Process mining and discovery
										</div>
										<div className="flex items-center text-gray-300 text-sm">
											<span className="text-blue-400 mr-2">✓</span>
											Intelligent task routing
										</div>
										<div className="flex items-center text-gray-300 text-sm">
											<span className="text-blue-400 mr-2">✓</span>
											Predictive optimization
										</div>
									</div>
								</div>
								<Link
									to="/contact"
									className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
								>
									Get Started
								</Link>
							</div>

							{/* Zero Trust Security Platform */}
							<div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 border border-green-400/30">
								<div className="mb-6">
									<div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									</div>
									<h3 className="text-2xl font-bold text-white mb-3">Zero Trust Security Platform</h3>
									<p className="text-gray-300 text-sm mb-4">
										Comprehensive zero trust implementation with continuous verification and adaptive access control.
									</p>
									<div className="flex items-center justify-between mb-4">
										<span className="text-2xl font-bold text-green-400">$3,999</span>
										<span className="text-gray-300 text-sm">per month</span>
									</div>
									<div className="space-y-2 mb-6">
										<div className="flex items-center text-gray-300 text-sm">
											<span className="text-green-400 mr-2">✓</span>
											Identity verification
										</div>
										<div className="flex items-center text-gray-300 text-sm">
											<span className="text-green-400 mr-2">✓</span>
											Micro-segmentation
										</div>
										<div className="flex items-center text-gray-300 text-sm">
											<span className="text-green-400 mr-2">✓</span>
											Threat detection
										</div>
									</div>
								</div>
								<Link
									to="/contact"
									className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300"
								>
									Secure Now
								</Link>
							</div>

							{/* Multi-Cloud Orchestration */}
							<div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30">
								<div className="mb-6">
									<div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
										</svg>
									</div>
									<h3 className="text-2xl font-bold text-white mb-3">Multi-Cloud Orchestration</h3>
									<p className="text-gray-300 text-sm mb-4">
										Unified management platform for AWS, Azure, GCP with cost optimization and security.
									</p>
									<div className="flex items-center justify-between mb-4">
										<span className="text-2xl font-bold text-purple-400">$4,999</span>
										<span className="text-gray-300 text-sm">per month</span>
									</div>
									<div className="space-y-2 mb-6">
										<div className="flex items-center text-gray-300 text-sm">
											<span className="text-purple-400 mr-2">✓</span>
											Unified management
										</div>
										<div className="flex items-center text-gray-300 text-sm">
											<span className="text-purple-400 mr-2">✓</span>
											Cost optimization
										</div>
										<div className="flex items-center text-gray-400 text-sm">
											<span className="text-purple-400 mr-2">✓</span>
											Security policy
										</div>
									</div>
								</div>
								<Link
									to="/contact"
									className="w-full inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
								>
									Orchestrate Clouds
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Why Choose Zion Tech Group */}
				<section className="py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
								Why Choose Zion Tech Group?
							</h2>
							<p className="text-xl text-gray-300 max-w-3xl mx-auto">
								We deliver innovative solutions that drive real business value with unmatched expertise and support.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							<div className="text-center p-6">
								<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-4">Innovation First</h3>
								<p className="text-gray-300 text-sm">
									Cutting-edge solutions leveraging the latest technologies in AI, blockchain, IoT, and more.
								</p>
							</div>

							<div className="text-center p-6">
								<div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
								<p className="text-gray-300 text-sm">
									Track record of successful implementations and measurable business outcomes.
								</p>
							</div>

							<div className="text-center p-6">
								<div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
								<p className="text-gray-300 text-sm">
									Round-the-clock expert support and maintenance for all our solutions.
								</p>
							</div>

							<div className="text-center p-6">
								<div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-4">Competitive Pricing</h3>
								<p className="text-gray-300 text-sm">
									Market-leading solutions at competitive prices with guaranteed ROI.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Call to Action */}
				<section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
							Ready to Transform Your Business?
						</h2>
						<p className="text-xl text-blue-100 mb-8">
							Join hundreds of companies already leveraging our innovative solutions to drive growth and efficiency.
						</p>
						
						<div className="grid md:grid-cols-3 gap-8 mb-8">
							<div>
								<h3 className="font-semibold text-lg mb-2 text-white">Contact Us</h3>
								<p className="text-blue-100">Mobile: +1 302 464 0950</p>
								<p className="text-blue-100">Email: kleber@ziontechgroup.com</p>
							</div>
							<div>
								<h3 className="font-semibold text-lg mb-2 text-white">Address</h3>
								<p className="text-blue-100">364 E Main St STE 1008</p>
								<p className="text-blue-100">Middletown DE 19709</p>
							</div>
							<div>
								<h3 className="font-semibold text-lg mb-2 text-white">Website</h3>
								<a 
									href="https://ziontechgroup.com" 
									target="_blank" 
									rel="noopener noreferrer"
									className="text-blue-100 hover:text-white underline"
								>
									https://ziontechgroup.com
								</a>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								to="/contact"
								className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
							>
								Get Started Today
							</Link>
							<Link
								to="/schedule-demo"
								className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-all duration-300"
							>
								Schedule Demo
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default ComprehensiveServicesLanding2030;