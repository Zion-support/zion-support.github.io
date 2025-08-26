import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Rocket, Target } from 'lucide-react';
const ServicesShowcase = () => {
    const services = [
        {
            category: "AI & Machine Learning",
            icon: Brain,
            services: [
                {
                    name: "AI Business Intelligence",
                    description: "Advanced analytics and business intelligence powered by artificial intelligence",
                    href: "/services/ai-business-intelligence",
                    features: ["Predictive Analytics", "Real-time Insights", "Custom Dashboards"]
                },
                {
                    name: "AI Marketing Automation",
                    description: "Intelligent marketing automation with AI-driven optimization",
                    href: "/services/ai-marketing-automation",
                    features: ["Campaign Optimization", "Customer Segmentation", "ROI Tracking"]
                },
                {
                    name: "AI Workflow Automation",
                    description: "Streamline business processes with intelligent automation",
                    href: "/services/ai-workflow-automation",
                    features: ["Process Optimization", "Error Reduction", "Efficiency Gains"]
                }
            ]
        },
        {
            category: "Cloud & Infrastructure",
            icon: Cloud,
            services: [
                {
                    name: "Cloud & DevOps",
                    description: "Comprehensive cloud infrastructure and DevOps automation",
                    href: "/services/cloud",
                    features: ["Multi-cloud Strategy", "CI/CD Pipelines", "Infrastructure as Code"]
                },
                {
                    name: "IT Infrastructure",
                    description: "Enterprise-grade IT infrastructure solutions",
                    href: "/services/infrastructure",
                    features: ["Network Design", "Security Implementation", "Scalability Planning"]
                },
                {
                    name: "Digital Transformation",
                    description: "End-to-end digital transformation consulting and implementation",
                    href: "/services/transformation",
                    features: ["Strategy Development", "Technology Selection", "Change Management"]
                }
            ]
        },
        {
<<<<<<< HEAD
=======
<<<<<<< HEAD
          name: "AI Workflow Automation",
          description: "Streamline business processes with intelligent automation",
          href: "/services/ai-workflow-automation",
          features: ["Process Optimization", "Error Reduction", "Efficiency Gains"]
  const serviceCategories = [
    {
      title: "AI-Powered Micro SAAS Solutions",
      subtitle: "Intelligent software-as-a-service solutions that automate and optimize business processes",
      icon: "🤖",
      services: [
        {
          name: "AI-Powered Content Generator",
          description: "Revolutionary content creation platform that generates high-quality, SEO-optimized content for blogs, social media, and marketing materials.",
          features: [
            "Multi-language content generation",
            "SEO optimization algorithms",
            "Brand voice consistency",
            "Content scheduling automation",
            "Performance analytics"
          ],
          pricing: "$99 - $499/month",
          benefits: [
            "10x faster content creation",
            "SEO-optimized output",
            "24/7 content generation",
            "Cost-effective marketing",
            "Improved engagement rates"
          ],
          marketPosition: "Leading AI content generation platform",
          competitors: ["Jasper", "Copy.ai", "Writesonic"],
          competitiveAdvantage: "Advanced AI algorithms, comprehensive automation, and brand voice consistency"
=======
>>>>>>> 56229ef9d959dca80d78e89ba2b28c0e10af1144
            category: "Cybersecurity & Compliance",
            icon: Shield,
            services: [
                {
                    name: "Cybersecurity Services",
                    description: "Comprehensive cybersecurity solutions for modern threats",
                    href: "/services/cybersecurity",
                    features: ["Threat Detection", "Vulnerability Assessment", "Incident Response"]
                },
                {
                    name: "SOC2 Compliance Automation",
                    description: "Automated SOC2 compliance and audit preparation",
                    href: "/soc2-compliance-automation",
                    features: ["Compliance Monitoring", "Audit Preparation", "Risk Management"]
                },
                {
                    name: "Zero Trust Architecture",
                    description: "Modern zero trust security implementation",
                    href: "/zero-trust-network-architecture",
                    features: ["Identity Verification", "Access Control", "Continuous Monitoring"]
                }
            ]
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
>>>>>>> 56229ef9d959dca80d78e89ba2b28c0e10af1144
        },
        {
            category: "Emerging Technologies",
            icon: Rocket,
            services: [
                {
                    name: "Quantum Technology",
                    description: "Next-generation quantum computing solutions",
                    href: "/quantum-technology",
                    features: ["Quantum Algorithms", "Quantum Security", "Research & Development"]
                },
                {
                    name: "Space Technology",
                    description: "Innovative space technology and satellite solutions",
                    href: "/space-tech",
                    features: ["Satellite Systems", "Space Analytics", "Ground Station Solutions"]
                },
                {
                    name: "5G Enterprise Solutions",
                    description: "Enterprise-grade 5G network optimization",
                    href: "/5g-enterprise-solutions",
                    features: ["Network Optimization", "Edge Computing", "IoT Integration"]
                }
            ]
        },
        {
<<<<<<< HEAD
            category: "Specialized Solutions",
            icon: Target,
            services: [
                {
                    name: "AI-Powered IT Asset Management",
                    description: "Intelligent IT asset lifecycle management",
                    href: "/ai-powered-it-asset-management",
                    features: ["Asset Tracking", "Predictive Maintenance", "Cost Optimization"]
                },
                {
                    name: "Autonomous Business Operations",
                    description: "AI-driven business process automation platform",
                    href: "/autonomous-business-operations-platform",
                    features: ["Process Automation", "Decision Support", "Performance Analytics"]
                },
                {
                    name: "Micro SAAS Services",
                    description: "Specialized software-as-a-service solutions",
                    href: "/micro-saas-services",
                    features: ["Custom Development", "Scalable Architecture", "API Integration"]
                }
            ]
=======
<<<<<<< HEAD
          name: "AI-Powered Social Media Management",
          description: "Intelligent social media automation with AI-driven content creation and engagement analytics.",
          features: [
            "AI content generation",
            "Automated posting",
            "Engagement analytics",
            "Trend prediction",
            "Multi-platform management"
          ],
          pricing: "$149 - $899/month",
          benefits: [
            "3x engagement increase",
            "Time savings",
            "Better reach",
            "Automated optimization",
            "ROI tracking"
          ],
          marketPosition: "AI-powered social media automation for growth-focused businesses",
          competitors: ["Hootsuite", "Buffer", "Sprout Social"],
          competitiveAdvantage: "AI-driven content, intelligent automation, and predictive analytics"
        },
        {
          name: "Smart Email Marketing Automation",
          description: "Advanced email marketing platform with AI-driven personalization and optimization.",
          features: [
            "AI personalization",
            "Behavioral triggers",
            "A/B testing",
            "Predictive analytics",
            "Advanced segmentation"
          ],
          pricing: "$199 - $1,299/month",
          benefits: [
            "40% higher open rates",
            "Better conversions",
            "Automated optimization",
            "ROI tracking",
            "Personalized experiences"
          ],
          marketPosition: "AI-powered email marketing for modern businesses",
          competitors: ["Mailchimp", "Constant Contact", "ConvertKit"],
          competitiveAdvantage: "AI personalization, predictive analytics, and automated optimization"
>>>>>>> 56229ef9d959dca80d78e89ba2b28c0e10af1144
        }
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
<<<<<<< HEAD
    };
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
=======
      ]
    },
    {
      category: "Emerging Technologies",
      icon: Rocket,
      services: [
        {
          name: "Quantum Technology",
          description: "Next-generation quantum computing solutions",
          href: "/quantum-technology",
          features: ["Quantum Algorithms", "Quantum Security", "Research & Development"]
        },
        {
          name: "Space Technology",
          description: "Innovative space technology and satellite solutions",
          href: "/space-tech",
          features: ["Satellite Systems", "Space Analytics", "Ground Station Solutions"]
        },
        {
          name: "5G Enterprise Solutions",
          description: "Enterprise-grade 5G network optimization",
          href: "/5g-enterprise-solutions",
          features: ["Network Optimization", "Edge Computing", "IoT Integration"]
        }
      ]
    },
    {
      category: "Specialized Solutions",
      icon: Target,
      services: [
        {
          name: "AI-Powered IT Asset Management",
          description: "Intelligent IT asset lifecycle management",
          href: "/ai-powered-it-asset-management",
          features: ["Asset Tracking", "Predictive Maintenance", "Cost Optimization"]
        },
        {
          name: "Autonomous Business Operations",
          description: "AI-driven business process automation platform",
          href: "/autonomous-business-operations-platform",
          features: ["Process Automation", "Decision Support", "Performance Analytics"]
        },
        {
          name: "Micro SAAS Services",
          description: "Specialized software-as-a-service solutions",
          href: "/micro-saas-services",
          features: ["Custom Development", "Scalable Architecture", "API Integration"]
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
=======
            category: "Specialized Solutions",
            icon: Target,
            services: [
                {
                    name: "AI-Powered IT Asset Management",
                    description: "Intelligent IT asset lifecycle management",
                    href: "/ai-powered-it-asset-management",
                    features: ["Asset Tracking", "Predictive Maintenance", "Cost Optimization"]
                },
                {
                    name: "Autonomous Business Operations",
                    description: "AI-driven business process automation platform",
                    href: "/autonomous-business-operations-platform",
                    features: ["Process Automation", "Decision Support", "Performance Analytics"]
                },
                {
                    name: "Micro SAAS Services",
                    description: "Specialized software-as-a-service solutions",
                    href: "/micro-saas-services",
                    features: ["Custom Development", "Scalable Architecture", "API Integration"]
                }
            ]
        }
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
>>>>>>> 56229ef9d959dca80d78e89ba2b28c0e10af1144
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"/>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Services Showcase
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive portfolio of cutting-edge technology solutions, 
              from AI and cloud services to emerging technologies and specialized enterprise solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Get Started
              </Link>
              <Link to="/comprehensive-pricing-2025" className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-16">
          {services.map((category, categoryIndex) => (<motion.div key={category.category} variants={itemVariants}>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-4">
                  <category.icon className="w-8 h-8 text-white"/>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{category.category}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (<motion.div key={service.name} variants={itemVariants} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-blue-500/50 transition-all duration-300 group">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
      title: "Advanced IT Infrastructure",
      subtitle: "Modern IT infrastructure solutions for enterprise-scale operations",
      icon: "🖥️",
      services: [
        {
          name: "Zero Trust Security Architecture",
          description: "Comprehensive zero trust security implementation and management.",
          features: [
            "Identity verification",
            "Access control",
            "Network segmentation",
            "Continuous monitoring",
            "Threat detection"
          ],
          pricing: "$4,500 - $35,000/month",
          benefits: [
            "Enhanced security",
            "Compliance assurance",
            "Risk reduction",
            "Operational efficiency",
            "Future-proof security"
          ],
          marketPosition: "Leading zero trust implementation for enterprise organizations",
          competitors: ["Cisco", "Palo Alto Networks", "Fortinet"],
          competitiveAdvantage: "Comprehensive implementation, continuous monitoring, and strategic integration"
        },
        {
          name: "Edge Computing Infrastructure",
          description: "Distributed edge computing solutions for IoT and real-time applications.",
          features: [
            "Edge deployment",
            "Latency optimization",
            "IoT integration",
            "Real-time processing",
            "Scalable infrastructure"
          ],
          pricing: "$3,000 - $25,000/month",
          benefits: [
            "Ultra-low latency",
            "Real-time processing",
            "Cost optimization",
            "Scalable performance",
            "IoT readiness"
          ],
          marketPosition: "Edge computing solutions for performance-critical applications",
          competitors: ["AWS Edge", "Azure Edge", "Google Edge"],
          competitiveAdvantage: "Custom deployment, performance optimization, and comprehensive integration"
        },
        {
          name: "5G Network Optimization",
          description: "5G network design, deployment, and performance optimization.",
          features: [
            "Network planning",
            "Performance optimization",
            "Coverage analysis",
            "Capacity planning",
            "Monitoring"
          ],
          pricing: "$4,000 - $30,000/month",
          benefits: [
            "Maximum performance",
            "Optimal coverage",
            "Future scalability",
            "Cost efficiency",
            "Competitive advantage"
          ],
          marketPosition: "5G optimization for enterprise and carrier networks",
          competitors: ["Ericsson", "Nokia", "Huawei"],
          competitiveAdvantage: "Custom optimization, performance tuning, and strategic planning"
        }
      ]
    }
  ];

  const categories = [
    'all',
    'Advanced AI & ML',
    'Blockchain & Web3',
    'Quantum Computing',
    'Advanced Cybersecurity',
    'Edge Computing & IoT',
    'Advanced Data Analytics',
    'Autonomous Systems',
    'Digital Twin Technology',
    'Metaverse & VR/AR',
    'Green Technology',
    'Healthcare & Life Sciences',
    'Financial Services & Banking',
    'Manufacturing & Industry 4.0',
    'Retail & E-commerce',
    'Transportation & Logistics',
    'Energy & Utilities',
    'Education & EdTech',
    'Real Estate & Property Management',
    'Legal & Compliance'
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { EnhancedServicesShowcase } from '@/components/EnhancedServicesShowcase';

export default function ServicesShowcase() {
  return (
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Showcase
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive portfolio of innovative technology solutions designed to transform your business and drive growth
            </p>
          </div>
          
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  {category.subtitle}
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <h3 className="text-2xl font-semibold text-white mb-4">{service.name}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
=======
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
>>>>>>> 56229ef9d959dca80d78e89ba2b28c0e10af1144
                            {feature}
                          </li>))}
                      </ul>
                    </div>
                    
                    <Link to={service.href} className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300">
                      Learn More
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </motion.div>))}
              </div>
            </motion.div>))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our team of experts help you implement the right technology solutions 
              to drive growth and innovation in your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Schedule Consultation
              </Link>
              <Link to="/case-studies" className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>);
};
<<<<<<< HEAD
=======
<<<<<<< HEAD


                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Pricing</h4>
                      <p className="text-xl text-gray-300 font-semibold">{service.pricing}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-yellow-400 mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-purple-400 mb-3">Market Position</h4>
                      <p className="text-gray-300">{service.marketPosition}</p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Competitive Advantage</h4>
                      <p className="text-gray-300">{service.competitiveAdvantage}</p>
                    </div>
                    
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Get Started
                      <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement These Solutions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our comprehensive technology services can transform your business
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-sm text-gray-300">Cutting-edge AI, quantum computing, and emerging technologies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">💼</div>
              <h3 className="text-lg font-semibold text-white mb-2">Industry Expertise</h3>
              <p className="text-sm text-gray-300">Specialized solutions for healthcare, finance, manufacturing, and more</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">📈</div>
              <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-sm text-gray-300">Measurable ROI and performance improvements across industries</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Start Your Transformation
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Call: +1 302 464 0950
            </a>
          </div>
          <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-2 text-blue-400 hover:text-blue-300 border border-blue-400 rounded-lg transition-all duration-300"
            >
              View All Services →
            </Link>
            <Link
              to="/advanced-services-2025"
              className="inline-flex items-center px-6 py-2 text-cyan-400 hover:text-cyan-300 border border-cyan-400 rounded-lg transition-all duration-300"
            >
              Advanced Services 2025 →
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">ziontechgroup.com</a></p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Mobile: +1 302 464 0950</p>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Service Categories
            </h2>
            <p className="text-xl text-gray-300">
              Explore our wide range of innovative solutions across different technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.filter(cat => cat !== 'all').map((category, index) => {
              const categoryServices = allServices.filter(service => service.category === category);
              const avgPrice = categoryServices.length > 0 
                ? categoryServices.reduce((sum, service) => sum + service.price, 0) / categoryServices.length 
                : 0;
              
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{category}</h3>
                  <p className="text-sm text-gray-400 mb-4">{categoryServices.length} services available</p>
                  <p className="text-sm text-blue-400 mb-2">Starting from ${Math.round(avgPrice).toLocaleString()}/month</p>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    View Services
                  </button>
                </div>
              );
            })}
          </div>
import { CogIcon } from '@heroicons/react/24/outline';

const $page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <CogIcon className="h-12 w-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            $page
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page is under development. Contact us for more information.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
          >
            Contact Us for More Information
          </Link>
        </div>
      </section>
    </div>
    <>
      <Helmet>
        <title>Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive technology services portfolio including AI solutions, cloud services, cybersecurity, and digital transformation." />
        <meta name="keywords" content="technology services, AI solutions, cloud services, cybersecurity, digital transformation, IT consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/services-showcase" />
      </Helmet>
      
      <EnhancedServicesShowcase />
    </>
  );
};

export default $page;
=======
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
>>>>>>> 56229ef9d959dca80d78e89ba2b28c0e10af1144
export default ServicesShowcase;
