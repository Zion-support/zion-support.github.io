// Removed unused: import React from 'react';
import { SEO } from '../components/SEO';

export default function ServicesComparisonPage(...args[]):  {
  return (
    <React.Fragment>
      <SEO
        title="Services Comparison | Zion Tech Group"
        description="Compare our comprehensive range of technology services and find the perfect solution for your business needs."
        keywords="services comparison, technology services, AI services, IT services, Zion Tech Group"
        canonical="https://ziontechgroup.com/services-comparison"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Services Comparison
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare our comprehensive range of technology services and find the perfect solution for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-zion-blue"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Expertise</h3>
              <p className="text-zion-slate-light">Cutting-edge AI solutions with proven results</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-zion-blue"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">Bank-level security and compliance standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-zion-blue"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">Certified professionals with industry experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-zion-blue"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-zion-slate-light">Track record of successful implementations</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )}