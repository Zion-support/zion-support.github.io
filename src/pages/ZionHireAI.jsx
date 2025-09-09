import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Bot,
  Users,
  Search,
  CheckCircle,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Brain,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Play,
  Download,
  BookOpen,
  MessageSquare,
  Workflow,
  Target,
  Database,
  Cloud,
  Lock,
  Eye,
  BarChart,
  PieChart,
  Activity,
  Calendar,
  Clock,
  Globe,
  X,
  Code
} from 'lucide-react';

export default function ZionHireAI() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [selectedTab, setSelectedTab] = useState('overview');

  const successMetrics = [
    { metric: "95%", label: "Faster Hiring" },
    { metric: "87%", label: "Better Matches" },
    { metric: "73%", label: "Cost Reduction" },
    { metric: "99%", label: "Client Satisfaction" }
  ];

  const features = [
    {
      icon: Bot,
      title: "AI-Powered Screening",
      description: "Advanced AI algorithms that analyze resumes, assess skills, and identify the best candidates for your positions.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Smart Candidate Matching",
      description: "Intelligent matching system that connects candidates with roles based on skills, experience, and cultural fit.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Search,
      title: "Talent Discovery",
      description: "Discover hidden talent through AI-powered sourcing and passive candidate identification.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CheckCircle,
      title: "Automated Onboarding",
      description: "Streamlined onboarding process with automated workflows and personalized experiences.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Data-driven insights that predict candidate success and optimize your hiring strategy.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Enterprise-grade security with built-in compliance features for all hiring processes.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const useCases = [
    {
      title: "Enterprise Recruitment",
      description: "Scale your hiring process with AI-powered tools designed for large organizations.",
      icon: Users,
      benefits: [
        "High-volume candidate processing",
        "Multi-location hiring support",
        "Advanced reporting and analytics",
        "Enterprise security features"
      ]
    },
    {
      title: "Startup Hiring",
      description: "Build your dream team quickly with intelligent tools that grow with your company.",
      icon: Zap,
      benefits: [
        "Rapid candidate screening",
        "Cost-effective solutions",
        "Scalable infrastructure",
        "Startup-friendly pricing"
      ]
    },
    {
      title: "Technical Recruitment",
      description: "Find and assess technical talent with specialized AI algorithms and skill assessments.",
      icon: Code,
      benefits: [
        "Technical skill evaluation",
        "Code assessment tools",
        "Technical interview support",
        "Skill gap analysis"
      ]
    },
    {
      title: "Executive Search",
      description: "Identify and engage top executive talent with AI-powered research and outreach.",
      icon: Star,
      benefits: [
        "Executive talent mapping",
        "Passive candidate identification",
        "Cultural fit assessment",
        "Confidential search support"
      ]
    }
  ];

  const benefits = [
    "Reduce time-to-hire by up to 95%",
    "Improve candidate quality by 87%",
    "Cut recruitment costs by 73%",
    "Enhance candidate experience",
    "Increase diversity in hiring",
    "Streamline compliance processes"
  ];

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Retail",
    "Education",
    "Consulting",
    "Non-profit"
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case 'overview':
        return (
          <div className="space-y-12">
            {/* Features Grid */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Platform Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="bg-zinc-800/50 rounded-lg border border-zinc-700/50 p-6 hover:border-zinc-600/50 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedFeature(feature)}
                  >
                    <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-3 text-center">{feature.title}</h3>
                    <p className="text-zion-slate-light text-sm text-center">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'use-cases':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Use Cases & Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  className="bg-zinc-800/50 rounded-lg border border-zinc-700/50 p-6 hover:border-zinc-600/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg mb-2">{useCase.title}</h3>
                      <p className="text-zion-slate-light text-sm mb-3">{useCase.description}</p>
                      <div className="space-y-2">
                        {useCase.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            <span className="text-zion-slate-light text-xs">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'industries':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  className="bg-zinc-800/50 rounded-lg border border-zinc-700/50 p-6 text-center hover:border-zinc-600/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">{industry}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full">
                <Bot className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Hire AI</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Revolutionary AI-powered hiring platform that transforms recruitment, screening, onboarding, and retention
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Start Free Trial
              </Link>
              <Link to="/demo" className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors">
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {successMetrics.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                  {item.metric}
                </div>
                <div className="text-zion-slate-light">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'overview', name: 'Overview', icon: Eye },
              { id: 'use-cases', name: 'Use Cases', icon: Workflow },
              { id: 'industries', name: 'Industries', icon: Globe }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTab === tab.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {renderContent()}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-zion-slate-light text-center mb-6">
              Join hundreds of companies already using Zion Hire AI to revolutionize their recruitment
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2"/>
                <p className="text-white font-semibold">Phone</p>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2"/>
                <p className="text-white font-semibold">Email</p>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2"/>
                <p className="text-white font-semibold">Address</p>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300">
                Start Your Free Trial Today
                <ArrowRight className="w-5 h-5 ml-2"/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <motion.div
            className="bg-zinc-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedFeature.title}</h3>
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="text-zion-slate-light hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-zion-slate-light mb-6">{selectedFeature.description}</p>
              
              <div className="flex gap-4">
                <Link to="/contact" className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg text-center hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  Learn More
                </Link>
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="flex-1 border border-zinc-600 text-zion-slate-light py-3 px-6 rounded-lg hover:bg-zinc-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
