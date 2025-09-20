import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-zion-blue-dark text-white">
			<div className="text-center space-y-6 px-6">
				<h1 className="text-5xl font-extrabold">Zion Tech Group</h1>
				<p className="text-zion-slate-light text-lg">Tech & AI solutions for modern enterprises.</p>
				<div className="flex gap-4 justify-center">
					<Link to="/services" className="px-6 py-3 rounded-md bg-zion-cyan text-zion-blue-dark font-semibold hover:opacity-90">Explore Services</Link>
					<Link to="/contact" className="px-6 py-3 rounded-md border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark">Contact Us</Link>
				</div>
			</div>
		</div>
	);
}
