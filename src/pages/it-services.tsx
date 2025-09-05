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
  Brain,
  Phone,
  Mail,
  MapPin
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
      "Improved productivity",
      "Expert technical assistance",
      "Cost-effective support"
    ]
  },
  {
    title: "DevOps & CI/CD",
    description: "Modern development practices and automated deployment pipelines",
    icon: Zap,
    features: [
      "CI/CD Pipeline Setup",
      "Container Orchestration",
      "Infrastructure as Code",
      "Automated Testing",
      "Deployment Automation",
      "Monitoring & Logging"
    ],
    color: "from-orange-500 to-red-500",
    benefits: [
      "Faster deployments",
      "Reduced errors",
      "Improved collaboration",
      "Better scalability"
    ]
  },
  {
    title: "Data Center Solutions",
    description: "Enterprise-grade data center design, implementation, and management",
    icon: Server,
    features: [
      "Data Center Design",
      "Server Virtualization",
      "Storage Solutions",
      "Backup & Recovery",
      "Power & Cooling",
      "Physical Security"
    ],
    color: "from-gray-500 to-slate-500",
    benefits: [
      "High availability",
      "Scalable infrastructure",
      "Cost optimization",
      "Disaster recovery"
    ]
  },
  {
    title: "IoT & Edge Computing",
    description: "Internet of Things solutions and edge computing infrastructure",
    icon: Wifi,
    features: [
      "IoT Device Integration",
      "Edge Computing Setup",
      "Sensor Networks",
      "Real-time Data Processing",
      "Device Management",
      "Security Implementation"
    ],
    color: "from-teal-500 to-cyan-500",
    benefits: [
      "Real-time insights",
      "Reduced latency",
      "Cost efficiency",
      "Scalable solutions"
    ]
  },
  {
    title: "Blockchain & Web3",
    description: "Blockchain technology implementation and Web3 solutions",
    icon: Lock,
    features: [
      "Blockchain Development",
      "Smart Contracts",
      "DeFi Solutions",
      "NFT Platforms",
      "Cryptocurrency Integration",
      "Security Audits"
    ],
    color: "from-indigo-500 to-purple-500",
    benefits: [
      "Enhanced security",
      "Transparency",
      "Decentralization",
      "Future-proof technology"
    ]
  },
  {
    title: "Quantum Computing",
    description: "Next-generation quantum computing solutions and research",
    icon: Cpu,
    features: [
      "Quantum Algorithm Development",
      "Quantum Simulation",
      "Quantum Machine Learning",
      "Quantum Cryptography",
      "Hybrid Classical-Quantum Systems",
      "Research & Development"
    ],
    color: "from-violet-500 to-purple-500",
    benefits: [
      "Exponential processing power",
      "Advanced problem solving",
      "Competitive advantage",
      "Future technology leadership"
    ],
    pricing: "Starting at $2,999/month"
  },
  {
    title: "AI Infrastructure & ML Ops",
    description: "Complete AI infrastructure setup and machine learning operations management",
    icon: Brain,
    features: [
      "ML Pipeline Development",
      "Model Training Infrastructure",
      "Model Deployment & Serving",
      "A/B Testing Frameworks",
      "Model Monitoring",
      "Data Pipeline Automation"
    ],
    color: "from-purple-500 to-pink-500",
    benefits: [
      "Scalable AI operations",
      "Faster model deployment",
      "Automated workflows",
      "Production-ready AI"
    ],
    pricing: "Starting at $1,499/month"
  },
  {
    title: "Advanced Analytics & BI",
    description: "Enterprise business intelligence and advanced analytics solutions",
    icon: BarChart3,
    features: [
      "Data Warehouse Design",
      "ETL/ELT Processes",
      "Real-time Analytics",
      "Predictive Modeling",
      "Dashboard Development",
      "Self-service BI"
    ],
    color: "from-cyan-500 to-blue-500",
    benefits: [
      "Data-driven decisions",
      "Real-time insights",
      "Self-service analytics",
      "Competitive intelligence"
    ],
    pricing: "Starting at $899/month"
  },
  {
    title: "Zero Trust Security Architecture",
    description: "Comprehensive zero trust security implementation and management",
    icon: Shield,
    features: [
      "Identity & Access Management",
      "Micro-segmentation",
      "Continuous Monitoring",
      "Threat Detection",
      "Security Orchestration",
      "Compliance Management"
    ],
    color: "from-red-500 to-orange-500",
    benefits: [
      "Enhanced security posture",
      "Reduced attack surface",
      "Compliance assurance",
      "Proactive threat response"
    ],
    pricing: "Starting at $1,299/month"
  },
  {
    title: "Hybrid Cloud Management",
    description: "Seamless management of hybrid cloud environments across multiple providers",
    icon: Cloud,
    features: [
      "Multi-cloud Strategy",
      "Cloud Cost Optimization",
      "Data Synchronization",
      "Disaster Recovery",
      "Security Management",
      "Performance Monitoring"
    ],
    color: "from-blue-500 to-indigo-500",
    benefits: [
      "Vendor flexibility",
      "Cost optimization",
      "High availability",
      "Risk mitigation"
    ],
    pricing: "Starting at $1,199/month"
  },
  {
    title: "API Management & Integration",
    description: "Comprehensive API lifecycle management and system integration",
    icon: Network,
    features: [
      "API Gateway Setup",
      "API Design & Development",
      "Rate Limiting & Security",
      "Third-party Integrations",
      "API Documentation",
      "Performance Monitoring"
    ],
    color: "from-green-500 to-teal-500",
    benefits: [
      "Improved connectivity",
      "Better security",
      "Easier maintenance",
      "Enhanced performance"
    ],
    pricing: "Starting at $699/month"
  },
  {
    title: "Edge Computing Solutions",
    description: "Distributed computing infrastructure for real-time processing",
    icon: Wifi,
    features: [
      "Edge Server Deployment",
      "Real-time Processing",
      "Data Synchronization",
      "Edge Security",
      "Performance Optimization",
      "Monitoring & Management"
    ],
    color: "from-teal-500 to-cyan-500",
    benefits: [
      "Reduced latency",
      "Better performance",
      "Cost efficiency",
      "Real-time processing"
    ],
    pricing: "Starting at $799/month"
  },
  {
    title: "Disaster Recovery & Business Continuity",
    description: "Comprehensive disaster recovery planning and business continuity solutions",
    icon: HardDrive,
    features: [
      "Disaster Recovery Planning",
      "Backup Solutions",
      "Failover Systems",
      "Data Replication",
      "Recovery Testing",
      "Business Continuity Planning"
    ],
    color: "from-gray-500 to-slate-500",
    benefits: [
      "Minimal downtime",
      "Data protection",
      "Business continuity",
      "Risk mitigation"
    ],
    pricing: "Starting at $599/month"
  },
  {
    title: "IT Compliance & Governance",
    description: "Comprehensive IT governance and compliance management",
    icon: Shield,
    features: [
      "Compliance Assessment",
      "Policy Development",
      "Risk Management",
      "Audit Support",
      "Training Programs",
      "Documentation Management"
    ],
    color: "from-indigo-500 to-purple-500",
    benefits: [
      "Regulatory compliance",
      "Risk reduction",
      "Better governance",
      "Audit readiness"
    ],
    pricing: "Starting at $499/month"
  },
  {
    title: "Digital Transformation Consulting",
    description: "Strategic digital transformation planning and implementation",
    icon: Globe,
    features: [
      "Digital Strategy Development",
      "Technology Assessment",
      "Change Management",
      "Process Optimization",
      "Technology Roadmap",
      "Implementation Support"
    ],
    color: "from-purple-500 to-pink-500",
    benefits: [
      "Competitive advantage",
      "Improved efficiency",
      "Better customer experience",
      "Future-ready technology"
    ],
    pricing: "Starting at $1,999/month"
  },
  {
    title: "IT Asset Management",
    description: "Comprehensive IT asset lifecycle management and optimization",
    icon: Monitor,
    features: [
      "Asset Discovery & Inventory",
      "License Management",
      "Lifecycle Planning",
      "Cost Optimization",
      "Compliance Tracking",
      "Automated Reporting"
    ],
    color: "from-yellow-500 to-orange-500",
    benefits: [
      "Cost optimization",
      "Compliance assurance",
      "Better visibility",
      "Reduced risks"
    ],
    pricing: "Starting at $399/month"
  },
  {
    title: "Remote Work Infrastructure",
    description: "Secure and efficient remote work solutions and infrastructure",
    icon: Smartphone,
    features: [
      "VPN Solutions",
      "Remote Desktop Services",
      "Collaboration Tools",
      "Security Policies",
      "Device Management",
      "Performance Monitoring"
    ],
    color: "from-cyan-500 to-blue-500",
    benefits: [
      "Secure remote access",
      "Improved productivity",
      "Better collaboration",
      "Cost efficiency"
    ],
    pricing: "Starting at $299/month"
  }
];

