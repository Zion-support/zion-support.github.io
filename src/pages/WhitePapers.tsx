import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Calendar, User, BookOpen, Brain, Atom, Shield, Wifi, Leaf, Cloud, BarChart3 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { GradientHeading } from '@/components/GradientHeading';

const WhitePapers = () => {
    const whitePapers = [
        {
            id: 1,
            title: "AI-Powered Digital Transformation: A Comprehensive Guide for Enterprise Leaders",
            category: "Digital Transformation",
            date: "2025-01-10",
            author: "Dr. Sarah Chen",
            description: "This comprehensive white paper explores how AI is revolutionizing digital transformation initiatives across industries, providing actionable insights for enterprise leaders.",
            topics: ["AI Strategy", "Digital Transformation", "Enterprise Leadership", "ROI Measurement"],
            downloadUrl: "#",
            isPremium: false,
            readTime: "45 min read",
            pageCount: 28
        },
        {
            id: 2,
            title: "Quantum Computing in Cybersecurity: Next-Generation Threat Detection",
            category: "Cybersecurity",
            date: "2024-12-15",
            author: "Dr. James Wilson",
            description: "Explore how quantum computing is transforming cybersecurity, from quantum-resistant cryptography to advanced threat detection algorithms.",
            topics: ["Quantum Computing", "Cybersecurity", "Cryptography", "Threat Detection"],
            downloadUrl: "#",
            isPremium: true,
            readTime: "60 min read",
            pageCount: 35
        },
        {
            id: 3,
            title: "Autonomous AI Systems: Ethical Considerations and Implementation Guidelines",
            category: "AI Ethics",
            date: "2024-11-20",
            author: "Dr. Emily Watson",
            description: "A deep dive into the ethical considerations surrounding autonomous AI systems, with practical guidelines for responsible implementation.",
            topics: ["AI Ethics", "Autonomous Systems", "Responsible AI", "Implementation"],
            downloadUrl: "#",
            isPremium: false,
            readTime: "40 min read",
            pageCount: 22
        },
        {
            id: 4,
            title: "Cloud-Native Architecture: Building Scalable and Resilient Systems",
            category: "Cloud & Infrastructure",
            date: "2024-10-25",
            author: "David Kim",
            description: "Learn the principles of cloud-native architecture and how to design systems that are scalable, resilient, and cost-effective.",
            topics: ["Cloud Architecture", "Scalability", "Resilience", "Cost Optimization"],
            downloadUrl: "#",
            isPremium: false,
            readTime: "35 min read",
            pageCount: 25
        },
        {
            id: 5,
            title: "Machine Learning Operations (MLOps): Best Practices for Production AI",
            category: "AI & Machine Learning",
            date: "2024-09-30",
            author: "Marcus Rodriguez",
            description: "Comprehensive guide to MLOps, covering model deployment, monitoring, and maintenance in production environments.",
            topics: ["MLOps", "Model Deployment", "Production AI", "Monitoring"],
            downloadUrl: "#",
            isPremium: true,
            readTime: "50 min read",
            pageCount: 30
        },
        {
            id: 6,
            title: "Zero-Trust Security Architecture: Implementation and Best Practices",
            category: "Cybersecurity",
            date: "2024-08-15",
            author: "Alex Thompson",
            description: "Detailed implementation guide for zero-trust security architecture, including practical examples and best practices.",
            topics: ["Zero-Trust", "Security Architecture", "Implementation", "Best Practices"],
            downloadUrl: "#",
            isPremium: false,
            readTime: "30 min read",
            pageCount: 20
        }
    ];

    const categories = [
        { name: "All", count: 6, active: true },
        { name: "AI & Machine Learning", count: 2, active: false },
        { name: "Cybersecurity", count: 2, active: false },
        { name: "Digital Transformation", count: 1, active: false },
        { name: "Cloud & Infrastructure", count: 1, active: false },
        { name: "AI Ethics", count: 1, active: false }
    ];

    return (
        <>
            <SEO 
                title="White Papers - Zion Tech Group" 
                description="Access our comprehensive collection of white papers on AI, cybersecurity, digital transformation, and emerging technologies." 
                keywords="white papers, AI research, cybersecurity, digital transformation, technology insights" 
                canonical="https://ziontechgroup.com/white-papers"
            />
            <Header />
            <main className="min-h-screen bg-zion-blue pt-24 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <GradientHeading>White Papers & Research</GradientHeading>
                        <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
                            Access in-depth research and insights on the latest technology trends, AI advancements, and digital transformation strategies.
                        </p>
                    </div>

                    {/* Categories Filter */}
                    <div className="mb-12">
                        <div className="flex flex-wrap justify-center gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category.name}
                                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                                        category.active
                                            ? 'bg-zion-cyan text-white'
                                            : 'bg-zion-blue-light text-zion-slate-light hover:bg-zion-cyan hover:text-white'
                                    }`}
                                >
                                    {category.name} ({category.count})
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* White Papers Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whitePapers.map((paper) => (
                            <div key={paper.id} className="bg-zion-blue-light border border-zion-blue-lighter rounded-lg p-6 hover:border-zion-cyan transition-colors">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center">
                                        <FileText className="h-8 w-8 text-zion-cyan mr-3" />
                                        <div>
                                            <span className={`px-2 py-1 text-xs rounded-full ${
                                                paper.isPremium 
                                                    ? 'bg-zion-amber text-white' 
                                                    : 'bg-zion-green text-white'
                                            }`}>
                                                {paper.isPremium ? 'Premium' : 'Free'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right text-sm text-zion-slate-light">
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            {new Date(paper.date).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                                    {paper.title}
                                </h3>

                                <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                                    {paper.description}
                                </p>

                                <div className="mb-4">
                                    <div className="flex items-center text-zion-slate-light text-sm mb-2">
                                        <User className="h-4 w-4 mr-2" />
                                        {paper.author}
                                    </div>
                                    <div className="flex items-center text-zion-slate-light text-sm mb-2">
                                        <BookOpen className="h-4 w-4 mr-2" />
                                        {paper.readTime} • {paper.pageCount} pages
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-white font-medium mb-2 text-sm">Topics:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {paper.topics.map((topic, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-zion-blue-dark text-zion-cyan text-xs rounded border border-zion-blue-lighter"
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                                    <Download className="h-4 w-4 mr-2" />
                                    Download White Paper
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <div className="bg-zion-blue-dark border border-zion-blue-lighter rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Stay Updated with Latest Research
                            </h2>
                            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                                Get notified when we publish new white papers and research insights. 
                                Stay ahead of the curve with cutting-edge technology knowledge.
                            </p>
                            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                                Subscribe to Updates
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default WhitePapers;
