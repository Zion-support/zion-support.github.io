import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Shield, 
  BarChart3, 
  Globe, 
  FileText, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Database,
  Settings,
  Eye,
  Star,
  Target,
  TrendingUp,
  Award
} from 'lucide-react';

const AIESGCompliancePlatform: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: "Environmental Impact Monitoring",
      description: "Track carbon emissions, energy consumption, and environmental metrics in real-time"
    },
    {
      icon: Users,
      title: "Social Responsibility Tracking",
      description: "Monitor labor practices, diversity metrics, and community impact assessments"
    },
    {
      icon: Shield,
      title: "Governance Compliance",
      description: "Ensure board diversity, executive compensation transparency, and ethical practices"
    },
    {
      icon: BarChart3,
      title: "AI-Powered ESG Scoring",
      description: "Advanced algorithms calculate comprehensive ESG ratings and identify improvement areas"
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Generate regulatory reports for SEC, EU Taxonomy, and other ESG frameworks"
    },
    {
      icon: Globe,
      title: "Stakeholder Communication",
      description: "Transparent ESG disclosure and investor relations management"
    }
  ];

  const benefits = [
    "Achieve 40-60% improvement in ESG ratings within 12 months",
    "Reduce compliance costs by 50% through automation",
    "Increase investor confidence with transparent ESG reporting",
    "Meet regulatory requirements across all jurisdictions",
    "Identify ESG risks before they impact business performance",
    "Enhance brand reputation and stakeholder trust"
  ];

  const pricing = [
    {
      plan: "Professional",
      price: "$3,200",
      period: "/month",
      features: [
        "Up to 100 ESG metrics tracking",
        "Basic AI scoring models",
        "Monthly ESG reports",
        "Standard compliance tools",
        "Email support",
        "Basic stakeholder portal"
      ]
    },
    {
      plan: "Enterprise",
      price: "$7,800",
      period: "/month",
      features: [
        "Up to 500 ESG metrics tracking",
        "Advanced AI scoring models",
        "Real-time monitoring",
        "Custom ESG frameworks",
        "Full compliance suite",
        "Priority support",
        "API access",
        "Advanced analytics"
      ]
    },
    {
      plan: "Global",
      price: "$18,500",
      period: "/month",
      features: [
        "Unlimited ESG metrics tracking",
        "Custom AI model training",
        "Multi-region compliance",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label solutions",
        "On-premise deployment"
      ]
    }
  ];

  const frameworks = [
    {
      title: "SEC Climate Disclosure",
      description: "Comply with new SEC climate risk disclosure requirements",
      icon: FileText
    },
    {
      title: "EU Taxonomy",
      description: "Meet European Union sustainable finance classification",
      icon: Globe
    },
    {
      title: "SASB Standards",
      description: "Industry-specific sustainability accounting standards",
      icon: Award
    },
    {
      title: "TCFD Framework",
      description: "Task Force on Climate-related Financial Disclosures",
      icon: Leaf
    }
  ];

  const industries = [
    {
      title: "Financial Services",
      description: "ESG risk assessment and sustainable investment management",
      icon: TrendingUp
    },
    {
      title: "Manufacturing",
      description: "Supply chain sustainability and environmental compliance",
      icon: Target
    },
    {
      title: "Energy",
      description: "Renewable energy transition and carbon footprint reduction",
      icon: Leaf
    },
    {
      title: "Technology",
      description: "Data center efficiency and responsible AI development",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              AI-Powered ESG Compliance
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI ESG
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                {" "}Compliance Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your ESG compliance with AI-driven automation. Monitor environmental, social, 
              and governance metrics, ensure regulatory compliance, and enhance stakeholder trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive ESG Management Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Leverage AI to automate ESG compliance and drive sustainable business practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Regulatory Framework Support
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comply with all major ESG and sustainability reporting standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <framework.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {framework.title}
                </h3>
                <p className="text-gray-400">
                  {framework.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tailored ESG compliance solutions for different industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-400">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your ESG Performance
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See measurable improvements in sustainability, compliance, and stakeholder trust
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your organization's ESG compliance needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  index === 1 
                    ? 'border-green-500/50 bg-green-500/5' 
                    : 'border-slate-700'
                }`}
              >
                {index === 1 && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500 text-white text-sm font-medium mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    index === 1
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                      : 'border border-slate-600 text-gray-300 hover:border-slate-500 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Lead in ESG Compliance?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join leading organizations that trust our AI-powered ESG compliance platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8 text-gray-400">
            <div>
              <h3 className="text-white font-semibold mb-2">Contact Us</h3>
              <p>kleber@ziontechgroup.com</p>
              <p>+1 (302) 464-0950</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p>364 E Main St STE 1008</p>
              <p>Middletown DE 19709</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Website</h3>
              <a 
                href="https://ziontechgroup.com" 
                className="text-green-400 hover:text-green-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIESGCompliancePlatform;