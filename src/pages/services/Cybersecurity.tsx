import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  Brain, 
  Zap, 
  Users, 
  TrendingUp, 
  Lock, 
  Clock,
  BarChart3,
  AlertTriangle,
  Eye
} from 'lucide-react';

export default function Cybersecurity() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <SEO 
        title="Cybersecurity Services - Zion Tech Group"
        description="Comprehensive security solutions that protect your digital assets and ensure business continuity. Advanced AI-powered threat detection and zero trust security."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-orange-900 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max-w-4xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Cybersecurity Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive security solutions that protect your digital assets and ensure business continuity. Safeguard your organization with our advanced cybersecurity services.
              </p>
            </div>
            <div className="mb-16">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold text-lg rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-red-500/25"
              >
                Get Started with Cybersecurity
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your organization with our advanced cybersecurity services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI-Powered Threat Detection</h3>
              <p className="text-gray-300">
                Advanced artificial intelligence that identifies and responds to threats in real-time
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Zero Trust Security</h3>
              <p className="text-gray-300">
                Implement zero trust architecture to verify every user and device access attempt
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data Protection & Encryption</h3>
              <p className="text-gray-300">
                Comprehensive data security with advanced encryption and access controls
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-yellow-600/20 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Incident Response</h3>
              <p className="text-gray-300">
                Rapid response and recovery services to minimize damage from security incidents
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Security Analytics</h3>
              <p className="text-gray-300">
                Advanced analytics and reporting to monitor security posture and compliance
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Security Training</h3>
              <p className="text-gray-300">
                Comprehensive security awareness training for your organization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Start protecting your digital assets with our comprehensive cybersecurity services
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold text-lg rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-red-500/25"
          >
            Get Started with Cybersecurity
          </a>
        </div>
      </section>
    </div>
  );
}