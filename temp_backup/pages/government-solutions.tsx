import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Building, Globe, Brain, Lock, Users, Target, Award } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function GovernmentSolutions() {
  const solutions = [
    {
      icon: <Shield className="w-12 h-12 text-cyan-400" />,
      title: "Government Cybersecurity",
      description: "FIPS-compliant security solutions for government agencies",
      href: "/government-technology-solutions"
    },
    {
      icon: <Building className="w-12 h-12 text-blue-400" />,
      title: "Digital Transformation",
      description: "Modernize government services with AI and automation",
      href: "/ai-autonomous-business-operations"
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-400" />,
      title: "Cloud Infrastructure",
      description: "FedRAMP-ready cloud solutions for government workloads",
      href: "/multi-cloud-disaster-recovery"
    },
    {
      icon: <Brain className="w-12 h-12 text-green-400" />,
      title: "AI for Government",
      description: "AI-powered solutions for public sector efficiency",
      href: "/ai-powered-decision-engine"
    },
    {
      icon: <Lock className="w-12 h-12 text-yellow-400" />,
      title: "Compliance & Security",
      description: "Meet government security and compliance requirements",
      href: "/soc2-compliance-automation"
    },
    {
      icon: <Users className="w-12 h-12 text-pink-400" />,
      title: "Citizen Services",
      description: "Improve citizen experience with digital solutions",
      href: "/intelligent-content-automation-platform"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>government-solutions | Zion Tech Group</title>
        <meta name="description" content="government-solutions - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">government-solutions</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};
export default government-solutions;