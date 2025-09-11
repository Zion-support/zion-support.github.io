import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Brain, 
  Target, 
  Zap, 
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
  ShoppingCart,
  Headphones,
  Camera,
  CreditCard,
  Building2,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  QrCode,
  Clock,
  Award,
  Trophy,
  UserCheck,
  UserPlus,
  UserX,
  UserSearch,
  UserCog,
  BarChart3,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon
} from 'lucide-react';

const AITalentMatching = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Advanced algorithms analyze skills, experience, and project requirements for optimal talent matching."
    },
    {
      icon: Target,
      title: "Precision Matching",
      description: "Match candidates with 95% accuracy based on technical skills, soft skills, and cultural fit."
    },
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "Find and deploy qualified talent in 24-48 hours instead of weeks of traditional hiring."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All candidates are pre-screened, tested, and verified before matching with your projects."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track project success rates, candidate performance, and satisfaction metrics."
    },
    {
      icon: Users,
      title: "Global Talent Pool",
      description: "Access to over 100,000 pre-vetted tech professionals from around the world."
    }
  ];

  const benefits = [
    "Reduce hiring time by 80%",
    "Increase project success rate by 60%",
    "Access to 100,000+ pre-vetted professionals",
    "95% matching accuracy",
    "24-48 hour deployment",
    "Cost savings of up to 40%"
  ];

  const talentCategories = [
    {
      icon: Code,
      title: "Software Development",
      description: "Full-stack developers, mobile app developers, and specialized programmers."
    },
    {
      icon: Database,
      title: "Data Science & AI",
      description: "Data scientists, ML engineers, AI specialists, and analytics experts."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Security analysts, penetration testers, and compliance specialists."
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Cloud architects, DevOps engineers, and infrastructure specialists."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User experience designers, interface designers, and design system experts."
    },
    {
      icon: BarChart3,
      title: "Product Management",
      description: "Product managers, scrum masters, and agile coaches."
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$199/month",
      description: "Perfect for small projects",
      features: [
        "Up to 5 talent matches/month",
        "Basic AI matching",
        "Standard screening",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 25 talent matches/month",
        "Advanced AI matching",
        "Premium screening",
        "Priority support",
        "Advanced analytics",
        "Custom requirements"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,499/month",
      description: "For large organizations",
      features: [
        "Unlimited talent matches",
        "Premium AI matching",
        "Dedicated account manager",
        "Custom integrations",
        "White-label solution",
        "24/7 support"
      ],
      popular: false
    }
  ];

  const successMetrics = [
    { metric: "95%", label: "Matching Accuracy" },
    { metric: "80%", label: "Time Reduction" },
    { metric: "60%", label: "Success Rate Increase" },
    { metric: "100K+", label: "Talent Pool Size" },
    { metric: "24-48h", label: "Deployment Time" },
    { metric: "40%", label: "Cost Savings" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Helmet>
        <title>AI-Powered Talent Matching Platform - Zion Tech Group</title>
        <meta name="description" content="Match businesses with tech professionals using AI algorithms. Reduce hiring time by 80% and increase project success rate by 60% with our intelligent talent matching platform." />
        <meta name="keywords" content="AI talent matching, tech recruitment, talent acquisition, AI hiring, tech professionals, project matching" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Users className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              AI-Powered Talent Matching Platform
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Connect with the perfect tech professionals for your projects using advanced AI algorithms. 
              Reduce hiring time by 80% and increase project success rate by 60%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300 flex items-center justify-center"
              >
                Find Talent Now
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

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{item.metric}</div>
                <div className="text-gray-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Matching Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform uses machine learning to analyze skills, experience, 
              and project requirements for optimal talent matching.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-purple-100 rounded-xl w-fit mb-6">
                  <feature.icon className="h-8 w-8 text-purple-600" />
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

      {/* Talent Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Talent Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access specialized talent across all major tech domains with our 
              comprehensive talent pool of 100,000+ professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talentCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-blue-100 rounded-xl w-fit mb-6">
                  <category.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Talent Matching?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of talent acquisition with AI-powered matching 
              that delivers better results faster and more cost-effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white p-6 rounded-xl shadow-md">
                <CheckCircle className="h-6 w-6 text-purple-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your talent acquisition needs. All plans include 
              our core AI matching features with transparent pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg relative ${tier.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{tier.price}</div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    tier.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Perfect Tech Talent?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Join thousands of companies using our AI-powered talent matching platform 
            to find and deploy the right professionals for their projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300 flex items-center justify-center"
            >
              Start Matching Today
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
              <Phone className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-purple-400 mb-4" />
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

export default AITalentMatching;