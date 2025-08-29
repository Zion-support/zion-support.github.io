import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Heart, 
  Globe, 
  ShoppingCart, 
  MessageCircle, 
  Users, 
  BookOpen, 
  DollarSign,
  Zap,
  Truck,
  Package,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Settings,
  Monitor,
  Lock,
  Eye,
  Clock,
  BarChart3,
  Target,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      services: [
        {
          name: "AI Business Intelligence",
          description: "Transform data into actionable insights with machine learning and predictive analytics",
          href: "/services/ai-business-intelligence",
          price: "$1,299/month",
          features: ["Predictive analytics", "Real-time dashboards", "Custom ML models", "API access"],
          benefits: ["Increase revenue by 25%", "Reduce decision time by 60%", "95% prediction accuracy"]
        },
        {
          name: "AI Sales Copilot",
          description: "AI-powered sales automation that closes deals faster and increases conversion rates",
          href: "/services/ai-sales-copilot",
          price: "$799/month",
          features: ["Lead scoring", "Email automation", "Sales forecasting", "CRM integration"],
          benefits: ["45% increase in conversions", "3x faster deal closure", "Automated follow-ups"]
        },
        {
          name: "AI Workflow Automation",
          description: "Intelligent automation that learns and optimizes your business processes",
          href: "/services/ai-workflow-automation",
          price: "$299/month",
          features: ["Visual workflow builder", "AI decision making", "24/7 automation", "Performance analytics"],
          benefits: ["Reduce costs by 30%", "5x faster processes", "Zero manual errors"]
        },
        {
          name: "AI Customer Success Platform",
          description: "AI-powered customer retention and expansion revenue optimization",
          href: "/services/ai-customer-success-platform",
          price: "$499/month",
          features: ["Predictive churn detection", "Personalized success plans", "Real-time engagement", "Automated workflows"],
          benefits: ["40% reduction in churn", "25% increase in CLV", "3x efficiency gain"]
        },
        {
          name: "AI Data Governance Platform",
          description: "AI-powered data discovery, compliance automation, and intelligent access control",
          href: "/services/ai-data-governance-platform",
          price: "$599/month",
          features: ["AI data discovery", "Compliance automation", "Real-time monitoring", "Role-based access"],
          benefits: ["90% compliance risk reduction", "99.9% security uptime", "70% cost reduction"]
        },
        {
          name: "AI Supply Chain Optimization",
          description: "Revolutionize supply chain with AI-powered optimization and demand forecasting",
          href: "/services/ai-supply-chain-optimization",
          price: "$799/month",
          features: ["Route optimization", "Demand forecasting", "Global visibility", "Cost optimization"],
          benefits: ["30% transportation savings", "40% faster delivery", "25% inventory reduction"]
        }
      ]
    },
    {
      name: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment solutions",
      icon: Cloud,
      color: "from-blue-600 to-cyan-600",
      services: [
        {
          name: "Cloud DevOps",
          description: "End-to-end cloud infrastructure and CI/CD pipeline automation",
          href: "/services/cloud-devops",
          price: "$1,499/month",
          features: ["Multi-cloud deployment", "Auto-scaling", "CI/CD pipelines", "Monitoring & alerting"],
          benefits: ["99.9% uptime", "50% faster deployments", "Automated scaling"]
        },
        {
          name: "Cloud FinOps Optimizer",
          description: "AI-powered cloud cost optimization and financial operations management",
          href: "/services/cloud-finops-optimizer",
          price: "$899/month",
          features: ["Cost analysis", "Resource optimization", "Budget management", "ROI tracking"],
          benefits: ["40% cost reduction", "Real-time optimization", "Predictive cost management"]
        }
      ]
    },
    {
      name: "Digital Transformation",
      description: "End-to-end business process modernization and optimization",
      icon: Rocket,
      color: "from-green-600 to-emerald-600",
      services: [
        {
          name: "Digital Twin",
          description: "Create digital replicas of physical systems for simulation and optimization",
          href: "/services/digital-twin",
          price: "$2,499/month",
          features: ["3D modeling", "Real-time simulation", "Predictive maintenance", "Performance optimization"],
          benefits: ["30% efficiency improvement", "Predictive maintenance", "Real-time optimization"]
        },
        {
          name: "IoT Edge Computing",
          description: "Intelligent edge computing solutions for real-time data processing",
          href: "/services/iot-edge",
          price: "$1,799/month",
          features: ["Edge analytics", "Real-time processing", "Device management", "Security"],
          benefits: ["10x faster processing", "Reduced latency", "Enhanced security"]
        }
      ]
    },
    {
      name: "Cybersecurity & Compliance",
      description: "Advanced security protocols and regulatory compliance solutions",
      icon: Shield,
      color: "from-red-600 to-orange-600",
      services: [
        {
          name: "AI Compliance Assistant",
          description: "Automated regulatory compliance for GDPR, CCPA, HIPAA, and more",
          href: "/services/ai-compliance-assistant",
          price: "$699/month",
          features: ["Automated compliance", "Real-time monitoring", "Audit trails", "Risk assessment"],
          benefits: ["90% compliance automation", "Real-time monitoring", "Reduced audit time"]
        },
        {
          name: "Zero Trust Network Architecture",
          description: "Modern security framework with continuous verification and least-privilege access",
          href: "/services/zero-trust-network-architecture",
          price: "$1,999/month",
          features: ["Identity verification", "Micro-segmentation", "Continuous monitoring", "Threat detection"],
          benefits: ["99.9% security uptime", "Real-time threat detection", "Compliance ready"]
        }
      ]
    },
    {
      name: "Industry Solutions",
      description: "Specialized solutions for healthcare, finance, and sustainability",
      icon: Heart,
      color: "from-pink-600 to-purple-600",
      services: [
        {
          name: "Healthcare Technology",
          description: "AI-powered healthcare solutions for diagnostics and patient care",
          href: "/services/healthcare-tech",
          price: "$2,999/month",
          features: ["AI diagnostics", "Patient monitoring", "Electronic health records", "HIPAA compliance"],
          benefits: ["95% diagnostic accuracy", "30% faster diagnosis", "Enhanced patient care"]
        },
        {
          name: "Sustainability Solutions",
          description: "Green IT solutions for environmental impact reduction",
          href: "/services/sustainability",
          price: "$1,299/month",
          features: ["Carbon footprint tracking", "Energy optimization", "Green procurement", "ESG reporting"],
          benefits: ["40% energy reduction", "ESG compliance", "Cost savings"]
        }
      ]
    },
    {
      name: "Micro SaaS Solutions",
      description: "Productized SaaS solutions for specific business niches",
      icon: ShoppingCart,
      color: "from-yellow-600 to-orange-600",
      services: [
        {
          name: "AI Auto Email Responder",
          description: "Intelligent email automation with CRM integration and response optimization",
          href: "/services/ai-auto-email-responder",
          price: "$199/month",
          features: ["Smart responses", "CRM integration", "Sentiment analysis", "Performance tracking"],
          benefits: ["80% faster responses", "Improved customer satisfaction", "Automated follow-ups"]
        },
        {
          name: "Customer Feedback Surveys",
          description: "AI-powered feedback collection and analysis for customer insights",
          href: "/services/mobile-feedback-surveys",
          price: "$149/month",
          features: ["Multi-channel surveys", "AI insights", "Real-time analytics", "Integration APIs"],
          benefits: ["3x response rates", "Actionable insights", "Improved NPS scores"]
        },
        {
          name: "LLM Content Studio",
          description: "AI-powered content generation and management platform",
          href: "/services/llm-content-studio",
          price: "$399/month",
          features: ["AI content generation", "Brand voice training", "Multi-format support", "SEO optimization"],
          benefits: ["10x content production", "Consistent brand voice", "SEO optimization"]
        }
      ]
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Complete Services Overview - Zion Tech Group"
        description="Explore our comprehensive portfolio of AI-powered services, IT solutions, and micro SaaS platforms. Transform your business with cutting-edge technology."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete Services Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive range of AI-powered services, IT solutions, and innovative micro SaaS platforms. 
              Transform your business with cutting-edge technology designed for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/pricing"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="mb-20"
            >
              <div className="text-center mb-16">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">{category.name}</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                    className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 mb-3">{service.description}</p>
                      <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">Business Impact</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to={service.href}
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI-powered solutions can drive your business forward
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-900 p-4 rounded-lg">
                <Phone className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-medium">{contactInfo.phone}</div>
              </div>
              <div className="bg-slate-900 p-4 rounded-lg">
                <Mail className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-medium">{contactInfo.email}</div>
              </div>
              <div className="bg-slate-900 p-4 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-medium text-sm">{contactInfo.address}</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <a 
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Visit Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}