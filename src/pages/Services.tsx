import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { servicesCatalog } from '@/data/servicesCatalog';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
export default function Services() {
    const contact = {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709',
        website: 'https://ziontechgroup.com'
    };
    return (<>
			<SEO title="Services - Micro SaaS, IT and AI Solutions | Zion Tech Group" description="Explore our micro SaaS products, enterprise IT services, and AI solutions with transparent pricing, clear features, and easy ways to get started." canonical="/services" url="https://ziontechgroup.com/services"/>

			<main className="min-h-screen bg-zion-blue pt-24 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold text-white">Services & Solutions</h1>
						<p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
							Real, ready-to-deploy offerings across Micro SaaS, AI, Cybersecurity, Data, and Cloud.
						</p>
						<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
							<Link to="/advanced-services" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-3 px-6 rounded-lg border border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-200">
								<span>Explore Advanced Innovative Services 2025</span>
								<ExternalLink className="w-4 h-4"/>
							</Link>
							<Link to="/all-services" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium py-3 px-6 rounded-lg border border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-200">
								<span>View Complete Services Portfolio</span>
								<ExternalLink className="w-4 h-4"/>
							</Link>
						</div>
					</div>

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
		</>);
}
