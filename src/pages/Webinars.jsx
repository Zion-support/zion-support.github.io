import React from 'react';
import { Link } from 'react-router-dom';

export default function Webinars() {
	const webinars = [
		{
			title: 'AI-Powered Business Transformation',
			description: 'How AI is transforming operations and growth.',
			category: 'AI & Business',
			date: 'March 15, 2025',
			duration: '60 minutes',
			speaker: 'Dr. Sarah Chen'
		}
	];

	return (
		<main style={{padding: 24}}>
			<h1>Webinars</h1>
			<ul>
				{webinars.map((w, i) => (
					<li key={i}>
						<strong>{w.title}</strong> — {w.date} — {w.duration}
					</li>
				))}
			</ul>
			<p style={{marginTop: 16}}>
				<Link to="/contact">Subscribe to Webinars</Link>
			</p>
		</main>
	);
}
