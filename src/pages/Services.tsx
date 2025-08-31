import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Users, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Lightbulb,
  Globe,
  Target,
  Settings,
  Monitor,
  Lock,
  Scale,
  Gauge
} from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Transform your business with intelligent automation and predictive analytics",
      services: [
        "AI Sales Copilot",
        "AI Compliance Assistant",
        "AI Business Intelligence",
        "AI Content Optimization",
        "AI Cybersecurity Suite",
        "AI Healthcare Analytics"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      description: "Optimize your infrastructure with cloud-native solutions and automation",
      services: [
        "Cloud FinOps Optimizer",
        "DevOps Automation",
        "Multi-Cloud Management",
        "Container Orchestration",
        "Serverless Architecture",
        "Cloud Security"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with enterprise-grade security solutions",
      services: [
        "Zero Trust Architecture",
        "Threat Detection & Response",
        "Compliance Management",
        "Security Monitoring",
        "Incident Response",
        "Vulnerability Assessment"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Modernize your business processes and customer experiences",
      services: [
        "Process Automation",
        "Customer Experience",
        "Data Analytics",
        "Legacy Modernization",
        "Change Management",
        "Digital Strategy"
      ],
      color: "from-orange-500 to-red-600"
    }
  ];

  const featuredServices = [
    {
      name: "AI Sales Copilot",
      description: "Intelligent sales automation with 40% conversion improvement",
      price: "From $2,200/month",
      features: ["Lead Scoring", "Predictive Analytics", "Automated Follow-ups"],
      popular: true
    },
    {
      name: "Cloud FinOps Optimizer",
      description: "Reduce cloud costs by 40% with AI-powered optimization",
      price: "From $1,800/month",
      features: ["Cost Optimization", "Waste Detection", "Real-time Monitoring"]
    },
    {
      name: "AI Compliance Assistant",
      description: "Automated compliance monitoring with 90% violation reduction",
      price: "From $2,500/month",
      features: ["24/7 Monitoring", "Regulatory Updates", "Risk Assessment"]
    }
  ];

  const benefits = [
    "Increase efficiency by 60%",
    "Reduce operational costs by 40%",
    "Improve customer satisfaction by 50%",
    "Accelerate time-to-market by 70%",
    "Enhance security posture by 80%",
    "Boost team productivity by 45%"
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", description: "AI-powered diagnostics and patient care" },
    { name: "Finance", icon: "💳", description: "Risk management and fraud detection" },
    { name: "Manufacturing", icon: "🏭", description: "Predictive maintenance and quality control" },
    { name: "Retail", icon: "🛍️", description: "Customer analytics and inventory optimization" },
    { name: "Technology", icon: "💻", description: "Software development and cloud solutions" },
    { name: "Government", icon: "🏛️", description: "Digital transformation and security" }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, Cloud & Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of AI, cloud, cybersecurity, and digital transformation services designed to accelerate your business growth." />
        <meta name="keywords" content="AI services, cloud solutions, cybersecurity, digital transformation, technology consulting, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                Comprehensive Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  With Our Services
                </span>
              </h1>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
                From AI-powered automation to cloud optimization and cybersecurity, 
                we provide end-to-end solutions that drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300">
                  View All Services
                </button>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-zinc-400">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-zinc-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-zinc-400">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-zinc-400">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Service Categories
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Comprehensive solutions across all major technology domains to meet your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{category.title}</h3>
                  <p className="text-zinc-400 mb-6">{category.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-zinc-300">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Featured Services
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Our most popular solutions that are transforming businesses across industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <div key={index} className={`relative bg-zinc-800/50 border rounded-xl p-8 ${
                  service.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-br from-zinc-800/50 to-cyan-900/20' 
                    : 'border-zinc-700/50'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-zinc-400 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-zinc-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-zinc-700 text-white hover:bg-zinc-600'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Proven results and measurable impact across all our service offerings.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-zinc-300 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Specialized solutions tailored to the unique challenges of your industry.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-sm text-zinc-400">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zinc-300 mb-8">
              Let's discuss how our services can accelerate your growth and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                Get Started
              </button>
              <button className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
