import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  TrendingUp, 
  Zap, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Star,
  BarChart3,
  Settings,
  Lightbulb,
  Briefcase,
  Award
} from 'lucide-react';

const ITConsultingPage = () => {
  const consultingServices = [
    {
      id: 'technology-strategy',
      title: 'Technology Strategy',
      description: 'Develop a comprehensive technology roadmap aligned with business objectives',
      icon: <Target className="w-8 h-8" />,
      features: ['Technology Assessment', 'Roadmap Planning', 'Vendor Selection', 'Investment Planning'],
      useCases: ['Digital Transformation', 'Legacy Modernization', 'Technology Alignment', 'Cost Optimization'],
      pricing: 'Starting from $3,500/month'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Transform your business processes and operations for the digital age',
      icon: <Globe className="w-8 h-8" />,
      features: ['Process Digitization', 'Change Management', 'Technology Integration', 'Performance Monitoring'],
      useCases: ['Business Process Optimization', 'Customer Experience', 'Operational Efficiency', 'Innovation'],
      pricing: 'Starting from $5,000/month'
    },
    {
      id: 'process-optimization',
      title: 'Process Optimization',
      description: 'Streamline and optimize your business processes for maximum efficiency',
      icon: <TrendingUp className="w-8 h-8" />,
      features: ['Process Mapping', 'Bottleneck Analysis', 'Automation Opportunities', 'Performance Metrics'],
      useCases: ['Operational Efficiency', 'Cost Reduction', 'Quality Improvement', 'Customer Satisfaction'],
      pricing: 'Starting from $2,800/month'
    },
    {
      id: 'change-management',
      title: 'Change Management',
      description: 'Guide your organization through technology and process changes successfully',
      icon: <Users className="w-8 h-8" />,
      features: ['Stakeholder Engagement', 'Training Programs', 'Communication Strategy', 'Resistance Management'],
      useCases: ['Technology Adoption', 'Organizational Change', 'Culture Transformation', 'Project Success'],
      pricing: 'Starting from $3,200/month'
    }
  ];

  const industries = [
    'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Education', 'Government', 'Technology', 'Energy'
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
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              IT Consulting
            </span> & Strategy
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
            Strategic technology consulting to drive innovation and digital transformation. 
            We help organizations align technology with business goals for sustainable growth.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">15+</div>
              <div className="text-zion-slate-light">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">200+</div>
              <div className="text-zion-slate-light">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-blue mb-2">95%</div>
              <div className="text-zion-slate-light">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Consulting Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {consultingServices.map((service, index) => (
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
                to={`/services/consulting/${service.id}`}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Our consulting expertise spans across various industries, helping organizations 
              leverage technology for competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/20 border border-zion-cyan/20 rounded-lg p-4 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-zion-cyan font-medium">{industry}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Our Consulting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our Consulting?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Strategic Thinking</h3>
              <p className="text-zion-slate-light">
                Long-term vision aligned with business objectives
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Experience</h3>
              <p className="text-zion-slate-light">
                Track record of successful transformations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quality Delivery</h3>
              <p className="text-zion-slate-light">
                Consistent high-quality results and outcomes
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
            Let our strategic consultants help you navigate the digital landscape 
            and achieve sustainable competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
            >
              Get Strategic Consultation
            </Link>
            <Link
              to="/services/pricing"
              className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              View Consulting Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ITConsultingPage;