import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Trophy, 
  TrendingUp, 
  Users, 
  Calendar, 
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  Cpu,
  Shield,
  Rocket,
  Brain,
  Globe,
  Zap
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Complex supply chain with 15+ suppliers across 8 countries, leading to 30% inventory waste and 25% delayed deliveries.',
      solution: 'Implemented AI-driven demand forecasting, real-time supplier monitoring, and automated inventory management system.',
      results: [
        'Reduced inventory waste by 65%',
        'Improved delivery times by 40%',
        'Cost savings of $2.8M annually',
        'Enhanced supplier collaboration by 80%'
      ],
      technologies: ['AI/ML', 'IoT', 'Cloud Computing', 'Data Analytics'],
      duration: '8 months',
      teamSize: '12',
      rating: 5.0,
      featured: true,
      icon: Brain,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Quantum-Secure Financial Platform',
      client: 'NextGen Bank',
      industry: 'Financial Services',
      challenge: 'Traditional encryption methods vulnerable to quantum attacks, requiring future-proof security for $50B+ in assets.',
      solution: 'Developed quantum-resistant cryptographic protocols and implemented post-quantum cryptography standards.',
      results: [
        '100% quantum-resistant security',
        'Zero security breaches in 2 years',
        'Regulatory compliance achieved',
        'Enhanced customer trust by 90%'
      ],
      technologies: ['Quantum Computing', 'Cryptography', 'Blockchain', 'API Security'],
      duration: '14 months',
      teamSize: '18',
      rating: 5.0,
      featured: true,
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Smart City IoT Infrastructure',
      client: 'Metro City Government',
      industry: 'Government',
      challenge: 'Aging city infrastructure with limited real-time monitoring, leading to inefficient resource allocation and public safety concerns.',
      solution: 'Deployed comprehensive IoT sensor network with AI-powered analytics for traffic, utilities, and public safety monitoring.',
      results: [
        'Traffic congestion reduced by 35%',
        'Utility efficiency improved by 45%',
        'Emergency response time cut by 50%',
        'Annual cost savings of $12M'
      ],
      technologies: ['IoT', 'Edge Computing', 'AI/ML', '5G Networks'],
      duration: '18 months',
      teamSize: '25',
      rating: 4.9,
      featured: false,
      icon: Cpu,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Micro SaaS Platform Development',
      client: 'Startup Ventures Inc',
      industry: 'Technology',
      challenge: 'Need for rapid MVP development and market validation with limited resources and tight timeline.',
      solution: 'Built scalable micro SaaS platform using modern cloud-native architecture and automated deployment pipelines.',
      results: [
        'MVP delivered in 6 weeks',
        'User acquisition increased by 300%',
        'Monthly recurring revenue of $150K',
        'Successfully raised Series A funding'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'CI/CD'],
      duration: '6 weeks',
      teamSize: '8',
      rating: 4.8,
      featured: false,
      icon: Rocket,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Digital Twin Manufacturing',
      client: 'Advanced Auto Parts',
      industry: 'Automotive',
      challenge: 'Production inefficiencies causing 20% defect rate and $5M annual losses in manufacturing operations.',
      solution: 'Created comprehensive digital twin system for real-time production monitoring and predictive maintenance.',
      results: [
        'Defect rate reduced to 3%',
        'Production efficiency improved by 40%',
        'Maintenance costs reduced by 60%',
        'ROI of 350% in first year'
      ],
      technologies: ['Digital Twin', 'IoT', 'AI/ML', '3D Modeling'],
      duration: '10 months',
      teamSize: '15',
      rating: 4.9,
      featured: false,
      icon: Building,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Edge Computing for Retail Analytics',
      client: 'Smart Retail Chain',
      industry: 'Retail',
      challenge: 'Limited customer behavior insights and inefficient inventory management across 200+ store locations.',
      solution: 'Implemented edge computing solution with real-time analytics for customer behavior tracking and inventory optimization.',
      results: [
        'Customer satisfaction improved by 25%',
        'Inventory turnover increased by 35%',
        'Sales conversion rate up by 20%',
        'Operational costs reduced by 30%'
      ],
      technologies: ['Edge Computing', 'Computer Vision', 'AI/ML', 'Real-time Analytics'],
      duration: '12 months',
      teamSize: '20',
      rating: 4.7,
      featured: false,
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const industries = [
    'All Industries',
    'Manufacturing',
    'Financial Services',
    'Government',
    'Technology',
    'Automotive',
    'Retail'
  ];

  const technologies = [
    'All Technologies',
    'AI/ML',
    'Quantum Computing',
    'IoT',
    'Edge Computing',
    'Cloud Computing',
    'Blockchain'
  ];

  return (
    <>
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore our successful client implementations and case studies across AI, quantum computing, IoT, and emerging technologies. Real results and measurable impact."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-green-400/10 border border-green-400/20 rounded-full text-green-400 text-sm font-medium mb-6">
                <Trophy className="w-4 h-4 mr-2" />
                Success Stories
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Case Studies
                <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  & Success Stories
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Discover how we've helped organizations across industries achieve remarkable 
                results through innovative technology solutions and strategic implementation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-green-500/25">
                  View All Studies
                </button>
                <button className="px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200">
                  Request Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our most impactful and innovative client implementations that demonstrate 
                the transformative power of cutting-edge technology solutions.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.filter(cs => cs.featured).map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-green-400/30 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-xl flex items-center justify-center`}>
                      <study.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-5 h-5 mr-1" />
                      <span className="font-semibold">{study.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                  <div className="flex items-center text-slate-400 mb-4">
                    <Building className="w-4 h-4 mr-2" />
                    <span className="font-medium">{study.client}</span>
                    <span className="mx-2">•</span>
                    <span>{study.industry}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-slate-300">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-slate-300">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-slate-400 mb-6">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {study.teamSize} team members
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                All Case Studies
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Browse our complete collection of successful implementations and 
                learn how we've delivered measurable results across industries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-400/30 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${study.color} rounded-lg flex items-center justify-center`}>
                      <study.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center text-yellow-400 text-sm">
                      <Star className="w-4 h-4 mr-1" />
                      {study.rating}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{study.title}</h3>
                  <div className="text-slate-400 text-sm mb-3">
                    {study.client} • {study.industry}
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">{study.challenge}</p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                    <span>{study.duration}</span>
                    <span>{study.teamSize} team</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded">
                        +{study.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <button className="w-full px-4 py-2 border border-green-400/30 text-green-400 text-sm font-medium rounded-lg hover:bg-green-400/10 transition-all duration-200">
                    View Details
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-500/10 to-blue-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Let's discuss how our innovative technology solutions can transform 
                your business and deliver measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-green-500/25">
                  Schedule Consultation
                </button>
                <button className="px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200">
                  Download Case Studies
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}