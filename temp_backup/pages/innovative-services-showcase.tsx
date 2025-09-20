import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Star, TrendingUp, Zap, Brain, Rocket, Shield, 
  DollarSign, Users, Clock, CheckCircle, ArrowRight,
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { emergingTechServicesEnhanced2025 } from '../data/emerging-tech-services';
import { nextGenAIServices } from '../data/next-gen-ai-services';

export default function InnovativeServicesShowcase() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const featuredServices = [
    {
      title: '🔐 Quantum Internet Security Platform',
      description: 'ArrowRight-generation quantum-secured internet infrastructure with unbreakable encryption. Protect enterprise networks with quantum-resistant protocols.',
      price: '$8,999/month',
      marketData: '$150B cybersecurity market, 300% annual growth',
      competitors: 'Traditional cybersecurity solutions',
      savings: 'Quantum-level protection vs. traditional methods',
      features: ['Quantum key distribution (QKD)', 'Post-quantum cryptography', 'Quantum-resistant VPN tunnels', 'Real-time threat detection', 'Zero-trust architecture'],
      link: 'https://ziontechgroup.com/quantum-internet-security-platform',
      color: 'from-indigo-600 to-purple-700'
    },
    {
      title: '🧬 AI-Powered Quantum Drug Discovery',
      description: 'Revolutionary platform combining quantum computing and AI to accelerate drug discovery by 100x. Simulates molecular interactions at quantum level.',
      price: '$12,999/month',
      marketData: '$150B AI in healthcare, 400% annual growth',
      competitors: 'Insitro ($100M+ funding), Recursion ($2B+ funding)',
      savings: '100x faster drug discovery vs. traditional methods',
      features: ['Quantum molecular simulation', 'AI-powered drug screening', 'Protein folding prediction', 'Drug interaction modeling', 'Clinical trial optimization'],
      link: 'https://ziontechgroup.com/ai-quantum-drug-discovery',
      color: 'from-emerald-600 to-teal-700'
    },
    {
      title: '💰 Autonomous Quantum Trading System',
      description: 'AI-powered quantum trading with nanosecond precision. Process market data at quantum speeds for unprecedented accuracy and returns.',
      price: '$15,999/month',
      marketData: '$15T algorithmic trading, 200% annual growth',
      competitors: 'Renaissance Technologies, Two Sigma, Citadel',
      savings: 'Accessible quantum AI for smaller firms',
      features: ['Quantum AI trading algorithms', 'Nanosecond execution', 'Real-time market analysis', 'Risk management', 'Portfolio optimization'],
      link: 'https://ziontechgroup.com/autonomous-quantum-trading-system',
      color: 'from-yellow-600 to-orange-700'
    },
    {
      title: '🧠 Neural Interface Development Platform',
      description: 'Revolutionary platform for developing neural interfaces that connect human brains directly to computers. Enables next-generation human-AI collaboration.',
      price: '$19,999/month',
      marketData: '$5B neural interface market, 500% annual growth',
      competitors: 'Basic research tools, Traditional medical devices',
      savings: 'First comprehensive neural interface platform',
      features: ['Neural signal processing', 'Brain activity monitoring', 'AI-powered interpretation', 'Real-time communication', 'Safety protocols'],
      link: 'https://ziontechgroup.com/neural-interface-development-platform',
      color: 'from-purple-600 to-indigo-700'
    }
  ];

const innovative-services-showcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>innovative-services-showcase | Zion Tech Group</title>
        <meta name="description" content="innovative-services-showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">innovative-services-showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default innovative-services-showcase;
