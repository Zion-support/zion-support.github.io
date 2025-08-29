import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Workflow, 
  Truck, 
  TrendingUp, 
  Users, 
  Megaphone, 
  Scale, 
  GraduationCap,
  Zap,
  Globe,
  Database,
  Cloud,
  Lock,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  DollarSign
} from 'lucide-react';

const ServicesCatalog: React.FC = () => {
  const services = [
    {
      id: "ai-workflow-automation",
      title: "AI Workflow Automation Platform",
      description: "Intelligent process automation that learns, adapts, and optimizes your business workflows",
      category: "AI & Automation",
      price: 1299,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$1,299 - $3,999/month",
      features: ["Intelligent Process Discovery", "Adaptive Learning", "Multi-Platform Integration", "Real-time Analytics", "Custom Workflow Builder", "Compliance & Audit Trails"],
      benefits: ["Reduce manual processing time by 80%", "Eliminate human errors", "Scale operations without proportional headcount increase", "Improve customer response times by 60%"],
      icon: Workflow,
      color: "from-purple-500 to-pink-500",
      website: "https://ziontechgroup.com/services/ai-workflow-automation",
      contactEmail: "kleber@ziontechgroup.com",
      contactPhone: "+1 302 464 0950"
    },
    {
      id: "ai-cybersecurity-suite",
      title: "AI-Powered Cybersecurity Suite",
      description: "Next-generation threat detection and response powered by artificial intelligence",
      category: "Cybersecurity",
      price: 2499,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$2,499 - $7,999/month",
      features: ["AI Threat Detection", "Behavioral Analytics", "Automated Incident Response", "Threat Intelligence", "Compliance Automation", "Cloud Security"],
      benefits: ["Reduce security incidents by 95%", "Detect threats 10x faster", "Automate 80% of security operations", "Achieve compliance with major standards"],
      icon: Shield,
      color: "from-red-500 to-pink-500",
      website: "https://ziontechgroup.com/services/ai-cybersecurity-suite",
      contactEmail: "kleber@ziontechgroup.com",
      contactPhone: "+1 302 464 0950"
    },
    {
      id: "ai-supply-chain-optimization",
      title: "AI-Powered Supply Chain Optimization",
      description: "Intelligent supply chain management that predicts, optimizes, and automates your operations",
      category: "AI & Supply Chain",
      price: 1899,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$1,899 - $5,999/month",
      features: ["Predictive Demand Forecasting", "Inventory Optimization", "Route Optimization", "Supplier Risk Management", "Real-time Visibility", "Automated Procurement"],
      benefits: ["Reduce supply chain costs by 25%", "Improve delivery times by 40%", "Eliminate stockouts and overstock situations", "Reduce inventory carrying costs by 30%"],
      icon: Truck,
      color: "from-blue-500 to-cyan-500",
      website: "https://ziontechgroup.com/services/ai-supply-chain-optimization",
      contactEmail: "kleber@ziontechgroup.com",
      contactPhone: "+1 302 464 0950"
    },
    {
      id: "ai-financial-trading-platform",
      title: "AI-Powered Financial Trading Platform",
      description: "Intelligent trading platform that uses AI to analyze markets, predict trends, and execute trades automatically",
      category: "AI & Financial Trading",
      price: 2999,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$2,999 - $9,999/month",
      features: ["AI Market Analysis", "Predictive Trading Signals", "Automated Trading", "Risk Management", "Multi-Asset Support", "Real-time Analytics"],
      benefits: ["Increase trading profits by 300%", "Reduce trading risks by 60%", "24/7 automated market monitoring", "Eliminate emotional trading decisions"],
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      website: "https://ziontechgroup.com/services/ai-financial-trading-platform",
      contactEmail: "kleber@ziontechgroup.com",
      contactPhone: "+1 302 464 0950"
    },
    {
      id: "ai-hr-platform",
      title: "AI-Powered HR Platform",
      description: "Intelligent human resources management that automates recruitment, optimizes performance, and enhances employee experience",
      category: "AI & Human Resources",
      price: 1599,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$1,599 - $4,999/month",
      features: ["AI-Powered Recruitment", "Performance Management", "Employee Analytics", "Automated Onboarding", "Talent Development", "Compliance Management"],
      benefits: ["Reduce hiring time by 60%", "Improve employee retention by 40%", "Increase employee satisfaction scores by 35%", "Automate 80% of HR administrative tasks"],
      icon: Users,
      color: "from-indigo-500 to-purple-500",
      website: "https://ziontechgroup.com/services/ai-hr-platform",
      contactEmail: "kleber@ziontechgroup.com",
      contactPhone: "+1 302 464 0950"
    },
    {
      id: "ai-marketing-automation",
      title: "AI-Powered Marketing Automation",
      description: "Intelligent marketing automation that personalizes campaigns, optimizes conversions, and scales your growth",
      category: "AI & Marketing",
      price: 1799,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$1,799 - $5,999/month",
      features: ["AI-Powered Personalization", "Predictive Analytics", "Automated Campaign Optimization", "Customer Journey Automation", "Advanced Segmentation", "Multi-Channel Orchestration"],
      benefits: ["Increase conversion rates by 300%", "Reduce customer acquisition costs by 50%", "Improve customer lifetime value by 200%", "Automate 90% of marketing tasks"],
      icon: Megaphone,
      color: "from-orange-500 to-red-500",
      website: "https://ziontechgroup.com/services/ai-marketing-automation",
      contactEmail: "kleber@ziontechgroup.com",
      contactPhone: "+1 302 464 0950"
    },
    {
      id: "ai-legal-research-platform",
      title: "AI-Powered Legal Research Platform",
      description: "Intelligent legal research that accelerates case analysis, improves accuracy, and reduces research time",
      category: "AI & Legal Technology",
      price: 2199,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$2,199 - $6,999/month",
      features: ["AI Case Analysis", "Predictive Case Outcomes", "Intelligent Document Review", "Legal Research Automation", "Compliance Monitoring", "Multi-Jurisdiction Support"],
      benefits: ["Reduce legal research time by 80%", "Improve case success rates by 60%", "Increase research accuracy by 90%", "Automate document review processes"],
      icon: Scale,
      color: "from-yellow-500 to-orange-500",
      website: "https://ziontechgroup.com/services/ai-legal-research-platform",
      contactEmail: "kleber@ziontechgroup.com",
      contactPhone: "+1 302 464 0950"
    },
    {
      id: "ai-education-platform",
      title: "AI-Powered Education Platform",
      description: "Intelligent learning platform that personalizes education, adapts to student needs, and improves learning outcomes",
      category: "AI & Education Technology",
      price: 1399,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$1,399 - $4,999/month",
      features: ["Personalized Learning Paths", "Intelligent Tutoring", "Adaptive Content", "Progress Analytics", "Interactive Assessments", "Collaborative Learning"],
      benefits: ["Improve learning outcomes by 200%", "Reduce student dropout rates by 60%", "Personalize education for every student", "Provide 24/7 intelligent tutoring"],
      icon: GraduationCap,
      color: "from-teal-500 to-blue-500",
      website: "https://ziontechgroup.com/services/ai-education-platform",
      contactEmail: "kleber@ziontechgroup.com",
      contactPhone: "+1 302 464 0950"
    }
  ];

  const categories = [...new Set(services.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI & IT Services Catalog - Zion Tech Group"
        description="Explore our comprehensive catalog of AI-powered services and IT solutions. From workflow automation to cybersecurity, we have the tools to transform your business."
        keywords="AI services, IT services, business automation, cybersecurity, supply chain optimization, financial trading, HR platform, marketing automation, legal research, education platform"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI & IT Services Catalog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of AI-powered services and IT solutions designed to transform your business operations, 
              enhance security, and drive innovation across all industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-white border border-slate-600"
                >
                  {category}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-500 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-slate-700 rounded-full text-sm text-gray-300 mb-4">
                    {service.category}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">${service.price.toLocaleString()}</span>
                    <span className="text-gray-400">/{service.pricingModel}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Market: {service.marketPrice}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={service.website}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    href={`mailto:${service.contactEmail}`}
                    className="w-full border border-slate-600 text-slate-300 px-6 py-3 rounded-lg font-semibold hover:border-slate-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Sales
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of AI and IT experts is ready to help you implement the right solutions for your business needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://ziontechgroup.com"
                className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Visit Website
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesCatalog;

