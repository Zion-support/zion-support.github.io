import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
      title: "Financial AI & Machine Learning",
      description: "Advanced AI solutions for financial institutions with predictive analytics and risk assessment",
      icon: <Brain className="w-8 h-8" />,
      features: ["Fraud detection systems", "Credit risk assessment", "Algorithmic trading", "Regulatory compliance"],
      href: "/services?category=ai-ml"
    },
    {
      title: "Financial Cybersecurity",
      description: "Bank-grade security solutions for financial institutions",
      icon: <ShieldIcon className="w-8 h-8" />,
      features: ["PCI DSS compliance", "Advanced threat protection", "Secure payment processing", "Data encryption"],
      href: "/services?category=security"
    },
    {
      title: "Financial Cloud Infrastructure",
      description: "Secure cloud solutions designed for financial services",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Multi-region deployment", "Compliance automation", "High availability", "Cost optimization"],
      href: "/services?category=cloud"
    },
    {
      title: "Financial Analytics & BI",
      description: "Real-time financial analytics and business intelligence",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time reporting", "Predictive analytics", "Regulatory reporting", "Executive dashboards"],
      href: "/services?category=bi"
    }
  ];

  const benefits = [
    {
      title: "Compliance",
      description: "Built-in regulatory compliance",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Security",
      description: "Bank-grade security standards",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Scalability",
      description: "Handles high transaction volumes",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Analytics",
      description: "Advanced financial insights",
      icon: <PieChart className="w-6 h-6" />
    }
  ];

const financial: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>financial | Zion Tech Group</title>
        <meta name="description" content="financial - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">financial</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default financial;
