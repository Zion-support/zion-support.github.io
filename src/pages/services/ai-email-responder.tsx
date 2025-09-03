import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Brain, 
  Zap, 
  Target, 
  Users, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Phone,
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
  ShoppingCart,
  Headphones,
  Camera,
  CreditCard,
  Building2,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  QrCode
} from 'lucide-react';

const AIEmailResponder = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Response Generation",
      description: "Automatically generates contextual, professional email responses using advanced natural language processing."
    },
    {
      icon: Filter,
      title: "Smart Email Categorization",
      description: "Intelligently categorizes incoming emails by priority, type, and urgency for better organization."
    },
    {
      icon: Clock,
      title: "24/7 Automated Responses",
      description: "Provides instant responses to common inquiries, ensuring customers never wait for basic information."
    },
    {
      icon: Target,
      title: "Personalized Communication",
      description: "Tailors responses based on customer history, preferences, and communication patterns."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Tracks response times, customer satisfaction, and email engagement metrics."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Ensures all automated responses comply with industry regulations and security standards."
    }
  ];

  const benefits = [
    "Reduce response time by 90%",
    "Increase customer satisfaction by 40%",
    "Handle 10x more emails with same team",
    "Eliminate repetitive email tasks",
    "Improve email organization and tracking",
    "Scale customer support operations"
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$99/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 emails/month",
        "Basic AI responses",
        "Email categorization",
        "Standard analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 10,000 emails/month",
        "Advanced AI responses",
        "Smart categorization",
        "Detailed analytics",
        "Priority support",
        "Custom templates"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799/month",
      description: "For large organizations",
      features: [
        "Unlimited emails",
        "Premium AI responses",
        "Advanced automation",
        "Custom integrations",
        "Dedicated support",
        "White-label options"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>AI-Powered Email Responder - Zion Tech Group</title>
        <meta name="description" content="Automate email responses with AI-powered intelligence. Reduce response time by 90% and increase customer satisfaction with our smart email automation platform." />
        <meta name="keywords" content="AI email responder, email automation, customer support, AI responses, email management" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Mail className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              AI-Powered Email Responder
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Transform your email management with intelligent automation. Our AI-powered platform 
              generates contextual responses, categorizes emails, and provides 24/7 customer support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center"
              >
                Get Started Today
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI email responder combines advanced machine learning with intuitive design 
              to revolutionize your email management workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-blue-100 rounded-xl w-fit mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Email Responder?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of AI-driven email automation that transforms your 
              customer communication and boosts operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white p-6 rounded-xl shadow-md">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
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
              Choose the plan that fits your business needs. All plans include our core AI features 
              with no hidden fees or setup costs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg relative ${tier.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{tier.price}</div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    tier.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Email Management?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI email responder to streamline 
            their communication and boost customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center"
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
              <Phone className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-blue-400 mb-4" />
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

export default AIEmailResponder;