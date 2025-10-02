import React from "react";
import { Helmet } from "react-helmet-async";
import { 
  Cloud,
  Shield,
  Server,
  Database,
  Network,
  Lock,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Star,
  TrendingUp,
  Globe,
  Smartphone,
  MessageSquare,
  Zap,
  Settings,
  Monitor,
  Cpu,
  HardDrive,
  Wifi,
  Eye,
  Key,
  AlertTriangle,
  Users,
  Building
} from "lucide-react";

export default function ITServices(): React.JSX.Element {
  const itServices = [
    {
      id: "cloud-migration-expert",
      name: "Cloud Migration & Optimization Expert",
      blurb: "Complete cloud transformation with cost optimization and security hardening",
      price: "$5,000 - $25,000/month",
      eta: "4-12 weeks",
      category: "Cloud Infrastructure",
      icon: Cloud,
      features: [
        "Multi-cloud strategy and architecture design",
        "Automated migration with zero downtime",
        "Cost optimization with 30-50% savings",
        "Security hardening and compliance setup",
        "Performance monitoring and optimization",
        "Disaster recovery and backup solutions",
        "24/7 cloud operations support"
      ],
      benefits: [
        "50% reduction in infrastructure costs",
        "99.99% uptime guarantee",
        "3x faster application deployment",
        "Complete security compliance"
      ],
      useCases: ["Enterprise companies", "SaaS providers", "E-commerce platforms", "Healthcare systems"],
      marketSize: "$623.3B cloud computing market",
      link: "/contact"
    },
    {
      id: "zero-trust-security",
      name: "Zero Trust Security Framework",
      blurb: "Enterprise-grade security architecture with continuous verification",
      price: "$3,500 - $18,000/month",
      eta: "3-8 weeks",
      category: "Cybersecurity",
      icon: Shield,
      features: [
        "Identity and access management (IAM) setup",
        "Network segmentation and micro-segmentation",
        "Endpoint detection and response (EDR)",
        "Security information and event management (SIEM)",
        "Multi-factor authentication (MFA) implementation",
        "Continuous security monitoring",
        "Incident response automation"
      ],
      benefits: [
        "95% reduction in security incidents",
        "100% compliance with industry standards",
        "Real-time threat detection and response",
        "Automated security policy enforcement"
      ],
      useCases: ["Financial institutions", "Government agencies", "Healthcare organizations", "Large enterprises"],
      marketSize: "$366.1B cybersecurity market",
      link: "/contact"
    },
    {
      id: "devops-automation",
      name: "DevOps Automation Platform",
      blurb: "Complete CI/CD pipeline with infrastructure as code and monitoring",
      price: "$2,500 - $12,000/month",
      eta: "3-6 weeks",
      category: "DevOps & Automation",
      icon: Zap,
      features: [
        "CI/CD pipeline setup with automated testing"
        "Infrastructure as Code (IaC) with Terraform"
        "Container orchestration with Kubernetes"
        "Automated deployment and rollback"
        "Performance monitoring and alerting"
        "Security scanning and compliance checks"
        "Developer productivity tools integration"
      ],
      benefits: [
        "10x faster deployment cycles"
        "80% reduction in deployment failures"
        "50% improvement in developer productivity"
        "Automated quality assurance"
      ],
      useCases: ["Software companies", "Tech startups", "E-commerce platforms", "Financial services"],
      marketSize: "$10.3B DevOps market",
      link: "/contact"
    }
    {
      id: "data-engineering-platform"
      name: "Data Engineering Platform"
      blurb: "Scalable data infrastructure with real-time processing and analytics"
      price: "$4,000 - $20,000/month"
      eta: "4-10 weeks"
      category: "Data & Analytics"
      icon: Database
      features: [
        "Data lake and data warehouse architecture"
        "Real-time data streaming with Apache Kafka"
        "ETL/ELT pipeline automation"
        "Data quality monitoring and governance"
        "Machine learning pipeline integration"
        "Business intelligence dashboard creation"
        "Data security and privacy compliance"
      ]
      benefits: [
        "5x faster data processing"
        "Real-time business insights"
        "90% reduction in data errors"
        "Automated data governance"
      ]
      useCases: ["Analytics companies", "E-commerce platforms", "Financial services", "Healthcare systems"]
      marketSize: "$274.3B data analytics market"
      link: "/contact"
    }
    {
      id: "network-infrastructure"
      name: "Enterprise Network Infrastructure"
      blurb: "High-performance network design with SD-WAN and security integration"
      price: "$3,000 - $15,000/month"
      eta: "2-6 weeks"
      category: "Network Solutions"
      icon: Network
      features: [
        "SD-WAN implementation and optimization"
        "Network security with next-gen firewalls"
        "Load balancing and traffic optimization"
        "Network monitoring and performance analytics"
        "Wireless infrastructure setup"
        "VPN and remote access solutions"
        "Disaster recovery network planning"
      ]
      benefits: [
        "60% improvement in network performance"
        "99.9% network uptime guarantee"
        "40% reduction in network costs"
        "Enhanced security and compliance"
      ]
      useCases: ["Multi-location businesses", "Remote work environments", "Healthcare networks", "Educational institutions"]
      marketSize: "$45.2B SD-WAN market"
      link: "/contact"
    }
    {
      id: "compliance-automation"
      name: "Compliance Automation Suite"
      blurb: "Automated compliance monitoring for SOC 2, HIPAA, GDPR, and industry standards"
      price: "$2,000 - $10,000/month"
      eta: "2-4 weeks"
      category: "Compliance & Governance"
      icon: Lock
      features: [
        "Automated compliance monitoring and reporting"
        "Policy management and enforcement"
        "Risk assessment and mitigation"
        "Audit trail and evidence collection"
        "Employee training and awareness programs"
        "Incident response and breach notification"
        "Regulatory change management"
      ]
      benefits: [
        "90% reduction in compliance costs"
        "100% audit readiness"
        "Automated risk management"
        "Continuous compliance monitoring"
      ]
      useCases: ["Healthcare providers", "Financial services", "SaaS companies", "Government contractors"]
      marketSize: "$56.9B compliance management market"
      link: "/contact"
    }
  ];

  const additionalITServices = [
    {
      name: "IT Infrastructure Assessment"
      description: "Comprehensive infrastructure audit and optimization recommendations"
      price: "$1,500 - $5,000/month"
      features: ["Performance analysis", "Security assessment", "Cost optimization", "Modernization roadmap"]
    }
    {
      name: "24/7 IT Support & Monitoring"
      description: "Round-the-clock IT support with proactive monitoring"
      price: "$800 - $3,000/month"
      features: ["24/7 helpdesk", "Proactive monitoring", "Remote support", "SLA guarantees"]
    }
    {
      name: "Backup & Disaster Recovery"
      description: "Automated backup solutions with disaster recovery planning"
      price: "$500 - $2,500/month"
      features: ["Automated backups", "Disaster recovery", "Business continuity", "Data protection"]
    }
    {
      name: "IT Consulting & Strategy"
      description: "Strategic IT planning and digital transformation consulting"
      price: "$200 - $500/hour"
      features: ["Strategic planning", "Technology roadmap", "Vendor selection", "Implementation guidance"]
    }
  ];

  const industrySolutions = [
    {
      industry: "Healthcare"
      solutions: ["HIPAA compliance", "Patient data security", "Telemedicine infrastructure", "Medical device integration"]
      icon: Building
      color: "from-green-500 to-teal-500"
    }
    {
      industry: "Financial Services"
      solutions: ["PCI DSS compliance", "Fraud detection systems", "Risk management", "Regulatory reporting"]
      icon: DollarSign
      color: "from-blue-500 to-indigo-500"
    }
    {
      industry: "E-commerce"
      solutions: ["Scalable infrastructure", "Payment security", "Inventory management", "Customer analytics"]
      icon: Globe
      color: "from-purple-500 to-pink-500"
    }
    {
      industry: "Manufacturing"
      solutions: ["IoT integration", "Predictive maintenance", "Supply chain optimization", "Quality control systems"]
      icon: Cpu
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services & Solutions - Zion Tech Group | Enterprise Technology Services</title>
        <meta 
          name="description" 
          content="Comprehensive IT services including cloud migration, cybersecurity, DevOps automation, and data engineering. Enterprise-grade solutions with proven results." 
        />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, data engineering, network infrastructure, compliance" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Server className="h-8 w-8 text-cyan-400 mr-3" />
              <span className="text-lg font-semibold text-cyan-400">Enterprise IT Solutions</span>
            </div>
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Transform Your IT Infrastructure
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Modernize your IT infrastructure with our comprehensive suite of enterprise-grade services. 
              From cloud migration to cybersecurity, we deliver scalable solutions that drive business growth.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>Enterprise-Grade</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {itServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-400">{service.marketSize}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                      <p className="text-slate-300 mb-4">{service.blurb}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Comprehensive Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-xs text-slate-400 ml-5">
                            +{service.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-fuchsia-400 mb-2">Measurable Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-300">
                            <TrendingUp className="w-3 h-3 text-fuchsia-400 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="text-left">
                      <div className="text-lg font-semibold text-cyan-400">{service.price}</div>
                      <div className="text-sm text-slate-400">{service.eta} implementation</div>
                    </div>
                    <a 
                      href={service.link}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="pt-4 border-t border-slate-700/50">
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Industry-Specific Solutions</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Tailored IT solutions designed for specific industry requirements and compliance needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySolutions.map((solution, idx) => {
              const Icon = solution.icon;
              return (
                <div key={idx} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 text-center">{solution.industry}</h3>
                  <ul className="space-y-2">
                    {solution.solutions.map((item, sIdx) => (
                      <li key={sIdx} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Additional Services */}
        <section className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Additional IT Services</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Comprehensive IT support services to keep your infrastructure running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalITServices.map((service, idx) => (
              <div key={idx} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-sm text-slate-300 mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center text-xs text-slate-400">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-cyan-400 font-semibold text-sm">{service.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Modernize Your IT Infrastructure?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Get a comprehensive IT assessment and custom solution proposal. Most projects start with a detailed infrastructure analysis.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Rapid Deployment</h3>
                <p className="text-sm text-slate-300">Implementation in 2-12 weeks with minimal disruption</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cost Optimization</h3>
                <p className="text-sm text-slate-300">Average 40% reduction in IT operational costs</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-fuchsia-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-fuchsia-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Support</h3>
                <p className="text-sm text-slate-300">24/7 support from certified IT professionals</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <a 
                  href="tel:+13024640950" 
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  <Smartphone className="w-4 h-4" />
                  +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  kleber@ziontechgroup.com
                </a>
              </div>
              <p className="text-sm text-slate-400">
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}