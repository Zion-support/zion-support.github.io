import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Brain, Shield, Cloud, Users, Building2, Rocket, Cpu, Database, Lock, ShoppingCart, Heart, GraduationCap, ArrowRight, Settings, DollarSign } from 'lucide-react';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      icon: Brain,
      color: "from-purple-600 to-blue-600",
      services: [
        {
          name: "AI Strategy & Consulting",
          description: "Strategic guidance on implementing AI solutions",
          price: "From $2,500",
          href: "/ai-services"
        },
        {
          name: "Machine Learning Development",
          description: "Custom ML models and algorithms",
          price: "From $5,000",
          href: "/ai-services"
        },
        {
          name: "AI-Powered Applications",
          description: "Intelligent automation and insights",
          price: "From $8,500",
          href: "/ai-services"
        }
      ]
    },
    {
      name: "Data Analytics & BI",
      description: "Transform raw data into actionable business intelligence",
      icon: Database,
      color: "from-blue-600 to-indigo-600",
      services: [
        {
          name: "Business Intelligence & Reporting",
          description: "Interactive dashboards and automated reporting",
          price: "From $3,500/month",
          href: "/it-services"
        },
        {
          name: "Predictive Analytics & Forecasting",
          description: "Machine learning for future insights",
          price: "From $5,000/month",
          href: "/it-services"
        },
        {
          name: "Data Engineering & ETL",
          description: "Robust data pipelines and warehouses",
          price: "From $4,500/month",
          href: "/it-services"
        }
      ]
    },
    {
      name: "IoT & Edge Computing",
      description: "Connected ecosystems and real-time edge processing",
      icon: Cpu,
      color: "from-green-600 to-emerald-600",
      services: [
        {
          name: "IoT Device Management Platform",
          description: "Comprehensive IoT device management",
          price: "From $4,200/month",
          href: "/it-services"
        },
        {
          name: "Edge Computing Infrastructure",
          description: "Real-time data processing at the edge",
          price: "From $5,500/month",
          href: "/it-services"
        },
        {
          name: "Smart City & Industrial IoT",
          description: "IoT solutions for smart cities and manufacturing",
          price: "From $6,500/month",
          href: "/it-services"
        }
      ]
    },
    {
      name: "Blockchain & Web3",
      description: "Decentralized applications and blockchain solutions",
      icon: Lock,
      color: "from-purple-600 to-indigo-600",
      services: [
        {
          name: "Smart Contract Development",
          description: "Secure, audited smart contracts",
          price: "From $8,500/project",
          href: "/it-services"
        },
        {
          name: "DeFi & NFT Platforms",
          description: "Decentralized finance and NFT marketplaces",
          price: "From $12,000/project",
          href: "/it-services"
        },
        {
          name: "Enterprise Blockchain",
          description: "Private blockchain networks for businesses",
          price: "From $15,000/project",
          href: "/it-services"
        }
      ]
    }
  ];

  const industrySolutions = [
    {
      name: "Healthcare",
      description: "AI-powered diagnostics, patient care, and medical research",
      icon: Heart,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Finance",
      description: "Risk assessment, fraud detection, and algorithmic trading",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, and automation",
      icon: Settings,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Retail",
      description: "Customer analytics, inventory optimization, and e-commerce",
      icon: ShoppingCart,
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Education",
      description: "Personalized learning, student analytics, and EdTech solutions",
      icon: GraduationCap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Government",
      description: "Digital transformation, citizen services, and smart cities",
      icon: Building2,
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Comprehensive Service Portfolio
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-zion-blue-light max-w-4xl mx-auto mb-8"
            >
              Discover our complete range of cutting-edge technology solutions designed to transform your business
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/services-catalog"
                className="inline-flex items-center px-8 py-4 bg-zion-purple hover:bg-zion-purple-dark text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Browse All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services-comparison"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Compare Services
                <Settings className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-zion-blue-light max-w-3xl mx-auto">
              Explore our comprehensive range of technology services organized by category
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue rounded-xl p-8 border border-zion-blue-light/20 hover:border-zion-purple/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
                <p className="text-zion-blue-light mb-6">{category.description}</p>
                
                <div className="space-y-4 mb-6">
                  {category.services.map((service) => (
                    <div key={service.name} className="flex items-center justify-between p-3 bg-zion-blue-dark rounded-lg">
                      <div>
                        <h4 className="font-semibold text-white">{service.name}</h4>
                        <p className="text-sm text-zion-blue-light">{service.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-zion-purple font-semibold">{service.price}</p>
                        <Link
                          to={service.href}
                          className="text-sm text-zion-blue-light hover:text-zion-purple transition-colors"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-blue-light max-w-3xl mx-auto">
              Tailored technology solutions designed for your specific industry needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark rounded-xl p-6 border border-zion-blue-light/20 hover:border-zion-purple/50 transition-all duration-300 group"
              >
                <div className={`p-4 rounded-lg bg-gradient-to-r ${solution.color} mb-4 w-fit`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.name}</h3>
                <p className="text-zion-blue-light mb-4">{solution.description}</p>
                <Link
                  to="/solutions"
                  className="inline-flex items-center text-zion-purple hover:text-zion-purple-light font-semibold transition-colors group-hover:translate-x-1"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-blue-light mb-8"
          >
            Let our experts help you choose the right services and create a customized solution for your needs
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-zion-purple hover:bg-zion-blue-light font-semibold rounded-lg transition-colors duration-200"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 bg-zion-blue-dark hover:bg-zion-blue text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Request Quote
              <DollarSign className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
