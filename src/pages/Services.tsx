import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Database, 
  Network, 
  Users, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Award
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "AI & Machine Learning",
      description: "Transform your business with cutting-edge AI solutions that drive innovation and efficiency.",
      icon: Brain,
      features: [
        "Custom AI model development",
        "Machine learning consulting",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision solutions",
        "AI-powered automation"
      ],
      benefits: [
        "40% increase in operational efficiency",
        "Real-time decision making",
        "Predictive insights",
        "Cost reduction through automation"
      ],
      color: "from-purple-500 to-pink-500",
      category: "AI Solutions"
    },
    {
      id: 2,
      title: "Cybersecurity & Compliance",
      description: "Protect your digital assets with enterprise-grade security solutions and compliance automation.",
      icon: Shield,
      features: [
        "Zero-trust security architecture",
        "SOC2 compliance automation",
        "Threat detection & response",
        "Vulnerability assessment",
        "Security monitoring",
        "Incident response"
      ],
      benefits: [
        "99.9% threat detection rate",
        "Automated compliance reporting",
        "Real-time security monitoring",
        "Reduced security incidents by 90%"
      ],
      color: "from-red-500 to-orange-500",
      category: "Security"
    },
    {
      id: 3,
      title: "Cloud Migration & DevOps",
      description: "Accelerate your digital transformation with modern cloud infrastructure and DevOps practices.",
      icon: Cloud,
      features: [
        "Multi-cloud migration",
        "DevOps automation",
        "CI/CD pipeline setup",
        "Infrastructure as code",
        "Cloud cost optimization",
        "Performance monitoring"
      ],
      benefits: [
        "50% reduction in infrastructure costs",
        "80% faster deployment times",
        "99.9% uptime guarantee",
        "Scalable architecture"
      ],
      color: "from-blue-500 to-cyan-500",
      category: "Cloud & DevOps"
    },
    {
      id: 4,
      title: "5G & IoT Solutions",
      description: "Build the future with next-generation 5G networks and IoT infrastructure.",
      icon: Network,
      features: [
        "5G network deployment",
        "IoT platform development",
        "Edge computing solutions",
        "Network optimization",
        "IoT device management",
        "Real-time data processing"
      ],
      benefits: [
        "10x faster data transmission",
        "Support for 100,000+ IoT devices",
        "Ultra-low latency",
        "Massive device connectivity"
      ],
      color: "from-green-500 to-emerald-500",
      category: "5G & IoT"
    },
    {
      id: 5,
      title: "Data Analytics & BI",
      description: "Unlock the power of your data with advanced analytics and business intelligence solutions.",
      icon: Database,
      features: [
        "Big data processing",
        "Real-time analytics",
        "Business intelligence dashboards",
        "Data warehousing",
        "Predictive modeling",
        "Data visualization"
      ],
      benefits: [
        "Real-time business insights",
        "Data-driven decision making",
        "Improved operational efficiency",
        "Competitive advantage"
      ],
      color: "from-indigo-500 to-purple-500",
      category: "Data & Analytics"
    },
    {
      id: 6,
      title: "Digital Transformation",
      description: "Modernize your business operations with comprehensive digital transformation services.",
      icon: Zap,
      features: [
        "Process automation",
        "Legacy system modernization",
        "Digital workflow optimization",
        "Change management",
        "Technology strategy",
        "Innovation consulting"
      ],
      benefits: [
        "70% process automation",
        "45% improvement in efficiency",
        "Enhanced customer experience",
        "Future-ready infrastructure"
      ],
      color: "from-yellow-500 to-orange-500",
      category: "Transformation"
    },
    {
      id: 7,
      title: "Custom Software Development",
      description: "Build tailored software solutions that perfectly fit your business requirements.",
      icon: Users,
      features: [
        "Custom application development",
        "Web & mobile apps",
        "API development",
        "System integration",
        "Software testing",
        "Maintenance & support"
      ],
      benefits: [
        "Tailored to your needs",
        "Scalable solutions",
        "Reduced development time",
        "Ongoing support"
      ],
      color: "from-teal-500 to-cyan-500",
      category: "Development"
    },
    {
      id: 8,
      title: "IT Consulting & Strategy",
      description: "Get expert guidance on technology strategy and digital innovation.",
      icon: Globe,
      features: [
        "Technology strategy",
        "Digital innovation consulting",
        "IT assessment & audit",
        "Vendor selection",
        "Project management",
        "Technology roadmapping"
      ],
      benefits: [
        "Expert guidance",
        "Cost optimization",
        "Risk mitigation",
        "Strategic planning"
      ],
      color: "from-gray-500 to-slate-500",
      category: "Consulting"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Projects Completed" },
    { icon: Star, value: "98%", label: "Client Satisfaction" },
    { icon: TrendingUp, value: "40%", label: "Average Cost Reduction" },
    { icon: Clock, value: "30%", label: "Faster Delivery" }
  ];

  const industries = [
    "Healthcare",
    "Financial Services",
    "Manufacturing",
    "Retail",
    "Technology",
    "Education",
    "Government",
    "Energy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="bg-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business operations, 
            enhance security, and drive innovation across all industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-zion-purple hover:bg-zion-purple/80 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/request-quote"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-zion-purple" />
                </div>
                <div className="text-3xl font-bold text-zion-slate-dark mb-2">{stat.value}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Comprehensive Solutions</h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            From AI and cybersecurity to cloud migration and digital transformation, 
            we provide end-to-end technology solutions that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                {/* Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                  <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mt-3">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-zion-slate-dark mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-zion-slate-dark mb-3">Business Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-zion-purple hover:text-zion-cyan transition-colors font-medium group"
                  >
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Industries Section */}
      <div className="bg-zion-blue-light/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Industries We Serve</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our solutions have been successfully implemented across diverse industries, 
              delivering measurable results and transformative impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-zion-slate-dark">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Our Process</h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery and maximum value for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-zion-cyan">1</span>
            </div>
            <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Discovery</h3>
            <p className="text-zion-slate-light">We analyze your requirements and business objectives</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-zion-purple">2</span>
            </div>
            <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Strategy</h3>
            <p className="text-zion-slate-light">We design a comprehensive solution architecture</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-zion-cyan">3</span>
            </div>
            <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Implementation</h3>
            <p className="text-zion-slate-light">We execute the solution with agile methodology</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-zion-purple">4</span>
            </div>
            <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Optimization</h3>
            <p className="text-zion-slate-light">We continuously improve and optimize performance</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-zion-gradient rounded-lg mx-4 mb-16 p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
        <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
          Let's discuss how our technology solutions can help you achieve your business goals 
          and stay ahead of the competition.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-zion-purple hover:bg-zion-purple/80 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Schedule Consultation
          </Link>
          <Link
            to="/request-quote"
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
