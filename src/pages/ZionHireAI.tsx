import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function ZionHireAI() {
  return (
    <>
      <SEO 
        title="Zion Hire AI - Zion Tech Group" 
        description="AI-powered hiring solutions to find the best talent for your organization." 
        keywords="AI hiring, talent acquisition, recruitment, Zion Tech Group"
        url="https://ziontechgroup.com/zion-hire-ai"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Zion Hire AI</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              AI-powered hiring solutions to find the best talent for your organization
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Smart Screening</h3>
                <p className="text-zion-slate-light mb-4">
                  AI-powered resume screening and candidate evaluation
                </p>
                <button className="bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                  Learn More
                </button>
              </div>
              
              <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Talent Matching</h3>
                <p className="text-zion-slate-light mb-4">
                  Intelligent matching of candidates to job requirements
                </p>
                <button className="bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                  Learn More
                </button>
              </div>
              
              <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Interview AI</h3>
                <p className="text-zion-slate-light mb-4">
                  Automated interview scheduling and candidate assessment
                </p>
                <button className="bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}