import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  TrendingUp, 
  Users, 
  Shield, 
  Cloud, 
  Brain, 
  Zap, 
  Target, 
  BarChart3, 
  Smartphone,
  CreditCard,
  Package,
  Truck,
  Store,
  Globe,
  Lock,
  Activity,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lightbulb,
  Rocket,
  Building2,
  Network,
  Database,
  Workflow,
  MessageCircle,
  Calendar,
  FileText,
  Video,
  BookOpen,
  Users2,
  Cog,
  Monitor,
  Smartphone as MobileIcon,
  Wifi,
  Satellite,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  MessageSquare,
  PieChart,
  LineChart,
  BarChart,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  BarChart as BarChartIcon2
} from 'lucide-react';

export default function RetailSolutions() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Omnichannel Commerce",
      description: "Seamlessly integrate online and offline shopping experiences with unified inventory and customer data management."
    },
    {
      icon: Brain,
      title: "AI-Powered Personalization",
      description: "Deliver personalized shopping experiences using advanced AI algorithms for product recommendations and targeted marketing."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast demand, optimize pricing, and improve inventory management with machine learning-powered insights."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Protect customer data and transactions with enterprise-grade cybersecurity and fraud detection systems."
    },
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      description: "Scalable, resilient infrastructure that grows with your business and ensures high availability."
    },
    {
      icon: Users,
      title: "Customer Experience Management",
      description: "Comprehensive tools for managing customer journeys, loyalty programs, and satisfaction metrics."
    }
  ];

  const solutions = [
    {
      category: "E-commerce Platforms",
      items: [
        "AI-Powered Product Recommendations",
        "Personalized Shopping Experiences",
        "Multi-channel Inventory Management",
        "Advanced Search & Filtering",
        "Mobile-First Design",
        "Progressive Web Apps (PWA)"
      ]
    },
    {
      category: "Retail Analytics",
      items: [
        "Customer Behavior Analysis",
        "Sales Performance Tracking",
        "Inventory Optimization",
        "Demand Forecasting",
        "Price Optimization",
        "Competitive Intelligence"
      ]
    },
    {
      category: "Supply Chain Management",
      items: [
        "Real-time Inventory Tracking",
        "Automated Replenishment",
        "Supplier Management",
        "Logistics Optimization",
        "Returns Management",
        "Quality Control"
      ]
    },
    {
      category: "Customer Engagement",
      items: [
        "Loyalty Programs",
        "Personalized Marketing",
        "Customer Support Automation",
        "Social Media Integration",
        "Email Marketing Automation",
        "SMS & Push Notifications"
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Revenue",
      description: "Drive sales growth through personalized experiences and optimized operations"
    },
    {
      icon: Users,
      title: "Enhanced Customer Satisfaction",
      description: "Improve customer loyalty and retention with seamless shopping experiences"
    },
    {
      icon: Cog,
      title: "Operational Efficiency",
      description: "Streamline processes and reduce costs through automation and optimization"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Protect against fraud, data breaches, and operational disruptions"
    }
  ];

  const technologies = [
    { name: "AI & Machine Learning", icon: Brain, description: "Advanced algorithms for personalization and automation" },
    { name: "Cloud Computing", icon: Cloud, description: "Scalable infrastructure and services" },
    { name: "IoT & Edge Computing", icon: Wifi, description: "Real-time data collection and processing" },
    { name: "Blockchain", icon: Network, description: "Secure transactions and supply chain transparency" },
    { name: "Big Data Analytics", icon: BarChart3, description: "Comprehensive insights and reporting" },
    { name: "Mobile Technologies", icon: Smartphone, description: "Cross-platform mobile solutions" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 text-zion-purple text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Industry Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Retail Technology
              <span className="block text-zion-cyan">Solutions</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              Transform your retail business with cutting-edge AI, cloud, and digital solutions. 
              Enhance customer experiences, optimize operations, and drive growth in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-zion-purple/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:border-zion-cyan hover:text-zion-cyan transition-all duration-300"
              >
                Contact Sales
                <MessageSquare className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group for Retail?
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our comprehensive retail solutions combine cutting-edge technology with deep industry expertise 
              to deliver measurable business outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-zion-purple/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Retail Solutions
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              From e-commerce platforms to supply chain optimization, we provide end-to-end solutions 
              that address every aspect of modern retail operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-zion-cyan mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  {solution.category}
                </h3>
                <ul className="space-y-3">
                  {solution.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Benefits
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our retail solutions deliver measurable improvements across all key business metrics, 
              helping you stay competitive in an evolving market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zinc-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              We leverage the latest technologies to deliver innovative retail solutions that 
              provide competitive advantages and future-proof your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-zion-purple/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center mb-4">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-zinc-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Retail Business?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Join leading retailers who have already transformed their operations with Zion Tech Group's 
              innovative solutions. Let's discuss how we can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-zion-purple/25"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:border-zion-cyan hover:text-zion-cyan transition-all duration-300"
              >
                View Case Studies
                <FileText className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Other Industry Solutions
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Discover how our technology solutions can transform other industries and business processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/solutions/healthcare"
              className="group bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                Healthcare Solutions
              </h3>
              <p className="text-zinc-300 mb-4">
                AI-powered healthcare analytics, patient management, and clinical decision support systems.
              </p>
              <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/solutions/financial"
              className="group bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                Financial Solutions
              </h3>
              <p className="text-zinc-300 mb-4">
                Advanced trading platforms, risk management, and financial analytics powered by AI.
              </p>
              <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/solutions/manufacturing"
              className="group bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Cog className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                Manufacturing Solutions
              </h3>
              <p className="text-zinc-300 mb-4">
                Smart manufacturing, predictive maintenance, and supply chain optimization with IoT and AI.
              </p>
              <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}