import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Network, 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Globe, 
  Award,
  Lock,
  Smartphone,
  BarChart3,
  Cpu,
  Settings,
  Monitor,
  Wifi,
  HardDrive,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const itServices = [
  {
    title: "Cloud Migration & Management Platform",
    description: "Comprehensive cloud migration and management solution with automated optimization",
    icon: Cloud,
    features: [
      "Automated Cloud Migration",
      "Multi-Cloud Management",
      "Cost Optimization AI",
      "Security Compliance",
      "Disaster Recovery",
      "Real-time Monitoring"
    ],
    color: "from-blue-500 to-cyan-500",
    benefits: [
      "50% cost reduction",
      "99.9% uptime guarantee",
      "Enhanced security",
      "Scalable infrastructure"
    ],
    pricing: "Starting at $299/month",
    contact: "kleber@ziontechgroup.com"
  },
  {
    title: "AI-Powered Cybersecurity Suite",
    description: "Advanced AI-driven security platform with threat detection and automated response",
    icon: Shield,
    features: [
      "AI Threat Detection",
      "Behavioral Analysis",
      "Automated Incident Response",
      "Vulnerability Assessment",
      "Security Training Platform",
      "Compliance Monitoring"
    ],
    color: "from-red-500 to-pink-500",
    benefits: [
      "99.7% threat detection rate",
      "Automated response in <5 minutes",
      "Zero false positives",
      "Compliance automation"
    ],
    pricing: "Starting at $399/month",
    contact: "kleber@ziontechgroup.com"
  },
  {
    title: "Smart Network Management System",
    description: "Intelligent network infrastructure with AI-powered optimization and monitoring",
    icon: Network,
    features: [
      "AI Network Optimization",
      "Predictive Maintenance",
      "Automated Configuration",
      "Performance Analytics",
      "Security Monitoring",
      "Bandwidth Management"
    ],
    color: "from-green-500 to-emerald-500",
    benefits: [
      "40% performance improvement",
      "Proactive issue resolution",
      "Reduced downtime",
      "Cost optimization"
    ],
    pricing: "Starting at $249/month",
    contact: "kleber@ziontechgroup.com"
  },
  {
    title: "Intelligent IT Support Platform",
    description: "AI-powered helpdesk with automated ticket resolution and predictive support",
    icon: Users,
    features: [
      "AI Ticket Resolution",
      "Predictive Maintenance",
      "Knowledge Base AI",
      "Remote Support Tools",
      "User Behavior Analytics",
      "Automated Workflows"
    ],
    color: "from-purple-500 to-indigo-500",
    benefits: [
      "80% faster resolution",
      "24/7 AI support",
      "Proactive maintenance",
      "User satisfaction tracking"
    ],
    pricing: "Starting at $199/month",
    contact: "kleber@ziontechgroup.com"
  },
  {
    title: "Database Intelligence Platform",
    description: "AI-powered database management with automated optimization and monitoring",
    icon: Database,
    features: [
      "AI Performance Tuning",
      "Automated Backups",
      "Query Optimization",
      "Security Monitoring",
      "Capacity Planning",
      "Anomaly Detection"
    ],
    color: "from-orange-500 to-yellow-500",
    benefits: [
      "60% performance boost",
      "Automated optimization",
      "Zero data loss",
      "Predictive scaling"
    ],
    pricing: "Starting at $279/month",
    contact: "kleber@ziontechgroup.com"
  },
  {
    title: "Smart Integration Hub",
    description: "AI-driven system integration platform with automated workflows and data synchronization",
    icon: Settings,
    features: [
      "AI Integration Mapping",
      "Automated Data Sync",
      "Workflow Automation",
      "API Management",
      "Legacy System Bridge",
      "Real-time Monitoring"
    ],
    color: "from-indigo-500 to-purple-500",
    benefits: [
      "90% faster integration",
      "Automated workflows",
      "Real-time synchronization",
      "Reduced manual errors"
    ],
    pricing: "Starting at $329/month",
    contact: "kleber@ziontechgroup.com"
  },
  {
    title: "IT Asset Management Suite",
    description: "Comprehensive IT asset tracking and management with AI-powered insights",
    icon: Monitor,
    features: [
      "Asset Discovery & Tracking",
      "License Management",
      "Depreciation Tracking",
      "Compliance Monitoring",
      "Cost Optimization",
      "Predictive Analytics"
    ],
    color: "from-cyan-500 to-blue-500",
    benefits: [
      "Complete asset visibility",
      "Cost reduction",
      "Compliance automation",
      "Predictive insights"
    ],
    pricing: "Starting at $149/month",
    contact: "kleber@ziontechgroup.com"
  },
  {
    title: "DevOps Automation Platform",
    description: "AI-powered DevOps platform with automated CI/CD and infrastructure management",
    icon: Zap,
    features: [
      "Automated CI/CD Pipelines",
      "Infrastructure as Code",
      "Deployment Automation",
      "Performance Monitoring",
      "Security Scanning",
      "Rollback Management"
    ],
    color: "from-yellow-500 to-orange-500",
    benefits: [
      "10x faster deployments",
      "Zero-downtime updates",
      "Automated testing",
      "Reduced human errors"
    ],
    pricing: "Starting at $379/month",
    contact: "kleber@ziontechgroup.com"
  },
  {
    title: "IT Compliance & Governance Suite",
    description: "Automated compliance management with AI-powered monitoring and reporting",
    icon: Lock,
    features: [
      "Compliance Monitoring",
      "Automated Reporting",
      "Policy Management",
      "Risk Assessment",
      "Audit Trail",
      "Regulatory Updates"
    ],
    color: "from-pink-500 to-rose-500",
    benefits: [
      "100% compliance coverage",
      "Automated reporting",
      "Risk reduction",
      "Audit readiness"
    ],
    pricing: "Starting at $229/month",
    contact: "kleber@ziontechgroup.com"
  },
  {
    title: "IT Performance Analytics Dashboard",
    description: "Real-time IT performance monitoring with AI-powered insights and recommendations",
    icon: BarChart3,
    features: [
      "Real-time Monitoring",
      "Performance Analytics",
      "Predictive Insights",
      "Custom Dashboards",
      "Alert Management",
      "Trend Analysis"
    ],
    color: "from-emerald-500 to-teal-500",
    benefits: [
      "Real-time visibility",
      "Predictive insights",
      "Proactive optimization",
      "Custom reporting"
    ],
    pricing: "Starting at $179/month",
    contact: "kleber@ziontechgroup.com"
  }
];

