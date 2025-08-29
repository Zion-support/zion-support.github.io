import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Heart, 
  CreditCard, 
  Factory, 
  ShoppingCart, 
  GraduationCap, 
  Car, 
  Globe,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Target,
  Zap,
  Shield,
  Brain,
  Cloud,
  Cpu
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'finance', name: 'Financial Services', icon: CreditCard },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'transportation', name: 'Transportation', icon: Car },
    { id: 'technology', name: 'Technology', icon: Cpu }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Zap },
    { id: 'ai', name: 'AI & Analytics', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu },
    { id: 'transformation', name: 'Digital Transformation', icon: TrendingUp }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics Platform',
      company: 'MedTech Solutions Inc.',
      industry: 'healthcare',
      service: 'ai',
      challenge: 'MedTech Solutions faced challenges with patient data analysis, leading to delayed diagnoses and inefficient resource allocation. Their existing systems couldn\'t handle the volume and complexity of medical data.',
      solution: 'Implemented a comprehensive AI-powered analytics platform that included machine learning models for predictive diagnostics, real-time patient monitoring, and automated resource optimization.',
      results: [
        '40% improvement in diagnostic accuracy',
        '30% reduction in patient wait times',
        '25% decrease in operational costs',
        '95% user satisfaction rate'
      ],
      technologies: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Real-time Processing'],
      duration: '8 months',
      team: 12,
      image: '/images/case-studies/healthcare-analytics.jpg',
      testimonial: {
        quote: 'Zion Tech Group transformed our healthcare analytics capabilities. The AI platform has revolutionized how we diagnose and treat patients.',
        author: 'Dr. Sarah Johnson',
        title: 'Chief Medical Officer',
        company: 'MedTech Solutions Inc.'
      }
    },
    {
      id: 2,
      title: 'Cybersecurity Transformation for Global Bank',
      company: 'Global Finance Corp.',
      industry: 'finance',
      service: 'cybersecurity',
      challenge: 'Global Finance Corp. experienced increasing cybersecurity threats and struggled with compliance requirements. Their legacy security systems were inadequate for modern threats.',
      solution: 'Deployed a comprehensive zero-trust security architecture with AI-powered threat detection, automated compliance monitoring, and advanced encryption protocols.',
      results: [
        '99.9% threat detection rate',
        '100% compliance achievement',
        '60% reduction in security incidents',
        '50% faster incident response time'
      ],
      technologies: ['Zero Trust Architecture', 'AI Threat Detection', 'Automated Compliance', 'Advanced Encryption'],
      duration: '12 months',
      team: 18,
      image: '/images/case-studies/cybersecurity-bank.jpg',
      testimonial: {
        quote: 'The security transformation has given us confidence in our digital operations and exceeded all compliance requirements.',
        author: 'Michael Chen',
        title: 'Chief Information Security Officer',
        company: 'Global Finance Corp.'
      }
    },
    {
      id: 3,
      title: 'Smart Manufacturing IoT Platform',
      company: 'Advanced Manufacturing Ltd.',
      industry: 'manufacturing',
      service: 'ai',
      challenge: 'Advanced Manufacturing Ltd. struggled with unplanned downtime, quality control issues, and inefficient production processes. Manual monitoring was error-prone and reactive.',
      solution: 'Implemented an IoT-based smart manufacturing platform with predictive maintenance, real-time quality monitoring, and AI-driven process optimization.',
      results: [
        '45% reduction in unplanned downtime',
        '35% improvement in product quality',
        '28% increase in production efficiency',
        '20% reduction in energy consumption'
      ],
      technologies: ['IoT Sensors', 'Predictive Analytics', 'Machine Learning', 'Real-time Monitoring'],
      duration: '10 months',
      team: 15,
      image: '/images/case-studies/smart-manufacturing.jpg',
      testimonial: {
        quote: 'The smart manufacturing platform has transformed our operations. We now have complete visibility and control over our production processes.',
        author: 'Robert Martinez',
        title: 'Operations Director',
        company: 'Advanced Manufacturing Ltd.'
      }
    },
    {
      id: 4,
      title: 'E-commerce Personalization Engine',
      company: 'Digital Retail Solutions',
      industry: 'retail',
      service: 'ai',
      challenge: 'Digital Retail Solutions faced declining conversion rates and customer engagement. Their static product recommendations weren\'t personalized and failed to drive sales.',
      solution: 'Developed an AI-powered personalization engine that provided dynamic product recommendations, personalized marketing campaigns, and customer behavior analysis.',
      results: [
        '35% increase in conversion rates',
        '42% improvement in customer engagement',
        '28% boost in average order value',
        '25% reduction in cart abandonment'
      ],
      technologies: ['Machine Learning', 'Recommendation Systems', 'Customer Analytics', 'A/B Testing'],
      duration: '6 months',
      team: 10,
      image: '/images/case-studies/ecommerce-personalization.jpg',
      testimonial: {
        quote: 'The personalization engine has revolutionized our customer experience and significantly increased our revenue.',
        author: 'Jennifer Lee',
        title: 'VP of Digital Marketing',
        company: 'Digital Retail Solutions'
      }
    },
    {
      id: 5,
      title: 'Cloud-Native Digital Transformation',
      company: 'Tech Innovations Inc.',
      industry: 'technology',
      service: 'transformation',
      challenge: 'Tech Innovations Inc. struggled with legacy systems that couldn\'t scale, high maintenance costs, and slow time-to-market for new features.',
      solution: 'Executed a complete digital transformation including cloud migration, microservices architecture, DevOps automation, and modern development practices.',
      results: [
        '70% reduction in infrastructure costs',
        '80% faster deployment cycles',
        '60% improvement in system reliability',
        '50% reduction in time-to-market'
      ],
      technologies: ['Cloud Migration', 'Microservices', 'DevOps', 'Container Orchestration'],
      duration: '18 months',
      team: 25,
      image: '/images/case-studies/cloud-transformation.jpg',
      testimonial: {
        quote: 'The digital transformation has positioned us as a market leader with scalable, reliable, and cost-effective technology solutions.',
        author: 'David Thompson',
        title: 'Chief Technology Officer',
        company: 'Tech Innovations Inc.'
      }
    },
    {
      id: 6,
      title: 'Educational Technology Platform',
      company: 'Future Learning Academy',
      industry: 'education',
      service: 'ai',
      challenge: 'Future Learning Academy needed to modernize their learning management system and provide personalized learning experiences for students.',
      solution: 'Built an AI-powered educational platform with adaptive learning algorithms, student progress tracking, and interactive content delivery.',
      results: [
        '40% improvement in student performance',
        '35% increase in student engagement',
        '50% reduction in administrative workload',
        '90% teacher satisfaction rate'
      ],
      technologies: ['Adaptive Learning', 'Student Analytics', 'Content Management', 'Progress Tracking'],
      duration: '9 months',
      team: 14,
      image: '/images/case-studies/education-platform.jpg',
      testimonial: {
        quote: 'The educational platform has transformed how we teach and how students learn. It\'s a game-changer for modern education.',
        author: 'Dr. Emily Rodriguez',
        title: 'Principal',
        company: 'Future Learning Academy'
      }
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    return matchesIndustry && matchesService;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and business outcomes from Zion Tech Group's technology implementations across industries."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 mb-6"
          >
            <TrendingUp className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Success Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Real results from real clients. Discover how Zion Tech Group has transformed businesses 
            across industries with cutting-edge technology solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Your Success Story
            </Link>
            <Link
              to="/services-overview"
              className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Industry Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">Filter by Industry</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {industries.map((industry) => (
                    <button
                      key={industry.id}
                      onClick={() => setSelectedIndustry(industry.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedIndustry === industry.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      <industry.icon className="w-4 h-4" />
                      {industry.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">Filter by Service</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedService === service.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      <service.icon className="w-4 h-4" />
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 border-b border-slate-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-gray-300 font-medium">{study.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-blue-400 text-xs font-medium">
                        {study.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {study.team} team members
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {study.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Results</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
                    <blockquote className="text-gray-300 text-sm italic mb-3">
                      "{study.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{study.testimonial.author}</p>
                        <p className="text-gray-400 text-xs">{study.testimonial.title}, {study.testimonial.company}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Impact by the Numbers
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Successful Projects', icon: CheckCircle, color: 'from-green-600 to-emerald-600' },
              { number: '95%', label: 'Client Satisfaction', icon: Star, color: 'from-yellow-600 to-orange-600' },
              { number: '40%', label: 'Average Efficiency Gain', icon: TrendingUp, color: 'from-blue-600 to-cyan-600' },
              { number: '25+', label: 'Industries Served', icon: Globe, color: 'from-purple-600 to-pink-600' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Write Your Success Story?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Let Zion Tech Group help you achieve similar results with our proven technology solutions
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              to="/services-overview"
              className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Explore Solutions
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}