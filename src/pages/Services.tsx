import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  BarChart3, 
  Globe, 
  Rocket,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Server,
  Smartphone,
  Leaf
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const services = [
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    services: [
      {
        name: 'AI Solutions',
        description: 'Custom AI development and implementation',
        href: '/services/ai',
        features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
      },
      {
        name: 'AI Content Generation',
        description: 'Automated content creation and management',
        href: '/ai-content-generator',
        features: ['Text Generation', 'Image Creation', 'Video Production', 'Content Optimization']
      },
      {
        name: 'AI Talent Matching',
        description: 'Intelligent recruitment and talent acquisition',
        href: '/zion-hire-ai',
        features: ['Skill Matching', 'Cultural Fit Analysis', 'Performance Prediction', 'Automated Screening']
      }
    ]
  },
  {
    category: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    services: [
      {
        name: 'Cybersecurity Services',
        description: 'Comprehensive security solutions',
        href: '/services/cybersecurity',
        features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Audits']
      },
      {
        name: 'SOC2 Compliance',
        description: 'Automated compliance and reporting',
        href: '/soc2-compliance-automation',
        features: ['Automated Monitoring', 'Compliance Reporting', 'Risk Assessment', 'Policy Management']
      },
      {
        name: 'Zero Trust Security',
        description: 'Advanced security architecture',
        href: '/zero-trust-network-architecture',
        features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring']
      }
    ]
  },
  {
    category: 'Cloud & Infrastructure',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    services: [
      {
        name: 'Cloud Services',
        description: 'Scalable cloud solutions',
        href: '/services/cloud',
        features: ['Cloud Migration', 'Cost Optimization', 'Performance Tuning', 'Disaster Recovery']
      },
      {
        name: 'Infrastructure Services',
        description: 'Robust infrastructure management',
        href: '/services/infrastructure',
        features: ['Server Management', 'Network Design', 'Storage Solutions', 'Load Balancing']
      },
      {
        name: 'DevOps Automation',
        description: 'Streamlined development operations',
        href: '/devops-platform',
        features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Automated Testing']
      }
    ]
  },
  {
    category: 'Digital Transformation',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    services: [
      {
        name: 'Digital Transformation',
        description: 'End-to-end business transformation',
        href: '/services/transformation',
        features: ['Process Automation', 'Digital Workflows', 'Change Management', 'Performance Optimization']
      },
      {
        name: 'Consulting Services',
        description: 'Strategic technology consulting',
        href: '/services/consulting',
        features: ['Technology Strategy', 'Architecture Design', 'Implementation Planning', 'ROI Analysis']
      },
      {
        name: 'Business Operations',
        description: 'Autonomous business operations platform',
        href: '/autonomous-business-operations-platform',
        features: ['Process Automation', 'Decision Intelligence', 'Performance Analytics', 'Operational Excellence']
      }
    ]
  },
  {
    category: 'Emerging Technologies',
    icon: Rocket,
    color: 'from-indigo-500 to-purple-500',
    services: [
      {
        name: 'Quantum Technology',
        description: 'Next-generation quantum solutions',
        href: '/quantum-technology',
        features: ['Quantum Computing', 'Quantum AI', 'Quantum Security', 'Quantum Networks']
      },
      {
        name: 'Space Technology',
        description: 'Innovative space tech solutions',
        href: '/space-tech',
        features: ['Satellite Systems', 'Space Analytics', 'Orbital Solutions', 'Space Data Processing']
      },
      {
        name: '5G Enterprise Solutions',
        description: 'Advanced 5G business applications',
        href: '/5g-enterprise-solutions',
        features: ['Network Infrastructure', 'IoT Integration', 'Edge Computing', 'Low Latency Applications']
      }
    ]
  },
  {
    category: 'Specialized Solutions',
    icon: Cpu,
    color: 'from-green-500 to-emerald-500',
    services: [
      {
        name: 'Green IT Solutions',
        description: 'Sustainable technology solutions',
        href: '/green-it',
        features: ['Energy Optimization', 'Carbon Footprint Reduction', 'Sustainable Infrastructure', 'Green Computing']
      },
      {
        name: 'Mobile Solutions',
        description: 'Cross-platform mobile applications',
        href: '/mobile',
        features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'Mobile Optimization']
      },
      {
        name: 'Financial Solutions',
        description: 'Technology for financial services',
        href: '/financial-solutions',
        features: ['Fintech Platforms', 'Payment Systems', 'Risk Management', 'Compliance Solutions']
      }
    ]
  }
];

