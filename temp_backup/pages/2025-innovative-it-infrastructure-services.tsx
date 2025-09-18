import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, Cloud, Globe, Zap, Star, Users, TrendingUp, 
  CheckCircle, ArrowRight, Phone, Mail, MapPin,
  Rocket, Target, Cpu, Lock, Server, Database
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const heroStats = [
  { label: 'IT Services', value: '12+', icon: <Shield className="w-6 h-6" /> },
  { label: 'Enterprise Clients', value: '300+', icon: <Users className="w-6 h-6" /> },
  { label: 'Uptime Guarantee', value: '99.99%', icon: <Star className="w-6 h-6" /> },
  { label: 'Cost Reduction', value: '60%', icon: <TrendingUp className="w-6 h-6" /> }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function InnovativeITInfrastructureServices2025() {
=======
import { Helmet } from 'react-helmet-async';

const 2025-innovative-it-infrastructure-services: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2025-innovative-it-infrastructure-services | Zion Tech Group</title>
        <meta name="description" content="2025-innovative-it-infrastructure-services - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2025-innovative-it-infrastructure-services</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default 2025-innovative-it-infrastructure-services;
