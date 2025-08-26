import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Sparkles, Zap } from 'lucide-react';

export default function EnhancedNavigation2025() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const primaryLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Services', href: '/services/' },
		{ name: 'Pricing', href: '/pricing/' },
		{ name: 'Blog', href: '/blog/' },
		{ name: 'Contact', href: '/contact/' },
	];

	return (
		<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
			isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' : 'bg-transparent'
		}`}>
			{/* Top Contact Bar */}
			<div className="bg-gradient-to-r from-cyan-900/80 to-purple-900/80 backdrop-blur-sm border-b border-cyan-500/20">
				<div className="max-w-7xl mx-auto px-4 py-2">
					<div className="flex items-center justify-between text-sm">
						<div className="flex items-center gap-6 text-cyan-300">
							<div className="flex items-center gap-2">
								<Phone className="w-4 h-4" />
								<span>+1 302 464 0950</span>
							</div>
							<div className="flex items-center gap-2">
								<Mail className="w-4 h-4" />
								<span>kleber@ziontechgroup.com</span>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
							<span className="text-yellow-400 font-semibold">Revolutionary Technology Solutions</span>
						</div>
					</div>
				</div>
			</div>

			{/* Main Navigation */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-3 group">
						<div className="relative">
							<div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<Zap className="w-6 h-6 text-white" />
							</div>
							<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
						</div>
						<div className="hidden sm:block">
							<div className="text-xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">Zion Tech Group</div>
							<div className="text-xs text-gray-400">Future Technology Solutions</div>
						</div>
					</Link>

					{/* Desktop Links */}
					<div className="hidden lg:flex items-center gap-6">
						{primaryLinks.map(link => (
							<Link key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors">
								{link.name}
							</Link>
						))}
						<Link href="/request-quote/">
							<button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-colors">Request a quote</button>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors">
						{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isOpen && (
				<div className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50">
					<div className="px-4 py-4 space-y-3">
						{primaryLinks.map(link => (
							<Link key={link.href} href={link.href} className="block p-3 text-gray-300 rounded-lg hover:text-cyan-300 hover:bg-white/5 transition-colors" onClick={() => setIsOpen(false)}>
								{link.name}
							</Link>
						))}
						<Link href="/request-quote/" onClick={() => setIsOpen(false)}>
							<button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg">Request a quote</button>
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}