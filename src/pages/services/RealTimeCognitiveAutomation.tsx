import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import {
  ArrowLeft,
  Brain,
  Zap,
  CheckCircle,
  DollarSign,
  Rocket,
  Shield,
  Cpu,
  BarChart3,
  Users,
  Clock,
  Target
} from 'lucide-react';

const RealTimeCognitiveAutomation: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Real-Time Cognitive Automation Platform | Transform Business Operations with AI | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Transform operations with Real-Time Cognitive Automation Platform. 94% accuracy, 85% cost reduction, 10x productivity gains. AI-powered workflows that learn and optimize autonomously." 
        />
        <meta 
          name="keywords" 
          content="cognitive automation, intelligent automation, RPA, AI workflows, process automation, business automation, hyperautomation" 
        />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />

        <article className="container mx-auto px-6 py-20">
          {/* Back Link */}
          <Link 
            to="/services"
            className="inline-flex items-center text-zion-cyan hover:text-zion-blue-light mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          {/* Header */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30">
                🚀 NEW! October 2025
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold border border-green-500/30">
                🤖 AI Automation
              </span>
              <span className="text-zion-slate-light">Starting at $7,999/month</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Real-Time Cognitive Automation Platform
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mt-2">
                Transform Business Operations with Intelligent Automation
              </span>
            </h1>

            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Revolutionize your business operations with AI-powered workflows that deliver instant decision-making,
              self-learning automation, and 99.97% accuracy. Achieve 87% cost reduction and 10x productivity gains.
            </p>

            {/* Key Metrics Banner */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-purple-900/40 rounded-xl p-6 border border-purple-500/30 text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-purple-400 mb-2">94%</div>
                <div className="text-sm text-zion-slate-light">Process Accuracy</div>
              </div>
              <div className="bg-green-900/40 rounded-xl p-6 border border-green-500/30 text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
                <div className="text-sm text-zion-slate-light">Cost Reduction</div>
              </div>
              <div className="bg-blue-900/40 rounded-xl p-6 border border-blue-500/30 text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-blue-400 mb-2">10x</div>
                <div className="text-sm text-zion-slate-light">Productivity Gain</div>
              </div>
              <div className="bg-cyan-900/40 rounded-xl p-6 border border-cyan-500/30 text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.97%</div>
                <div className="text-sm text-zion-slate-light">Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto space-y-20">
            
            {/* What is Real-Time Cognitive Automation */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Brain className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">What is Real-Time Cognitive Automation?</h2>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-zion-cyan/30">
                <p className="text-lg text-zion-slate-light leading-relaxed mb-6">
                  Real-Time Cognitive Automation combines advanced AI, machine learning, and process automation 
                  to create intelligent workflows that can understand, learn, and adapt to your business operations 
                  in real-time. Unlike traditional automation, our platform thinks, learns, and evolves.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Traditional Automation</h3>
                    <ul className="space-y-2 text-zion-slate-light">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">✗</span>
                        Static, rule-based processes
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">✗</span>
                        Requires manual updates
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">✗</span>
                        Limited error handling
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">✗</span>
                        No learning capability
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Cognitive Automation</h3>
                    <ul className="space-y-2 text-zion-slate-light">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        Dynamic, intelligent processes
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        Self-improving algorithms
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        Advanced error recovery
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        Continuous learning & adaptation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Features */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Core Features</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Brain className="w-8 h-8 text-purple-400" />,
                    title: "Intelligent Process Discovery",
                    description: "AI automatically maps and analyzes your business processes to identify optimization opportunities."
                  },
                  {
                    icon: <Cpu className="w-8 h-8 text-blue-400" />,
                    title: "Real-Time Decision Making",
                    description: "Instant analysis and decision-making capabilities with sub-second response times."
                  },
                  {
                    icon: <Shield className="w-8 h-8 text-green-400" />,
                    title: "Self-Healing Workflows",
                    description: "Automatically detects and resolves issues without human intervention."
                  },
                  {
                    icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
                    title: "Predictive Analytics",
                    description: "Advanced forecasting and trend analysis to optimize future operations."
                  },
                  {
                    icon: <Users className="w-8 h-8 text-orange-400" />,
                    title: "Human-AI Collaboration",
                    description: "Seamless integration between human workers and AI systems for optimal results."
                  },
                  {
                    icon: <Clock className="w-8 h-8 text-red-400" />,
                    title: "24/7 Autonomous Operation",
                    description: "Continuous monitoring and execution with enterprise-grade reliability."
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/30">
                    <div className="flex items-center gap-4 mb-4">
                      {feature.icon}
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-zion-slate-light">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing & Packages */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <DollarSign className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Pricing & Packages</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Business Starter",
                    price: "$7,999",
                    description: "Perfect for small to medium businesses",
                    features: [
                      "Up to 50 automated processes",
                      "Basic AI learning capabilities",
                      "Standard support",
                      "Monthly reporting"
                    ],
                    popular: false
                  },
                  {
                    name: "Professional",
                    price: "$19,999",
                    description: "Advanced features for growing enterprises",
                    features: [
                      "Up to 200 automated processes",
                      "Advanced AI learning",
                      "Priority support",
                      "Real-time analytics",
                      "Custom integrations"
                    ],
                    popular: true
                  },
                  {
                    name: "Enterprise",
                    price: "Custom",
                    description: "Tailored solutions for large organizations",
                    features: [
                      "Unlimited processes",
                      "Full AI customization",
                      "Dedicated support team",
                      "Advanced security",
                      "White-label options"
                    ],
                    popular: false
                  }
                ].map((pkg, index) => (
                  <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border ${pkg.popular ? 'border-purple-500/50 ring-2 ring-purple-500/30' : 'border-zion-cyan/30'}`}>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                      <div className="text-4xl font-bold text-purple-400 mb-2">{pkg.price}</div>
                      <p className="text-zion-slate-light">{pkg.description}</p>
                    </div>
                    
                    <ul className="space-y-3">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                          <span className="text-zion-slate-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to="/contact"
                      className="w-full mt-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Zap className="w-5 h-5" />
                      Get Started
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Launch Special */}
            <section>
              <div className="bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-cyan-900/40 rounded-xl p-8 border-2 border-purple-500/50">
                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Rocket className="w-8 h-8 text-purple-400" />
                      <h3 className="text-2xl font-bold text-white">🚀 October 2025 Launch Special</h3>
                    </div>
                    
                    <p className="text-lg text-zion-slate-light mb-6">
                      Limited-time offer for early adopters! Get our Real-Time Cognitive Automation Platform 
                      with exclusive bonuses worth over $40,000.
                    </p>
                    
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span>Free process assessment ($15,000 value)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span>Complimentary pilot implementation ($25,000 value)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span>6 months of premium support included</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <Link 
                      to="/contact"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2 text-lg"
                    >
                      <Zap className="w-5 h-5" />
                      Claim Special Offer
                    </Link>
                    <p className="text-sm text-zion-slate-light mt-2">Limited time offer</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Join forward-thinking companies already using Real-Time Cognitive Automation 
                to achieve unprecedented efficiency and growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Target className="w-5 h-5" />
                  Schedule Demo
                </Link>
                <Link 
                  to="/contact"
                  className="border border-zion-cyan text-zion-cyan font-semibold py-4 px-8 rounded-xl hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  Talk to Expert
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
};

export default RealTimeCognitiveAutomation;