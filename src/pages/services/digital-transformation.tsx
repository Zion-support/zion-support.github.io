import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
  Brain, 
  Users, 
  Building, 
  Target, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Code,
  Database,
  Activity,
  BarChart3,
  Globe,
  Heart,
  DollarSign,
  FileText,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Lock,
  Eye,
  Cloud,
  Cpu,
  Network,
  Shield,
  Atom
} from 'lucide-react';

export default function DigitalTransformationPage() {
  const transformationServices = [
    {
      category: 'Strategy & Consulting',
      services: [
        {
          name: 'Digital Strategy Development',
          description: 'Comprehensive digital transformation roadmap and strategy',
          icon: Target,
          features: ['Current State Assessment', 'Future State Vision', 'Implementation Roadmap', 'Change Management Plan'],
          href: '/services/digital-strategy'
        },
        {
          name: 'Technology Assessment',
          description: 'Evaluate existing technology stack and identify opportunities',
          icon: Cpu,
          features: ['Technology Audit', 'Gap Analysis', 'Modernization Recommendations', 'ROI Analysis'],
          href: '/services/technology-assessment'
        },
        {
          name: 'Change Management',
          description: 'Guide organizations through digital transformation change',
          icon: Users,
          features: ['Stakeholder Engagement', 'Training Programs', 'Communication Strategy', 'Success Metrics'],
          href: '/services/change-management'
        },
        {
          name: 'Process Optimization',
          description: 'Streamline and optimize business processes for digital efficiency',
          icon: Activity,
          features: ['Process Mapping', 'Automation Opportunities', 'Workflow Design', 'Performance Metrics'],
          href: '/services/process-optimization'
        }
      ]
    },
    {
      category: 'Technology Implementation',
      services: [
        {
          name: 'Legacy System Modernization',
          description: 'Transform outdated systems into modern, scalable solutions',
          icon: Code,
          features: ['System Analysis', 'Migration Planning', 'Data Migration', 'Testing & Validation'],
          href: '/services/legacy-modernization'
        },
        {
          name: 'Cloud Migration',
          description: 'Migrate applications and infrastructure to the cloud',
          icon: Cloud,
          features: ['Cloud Strategy', 'Migration Planning', 'Data Migration', 'Performance Optimization'],
          href: '/services/cloud-migration'
        },
        {
          name: 'API Development',
          description: 'Build modern APIs for system integration and data exchange',
          icon: Network,
          features: ['API Design', 'Development', 'Testing', 'Documentation'],
          href: '/services/api-development'
        },
        {
          name: 'Data Platform Implementation',
          description: 'Implement modern data platforms for analytics and insights',
          icon: Database,
          features: ['Data Architecture', 'ETL Development', 'Analytics Platform', 'Data Governance'],
          href: '/services/data-platform'
        }
      ]
    },
    {
      category: 'Digital Solutions',
      services: [
        {
          name: 'Customer Experience Transformation',
          description: 'Transform customer interactions with digital solutions',
          icon: Heart,
          features: ['Customer Journey Mapping', 'Digital Touchpoints', 'Personalization', 'Analytics'],
          href: '/services/customer-experience'
        },
        {
          name: 'Employee Experience Enhancement',
          description: 'Improve employee productivity with digital tools',
          icon: Users,
          features: ['Digital Workplace', 'Collaboration Tools', 'Training Platforms', 'Performance Analytics'],
          href: '/services/employee-experience'
        },
        {
          name: 'Business Intelligence',
          description: 'Implement advanced analytics and reporting solutions',
          icon: BarChart3,
          features: ['Data Visualization', 'Real-time Dashboards', 'Predictive Analytics', 'KPI Tracking'],
          href: '/services/business-intelligence'
        },
        {
          name: 'Automation Solutions',
          description: 'Implement RPA and intelligent automation',
          icon: Zap,
          features: ['Process Automation', 'Workflow Automation', 'AI Integration', 'Monitoring'],
          href: '/services/automation-solutions'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual processes'
    },
    {
      icon: TrendingUp,
      title: 'Better Customer Experience',
      description: 'Deliver personalized and seamless customer interactions'
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Lower operational costs through automation and optimization'
    },
    {
      icon: Users,
      title: 'Employee Satisfaction',
      description: 'Improve productivity and job satisfaction with modern tools'
    }
  ];

  const stats = [
    { number: '40%', label: 'Cost Reduction' },
    { number: '60%', label: 'Efficiency Gain' },
    { number: '80%', label: 'Customer Satisfaction' },
    { number: '3x', label: 'Faster Delivery' }
  ];

  const transformationPhases = [
    {
      phase: 'Assessment',
      description: 'Evaluate current state and identify transformation opportunities',
      icon: Eye,
      activities: ['Technology Audit', 'Process Analysis', 'Gap Identification', 'Stakeholder Interviews']
    },
    {
      phase: 'Strategy',
      description: 'Develop comprehensive transformation roadmap and strategy',
      icon: Target,
      activities: ['Vision Development', 'Roadmap Creation', 'Resource Planning', 'Risk Assessment']
    },
    {
      phase: 'Implementation',
      description: 'Execute transformation initiatives with agile methodology',
      icon: Code,
      activities: ['Pilot Programs', 'Iterative Development', 'Testing & Validation', 'Performance Monitoring']
    },
    {
      phase: 'Optimization',
      description: 'Continuously improve and optimize digital solutions',
      icon: TrendingUp,
      activities: ['Performance Analysis', 'User Feedback', 'Continuous Improvement', 'Scaling']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Digital Transformation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business for the digital age with comprehensive solutions 
              that drive innovation, efficiency, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                Start Transformation
              </button>
              <button className="border border-green-500 text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200">
                Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Digital Transformation Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive digital transformation services help organizations 
              modernize, innovate, and thrive in the digital economy.
            </p>
          </motion.div>

          <div className="space-y-16">
            {transformationServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-8 text-center text-green-400">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold">{service.name}</h4>
                      </div>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-green-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Phases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Transformation Journey</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our proven methodology guides organizations through successful 
              digital transformation with clear phases and measurable outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <phase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">{phase.phase}</h3>
                <p className="text-gray-400 mb-4">{phase.description}</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {phase.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose Digital Transformation?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Digital transformation delivers measurable benefits that position 
              organizations for long-term success in the digital economy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the digital revolution and position your organization for 
              success in the digital economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                Start Transformation
              </button>
              <button className="border border-green-500 text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}