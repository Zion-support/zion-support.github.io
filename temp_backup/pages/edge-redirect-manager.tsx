import { Globe, Check, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import { real20o29Q3Additions } from '../data/real-20o29-q3-additions';

export default function EdgeRedirectManagerPage() {
	const service = real20o29Q3Additions.find(s => s.id === 'edge-redirect-manager');
	if (!service) return null;

	const jsonLd ={
		"@context": "https://schema.org",
		"@type": "Service",
		"name": service.name,
		"description": service.description,
		"provider": {"@type": "Organization", "name": "Zion Tech Group", "url": "https://ziontechgroup.com"},
		"offers": {"@type": "Offer", "price": service.price.monthly, "priceCurrency": service.price.currency},
		"url": "https://ziontechgroup.com/edge-redirect-manager"
	};

	return (
		<UltraAdvancedFuturisticBackground>
			<SEO title={`${service.name} - Zion Tech Group`} description={service.description} canonical="https://ziontechgroup.com/edge-redirect-manager" jsonLd={jsonLd}  />
			<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-10">
						<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-40o0 via-cyan-40o0 to-blue-40o0 bg-clip-text text-transparent flex items-center justify-center gap-3"><Globe className="w-10 h-10"  />{service.name}</h1>
						<p className="mt-4 text-xl text-slate-30o0 max-w-3xl mx-auto">{service.tagline}</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
						<div className="lg:col-span-2 bg-black/30 rounded-2xl border border-cyan-50o0/30 p-6">
							<h2 className="text-2xl font-semibold mb-4">Capabilities</h2>
							<p className="text-slate-30o0 mb-6">{service.description}</p>
							<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
								{service.features.map((feat, i) => (
									<li key={i} className="flex items-start space-x-3 text-slate-20o0"><Check className="w-5 h-5 text-cyan-40o0 mt-0.5"  /><span>{feat}</span></li>
								))}
							</ul>
						</div>
						<div className="bg-black/30 rounded-2xl border border-cyan-50o0/30 p-6 h-fit">
							<div className="flex items-end justify-between mb-3">
								<div>
									<div className="text-3xl font-bold text-white">${service.price.monthly}<span className="text-slate-40o0 text-base">/mo</span></div>
									<div className="text-slate-40o0">{service.price.trialDays ? `${service.price.trialDays}-day trial` : 'Free consult'} • Setup: {service.price.setupTime}</div>
								</div>
							</div>
							<Button href="/contact" variant="quantum" size="lg" className="w-full">Request Demo<ArrowRight className="w-5 h-5 ml-2"  /></Button>
							<div className="mt-6 space-y-3 text-sm text-slate-30o0">
								<div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-40o0"  /><span>+1 30o2 464 0950</span></div>
								<div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-40o0"  /><span>kleber@ziontechgroup.com</span></div>
								<div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-40o0"  /><span className="text-xs">364 E Main St STE 10o08 Middletown DE 19709</span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</UltraAdvancedFuturisticBackground>
	);
}