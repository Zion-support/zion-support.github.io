import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, BookOpen } from 'lucide-react';

const WhitePapers = () => {
	const whitePapers = [
		{
			title: 'AI-Powered Business Transformation',
			category: 'AI & Business',
			date: 'March 2025',
			pages: 28,
			description:
				'How AI is transforming operations and driving measurable ROI across industries.',
		},
		{
			title: 'Zero-Trust Security Architecture',
			category: 'Cybersecurity',
			date: 'February 2025',
			pages: 22,
			description:
				'Implementation guide and best practices for modern enterprise security.',
		},
		{
			title: 'Cloud-Native Architecture at Scale',
			category: 'Cloud & DevOps',
			date: 'January 2025',
			pages: 30,
			description:
				'Designing scalable, resilient, and cost-efficient platforms on cloud.',
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
			<section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-10">
						<div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4">
							<FileText className="w-4 h-4 mr-2" />
							Research & Insights
						</div>
						<h1 className="text-4xl md:text-6xl font-bold">
							White<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Papers</span>
						</h1>
						<p className="text-gray-300 mt-4 max-w-2xl mx-auto">
							Access research papers and technical guides from Zion Tech Group.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{whitePapers.map((paper) => (
							<div key={paper.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
								<div className="mb-2 text-xs text-gray-400">{paper.category} • {paper.date} • {paper.pages} pages</div>
								<h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
								<p className="text-gray-300 mb-4">{paper.description}</p>
								<Link to="/contact" className="text-blue-400 hover:text-blue-300">Request PDF</Link>
							</div>
						))}
					</div>

					<div className="text-center mt-16">
						<BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-3" />
						<p className="text-gray-400">Looking for a specific topic? Contact us for custom research.</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default WhitePapers;
