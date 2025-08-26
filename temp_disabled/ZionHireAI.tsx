
import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function ZionHireAI() {
  const features = [
    {
      icon: '🤖',
      label: 'AI-Powered Matching',
      description: 'Advanced algorithms match candidates to job requirements with 95% accuracy'
    },
    {
      icon: '📊',
      label: 'Predictive Analytics',
      description: 'Data-driven insights predict candidate success and cultural fit'
    },
    {
      icon: '⚡',
      label: 'Automated Screening',
      description: 'Reduce screening time by 80% with intelligent automation'
    },
    {
      icon: '🎯',
      label: 'Skill Assessment',
      description: 'Comprehensive technical and soft skill evaluation'
    },
    {
      icon: '🔒',
      label: 'Secure & Compliant',
      description: 'Enterprise-grade security with GDPR and SOC2 compliance'
    },
    {
      icon: '📱',
      label: 'Mobile First',
      description: 'Optimized for mobile devices with responsive design'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark">
        <div className="container mx-auto px-4 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion Hire AI
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Revolutionize your hiring process with AI-powered talent matching that finds the perfect candidates faster than ever before
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-4 bg-zion-cyan hover:bg-zion-cyan-light text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Get Started
              </a>
              <a 
                href="/request-quote"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Request Demo
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.label}
                </h3>
                <p className="text-zion-slate-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Demo Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 mb-20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  See Zion Hire AI in Action
                </h2>
                <p className="text-zion-slate-light mb-6">
                  Our AI-powered platform analyzes thousands of data points to find the perfect match between candidates and your company culture.
                </p>
                <ul className="space-y-3 text-zion-slate-light">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Intelligent candidate scoring
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Automated interview scheduling
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Real-time collaboration tools
                  </li>
                </ul>
              </div>
              <div className="relative hidden md:block">
                <div className="absolute -top-8 -left-8 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl"></div>
                <img loading="lazy"
                  src="https://placehold.co/600x400/192134/9b87f5?text=Zion+Hire+AI"
                  alt="Zion Hire AI Dashboard"
                  className="relative z-10 rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-zion-slate-light text-center mb-6">
              Join hundreds of companies already using Zion Hire AI to revolutionize their recruitment
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan hover:bg-zion-cyan-light text-white font-semibold rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Free Trial Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
