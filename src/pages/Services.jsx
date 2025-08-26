import React from 'react';
import SEOHead from "../components/SEOHead.jsx";
import { Link } from 'react-router-dom';
import { servicesCatalog } from '@/data/servicesCatalog';
import { Phone, Mail, MapPin, ExternalLink, ArrowRight, Star, TrendingUp, Zap, Shield, Brain, Cpu, Lock, Globe2, Database, Cloud } from 'lucide-react';
export default function Services() {
    const contact = {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709',
        website: 'https://ziontechgroup.com'
    };
    const categoryIcons = {
        'Micro SaaS': Brain,
        'AI Solutions': Brain,
        'IT Services': Cpu,
        'Cybersecurity': Shield,
        'Data & Analytics': Database,
        'Cloud & DevOps': Cloud,
        'Quantum Computing': Zap,
        'Blockchain Solutions': Lock,
        'IoT & Edge Computing': Globe2,
        'FinTech Solutions': TrendingUp,
        'HealthTech Solutions': Shield,
        'EdTech Solutions': Brain,
        'GreenTech Solutions': TrendingUp,
        'SpaceTech Solutions': Zap,
        'Robotics & Automation': Cpu,
        'AR/VR Solutions': Brain,
        'Biotech Solutions': Shield,
        'LegalTech Solutions': Lock,
        'Real Estate Tech': TrendingUp,
        'Supply Chain Solutions': Globe2
    };
    const categoryColors = {
        'Micro SaaS': 'from-purple-500 to-pink-500',
        'AI Solutions': 'from-blue-500 to-cyan-500',
        'IT Services': 'from-green-500 to-emerald-500',
        'Cybersecurity': 'from-red-500 to-orange-500',
        'Data & Analytics': 'from-indigo-500 to-purple-500',
        'Cloud & DevOps': 'from-cyan-500 to-blue-500',
        'Quantum Computing': 'from-violet-500 to-purple-500',
        'Blockchain Solutions': 'from-emerald-500 to-green-500',
        'IoT & Edge Computing': 'from-orange-500 to-red-500',
        'FinTech Solutions': 'from-green-500 to-blue-500',
        'HealthTech Solutions': 'from-red-500 to-pink-500',
        'EdTech Solutions': 'from-blue-500 to-indigo-500',
        'GreenTech Solutions': 'from-green-500 to-teal-500',
        'SpaceTech Solutions': 'from-purple-500 to-indigo-500',
        'Robotics & Automation': 'from-gray-500 to-blue-500',
        'AR/VR Solutions': 'from-pink-500 to-purple-500',
        'Biotech Solutions': 'from-teal-500 to-green-500',
        'LegalTech Solutions': 'from-blue-500 to-gray-500',
        'Real Estate Tech': 'from-yellow-500 to-orange-500',
        'Supply Chain Solutions': 'from-indigo-500 to-blue-500'
    };
    return (<>
			<SEOHead title="Services - Micro SaaS, IT and AI Solutions | Zion Tech Group" description="Explore our comprehensive micro SaaS products, enterprise IT services, AI solutions, quantum computing, blockchain, and emerging technology solutions with transparent pricing and clear features." canonical="/services" url="https://ziontechgroup.com/services"/>
			<main className="min-h-screen bg-zion-blue pt-24 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold text-white">Comprehensive Technology Solutions</h1>
						<p className="mt-4 text-zion-slate-light text-xl max-w-4xl mx-auto">
							Real, ready-to-deploy offerings across Micro SaaS, AI, Quantum Computing, Blockchain, IoT, FinTech, HealthTech, EdTech, and emerging technologies.
						</p>
						<div className="mt-8 flex flex-wrap justify-center gap-4">
							<div className="bg-zion-blue-dark px-4 py-2 rounded-full border border-zion-cyan/30">
								<span className="text-zion-cyan text-sm font-medium">20+ Service Categories</span>
							</div>
							<div className="bg-zion-blue-dark px-4 py-2 rounded-full border border-zion-cyan/30">
								<span className="text-zion-cyan text-sm font-medium">100+ Solutions</span>
							</div>
							<div className="bg-zion-blue-dark px-4 py-2 rounded-full border border-zion-cyan/30">
								<span className="text-zion-cyan text-sm font-medium">Global Delivery</span>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-16">
						{servicesCatalog.map(category => {
							const IconComponent = categoryIcons[category.name] || Brain;
							const categoryColor = categoryColors[category.name] || 'from-gray-500 to-blue-500';
							
							return (
								<section key={category.slug} className="bg-zion-blue-dark/50 rounded-2xl p-8 border border-zion-blue-light/30">
									<div className="flex items-center gap-4 mb-8">
										<div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${categoryColor} rounded-full`}>
											<IconComponent className="w-8 h-8 text-white" />
										</div>
										<div>
											<h2 className="text-3xl md:text-4xl font-bold text-white">{category.name}</h2>
											<p className="text-zion-slate-light text-lg mt-2">
												{category.items.length} innovative solutions for modern businesses
											</p>
										</div>
									</div>
									
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
										{category.items.map(item => (
											<div key={item.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10 group">
												<div className="flex items-start justify-between gap-4 mb-4">
													<div className="flex-1">
														<h3 className="text-xl font-semibold text-white group-hover:text-zion-cyan transition-colors">{item.title}</h3>
														<p className="text-zion-slate-light mt-2 text-sm leading-relaxed">{item.description}</p>
													</div>
												</div>
												<div className="flex items-center justify-between mb-4">
													<div className="text-zion-cyan font-bold text-lg">{item.price}</div>
													<div className="text-zion-slate-light text-sm bg-zion-blue-light/20 px-3 py-1 rounded-full">
														{item.billing === 'month' ? 'Monthly' : item.billing === 'hour' ? 'Hourly' : 'Project-based'}
													</div>
												</div>
												<div className="mb-6">
													<h4 className="text-white font-medium mb-3 text-sm uppercase tracking-wide">Key Features</h4>
													<ul className="space-y-2">
														{item.features.map((f, idx) => (
															<li key={idx} className="text-zion-slate-light text-sm flex items-start">
																<span className="text-zion-cyan mr-2 mt-1">•</span>
																{f}
															</li>
														))}
													</ul>
												</div>
												<div className="flex items-center justify-between">
													<Link 
														to={item.href} 
														target={item.external ? '_blank' : undefined} 
														rel={item.external ? 'noopener noreferrer' : undefined} 
														className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-2 px-4 rounded-lg border border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-300 group-hover:scale-105"
													>
														<span>{item.ctaLabel}</span>
														{item.external ? <ExternalLink className="w-4 h-4"/> : <ArrowRight className="w-4 h-4"/>}
													</Link>
													<span className="text-zion-slate-light text-xs bg-zion-blue-light/20 px-2 py-1 rounded">
														{item.category}
													</span>
												</div>
											</div>
										))}
									</div>
								</section>
							);
						})}
					</div>
					{/* Why Choose Zion Tech Group */}
					<section className="mt-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue rounded-2xl p-8 border border-zion-cyan/20">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
							<p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
								Leading the future of technology with innovative solutions and proven expertise
							</p>
						</div>
						
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="text-center">
								<div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full mb-4">
									<Star className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-white mb-3">Proven Excellence</h3>
								<p className="text-zion-slate-light">500+ successful projects delivered across 25+ countries with 99.9% client satisfaction</p>
							</div>
							
							<div className="text-center">
								<div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full mb-4">
									<Zap className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-white mb-3">Cutting-Edge Innovation</h3>
								<p className="text-zion-slate-light">Pioneering quantum computing, AI, blockchain, and emerging technologies for future-ready solutions</p>
							</div>
							
							<div className="text-center">
								<div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full mb-4">
									<Shield className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
								<p className="text-zion-slate-light">SOC 2, ISO 27001, and industry-leading security standards for enterprise-grade protection</p>
							</div>
						</div>
					</section>
					<section className="mt-16">
						<h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">Ready to Get Started?</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
							<div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 text-center">
								<div className="flex items-center justify-center gap-3 text-white mb-3">
									<Phone className="w-5 h-5 text-zion-cyan"/>
									<span className="font-semibold">{contact.mobile}</span>
								</div>
								<p className="text-zion-slate-light text-sm">Call us directly for immediate assistance</p>
							</div>
							<div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 text-center">
								<div className="flex items-center justify-center gap-3 text-white mb-3">
									<Mail className="w-5 h-5 text-zion-cyan"/>
									<span className="font-semibold">{contact.email}</span>
								</div>
								<p className="text-zion-slate-light text-sm">Email us for detailed proposals</p>
							</div>
							<div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 text-center">
								<div className="flex items-center justify-center gap-3 text-white mb-3">
									<MapPin className="w-5 h-5 text-zion-cyan"/>
									<span className="font-semibold">Address</span>
								</div>
								<p className="text-zion-slate-light text-sm">{contact.address}</p>
							</div>
						</div>
						<div className="text-center">
							<Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-3 px-6 rounded-lg border border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-300">
								<span>Get Your Free Consultation</span>
								<ArrowRight className="w-5 h-5"/>
							</Link>
						</div>
					</section>
				</div>
			</main>
		</>);
}
