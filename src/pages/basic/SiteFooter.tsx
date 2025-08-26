import React from 'react';
import { Link } from 'react-router-dom';

export default function SiteFooter() {
	const year = new Date().getFullYear();
	return (
		<footer className="border-t bg-gray-50">
			<div className="container mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
				<div>© {year} Zion Tech Group</div>
				<nav className="flex gap-4">
					<Link to="/privacy" className="hover:text-blue-600">Privacy</Link>
					<Link to="/terms" className="hover:text-blue-600">Terms</Link>
					<Link to="/sitemap" className="hover:text-blue-600">Sitemap</Link>
				</nav>
			</div>
		</footer>
	);
}