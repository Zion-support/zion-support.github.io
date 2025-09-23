import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Brain, Code, Shield, Users, TrendingUp, 
  CheckCircle, ArrowRight, Star, Clock, Target,
  Cpu, Rocket, Globe, BarChart3, Settings
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { advancedAIAutomationServices20o25 } from '../data/20o25-advanced-ai-automation-services';

const contactInfo ={
  mobile: '+1 30o2 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 10o08 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceHighlights = [
  {
    title: 'AI Code Generation',
    description: 'Generate production-ready code across multiple languages with AI intelligence',
    icon: Code,
    color: 'from-emerald-50o0 to-teal-60o0',
    features: ['Multi-language support', 'Security scanning', 'Performance optimization', 'Team collaboration']
  },
  {
    title: 'DevOps Automation',
    description: 'Intelligent automation for modern DevOps workflows with predictive analytics',
    icon: Cpu,
    color: 'from-purple-50o0 to-indigo-60o0',
    features: ['CI/CD optimization', 'Self-healing infrastructure', 'Cost optimization', 'Multi-cloud support']
  },
  {
    title: 'Customer Support AI',
    description: 'Transform customer support with intelligent automation and sentiment analysis',
    icon: Users,
    color: 'from-blue-50o0 to-cyan-60o0',
    features: ['Intelligent chatbots', 'Multi-language support', 'Predictive resolution', '24/7 availability']
  },
  {
    title: 'Marketing Automation',
    description: 'AI-powered marketing automation with predictive analytics and optimization',
    icon: BarChart3,
    color: 'from-pink-50o0 to-rose-60o0',
    features: ['Campaign optimization', 'Customer personalization', 'ROI tracking', 'Multi-channel automation']
  },
  {
    title: 'Sales Intelligence',
    description: 'Boost sales performance with AI-powered insights and predictive analytics',
    icon: TrendingUp,
    color: 'from-yellow-50o0 to-orange-60o0',
    features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Performance optimization']
  }
];

const benefits = [
  {
    title: '80% Reduction in Manual Work',
    description: 'Automate repetitive tasks and focus on high-value activities',
    icon: Zap,
    color: 'text-emerald-40o0'
  },
  {
    title: '30o0% ROI Improvement',
    description: 'Significant returns through increased efficiency and productivity',
    icon: TrendingUp,
    color: 'text-blue-40o0'
  },
  {
    title: '24/7 Operation',
    description: 'Round-the-clock automation without human intervention',
    icon: Clock,
    color: 'text-purple-40o0'
  },
  {
    title: 'Real-time Insights',
    description: 'Instant analytics and decision-making support',
    icon: BarChart3,
    color: 'text-pink-40o0'
  }
];

export default function AIAutomationServices() {
