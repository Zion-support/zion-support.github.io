import React, { useState } from 'react';
import { motion  } from 'framer-motion';
import { Link  } from 'react-router-dom';
import { Building, 
  Shield, 
  Cloud, 
  Brain, 
  Zap, 
  Globe,
  Users,
  Database,
  Lock,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play
 } from 'lucide-react';
import { SEO  } from '@/components/SEO';

const Solutions: React.FC = (): JSX.Element => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

const industrySolutions = [
  {
    industry: 'Healthcare',
    icon: Heart,
    solutions: [
      'Electronic Health Records',
      'Telemedicine Platforms',
      'Medical Imaging AI',
      'Patient Data Analytics',
      'Healthcare Security',
      'Regulatory Compliance'
    ],
    color: 'from-pink-500 to-rose-600'
  },
  {
    industry: 'Finance',
    icon: DollarSign,
    solutions: [
      'Fintech Applications',
      'Risk Management',
      'Fraud Detection',
      'Regulatory Compliance',
      'Digital Banking',
      'Blockchain Solutions'
    ],
    color: 'from-green-500 to-emerald-600'
  },
  {
    industry: 'Manufacturing',
    icon: Cpu,
    solutions: [
      'Smart Manufacturing',
      'Predictive Maintenance',
      'Quality Control',
      'Supply Chain Optimization',
      'Industrial IoT',
      'Automation Systems'
    ],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    industry: 'Retail',
    icon: ShoppingCart,
    solutions: [
      'E-commerce Platforms',
      'Customer Analytics',
      'Inventory Management',
      'Omnichannel Solutions',
      'Personalization',
      'Supply Chain Management'
    ],
    color: 'from-purple-500 to-indigo-600'
  },
  {
    industry: 'Education',
// Fixed missing name:     icon: BookOpen,
    solutions: [
      'Learning Management Systems',
      'Virtual Classrooms',
      'Student Analytics',
      'Content Management',
      'Assessment Tools',
      'Collaboration Platforms'
    ],
    color: 'from-yellow-500 to-orange-600'
  },
  {
    industry: 'Government',
    icon: Shield,
    solutions: [
      'Digital Services',
      'Data Security',
      'Process Automation',
      'Citizen Engagement',
      'Regulatory Compliance',
      'Infrastructure Management'
    ],
    color: 'from-gray-500 to-slate-600'
  }
];

const featuredSolutions = [
  {
    id: 1,
    name: 'AI-Powered Business Intelligence',
    category: 'AI & ML',
    description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform. Get real-time dashboards, predictive modeling, and automated reporting.',
    features: [
      'Real-time data processing',
      'Predictive analytics models',
      'Custom dashboard creation',
      'Automated reporting',
      'Natural language queries',
      'Mobile-responsive design'
    ],
    benefits: [
      '30% faster decision making',
      'Reduced manual reporting',
      'Improved data accuracy',
      'Enhanced user experience'
    ],
    price: 'Starting at $2,500/month',
    implementation: '4-8 weeks',
    icon: Brain,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 2,
    name: 'Zero-Trust Security Framework',
    category: 'Cybersecurity',
    description: 'Implement a comprehensive security framework that continuously verifies every user, device, and connection to protect your organization from modern threats.',
    features: [
      'Identity verification',
      'Smartphone authentication',
      'Network segmentation',
      'Threat detection',
      'Compliance monitoring',
      'Incident response'
    ],
    benefits: [
      '99.9% threat detection rate',
      'Reduced security incidents',
      'Compliance achievement',
      'Lower insurance costs'
    ],
    price: 'Starting at $3,200/month',
    implementation: '6-12 weeks',
    icon: Shield,
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 3,
    name: 'Cloud-Native Infrastructure',
    category: 'Cloud Computing',
    description: 'Build scalable, resilient, and cost-effective infrastructure using modern cloud-native technologies and best practices.',
    features: [
      'Auto-scaling infrastructure',
      'Container orchestration',
      'CI/CD pipelines',
      'Monitoring & alerting',
      'Disaster recovery',
      'Cost optimization'
    ],
    benefits: [
      '50% infrastructure cost reduction',
      '99.9% uptime guarantee',
      'Faster deployment cycles',
      'Improved scalability'
    ],
    price: 'Starting at $1,800/month',
    implementation: '8-16 weeks',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-600'
  }
];

  const filteredSolutions = selectedIndustry === 'all' 
    ? solutions: anysolutions.filter(solution  => solution.industry === selectedIndustry);

  return (
  {/* Empty JSX fragment */}
      <SEO 
        title="Technology Solutions | Zion Tech Group"
        description="Industry-specific technology solutions designed to transform your business operations and drive innovation across healthcare, finance, manufacturing, and more."
        keywords="technology solutions, industry solutions, healthcare analytics, cybersecurity, smart manufacturing, e-commerce, cloud development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-32 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Technology
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Industry-specific technology solutions designed to transform your business operations, 
                drive innovation, and deliver measurable results across all sectors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                    selectedIndustry === industry.id
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                  }`}
                >
                  <industry.icon className="w-5 h-5 mr-2" />
                  {industry.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution, index)  => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="flex space-x-2">
                      {solution.demo && (
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors duration-300">
                          <Play className="w-4 h-4 mr-1 inline" />
                          Demo
                        </button>
                      )}
                      {solution.trial && (
                        <button className="px-4 py-2 border border-blue-600 text-blue-400 text-sm font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
                          Start Trial
                        </button>
                      )}
                    </div>
                    <Link
                      to={`/solutions/${solution.id}`}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-700/30">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our technology solutions drive your digital transformation and unlock new possibilities 
                for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center justify-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </React.Fragment>
  )};

export default Solutions;