// Featured innovative services
const FEATURED_INNOVATIVE_SERVICES = [
  {
    id: "ai-contract-analysis",
    title: "AI-Powered Contract Analysis Platform",
    description: "Advanced AI platform that analyzes legal contracts, identifies risks, suggests improvements, and automates contract review processes.",
    category: "AI & Legal Tech",
    price: 2999,
    rating: 4.9,
    reviewCount: 156,
    image: "https://ziontechgroup.com/images/ai-contract-analysis.jpg",
    link: "/services/ai-contract-analysis",
    features: ["95% accuracy", "80% time reduction", "Risk assessment", "Compliance monitoring"]
  },
  {
    id: "ai-supply-chain-optimization",
    title: "AI-Powered Supply Chain Optimization",
    description: "Intelligent supply chain management platform that uses AI to predict demand, optimize inventory, reduce costs, and improve delivery times.",
    category: "AI & Operations",
    price: 4499,
    rating: 4.8,
    reviewCount: 203,
    image: "https://ziontechgroup.com/images/ai-supply-chain.jpg",
    link: "/services/ai-supply-chain-optimization",
    features: ["35% cost reduction", "60% efficiency improvement", "Demand prediction", "Route optimization"]
  },
  {
    id: "ai-cybersecurity-threat-intelligence",
    title: "AI-Powered Cybersecurity Threat Intelligence",
    description: "Advanced threat intelligence platform that uses AI to detect, analyze, and respond to cybersecurity threats in real-time.",
    category: "Cybersecurity",
    price: 5999,
    rating: 4.9,
    reviewCount: 178,
    image: "https://ziontechgroup.com/images/ai-cybersecurity.jpg",
    link: "/services/ai-cybersecurity-threat-intelligence",
    features: ["99.9% detection accuracy", "90% response time reduction", "Real-time monitoring", "Zero false positives"]
  },
  {
    id: "ai-healthcare-diagnostics",
    title: "AI-Powered Healthcare Diagnostics",
    description: "Revolutionary healthcare platform that uses AI to analyze medical images, predict diseases, and assist healthcare professionals in diagnosis.",
    category: "AI & Healthcare",
    price: 7999,
    rating: 4.9,
    reviewCount: 234,
    image: "https://ziontechgroup.com/images/ai-healthcare.jpg",
    link: "/services/ai-healthcare-diagnostics",
    features: ["85% accuracy improvement", "70% time reduction", "Early detection", "HIPAA compliant"]
  },
  {
    id: "ai-powered-data-analytics-platform",
    title: "AI-Powered Data Analytics Platform",
    description: "Transform your business with our AI-powered analytics platform. Real-time insights, predictive analytics, and automated reporting for data-driven decisions.",
    category: "AI & Analytics",
    price: 799,
    rating: 4.8,
    reviewCount: 94,
    image: "https://ziontechgroup.com/images/ai-data-analytics.jpg",
    link: "/services/ai-powered-data-analytics-platform",
    features: ["Real-time data processing", "Predictive analytics", "Interactive dashboards", "Machine learning algorithms"]
  },
  {
    id: "ai-powered-customer-service-platform",
    title: "AI-Powered Customer Service Platform",
    description: "Revolutionize your customer service with our AI-powered platform. 24/7 support, instant responses, and intelligent ticket routing for exceptional customer experiences.",
    category: "AI & Support",
    price: 499,
    rating: 4.8,
    reviewCount: 87,
    image: "https://ziontechgroup.com/images/ai-customer-service.jpg",
    link: "/services/ai-powered-customer-service-platform",
    features: ["24/7 automated support", "Instant responses", "Intelligent routing", "Multi-language support"]
  },
  {
    id: "ai-powered-marketing-automation-platform",
    title: "AI-Powered Marketing Automation Platform",
    description: "Revolutionize your marketing with our AI-powered automation platform. Personalized campaigns, predictive analytics, and multi-channel automation for maximum ROI.",
    category: "AI & Marketing",
    price: 799,
    rating: 4.9,
    reviewCount: 112,
    image: "https://ziontechgroup.com/images/ai-marketing.jpg",
    link: "/services/ai-powered-marketing-automation-platform",
    features: ["AI-powered segmentation", "Predictive optimization", "Multi-channel automation", "ROI tracking"]
  },
  {
    id: "ai-powered-financial-analytics-platform",
    title: "AI-Powered Financial Analytics Platform",
    description: "Transform your financial analysis with our AI-powered platform. Real-time insights, risk assessment, and portfolio optimization for better investment decisions.",
    category: "AI & Finance",
    price: 1499,
    rating: 4.9,
    reviewCount: 89,
    image: "https://ziontechgroup.com/images/ai-finance.jpg",
    link: "/services/ai-powered-financial-analytics-platform",
    features: ["Real-time market analysis", "AI risk assessment", "Portfolio optimization", "Predictive modeling"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive technology services including AI, cybersecurity, cloud solutions, and emerging technologies. Transform your business with Zion Tech Group."
        canonical="/services"
        url="https://ziontechgroup.com/services"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business transformation and drive innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link 
              to="/request-quote" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Request Quote
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t border-cyan-400/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
              <div>
                <div className="font-semibold text-white mb-2">Phone</div>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <div className="font-semibold text-white mb-2">Email</div>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <div className="font-semibold text-white mb-2">Address</div>
                <div>364 E Main St STE 1008</div>
                <div>Middletown DE 19709</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing-guide-2030"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-600 transition-all duration-200 hover:scale-105"
              >
                View Pricing Guide
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                Schedule Consultation
              </Link>
            </div>
            
            {/* Quick Contact Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200"
              >
                📞 Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry&body=Hi, I'm interested in your services. Please provide more information."
                className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200"
              >
                📧 Email Us
              </a>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200"
              >
                🌐 Visit Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Footer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MailIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full mb-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{category.category}</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-zion-purple to-zion-cyan mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex}
                      className="bg-zion-slate border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10"
                    >
                      <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-zion-cyan hover:text-zion-cyan/80 transition-colors font-medium"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you implement the right technology solutions for your unique needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg font-semibold text-white hover:from-zion-purple/80 hover:to-zion-cyan/80 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/case-studies" 
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
