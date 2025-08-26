import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Lightbulb,
  Rocket,
  Code,
  BarChart3,
  Network,
  Globe,
  Lock,
  Shield,
  Cpu,
  HardDrive,
  Wifi,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Building,
  Factory,
  Heart,
  DollarSign,
  ShoppingCart,
  Car,
  Plane,
  Brain,
  Eye,
  Cog,
  Database,
  Cloud,
  Server
} from 'lucide-react';

const DigitalTransformation = () => {
  const transformationServices = [
    {
      title: 'Digital Strategy & Consulting',
      description: 'Comprehensive digital transformation strategy and roadmap development',
      icon: Target,
      features: [
        'Digital Maturity Assessment',
        'Transformation Roadmap',
        'Change Management',
        'ROI Analysis',
        'Stakeholder Alignment'
      ],
      applications: ['Enterprise', 'Manufacturing', 'Healthcare', 'Finance'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation and workflow optimization',
      icon: Cog,
      features: [
        'RPA Implementation',
        'Workflow Automation',
        'Business Process Optimization',
        'Integration Services',
        'Performance Monitoring'
      ],
      applications: ['Operations', 'Customer Service', 'Finance', 'HR'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Data & Analytics',
      description: 'Transform data into actionable insights for better decision making',
      icon: BarChart3,
      features: [
        'Data Strategy',
        'Business Intelligence',
        'Predictive Analytics',
        'Data Governance',
        'Real-time Dashboards'
      ],
      applications: ['Business Intelligence', 'Customer Analytics', 'Operations', 'Finance'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Customer Experience',
      description: 'Create seamless digital experiences across all customer touchpoints',
      icon: Users,
      features: [
        'Customer Journey Mapping',
        'Omnichannel Solutions',
        'Personalization',
        'User Experience Design',
        'Customer Analytics'
      ],
      applications: ['E-commerce', 'Banking', 'Healthcare', 'Retail'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const transformationAreas = [
    {
      area: 'Business Operations',
      icon: Cog,
      solutions: [
        'Process digitization',
        'Workflow automation',
        'Resource optimization',
        'Performance monitoring',
        'Continuous improvement'
      ],
      benefits: [
        'Increased efficiency',
        'Cost reduction',
        'Better resource utilization',
        'Improved quality'
      ]
    },
    {
      area: 'Customer Engagement',
      icon: Users,
      solutions: [
        'Digital channels',
        'Personalized experiences',
        'Omnichannel integration',
        'Customer analytics',
        'Feedback systems'
      ],
      benefits: [
        'Enhanced satisfaction',
        'Increased loyalty',
        'Better retention',
        'Higher conversion rates'
      ]
    },
    {
      area: 'Data & Intelligence',
      icon: Brain,
      solutions: [
        'Data strategy',
        'Analytics platforms',
        'Business intelligence',
        'Predictive modeling',
        'Real-time insights'
      ],
      benefits: [
        'Data-driven decisions',
        'Predictive capabilities',
        'Operational insights',
        'Competitive advantage'
      ]
    },
    {
      area: 'Technology Infrastructure',
      icon: Server,
      solutions: [
        'Cloud migration',
        'Modern architecture',
        'Integration services',
        'Security enhancement',
        'Scalability planning'
      ],
      benefits: [
        'Improved performance',
        'Enhanced security',
        'Better scalability',
        'Reduced maintenance'
      ]
    }
  ];

  const industrySolutions = [
    {
      industry: 'Manufacturing',
      icon: Factory,
      solutions: [
        'Smart factory implementation',
        'IoT integration',
        'Predictive maintenance',
        'Supply chain optimization',
        'Quality control automation'
      ],
      benefits: [
        'Increased productivity',
        'Reduced downtime',
        'Better quality',
        'Cost optimization'
      ]
    },
    {
      industry: 'Healthcare',
      icon: Heart,
      solutions: [
        'Electronic health records',
        'Telemedicine platforms',
        'Patient engagement',
        'Clinical analytics',
        'Operational efficiency'
      ],
      benefits: [
        'Better patient care',
        'Improved outcomes',
        'Operational efficiency',
        'Cost reduction'
      ]
    },
    {
      industry: 'Financial Services',
      icon: DollarSign,
      solutions: [
        'Digital banking',
        'Mobile applications',
        'Risk analytics',
        'Compliance automation',
        'Customer insights'
      ],
      benefits: [
        'Enhanced customer experience',
        'Operational efficiency',
        'Risk management',
        'Regulatory compliance'
      ]
    },
    {
      industry: 'Retail',
      icon: ShoppingCart,
      solutions: [
        'E-commerce platforms',
        'Omnichannel retail',
        'Inventory management',
        'Customer analytics',
        'Supply chain optimization'
      ],
      benefits: [
        'Increased sales',
        'Better customer experience',
        'Operational efficiency',
        'Market expansion'
      ]
    }
  ];

  const transformationProcess = [
    {
      step: '01',
      title: 'Assessment & Strategy',
      description: 'Evaluate current state and develop transformation strategy',
      icon: Eye,
      details: [
        'Digital maturity assessment',
        'Gap analysis',
        'Strategy development',
        'ROI planning'
      ]
    },
    {
      step: '02',
      title: 'Planning & Design',
      description: 'Detailed planning and solution design',
      icon: Target,
      details: [
        'Solution architecture',
        'Implementation planning',
        'Change management strategy',
        'Resource planning'
      ]
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute transformation initiatives',
      icon: Rocket,
      details: [
        'Technology deployment',
        'Process changes',
        'Training programs',
        'Testing & validation'
      ]
    },
    {
      step: '04',
      title: 'Change Management',
      description: 'Manage organizational change and adoption',
      icon: Users,
      details: [
        'Stakeholder engagement',
        'Training & communication',
        'Resistance management',
        'Adoption monitoring'
      ]
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Continuous improvement and optimization',
      icon: TrendingUp,
      details: [
        'Performance monitoring',
        'Feedback collection',
        'Process refinement',
        'Continuous improvement'
      ]
    },
    {
      step: '06',
      title: 'Scale & Expand',
      description: 'Scale successful initiatives across organization',
      icon: Globe,
      details: [
        'Best practice sharing',
        'Cross-functional expansion',
        'Technology scaling',
        'Knowledge transfer'
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'Manufacturing Digital Transformation',
      company: 'Global Manufacturing Corp',
      challenge: 'Modernize legacy manufacturing processes and improve operational efficiency',
      solution: 'Implemented smart factory solutions with IoT integration and predictive analytics',
      results: [
        '30% increase in productivity',
        '40% reduction in downtime',
        '25% improvement in quality',
        '20% cost reduction'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Healthcare Digital Modernization',
      company: 'Regional Hospital Network',
      challenge: 'Transform patient care delivery and operational efficiency',
      solution: 'Implemented comprehensive digital health platform with patient engagement tools',
      results: [
        '50% improvement in patient satisfaction',
        '35% reduction in wait times',
        '40% increase in operational efficiency',
        'Enhanced care coordination'
      ],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Retail Omnichannel Transformation',
      company: 'National Retail Chain',
      challenge: 'Create seamless customer experience across online and offline channels',
      solution: 'Built integrated omnichannel platform with unified customer data',
      results: [
        '60% increase in online sales',
        '45% improvement in customer retention',
        '30% reduction in operational costs',
        'Enhanced customer experience'
      ],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent"
          >
            Digital Transformation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
          >
            Transform your organization for the digital age with comprehensive digital transformation solutions. 
            We help businesses reimagine their operations, enhance customer experiences, and drive sustainable growth.
          </motion.p>
        </div>
      </section>

      {/* Transformation Services Grid */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Our Transformation Services
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {transformationServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 overflow-hidden group"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-zion-cyan" />
                    </div>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Areas */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Key Transformation Areas
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationAreas.map((area, index) => (
              <motion.div
                key={area.area}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-r from-zion-slate-darker to-zion-slate-dark rounded-2xl border border-zion-slate-light/20 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center">
                    <area.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{area.area}</h3>
                </div>
                
                {/* Solutions */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Transformation Solutions</h4>
                  <ul className="space-y-2">
                    {area.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                        <Zap className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Benefits */}
                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {area.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Industry-Specific Solutions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center">
                    <industry.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{industry.industry}</h3>
                </div>
                
                {/* Solutions */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Digital Solutions</h4>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                        <Target className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Benefits */}
                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Process */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Our Transformation Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformationProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 p-6 text-center group hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                
                <div className="text-4xl font-bold text-zion-cyan mb-4">{step.step}</div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-2 text-sm text-zion-slate-light">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Transformation Success Stories
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 overflow-hidden group hover:border-zion-cyan/50 transition-all duration-300"
              >
                {/* Case Study Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full border border-zion-cyan/30">
                      Case Study
                    </span>
                  </div>
                </div>
                
                {/* Case Study Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4">
                    <strong>Client:</strong> {study.company}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-zion-slate-light text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan-dark to-zion-blue-dark p-12 rounded-2xl"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Don't get left behind in the digital age. Our transformation experts are ready to help you 
              reimagine your business and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue-dark hover:bg-zion-slate-light font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Transformation
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;
