import React from 'react';
import { Link } from 'react-router-dom';

const links = [
	'/', '/about', '/contact', '/blog', '/careers', '/pricing', '/services', '/ai-services', '/it-services', '/micro-saas',
	'/news', '/events', '/partners', '/solutions', '/team', '/help', '/security', '/status', '/privacy', '/terms', '/cookies',
	'/sitemap', '/talent', '/equipment', '/request-quote', '/green-it', '/marketplace', '/marketplace/products', '/marketplace/talent', '/marketplace/equipment', '/marketplace/services'
];

const Sitemap: React.FC = () => (
	<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
		<div className="max-w-4xl mx-auto px-4 text-white">
			<h1 className="text-4xl font-bold mb-6">Sitemap</h1>
			<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
				{links.map((href) => (
					<li key={href}>
						<Link className="text-neon-blue hover:text-neon-purple" to={href}>{href}</Link>
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default Sitemap;
