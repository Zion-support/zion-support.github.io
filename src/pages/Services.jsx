import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { servicesCatalog } from '@/data/servicesCatalog';
import { Phone, Mail, MapPin, ExternalLink, Sparkles, ArrowRight, BrainCircuit, ShieldCheck, Cloud, Network, NetworkIcon, BarChart3 } from 'lucide-react';

export default function Services() {
    const contact = {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709',
        website: 'https://ziontechgroup.com'
    };

    const featuredCategories = [
        {
            name: 'AI & Machine Learning',
            icon: BrainCircuit,
            description: 'Cutting-edge AI solutions for business transformation',
            color: 'from-purple-500 to-pink-500',
            link: '/next-gen-innovative-services'
        },
        {
            name: 'Cybersecurity & Compliance',
            icon: ShieldCheck,
            description: 'Advanced security solutions for modern threats',
            color: 'from-red-500 to-orange-500',
            link: '/next-gen-innovative-services'
        },
        {
            name: 'Cloud & DevOps',
            icon: Cloud,
            description: 'Scalable cloud infrastructure and automation',
            color: 'from-blue-500 to-cyan-500',
            link: '/next-gen-innovative-services'
        },
        {
            name: 'Blockchain & Web3',
            icon: Network,
            description: 'Next-generation decentralized solutions',
            color: 'from-green-500 to-emerald-500',
            link: '/next-gen-innovative-services'
        },
        {
            name: 'IoT & Edge Computing',
            icon: NetworkIcon,
            description: 'Connected devices and edge intelligence',
            color: 'from-indigo-500 to-purple-500',
            link: '/next-gen-innovative-services'
        },
        {
            name: 'Data & Analytics',
            icon: BarChart3,
            description: 'Data-driven insights and business intelligence',
            color: 'from-teal-500 to-blue-500',
            link: '/next-gen-innovative-services'
        }
    ];

    return (<>
			<SEO title="Services - Micro SaaS, IT and AI Solutions | Zion Tech Group" description="Explore our micro SaaS products, enterprise IT services, and AI solutions with transparent pricing, clear features, and easy ways to get started." canonical="/services" url="https://ziontechgroup.com/services"/>

			<main className="min-h-screen bg-zion-blue pt-24 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
							<Sparkles className="w-4 h-4" />
							Innovation Leader 2025
						</div>
						<h1 className="text-4xl md:text-6xl font-bold text-white">Services & Solutions</h1>
						<p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
							Real, ready-to-deploy offerings across Micro SaaS, AI, Cybersecurity, Data, and Cloud.
						</p>
					</div>

					{/* Featured Categories Section */}
					<section className="mb-16">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
								Featured Technology Categories
							</h2>
							<p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
								Explore our comprehensive range of cutting-edge technology solutions designed to transform your business.
							</p>
						</div>
						
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
							{featuredCategories.map((category, index) => (
								<Link
									key={category.name}
									to={category.link}
									className="group block"
								>
									<div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl h-full transform group-hover:scale-105 transition-all duration-300`}>
										<div className="flex items-center gap-4 mb-4">
											<category.icon className="w-8 h-8 text-white" />
											<h3 className="text-xl font-semibold text-white">{category.name}</h3>
										</div>
										<p className="text-white/90 mb-4">{category.description}</p>
										<div className="flex items-center gap-2 text-white/80 text-sm">
											<span>Learn More</span>
											<ArrowRight className="w-4 h-4" />
										</div>
									</div>
								</Link>
							))}
						</div>

						<div className="text-center">
							<Link
								to="/next-gen-innovative-services"
								className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-3 px-8 rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-200"
							>
								<Sparkles className="w-5 h-5" />
								Explore Next-Gen Innovative Services
								<ArrowRight className="w-5 h-5" />
							</Link>
						</div>
					</section>

					<div className="grid grid-cols-1 gap-12">
						{servicesCatalog.map(category => (<section key={category.slug}>
								<h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">{category.name}</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{category.items.map(item => (<div key={item.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan transition-all">
											<div className="flex items-start justify-between gap-4">
												<div>
													<h3 className="text-xl font-semibold text-white">{item.title}</h3>
													<p className="text-zion-slate-light mt-2">{item.description}</p>
												</div>
												<div className="text-right min-w-[120px]">
													<div className="text-zion-cyan font-semibold">{item.price}</div>
													<div className="text-zion-slate-light text-sm">{item.billing === 'month' ? 'Monthly' : item.billing === 'hour' ? 'Hourly' : 'Project-based'}</div>
												</div>
											</div>

											<ul className="mt-4 space-y-2 text-zion-slate-light text-sm list-disc list-inside">
												{item.features.map((f, idx) => (<li key={idx}>{f}</li>))}
											</ul>

											<div className="mt-6 flex items-center justify-between">
												<Link to={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined} className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-2 px-4 rounded-lg border border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20">
													<span>{item.ctaLabel}</span>
													{item.external && <ExternalLink className="w-4 h-4"/>}
												</Link>
												<span className="text-zion-slate-light text-sm">Category: {item.category}</span>
											</div>
										</div>))}
								</div>
							</section>))}
					</div>

					<section className="mt-16">
						<h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Contact Us</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
								<div className="flex items-center gap-3 text-white"><Phone className="w-5 h-5"/><span>{contact.mobile}</span></div>
							</div>
							<div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
								<div className="flex items-center gap-3 text-white"><Mail className="w-5 h-5"/><span>{contact.email}</span></div>
							</div>
							<div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
								<div className="flex items-center gap-3 text-white"><MapPin className="w-5 h-5"/><span>{contact.address}</span></div>
							</div>
						</div>
						<div className="mt-6">
							<Link to="/contact" className="inline-flex items-center gap-2 text-white underline">Go to contact page</Link>
						</div>
					</section>

				</div>
			</main>
		</>
})