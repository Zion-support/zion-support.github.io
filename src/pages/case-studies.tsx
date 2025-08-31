import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock,
  Target,
  Award,
  Building,
  Globe,
  Zap,
  Shield,
  Brain
} from 'lucide-react';

const CaseStudies = () => {
  const featuredCaseStudies = [
    {
      title: 'Global Bank Digital Transformation',
      company: 'Fortune 500 Financial Institution',
      industry: 'Financial Services',
      challenge: 'Legacy system modernization and AI integration for fraud detection',
      solution: 'Implemented AI-powered fraud detection system and modernized core banking infrastructure',
      results: [
        '99.9% fraud detection accuracy',
        '40% reduction in false positives',
        '60% faster transaction processing',
        '$50M annual cost savings'
      ],
      duration: '18 months',
      team: '25+ experts',
      image: 'Bank'
    },
    {
      title: 'Healthcare AI Platform Implementation',
      company: 'Regional Hospital Network',
      industry: 'Healthcare',
      challenge: 'Patient data analysis and predictive diagnostics for improved care outcomes',
      solution: 'Developed comprehensive AI platform for patient monitoring and predictive analytics',
      results: [
        '30% improvement in diagnosis accuracy',
        '25% reduction in readmission rates',
        '40% faster patient data analysis',
        'Improved patient satisfaction scores'
      ],
      duration: '12 months',
      team: '20+ experts',
      image: 'Health'
    },
    {
      title: 'Manufacturing IoT & AI Integration',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Production line optimization and predictive maintenance using IoT and AI',
      solution: 'Implemented comprehensive IoT sensor network with AI-powered predictive analytics',
      results: [
        '35% increase in production efficiency',
        '50% reduction in unplanned downtime',
        '25% improvement in quality control',
        '$20M annual cost savings'
      ],
      duration: '15 months',
      team: '30+ experts',
      image: 'Factory'
    }
  ];

  const additionalCaseStudies = [
    {
      title: 'Retail AI Customer Experience',
      company: 'E-commerce Platform',
      industry: 'Retail',
      results: ['45% increase in conversion rates', '30% improvement in customer retention']
    },
    {
      title: 'Government Cybersecurity Overhaul',
      company: 'Federal Agency',
      industry: 'Government',
      results: ['99.99% threat detection rate', 'Zero security breaches in 2 years']
    },
    {
      title: 'Energy Grid Optimization',
      company: 'Utility Company',
      industry: 'Energy',
      results: ['20% reduction in energy waste', '15% improvement in grid reliability']
    },
    {
      title: 'Logistics AI Platform',
      company: 'Global Shipping Company',
      industry: 'Logistics',
      results: ['30% faster delivery times', '25% reduction in operational costs']
    }
  ];

  const industries = [
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Retail',
    'Government',
    'Energy',
    'Logistics',
    'Technology'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Real-world examples of how our technology solutions drive measurable business outcomes and transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                View All Case Studies
              </button>
              <button className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300">
                Download PDF
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              In-depth analysis of our most impactful client implementations and their results.
            </p>
          </motion.div>

          <div className="space-y-12">
            {featuredCaseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1 p-8">
                    <div className="h-64 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                      <span className="text-6xl font-bold text-green-400">{study.image}</span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Building className="w-4 h-4" />
                        <span>{study.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Target className="w-4 h-4" />
                        <span>{study.industry}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{study.team}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-green-400 mb-2">Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-green-400 mb-2">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-green-400 mb-2">Results</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-2 text-gray-300">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                      Read Full Case Study
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              More Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Additional examples of our technology solutions driving business transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalCaseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{study.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <Building className="w-4 h-4" />
                  <span>{study.company}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <Target className="w-4 h-4" />
                  <span>{study.industry}</span>
                </div>
                <div className="space-y-2">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Coverage Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We've successfully implemented solutions across diverse industry verticals.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 text-center hover:border-gray-600 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our technology solutions can drive similar results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300">
                Download Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