const platforms = [
  {
    name: "Cloud Platforms",
    icon: Cloud,
    technologies: ["AWS", "Azure", "Google Cloud", "IBM Cloud", "Oracle Cloud", "Alibaba Cloud"],
    description: "Leading cloud platforms for scalable and secure infrastructure"
  },
  {
    name: "Security Solutions",
    icon: Shield,
    technologies: ["Firewall", "VPN", "SIEM", "EDR", "Zero Trust", "Compliance"],
    description: "Comprehensive security solutions for enterprise protection"
  },
  {
    name: "Database Systems",
    icon: Database,
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Oracle", "SQL Server"],
    description: "Reliable and scalable database solutions for all business needs"
  },
  {
    name: "Monitoring & Analytics",
    icon: BarChart3,
    technologies: ["Prometheus", "Grafana", "ELK Stack", "Splunk", "DataDog", "New Relic"],
    description: "Advanced monitoring and analytics for optimal performance"
  },
  {
    name: "DevOps Tools",
    icon: Zap,
    technologies: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Ansible"],
    description: "Modern DevOps tools for automated deployment and management"
  },
  {
    name: "Network Infrastructure",
    icon: Network,
    technologies: ["Cisco", "Juniper", "Fortinet", "Palo Alto", "Aruba", "Meraki"],
    description: "Enterprise-grade networking equipment and solutions"
  }
];

