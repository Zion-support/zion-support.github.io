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
  HardDrive
} from 'lucide-react';

const itServices = [
  {
    title: "Cloud Migration & Management",
    description: "Seamless migration to cloud platforms with ongoing management and optimization",
    icon: Cloud,
    features: [
      "AWS/Azure/GCP Migration",
      "Cloud Architecture Design",
      "Cost Optimization",
      "Security Implementation",
      "Disaster Recovery",
      "24/7 Monitoring"
    ],
    color: "from-blue-500 to-cyan-500",
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability",
      "Enhanced security",
      "Better performance"
    ]
  },
  {
    title: "Cybersecurity Solutions",
    description: "Comprehensive security measures to protect your business from cyber threats",
    icon: Shield,
    features: [
      "Security Assessment",
      "Firewall Configuration",
      "Intrusion Detection",
      "Vulnerability Scanning",
      "Security Training",
      "Incident Response"
    ],
    color: "from-red-500 to-pink-500",
    benefits: [
      "Protection from cyber attacks",
      "Compliance with regulations",
      "Reduced security risks",
      "Peace of mind"
    ]
  },
  {
    title: "Network Infrastructure",
    description: "Design, implementation, and management of robust network infrastructure",
    icon: Network,
    features: [
      "Network Design & Planning",
      "Router & Switch Configuration",
      "Wireless Solutions",
      "VPN Implementation",
      "Network Monitoring",
      "Performance Optimization"
    ],
    color: "from-green-500 to-emerald-500",
    benefits: [
      "Improved connectivity",
      "Better performance",
      "Enhanced security",
      "Reduced downtime"
    ]
  },
  {
    title: "IT Support & Helpdesk",
    description: "24/7 technical support and helpdesk services for your organization",
    icon: Users,
    features: [
      "24/7 Technical Support",
      "Remote Assistance",
      "Hardware Maintenance",
      "Software Installation",
      "User Training",
      "Issue Resolution"
    ],
    color: "from-purple-500 to-indigo-500",
    benefits: [
      "Reduced downtime",
      "Faster issue resolution",
      "Improved productivity",
      "Cost-effective support"
    ]
  },
  {
    title: "Database Management",
    description: "Expert database design, optimization, and management services",
    icon: Database,
    features: [
      "Database Design",
      "Performance Tuning",
      "Backup & Recovery",
      "Data Migration",
      "Security Implementation",
      "Monitoring & Maintenance"
    ],
    color: "from-orange-500 to-yellow-500",
    benefits: [
      "Improved data performance",
      "Enhanced data security",
      "Better data integrity",
      "Reduced maintenance costs"
    ]
  },
  {
    title: "System Integration",
    description: "Seamless integration of disparate systems and applications",
    icon: Settings,
    features: [
      "API Development",
      "System Integration",
      "Data Synchronization",
      "Workflow Automation",
      "Legacy System Migration",
      "Custom Solutions"
    ],
    color: "from-indigo-500 to-purple-500",
    benefits: [
      "Streamlined operations",
      "Improved efficiency",
      "Better data flow",
      "Reduced manual work"
    ]
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

                  <Link
                    href="/contact"
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105`}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
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