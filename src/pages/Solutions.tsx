import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Building, 
  Building2, 
  Rocket, 
  Shield, 
  Heart, 
  TrendingUp, 
  Users, 
  Globe, 
  Leaf, 
  Atom,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Brain,
  Cloud,
  Cpu,
  Database,
  Lock,
  Code,
  BarChart3,
  Target,
  Gauge,
  Award,
  Crown,
  Sparkles,
  Flame,
  Infinity,
  Eye,
  Server,
  Smartphone,
  Network,
  Clock,
  ShoppingCart,
  FileText,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Scale,
  Car,
  Home,
  Factory,
  City,
  CheckCircle2
} from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      category: 'Enterprise Solutions',
      icon: Building2,
      description: 'Large-scale business transformations and digital modernization',
      featured: true,
      color: 'from-blue-500 to-cyan-500',
      solutions: [
        'Digital Transformation Consulting',
        'Enterprise Architecture Design',
        'Legacy System Modernization',
        'Business Process Optimization',
        'Change Management & Training',
        'Enterprise Security Implementation'
      ],
      benefits: [
        'Scalable infrastructure for growth',
        'Improved operational efficiency',
        'Enhanced security and compliance',
        'Reduced operational costs',
        'Better customer experience',
        'Competitive advantage'
      ]
    },
    {
      category: 'Healthcare Solutions',
      icon: Heart,
      description: 'Digital health transformation and medical AI solutions',
      featured: true,
      color: 'from-red-500 to-pink-500',
      solutions: [
        'AI-Powered Medical Diagnostics',
        'Electronic Health Records (EHR)',
        'Telemedicine Platforms',
        'Healthcare Analytics & BI',
        'Patient Engagement Systems',
        'Medical Device Integration'
      ],
      benefits: [
        'Improved patient outcomes',
        'Enhanced diagnostic accuracy',
        'Streamlined healthcare workflows',
        'Better patient engagement',
        'Reduced healthcare costs',
        'Compliance with healthcare regulations'
      ]
    },
    {
      category: 'Financial Solutions',
      icon: TrendingUp,
      description: 'Fintech innovation and financial technology solutions',
      featured: true,
      color: 'from-emerald-500 to-green-500',
      solutions: [
        'AI-Powered Risk Management',
        'Blockchain & Cryptocurrency',
        'Digital Banking Platforms',
        'Fraud Detection Systems',
        'Regulatory Compliance Tools',
        'Financial Analytics & Reporting'
      ],
      benefits: [
        'Enhanced security and fraud prevention',
        'Improved regulatory compliance',
        'Better risk assessment',
        'Streamlined financial operations',
        'Enhanced customer experience',
        'Competitive advantage in fintech'
      ]
    },
    {
      category: 'Government Solutions',
      icon: Shield,
      description: 'Public sector innovation and government technology',
      featured: false,
      color: 'from-indigo-500 to-purple-500',
      solutions: [
        'Digital Government Platforms',
        'Cybersecurity & Compliance',
        'Data Analytics & Reporting',
        'Citizen Engagement Systems',
        'Infrastructure Management',
        'Emergency Response Systems'
      ],
      benefits: [
        'Improved citizen services',
        'Enhanced government efficiency',
        'Better data security',
        'Cost savings for taxpayers',
        'Transparent governance',
        'Modernized public infrastructure'
      ]
    },
    {
      category: 'Manufacturing Solutions',
      icon: Factory,
      description: 'Smart manufacturing and Industry 4.0 solutions',
      featured: false,
      color: 'from-orange-500 to-red-500',
      solutions: [
        'IoT & Smart Manufacturing',
        'Predictive Maintenance',
        'Quality Control Automation',
        'Supply Chain Optimization',
        'Digital Twin Implementation',
        'Manufacturing Analytics'
      ],
      benefits: [
        'Increased production efficiency',
        'Reduced downtime and maintenance costs',
        'Improved product quality',
        'Better supply chain visibility',
        'Enhanced safety measures',
        'Sustainable manufacturing practices'
      ]
    },
    {
      category: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Digital retail transformation and customer experience',
      featured: false,
      color: 'from-purple-500 to-pink-500',
      solutions: [
        'E-commerce Platforms',
        'Customer Analytics & Personalization',
        'Inventory Management Systems',
        'Omnichannel Retail Solutions',
        'AI-Powered Customer Service',
        'Retail Analytics & BI'
      ],
      benefits: [
        'Enhanced customer experience',
        'Increased sales and conversion rates',
        'Improved inventory management',
        'Better customer insights',
        'Streamlined operations',
        'Competitive market advantage'
      ]
    },
    {
      category: 'Energy & Sustainability',
      icon: Leaf,
      description: 'Green technology and sustainable energy solutions',
      featured: false,
      color: 'from-green-500 to-emerald-500',
      solutions: [
        'Renewable Energy Management',
        'Smart Grid Solutions',
        'Energy Efficiency Systems',
        'Carbon Footprint Tracking',
        'Sustainable Technology Consulting',
        'Green Building Solutions'
      ],
      benefits: [
        'Reduced environmental impact',
        'Lower energy costs',
        'Compliance with environmental regulations',
        'Enhanced corporate social responsibility',
        'Improved energy efficiency',
        'Sustainable business practices'
      ]
    },
    {
      category: 'Space & Aerospace',
      icon: Rocket,
      description: 'Space technology and aerospace innovation',
      featured: false,
      color: 'from-indigo-500 to-purple-500',
      solutions: [
        'Satellite Operations & Management',
        'Space Mission Planning',
        'Aerospace Engineering Support',
        'Space Data Analytics',
        'Mission Control Systems',
        'Space Technology Consulting'
      ],
      benefits: [
        'Advanced space exploration capabilities',
        'Enhanced satellite operations',
        'Improved mission success rates',
        'Better space data utilization',
        'Innovation in aerospace technology',
        'Strategic space advantage'
      ]
    },
    {
      category: 'Education & Training',
      icon: Users,
      description: 'Educational technology and learning platforms',
      featured: false,
      color: 'from-blue-500 to-cyan-500',
      solutions: [
        'Learning Management Systems',
        'AI-Powered Tutoring',
        'Virtual Reality Learning',
        'Educational Analytics',
        'Student Engagement Platforms',
        'Corporate Training Solutions'
      ],
      benefits: [
        'Improved learning outcomes',
        'Enhanced student engagement',
        'Personalized learning experiences',
        'Better educational insights',
        'Streamlined training processes',
        'Accessible education for all'
      ]
    },
    {
      category: 'SMB Solutions',
      icon: Building,
      description: 'Small to medium business growth and technology',
      featured: false,
      color: 'from-gray-500 to-slate-500',
      solutions: [
        'Business Process Automation',
        'Cloud Migration Services',
        'Digital Marketing Solutions',
        'Customer Relationship Management',
        'Business Intelligence Tools',
        'IT Infrastructure Support'
      ],
      benefits: [
        'Affordable technology solutions',
        'Scalable business growth',
        'Improved operational efficiency',
        'Better customer management',
        'Enhanced market competitiveness',
        'Reduced IT complexity'
      ]
    },
    {
      category: 'Startup Solutions',
      icon: Rocket,
      description: 'Accelerate your startup growth with technology',
      featured: false,
      color: 'from-orange-500 to-yellow-500',
      solutions: [
        'MVP Development & Testing',
        'Scalable Architecture Design',
        'Growth Hacking Tools',
        'Investor Pitch Decks',
        'Market Validation Services',
        'Technology Stack Consulting'
      ],
      benefits: [
        'Faster time to market',
        'Scalable technology foundation',
        'Investor-ready presentations',
        'Validated market fit',
        'Reduced development costs',
        'Accelerated growth trajectory'
      ]
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to automate processes and gain insights'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description: 'Built for scalability and reliability with modern cloud technologies'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with compliance and data protection built-in'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Quick deployment with minimal disruption to your business operations'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 support from our team of technology experts and consultants'
    },
    {
      icon: Target,
      title: 'Proven Results',
      description: 'Track record of successful implementations across various industries'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, HealthTech Innovations',
      company: 'Healthcare',
      content: 'Zion Tech Group transformed our healthcare platform with AI-powered diagnostics, improving patient outcomes by 40%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'VP Engineering, FinFlow',
      company: 'Financial Services',
      content: 'Their blockchain implementation reduced our transaction costs by 60% while maintaining security compliance.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director, SmartManufacturing',
      company: 'Manufacturing',
      content: 'The IoT implementation gave us real-time visibility into our operations, reducing downtime by 35%.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Industry Solutions - Zion Tech Group"
        description="Comprehensive technology solutions for healthcare, finance, manufacturing, government, and more. Transform your business with our AI-powered industry solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry Solutions That
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Transform</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Tailored technology solutions designed specifically for your industry. From healthcare to finance, 
              manufacturing to government, we deliver innovative solutions that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Get Your Solution
              </button>
              <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Solutions for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive suite of industry-specific solutions addresses the unique challenges 
              and opportunities in your sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  solution.featured
                    ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-blue-500/10'
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                }`}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${solution.color} w-fit mb-4`}>
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {solution.category}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm">
                  {solution.description}
                </p>

                {solution.featured && (
                  <span className="inline-flex items-center gap-1 mb-4 text-xs text-cyan-400">
                    <Star className="w-3 h-3" />
                    Featured Solution
                  </span>
                )}

                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-medium text-cyan-400">Key Solutions:</h4>
                  <ul className="space-y-1">
                    {solution.solutions.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-medium text-cyan-400">Benefits:</h4>
                  <ul className="space-y-1">
                    {solution.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-white text-sm font-medium rounded-lg transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:text-cyan-400">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our industry solutions are built on proven technology and delivered by experts 
              who understand your business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our industry solutions have transformed businesses across different sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-slate-700/50 bg-slate-800/30"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our industry-specific solutions can address your unique challenges 
              and drive measurable business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300">
                Download Solutions Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}