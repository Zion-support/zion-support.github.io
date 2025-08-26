import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Cloud, 
  Shield, 
  Network, 
  Database, 
  Code, 
  Users, 
  Globe,
  Zap,
  Brain,
  Rocket,
  Cpu,
  Lock,
  Shield as ShieldIcon,
  Cloud as CloudIcon,
  Server as ServerIcon,
  Network as NetworkIcon,
  Database as DatabaseIcon,
  Code as CodeIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Rocket as RocketIcon,
  Cpu as CpuIcon,
  Lock as LockIcon,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Award,
  Clock,
  TrendingUp,
  Star,
  Building,
  Wrench,
  Settings,
  Monitor,
  Smartphone,
  Laptop,
  HardDrive,
  Wifi,
  Key,
  Eye,
  Shield as ShieldIcon2,
  Cloud as CloudIcon2,
  Server as ServerIcon2,
  Network as NetworkIcon2,
  Database as DatabaseIcon2,
  Code as CodeIcon2,
  Users as UsersIcon2,
  Globe as GlobeIcon2,
  Zap as ZapIcon2,
  Brain as BrainIcon2,
  Rocket as RocketIcon2,
  Cpu as CpuIcon2,
  Lock as LockIcon2
} from 'lucide-react';
import { SEO } from "@/components/SEO";

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices = [
    {
      id: "infrastructure-management",
      title: "Infrastructure Management",
      description: "Comprehensive IT infrastructure management including servers, networks, storage, and cloud resources.",
      category: "Infrastructure",
      icon: Server,
      price: "Custom",
      features: [
        "Server administration and monitoring",
        "Network infrastructure management",
        "Storage and backup solutions",
        "Cloud infrastructure optimization",
        "Performance monitoring and tuning",
        "Disaster recovery planning",
        "Capacity planning and scaling",
        "24/7 infrastructure support"
      ],
      benefits: [
        "99.9% uptime guarantee",
        "Reduced infrastructure costs",
        "Improved performance and reliability",
        "Scalable and flexible solutions",
        "Expert technical support"
      ],
      useCases: [
        "Enterprise infrastructure management",
        "Cloud migration and optimization",
        "Data center operations",
        "Hybrid cloud environments",
        "Infrastructure modernization"
      ]
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions & DevOps",
      description: "End-to-end cloud solutions including migration, optimization, and DevOps automation for modern applications.",
      category: "Cloud & DevOps",
      icon: Cloud,
      price: "From $2,500/month",
      features: [
        "Cloud migration and strategy",
        "Multi-cloud management",
        "DevOps automation and CI/CD",
        "Container orchestration (Kubernetes)",
        "Infrastructure as Code (IaC)",
        "Cloud cost optimization",
        "Security and compliance",
        "Performance monitoring"
      ],
      benefits: [
        "Faster time to market",
        "Reduced operational costs",
        "Improved scalability and flexibility",
        "Enhanced security and compliance",
        "Automated deployment processes"
      ],
      useCases: [
        "Application modernization",
        "Microservices architecture",
        "Cloud-native development",
        "DevOps transformation",
        "Multi-cloud strategies"
      ]
    },
    {
      id: "cybersecurity-services",
      title: "Cybersecurity Services",
      description: "Comprehensive cybersecurity solutions including threat detection, prevention, and incident response.",
      category: "Security",
      icon: Shield,
      price: "From $3,000/month",
      features: [
        "Security assessment and auditing",
        "Threat detection and monitoring",
        "Incident response and forensics",
        "Vulnerability management",
        "Security awareness training",
        "Compliance and governance",
        "Penetration testing",
        "Security architecture design"
      ],
      benefits: [
        "Enhanced security posture",
        "Reduced security risks",
        "Compliance with regulations",
        "24/7 security monitoring",
        "Expert security guidance"
      ],
      useCases: [
        "Enterprise security management",
        "Compliance requirements",
        "Incident response planning",
        "Security architecture design",
        "Security awareness programs"
      ]
    },
    {
      id: "network-solutions",
      title: "Network Solutions",
      description: "Advanced networking solutions including design, implementation, and optimization for modern business needs.",
      category: "Networking",
      icon: Network,
      price: "From $1,800/month",
      features: [
        "Network design and architecture",
        "Wireless network solutions",
        "Network security implementation",
        "Performance optimization",
        "Network monitoring and management",
        "VPN and remote access",
        "Load balancing and redundancy",
        "Network automation"
      ],
      benefits: [
        "Improved network performance",
        "Enhanced security and reliability",
        "Better user experience",
        "Reduced network downtime",
        "Scalable network infrastructure"
      ],
      useCases: [
        "Enterprise network design",
        "Remote work solutions",
        "Network security implementation",
        "Performance optimization",
        "Network modernization"
      ]
    },
    {
      id: "data-management",
      title: "Data Management & Analytics",
      description: "Comprehensive data solutions including database management, analytics, and business intelligence.",
      category: "Data & Analytics",
      icon: Database,
      price: "From $2,200/month",
      features: [
        "Database design and optimization",
        "Data warehousing solutions",
        "Business intelligence implementation",
        "Data analytics and reporting",
        "Data governance and quality",
        "Big data processing",
        "Machine learning integration",
        "Data backup and recovery"
      ],
      benefits: [
        "Improved data insights",
        "Better decision making",
        "Enhanced data security",
        "Optimized data performance",
        "Compliance with data regulations"
      ],
      useCases: [
        "Business intelligence implementation",
        "Data warehouse design",
        "Analytics platform development",
        "Data governance programs",
        "Machine learning integration"
      ]
    },
    {
      id: "software-development",
      title: "Software Development",
      description: "Custom software development services including web applications, mobile apps, and enterprise solutions.",
      category: "Development",
      icon: Code,
      price: "From $4,000/month",
      features: [
        "Custom web application development",
        "Mobile app development",
        "API development and integration",
        "Database design and development",
        "Software testing and QA",
        "DevOps and deployment",
        "Maintenance and support",
        "Performance optimization"
      ],
      benefits: [
        "Custom solutions for your needs",
        "Faster development cycles",
        "Quality assurance and testing",
        "Ongoing support and maintenance",
        "Scalable and maintainable code"
      ],
      useCases: [
        "Custom business applications",
        "E-commerce platforms",
        "Mobile applications",
        "API development",
        "Legacy system modernization"
      ]
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      description: "Strategic digital transformation consulting to modernize your business processes and technology stack.",
      category: "Consulting",
      icon: Brain,
      price: "From $5,000/month",
      features: [
        "Digital strategy development",
        "Process optimization and automation",
        "Technology stack modernization",
        "Change management consulting",
        "Digital maturity assessment",
        "Innovation strategy",
        "Technology roadmap planning",
        "Implementation guidance"
      ],
      benefits: [
        "Improved operational efficiency",
        "Enhanced customer experience",
        "Competitive advantage",
        "Cost reduction and optimization",
        "Future-ready technology foundation"
      ],
      useCases: [
        "Business process optimization",
        "Technology modernization",
        "Digital strategy development",
        "Change management",
        "Innovation initiatives"
      ]
    },
    {
      id: "onsite-support",
      title: "Onsite IT Support",
      description: "Professional onsite IT support services for immediate technical assistance and problem resolution.",
      category: "Support",
      icon: Users,
      price: "From $150/hour",
      features: [
        "Onsite technical support",
        "Hardware and software troubleshooting",
        "Network and connectivity issues",
        "System installation and setup",
        "Emergency response services",
        "Preventive maintenance",
        "User training and support",
        "Equipment repair and replacement"
      ],
      benefits: [
        "Immediate problem resolution",
        "Reduced downtime",
        "Expert technical assistance",
        "Preventive maintenance",
        "User training and support"
      ],
      useCases: [
        "Emergency technical support",
        "System installation and setup",
        "Hardware troubleshooting",
        "Network connectivity issues",
        "User training and support"
      ]
    },
    {
      id: "green-it-solutions",
      title: "Green IT Solutions",
      description: "Sustainable IT solutions to reduce environmental impact while improving efficiency and cost savings.",
      category: "Sustainability",
      icon: Globe,
      price: "From $2,800/month",
      features: [
        "Energy-efficient infrastructure",
        "Sustainable technology solutions",
        "Carbon footprint reduction",
        "Green data center design",
        "Renewable energy integration",
        "Waste reduction strategies",
        "Sustainability reporting",
        "Green IT certification"
      ],
      benefits: [
        "Reduced environmental impact",
        "Lower energy costs",
        "Improved sustainability ratings",
        "Compliance with green standards",
        "Enhanced corporate reputation"
      ],
      useCases: [
        "Data center optimization",
        "Sustainable infrastructure design",
        "Energy efficiency improvements",
        "Green technology implementation",
        "Sustainability reporting"
      ]
    },
    {
      id: "5g-solutions",
      title: "5G & IoT Solutions",
      description: "Next-generation 5G and IoT solutions for connected devices and smart infrastructure.",
      category: "Emerging Tech",
      icon: Wifi,
      price: "From $3,500/month",
      features: [
        "5G network planning and design",
        "IoT infrastructure development",
        "Connected device management",
        "Edge computing solutions",
        "Smart city implementations",
        "Industrial IoT solutions",
        "5G application development",
        "IoT security and monitoring"
      ],
      benefits: [
        "Faster connectivity and performance",
        "Enhanced IoT capabilities",
        "Improved user experience",
        "Scalable infrastructure",
        "Future-ready technology"
      ],
      useCases: [
        "Smart city implementations",
        "Industrial IoT solutions",
        "5G network planning",
        "Connected device management",
        "Edge computing deployment"
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server, color: 'from-zion-cyan to-zion-purple' },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, color: 'from-zion-purple to-zion-blue' },
    { id: 'security', name: 'Security', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'networking', name: 'Networking', icon: Network, color: 'from-zion-blue to-zion-cyan' },
    { id: 'data-analytics', name: 'Data & Analytics', icon: Database, color: 'from-zion-green to-zion-cyan' },
    { id: 'development', name: 'Development', icon: Code, color: 'from-zion-orange to-zion-purple' },
    { id: 'consulting', name: 'Consulting', icon: Brain, color: 'from-zion-pink to-zion-purple' },
    { id: 'support', name: 'Support', icon: Users, color: 'from-zion-green to-zion-blue' },
    { id: 'sustainability', name: 'Sustainability', icon: Globe, color: 'from-zion-green to-zion-blue' },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Rocket, color: 'from-zion-blue to-zion-cyan' }
  ];

  const filteredServices = itServices.filter(service => 
    selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.replace('-', ' '))
  );

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.icon : Zap;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };

  return (
    <>
      <SEO 
        title="IT Services & Solutions - Zion Tech Group"
        description="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, networking, and digital transformation consulting."
        canonical="/it-services"
        url="https://ziontechgroup.com/it-services"
      />
      
      {/* Hero Section */}
      <section className="bg-futuristic min-h-[70vh] flex items-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-40 right-40 w-16 h-16 border border-zion-cyan rounded-full animate-pulse delay-3000"></div>
        </div>

        <div className="container-responsive relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-responsive font-bold mb-6">
              <span className="text-gradient">Professional IT Services</span>
              <br />
              <span className="text-white">& Solutions</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with our comprehensive IT services. From infrastructure management to digital transformation, 
              we provide expert solutions to drive your success in the digital age.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">{itServices.length}+</div>
                <div className="text-zion-slate-light">IT Services</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-zion-purple mb-2">24/7</div>
                <div className="text-zion-slate-light">Support Available</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-zion-blue mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime Guarantee</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-zion-green mb-2">15+</div>
                <div className="text-zion-slate-light">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-responsive font-bold mb-4">
              <span className="text-gradient">Service Categories</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of IT services designed to meet your business needs
            </p>
          </motion.div>

          {/* Category Pills */}
          <motion.div 
            className="flex flex-wrap gap-3 mb-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container-responsive">
          <AnimatePresence mode="wait">
            {filteredServices.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="card-futuristic group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Service Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-zion-cyan">{service.price}</div>
                          <div className="text-sm text-zion-slate-light">starting price</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-zion-slate-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-4 mb-6">
                      {/* Category */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-cyan font-medium">{service.category}</span>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                              <CheckCircle className="w-3 h-3 text-zion-cyan" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white">Benefits:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                              <Star className="w-3 h-3 text-zion-cyan" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Service Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                      <div className="text-sm text-zion-slate-light">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>Flexible scheduling</span>
                        </div>
                      </div>
                      
                      <Link
                        to={`/it-services/${service.id}`}
                        className="btn-futuristic px-4 py-2 text-sm"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-slate-light mb-6">
                  Try selecting a different category or contact us for custom solutions
                </p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="btn-futuristic px-6 py-3"
                >
                  View All Services
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
        <div className="container-responsive">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-responsive font-bold mb-4">
              <span className="text-gradient">Why Choose Zion Tech Group?</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We deliver exceptional IT services with proven expertise and innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Proven Expertise",
                description: "15+ years of experience in delivering successful IT solutions across industries"
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock technical support and monitoring for your critical systems"
              },
              {
                icon: TrendingUp,
                title: "Innovation Focus",
                description: "Cutting-edge technology solutions to keep you ahead of the competition"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified professionals with deep expertise in all aspects of IT"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card-futuristic text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-responsive font-bold mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Get in touch with our IT experts to discuss your specific needs and discover 
              how our professional services can drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free IT Consultation
              </Link>
              
              <a
                href="tel:+13024640950"
                className="btn-neon px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </div>
            
            <div className="mt-8 text-zion-slate-light">
              <p className="mb-2">📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>📧 <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">kleber@ziontechgroup.com</a></p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
