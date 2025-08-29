import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Server,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import expandedServices2025 from '../data/expandedServices2025';

export default function Services() {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      name: 'Revolutionary AI Services',
      icon: Brain,
      description: 'Next-generation AI solutions that transform enterprise operations',
      color: 'from-purple-600 to-pink-600',
      services: [
        {
          name: 'AI Enterprise Orchestrator',
          description: 'Multi-agent AI coordination and workflow automation for enterprise transformation',
          features: ['Multi-Agent Coordination', 'Intelligent Process Orchestration', 'Predictive Analytics Engine', 'Enterprise Security Suite'],
          href: '/services/ai-enterprise-orchestrator',
          price: 'From $15,000',
          rating: 5.0,
          reviewCount: 89
        },
        {
          name: 'AI Healthcare Predictive Analytics',
          description: 'Predict diseases with 94% accuracy and optimize patient care with AI-powered insights',
          features: ['Predictive Diagnostics', 'Early Risk Detection', 'Treatment Optimization', 'Population Health Analytics'],
          href: '/services/ai-healthcare-predictive-analytics',
          price: 'From $899/month',
          rating: 4.9,
          reviewCount: 156
        },
        {
          name: 'AI Financial Compliance Assistant',
          description: 'Automated regulatory compliance with AI-powered monitoring and risk assessment',
          features: ['SOX Compliance', 'GDPR & Privacy', 'PCI DSS', 'AML/KYC', 'Basel III', 'IFRS/GAAP'],
          href: '/services/ai-financial-compliance-assistant',
          price: 'From $499/month',
          rating: 4.9,
          reviewCount: 134
        },
        {
          name: 'AI Supply Chain Optimization',
          description: 'End-to-end supply chain intelligence with AI-powered optimization and real-time visibility',
          features: ['Route Optimization', 'Demand Forecasting', 'Inventory Management', 'Supplier Analytics', 'Real-time Monitoring'],
          href: '/services/ai-supply-chain-optimization',
          price: 'From $799/month',
          rating: 4.9,
          reviewCount: 98
        }
      ]
    },
    {
      name: 'AI & Analytics',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence and data analytics solutions',
      color: 'from-blue-600 to-cyan-600',
      services: [
        {
          name: 'AI Business Intelligence Platform',
          description: 'Transform your data into actionable insights with advanced AI algorithms and predictive analytics',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Machine Learning Models', 'Data Visualization', 'Automated Reporting'],
          href: '/services/ai-business-intelligence',
          price: 'From $5,000',
          rating: 4.9,
          reviewCount: 127
        },
        {
          name: 'AI Sales Copilot',
          description: 'AI-powered sales automation and customer relationship management',
          features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Automated Follow-ups'],
          href: '/services/ai-sales-copilot',
          price: 'From $3,500',
          rating: 4.8,
          reviewCount: 89
        },
        {
          name: 'AI Content Optimizer Pro',
          description: 'Advanced AI-powered content optimization for SEO and engagement',
          features: ['SEO Optimization', 'Readability Scoring', 'Multi-language Support', 'Performance Analytics'],
          href: '/services/ai-content-optimizer-pro',
          price: 'From $199/month',
          rating: 4.9,
          reviewCount: 156
        },
        {
          name: 'AI Customer Success Platform',
          description: 'Intelligent customer success with predictive analytics and automated engagement',
          features: ['Churn Prevention', 'Health Scoring', 'Automated Engagement', 'Predictive Analytics'],
          href: '/services/ai-customer-success-platform',
          price: 'From $299',
          rating: 4.9,
          reviewCount: 234
        }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and automated deployment solutions',
      color: 'from-blue-600 to-cyan-600',
      services: [
        {
          name: 'Cloud DevOps',
          description: 'End-to-end cloud infrastructure and automated deployment solutions',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Auto-scaling'],
          href: '/services/cloud-devops',
          price: 'From $8,000',
          rating: 4.9,
          reviewCount: 234
        },
        {
          name: 'Cloud FinOps Optimizer',
          description: 'Cloud cost optimization and financial operations management',
          features: ['Cost Analysis', 'Resource Optimization', 'Budget Management', 'ROI Tracking'],
          href: '/services/cloud-finops-optimizer',
          price: 'From $4,500',
          rating: 4.8,
          reviewCount: 167
        },
        {
          name: 'Edge Computing Platform',
          description: 'Next-generation edge computing infrastructure for IoT and real-time applications',
          features: ['Edge Analytics', 'Real-time Processing', 'Low Latency', 'Distributed Computing'],
          href: '/services/edge-computing-platform',
          price: 'From $12,000',
          rating: 4.9,
          reviewCount: 98
        }
      ]
    },
    {
      name: 'Digital Solutions',
      icon: Rocket,
      description: 'Digital transformation and innovative technology solutions',
      color: 'from-green-600 to-emerald-600',
      services: [
        {
          name: 'Digital Twin',
          description: 'Real-time digital simulation and monitoring solutions',
          features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Maintenance', 'Performance Analytics'],
          href: '/services/digital-twin',
          price: 'From $15,000',
          rating: 4.9,
          reviewCount: 78
        },
        {
          name: 'IT Infrastructure',
          description: 'Enterprise-grade IT infrastructure and network management',
          features: ['Network Design', 'Server Management', 'Security Implementation', '24/7 Monitoring'],
          href: '/services/it-infrastructure',
          price: 'From $12,000',
          rating: 4.8,
          reviewCount: 145
        },
        {
          name: 'Blockchain Enterprise Solutions',
          description: 'Enterprise blockchain implementation and smart contract solutions',
          features: ['Smart Contracts', 'Supply Chain Tracking', 'Digital Identity', 'DeFi Solutions'],
          href: '/services/blockchain-enterprise-solutions',
          price: 'From $18,000',
          rating: 4.9,
          reviewCount: 89
        }
      ]
    },
    {
      name: 'Cybersecurity & Compliance',
      icon: Shield,
      description: 'Advanced security protocols and threat protection systems',
      color: 'from-red-600 to-orange-600',
      services: [
        {
          name: 'Zero Trust Architecture',
          description: 'Advanced zero-trust security implementation and management',
          features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring'],
          href: '/services/zero-trust-network-architecture',
          price: 'From $18,000',
          rating: 4.9,
          reviewCount: 134
        },
        {
          name: 'AI Financial Fraud Detection',
          description: 'Protect your business with AI-powered fraud detection and 99.2% accuracy',
          features: ['Fraud Detection', 'Real-time Monitoring', 'Multi-layer Security', 'Adaptive Learning'],
          href: '/services/ai-financial-fraud-detection',
          price: 'From $799',
          rating: 4.9,
          reviewCount: 189
        },
        {
          name: 'Contract Management System',
          description: 'Streamlined contract lifecycle management with AI-powered insights',
          features: ['Contract Creation', 'Approval Workflows', 'Compliance Monitoring', 'AI Analysis', 'Reporting'],
          href: '/services/contract-management',
          price: 'From $3,200',
          rating: 4.6,
          reviewCount: 78
        }
      ]
    },
    {
      name: 'Innovative Micro SaaS',
      icon: Zap,
      description: 'Cutting-edge software-as-a-service solutions powered by advanced AI',
      color: 'from-yellow-600 to-orange-600',
      services: [
        {
          name: 'AI Incident Postmortems',
          description: 'AI-powered incident management with automated root cause analysis and prevention',
          features: ['Root Cause Analysis', 'Real-time Monitoring', 'Predictive Prevention', 'Team Collaboration'],
          href: '/services/ai-incident-postmortems',
          price: 'From $299/month',
          rating: 4.9,
          reviewCount: 89
        },
        {
          name: 'AI Content Optimizer Pro',
          description: 'Advanced AI-powered content optimization for SEO and engagement',
          features: ['SEO Optimization', 'Readability Scoring', 'Multi-language Support', 'Performance Analytics'],
          href: '/services/ai-content-optimizer-pro',
          price: 'From $199/month',
          rating: 4.9,
          reviewCount: 156
        },
        {
          name: 'AI Sales Copilot',
          description: 'AI-powered sales automation and customer relationship management',
          features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Automated Follow-ups'],
          href: '/services/ai-sales-copilot',
          price: 'From $3,500',
          rating: 4.8,
          reviewCount: 89
        }
      ]
    }
  ];

  const emergingTechnologies = [
    {
      name: 'Quantum AI Platform',
      icon: Cpu,
      description: 'Next-generation quantum computing with AI capabilities for complex problem-solving',
      href: '/services/quantum-ai-platform',
      color: 'from-violet-600 to-purple-600'
    },
    {
      name: 'AI Cybersecurity Suite',
      icon: Shield,
      description: 'AI-powered threat detection and automated incident response',
      href: '/services/ai-cybersecurity-suite',
      color: 'from-red-600 to-orange-600'
    },
    {
      name: 'Digital Twin Solutions',
      icon: Rocket,
      description: 'Real-time digital simulation and monitoring solutions',
      href: '/services/digital-twin',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      name: 'AI Healthcare Analytics',
      icon: Heart,
      description: 'AI-powered healthcare solutions and medical technology',
      href: '/services/healthcare-tech',
      color: 'from-red-600 to-pink-600'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: '15+ years of technology innovation and successful project delivery'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with deep industry knowledge and experience'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Cutting-edge solutions that keep you ahead of the competition'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control for reliable solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-24 text-center text-white">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          Cutting-edge technology solutions designed to transform your business.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">AI Development</h3>
            <p className="text-gray-300 mb-6">Custom AI models and machine learning solutions.</p>
            <p className="text-2xl font-bold text-blue-400 mb-4">$5,000 - $50,000</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration</h3>
            <p className="text-gray-300 mb-6">Seamless cloud migration and scalable architecture.</p>
            <p className="text-2xl font-bold text-blue-400 mb-4">$10,000 - $100,000</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
            <p className="text-gray-300 mb-6">Comprehensive security solutions and assessments.</p>
            <p className="text-2xl font-bold text-blue-400 mb-4">$3,000 - $25,000</p>
          </div>
        </div>
        {/* New: Micro-SaaS Solutions */}
        <div className="mt-24 text-left">
          <h2 className="text-4xl font-bold mb-4">Micro-SaaS Solutions</h2>
          <p className="text-gray-300 mb-10 max-w-4xl">Fast-to-deploy, subscription-based tools that solve specific business problems with clear ROI.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">AI Sales Email Optimizer</h3>
              <p className="text-gray-300 mb-4">Auto-drafts and A/B tests emails based on CRM context to raise reply rates.</p>
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>CRM integration (HubSpot, Salesforce)</li>
                <li>Sequence testing and analytics</li>
                <li>Compliance guardrails</li>
              </ul>
              <p className="text-2xl font-bold text-blue-400 mb-4">$299 - $799/month</p>
              <a href="https://ziontechgroup.com/contact" className="text-cyan-300 hover:text-cyan-200 font-semibold">Get a demo →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Support Ticket Triage Copilot</h3>
              <p className="text-gray-300 mb-4">Classifies, deduplicates, and suggests resolutions; integrates with Zendesk/Jira.</p>
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>Auto-priority and routing</li>
                <li>Knowledge base suggestions</li>
                <li>First-response macros</li>
              </ul>
              <p className="text-2xl font-bold text-blue-400 mb-4">$249 - $999/month</p>
              <a href="https://ziontechgroup.com/solutions" className="text-cyan-300 hover:text-cyan-200 font-semibold">See solution →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Invoice OCR + Reconciliation</h3>
              <p className="text-gray-300 mb-4">Extracts line-items and auto-matches to POs; exports to QuickBooks/Xero.</p>
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>Vendor anomaly detection</li>
                <li>Tax and currency support</li>
                <li>Audit trails</li>
              </ul>
              <p className="text-2xl font-bold text-blue-400 mb-4">$199 - $799/month</p>
              <a href="https://ziontechgroup.com/services" className="text-cyan-300 hover:text-cyan-200 font-semibold">Learn more →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">SEO Content Planner</h3>
              <p className="text-gray-300 mb-4">Keyword clustering, brief generation, and on-page optimization recommendations.</p>
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>Competitor gap analysis</li>
                <li>Automatic internal linking</li>
                <li>Publish to CMS</li>
              </ul>
              <p className="text-2xl font-bold text-blue-400 mb-4">$99 - $399/month</p>
              <a href="https://ziontechgroup.com/pricing" className="text-cyan-300 hover:text-cyan-200 font-semibold">Pricing →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">HR Screening Assistant</h3>
              <p className="text-gray-300 mb-4">Summarizes resumes, auto-screens candidates, and schedules interviews.</p>
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>ATS integration</li>
                <li>Bias-mitigation controls</li>
                <li>Compliance exports</li>
              </ul>
              <p className="text-2xl font-bold text-blue-400 mb-4">$149 - $599/month</p>
              <a href="https://ziontechgroup.com/contact" className="text-cyan-300 hover:text-cyan-200 font-semibold">Talk to sales →</a>
            </div>
          </div>
        </div>

        {/* New: AI Services & Solutions */}
        <div className="mt-24 text-left">
          <h2 className="text-4xl font-bold mb-4">AI Services & Solutions</h2>
          <p className="text-gray-300 mb-10 max-w-4xl">From strategy to production MLOps, we deliver outcomes, not experiments.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">AI Strategy & Roadmapping</h3>
              <p className="text-gray-300 mb-4">Use-case discovery, ROI modeling, and architecture blueprints.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$8,000 - $35,000</p>
              <a href="https://ziontechgroup.com/solutions" className="text-cyan-300 hover:text-cyan-200 font-semibold">Explore engagements →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Custom LLM Apps & Integrations</h3>
              <p className="text-gray-300 mb-4">Build copilots, RAG search, and workflow agents integrated with your stack.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$15,000 - $150,000</p>
              <a href="https://ziontechgroup.com/research-development" className="text-cyan-300 hover:text-cyan-200 font-semibold">See R&D →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Computer Vision & OCR</h3>
              <p className="text-gray-300 mb-4">Detection, tracking, and document understanding for real-world operations.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$20,000 - $120,000</p>
              <a href="https://ziontechgroup.com/case-studies" className="text-cyan-300 hover:text-cyan-200 font-semibold">View case studies →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">MLOps & Platform Engineering</h3>
              <p className="text-gray-300 mb-4">Feature stores, CI/CD for models, observability, and governance.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$25,000 - $180,000</p>
              <a href="https://ziontechgroup.com/partners" className="text-cyan-300 hover:text-cyan-200 font-semibold">Our partners →</a>
            </div>
          </div>
        </div>

        {/* New: IT Services & Modernization */}
        <div className="mt-24 text-left">
          <h2 className="text-4xl font-bold mb-4">IT Services & Modernization</h2>
          <p className="text-gray-300 mb-10 max-w-4xl">End-to-end services to secure, scale, and streamline your technology footprint.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Cloud Cost Optimization</h3>
              <p className="text-gray-300 mb-4">FinOps audits, rightsizing, reserved instances, and tagging strategies.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$6,000 - $45,000</p>
              <a href="https://ziontechgroup.com/solutions" className="text-cyan-300 hover:text-cyan-200 font-semibold">Learn more →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Zero Trust Security</h3>
              <p className="text-gray-300 mb-4">Identity-first controls, microsegmentation, and continuous verification.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$12,000 - $95,000</p>
              <a href="https://ziontechgroup.com/advanced-cybersecurity" className="text-cyan-300 hover:text-cyan-200 font-semibold">Security services →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Data Platform Modernization</h3>
              <p className="text-gray-300 mb-4">Lakehouse design, ETL pipelines, and real-time analytics platforms.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$18,000 - $140,000</p>
              <a href="https://ziontechgroup.com/solutions" className="text-cyan-300 hover:text-cyan-200 font-semibold">Get details →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Managed IT & Onsite Support</h3>
              <p className="text-gray-300 mb-4">SLAs, patching, endpoint management, and onsite troubleshooting.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$2,000 - $25,000/month</p>
              <a href="https://ziontechgroup.com/contact" className="text-cyan-300 hover:text-cyan-200 font-semibold">Contact us →</a>
            </div>
          </div>
        </div>

        {/* CTA and Contact */}
        <div className="mt-24 text-left">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold mb-4">Ready to start?</h3>
            <p className="text-gray-300 mb-6 max-w-3xl">Talk with our experts to scope a pilot or request a tailored quote. We respond within 24 hours.</p>
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <a href="https://ziontechgroup.com/contact" className="px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 font-semibold">Book a consultation</a>
              <a href="tel:+13024640950" className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">Call +1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">kleber@ziontechgroup.com</a>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              Address: 364 E Main St STE 1008, Middletown, DE 19709 • Website: ziontechgroup.com
            </div>
          </div>
        </div>
        <div className="mt-16">
          <a href="tel:+13024640950" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            📞 Call +1 (302) 464-0950
          </a>
        </div>
      </div>
    </div>
  );
};

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/comprehensive-services-showcase-2025"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  View All Services
                </Link>
                <Link
                  to="/request-quote"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of technology services designed to meet your business needs.
              </p>
            </motion.div>

            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="mb-4">
                        <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                        <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                        
                        {/* Price and Rating */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-lg font-semibold text-green-400">{service.price}</span>
                          <div className="flex items-center">
                            <div className="flex items-center mr-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                              ))}
                            </div>
                            <span className="text-sm text-gray-400">({service.reviewCount})</span>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-white mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                              <CheckCircle className="text-green-400 w-3 h-3 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <Link
                        to={service.href}
                        className="w-full py-3 px-4 rounded-lg font-semibold text-center transition-all duration-300 block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Emerging Technologies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Emerging Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead of the curve with our cutting-edge technology solutions and research initiatives.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {emergingTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${tech.color} mb-4`}>
                    <tech.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tech.description}</p>
                  <Link
                    to={tech.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine deep technical expertise with innovative thinking to deliver solutions that transform businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-300">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our technology solutions can drive innovation, efficiency, and growth for your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>
                <a 
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-green-400 text-green-400 font-semibold py-3 px-8 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit Website</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}