import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Building, 
  Rocket, 
  Shield, 
  Heart, 
  DollarSign, 
  Factory, 
  ShoppingCart, 
  GraduationCap, 
  Truck,
  Target,
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Globe,
  Cpu,
  Lock,
  Database,
  Cloud,
  Brain,
  Leaf,
  Atom,
  Eye,
  TrendingUp,
  BarChart3,
  MessageSquare,
  Code,
  Server,
  Network,
  Smartphone,
  Palette,
  Wallet,
  Box,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';

const Solutions: React.FC = () => {
  const solutions = [
    {
      category: 'Business Size',
      items: [
        {
          name: 'Enterprise Solutions',
          href: '/solutions/enterprise',
          icon: Building2,
          description: 'Large-scale business transformations with enterprise-grade technology',
          features: ['Scalable Infrastructure', 'Custom Development', 'Enterprise Security', '24/7 Support'],
          color: 'from-blue-500 to-cyan-500',
          featured: true
        },
        {
          name: 'SMB Solutions',
          href: '/solutions/smb',
          icon: Building,
          description: 'Cost-effective technology solutions for small to medium businesses',
          features: ['Affordable Pricing', 'Quick Implementation', 'Essential Features', 'Local Support'],
          color: 'from-green-500 to-emerald-500',
          featured: false
        },
        {
          name: 'Startup Solutions',
          href: '/solutions/startup',
          icon: Rocket,
          description: 'Accelerate your startup growth with cutting-edge technology',
          features: ['Rapid Deployment', 'Growth-Focused', 'Flexible Scaling', 'Startup-Friendly Pricing'],
          color: 'from-purple-500 to-pink-500',
          featured: true
        }
      ]
    },
    {
      category: 'Industry Solutions',
      items: [
        {
          name: 'Healthcare Solutions',
          href: '/solutions/healthcare',
          icon: Heart,
          description: 'Secure, compliant healthcare technology solutions',
          features: ['HIPAA Compliance', 'Patient Data Security', 'Medical AI', 'Telehealth Platforms'],
          color: 'from-red-500 to-pink-500',
          featured: true
        },
        {
          name: 'Financial Solutions',
          href: '/solutions/financial',
          icon: DollarSign,
          description: 'Fintech innovation and regulatory compliance solutions',
          features: ['Regulatory Compliance', 'Fraud Detection', 'AI Trading', 'Secure Transactions'],
          color: 'from-yellow-500 to-orange-500',
          featured: true
        },
        {
          name: 'Manufacturing Solutions',
          href: '/solutions/manufacturing',
          icon: Factory,
          description: 'Smart manufacturing and Industry 4.0 solutions',
          features: ['IoT Integration', 'Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization'],
          color: 'from-gray-500 to-slate-500',
          featured: false
        },
        {
          name: 'Retail Solutions',
          href: '/solutions/retail',
          icon: ShoppingCart,
          description: 'Digital transformation for modern retail businesses',
          features: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics', 'Omnichannel Experience'],
          color: 'from-indigo-500 to-purple-500',
          featured: false
        },
        {
          name: 'Education Solutions',
          href: '/solutions/education',
          icon: GraduationCap,
          description: 'Technology solutions for educational institutions',
          features: ['Learning Management', 'Student Analytics', 'Virtual Classrooms', 'Administrative Tools'],
          color: 'from-teal-500 to-cyan-500',
          featured: false
        },
        {
          name: 'Transportation Solutions',
          href: '/solutions/transportation',
          icon: Truck,
          description: 'Smart transportation and logistics solutions',
          features: ['Fleet Management', 'Route Optimization', 'Real-time Tracking', 'Predictive Analytics'],
          color: 'from-orange-500 to-red-500',
          featured: false
        }
      ]
    },
    {
      category: 'Government Solutions',
      items: [
        {
          name: 'Government Solutions',
          href: '/solutions/government',
          icon: Shield,
          description: 'Public sector innovation and digital transformation',
          features: ['Security Clearance', 'Compliance Standards', 'Citizen Services', 'Infrastructure Management'],
          color: 'from-slate-500 to-gray-500',
          featured: false
        }
      ]
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
        title="Solutions - Zion Tech Group"
        description="Comprehensive technology solutions for enterprises, SMBs, startups, and specific industries including healthcare, finance, manufacturing, and more."
        keywords="enterprise solutions, SMB solutions, startup solutions, healthcare technology, financial technology, manufacturing solutions, retail solutions, education technology, transportation solutions, government solutions"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology Solutions for
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Every Business
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From startups to enterprises, healthcare to finance, we deliver customized technology solutions 
              that drive innovation, efficiency, and growth across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Your Solution
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Talk to Experts
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
                        to={solution.href}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let our experts analyze your needs and create a customized solution that drives real results. 
              Get started with a free consultation today.
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
                Call Now
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
                Let's Discuss Your Solution
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our team of technology experts is ready to help you find the perfect solution for your business. 
                Whether you need enterprise-grade infrastructure or startup-friendly tools, we've got you covered.
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
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Solutions?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg mt-0.5">
                    <Target className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Customized Approach</h4>
                    <p className="text-sm text-gray-400">Every solution is tailored to your specific business needs and goals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg mt-0.5">
                    <Zap className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Rapid Implementation</h4>
                    <p className="text-sm text-gray-400">Quick deployment with minimal disruption to your operations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg mt-0.5">
                    <Shield className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Enterprise Security</h4>
                    <p className="text-sm text-gray-400">Bank-level security and compliance for all solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg mt-0.5">
                    <Users className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">24/7 Support</h4>
                    <p className="text-sm text-gray-400">Round-the-clock technical support and maintenance</p>
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

export default Solutions;