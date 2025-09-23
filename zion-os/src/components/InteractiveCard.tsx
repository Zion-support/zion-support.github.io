import React, { useState } from 'react';

export interface InteractiveCardProps {
	title: string;
	description: string;
	icon: string;
	href: string;
	color?: string;
	className?: string;
	children?: React.ReactNode;
}

export default function InteractiveCard({ title, description, icon, href, color = 'from-purple-500 to-blue-500', className = '', children }: InteractiveCardProps) {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<a
			href={href}
			className={`group block p-8 rounded-2xl border border-white/10 hover:border-white/30 bg-black/20 hover:bg-black/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm hover-lift ${className}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			aria-label={`Navigate to ${title} page`}
		>
			<div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center mb-4`}>{icon}</div>
			<h3 className="text-xl font-semibold mb-2">{title}</h3>
			<p className="text-white/70 mb-4">{description}</p>
			{children}
			<div className="mt-6">
				<svg className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</div>
		</a>
	);
}
