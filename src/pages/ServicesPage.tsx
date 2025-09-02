import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Zap,
  Brain,
  Shield,
  HardDrive,
  TrendingUp,
  Users,
  Building2,
  FileText,
  HelpCircle,
  Activity,
  Cpu,
  GraduationCap,
  BarChart3,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  ChevronDown,
  CheckCircle,
  Star,
  Award,
  Clock,
  Globe,
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      id: 'ai-automation',
      name: 'AI & Automation',
      description: 'Intelligent automation solutions powered by artificial intelligence',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Transform your data into actionable insights with AI-powered analytics',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Machine Learning Models', 'Data Visualization'],
          price: 'Starting at $2,500/month',
          rating: 4.9,
          reviews: 127
        },
        {
          name: 'AI Sales Copilot',
          description: 'Automate and optimize your sales processes with intelligent AI assistance',
          features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Automated Follow-ups'],
          price: 'Starting at $1,800/month',
          rating: 4.8,
          reviews: 89
        },
        {
          name: 'AI Compliance Assistant',
          description: 'Ensure regulatory compliance with AI-powered monitoring and automation',
          features: ['Regulatory Monitoring', 'Automated Reporting', 'Risk Assessment', 'Compliance Tracking'],
          price: 'Starting at $3,200/month',
          rating: 4.9,
          reviews: 156
        },
        {
          name: 'AI Workflow Automation',
          description: 'Streamline business processes with intelligent workflow automation',
          features: ['Process Optimization', 'Task Automation', 'Workflow Analytics', 'Integration APIs'],
          price: 'Starting at $2,100/month',
          rating: 4.7,
          reviews: 203
        }
      ]
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      description: 'Cloud infrastructure and DevOps automation services',
      icon: HardDrive,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Cloud FinOps Optimizer',
          description: 'Optimize your cloud costs and improve financial operations',
          features: ['Cost Optimization', 'Resource Management', 'Budget Tracking', 'Performance Monitoring'],
          price: 'Starting at $1,800/month',
          rating: 4.8,
          reviews: 89
        },
        {
          name: 'Cloud Infrastructure',
          description: 'Scalable and secure cloud infrastructure solutions',
          features: ['Multi-cloud Strategy', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery'],
          price: 'Starting at $2,500/month',
          rating: 4.7,
          reviews: 145
        },
        {
          name: 'DevOps Automation',
          description: 'Streamline your development and operations with automation',
          features: ['CI/CD Pipelines', 'Infrastructure Automation', 'Monitoring & Alerting', 'Security Integration'],
          price: 'Starting at $2,100/month',
          rating: 4.7,
          reviews: 203
        },
        {
          name: 'Edge Computing',
          description: 'Deploy applications closer to users with edge computing solutions',
          features: ['Edge Deployment', 'Latency Optimization', 'Global Distribution', 'Real-time Processing'],
          price: 'Starting at $3,500/month',
          rating: 4.6,
          reviews: 78
        }
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Advanced security solutions and compliance automation',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        {
          name: 'Zero Trust Security',
          description: 'Implement comprehensive zero-trust security architecture',
          features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring'],
          price: 'Starting at $3,200/month',
          rating: 4.9,
          reviews: 156
        },
        {
          name: 'AI Threat Detection',
          description: 'Advanced threat detection powered by artificial intelligence',
          features: ['Behavioral Analysis', 'Threat Intelligence', 'Real-time Alerts', 'Incident Response'],
          price: 'Starting at $2,800/month',
          rating: 4.8,
          reviews: 134
        },
        {
          name: 'Compliance Automation',
          description: 'Automate compliance processes and ensure regulatory adherence',
          features: ['Regulatory Frameworks', 'Automated Auditing', 'Policy Management', 'Risk Assessment'],
          price: 'Starting at $2,600/month',
          rating: 4.7,
          reviews: 98
        },
        {
          name: 'Security Operations',
          description: 'Comprehensive security operations center services',
          features: ['24/7 Monitoring', 'Incident Response', 'Threat Hunting', 'Security Analytics'],
          price: 'Starting at $4,500/month',
          rating: 4.9,
          reviews: 187
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue-darker to-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl sm:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Comprehensive technology solutions designed to transform your business and drive digital innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple/90 hover:to-zion-cyan/90 transition-all duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.id} className="mb-20">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {category.name}
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={service.name}
                    className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white group-hover:text-zion-cyan transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-zion-slate-light">{service.rating}</span>
                        <span className="text-sm text-zion-slate-light">({service.reviews})</span>
                      </div>
                    </div>
                    
                    <p className="text-zion-slate-light mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-zion-cyan mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                            <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-zion-purple/20">
                      <span className="text-zion-cyan font-medium">{service.price}</span>
                      <Link
                        to={`/services/${category.id}/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
                      >
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Let's discuss how our services can help transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple/90 hover:to-zion-cyan/90 transition-all duration-200"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
