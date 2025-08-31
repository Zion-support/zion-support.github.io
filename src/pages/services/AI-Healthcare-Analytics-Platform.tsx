import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Heart, 
  Brain, 
  Activity, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Cpu,
  Lock,
  Target,
  Rocket,
  Clock,
  Star,
  Shield,
  Eye,
  Network,
  Database,
  FileText,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  Stethoscope,
  Pill,
  Microscope,
  Syringe
} from 'lucide-react';

const AIHealthcareAnalyticsPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnosis Support",
      description: "Advanced machine learning algorithms assist healthcare providers with accurate diagnosis and treatment recommendations"
    },
    {
      icon: Activity,
      title: "Real-Time Patient Monitoring",
      description: "Continuous monitoring of vital signs, symptoms, and treatment responses with instant alerts for critical changes"
    },
    {
      icon: Database,
      title: "Predictive Analytics",
      description: "Forecast patient outcomes, disease progression, and treatment effectiveness with 90%+ accuracy"
    },
    {
      icon: Shield,
      title: "HIPAA-Compliant Security",
      description: "Enterprise-grade security with end-to-end encryption and automated compliance monitoring"
    },
    {
      icon: Users,
      title: "Patient Engagement Tools",
      description: "Interactive patient portals with personalized health insights and treatment tracking"
    },
    {
      icon: BarChart3,
      title: "Population Health Analytics",
      description: "Comprehensive analysis of population health trends, risk factors, and intervention effectiveness"
    }
  ];

  const benefits = [
    "Improve diagnostic accuracy by 40-60%",
    "Reduce treatment costs by 25-35%",
    "Enhance patient outcomes by 30-50%",
    "Streamline clinical workflows by 50%",
    "Automate compliance reporting for HIPAA, FDA, and other regulations",
    "Enable personalized medicine with AI-driven insights"
  ];

  const pricingTiers = [
    {
      name: "Clinic",
      price: "$1,299",
      period: "/month",
      description: "Perfect for small clinics and medical practices",
      features: [
        "AI diagnosis support",
        "Patient monitoring",
        "Basic analytics",
        "HIPAA compliance",
        "Email support",
        "Up to 1,000 patients",
        "Basic reporting"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Hospital",
      price: "$3,999",
      period: "/month",
      description: "Advanced features for hospitals and medical centers",
      features: [
        "Everything in Clinic",
        "Advanced AI models",
        "Real-time monitoring",
        "Predictive analytics",
        "Population health insights",
        "Priority support",
        "Up to 10,000 patients",
        "Advanced reporting"
      ],
      cta: "Go Hospital",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$7,999",
      period: "/month",
      description: "Comprehensive platform for large healthcare systems",
      features: [
        "Everything in Hospital",
        "Custom AI models",
        "White-label solutions",
        "API access",
        "Dedicated support team",
        "Custom integrations",
        "Unlimited patients",
        "24/7 phone support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Primary Care",
      description: "AI-assisted diagnosis and treatment planning for common conditions",
      icon: Stethoscope
    },
    {
      title: "Specialized Medicine",
      description: "Advanced analytics for oncology, cardiology, and other specialties",
      icon: Heart
    },
    {
      title: "Clinical Research",
      description: "Data-driven insights for clinical trials and medical research",
      icon: Microscope
    },
    {
      title: "Public Health",
      description: "Population health monitoring and disease prevention strategies",
      icon: Users
    }
  ];

  const healthcareMetrics = [
    {
      metric: "40-60%",
      label: "Improved Diagnosis Accuracy",
      description: "AI-powered diagnostic support"
    },
    {
      metric: "25-35%",
      label: "Reduced Treatment Costs",
      description: "Optimized care pathways"
    },
    {
      metric: "30-50%",
      label: "Better Patient Outcomes",
      description: "Personalized treatment plans"
    },
    {
      metric: "50%",
      label: "Workflow Efficiency",
      description: "Streamlined clinical processes"
    }
  ];

  const complianceFeatures = [
    "HIPAA Compliance Automation",
    "FDA Regulatory Reporting",
    "SOC2 Type II Certification",
    "GDPR Data Protection",
    "HITECH Act Compliance",
    "State-specific Regulations"
  ];

  return (
    <>
      <SEO 
        title="AI Healthcare Analytics Platform | Zion Tech Group"
        description="Revolutionary AI-powered healthcare analytics platform with predictive diagnostics, patient monitoring, and HIPAA compliance. Improve patient outcomes by 30-50%."
        keywords="AI healthcare, healthcare analytics, predictive diagnostics, patient monitoring, HIPAA compliance, population health"
        canonical="https://ziontechgroup.com/services/ai-healthcare-analytics-platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                <span>AI-Powered Healthcare</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Healthcare
                <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Analytics Platform
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform healthcare delivery with our revolutionary AI-powered analytics platform. 
                Improve patient outcomes, reduce costs, and streamline clinical workflows with intelligent insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-green-500/30 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-500/10 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Healthcare Metrics */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {healthcareMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-green-400 mb-2">{metric.metric}</div>
                  <div className="text-lg font-semibold text-white mb-2">{metric.label}</div>
                  <p className="text-gray-300 text-sm">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Healthcare Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform provides comprehensive healthcare analytics with 
                intelligent diagnostics, patient monitoring, and predictive insights.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our AI Healthcare Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of healthcare with AI-powered analytics that improve 
                patient care, reduce costs, and enhance clinical decision-making.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Regulatory Compliance & Security
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with healthcare-grade security and compliance features to meet 
                the strictest regulatory requirements in the industry.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {complianceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-slate-800/50 p-4 rounded-lg border border-slate-700/50"
                >
                  <Shield className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Choose Your Healthcare Solution
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible healthcare analytics plans designed to meet the needs of 
                clinics, hospitals, and large healthcare systems.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                    tier.popular 
                      ? 'border-green-500 bg-slate-800/80 scale-105' 
                      : 'border-slate-700 bg-slate-800/50 hover:border-green-500/50'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    {tier.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Healthcare Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform is designed to enhance healthcare delivery across 
                various medical specialties and care settings.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl p-12 text-center border border-green-500/30"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join leading healthcare providers who trust our AI-powered platform 
                to improve patient care and operational efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-green-500/30 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-500/10 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>Need help? Contact our healthcare team at <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">kleber@ziontechgroup.com</a></p>
                <p>Or call us at <a href="tel:+13024640950" className="text-green-400 hover:text-green-300">+1 (302) 464-0950</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIHealthcareAnalyticsPlatform;