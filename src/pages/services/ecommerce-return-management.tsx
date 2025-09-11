import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  RotateCcw, 
  Package, 
  Truck, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Shield,
  MessageSquare,
  Filter,
  Search,
  Bell,
  Eye,
  Download,
  Upload,
  Share2,
  Settings,
  FileText,
  Database,
  Network,
  Globe,
  Smartphone,
  Monitor,
  Laptop,
  Server,
  Cloud,
  Lock,
  Code,
  Palette,
  Music,
  Video,
  BookOpen,
  Calendar,
  Heart,
  ShoppingBag,
  Briefcase,
  Home,
  Car,
  GraduationCap,
  Headphones,
  Camera,
  CreditCard,
  Building2,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  QrCode,
  Brain,
  Clock,
  Target,
  Users,
  BarChart3,
  Zap,
  RefreshCw,
  AlertCircle,
  CheckSquare,
  XCircle,
  Timer,
  DollarSign,
  Percent,
  TrendingDown
} from 'lucide-react';

const EcommerceReturnManagement = () => {
  const features = [
    {
      icon: RotateCcw,
      title: "Automated Return Processing",
      description: "Streamline return requests with automated approval workflows and instant label generation."
    },
    {
      icon: Package,
      title: "Smart Inventory Management",
      description: "Automatically update inventory levels and track returned items through the entire process."
    },
    {
      icon: Truck,
      title: "Shipping Integration",
      description: "Seamlessly integrate with major carriers for automated shipping label generation and tracking."
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Analyze return patterns and reasons to identify product issues and reduce future returns."
    },
    {
      icon: Shield,
      title: "Fraud Prevention",
      description: "Advanced fraud detection algorithms to prevent return abuse and protect your business."
    },
    {
      icon: BarChart3,
      title: "Comprehensive Reporting",
      description: "Detailed analytics and reports on return rates, costs, and customer satisfaction."
    }
  ];

  const benefits = [
    "Reduce return processing time by 70%",
    "Decrease return fraud by 85%",
    "Improve customer satisfaction by 45%",
    "Lower return processing costs by 60%",
    "Automate 90% of return workflows",
    "Real-time inventory updates"
  ];

  const returnReasons = [
    {
      icon: Package,
      title: "Product Defects",
      description: "Track and analyze product quality issues to improve manufacturing processes."
    },
    {
      icon: Users,
      title: "Customer Dissatisfaction",
      description: "Identify patterns in customer complaints to enhance product descriptions and quality."
    },
    {
      icon: Truck,
      title: "Shipping Issues",
      description: "Monitor shipping-related returns to optimize logistics and packaging."
    },
    {
      icon: FileText,
      title: "Wrong Item Sent",
      description: "Reduce fulfillment errors with better inventory management and quality control."
    },
    {
      icon: Clock,
      title: "Late Delivery",
      description: "Track delivery performance and optimize shipping methods for better customer experience."
    },
    {
      icon: DollarSign,
      title: "Price Changes",
      description: "Handle price adjustment returns and track pricing strategy effectiveness."
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$79/month",
      description: "Perfect for small e-commerce stores",
      features: [
        "Up to 500 returns/month",
        "Basic automation",
        "Standard reporting",
        "Email support",
        "Basic fraud detection"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 2,000 returns/month",
        "Advanced automation",
        "Detailed analytics",
        "Priority support",
        "Advanced fraud detection",
        "Custom workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499/month",
      description: "For large e-commerce operations",
      features: [
        "Unlimited returns",
        "Full automation suite",
        "Custom integrations",
        "Dedicated support",
        "White-label solution",
        "API access"
      ],
      popular: false
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Return Request",
      description: "Customer submits return request through your website or app"
    },
    {
      step: "2",
      title: "Automated Review",
      description: "AI analyzes the request and automatically approves or flags for review"
    },
    {
      step: "3",
      title: "Label Generation",
      description: "Automatically generate and send return shipping labels to customers"
    },
    {
      step: "4",
      title: "Tracking & Updates",
      description: "Real-time tracking of return shipments and status updates"
    },
    {
      step: "5",
      title: "Processing & Refund",
      description: "Automated processing, inventory updates, and refund processing"
    },
    {
      step: "6",
      title: "Analytics & Insights",
      description: "Comprehensive reporting and insights for continuous improvement"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <Helmet>
        <title>E-Commerce Return Management SaaS - Zion Tech Group</title>
        <meta name="description" content="Automate your e-commerce return process with our intelligent platform. Reduce processing time by 70% and improve customer satisfaction with streamlined return management." />
        <meta name="keywords" content="e-commerce returns, return management, return automation, e-commerce SaaS, return processing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <ShoppingCart className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              E-Commerce Return Management SaaS
            </h1>
            <p className="text-xl mb-8 text-orange-100">
              Streamline your return process with intelligent automation. Reduce processing time by 70%, 
              decrease fraud by 85%, and improve customer satisfaction with our comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                +1 302 464 0950
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Streamlined Return Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our automated platform handles every step of the return process, 
              from initial request to final refund and inventory update.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Return Management Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides everything you need to manage returns 
              efficiently and profitably.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-orange-100 rounded-xl w-fit mb-6">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Return Reasons Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Return Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track and analyze return reasons to identify patterns and improve your 
              products, processes, and customer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {returnReasons.map((reason, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-red-100 rounded-xl w-fit mb-6">
                  <reason.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Return Management Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your return process from a cost center into a competitive advantage 
              with our intelligent automation platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white p-6 rounded-xl shadow-md">
                <CheckCircle className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your e-commerce return volume. All plans include 
              our core automation features with no setup fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg relative ${tier.popular ? 'ring-2 ring-orange-500 transform scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">{tier.price}</div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    tier.popular
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Streamline Your Returns?
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            Join thousands of e-commerce businesses using our return management platform 
            to reduce costs, improve efficiency, and enhance customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              +1 302 464 0950
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceReturnManagement;