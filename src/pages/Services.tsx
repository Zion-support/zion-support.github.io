import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';

const Services: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Comprehensive technology solutions designed to transform your business 
            and drive innovation across all sectors.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="AI & Machine Learning"
            description="Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and computer vision."
            icon="🤖"
          />
          <ServiceCard
            title="Cybersecurity"
            description="Protect your digital assets with comprehensive security solutions including threat detection, vulnerability assessment, and compliance."
            icon="🔒"
          />
          <ServiceCard
            title="Cloud Infrastructure"
            description="Scale your operations with robust cloud solutions including migration, optimization, and managed services."
            icon="☁️"
          />
          <ServiceCard
            title="Blockchain & Web3"
            description="Leverage blockchain technology for secure, transparent, and decentralized business solutions."
            icon="⛓️"
          />
          <ServiceCard
            title="IoT & Edge Computing"
            description="Connect and manage devices with intelligent edge computing solutions for real-time data processing."
            icon="🌐"
          />
          <ServiceCard
            title="Data Analytics"
            description="Unlock insights from your data with advanced analytics, visualization, and business intelligence tools."
            icon="📊"
          />
        </div>

        {/* Industry Solutions */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">Industry Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <Card title="Healthcare" description="AI-powered medical solutions" />
            <Card title="Finance" description="Secure fintech innovations" />
            <Card title="Manufacturing" description="Smart factory automation" />
            <Card title="Retail" description="E-commerce optimization" />
            <Card title="Education" description="Digital learning platforms" />
            <Card title="Government" description="Public sector modernization" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;