import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import FuturisticAnimatedBackground from '../../components/FuturisticAnimatedBackground';
import { 
  Brain, 
  Workflow, 
  Eye, 
  Key, 
  TrendingUp, 
  Shield, 
  Cloud, 
  Zap, 
  Target, 
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  BarChart3,
  Rocket
} from 'lucide-react';

export default function InnovativeServicesOverview() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by cutting-edge artificial intelligence",
      icon: Brain,
      color: "from-blue-500 to-purple-600",
      services: [
        {
          name: "AI Workflow Automation",
          description: "Transform your business operations with intelligent automation that learns and optimizes workflows in real-time.",
          path: "/services/ai-workflow-automation",
          price: "$299/month",
          features: ["Intelligent Process Discovery", "Dynamic Workflow Engine", "Multi-Platform Integration"],
          icon: Workflow,
          rating: 4.9,
          reviewCount: 156
        },
        {
          name: "AI Customer Intelligence",
          description: "Unlock the power of customer data with AI-driven insights that transform how you understand and engage customers.",
          path: "/services/ai-customer-intelligence",
          price: "$199/month",
          features: ["Real-Time Behavior Analysis", "Predictive Segmentation", "Sentiment Analysis"],
          icon: Eye,
          rating: 4.8,
          reviewCount: 134
        },
        {
          name: "AI Predictive Analytics",
          description: "Transform your business with AI-powered predictive analytics for unprecedented growth and insights.",
          path: "/services/ai-predictive-analytics",
          price: "$299/month",
          features: ["Advanced ML Models", "Real-Time Processing", "Predictive Modeling Studio"],
          icon: TrendingUp,
          rating: 4.9,
          reviewCount: 127
        }
      ]
    },
    {
      title: "Cloud & Security",
      description: "Future-proof infrastructure with military-grade security",
      icon: Shield,
      color: "from-emerald-500 to-teal-600",
      services: [
        {
          name: "Quantum-Secure Cloud",
          description: "Future-proof your business with quantum-secure cloud infrastructure featuring military-grade security.",
          path: "/services/quantum-secure-cloud",
          price: "$399/month",
          features: ["Quantum-Resistant Encryption", "AI Threat Detection", "Zero-Trust Architecture"],
          icon: Key,
          rating: 4.9,
          reviewCount: 89
        },
        {
          name: "Cloud Infrastructure",
          description: "Scalable cloud solutions designed for enterprise performance and security.",
          path: "/services/cloud-infrastructure",
          price: "$1,800/month",
          features: ["99.9% Uptime", "Auto-scaling", "Security First"],
          icon: Cloud,
          rating: 4.8,
          reviewCount: 89
        },
        {
          name: "Cybersecurity Solutions",
          description: "Comprehensive security services to protect your digital assets and data.",
          path: "/services/cybersecurity",
          price: "$3,200/month",
          features: ["Threat Detection", "Compliance Ready", "24/7 Monitoring"],
          icon: Shield,
          rating: 4.9,
          reviewCount: 156
        }
      ]
    },
    {
      title: "Business Intelligence",
      description: "Data-driven insights for strategic decision making",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-600",
      services: [
        {
          name: "AI Business Intelligence",
          description: "Transform data into actionable insights with our AI-powered analytics platform.",
          path: "/services/ai-business-intelligence",
          price: "$2,500/month",
          features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards"],
          icon: Brain,
          rating: 4.9,
          reviewCount: 127
        },
        {
          name: "Data Analytics Platform",
          description: "Comprehensive data analytics and business intelligence solutions.",
          path: "/services/data-analytics",
          price: "$1,500/month",
          features: ["Data Visualization", "Custom Reports", "API Integration"],
          icon: BarChart3,
          rating: 4.7,
          reviewCount: 98
        }
      ]
    },
    {
      title: "Emerging Technologies",
      description: "Cutting-edge solutions for tomorrow's challenges",
      icon: Rocket,
      color: "from-pink-500 to-rose-600",
      services: [
        {
          name: "Quantum Neural Networks",
          description: "Next-generation quantum computing solutions for complex problem solving.",
          path: "/quantum-neural-network-platform",
          price: "Custom",
          features: ["Quantum Computing", "Neural Networks", "Advanced Algorithms"],
          icon: Cpu,
          rating: 4.9,
          reviewCount: 67
        },
        {
          name: "Blockchain Solutions",
          description: "Decentralized applications and blockchain infrastructure for modern businesses.",
          path: "/services/blockchain-solutions",
          price: "$2,000/month",
          features: ["Smart Contracts", "DeFi Platforms", "NFT Solutions"],
          icon: Network,
          rating: 4.8,
          reviewCount: 89
        }
      ]
    }
  ];

  const benefits = [
    {
      title: "Rapid Deployment",
      description: "Get up and running in days, not months",
      icon: Zap,
      metric: "90% faster"
    },
    {
      title: "Cost Efficiency",
      description: "Reduce operational costs significantly",
      icon: Target,
      metric: "40-60% savings"
    },
    {
      title: "Scalability",
      description: "Grow without limits",
      icon: TrendingUp,
      metric: "Unlimited scale"
    },
    {
      title: "Security First",
      description: "Enterprise-grade security built-in",
      icon: Shield,
      metric: "99.99% secure"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechFlow Inc",
      company: "TechFlow Inc",
      content: "The AI Workflow Automation has transformed our operations. We've seen a 45% increase in efficiency and our team can focus on strategic tasks instead of repetitive work.",
      rating: 5,
      service: "AI Workflow Automation"
    },
    {
      name: "Michael Chen",
      role: "CEO, SecureCloud Solutions",
      company: "SecureCloud Solutions",
      content: "Quantum-Secure Cloud gives us peace of mind. The security features are unmatched and the performance is exceptional. Highly recommended for any business serious about security.",
      rating: 5,
      service: "Quantum-Secure Cloud"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      company: "GrowthCo",
      content: "AI Customer Intelligence has revolutionized how we understand our customers. We've increased our conversion rates by 35% and customer retention by 28%.",
      rating: 5,
      service: "AI Customer Intelligence"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative">
      <SEO 
        title="Innovative Services Overview - Zion Tech Group" 
        description="Discover our comprehensive suite of innovative micro SAAS services, AI solutions, and cutting-edge technology services designed to transform your business."
        keywords="innovative services, micro SAAS, AI solutions, cloud services, cybersecurity, business intelligence"
      />
      
      {/* Futuristic Animated Background */}
      <FuturisticAnimatedBackground intensity="medium" colorScheme="multi" />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Rocket className="w-4 h-4 mr-2" />
            Innovative Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Innovative
            </span>
            <br />
            <span className="text-white">Services Overview</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our comprehensive suite of cutting-edge micro SAAS services, AI solutions, and emerging technologies designed to transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore All Services
            </button>
            <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our innovative services are designed to deliver measurable results and transform your business operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-blue-400 font-bold text-lg">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our diverse range of innovative services designed to meet every business need.
            </p>
          </div>
          
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-6`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex}
                    className="group p-8 rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-600/30 border border-slate-500/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold ml-1">{service.rating}</span>
                        <span className="text-gray-400 text-sm ml-1">({service.reviewCount})</span>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                      {service.price !== "Custom" && <span className="text-gray-400 text-sm">/month</span>}
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to={service.path}
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from businesses that have transformed their operations with our innovative services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="border-t border-slate-600/30 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-blue-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  <div className="text-blue-400 text-sm mt-2">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have already transformed their operations with our innovative services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}