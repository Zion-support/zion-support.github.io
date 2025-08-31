import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Zap, 
  Cloud, 
  Globe, 
  Lock, 
  Cpu,
  Database,
  Network,
  Smartphone,
  Rocket,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';

export default function Home() {
  const featuredServices = [
    {
      icon: Brain,
      title: "AI-Powered Customer Success Automation",
      description: "Intelligent platform that automates customer onboarding, success tracking, and churn prevention using predictive analytics with 35% churn reduction.",
      category: "Micro SAAS",
      price: "$199/month",
      features: ["AI-driven health scoring", "Predictive churn detection", "Automated workflows", "Real-time insights"],
      path: "/services",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "AI-Powered Cybersecurity Suite",
      description: "Advanced cybersecurity platform using AI to detect threats 10x faster with 80% reduction in false positives.",
      category: "Cybersecurity",
      price: "$699/month",
      features: ["AI threat detection", "Behavioral analysis", "Automated response", "24/7 SOC monitoring"],
      path: "/services",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Cpu,
      title: "AI-Quantum Hybrid Computing Platform",
      description: "Revolutionary platform combining classical AI with quantum computing for 1000x faster problem solving.",
      category: "Emerging Tech",
      price: "$999/month",
      features: ["Quantum-classical hybrid", "Quantum ML", "Optimization algorithms", "Future-proof technology"],
      path: "/services",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Database,
      title: "AI Healthcare Analytics Platform",
      description: "Intelligent healthcare platform improving diagnosis accuracy by 30% and reducing treatment costs.",
      category: "AI Solutions",
      price: "$599/month",
      features: ["Patient data analytics", "Disease prediction", "Treatment optimization", "Clinical decision support"],
      path: "/services",
      gradient: "from-red-500 to-orange-600"
    }
  ];

  const stats = [
    { label: "Services Available", value: "50+", icon: Zap },
    { label: "Innovation Levels", value: "4", icon: Star },
    { label: "Market Coverage", value: "$100B+", icon: TrendingUp },
    { label: "Support Levels", value: "4", icon: Users }
  ];

  const innovationLevels = [
    {
      level: "Revolutionary",
      description: "Breakthrough technologies that redefine industries and create new markets",
      examples: ["AI-Quantum Hybrid Computing", "Space Technology Platform", "Quantum Computing as a Service"],
      color: "text-purple-400 border-purple-400"
    },
    {
      level: "Cutting-edge",
      description: "Advanced solutions using latest AI and emerging technologies",
      examples: ["AI Cybersecurity Suite", "AI Healthcare Platform", "AI Financial Trading Platform"],
      color: "text-blue-400 border-blue-400"
    },
    {
      level: "Advanced",
      description: "Sophisticated solutions with proven track records and market validation",
      examples: ["AI Customer Success Automation", "AI Content Optimization", "AI Project Management"],
      color: "text-green-400 border-green-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Cutting-Edge Technology
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Zion Tech Group delivers 50+ innovative micro SAAS, IT infrastructure, and AI solutions that drive growth, 
              efficiency, and competitive advantage. From revolutionary AI-Quantum hybrid computing to cutting-edge AI 
              cybersecurity and healthcare platforms, we're your partner in digital transformation and innovation.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 mb-12 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-10 h-10 text-purple-400 mb-3" />
                  <p className="text-white font-semibold text-lg mb-2">Phone</p>
                  <a href="tel:+13024640950" className="text-purple-300 hover:text-purple-200 transition-colors text-lg">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-10 h-10 text-purple-400 mb-3" />
                  <p className="text-white font-semibold text-lg mb-2">Email</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300 hover:text-purple-200 transition-colors text-lg">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-10 h-10 text-purple-400 mb-3" />
                  <p className="text-white font-semibold text-lg mb-2">Address</p>
                  <p className="text-purple-300 text-lg">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/services"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center gap-2"
              >
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Business Consultation"
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 border border-white/20 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover our most innovative solutions that are transforming businesses across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                  <Link
                    to={service.path}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl transition-all duration-300 border border-white/20"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Innovation Levels */}
      <div className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Innovation Levels
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our services are categorized by innovation level to help you choose the right solution for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {innovationLevels.map((level, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-20 h-20 border-2 ${level.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Star className="w-10 h-10 text-purple-400" />
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${level.color.replace('border-', 'text-')}`}>
                  {level.level}
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {level.description}
                </p>

                <div className="text-left">
                  <h4 className="text-white font-semibold mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {level.examples.map((example, idx) => (
                      <li key={idx} className="text-slate-300 text-sm flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation First</h3>
              <p className="text-slate-300">
                We stay ahead of technology trends with revolutionary AI-Quantum hybrid computing, space technology, and cutting-edge AI solutions that give you a competitive edge.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-slate-300">
                Our certified professionals bring deep expertise in AI, cybersecurity, cloud computing, and emerging technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-slate-300">
                We prioritize security and compliance, ensuring your data and systems are protected with industry-leading standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Proven ROI</h3>
              <p className="text-slate-300">
                Our solutions deliver measurable business value with clear ROI metrics and performance improvements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Global Reach</h3>
              <p className="text-slate-300">
                We serve clients worldwide with scalable solutions that work across different markets and regulatory environments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-slate-300">
                Round-the-clock support and monitoring to ensure your systems run smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI & Innovation?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Let's discuss how our 50+ innovative solutions including AI-Quantum hybrid computing, AI cybersecurity, and AI healthcare platforms can drive growth, efficiency, and competitive advantage for your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Schedule Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 border border-white/20 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
          </div>

          <div className="text-slate-400">
            <p className="text-lg">
              Visit us at: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">https://ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
