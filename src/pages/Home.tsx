import React, { memo, useState, useEffect } from 'react';
import Link from 'next/link';

import React from 'react';
import { SEO } from "@/components/SEO";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";

export default function Home() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const firstName =
    user?.displayName?.split(' ')[0] || 'User';
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://ziontechgroup.com/"
      />

      <div className="py-20 bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
            The world's first comprehensive marketplace dedicated to high-tech and artificial intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/micro-saas-services"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Explore Micro SAAS Services
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <FeatureCTAs />
    </div>
  );
});

StatsSection.displayName = 'StatsSection';

const Home: React.FC = memo(() => {
  const services = [
    {
      title: 'AI Services',
      description: 'Revolutionary AI-powered solutions that transform businesses and drive innovation',
      icon: '🤖',
      link: '/services#ai',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'IT Services', 
      description: 'Comprehensive managed IT solutions with 24/7 support and cutting-edge security',
      icon: '💻',
      link: '/services#it',
      features: ['Cloud Infrastructure', 'Cybersecurity', 'Network Management', 'Data Backup']
    },
    {
      title: 'Micro SAAS',
      description: 'Scalable software solutions designed for modern businesses and startups',
      icon: '🚀',
      link: '/services#saas',
      features: ['Custom Development', 'API Integration', 'Scalable Architecture', 'Maintenance']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-20">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent animate-pulse">
          Zion Tech Group
        </h1>
        <p className="text-2xl md:text-3xl text-blue-200 mb-4 font-light">
          Next-Generation Technology Solutions
        </p>
        <p className="text-lg text-blue-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Empowering businesses with cutting-edge AI, robust IT infrastructure, and innovative Micro SaaS solutions. 
          Transform your digital future with our expert team.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <Link 
          href="/contact" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Get Started Today
        </Link>
        <Link 
          href="/services" 
          className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Explore Services
        </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              features={service.features}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* Success Message */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center bg-green-500/20 border border-green-400/30 rounded-full px-6 py-3">
          <span className="text-green-400 mr-2">✅</span>
          <p className="text-green-300 font-medium">
            Successfully built and deployed on Netlify! 🚀
          </p>
        </div>
      </div>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;