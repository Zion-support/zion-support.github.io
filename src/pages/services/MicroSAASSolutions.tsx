import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Code, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  BarChart3,
  Brain,
  Database,
  Cloud,
  Lock,
  Smartphone,
  Target,
  Palette,
  FileText,
  Video,
  Music,
  Camera,
  Car,
  Home,
  ShoppingCart,
  CreditCard,
  Calendar,
  MessageSquare,
  FileImage,
  Monitor,
  Server,
  Network,
  Key,
  Eye,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Star,
  Award,
  Lightbulb,
  Compass,
  Layers,
  GitBranch,
  Zap as Lightning,
  Globe as World,
  Shield as Security,
  Heart,
  Leaf,
  Sun,
  Moon,
  Wind,
  Droplets,
  Flame,
  Snowflake,
  Package,
  BookOpen,
  Factory,
  ShoppingBag,
  Atom
} from 'lucide-react';

export default function MicroSAASSolutions() {
  const services = [
    {
      title: "AI-Powered Content Generation Platform",
      description: "Advanced AI content creation tool for blogs, social media, and marketing materials with SEO optimization.",
      icon: Brain,
      features: ["GPT-4 integration", "SEO optimization", "Multi-language support", "Brand voice customization"],
      price: "$99/month",
      marketPrice: "$199/month",
      benefits: ["Save 20+ hours/week", "Improve SEO rankings", "Increase engagement by 40%"]
    },
    {
      title: "Intelligent Project Management Suite",
      description: "AI-driven project management with predictive analytics, resource optimization, and automated reporting.",
      icon: Target,
      features: ["AI task prioritization", "Resource forecasting", "Automated reporting", "Team collaboration"],
      price: "$149/month",
      marketPrice: "$299/month",
      benefits: ["Reduce project delays by 30%", "Improve team productivity", "Real-time insights"]
    },
    {
      title: "Smart Customer Relationship Manager",
      description: "AI-powered CRM with predictive analytics, automated follow-ups, and intelligent lead scoring.",
      icon: Users,
      features: ["AI lead scoring", "Automated follow-ups", "Predictive analytics", "Integration APIs"],
      price: "$79/month",
      marketPrice: "$149/month",
      benefits: ["Increase conversions by 35%", "Reduce manual work by 60%", "Better customer insights"]
    },
    {
      title: "Automated Social Media Manager",
      description: "AI social media automation with content scheduling, engagement analysis, and trend prediction.",
      icon: Globe,
      features: ["AI content scheduling", "Engagement analytics", "Trend prediction", "Multi-platform posting"],
      price: "$69/month",
      marketPrice: "$129/month",
      benefits: ["Save 15+ hours/week", "Increase engagement by 50%", "Better content timing"]
    },
    {
      title: "Intelligent Email Marketing Platform",
      description: "AI email marketing with personalization, A/B testing automation, and predictive analytics.",
      icon: MessageSquare,
      features: ["AI personalization", "Automated A/B testing", "Predictive analytics", "Smart segmentation"],
      price: "$89/month",
      marketPrice: "$179/month",
      benefits: ["Improve open rates by 45%", "Increase click-through by 60%", "Automated optimization"]
    },
    {
      title: "Smart Analytics Dashboard",
      description: "AI-powered business intelligence with predictive analytics, automated insights, and custom reporting.",
      icon: BarChart3,
      features: ["Predictive analytics", "Automated insights", "Custom reporting", "Real-time monitoring"],
      price: "$129/month",
      marketPrice: "$249/month",
      benefits: ["Make data-driven decisions", "Identify trends early", "Automated reporting"]
    },
    {
      title: "AI-Powered HR Management System",
      description: "Intelligent HR platform with automated recruitment, performance tracking, and employee engagement.",
      icon: Building,
      features: ["AI recruitment", "Performance tracking", "Employee engagement", "Compliance management"],
      price: "$199/month",
      marketPrice: "$399/month",
      benefits: ["Reduce hiring time by 50%", "Improve retention by 25%", "Automated compliance"]
    },
    {
      title: "Smart Financial Management Tool",
      description: "AI financial platform with expense tracking, budgeting automation, and financial forecasting.",
      icon: DollarSign,
      features: ["AI expense tracking", "Budget automation", "Financial forecasting", "Tax preparation"],
      price: "$59/month",
      marketPrice: "$119/month",
      benefits: ["Save money on expenses", "Better financial planning", "Automated tax prep"]
    },
    {
      title: "Intelligent Inventory Management",
      description: "AI inventory system with demand prediction, automated reordering, and supply chain optimization.",
      icon: Package,
      features: ["Demand prediction", "Automated reordering", "Supply chain optimization", "Real-time tracking"],
      price: "$179/month",
      marketPrice: "$349/month",
      benefits: ["Reduce stockouts by 70%", "Optimize inventory costs", "Improve cash flow"]
    },
    {
      title: "Smart Legal Document Generator",
      description: "AI legal document creation with contract templates, compliance checking, and automated review.",
      icon: FileText,
      features: ["Contract templates", "Compliance checking", "Automated review", "Legal research"],
      price: "$139/month",
      marketPrice: "$279/month",
      benefits: ["Save on legal fees", "Faster document creation", "Reduce legal risks"]
    },
    {
      title: "AI-Powered Video Editor",
      description: "Intelligent video editing with automated cuts, effects, and professional-quality output.",
      icon: Video,
      features: ["Automated editing", "AI effects", "Professional templates", "Cloud rendering"],
      price: "$79/month",
      marketPrice: "$159/month",
      benefits: ["Save editing time by 80%", "Professional quality", "Easy to use"]
    },
    {
      title: "Smart E-commerce Analytics",
      description: "AI e-commerce insights with customer behavior analysis, conversion optimization, and trend prediction.",
      icon: ShoppingCart,
      features: ["Customer behavior analysis", "Conversion optimization", "Trend prediction", "A/B testing"],
      price: "$159/month",
      marketPrice: "$299/month",
      benefits: ["Increase sales by 40%", "Better customer insights", "Optimized conversions"]
    }
  ];

  const emergingServices = [
    {
      title: "Quantum Computing as a Service",
      description: "Access to quantum computing resources for complex calculations and research.",
      icon: Atom,
      price: "$999/month",
      marketPrice: "$2,499/month",
      status: "Early Access"
    },
    {
      title: "AI Consciousness Platform",
      description: "Advanced AI systems with consciousness simulation and ethical AI development.",
      icon: Brain,
      price: "$499/month",
      marketPrice: "$999/month",
      status: "Beta"
    },
    {
      title: "Blockchain Identity Management",
      description: "Decentralized identity verification with blockchain security and privacy protection.",
      icon: Shield,
      price: "$89/month",
      marketPrice: "$179/month",
      status: "Live"
    },
    {
      title: "IoT Device Management Suite",
      description: "Comprehensive IoT device management with AI monitoring and predictive maintenance.",
      icon: Cpu,
      price: "$129/month",
      marketPrice: "$249/month",
      status: "Live"
    }
  ];

  const benefits = [
    {
      title: "Rapid Deployment",
      description: "Quick time-to-market with agile development methodologies",
      icon: Zap,
      details: "Deploy in weeks, not months"
    },
    {
      title: "AI-Powered Intelligence",
      description: "Built-in artificial intelligence for automation and insights",
      icon: Brain,
      details: "Smart automation saves time"
    },
    {
      title: "Scalability",
      description: "Built to grow with your business from day one",
      icon: TrendingUp,
      details: "Grow without limits"
    },
    {
      title: "Cost Efficiency",
      description: "Reduced infrastructure costs with cloud-native solutions",
      icon: DollarSign,
      details: "Save up to 60% on costs"
    },
    {
      title: "Enterprise Security",
      description: "Enterprise-grade security and compliance standards",
      icon: Shield,
      details: "SOC 2, GDPR, HIPAA compliant"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance",
      icon: Clock,
      details: "Always here when you need us"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant patient management systems",
      icon: Heart,
      services: ["Patient portals", "Telemedicine", "Medical records", "Billing automation"]
    },
    {
      name: "Finance",
      description: "Regulatory-compliant financial tools",
      icon: CreditCard,
      services: ["Trading platforms", "Risk management", "Compliance tools", "Portfolio tracking"]
    },
    {
      name: "Education",
      description: "Learning management and student tracking",
      icon: BookOpen,
      services: ["LMS platforms", "Student analytics", "Course creation", "Assessment tools"]
    },
    {
      name: "Real Estate",
      description: "Property management and client portals",
      icon: Home,
      services: ["Property listings", "Client management", "Document automation", "Market analysis"]
    },
    {
      name: "Manufacturing",
      description: "Smart manufacturing and supply chain solutions",
      icon: Factory,
      services: ["Production tracking", "Quality control", "Supply chain", "Predictive maintenance"]
    },
    {
      name: "Retail",
      description: "Omnichannel retail and customer experience",
      icon: ShoppingBag,
      services: ["POS systems", "Inventory management", "Customer analytics", "E-commerce"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 users",
        "Basic AI features",
        "Email support",
        "Standard integrations",
        "1GB storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 users",
        "Advanced AI features",
        "Priority support",
        "Custom integrations",
        "10GB storage",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Full AI capabilities",
        "24/7 support",
        "Custom development",
        "Unlimited storage",
        "White-label options"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(138,43,226,0.1),transparent_50%)]"></div>
      </div>

      <SEO 
        title="Micro SAAS Solutions - Zion Tech Group" 
        description="Innovative AI-powered micro SAAS solutions designed for rapid deployment, scalability, and business growth across industries. Save up to 60% on costs with our intelligent automation platforms."
        keywords="micro SAAS, AI software, business automation, subscription management, multi-tenant, API development, business software, AI tools, automation platform"
        canonical="https://ziontechgroup.com/services/micro-saas-solutions"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/80 to-blue-900/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2 animate-pulse" />
            AI-Powered Micro SAAS Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Micro SAAS Solutions
            </span>
            <span className="block text-3xl md:text-4xl text-gray-300 mt-4 font-light">
              AI-Powered • Rapid Deployment • Maximum Impact
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business ideas into powerful, intelligent software solutions with our cutting-edge micro SAAS 
            development services. Leverage AI automation, save up to 60% on costs, and deploy in weeks, not months.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              View Portfolio
            </button>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Micro SAAS Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              From AI content generation to intelligent project management, we provide cutting-edge micro SAAS solutions 
              that accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-400 font-medium">
                      Save {Math.round((1 - parseInt(service.price.replace('$', '')) / parseInt(service.marketPrice.replace('$', ''))) * 100)}%
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-20 bg-gray-900/30 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Emerging Technology Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Stay ahead of the curve with our cutting-edge emerging technology micro SAAS solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergingServices.map((service, index) => (
              <div key={index} className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                    {service.status}
                  </span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 text-center">
                  {service.description}
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                  <div className="text-sm text-gray-500 line-through">{service.marketPrice}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Why Choose Our Micro SAAS Solutions?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Experience the advantages of rapid development, AI-powered intelligence, and cost-effective solutions 
              designed for modern business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 mb-2">
                  {benefit.description}
                </p>
                <p className="text-sm text-green-400 font-medium">
                  {benefit.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-900/30 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Transparent Pricing Plans
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI features and 24/7 support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/25' 
                  : 'border-gray-700/50 hover:border-cyan-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:scale-105'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Industry-Specific Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Tailored micro SAAS solutions designed for the unique requirements and compliance needs of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center group-hover:text-blue-400 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4 text-center">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  {industry.services.map((service, idx) => (
                    <div key={idx} className="text-xs text-blue-300 bg-blue-500/10 px-2 py-1 rounded text-center">
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Join thousands of businesses already using our AI-powered micro SAAS solutions to accelerate growth, 
            reduce costs, and stay ahead of the competition.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>
          <div className="text-center text-gray-400">
            <p className="mb-2">Contact us for custom enterprise solutions</p>
            <p className="text-sm">
              📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a> | 
              📧 <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a>
            </p>
            <p className="text-sm mt-2">
              📍 364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}