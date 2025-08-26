import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesIndex() {
	return (
		<div className="pt-32 pb-20 container mx-auto px-4">
			<h1 className="text-3xl font-bold mb-6">Services</h1>
			<ul className="list-disc pl-5 space-y-2 text-blue-700">
				<li><Link to="/services/ai">AI</Link></li>
				<li><Link to="/services/cloud">Cloud</Link></li>
				<li><Link to="/services/cybersecurity">Cybersecurity</Link></li>
				<li><Link to="/services/infrastructure">Infrastructure</Link></li>
				<li><Link to="/services/transformation">Transformation</Link></li>
				<li><Link to="/services/consulting">Consulting</Link></li>
			</ul>
		</div>
	);
}