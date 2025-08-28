import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  Shield, 
  Zap, 
  Cloud, 
  Database, 
  Network, 
  Brain, 
  Lock, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  TrendingUp,
  Globe,
  Cpu,
  Server,
  Smartphone,
  Palette,
  Wallet,
  Box,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Scale,
  Heart,
  Leaf,
  Rocket,
  Atom,
  Eye,
  Code,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Building,
  Car,
  Home,
  Factory,
  City,
  ShoppingCart
} from 'lucide-react';
import { SEO } from '../../components/SEO';

const EnterpriseSolutions: React.FC = () => {
  const solutions = [
    {
      category: 'AI & Machine Learning',
      items: [
        {
          name: 'Enterprise AI Platform',
          description: 'Scalable AI infrastructure for enterprise-wide machine learning operations',
          features: ['MLOps Pipeline', 'Model Governance', 'Auto-scaling', 'Enterprise Security'],
          icon: Brain,
          color: 'from-purple-500 to-pink-500',
          featured: true
        },
        {
          name: 'AI Business Intelligence',
          description: 'Advanced analytics and business intelligence powered by artificial intelligence',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Natural Language Query', 'Custom Reports'],
          icon: BarChart3,
          color: 'from-blue-500 to-cyan-500',
          featured: true
        },
        {
          name: 'AI Content Management',
          description: 'Intelligent content creation, management, and optimization at enterprise scale',
          features: ['Content Automation', 'SEO Optimization', 'Multi-language Support', 'Brand Compliance'],
          icon: Palette,
          color: 'from-indigo-500 to-purple-500',
          featured: false
        }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      items: [
        {
          name: 'Enterprise Cloud Platform',
          description: 'Multi-cloud infrastructure with enterprise-grade security and compliance',
          features: ['Multi-cloud Management', 'Auto-scaling', 'Disaster Recovery', 'Compliance Ready'],
          icon: Cloud,
          color: 'from-blue-500 to-cyan-500',
          featured: true
        },
        {
          name: 'DevOps & CI/CD',
          description: 'Enterprise DevOps practices with automated deployment and monitoring',
          features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure as Code', 'Performance Monitoring'],
          icon: Code,
          color: 'from-green-500 to-emerald-500',
          featured: false
        },
        {
          name: 'Data Center Solutions',
          description: 'On-premises and hybrid data center solutions for enterprise requirements',
          features: ['High Availability', 'Load Balancing', 'Backup & Recovery', '24/7 Monitoring'],
          icon: Server,
          color: 'from-gray-500 to-slate-500',
          featured: false
        }
      ]
    },
    {
      category: 'Security & Compliance',
      items: [
        {
          name: 'Enterprise Cybersecurity',
          description: 'Comprehensive security solutions for enterprise environments',
          features: ['Threat Detection', 'Incident Response', 'Compliance Management', 'Security Training'],
          icon: Shield,
          color: 'from-red-500 to-orange-500',
          featured: true
        },
        {
          name: 'Zero Trust Architecture',
          description: 'Modern security framework with continuous verification and least-privilege access',
          features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring'],
          icon: Lock,
          color: 'from-orange-500 to-red-500',
          featured: true
        },
        {
          name: 'Compliance Management',
          description: 'Automated compliance monitoring and reporting for various industry standards',
          features: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'Audit Trails'],
          icon: Scale,
          color: 'from-yellow-500 to-orange-500',
          featured: false
        }
      ]
    },
    {
      category: 'Data & Analytics',
      items: [
        {
          name: 'Big Data Platform',
          description: 'Enterprise-scale data processing and analytics platform',
          features: ['Data Lake', 'Real-time Processing', 'Advanced Analytics', 'Data Governance'],
          icon: Database,
          color: 'from-cyan-500 to-blue-500',
          featured: true
        },
        {
          name: 'Business Intelligence',
          description: 'Comprehensive BI solutions for enterprise decision-making',
          features: ['Interactive Dashboards', 'Ad-hoc Reporting', 'Data Visualization', 'Mobile Access'],
          icon: BarChart3,
          color: 'from-green-500 to-teal-500',
          featured: false
        },
        {
          name: 'Data Governance',
          description: 'Enterprise data governance and quality management',
          features: ['Data Catalog', 'Quality Monitoring', 'Lineage Tracking', 'Policy Management'],
          icon: Settings,
          color: 'from-purple-500 to-indigo-500',
          featured: false
        }
      ]
    },
    {
      category: 'Digital Transformation',
      items: [
        {
          name: 'Digital Workplace',
          description: 'Modern workplace solutions for enterprise collaboration and productivity',
          features: ['Unified Communication', 'Document Management', 'Team Collaboration', 'Mobile Access'],
          icon: Users,
          color: 'from-indigo-500 to-purple-500',
          featured: true
        },
        {
          name: 'Process Automation',
          description: 'Enterprise process automation and workflow optimization',
          features: ['RPA Integration', 'Workflow Design', 'Process Monitoring', 'Performance Analytics'],
          icon: Zap,
          color: 'from-yellow-500 to-orange-500',
          featured: false
        },
        {
          name: 'Legacy Modernization',
          description: 'Modernization of legacy systems and applications',
          features: ['System Assessment', 'Migration Planning', 'Cloud Migration', 'Performance Optimization'],
          icon: Building,
          color: 'from-gray-500 to-slate-500',
          featured: false
        }
      ]
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      icon: Wallet,
      description: 'Banking, insurance, and fintech solutions with regulatory compliance',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'HIPAA-compliant healthcare technology solutions',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Industry 4.0 and smart manufacturing solutions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Omnichannel retail and digital commerce solutions',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Energy & Utilities',
      icon: Zap,
      description: 'Smart grid and energy management solutions',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Government',
      icon: Building2,
      description: 'Public sector digital transformation solutions',
      color: 'from-slate-500 to-gray-500'
    }
  ];

  const benefits = [
    {
      title: 'Scalability',
      description: 'Solutions that grow with your business needs',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security and compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Efficiency',
      description: 'Streamlined operations and reduced costs',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Innovation',
      description: 'Cutting-edge technology and competitive advantage',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Enterprise Solutions - Zion Tech Group"
        description="Enterprise-grade technology solutions for large-scale business transformations. Scalable, secure, and innovative solutions designed for enterprise needs."
        keywords="enterprise solutions, enterprise technology, large business solutions, scalable technology, enterprise software, business transformation, enterprise AI, enterprise cloud"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-500/10"></div>
        <div className="container-responsive relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Enterprise
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your enterprise with scalable, secure, and innovative technology solutions. 
              From AI platforms to cloud infrastructure, we deliver enterprise-grade solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Enterprise Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container-responsive">
          {solutions.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {category.category}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((solution, solutionIndex) => (
                  <motion.div
                    key={solution.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (solutionIndex * 0.1) }}
                    viewport={{ once: true }}
                    className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
                      solution.featured 
                        ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/80 to-slate-700/80 ring-2 ring-cyan-400/20' 
                        : 'border-slate-700/50 bg-slate-800/50 hover:border-slate-600/50'
                    }`}
                  >
                    {solution.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      </div>
                    )}

                    <div className="p-6">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${solution.color} mb-4`}>
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {solution.name}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {solution.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group/link"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We have deep expertise across multiple industries, delivering tailored solutions 
              that address specific business challenges and regulatory requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 hover:bg-slate-700/30 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${industry.color} mb-4`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {industry.name}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Enterprise Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our enterprise solutions are designed to deliver measurable business value 
              while ensuring security, scalability, and long-term success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${benefit.color} mb-6`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let our enterprise experts analyze your needs and create a customized solution 
              that drives real business transformation and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Enterprise Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Enterprise Consultation
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our enterprise team is ready to help you navigate the complexities of large-scale 
                technology transformation. We understand enterprise challenges and deliver solutions that scale.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 bg-slate-700/50 rounded-lg">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 bg-slate-700/50 rounded-lg">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <div className="p-2 bg-slate-700/50 rounded-lg mt-0.5">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-sm leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-700/50"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Enterprise Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg mt-0.5">
                    <Target className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Scalable Architecture</h4>
                    <p className="text-sm text-gray-400">Solutions designed to grow with your business</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg mt-0.5">
                    <Shield className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Enterprise Security</h4>
                    <p className="text-sm text-gray-400">Bank-level security and compliance standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg mt-0.5">
                    <Users className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Dedicated Support</h4>
                    <p className="text-sm text-gray-400">24/7 enterprise support and account management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg mt-0.5">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">ROI Focused</h4>
                    <p className="text-sm text-gray-400">Measurable business outcomes and value delivery</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <ArrowRight className="w-6 h-6 rotate-45" />
      </button>
    </div>
  );
};

export default EnterpriseSolutions;
