import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Network, 
  Code, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Rocket, 
  Zap, 
  Globe, 
  Lock, 
  Cpu, 
  Sparkles,
  ShieldCheck,
  Globe2,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions that transform your business",
      icon: Brain,
      services: [
        {
          name: "AI Business Intelligence",
          description: "Transform data into actionable insights with AI-powered analytics",
          path: "/ai-business-intelligence",
          price: "$2,500/mo",
          rating: 4.9,
          features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards"]
        },
        {
          name: "AI Marketing Automation",
          description: "Automate marketing processes with intelligent AI systems",
          path: "/ai-marketing-automation",
          price: "$1,800/mo",
          rating: 4.8,
          features: ["Campaign Automation", "Personalization", "Performance Analytics"]
        },
        {
          name: "AI Workflow Automation",
          description: "Streamline business processes with intelligent automation",
          path: "/ai-workflow-automation",
          price: "$2,200/mo",
          rating: 4.9,
          features: ["Process Optimization", "Smart Routing", "Performance Monitoring"]
        }
      ]
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and development operations",
      icon: Cloud,
      services: [
        {
          name: "Cloud Infrastructure",
          description: "Enterprise-grade cloud solutions for scalability and performance",
          path: "/cloud-devops",
          price: "$1,800/mo",
          rating: 4.8,
          features: ["Auto-scaling", "99.9% Uptime", "Security First"]
        },
        {
          name: "DevOps Automation",
          description: "Streamline development and deployment processes",
          path: "/cloud-devops",
          price: "$2,100/mo",
          rating: 4.7,
          features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring"]
        }
      ]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      icon: Shield,
      services: [
        {
          name: "Enterprise Security",
          description: "Multi-layered security for enterprise environments",
          path: "/enterprise-solutions",
          price: "$3,200/mo",
          rating: 4.9,
          features: ["Threat Detection", "Compliance Ready", "24/7 Monitoring"]
        },
        {
          name: "Security Audits",
          description: "Comprehensive security assessments and compliance",
          path: "/enterprise-solutions",
          price: "$5,000",
          rating: 4.9,
          features: ["Penetration Testing", "Vulnerability Assessment", "Compliance Reports"]
        }
      ]
    },
    {
      title: "Blockchain & DeFi",
      description: "Next-generation blockchain and decentralized finance solutions",
      icon: ShieldCheck,
      services: [
        {
          name: "Blockchain Solutions",
          description: "Secure and transparent blockchain applications",
          path: "/blockchain-defi-solutions",
          price: "$4,500/mo",
          rating: 4.8,
          features: ["Smart Contracts", "DApp Development", "DeFi Integration"]
        },
        {
          name: "Enterprise Blockchain",
          description: "Scalable blockchain solutions for enterprise use",
          path: "/blockchain-enterprise-solutions",
          price: "$6,000/mo",
          rating: 4.9,
          features: ["Private Networks", "Consortium Management", "Integration APIs"]
        }
      ]
    },
    {
      title: "IoT & Edge Computing",
      description: "Intelligent device management and edge processing solutions",
      icon: Globe2,
      services: [
        {
          name: "IoT Management Platform",
          description: "Connect and manage IoT devices intelligently",
          path: "/iot-management-platform",
          price: "$2,800/mo",
          rating: 4.7,
          features: ["Device Management", "Data Collection", "Remote Monitoring"]
        },
        {
          name: "IoT Data Analytics",
          description: "Advanced analytics for IoT data insights",
          path: "/iot-data-analytics",
          price: "$2,200/mo",
          rating: 4.8,
          features: ["Real-time Processing", "Predictive Analytics", "Visualization"]
        }
      ]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation",
      icon: Rocket,
      services: [
        {
          name: "Digital Strategy",
          description: "Comprehensive digital transformation roadmaps",
          path: "/digital-transformation",
          price: "$15,000",
          rating: 4.9,
          features: ["Strategy Development", "Technology Assessment", "Implementation Planning"]
        },
        {
          name: "Legacy Modernization",
          description: "Modernize existing systems for the digital age",
          path: "/digital-transformation",
          price: "$25,000+",
          rating: 4.8,
          features: ["System Analysis", "Migration Planning", "Implementation Support"]
        }
      ]
    }
  ];

  const stats = [
    { icon: Brain, value: "50+", label: "AI Solutions" },
    { icon: Cloud, value: "100+", label: "Cloud Projects" },
    { icon: Shield, value: "200+", label: "Security Audits" },
    { icon: Rocket, value: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SEOHead 
        config={{
          title: "Our Services - Zion Tech Group",
          description: "Discover our comprehensive range of technology services including AI solutions, cloud infrastructure, cybersecurity, blockchain, and digital transformation.",
          keywords: "IT services, AI solutions, cloud computing, cybersecurity, blockchain, digital transformation, Zion Tech Group",
          type: "website"
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive technology solutions designed to drive innovation, enhance security, and accelerate your business growth
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services organized by category
            </p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-800 rounded-2xl p-8">
                <div className="flex items-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-6">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300 text-lg">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-gray-700 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-600 hover:border-cyan-500">
                      <div className="mb-4">
                        <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                        <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                        
                        <div className="flex items-center mb-4">
                          <div className="flex items-center text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-400">({service.rating})</span>
                        </div>

                        <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                      </div>

                      <div className="mb-6">
                        <h5 className="font-semibold text-white mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="h-3 w-3 text-cyan-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={service.path}
                        className="w-full inline-flex items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg text-sm"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can help transform your business and drive innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-cyan-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;