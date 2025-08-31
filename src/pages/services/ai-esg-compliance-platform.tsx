import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Users, 
  Shield, 
  TrendingUp, 
  BarChart3, 
  CheckCircle, 
  Globe,
  Zap,
  FileText,
  Database,
  AlertTriangle,
  Target,
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  Lightbulb,
  Gauge,
  Calendar,
  PieChart
} from 'lucide-react';

const AIESGCompliancePlatform: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: "Environmental Impact Tracking",
      description: "AI-powered monitoring of carbon emissions, energy consumption, waste management, and water usage with automated sustainability scoring and improvement recommendations."
    },
    {
      icon: Users,
      title: "Social Responsibility Monitoring",
      description: "Comprehensive tracking of labor practices, diversity metrics, community engagement, and human rights compliance with AI-driven risk assessment and reporting."
    },
    {
      icon: Shield,
      title: "Governance & Ethics Management",
      description: "Automated monitoring of board composition, executive compensation, anti-corruption measures, and regulatory compliance with real-time risk alerts."
    },
    {
      icon: BarChart3,
      title: "ESG Performance Analytics",
      description: "Advanced analytics dashboard with predictive modeling, benchmarking against industry standards, and automated ESG score calculation for stakeholders."
    },
    {
      icon: FileText,
      title: "Automated Reporting & Disclosure",
      description: "AI-generated ESG reports compliant with GRI, SASB, TCFD, and other international standards with customizable templates and automated data validation."
    },
    {
      icon: Target,
      title: "Goal Setting & Progress Tracking",
      description: "Intelligent goal setting based on industry benchmarks with automated progress tracking, milestone alerts, and predictive completion timelines."
    }
  ];

  const benefits = [
    "Reduce ESG compliance costs by up to 70% through automation",
    "Achieve 95% accuracy in ESG data collection and reporting",
    "Real-time monitoring of 100+ ESG metrics and KPIs",
    "Automated compliance with international ESG standards",
    "Predictive analytics for proactive risk management",
    "Seamless integration with existing business systems"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small to medium businesses",
      features: [
        "Up to 50 ESG metrics tracking",
        "Basic reporting templates",
        "Standard compliance frameworks",
        "Email support",
        "Monthly ESG score updates"
      ]
    },
    {
      plan: "Professional",
      price: "$899",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 200 ESG metrics tracking",
        "Advanced reporting and analytics",
        "Multiple compliance frameworks",
        "Priority support",
        "Real-time monitoring",
        "API access",
        "Custom dashboard"
      ]
    },
    {
      plan: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large enterprises with complex ESG needs",
      features: [
        "Unlimited ESG metrics tracking",
        "All compliance frameworks",
        "Custom integrations",
        "Dedicated support team",
        "Advanced AI capabilities",
        "White-label options",
        "On-premise deployment",
        "Custom training"
      ]
    }
  ];

  const complianceFrameworks = [
    {
      name: "GRI (Global Reporting Initiative)",
      description: "Comprehensive sustainability reporting standards used by over 10,000 organizations worldwide."
    },
    {
      name: "SASB (Sustainability Accounting Standards Board)",
      description: "Industry-specific standards for financially material sustainability information."
    },
    {
      name: "TCFD (Task Force on Climate-related Financial Disclosures)",
      description: "Climate-related financial risk disclosure framework adopted by major financial institutions."
    },
    {
      name: "CDP (Carbon Disclosure Project)",
      description: "Global environmental disclosure system for companies, cities, states, and regions."
    },
    {
      name: "UN SDGs (Sustainable Development Goals)",
      description: "17 global goals for sustainable development adopted by all UN member states."
    },
    {
      name: "ISO 14001 (Environmental Management)",
      description: "International standard for effective environmental management systems."
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      description: "Comply with TCFD requirements, assess climate risks in investment portfolios, and meet regulatory ESG disclosure mandates."
    },
    {
      industry: "Manufacturing",
      description: "Track environmental impact, ensure supply chain sustainability, and maintain compliance with environmental regulations."
    },
    {
      industry: "Technology",
      description: "Monitor energy consumption, track diversity metrics, and ensure responsible AI development practices."
    },
    {
      industry: "Healthcare",
      description: "Manage environmental impact of medical facilities, ensure ethical research practices, and maintain patient privacy standards."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Leaf className="w-5 h-5 text-green-400" />
            <span className="text-green-400 text-sm font-medium">AI-Powered ESG Compliance</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            AI ESG Compliance Platform
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Transform your ESG compliance with AI-powered monitoring, automated reporting, and intelligent sustainability management. 
            Stay ahead of regulatory requirements while building a more sustainable and responsible business.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>GRI Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>SASB Ready</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>TCFD Aligned</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>ISO 14001</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </a>
            <a 
              href="#pricing" 
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive ESG Management Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI platform provides end-to-end ESG compliance capabilities that help organizations build sustainable futures
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI ESG Platform?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Transform your ESG strategy with AI-powered automation and intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supported Compliance Frameworks
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our platform supports all major international ESG compliance standards and frameworks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{framework.name}</h3>
                <p className="text-slate-300">{framework.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing for ESG Excellence
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the plan that best fits your ESG compliance needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/5 border rounded-2xl p-8 ${
                  index === 1 
                    ? 'border-green-500/50 bg-green-500/10 scale-105' 
                    : 'border-white/10'
                }`}
              >
                {index === 1 && (
                  <div className="inline-flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                <p className="text-slate-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="/contact" 
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    index === 1
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-white/10 hover:bg-white/15 border border-white/20 text-white'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific ESG Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Tailored ESG compliance solutions for various industries and regulatory requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-slate-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your ESG Compliance?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading organizations that trust our AI-powered platform to build sustainable and compliant businesses
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a 
                href="tel:+13024640950" 
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Phone className="w-6 h-6 text-green-400" />
                <span className="text-slate-300">+1 302 464 0950</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-6 h-6 text-green-400" />
                <span className="text-slate-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="w-6 h-6 text-green-400" />
                <span className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIESGCompliancePlatform;