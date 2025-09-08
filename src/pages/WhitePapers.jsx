import React from 'react';
import { Link } from 'react-router-dom';

export default function WhitePapers() {
	const whitePapers = [
		{
			title: 'AI-Powered Digital Transformation: A Comprehensive Guide',
			category: 'Digital Transformation',
			date: '2025-01-10',
			author: 'Dr. Sarah Chen',
			description: 'How AI is revolutionizing digital transformation initiatives across industries.',
			pages: 28
		}
	];

	return (
		<main style={{padding: 24}}>
			<h1>White Papers</h1>
			<ul>
				{whitePapers.map((p, i) => (
					<li key={i}>
						<strong>{p.title}</strong> — {p.author} — {p.date}
					</li>
				))}
			</ul>
			<p style={{marginTop: 16}}>
				<Link to="/contact">Request PDF</Link>
			</p>
		</main>
	);
}

export { WhitePapers };
