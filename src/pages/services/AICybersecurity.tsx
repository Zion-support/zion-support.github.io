import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Brain, Zap, Users, Target, ArrowRight, CheckCircle, Star, Lightbulb, Database, Cpu, Globe, Rocket, Lock, Eye, AlertTriangle, Network } from 'lucide-react';

export default function AICybersecurity() {
  const features = [
    {
      icon: Brain,
      title: "AI Threat Detection",
      description: "Advanced machine learning for real-time threat identification and response"
    },
    {
      icon: Shield,
      title: "Intelligent Defense",
      description: "AI-powered security systems that adapt and learn from attacks"
    },
    {
      icon: Eye,
      title: "Continuous Monitoring",
      description: "24/7 surveillance with instant threat detection and alerting"
    },
    {
      icon: Lock,
      title: "Zero Trust Security",
      description: "Comprehensive access control and identity verification systems"
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Instant threat mitigation and incident response automation"
    },
    {
      icon: Target,
      title: "Predictive Security",
      description: "Forecast and prevent cyber attacks before they occur"
    }
  ];

  const benefits = [
    "Detect threats 10x faster than traditional methods",
    "Reduce false positives by 85%",
    "Improve incident response time by 90%",
    "Lower security costs by 40%",
    "Enhance compliance by 95%",
    "Provide 24/7 automated protection"
  ];

  const useCases = [
    {
      industry: "Financial Services",
      applications: ["Fraud Detection", "Transaction Monitoring", "Compliance", "Risk Assessment"]
    },
    {
      industry: "Healthcare",
      applications: ["Patient Data Protection", "HIPAA Compliance", "Medical Device Security", "Access Control"]
    },
    {
      industry: "Manufacturing",
      applications: ["OT Security", "Supply Chain Protection", "Intellectual Property", "Network Security"]
    },
    {
      industry: "Government",
      applications: ["National Security", "Critical Infrastructure", "Data Classification", "Threat Intelligence"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-emerald-900/20 to-teal-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-green-300 text-sm font-medium">AI-Powered Security</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI Cybersecurity
              <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your organization with next-generation AI-powered cybersecurity. Detect threats in real-time, 
              respond automatically, and stay ahead of evolving cyber risks with intelligent security automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-green-500/30 text-green-300 hover:bg-green-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Cybersecurity Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with security expertise to deliver unprecedented cyber protection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-green-500/50 transition-all duration-300 hover:bg-slate-800/80">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Transform Your Security Posture with AI
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI Cybersecurity Platform delivers measurable improvements across all aspects of security operations, 
                from threat detection to incident response and compliance.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
                    <div className="text-sm text-gray-300">Faster Detection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">85%</div>
                    <div className="text-sm text-gray-300">Fewer False Positives</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-400 mb-2">90%</div>
                    <div className="text-sm text-gray-300">Faster Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                    <div className="text-sm text-gray-300">Cost Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how AI Cybersecurity transforms security across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-green-500/50 transition-all duration-300 hover:bg-slate-800/80">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg w-fit mb-4">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Security Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge AI technologies for maximum security and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Brain, name: "Machine Learning", description: "Advanced threat detection" },
              { icon: Shield, name: "Zero Trust", description: "Comprehensive access control" },
              { icon: Eye, name: "Behavioral Analysis", description: "User and entity monitoring" },
              { icon: Globe, name: "Global Intelligence", description: "Threat intelligence sharing" },
              { icon: Lock, name: "Encryption", description: "End-to-end data protection" },
              { icon: Zap, name: "Performance", description: "High-speed security processing" },
              { icon: Users, name: "Collaboration", description: "Security team coordination" },
              { icon: Rocket, name: "Innovation", description: "Continuous security advancement" }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30 mb-4 group-hover:border-green-500/50 transition-all duration-300">
                  <tech.icon className="w-8 h-8 text-green-400 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/50 via-emerald-900/50 to-teal-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the AI cybersecurity revolution and protect your assets with our intelligent security platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-green-500/30 text-green-300 hover:bg-green-500/10 font-semibold rounded-lg transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}