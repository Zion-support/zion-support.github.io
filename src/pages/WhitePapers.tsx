import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Calendar, User, BookOpen, Brain, Atom, Shield, Wifi, Leaf, Cloud, BarChart3 } from 'lucide-react';
interface WhitePaper {
	id: number;
	title: string;
	description: string;
	category: string;
	date: string;
	author: string;
	downloads: string;
	tags: string[];
	pdfUrl: string;
}
const WhitePapers: React.FC = () => {
	const whitePapers: WhitePaper[] = [
		{
			id: 1,
			title: 'AI-Powered Business Transformation: A Comprehensive Guide',
			description: 'Explore how artificial intelligence is revolutionizing business operations and creating new opportunities for growth and innovation.',
			category: 'AI & Business',
			date: 'March 2024',
			author: 'Dr. Sarah Chen',
			downloads: '2,500+',
			tags: ['AI', 'Digital Transformation', 'Business Strategy'],
			pdfUrl: '#',
		},
		{
			id: 2,
			title: 'Cybersecurity in the Digital Age: Threats and Solutions',
			description: 'Comprehensive analysis of modern cybersecurity challenges and effective defense strategies for enterprises.',
			category: 'Security',
			date: 'February 2024',
			author: 'Alex Thompson',
			downloads: '1,800+',
			tags: ['Cybersecurity', 'Threat Defense', 'Enterprise Security'],
			pdfUrl: '#',
		},
		{
			id: 3,
			title: 'Cloud Migration Strategies: Best Practices and Implementation',
			description: 'Step-by-step guide to successful cloud migration with real-world case studies and optimization techniques.',
			category: 'Cloud & DevOps',
			date: 'January 2024',
			author: 'David Kim',
			downloads: '3,200+',
			tags: ['Cloud Computing', 'Migration', 'DevOps'],
			pdfUrl: '#',
		},
		{
			id: 4,
			title: 'Quantum Computing: Applications in Enterprise Technology',
			description: 'Understanding quantum computing\'s potential impact on business operations and future technology trends.',
			category: 'Emerging Tech',
			date: 'December 2023',
			author: 'Prof. Michael Rodriguez',
			downloads: '1,600+',
			tags: ['Quantum Computing', 'Enterprise', 'Technology'],
			pdfUrl: '#',
		},
		{
			id: 5,
			title: 'Edge Computing and IoT: Building the Connected Future',
			description: 'Comprehensive guide to edge computing infrastructure and IoT integration for smart city and industrial applications.',
			category: 'Edge Computing',
			date: 'November 2023',
			author: 'Dr. Emily Watson',
			downloads: '1,654',
			tags: ['Edge Computing', 'IoT', 'Smart Cities'],
			pdfUrl: '#',
		},
		{
			id: 6,
			title: 'Blockchain Technology: Beyond Cryptocurrency',
			description: 'Exploring blockchain applications in supply chain, healthcare, and enterprise systems.',
			category: 'Blockchain',
			date: 'October 2023',
			author: 'David Kim',
			downloads: '2,341',
			tags: ['Blockchain', 'Supply Chain', 'Enterprise'],
			pdfUrl: '#',
		},
	];
	const categories = [
		'All Categories',
		'AI & Business',
		'Security',
		'Cloud & DevOps',
		'Emerging Tech',
		'Edge Computing',
		'Blockchain',
		'Green IT',
		'Data Analytics',
	];
	const [selectedCategory, setSelectedCategory] = useState('All Categories');
	const [searchQuery, setSearchQuery] = useState('');
	const filteredPapers = whitePapers.filter((paper) => {
		const matchesCategory = selectedCategory === 'All Categories' || paper.category === selectedCategory;
		const matchesSearch =
			paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
			paper.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
		return matchesCategory && matchesSearch;
	});
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
			{/* Hero Section */}
			<section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto text-center">
					<div className="mb-8">
						<div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
							<FileText className="w-4 h-4 mr-2" />
							Research & Insights
						</div>
						<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
							White
							<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Papers</span>
						</h1>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
							Access our comprehensive research papers and technical documentation to stay ahead of technology trends and industry insights.
						</p>
					</div>
					{/* Search Bar */}
					<div className="max-w-md mx-auto mb-8">
						<input
							type="text"
							placeholder="Search white papers..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-full px-4 py-3 bg-slate-700/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
						/>
					</div>
					{/* Categories Filter */}
					<div className="flex flex-wrap gap-4 justify-center">
						{categories.map((category, index) => (
							<button
								key={index}
								onClick={() => setSelectedCategory(category)}
								className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
									selectedCategory === category
										? 'bg-blue-600 text-white'
										: 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
								}`}
							>
								{category}
							</button>
						))}
					</div>
				</div>
			</section>
			{/* White Papers Grid */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					{filteredPapers.length === 0 ? (
						<div className="text-center py-16">
							<BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
							<h3 className="text-xl font-semibold text-white mb-2">No white papers found</h3>
							<p className="text-gray-400">Try adjusting your search criteria or category filter.</p>
						</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{filteredPapers.map((paper) => (
								<div key={paper.id} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
									<div className="flex items-center justify-between mb-4">
										<span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
											{paper.category}
										</span>
										<div className="flex items-center text-gray-400 text-sm">
											<Download className="w-4 h-4 mr-1" />
											{paper.downloads}
										</div>
									</div>
									<h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{paper.title}</h3>
									<p className="text-gray-300 mb-4 line-clamp-3">{paper.description}</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{paper.tags.map((tag, idx) => (
											<span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded text-xs">
												{tag}
											</span>
										))}
									</div>
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
									<a
										href={paper.pdfUrl}
										className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
									>
										<Download className="w-4 h-4 mr-2" />
										Download PDF
									</a>
								</div>
							))}
						</div>
					)}
				</div>
			</section>
			{/* Featured Research */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Research Areas</h2>
						<p className="text-xl text-gray-300 max-w-2xl mx-auto">
							Explore our key research domains and stay informed about the latest technology trends and innovations.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{ name: 'Artificial Intelligence', icon: Brain },
							{ name: 'Quantum Computing', icon: Atom },
							{ name: 'Cybersecurity', icon: Shield },
							{ name: 'Edge Computing', icon: Wifi },
							{ name: 'Blockchain', icon: Link },
							{ name: 'Green IT', icon: Leaf },
							{ name: 'Cloud Computing', icon: Cloud },
							{ name: 'Data Analytics', icon: BarChart3 },
						].map((category, index) => (
							<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
									<category.icon className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-lg font-semibold text-white">{category.name}</h3>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* CTA Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Informed with Our Research</h2>
					<p className="text-xl text-gray-300 mb-8">
						Get access to cutting-edge research and insights that can transform your business and technology strategy.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							to="/contact"
							className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
						>
							Request Custom Research
						</Link>
						<Link
							to="/resources"
							className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
						>
							View All Resources
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};
export default WhitePapers;
