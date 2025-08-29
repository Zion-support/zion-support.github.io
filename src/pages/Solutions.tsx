import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Building, 
  Heart, 
  Shield, 
  TrendingUp, 
  Globe, 
  Rocket, 
  Users, 
  Cpu,
  Database,
  Lock,
  BarChart3,
  Target,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Cloud
} from 'lucide-react';

const Solutions: React.FC = () => {
  const industrySolutions = [
    {
      icon: Building,
      title: 'Enterprise Solutions',
      description: 'Comprehensive technology solutions for large-scale organizations',
      features: ['Scalable Infrastructure', 'Enterprise Security', 'Custom Development', '24/7 Support'],
      href: '/solutions/enterprise',
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      icon: Heart,
      title: 'Healthcare Solutions',
      description: 'AI-powered healthcare technology for improved patient outcomes',
      features: ['AI Diagnostics', 'Patient Management', 'Compliance & Security', 'Telemedicine Platform'],
      href: '/solutions/healthcare',
      color: 'from-red-500 to-pink-500',
      featured: true
    },
    {
      icon: TrendingUp,
      title: 'Financial Solutions',
      description: 'Fintech innovation and compliance solutions for financial institutions',
      features: ['AI Trading', 'Risk Management', 'Compliance Automation', 'Blockchain Integration'],
      href: '/solutions/financial',
      color: 'from-green-500 to-emerald-500',
      featured: true
    },
    {
      icon: Shield,
      title: 'Government Solutions',
      description: 'Secure technology solutions for public sector organizations',
      features: ['Cybersecurity', 'Data Protection', 'Compliance Management', 'Digital Transformation'],
      href: '/solutions/government',
      color: 'from-purple-500 to-indigo-500',
      featured: false
    },
    {
      icon: Rocket,
      title: 'Startup Solutions',
      description: 'Accelerate your startup growth with scalable technology solutions',
      features: ['MVP Development', 'Cloud Infrastructure', 'AI Integration', 'Growth Analytics'],
      href: '/solutions/startup',
      color: 'from-orange-500 to-red-500',
      featured: false
    },
    {
      icon: Users,
      title: 'SMB Solutions',
      description: 'Cost-effective technology solutions for small to medium businesses',
      features: ['Cloud Migration', 'Security Implementation', 'Process Automation', 'Digital Marketing'],
      href: '/solutions/smb',
      color: 'from-teal-500 to-cyan-500',
      featured: false
    }
  ];

  const technologySolutions = [
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Transform your business with intelligent automation and insights',
      solutions: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Robotic Process Automation'],
      href: '/services/ai-business-intelligence'
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions for modern business needs',
      solutions: ['Cloud Migration', 'DevOps Automation', 'Container Orchestration', 'Serverless Architecture'],
      href: '/services/cloud-devops'
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with advanced security solutions',
      solutions: ['Threat Detection', 'Zero Trust Security', 'Compliance Management', 'Incident Response'],
      href: '/services/cybersecurity'
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Turn your data into actionable business intelligence',
      solutions: ['Data Warehousing', 'Business Intelligence', 'Real-time Analytics', 'Data Governance'],
      href: '/services/data-analytics'
    }
  ];

  const successMetrics = [
    { metric: '300%', description: 'Average efficiency improvement' },
    { metric: '50%', description: 'Cost reduction in operations' },
    { metric: '99.9%', description: 'System uptime guarantee' },
    { metric: '24/7', description: 'Support availability' }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Williams',
      role: 'CTO, HealthTech Solutions',
      content: 'Zion Tech Group\'s healthcare AI solutions revolutionized our diagnostic accuracy and patient care.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP Technology, FinCorp',
      content: 'Their financial technology solutions helped us achieve 100% compliance while reducing costs by 40%.',
      rating: 5
    },
    {
      name: 'Jennifer Chen',
      role: 'CEO, StartupXYZ',
      content: 'Zion Tech Group accelerated our growth with scalable cloud infrastructure and AI integration.',
      rating: 5
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      <SEO 
        title="Enterprise Solutions - Zion Tech Group"
        description="Discover industry-specific technology solutions designed to transform your business. From healthcare to finance, we deliver customized solutions that drive growth and innovation."
        keywords="enterprise solutions, healthcare technology, financial solutions, government technology, startup solutions, SMB technology"
        ogType="website"
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Industry-Specific
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your industry with customized technology solutions designed specifically 
              for your business challenges and growth objectives.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Call Us</p>
                    <p className="text-white font-semibold">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">Email Us</p>
                    <p className="text-white font-semibold">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                  <div>
                    <p className="text-sm text-gray-400">Visit Us</p>
                    <p className="text-white font-semibold">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand the unique challenges of your industry and deliver 
              tailored technology solutions that drive measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  solution.featured
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-400/50'
                    : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50'
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 ${
                  solution.featured ? 'ring-2 ring-cyan-400/50' : ''
                }`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${
                  solution.featured ? 'text-cyan-400' : 'text-white'
                }`}>
                  {solution.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={solution.href}
                  className={`inline-flex items-center font-medium transition-colors ${
                    solution.featured
                      ? 'text-cyan-400 hover:text-cyan-300'
                      : 'text-gray-400 hover:text-cyan-400'
                  }`}
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>

                {solution.featured && (
                  <div className="mt-4 inline-flex items-center gap-1 text-xs text-cyan-400">
                    <Star className="w-3 h-3" />
                    Featured Solution
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Solutions Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive technology stack covers all aspects of modern 
              business needs, from AI to cybersecurity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologySolutions.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <tech.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                    <p className="text-gray-300 mb-4">{tech.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {tech.solutions.map((solution) => (
                        <div key={solution} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {solution}
                        </div>
                      ))}
                    </div>

                    <Link
                      to={tech.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      Explore Solutions
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions deliver measurable business impact across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.description}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {metric.metric}
                </div>
                <div className="text-gray-300">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from industry leaders who have transformed their businesses with our solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
              Let's discuss how our industry-specific solutions can address your 
              unique challenges and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Solutions;