const developmentProcess = [
  {
    step: "01",
    title: "Assessment & Planning",
    description: "We analyze your current IT infrastructure, identify gaps, and create a comprehensive improvement plan."
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Design scalable and secure IT solutions tailored to your business requirements and future growth."
  },
  {
    step: "03",
    title: "Implementation & Migration",
    description: "Execute the implementation with minimal disruption to your business operations."
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description: "Thoroughly test all systems and optimize performance for maximum efficiency and reliability."
  },
  {
    step: "05",
    title: "Training & Support",
    description: "Provide comprehensive training to your team and ongoing support for smooth operations."
  },
  {
    step: "06",
    title: "Monitoring & Maintenance",
    description: "Continuous monitoring and proactive maintenance to ensure optimal performance and security."
  }
];

const testimonials = [
  {
    name: "David Thompson",
    company: "TechCorp Solutions",
    content: "Zion Tech Group transformed our IT infrastructure. Their cloud migration saved us 40% in costs while improving performance.",
    rating: 5
  },
  {
    name: "Lisa Chen",
    company: "InnovateLabs",
    content: "Outstanding cybersecurity implementation. We feel much more secure with their zero trust architecture.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    company: "FutureTech Inc.",
    content: "Their DevOps solutions accelerated our deployment process by 300%. Highly recommend their expertise.",
    rating: 5
  }
];

const pricingPlans = [
  {
    name: "Basic IT Support",
    price: "$299",
    period: "per month",
    features: [
      "24/7 Helpdesk Support",
      "Basic Security Monitoring",
      "Software Updates",
      "Remote Assistance",
      "Monthly Health Checks"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Professional IT Services",
    price: "$799",
    period: "per month",
    features: [
      "Everything in Basic",
      "Advanced Security Solutions",
      "Cloud Management",
      "Network Optimization",
      "Backup & Recovery",
      "Quarterly Reviews"
    ],
    color: "from-purple-500 to-pink-500",
    popular: true
  },
  {
    name: "Enterprise IT Solutions",
    price: "$1,999",
    period: "per month",
    features: [
      "Everything in Professional",
      "Dedicated Account Manager",
      "Custom Solutions",
      "Advanced Analytics",
      "Compliance Management",
      "Priority Support"
    ],
    color: "from-orange-500 to-red-500"
  }
];

export default function ITServicesPage() {
  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud migration, cybersecurity, network infrastructure, and digital transformation solutions."
      keywords="IT services, cloud migration, cybersecurity, network infrastructure, digital transformation, IT consulting"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">IT Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with our expert IT services. From cloud migration to cybersecurity, 
                we provide comprehensive solutions to keep your technology infrastructure secure, efficient, and future-ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to meet your business needs and drive growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.pricing && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <p className="text-lg font-semibold text-gray-900">{service.pricing}</p>
                    </div>
                  )}

                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss your IT needs and discover how we can help your business thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-3" />
                  <span className="text-lg">+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-3" />
                  <span className="text-lg">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-3" />
                  <span className="text-lg">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
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

      {/* Pricing Section */}
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
              IT Services Pricing
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Flexible pricing options to meet your IT needs and budget requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <motion.div
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic IT</h3>
                <p className="text-gray-600 mb-4">Essential IT support</p>
                <div className="text-4xl font-bold text-blue-600 mb-2">$1,500</div>
                <p className="text-gray-500">per month</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Basic IT Support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Network Monitoring</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Email Support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Basic Security</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Monthly Reports</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 text-center block font-semibold"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-8 relative transform scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Professional IT</h3>
                <p className="text-blue-100 mb-4">Comprehensive IT solutions</p>
                <div className="text-4xl font-bold mb-2">$4,500</div>
                <p className="text-blue-100">per month</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>24/7 IT Support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Cloud Migration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Advanced Security</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>DevOps Services</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Dedicated Manager</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-center block font-semibold"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-500 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise IT</h3>
                <p className="text-gray-600 mb-4">Full-scale IT transformation</p>
                <div className="text-4xl font-bold text-purple-600 mb-2">Custom</div>
                <p className="text-gray-500">pricing</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Quantum Computing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Blockchain Solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">IoT Implementation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Data Center Solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Dedicated Team</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">SLA Guarantee</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300 text-center block font-semibold"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              All plans include free consultation and custom implementation
            </p>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-700 font-semibold underline"
            >
              Schedule a free consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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