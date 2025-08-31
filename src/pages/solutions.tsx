import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Building, 
  Heart, 
  DollarSign, 
  Cpu, 
  ShoppingCart, 
  Shield, 
  Globe,
  Rocket,
  Brain,
  Cloud,
  Lock,
  Users,
  BarChart3,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  Lightbulb
} from 'lucide-react';

export default function Solutions() {
  const industrySolutions = [
    {
      name: 'Enterprise',
      icon: Building,
      description: 'Large-scale business transformation and digital innovation',
      href: '/solutions/enterprise',
      features: [
        'Digital transformation strategy',
        'Enterprise architecture design',
        'Legacy system modernization',
        'Scalable cloud infrastructure',
        'Data governance & compliance',
        'Change management & training'
      ],
      benefits: [
        'Increased operational efficiency',
        'Reduced IT costs',
        'Improved decision making',
        'Enhanced customer experience',
        'Faster time to market',
        'Better risk management'
      ],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'AI-powered medical solutions and healthcare technology',
      href: '/solutions/healthcare',
      features: [
        'AI diagnostic assistance',
        'Patient data analytics',
        'Telemedicine platforms',
        'Electronic health records',
        'Medical imaging analysis',
        'Healthcare workflow automation'
      ],
      benefits: [
        'Improved patient outcomes',
        'Reduced diagnostic errors',
        'Enhanced patient care',
        'Streamlined operations',
        'Better resource utilization',
        'Compliance with regulations'
      ],
      color: 'from-red-600 to-pink-600'
    },
    {
      name: 'Financial',
      icon: DollarSign,
      description: 'Fintech innovation and banking technology solutions',
      href: '/solutions/financial',
      features: [
        'AI trading platforms',
        'Risk assessment & management',
        'Fraud detection systems',
        'Blockchain solutions',
        'Regulatory compliance',
        'Customer analytics'
      ],
      benefits: [
        'Enhanced security & fraud prevention',
        'Improved risk management',
        'Better customer insights',
        'Regulatory compliance',
        'Operational efficiency',
        'Competitive advantage'
      ],
      color: 'from-green-600 to-emerald-600'
    },
    {
      name: 'Manufacturing',
      icon: Cpu,
      description: 'Smart manufacturing and Industry 4.0 solutions',
      href: '/solutions/manufacturing',
      features: [
        'IoT sensor integration',
        'Predictive maintenance',
        'Quality control automation',
        'Supply chain optimization',
        'Digital twin technology',
        'Smart factory solutions'
      ],
      benefits: [
        'Reduced downtime',
        'Improved product quality',
        'Lower operational costs',
        'Enhanced safety',
        'Better resource planning',
        'Increased productivity'
      ],
      color: 'from-orange-600 to-red-600'
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      description: 'E-commerce and retail technology innovation',
      href: '/solutions/retail',
      features: [
        'Omnichannel platforms',
        'AI-powered recommendations',
        'Inventory management',
        'Customer analytics',
        'Payment processing',
        'Supply chain optimization'
      ],
      benefits: [
        'Increased sales & conversions',
        'Better customer experience',
        'Improved inventory management',
        'Reduced operational costs',
        'Enhanced customer loyalty',
        'Data-driven insights'
      ],
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Government',
      icon: Shield,
      description: 'Public sector digitalization and civic technology',
      href: '/solutions/government',
      features: [
        'Digital government platforms',
        'Cybersecurity solutions',
        'Data analytics & reporting',
        'Citizen engagement tools',
        'Process automation',
        'Compliance management'
      ],
      benefits: [
        'Improved citizen services',
        'Enhanced security',
        'Better resource allocation',
        'Increased transparency',
        'Cost savings',
        'Regulatory compliance'
      ],
      color: 'from-indigo-600 to-blue-600'
    }
  ];

  const technologySolutions = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      description: 'Intelligent automation and predictive analytics',
      features: ['Predictive modeling', 'Natural language processing', 'Computer vision', 'Recommendation engines']
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Scalable infrastructure and deployment automation',
      features: ['Multi-cloud strategy', 'Container orchestration', 'CI/CD pipelines', 'Infrastructure as code']
    },
    {
      name: 'Cybersecurity',
      icon: Lock,
      description: 'Advanced threat protection and security compliance',
      features: ['Zero-trust architecture', 'Threat intelligence', 'Incident response', 'Compliance automation']
    },
    {
      name: 'Data Analytics',
      icon: BarChart3,
      description: 'Business intelligence and data-driven insights',
      features: ['Real-time analytics', 'Data visualization', 'Predictive analytics', 'Data governance']
    }
  ];

  const successMetrics = [
    { metric: '500+', label: 'Projects Completed', description: 'Successfully delivered across industries' },
    { metric: '95%', label: 'Client Satisfaction', description: 'Consistent high-quality delivery' },
    { metric: '40%', label: 'Average Efficiency Gain', description: 'Measured improvement in operations' },
    { metric: '24/7', label: 'Support Available', description: 'Round-the-clock technical assistance' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <SEO 
        title="Industry Solutions - Zion Tech Group"
        description="Transform your industry with our specialized solutions for enterprise, healthcare, financial, manufacturing, retail, and government sectors."
        keywords="industry solutions, enterprise solutions, healthcare technology, fintech, manufacturing, retail technology, government technology"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Industry
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Solutions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Tailored technology solutions designed specifically for your industry. 
              From healthcare to manufacturing, we understand your unique challenges and deliver results.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View Case Studies
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We specialize in understanding your industry's unique challenges and 
              delivering tailored technology solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mr-4`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {solution.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {solution.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to={solution.href}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technology Foundation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our solutions are built on cutting-edge technologies that provide 
              the foundation for your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologySolutions.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {tech.description}
                </p>
                <div className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-gray-500 dark:text-gray-400">
                      • {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our track record speaks for itself. We've helped hundreds of organizations 
              across industries achieve remarkable transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {metric.metric}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {metric.label}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Solution Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful delivery and maximum value for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'We analyze your current state, challenges, and goals to understand your unique needs.',
                icon: Lightbulb
              },
              {
                step: '02',
                title: 'Solution Design',
                description: 'Our experts design a tailored solution that addresses your specific requirements.',
                icon: Target
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'We execute the solution with precision, ensuring minimal disruption to your operations.',
                icon: Rocket
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuous monitoring and optimization to ensure maximum performance and value.',
                icon: TrendingUp
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Transform Your Industry?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how our industry-specific solutions can address your unique 
            challenges and drive measurable results for your organization.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
