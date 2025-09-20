import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Scale, Search, TrendingUp, Shield, Zap, Target, 
  CheckCircle, Star, Globe, Lock, Smartphone, Monitor, 
  Award, MessageCircle, Cpu
} from 'lucide-react';

export default function AILegalResearchPlatform() {
  const features = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'Legal Research Automation',
      description: 'AI-powered legal research that analyzes case law, statutes, and legal precedents with unprecedented speed and accuracy.'
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Case Analysis',
      description: 'Intelligent case analysis with AI-powered insights and legal reasoning identification.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Document Review',
      description: 'Advanced document review with automated contract analysis and legal document classification.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Legal Document Generation',
      description: 'AI-powered legal document generation with customizable templates and compliance checking.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Compliance Monitoring',
      description: 'Automated compliance monitoring and risk assessment for legal and regulatory requirements.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Legal Analytics',
      description: 'Comprehensive legal analytics with trend analysis and outcome prediction for legal strategies.'
    }
  ];

  const benefits = [
    'Reduce research time by 80%',
    'Improve case outcomes by 60%',
    'Increase research accuracy by 70%',
    'Reduce legal costs by 50%',
    'Accelerate document review by 200%',
    'Enhance legal strategy by 150%',
    'Scale legal operations',
    'Future-proof legal practice'
  ];

  const useCases = [
    'Legal Research', 'Case Analysis', 'Document Review',
    'Contract Analysis', 'Compliance Monitoring', 'Legal Analytics',
    'Risk Assessment', 'Document Generation', 'Precedent Analysis',
    'Regulatory Research', 'Litigation Support', 'Legal Intelligence'
  ];

const ai-legal-research-platform: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>ai-legal-research-platform | Zion Tech Group</title>
        <meta name="description" content="ai-legal-research-platform - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">ai-legal-research-platform</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default ai-legal-research-platform;