const industries = [
  {
    name: "Healthcare",
    icon: Users,
    description: "HIPAA-compliant IT solutions for healthcare organizations",
    solutions: ["EMR Integration", "Telemedicine Platforms", "Data Security", "Compliance Management"]
  },
  {
    name: "Finance",
    icon: BarChart3,
    description: "Secure IT infrastructure for financial services",
    solutions: ["PCI Compliance", "Fraud Detection", "Risk Management", "Regulatory Reporting"]
  },
  {
    name: "Manufacturing",
    icon: Cpu,
    description: "Industrial IT solutions for manufacturing operations",
    solutions: ["IoT Integration", "Supply Chain Management", "Quality Control", "Production Monitoring"]
  },
  {
    name: "Education",
    icon: Globe,
    description: "Technology solutions for educational institutions",
    solutions: ["Learning Management Systems", "Student Information Systems", "Campus Networks", "Digital Classrooms"]
  }
];

const technologies = [
  {
    category: "Cloud Platforms",
    items: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform", "IBM Cloud", "Oracle Cloud"]
  },
  {
    category: "Operating Systems",
    items: ["Windows Server", "Linux (Ubuntu, CentOS, RHEL)", "macOS", "VMware vSphere", "Hyper-V"]
  },
  {
    category: "Databases",
    items: ["Microsoft SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Oracle Database"]
  },
  {
    category: "Security Tools",
    items: ["Firewalls (Cisco, Fortinet)", "Antivirus Solutions", "SIEM Systems", "VPN Solutions", "Encryption Tools"]
  },
  {
    category: "Monitoring & Management",
    items: ["Nagios", "Zabbix", "SolarWinds", "PRTG", "Splunk"]
  },
  {
    category: "Virtualization",
    items: ["VMware vSphere", "Microsoft Hyper-V", "Citrix XenServer", "Docker", "Kubernetes"]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Assessment & Planning",
    description: "We analyze your current IT infrastructure and identify areas for improvement and optimization."
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Create a comprehensive IT strategy aligned with your business goals and requirements."
  },
  {
    step: "03",
    title: "Implementation",
    description: "Deploy solutions with minimal disruption to your business operations."
  },
  {
    step: "04",
    title: "Testing & Validation",
    description: "Thorough testing ensures all systems work correctly and meet performance standards."
  },
  {
    step: "05",
    title: "Training & Documentation",
    description: "Provide training to your team and comprehensive documentation for ongoing management."
  },
  {
    step: "06",
    title: "Ongoing Support",
    description: "Continuous monitoring, maintenance, and support to ensure optimal performance."
  }
];

const benefits = [
  {
    icon: Zap,
    title: "Improved Efficiency",
    description: "Streamlined IT operations and automated processes boost productivity by up to 35%"
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Comprehensive security measures protect your business from cyber threats and data breaches"
  },
  {
    icon: BarChart3,
    title: "Cost Optimization",
    description: "Reduce IT costs through efficient resource utilization and strategic technology investments"
  },
  {
    icon: Users,
    title: "Better Support",
    description: "24/7 technical support ensures minimal downtime and faster issue resolution"
  }
];

export default function ITServicesPage() {
  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud migration, cybersecurity, network infrastructure, and system integration. Expert IT consulting and support."
      keywords="IT services, cloud migration, cybersecurity, network infrastructure, IT support, system integration"
    >

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive information technology solutions to modernize your infrastructure, 
              enhance security, and drive business growth through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get IT Consultation
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our IT Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              End-to-end IT services designed to optimize your technology infrastructure, 
              enhance security, and support your business objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Pricing:</span>
                      <span className="text-lg font-bold text-gray-900">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Contact:</span>
                      <a 
                        href={`mailto:${service.contact}`}
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {service.contact}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href="/contact"
                      className={`flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105`}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href={`mailto:${service.contact}?subject=Inquiry about ${service.title}`}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-semibold"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Our IT solutions are tailored to meet the specific requirements and compliance 
              standards of various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {industry.description}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              We leverage cutting-edge technologies and industry-leading tools to deliver 
              robust and scalable IT solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Our IT solutions deliver measurable results and provide a solid foundation for your business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our IT Service Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              A systematic approach to IT service delivery that ensures successful implementation and ongoing support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Started Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Ready to modernize your IT infrastructure? Contact our experts for a personalized consultation and custom solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our IT experts</p>
              <a 
                href="tel:+13024640950" 
                className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
              >
                +1 (302) 464-0950
              </a>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your IT requirements</p>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-green-600 hover:text-green-800 font-semibold text-lg"
              >
                kleber@ziontechgroup.com
              </a>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Our headquarters location</p>
              <p className="text-purple-600 font-semibold text-sm">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your IT needs and create a comprehensive solution that supports your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Get IT Consultation
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}