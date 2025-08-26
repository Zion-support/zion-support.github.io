import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Calendar, User, Tag, ArrowRight, Search, Filter, BookOpen, Globe, Zap, Target, TrendingUp, Brain, Atom, Shield, Wifi, Leaf, Cloud, BarChart3 } from 'lucide-react';

const WhitePapers: React.FC = () => {
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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            White Papers & Research
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access our comprehensive research and insights on emerging technologies, industry trends, and best practices.
          </p>
        </div>
      </section>
      
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.map((paper) => (
              <div key={paper.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-3">{paper.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{paper.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{paper.author}</span>
                  <span>{paper.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapers;
