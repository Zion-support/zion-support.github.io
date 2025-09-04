import React from 'react';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Globe,
  TrendingUp,
  Lock,
  BarChart3,
  Cpu,
  Database,
  Smartphone,
  Code,
  Target,
  Rocket,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const HomePage: React.FC = () => {
  const microSaasServices = [
    {
      title: "AI Content Generator Pro",
      description: "Generate high-quality content for blogs, social media, and marketing materials using advanced AI.",
      features: ["SEO-optimized content", "Multiple content types", "Brand voice customization", "Plagiarism detection"],
      icon: Brain,
      price: "$29/month",
      category: "AI Tools",
      popular: true
    },
    {
      title: "Smart Analytics Dashboard",
      description: "Real-time business analytics with AI-powered insights and predictive forecasting.",
      features: ["Real-time metrics", "Predictive analytics", "Custom reports", "Mobile app"],
      icon: BarChart3,
      price: "$49/month",
      category: "Analytics",
      popular: true
    },
    {
      title: "Automated Customer Support",
      description: "AI-powered chatbot that handles customer inquiries 24/7 with human-like responses.",
      features: ["Multi-language support", "Integration APIs", "Analytics dashboard", "Custom training"],
      icon: Users,
      price: "$39/month",
      category: "Customer Service"
    },
    {
      title: "Code Review Assistant",
      description: "AI-powered code review tool that catches bugs, suggests improvements, and enforces best practices.",
      features: ["Multi-language support", "Security scanning", "Performance analysis", "Team collaboration"],
      icon: Code,
      price: "$79/month",
      category: "Development Tools"
    },
    {
      title: "Social Media Scheduler",
      description: "Schedule and optimize social media posts across all platforms with AI-powered timing.",
      features: ["Multi-platform posting", "Optimal timing", "Content suggestions", "Analytics"],
      icon: Globe,
      price: "$19/month",
      category: "Marketing"
    },
    {
      title: "Invoice & Payment Manager",
      description: "Automated invoicing system with payment processing and financial tracking.",
      features: ["Auto-invoicing", "Payment processing", "Expense tracking", "Tax reporting"],
      icon: TrendingUp,
      price: "$25/month",
      category: "Finance"
    }
  ];

  const aiServices = [
    {
      title: "Custom AI Model Development",
      description: "Build tailored AI models for your specific business needs and data.",
      features: ["Custom model training", "Data preprocessing", "Model optimization", "Deployment support"],
      icon: Cpu,
      price: "Starting at $15,000"
    },
    {
      title: "AI-Powered Process Automation",
      description: "Automate complex business processes using intelligent AI solutions.",
      features: ["Workflow automation", "Document processing", "Decision automation", "ROI tracking"],
      icon: Zap,
      price: "Starting at $8,500"
    },
    {
      title: "Computer Vision Solutions",
      description: "Implement visual recognition and image analysis for various business applications.",
      features: ["Object detection", "Quality control", "Security monitoring", "Medical imaging"],
      icon: Target,
      price: "Starting at $12,000"
    }
  ];

  const itServices = [
    {
      title: "Cloud Infrastructure Management",
      description: "Complete cloud setup, migration, and ongoing management services.",
      features: ["AWS/Azure/GCP expertise", "Cost optimization", "Security hardening", "24/7 monitoring"],
      icon: Cloud,
      price: "Starting at $3,500/month"
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions to protect your business from threats.",
      features: ["Security audits", "Threat monitoring", "Compliance management", "Incident response"],
      icon: Shield,
      price: "Starting at $4,200/month"
    },
    {
      title: "Database Optimization",
      description: "Expert database design, optimization, and maintenance services.",
      features: ["Performance tuning", "Backup strategies", "Security hardening", "Scalability planning"],
      icon: Database,
      price: "Starting at $2,800/month"
    }
  ];

  const stats = [
    { label: "Years of Experience", value: "15+" },
    { label: "Micro SAAS Products", value: "25+" },
    { label: "AI Models Deployed", value: "100+" },
    { label: "Client Satisfaction", value: "99.2%" },
    { label: "Uptime Guarantee", value: "99.9%" },
    { label: "Countries Served", value: "50+" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Zion Tech Group
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-blue-100">
              Innovative Micro SAAS, AI & IT Solutions for Modern Businesses
            </p>
            <p className="text-lg md:text-xl mb-12 text-blue-200 max-w-4xl mx-auto">
              Transform your business with cutting-edge technology solutions. From AI-powered tools to comprehensive IT services, 
              we deliver innovative solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                Explore Services
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Micro SAAS Services */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Powerful, affordable software solutions designed to solve specific business challenges. 
              Start small, scale fast, and grow your business with our innovative tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${service.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">{service.price}</span>
                  <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    Try Free <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Services */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI Services & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations, 
              improve decision-making, and create competitive advantages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-purple-600">{service.price}</span>
                  <button className="flex items-center text-purple-600 hover:text-purple-800 font-medium">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IT Services */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              IT Services & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive IT solutions to keep your business secure, efficient, and competitive. 
              From infrastructure management to cybersecurity, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-green-600">{service.price}</span>
                  <button className="flex items-center text-green-600 hover:text-green-800 font-medium">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapid Innovation</h3>
              <p className="text-gray-600">Cutting-edge solutions delivered quickly with agile development methodologies.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Security First</h3>
              <p className="text-gray-600">Enterprise-grade security measures to protect your data and systems.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with years of experience in enterprise solutions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of successful implementations and satisfied clients.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Let our experts help you identify opportunities and implement solutions that deliver measurable results. 
              Get started with a free consultation today.
            </p>
            
            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-400 mr-3" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-300">+1 302 464 0950</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-400 mr-3" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-300">kleber@ziontechgroup.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-400 mr-3" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-lg">
                Download Service Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;