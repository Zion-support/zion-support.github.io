import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { servicesCatalog } from '@/data/servicesCatalog';
import { Phone, Mail, MapPin, ExternalLink, Star, Zap, Shield, Brain, Cpu, Database, Globe, TrendingUp } from 'lucide-react';

export default function Services() {
	const contact = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	};

	const getCategoryIcon = (category: string) => {
		switch (category) {
			case 'Micro SaaS': return <Zap className="w-6 h-6" />;
			case 'AI Solutions': return <Brain className="w-6 h-6" />;
			case 'IT Services': return <Cpu className="w-6 h-6" />;
			case 'Cybersecurity': return <Shield className="w-6 h-6" />;
			case 'Data & Analytics': return <Database className="w-6 h-6" />;
			case 'Cloud & DevOps': return <Globe className="w-6 h-6" />;
			case 'Quantum Computing': return <TrendingUp className="w-6 h-6" />;
			case 'Blockchain & Web3': return <Database className="w-6 h-6" />;
			case 'IoT & Edge': return <Cpu className="w-6 h-6" />;
			case 'Green Tech': return <TrendingUp className="w-6 h-6" />;
			default: return <Star className="w-6 h-6" />;
		}
	};

	return (
		<>
			<SEO
				title="Services - Micro SaaS, IT and AI Solutions | Zion Tech Group"
				description="Explore our comprehensive micro SaaS products, enterprise IT services, and cutting-edge AI solutions with transparent pricing, clear features, and easy ways to get started."
				canonical="/services"
			/>
			
			<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
				{/* Hero Section */}
				<div className="relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
					<div className="relative container mx-auto px-4 py-24">
						<div className="text-center max-w-4xl mx-auto">
							<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
								Next-Generation
								<span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
									Technology Solutions
								</span>
							</h1>
							<p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
								From quantum computing to autonomous AI, discover our comprehensive suite of innovative services designed to transform your business and accelerate your digital transformation.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<Link
									to="/contact"
									className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-dark hover:to-zion-cyan text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
								>
									Get Started Today
									<ExternalLink className="ml-2 w-5 h-5" />
								</Link>
								<a
									href="tel:+13024640950"
									className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 border border-white/20"
								>
									<Phone className="mr-2 w-5 h-5" />
									Call Now
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Services Catalog */}
				<div className="container mx-auto px-4 py-16">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
							Comprehensive Service Portfolio
						</h2>
						<p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
							Explore our cutting-edge solutions across multiple technology domains, each designed to deliver measurable business value and competitive advantage.
						</p>
					</div>

					<div className="space-y-16">
						{servicesCatalog.map((category) => (
							<div key={category.slug} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
								<div className="flex items-center mb-8">
									<div className="p-3 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl mr-4">
										{getCategoryIcon(category.name)}
									</div>
									<div>
										<h3 className="text-3xl font-bold text-white">{category.name}</h3>
										<p className="text-zion-slate-light mt-2">
											{category.items.length} innovative solutions
										</p>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{category.items.map((service) => (
										<div
											key={service.id}
											className="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:border-zion-cyan/50 hover:transform hover:scale-105 group"
										>
											<div className="flex items-start justify-between mb-4">
												<div className="p-2 bg-zion-cyan/20 rounded-lg">
													{getCategoryIcon(service.category)}
												</div>
												<span className="text-zion-cyan font-semibold text-sm bg-zion-cyan/10 px-3 py-1 rounded-full">
													{service.billing === 'month' ? 'Monthly' : service.billing === 'project' ? 'Project' : 'Hourly'}
												</span>
											</div>

											<h4 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
												{service.title}
											</h4>
											
											<p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
												{service.description}
											</p>

											<div className="mb-4">
												<span className="text-2xl font-bold text-zion-cyan">
													{service.price}
												</span>
												{service.billing === 'month' && <span className="text-zion-slate-light text-sm">/month</span>}
											</div>

											<div className="mb-6">
												<ul className="space-y-2">
													{service.features.slice(0, 3).map((feature, index) => (
														<li key={index} className="flex items-center text-sm text-zion-slate-light">
															<Star className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
															{feature}
														</li>
													))}
													{service.features.length > 3 && (
														<li className="text-sm text-zion-slate-light/70">
															+{service.features.length - 3} more features
														</li>
													)}
												</ul>
											</div>

											<a
												href={service.href}
												target={service.external ? "_blank" : undefined}
												rel={service.external ? "noopener noreferrer" : undefined}
												className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-dark hover:to-zion-cyan text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg"
											>
												{service.ctaLabel}
												<ExternalLink className="ml-2 w-4 h-4" />
											</a>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Contact Section */}
				<div className="container mx-auto px-4 py-16">
					<div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
						<div className="text-center mb-12">
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
								Ready to Transform Your Business?
							</h2>
							<p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
								Connect with our team of technology experts to discuss your specific needs and discover how our innovative solutions can drive your success.
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
							<div className="text-center">
								<div className="p-4 bg-zion-cyan/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
									<Phone className="w-8 h-8 text-zion-cyan" />
								</div>
								<h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
								<a
									href="tel:+13024640950"
									className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-lg font-medium"
								>
									{contact.mobile}
								</a>
							</div>

							<div className="text-center">
								<div className="p-4 bg-zion-purple/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
									<Mail className="w-8 h-8 text-zion-purple" />
								</div>
								<h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
								<a
									href={`mailto:${contact.email}`}
									className="text-zion-purple hover:text-zion-purple-light transition-colors text-lg font-medium"
								>
									{contact.email}
								</a>
							</div>

							<div className="text-center">
								<div className="p-4 bg-zion-cyan/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
									<MapPin className="w-8 h-8 text-zion-cyan" />
								</div>
								<h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
								<p className="text-zion-slate-light text-lg">
									{contact.address}
								</p>
							</div>
						</div>

						<div className="text-center">
							<Link
								to="/contact"
								className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-bold text-xl rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-zion-cyan/25"
							>
								Start Your Journey
								<ExternalLink className="ml-3 w-6 h-6" />
							</Link>
						</div>
					</div>
				</div>

				{/* Footer CTA */}
				<div className="container mx-auto px-4 py-16">
					<div className="text-center">
						<h3 className="text-3xl font-bold text-white mb-4">
							Stay Ahead of the Curve
						</h3>
						<p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
							Join the future of technology with Zion Tech Group. Our innovative solutions are designed to keep you competitive in an ever-evolving digital landscape.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<a
								href={contact.website}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full transition-all duration-300 border border-white/20"
							>
								Visit Website
								<ExternalLink className="ml-2 w-5 h-5" />
							</a>
							<Link
								to="/contact"
								className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-dark hover:to-zion-cyan text-white font-semibold rounded-full transition-all duration-300"
							>
								Get in Touch
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
