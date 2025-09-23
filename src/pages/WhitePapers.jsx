import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Calendar, User } from 'lucide-react';

const WhitePapers = () => {
	const whitePapers = [
		{
			title: 'AI-Powered Digital Transformation: A Comprehensive Guide',
			category: 'Digital Transformation',
			date: '2025-01-10',
			author: 'Dr. Sarah Chen',
			description:
				"This comprehensive white paper explores how AI is revolutionizing digital transformation initiatives across industries, providing actionable insights for enterprise leaders.",
			pdfUrl: '#',
			pages: 28,
			downloadCount: '2,500+'
		}
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
			<section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="mb-8 text-center">
						<div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
							<FileText className="w-4 h-4 mr-2" />
							Research & Insights
						</div>
						<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">White Papers</h1>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto">
							Access our research papers and technical documentation to stay ahead of technology trends and insights.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{whitePapers.map((paper, index) => (
							<div
								key={index}
								className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
							>
								<div className="flex items-center justify-between mb-4">
									<span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
										{paper.category}
									</span>
									<div className="flex items-center text-gray-400 text-sm">
										<Download className="w-4 h-4 mr-1" />
										{paper.downloadCount}
									</div>
								</div>
								<h3 className="text-xl font-semibold text-white mb-3">{paper.title}</h3>
								<p className="text-gray-300 mb-4">{paper.description}</p>
								<div className="flex items-center justify-between text-sm text-gray-400 mb-4">
									<div className="flex items-center">
										<User className="w-4 h-4 mr-1" />
										{paper.author}
									</div>
									<div className="flex items-center">
										<Calendar className="w-4 h-4 mr-1" />
										{paper.date}
									</div>
								</div>
								<Link
									to="/contact"
									className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
								>
									<Download className="w-4 h-4 mr-2" />
									Request PDF
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default WhitePapers;
