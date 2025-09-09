import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cloud as CloudIcon, 
  Server, 
  Database, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
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
  Plane
} from 'lucide-react';

const Cloud = () => {
  const cloudServices = [
    {
      title: 'Cloud Migration & Strategy',
      description: 'Seamless migration to cloud platforms with strategic planning and execution',
      icon: CloudIcon,
      features: [
        'Cloud Readiness Assessment',
        'Migration Strategy Planning',
        'Data Migration Services',
        'Application Modernization',
        'Cost Optimization'
      ],
      applications: ['Enterprise', 'Startups', 'Healthcare', 'Finance'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated CI/CD pipelines',
      icon: Zap,
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Automated Testing',
        'Deployment Automation',
        'Monitoring & Alerting'
      ],
      applications: ['Software Development', 'Web Applications', 'Mobile Apps', 'Enterprise Systems'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud infrastructure solutions',
      icon: Server,
      features: [
        'Virtual Machines',
        'Container Orchestration',
        'Load Balancing',
        'Auto-scaling',
        'High Availability'
      ],
      applications: ['Web Applications', 'APIs', 'Microservices', 'Data Processing'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Data & Analytics',
      description: 'Cloud-based data storage, processing, and analytics solutions',
      icon: Database,
      features: [
        'Data Warehousing',
        'Big Data Processing',
        'Real-time Analytics',
        'Machine Learning',
        'Business Intelligence'
      ],
      applications: ['Business Analytics', 'Customer Insights', 'IoT Data', 'Financial Analysis'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const cloudPlatforms = [
    {
      name: 'AWS',
      icon: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      services: [
        'EC2 & Lambda',
        'S3 & RDS',
        'CloudFormation',
        'CloudWatch',
        'Route 53'
      ],
      benefits: [
        'Market leader',
        'Extensive service catalog',
        'Global infrastructure',
        'Enterprise features'
      ]
    },
    {
      name: 'Microsoft Azure',
      icon: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      services: [
        'Virtual Machines',
        'Azure SQL',
        'Azure DevOps',
        'Application Insights',
        'Azure Functions'
      ],
      benefits: [
        'Enterprise integration',
        'Hybrid cloud support',
        'Windows ecosystem',
        'Security compliance'
      ]
    },
    {
      name: 'Google Cloud',
      icon: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      services: [
        'Compute Engine',
        'Cloud SQL',
        'Kubernetes Engine',
        'BigQuery',
        'Cloud Functions'
      ],
      benefits: [
        'AI/ML capabilities',
        'Data analytics',
        'Open source friendly',
        'Cost optimization'
      ]
    },
    {
      name: 'Multi-Cloud',
      icon: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      services: [
        'Cross-platform deployment',
        'Vendor optimization',
        'Risk mitigation',
        'Cost management',
        'Unified monitoring'
      ],
      benefits: [
        'Vendor independence',
        'Best-of-breed services',
        'Risk distribution',
        'Cost optimization'
      ]
    }
  ];

  const industrySolutions = [
    {
      industry: 'Healthcare',
      icon: Heart,
      solutions: [
        'HIPAA-compliant cloud storage',
        'Medical imaging processing',
        'Patient data analytics',
        'Telemedicine platforms',
        'Clinical trial management'
      ],
      benefits: [
        'Regulatory compliance',
        'Data security',
        'Scalable infrastructure',
        'Cost reduction'
      ]
    },
    {
      industry: 'Finance',
      icon: DollarSign,
      solutions: [
        'Secure financial data storage',
        'Real-time trading platforms',
        'Risk analytics',
        'Compliance reporting',
        'Fraud detection systems'
      ],
      benefits: [
        'Security compliance',
        'High performance',
        'Real-time processing',
        'Audit trails'
      ]
    },
    {
      industry: 'Manufacturing',
      icon: Factory,
      solutions: [
        'IoT data processing',
        'Predictive maintenance',
        'Supply chain optimization',
        'Quality control systems',
        'Production analytics'
      ],
      benefits: [
        'Operational efficiency',
        'Predictive insights',
        'Cost optimization',
        'Quality improvement'
      ]
    },
    {
      industry: 'Retail',
      icon: ShoppingCart,
      solutions: [
        'E-commerce platforms',
        'Customer analytics',
        'Inventory management',
        'Omnichannel solutions',
        'Personalization engines'
      ],
      benefits: [
        'Customer experience',
        'Operational efficiency',
        'Data-driven insights',
        'Scalable growth'
      ]
    }
  ];

  const cloudProcess = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Evaluate current infrastructure and plan cloud migration strategy',
      icon: Lightbulb,
      details: [
        'Infrastructure audit',
        'Cloud readiness assessment',
        'Migration strategy',
        'Cost analysis'
      ]
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Design scalable and secure cloud architecture',
      icon: Code,
      details: [
        'Cloud architecture design',
        'Security planning',
        'Performance optimization',
        'Scalability planning'
      ]
    },
    {
      step: '03',
      title: 'Migration & Setup',
      description: 'Execute migration and establish cloud infrastructure',
      icon: Rocket,
      details: [
        'Data migration',
        'Application deployment',
        'Infrastructure setup',
        'Testing & validation'
      ]
    },
    {
      step: '04',
      title: 'DevOps Implementation',
      description: 'Implement CI/CD pipelines and automation',
      icon: Zap,
      details: [
        'CI/CD setup',
        'Automation workflows',
        'Monitoring setup',
        'Deployment automation'
      ]
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Continuous optimization and performance tuning',
      icon: TrendingUp,
      details: [
        'Performance monitoring',
        'Cost optimization',
        'Security updates',
        'Continuous improvement'
      ]
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance services',
      icon: Users,
      details: [
        '24/7 monitoring',
        'Technical support',
        'Regular updates',
        'Performance tuning'
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'Healthcare Cloud Migration',
      company: 'Regional Medical Center',
      challenge: 'Migrate legacy systems to cloud while maintaining HIPAA compliance',
      solution: 'Implemented secure cloud infrastructure with automated compliance monitoring',
      results: [
        '99.9% uptime achieved',
        '40% cost reduction',
        '100% HIPAA compliance',
        'Improved patient care delivery'
      ],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'E-commerce Platform Scaling',
      company: 'Online Retailer',
      challenge: 'Handle 10x traffic increase during peak seasons',
      solution: 'Implemented auto-scaling cloud infrastructure with CDN optimization',
      results: [
        '10x traffic handling capacity',
        '99.99% availability',
        '50% faster page loads',
        'Reduced infrastructure costs'
      ],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Financial Data Analytics',
      company: 'Investment Firm',
      challenge: 'Process large volumes of financial data in real-time',
      solution: 'Built cloud-native data processing pipeline with real-time analytics',
      results: [
        'Real-time data processing',
        '90% faster insights',
        'Scalable infrastructure',
        'Enhanced decision making'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
            Cloud & DevOps Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
          >
            Transform your business with scalable cloud infrastructure and streamlined DevOps practices. 
            We help organizations leverage the power of cloud computing to drive innovation and growth.
          </motion.p>
        </div>
      </section>

      {/* Cloud Services Grid */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Our Cloud Services
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (
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

      {/* Cloud Platforms */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Cloud Platform Expertise
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-r from-zion-slate-darker to-zion-slate-dark rounded-2xl border border-zion-slate-light/20 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center">
                    <CloudIcon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                </div>
                
                {/* Services */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Key Services</h4>
                  <ul className="space-y-2">
                    {platform.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Benefits */}
                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {platform.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
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
            Industry-Specific Cloud Solutions
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
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Cloud Solutions</h4>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                        <CloudIcon className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
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

      {/* Cloud Process */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Our Cloud Implementation Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudProcess.map((step, index) => (
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
            Cloud Success Stories
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
              Ready to Scale with Cloud?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your business with cloud-native solutions and DevOps practices. 
              Our experts are ready to help you build scalable, secure, and efficient cloud infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue-dark hover:bg-zion-slate-light font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Cloud Consultation
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

export default Cloud;