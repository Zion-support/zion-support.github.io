import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Leaf, 
  TrendingUp, 
  Shield, 
  Cloud, 
  Brain, 
  Target,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Workflow,
  Database,
  Globe,
  Lock,
  Rocket,
  Star,
  Award,
  Headphones,
  Phone,
  Mail,
  MapPin,
  Sun,
  Wind,
  Battery,
  Gauge,
  Activity,
  Monitor,
  Settings,
  AlertTriangle,
  Lightbulb,
  Cog,
  Wrench
} from 'lucide-react';

export default function Energy() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Energy Management",
      description: "Intelligent energy optimization using machine learning algorithms to reduce costs and improve efficiency.",
      benefits: ["Real-time energy monitoring", "Predictive analytics", "Automated optimization", "Cost reduction"]
    },
    {
      icon: Leaf,
      title: "Renewable Energy Integration",
      description: "Seamless integration of solar, wind, and other renewable energy sources into existing infrastructure.",
      benefits: ["Green energy adoption", "Grid stability", "Energy storage solutions", "Carbon footprint reduction"]
    },
    {
      icon: Workflow,
      title: "Smart Grid Solutions",
      description: "Advanced grid management systems for improved reliability, efficiency, and sustainability.",
      benefits: ["Grid modernization", "Load balancing", "Outage prevention", "Real-time monitoring"]
    },
    {
      icon: Shield,
      title: "Energy Security & Compliance",
      description: "Comprehensive security solutions to protect critical energy infrastructure and ensure regulatory compliance.",
      benefits: ["Cybersecurity protection", "Regulatory compliance", "Threat detection", "24/7 monitoring"]
    }
  ];

  const solutions = [
    {
      category: "Smart Grid Management",
      services: [
        "Grid Monitoring & Control",
        "Load Forecasting & Management",
        "Distribution Automation",
        "Outage Management",
        "Grid Analytics Platform"
      ]
    },
    {
      category: "Renewable Energy",
      services: [
        "Solar Energy Management",
        "Wind Power Integration",
        "Energy Storage Solutions",
        "Microgrid Systems",
        "Green Energy Analytics"
      ]
    },
    {
      category: "Energy Efficiency",
      services: [
        "Energy Consumption Analytics",
        "Demand Response Systems",
        "Building Energy Management",
        "Industrial Efficiency",
        "Energy Performance Monitoring"
      ]
    },
    {
      category: "Energy Trading",
      services: [
        "Energy Market Analytics",
        "Trading Platform Solutions",
        "Risk Management",
        "Portfolio Optimization",
        "Market Intelligence"
      ]
    }
  ];

  const caseStudies = [
    {
      industry: "Utility Company",
      company: "Regional Power Grid",
      challenge: "Aging infrastructure and increasing demand for renewable energy integration",
      solution: "Smart grid modernization with AI-powered monitoring and renewable energy management",
      results: "30% improvement in grid reliability, 25% increase in renewable energy capacity"
    },
    {
      industry: "Industrial Facility",
      company: "Manufacturing Plant",
      challenge: "High energy costs and inefficient energy consumption patterns",
      solution: "AI-powered energy management system with real-time optimization",
      results: "40% reduction in energy costs, 35% improvement in energy efficiency"
    },
    {
      industry: "Commercial Building",
      company: "Office Complex",
      challenge: "Poor energy performance and high operational costs",
      solution: "Building energy management system with IoT sensors and AI analytics",
      results: "45% reduction in energy consumption, 50% decrease in operational costs"
    }
  ];

  const technologies = [
    {
      name: "IoT Sensors & Monitoring",
      description: "Real-time data collection from energy infrastructure",
      icon: Monitor
    },
    {
      name: "Machine Learning Analytics",
      description: "Predictive modeling for energy optimization",
      icon: Brain
    },
    {
      name: "Blockchain Energy Trading",
      description: "Secure peer-to-peer energy trading platforms",
      icon: Database
    },
    {
      name: "Edge Computing",
      description: "Local processing for real-time energy management",
      icon: Cog
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Energy Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your energy infrastructure with Zion Tech Group's smart grid solutions, renewable energy integration, and AI-powered energy management systems." />
        <meta name="keywords" content="energy solutions, smart grid, renewable energy, energy management, energy efficiency, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/energy" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-green/20 border border-zion-green/30 text-zion-green text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Energy Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powering the Future with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-green to-zion-cyan"> Smart Energy Solutions</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Zion Tech Group delivers innovative energy solutions that combine cutting-edge technology with sustainable practices to create efficient, reliable, and environmentally friendly energy systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-green to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-cyan hover:to-zion-green transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-zion-green text-zion-green font-semibold rounded-lg hover:bg-zion-green hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Energy Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From smart grid management to renewable energy integration, we provide end-to-end energy solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-zion-green/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-zion-green/20 rounded-lg mr-4">
                    <feature.icon className="w-8 h-8 text-zion-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-zion-slate-light mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Energy Solution Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive solutions covering all aspects of modern energy management and optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-zion-cyan/20 rounded-lg mr-3">
                    <Target className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{solution.category}</h3>
                </div>
                <ul className="space-y-2">
                  {solution.services.map((service, idx) => (
                    <li key={idx} className="text-sm text-zion-slate-light flex items-center">
                      <ArrowRight className="w-4 h-4 text-zion-green mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We leverage the latest technologies to deliver innovative energy solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
                <div className="p-3 bg-zion-purple/20 rounded-lg mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <tech.icon className="w-8 h-8 text-zion-purple" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-zion-slate-light">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Energy Transformation Success Stories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              See how organizations are revolutionizing their energy infrastructure with Zion Tech Group solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-zion-green/20 rounded-lg mr-3">
                    <Star className="w-6 h-6 text-zion-green" />
                  </div>
                  <div>
                    <div className="text-sm text-zion-cyan font-medium">{study.industry}</div>
                    <div className="text-white font-semibold">{study.company}</div>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                  <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Solution:</h4>
                  <p className="text-zion-slate-light text-sm">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Results:</h4>
                  <p className="text-zion-cyan text-sm font-medium">{study.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-zion-green/20 to-zion-cyan/20 border border-zion-green/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Energy Infrastructure?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how Zion Tech Group can help you build a sustainable, efficient, and intelligent energy system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-green to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-cyan hover:to-zion-green transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-zion-green text-zion-green font-semibold rounded-lg hover:bg-zion-green hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-zion-cyan/20 rounded-lg mb-4">
                <Phone className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-zion-slate-light">+1 (302) 464-0950</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-zion-green/20 rounded-lg mb-4">
                <Mail className="w-8 h-8 text-zion-green" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-zion-purple/20 rounded-lg mb-4">
                <MapPin className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}