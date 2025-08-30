import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  Globe, 
  Star, 
  Award, 
  TrendingUp, 
  Building, 
  Zap,
  Shield,
  Brain,
  Cloud,
  Rocket,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Partners: React.FC = () => {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      description: 'Integrate with leading technology platforms and tools',
      benefits: [
        'API access and documentation',
        'Joint go-to-market strategies',
        'Technical collaboration',
        'Revenue sharing opportunities'
      ],
      examples: ['Microsoft Azure', 'AWS', 'Google Cloud', 'Salesforce']
    },
    {
      title: 'Solution Partners',
      icon: Building,
      color: 'from-green-600 to-emerald-600',
      description: 'Deliver comprehensive solutions to enterprise clients',
      benefits: [
        'White-label solutions',
        'Training and certification',
        'Marketing support',
        'Dedicated account management'
      ],
      examples: ['Deloitte', 'Accenture', 'PwC', 'KPMG']
    },
    {
      title: 'Channel Partners',
      icon: Users,
      color: 'from-purple-600 to-pink-600',
      description: 'Resell and distribute our services globally',
      benefits: [
        'Competitive pricing',
        'Sales enablement tools',
        'Lead generation support',
        'Performance incentives'
      ],
      examples: ['CDW', 'Insight', 'SHI', 'World Wide Technology']
    },
    {
      title: 'Innovation Partners',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      description: 'Collaborate on cutting-edge research and development',
      benefits: [
        'Joint R&D projects',
        'Intellectual property sharing',
        'Academic partnerships',
        'Innovation grants'
      ],
      examples: ['MIT', 'Stanford', 'Carnegie Mellon', 'UC Berkeley']
    }
  ];

  const partnerBenefits = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Access new markets and customer segments through our global network',
      metric: '40%+'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Share technology risks and compliance requirements with trusted partners',
      metric: '60%+'
    },
    {
      icon: Brain,
      title: 'Innovation Access',
      description: 'Leverage cutting-edge AI and emerging technologies',
      metric: '3x'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expand your presence to new geographic markets',
      metric: '25+'
    }
  ];

  const successStories = [
    {
      company: 'TechCorp Solutions',
      logo: '/images/partners/techcorp-logo.png',
      industry: 'Enterprise Software',
      partnership: 'Technology Integration',
      results: 'Increased customer retention by 35% through AI-powered insights',
      testimonial: 'Zion Tech Group has transformed our customer experience with their AI solutions. The partnership has been a game-changer for our business.',
      author: 'Sarah Johnson, CEO'
    },
    {
      company: 'Global Systems Inc.',
      logo: '/images/partners/globalsys-logo.png',
      industry: 'Financial Services',
      partnership: 'Solution Delivery',
      results: 'Reduced operational costs by 28% with cloud optimization',
      testimonial: 'Working with Zion Tech Group has enabled us to modernize our infrastructure while maintaining security and compliance standards.',
      author: 'Michael Chen, CTO'
    },
    {
      company: 'Innovate Dynamics',
      logo: '/images/partners/innovate-logo.png',
      industry: 'Healthcare Technology',
      partnership: 'R&D Collaboration',
      results: 'Accelerated product development by 6 months',
      testimonial: 'The collaborative R&D partnership with Zion Tech Group has accelerated our innovation pipeline significantly.',
      author: 'Dr. Emily Rodriguez, Head of R&D'
    }
  ];

  const partnershipProcess = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Schedule a meeting to discuss partnership opportunities and alignment',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Partnership Assessment',
      description: 'Evaluate technical compatibility, market fit, and business alignment',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Agreement Development',
      description: 'Negotiate terms, define roles, and establish success metrics',
      duration: '3-4 weeks'
    },
    {
      step: '04',
      title: 'Launch & Execution',
      description: 'Begin partnership activities with ongoing support and optimization',
      duration: 'Ongoing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Handshake className="h-16 w-16 text-blue-600 mr-4" />
              <h1 className="text-5xl font-bold text-gray-900">Partnerships</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Join forces with Zion Tech Group to deliver innovative AI, cloud, and digital transformation solutions. 
              Together, we can create greater value for our customers and drive mutual success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Discuss Partnership
              </Link>
              <a
                href="mailto:partnerships@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partnership Types */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Types</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer multiple partnership models to fit your business needs and strategic objectives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {partnershipTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${type.color} text-white mr-4`}>
                  <type.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{type.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Example Partners:</h4>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((example, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partner Benefits */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of partnering with Zion Tech Group
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-lg bg-blue-100 text-blue-600 mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our partners are achieving remarkable results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={story.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
                  <Building className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{story.company}</h3>
                  <p className="text-sm text-gray-600">{story.industry}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-2">
                  {story.partnership}
                </span>
                <p className="text-gray-900 font-medium">{story.results}</p>
              </div>
              
              <blockquote className="text-gray-600 italic mb-4">
                "{story.testimonial}"
              </blockquote>
              
              <p className="text-sm text-gray-500">— {story.author}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partnership Process */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes it easy to become a partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <span className="text-sm text-blue-600 font-medium">{step.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can work together to create value for your customers and grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Handshake className="h-5 w-5 mr-2" />
              Start Partnership Discussion
            </Link>
            <a
              href="mailto:partnerships@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Send Partnership Inquiry
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p>Our partnership team will respond within 24 hours</p>
            <p>Schedule a call to discuss opportunities in detail</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
