import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  Cloud,
  Database,
  Globe,
  Network,
  Rocket,
  Code,
  Settings,
  Building,
  ArrowRight,
  Star,
  Phone,
  Mail,
  ExternalLink,
  Zap,
  Target,
  TrendingUp,
  Lock,
  Cpu,
  Users,
  Globe2,
  BarChart3,
  FileText,
  Heart,
  Home,
  Truck,
  Eye
} from 'lucide-react';

const NewInnovativeServices: React.FC = () => {
  const featuredServices = [
    {
      id: "ai-powered-financial-fraud-detection",
      title: "AI-Powered Financial Fraud Detection System",
      description: "Advanced fraud detection platform that uses machine learning algorithms to identify and prevent financial fraud in real-time across multiple channels.",
      category: "AI & Machine Learning",
      price: 3500,
      marketPrice: "$3,500 - $12,000/month",
      features: ["Real-time transaction monitoring", "Behavioral pattern analysis", "Multi-channel fraud detection"],
      benefits: ["Reduce fraud losses by 85%", "Real-time protection", "Lower false positive rates"],
      icon: <Shield className="h-12 w-12 p-2 rounded-lg bg-red-100 text-red-700" />,
      color: "from-red-500 to-pink-500",
      link: "/services/ai-powered-financial-fraud-detection"
    },
    {
      id: "quantum-resistant-cryptography-platform",
      title: "Quantum-Resistant Cryptography Platform",
      description: "Next-generation cryptographic platform that implements post-quantum algorithms to secure data against future quantum computing threats.",
      category: "Cybersecurity",
      price: 4200,
      marketPrice: "$4,200 - $15,000/month",
      features: ["Post-quantum algorithms", "Hybrid encryption systems", "Key management platform"],
      benefits: ["Future-proof security", "Quantum-resistant protection", "Regulatory compliance"],
      icon: <Lock className="h-12 w-12 p-2 rounded-lg bg-purple-100 text-purple-700" />,
      color: "from-purple-500 to-indigo-500",
      link: "/services/quantum-resistant-cryptography"
    },
    {
      id: "ai-powered-supply-chain-optimization",
      title: "AI-Powered Supply Chain Optimization Platform",
      description: "Intelligent supply chain management system that optimizes inventory, predicts demand, and automates procurement processes using AI.",
      category: "AI & Machine Learning",
      price: 2800,
      marketPrice: "$2,800 - $9,000/month",
      features: ["Demand forecasting", "Inventory optimization", "Supplier management"],
      benefits: ["Reduce inventory costs by 30%", "Improve delivery times", "Optimize supplier relationships"],
      icon: <Truck className="h-12 w-12 p-2 rounded-lg bg-blue-100 text-blue-700" />,
      color: "from-blue-500 to-cyan-500",
      link: "/services/ai-powered-supply-chain-optimization"
    },
    {
      id: "autonomous-devops-orchestration",
      title: "Autonomous DevOps Orchestration Platform",
      description: "Self-managing DevOps platform that automatically optimizes deployments, monitors performance, and resolves issues without human intervention.",
      category: "Cloud & Infrastructure",
      price: 3200,
      marketPrice: "$3,200 - $10,000/month",
      features: ["Automated CI/CD pipelines", "Self-healing infrastructure", "Performance optimization"],
      benefits: ["Reduce deployment time by 80%", "Lower operational costs", "Improved reliability"],
      icon: <Rocket className="h-12 w-12 p-2 rounded-lg bg-green-100 text-green-700" />,
      color: "from-green-500 to-emerald-500",
      link: "/services/autonomous-devops-orchestration"
    },
    {
      id: "quantum-machine-learning-platform",
      title: "Quantum Machine Learning Platform",
      description: "Revolutionary platform that combines quantum computing with machine learning to solve complex problems beyond classical computing capabilities.",
      category: "AI & Machine Learning",
      price: 8500,
      marketPrice: "$8,500 - $25,000/month",
      features: ["Quantum neural networks", "Hybrid quantum-classical algorithms", "Quantum feature selection"],
      benefits: ["Exponential performance gains", "Solve previously intractable problems", "Future-proof technology"],
      icon: <Brain className="h-12 w-12 p-2 rounded-lg bg-indigo-100 text-indigo-700" />,
      color: "from-indigo-500 to-purple-500",
      link: "/services/quantum-machine-learning-platform"
    },
    {
      id: "zero-trust-security-framework",
      title: "Zero Trust Security Framework Implementation",
      description: "Comprehensive zero trust security implementation that continuously verifies every user, device, and transaction across your network.",
      category: "Cybersecurity",
      price: 4500,
      marketPrice: "$4,500 - $18,000/month",
      features: ["Identity verification", "Device trust scoring", "Network segmentation"],
      benefits: ["Reduce attack surface by 90%", "Compliance automation", "Improved security posture"],
      icon: <Eye className="h-12 w-12 p-2 rounded-lg bg-orange-100 text-orange-700" />,
      color: "from-orange-500 to-red-500",
      link: "/services/zero-trust-security-framework"
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      description: "Transform your business with intelligent automation and predictive analytics",
      icon: <Brain className="h-8 w-8" />,
      count: 8,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Cybersecurity",
      description: "Protect your digital assets with advanced security solutions",
      icon: <Shield className="h-8 w-8" />,
      count: 6,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Quantum Computing",
      description: "Harness the power of quantum computing for complex problem solving",
      icon: <Cpu className="h-8 w-8" />,
      count: 4,
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Blockchain & Web3",
      description: "Build decentralized applications and secure digital infrastructure",
      icon: <Globe2 className="h-8 w-8" />,
      count: 5,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Cloud & Infrastructure",
      description: "Scale your operations with modern cloud solutions",
      icon: <Cloud className="h-8 w-8" />,
      count: 7,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Data & Analytics",
      description: "Turn data into actionable insights with advanced analytics",
      icon: <BarChart3 className="h-8 w-8" />,
      count: 6,
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50" />
        <div className="relative z-10 px-4 py-24 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              New Innovative Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our latest cutting-edge technology solutions designed to transform your business. 
              From AI-powered fraud detection to quantum-resistant cryptography, we're pushing the boundaries 
              of what's possible in enterprise technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-blue-100 text-blue-800">
                Latest Technology
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-green-100 text-green-800">
                AI-Powered Solutions
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-purple-100 text-purple-800">
                Quantum Computing
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-red-100 text-red-800">
                Enterprise Security
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Link to="/services/comprehensive-services-showcase">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <a href="tel:+13024640950">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2">Ready to Get Started?</h3>
              <p className="text-blue-100">Contact our technology experts for a free consultation</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-white">
                <Phone className="h-5 w-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Mail className="h-5 w-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <Button asChild variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Featured New Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our most innovative and cutting-edge solutions designed to give your business a competitive advantage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <Card key={service.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  {service.icon}
                  <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800">
                    New
                  </Badge>
                </div>
                <CardTitle className="text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Key Benefits</h4>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-white">
                      ${service.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-400">/month</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                      Market Price
                    </Badge>
                  </div>
                </div>

                {/* Category */}
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">Category:</span>
                  <Badge variant="outline" className="border-white/30 text-white text-xs">
                    {service.category}
                  </Badge>
                </div>
              </CardContent>

              <div className="p-6 pt-0">
                <Button asChild className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 transition-opacity`}>
                  <Link to={service.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Explore by Category</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Browse our comprehensive range of technology solutions organized by category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category) => (
            <Card key={category.name} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-white/20 to-white/10 rounded-full flex items-center justify-center">
                  <div className="text-white group-hover:text-cyan-400 transition-colors">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                  {category.name}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {category.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800">
                    {category.count} Services
                  </Badge>
                </div>
                <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Link to="/services/comprehensive-services-showcase">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another technology company. We're your strategic partner in digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Premium Quality</h3>
              <p className="text-gray-300">Enterprise-grade solutions with proven track records</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge Tech</h3>
              <p className="text-gray-300">Latest AI, quantum computing, and cybersecurity innovations</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
              <p className="text-gray-300">24/7 technical support and dedicated account management</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Results-Driven</h3>
              <p className="text-gray-300">Measurable business outcomes and ROI-focused solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Our team of technology experts is ready to help you implement the perfect solution for your needs.
          Get started today with a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Link to="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <a href="tel:+13024640950">
              <Phone className="mr-2 h-5 w-5" />
              Call +1 302 464 0950
            </a>
          </Button>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-cyan-400" />
              <div>
                <div className="font-medium">Phone</div>
                <div>+1 302 464 0950</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-cyan-400" />
              <div>
                <div className="font-medium">Email</div>
                <div>kleber@ziontechgroup.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building className="h-5 w-5 text-cyan-400" />
              <div>
                <div className="font-medium">Address</div>
                <div>364 E Main St STE 1008<br />Middletown DE 19709</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInnovativeServices;