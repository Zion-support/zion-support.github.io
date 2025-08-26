import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function SiteHeader() {
	const nav = [
		{ to: '/', label: 'Home' },
		{ to: '/solutions', label: 'Solutions' },
		{ to: '/services', label: 'Services' },
		{ to: '/case-studies', label: 'Case Studies' },
		{ to: '/news', label: 'News' },
		{ to: '/events', label: 'Events' },
		{ to: '/about', label: 'About' },
		{ to: '/careers', label: 'Careers' },
		{ to: '/contact', label: 'Contact' }
	];
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white">
			<div className="container mx-auto px-4 h-16 flex items-center justify-between">
				<Link to="/" className="font-bold text-xl">Zion Tech Group</Link>
				<nav className="hidden md:flex gap-4 text-sm">
					{nav.map(i => (
						<NavLink key={i.to} to={i.to} className={({isActive}) => `px-2 py-1 rounded ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>{i.label}</NavLink>
					))}
				</nav>
			</div>
		</header>
	);
}