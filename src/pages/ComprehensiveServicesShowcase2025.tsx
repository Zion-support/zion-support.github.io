import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Heart,
  DollarSign,
  Users,
  Activity,
  Cloud,
  Lock,
  Cpu,
  Workflow,
  Bot,
  Sparkles,
  Truck,
  MessageCircle,
  Atom,
  Eye,
  Clock,
  Star,
  Target,
  Rocket,
  Code,
  Database,
  Network,
  Settings,
  BarChart,
  PieChart,
  LineChart,
  Calendar,
  AlertTriangle,
  CheckSquare,
  FileText,
  MessageSquare,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Server,
  Key,
  Fingerprint,
  ShieldCheck,
  TrendingDown,
  Stethoscope,
  Pill,
  Microscope,
  Syringe,
  Thermometer,
  Bandage,
  HeartPulse,
  BrainCircuit,
  Dna,
  TestTube
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ComprehensiveServicesShowcase2025() {
  const services = [
    {
      title: "AI Customer Success Platform",
      description: "Transform customer success with AI-powered insights, automation, and predictive analytics.",
      icon: MessageCircle,
      color: "from-blue-500 to-cyan-600",
      features: ["Predictive churn analysis", "Intelligent communication", "Proactive success management", "Advanced analytics"],
      pricing: "From $299/month",
      benefits: ["40% churn reduction", "25% increase in expansion revenue", "60% faster time to value"],
      link: "/services/ai-customer-success-platform"
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Optimize your supply chain with AI-powered demand forecasting and real-time visibility.",
      icon: Truck,
      color: "from-green-500 to-emerald-600",
      features: ["AI-powered forecasting", "Network optimization", "Real-time visibility", "Risk management"],
      pricing: "From $499/month",
      benefits: ["30% cost reduction", "25% faster delivery", "40% efficiency improvement", "90% risk reduction"],
      link: "/services/ai-supply-chain-optimization"
    },
    {
      title: "AI Financial Trading Platform",
      description: "Transform your trading with AI-powered algorithms and real-time market analysis.",
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-600",
      features: ["AI trading algorithms", "Real-time analysis", "Portfolio management", "High-frequency trading"],
      pricing: "From $199/month",
      benefits: ["15-25% annual returns", "Max 5% drawdown", "<1ms latency", "75%+ win rate"],
      link: "/services/ai-financial-trading-platform"
    },
    {
      title: "AI Healthcare Analytics Platform",
      description: "Transform healthcare with AI-powered diagnostics and predictive insights.",
      icon: Heart,
      color: "from-emerald-500 to-teal-600",
      features: ["AI diagnosis support", "Predictive analytics", "Real-time monitoring", "HIPAA compliant"],
      pricing: "From $599/month",
      benefits: ["25% reduction in readmissions", "30% faster diagnosis", "40% improvement in care coordination"],
      link: "/services/ai-healthcare-analytics-platform"
    },
    {
      title: "AI Cybersecurity Platform",
      description: "Advanced threat detection and response with AI-powered security intelligence.",
      icon: Shield,
      color: "from-red-500 to-orange-600",
      features: ["Threat detection", "Incident response", "Compliance management", "Security training"],
      pricing: "From $399/month",
      benefits: ["99.9% threat detection", "60% faster response", "100% compliance", "24/7 monitoring"],
      link: "/services/ai-cybersecurity-platform"
    },
    {
      title: "AI Quantum Hybrid Platform",
      description: "Next-generation quantum computing with hybrid classical-quantum systems.",
      icon: Atom,
      color: "from-purple-500 to-pink-600",
      features: ["Quantum algorithms", "Hybrid systems", "Optimization problems", "Cryptography"],
      pricing: "From $1,999/month",
      benefits: ["1000x speedup", "Quantum advantage", "Future-proof technology", "Research collaboration"],
      link: "/services/ai-quantum-hybrid-platform"
    }
  ];

  const categories = [
    {
      name: "AI & Machine Learning",
      description: "Advanced artificial intelligence solutions for business automation and decision-making",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      count: 6
    },
    {
      name: "Micro SAAS Solutions",
      description: "Custom software-as-a-service applications for specific business needs",
      icon: Code,
      color: "from-yellow-500 to-orange-600",
      count: 4
    },
    {
      name: "Industry Solutions",
      description: "Specialized solutions for healthcare, finance, supply chain, and cybersecurity",
      icon: Target,
      color: "from-blue-500 to-cyan-600",
      count: 4
    },
    {
      name: "Emerging Technologies",
      description: "Cutting-edge solutions including quantum computing and advanced analytics",
      icon: Rocket,
      color: "from-green-500 to-emerald-600",
      count: 2
    }
  ];

  return (
    <>
      <Helmet>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive portfolio of AI-powered services and micro SAAS solutions. From customer success to healthcare analytics, discover how we can transform your business." />
        <meta name="keywords" content="AI services, micro SAAS, customer success, supply chain, financial trading, healthcare analytics, cybersecurity, quantum computing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4 mr-2" />
                Comprehensive Services 2025
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Complete AI & Micro SAAS
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Solutions</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive portfolio of AI-powered services and micro SAAS solutions designed to transform 
                every aspect of your business operations and drive measurable results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service Categories
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our services are organized into strategic categories to help you find the perfect solution for your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                  <p className="text-slate-400 mb-4">{category.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-400">{category.count}</span>
                    <span className="text-sm text-slate-400">Services</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Explore our flagship AI-powered services and micro SAAS solutions that are transforming businesses worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-slate-300">
                          <CheckCircle className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-slate-300">
                          <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-lg font-bold text-white">{service.pricing}</span>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Choose from our comprehensive portfolio of AI-powered services and micro SAAS solutions 
              to accelerate your digital transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
              >
                Schedule Consultation
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-slate-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">+1 302 464 0950</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
