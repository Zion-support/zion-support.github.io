import React from 'react';
import { Link } from 'react-router-dom';
import { comprehensiveInnovativeServices2030 } from '../data/comprehensiveInnovativeServices2030';
import { SEO } from '../components/SEO';

const ComprehensiveServicesShowcase2030: React.FC = () => {
	return (
		<>
			<SEO
				title="Comprehensive Innovative Services 2030 | Zion Tech Group"
				description="Discover our comprehensive portfolio of innovative micro SAAS services, IT solutions, and AI platforms. Market-leading solutions with competitive pricing and expert support."
				keywords="micro SAAS, IT services, AI solutions, cybersecurity, cloud computing, data analytics, blockchain, IoT, sustainability, digital transformation"
			/>
			
			<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
				{/* Hero Section */}
				<section className="relative py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto text-center">
						<div className="relative z-10">
							<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
								Innovative Services 2030
							</h1>
							<p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
								Transform your business with our comprehensive portfolio of cutting-edge micro SAAS services, 
								IT solutions, and AI platforms. Market-leading solutions with competitive pricing and expert support.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link
									to="/contact"
									className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
								>
									Get Started Today
								</Link>
								<Link
									to="/pricing"
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

				{/* Contact Information Banner */}
				<section className="bg-blue-600 py-8 px-4">
					<div className="max-w-7xl mx-auto text-center">
						<div className="grid md:grid-cols-3 gap-6 text-white">
							<div>
								<h3 className="font-semibold text-lg mb-2">Contact Us</h3>
								<p className="text-blue-100">Mobile: +1 302 464 0950</p>
								<p className="text-blue-100">Email: kleber@ziontechgroup.com</p>
							</div>
							<div>
								<h3 className="font-semibold text-lg mb-2">Address</h3>
								<p className="text-blue-100">364 E Main St STE 1008</p>
								<p className="text-blue-100">Middletown DE 19709</p>
							</div>
							<div>
								<h3 className="font-semibold text-lg mb-2">Website</h3>
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
					</div>
				</section>

				{/* Services Grid */}
				<section className="py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
								Comprehensive Service Portfolio
							</h2>
							<p className="text-xl text-gray-300 max-w-3xl mx-auto">
								Explore our innovative solutions across multiple domains, designed to drive digital transformation 
								and business growth in 2030 and beyond.
							</p>
						</div>

						{/* Service Categories */}
						{comprehensiveInnovativeServices2030.map((category) => (
							<div key={category.slug} className="mb-20">
								<div className="text-center mb-12">
									<h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
										{category.name}
									</h3>
									<div className="w-24 h-1 bg-blue-500 mx-auto"></div>
								</div>

								<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
									{category.items.map((service) => (
										<div
											key={service.id}
											className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 group"
										>
											<div className="mb-6">
												<h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
													{service.title}
												</h4>
												<p className="text-gray-300 text-sm leading-relaxed">
													{service.description}
												</p>
											</div>

											{/* Pricing */}
											<div className="mb-6 p-4 bg-blue-600/20 rounded-lg">
												<div className="flex items-center justify-between">
													<span className="text-2xl font-bold text-blue-400">
														{service.price}
													</span>
													<span className="text-gray-300 text-sm">
														per {service.billing}
													</span>
												</div>
											</div>

											{/* Market Info */}
											{service.marketSize && (
												<div className="mb-6 p-4 bg-green-600/20 rounded-lg">
													<div className="grid grid-cols-2 gap-4 text-sm">
														<div>
															<span className="text-gray-300">Market Size:</span>
															<p className="text-green-400 font-semibold">{service.marketSize}</p>
														</div>
														{service.growthRate && (
															<div>
																<span className="text-gray-300">Growth Rate:</span>
																<p className="text-green-400 font-semibold">{service.growthRate}</p>
															</div>
														)}
													</div>
												</div>
											)}

											{/* Features */}
											<div className="mb-6">
												<h5 className="text-lg font-semibold text-white mb-3">Key Features</h5>
												<ul className="space-y-2">
													{service.features.slice(0, 5).map((feature, index) => (
														<li key={index} className="flex items-start">
															<span className="text-blue-400 mr-2">✓</span>
															<span className="text-gray-300 text-sm">{feature}</span>
														</li>
													))}
													{service.features.length > 5 && (
														<li className="text-gray-400 text-sm">
															+{service.features.length - 5} more features
														</li>
													)}
												</ul>
											</div>

											{/* Use Cases */}
											{service.useCases && (
												<div className="mb-6">
													<h5 className="text-lg font-semibold text-white mb-3">Use Cases</h5>
													<div className="flex flex-wrap gap-2">
														{service.useCases.map((useCase, index) => (
															<span
																key={index}
																className="px-3 py-1 bg-blue-600/30 text-blue-300 text-xs rounded-full border border-blue-500/30"
															>
																{useCase}
															</span>
														))}
													</div>
												</div>
											)}

											{/* Competitors */}
											{service.competitors && (
												<div className="mb-6">
													<h5 className="text-lg font-semibold text-white mb-3">Market Competitors</h5>
													<div className="flex flex-wrap gap-2">
														{service.competitors.map((competitor, index) => (
															<span
																key={index}
																className="px-3 py-1 bg-red-600/30 text-red-300 text-xs rounded-full border border-red-500/30"
															>
																{competitor}
															</span>
														))}
													</div>
												</div>
											)}

											{/* CTA Button */}
											<div className="text-center">
												<Link
													to={service.href}
													className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
												>
													{service.ctaLabel}
												</Link>
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Why Choose Zion Tech Group */}
				<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
								Why Choose Zion Tech Group?
							</h2>
							<p className="text-xl text-gray-300 max-w-3xl mx-auto">
								We deliver innovative solutions that drive real business value with unmatched expertise and support.
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8">
							<div className="text-center p-8">
								<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-white mb-4">Innovation First</h3>
								<p className="text-gray-300">
									Cutting-edge solutions leveraging the latest technologies in AI, blockchain, IoT, and more.
								</p>
							</div>

							<div className="text-center p-8">
								<div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
								<p className="text-gray-300">
									Track record of successful implementations and measurable business outcomes.
								</p>
							</div>

							<div className="text-center p-8">
								<div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
								<p className="text-gray-300">
									Round-the-clock expert support and maintenance for all our solutions.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Call to Action */}
				<section className="py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
							Ready to Transform Your Business?
						</h2>
						<p className="text-xl text-gray-300 mb-8">
							Join hundreds of companies already leveraging our innovative solutions to drive growth and efficiency.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								to="/contact"
								className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
							>
								Get Started Today
							</Link>
							<Link
								to="/schedule-demo"
								className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
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

export default ComprehensiveServicesShowcase2030;