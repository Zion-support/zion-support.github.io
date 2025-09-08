import React from 'react';
import { SEO } from "@/components/SEO";
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function ZionHireAI() {
  const successMetrics = [
    { metric: "95%", label: "Faster Hiring" },
    { metric: "3x", label: "Better Matches" },
    { metric: "80%", label: "Cost Reduction" },
    { metric: "24/7", label: "AI Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      <SEO 
        title="Zion Hire AI - White-labeled AI Recruiting Assistant" 
        description="Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience." 
        keywords="AI hiring, AI recruiting, talent acquisition, AI assistant, Zion Hire AI" 
        canonical="https://ziontechgroup.com/zion-hire-ai"
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Hire AI
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI-powered hiring platform that transforms recruitment, screening, onboarding, and retention
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://ziontechgroup.com" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </a>
              <a href="#demo" className="px-8 py-4 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-colors">
                Watch Demo
              </a>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {item.metric}
                </div>
                <div className="text-zinc-300">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Demo Image */}
          <div className="relative hidden md:block mb-16">
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl"></div>
            <img 
              loading="lazy" 
              src="https://placehold.co/600x400/192134/9b87f5?text=Zion+Hire+AI" 
              alt="Zion Hire AI Dashboard" 
              className="relative z-10 rounded-lg shadow-xl mx-auto"
            />
          </div>

          {/* Contact Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-zinc-300 text-center mb-6">
              Join hundreds of companies already using Zion Hire AI to revolutionize their recruitment
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2"/>
                <p className="text-white font-semibold">Phone</p>
                <p className="text-zinc-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2"/>
                <p className="text-white font-semibold">Email</p>
                <p className="text-zinc-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2"/>
                <p className="text-white font-semibold">Address</p>
                <p className="text-zinc-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="text-center">
              <a href="https://ziontechgroup.com" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors" target="_blank" rel="noopener noreferrer">
                Start Your Free Trial Today
                <ArrowRight className="w-5 h-5 ml-2"/>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
