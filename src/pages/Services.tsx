import React from 'react';

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

export default Services;
