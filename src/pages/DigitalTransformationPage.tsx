import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Star,
  BarChart3,
  Settings,
  Lightbulb,
  Briefcase,
  Award,
  Rocket,
  Target
} from 'lucide-react';

const DigitalTransformationPage = () => {
  const transformationServices = [
    {
      id: 'process-digitization',
      title: 'Process Digitization',
      description: 'Transform manual processes into automated, digital workflows',
      icon: <Zap className="w-8 h-8" />,
      features: ['Workflow Automation', 'Process Mapping', 'Digital Forms', 'Integration'],
      useCases: ['HR Processes', 'Finance Operations', 'Customer Service', 'Supply Chain'],
      pricing: 'Starting from $4,500/month'
    },
    {
      id: 'customer-experience',
      title: 'Customer Experience',
      description: 'Enhance customer interactions through digital channels and platforms',
      icon: <Users className="w-8 h-8" />,
      features: ['Omnichannel Strategy', 'Digital Platforms', 'Customer Analytics', 'Personalization'],
      useCases: ['E-commerce', 'Mobile Apps', 'Customer Portals', 'Support Systems'],
      pricing: 'Starting from $5,200/month'
    },
    {
      id: 'data-strategy',
      title: 'Data Strategy',
      description: 'Develop comprehensive data strategies for informed decision making',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Data Architecture', 'Analytics Platforms', 'Business Intelligence', 'Data Governance'],
      useCases: ['Performance Monitoring', 'Predictive Analytics', 'Reporting', 'Insights'],
      pricing: 'Starting from $3,800/month'
    },
    {
      id: 'technology-integration',
      title: 'Technology Integration',
      description: 'Seamlessly integrate new technologies with existing systems',
      icon: <Globe className="w-8 h-8" />,
      features: ['API Development', 'System Integration', 'Legacy Modernization', 'Cloud Migration'],
      useCases: ['Enterprise Systems', 'Third-party Services', 'Cloud Platforms', 'Mobile Solutions'],
      pricing: 'Starting from $6,500/month'
    }
  ];

  const transformationPhases = [
    'Assessment', 'Strategy', 'Implementation', 'Optimization', 'Scale'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <Globe className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
            Transform your business for the digital age. We help organizations modernize operations, 
            enhance customer experiences, and drive innovation through strategic technology adoption.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">40%+</div>
              <div className="text-zion-slate-light">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">60%+</div>
              <div className="text-zion-slate-light">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-blue mb-2">3x</div>
              <div className="text-zion-slate-light">Faster Delivery</div>
            </div>
          </div>
        </motion.div>

        {/* Transformation Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {transformationServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-sm text-zion-cyan font-medium">{service.pricing}</div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.map((useCase, useCaseIndex) => (
                    <span
                      key={useCaseIndex}
                      className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to={`/digital-transformation/${service.id}`}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Transformation Phases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Transformation Approach
            </h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful digital transformation 
              with measurable outcomes and sustainable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {transformationPhases.map((phase, index) => (
              <motion.div
                key={phase}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/20 border border-zion-cyan/20 rounded-lg p-4 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-zion-cyan font-medium text-sm">{phase}</div>
                <div className="text-zion-slate-light text-xs mt-1">Phase {index + 1}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Digital Transformation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Digital Transformation?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Competitive Advantage</h3>
              <p className="text-zion-slate-light">
                Stay ahead of competitors with modern technology
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Operational Efficiency</h3>
              <p className="text-zion-slate-light">
                Streamline processes and reduce operational costs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-zion-slate-light">
                Enable new business models and opportunities
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Let our digital transformation experts guide you through the journey 
            to a more efficient, innovative, and competitive organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
            >
              Start Transformation
            </Link>
            <Link
              to="/services/pricing"
              className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              View Transformation Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalTransformationPage;