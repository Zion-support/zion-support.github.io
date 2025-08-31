
  const successMetrics = [
    { metric: '500+', label: 'Successful Implementations', icon: CheckCircle, color: 'text-green-400' },
    { metric: '98%', label: 'Client Satisfaction Rate', icon: Award, color: 'text-yellow-400' },
    { metric: '40%', label: 'Average Cost Reduction', icon: TrendingUp, color: 'text-blue-400' },
    { metric: '3x', label: 'Performance Improvement', icon: Zap, color: 'text-purple-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <div className="bg-black/95 backdrop-blur-xl border-b border-cyan-500/30">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Solutions
                </h1>
                <p className="text-lg text-cyan-400 font-rajdhani tracking-wider">
                  Industry-Specific Solutions
                </p>
              </div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover tailored solutions designed for your industry. From healthcare to finance, 
              manufacturing to government, we provide cutting-edge technology solutions that drive real results.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-4 gap-8">
            {successMetrics.map((item, index)              => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{item.metric}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold font-rajdhani text-cyan-400 text-center mb-12 uppercase tracking-wider">
            Industry Solutions
          </h2>
          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {industrySolutions.map((solution, index)              => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Link
                  to={solution.href}
                  className="block p-8 bg-black/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 group h-full"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-rajdhani text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-gray-400">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-300 mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-2">
                      {solution.features.map((feature, featureIndex)              => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
=======
import React, { useState } from 'react.ts';
import { motion               } from 'framer-motion.ts';
import { Link               } from 'react-router-dom.ts';
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
              } from 'lucide-react.ts';
import { SEO               } from '@/components/SEO';

const Solutions: React.FC = (): JSX.Element => {;
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building },
    { id: 'healthcare', name: 'Healthcare', icon: Shield },
    { id: 'finance', name: 'Financial Services', icon: Lock },
    { id: 'manufacturing', name: 'Manufacturing', icon: Building },
    { id: 'retail', name: 'Retail & E-commerce', icon: Users },;
    { id: 'technology', name: 'Technology', icon: Brain };
  ];

  const solutions = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics',
      industry: 'healthcare',
      description: 'Transform patient care with predictive analytics and intelligent diagnosis support.',
      features: [
        'Predictive disease modeling',
        'Medical image analysis',
        'Patient risk assessment',
        'Drug discovery optimization'
      ],
      benefits: [
        'Improved diagnostic accuracy',
        'Reduced healthcare costs',
        'Enhanced patient outcomes',
        'Streamlined clinical workflows'
      ],
      icon: Brain,
      demo: true,
      trial: true
    },
    {
      id: 2,
      title: 'Cybersecurity for Financial Services',
      industry: 'finance',
      description: 'Protect financial institutions with advanced threat detection and compliance solutions.',
      features: [
        'Real-time threat monitoring',
        'Compliance automation',
        'Fraud detection systems',
        'Secure transaction processing'
      ],
      benefits: [
        'Enhanced security posture',
        'Regulatory compliance',
        'Reduced fraud losses',
        'Customer trust protection'
      ],
      icon: Shield,
      demo: true,
      trial: false
    },
    {
      id: 3,
      title: 'Smart Manufacturing Platform',
      industry: 'manufacturing',
      description: 'Optimize production with IoT sensors, predictive maintenance, and quality control.',
      features: [
        'Predictive maintenance',
        'Quality control automation',
        'Supply chain optimization',
        'Energy efficiency monitoring'
      ],
      benefits: [
        'Reduced downtime',
        'Improved product quality',
        'Lower operational costs',
        'Increased productivity'
      ],
      icon: Building,
      demo: true,
      trial: true
    },
    {
      id: 4,
      title: 'E-commerce Personalization Engine',
      industry: 'retail',
      description: 'Boost sales with AI-driven product recommendations and customer insights.',
      features: [
        'Personalized recommendations',
        'Customer behavior analysis',
        'Dynamic pricing optimization',
        'Inventory management'
      ],
      benefits: [
        'Increased conversion rates',
        'Higher customer retention',
        'Optimized pricing strategies',
        'Better inventory control'
      ],
      icon: Users,
      demo: true,
      trial: true
    },
    {
      id: 5,
      title: 'Cloud-Native Development Platform',
      industry: 'technology',
      description: 'Accelerate software development with cloud-native tools and DevOps automation.',
      features: [
        'Container orchestration',
        'CI/CD pipelines',
        'Microservices architecture',
        'Auto-scaling infrastructure'
      ],
      benefits: [
        'Faster time to market',
        'Reduced infrastructure costs',
        'Improved scalability',
        'Enhanced reliability'
      ],
      icon: Cloud,
      demo: true,
      trial: true
    },
    {
      id: 6,
      title: 'Data Intelligence Platform',
      industry: 'technology',
      description: 'Unlock insights from your data with advanced analytics and machine learning.',
      features: [
        'Data warehousing',
        'Real-time analytics',
        'Machine learning models',
        'Business intelligence dashboards'
      ],
      benefits: [
        'Data-driven decisions',
        'Improved operational efficiency',
        'Competitive advantage',
        'Cost optimization'
      ],
      icon: Database,
      demo: true,
      trial: false;
    };
  ];

  const filteredSolutions = selectedIndustry === 'all' ;
    ? solutions: anyanyanyanyanyanyanyanyanyanyanyanyanysolutions.filter(solution               => solution.industry === selectedIndustry);

  return (
    <>
      <SEO 
        title = "Technology Solutions | Zion Tech Group"
        description="Industry-specific technology solutions designed to transform your business operations and drive innovation across healthcare, finance, manufacturing, and more."
        keywords="technology solutions, industry solutions, healthcare analytics, cybersecurity, smart manufacturing, e-commerce, cloud development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-32 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 

}}
              animate = {
  { opacity: 1,
  y: 0 

}}
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

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution, index)               => (
                <motion.div
                  key={solution.id}
                  initial = {
  { opacity: 0,
  y: 20 

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
}}
                  whileInView = {
  { opacity: 1,
  y: 0 

}}
                  transition = {
  { duration: 0.5,
  delay: index * 0.1 

}}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02]"
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
              initial = {
  { opacity: 0,
  y: 30 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
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
      </div>;
    </>;
  )};

export default Solutions;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
