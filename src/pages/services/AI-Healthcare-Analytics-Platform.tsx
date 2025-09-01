import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Lock,
  Globe,
  Award,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Eye,
  Search,
  Activity,
  Clock,
  Users,
  Database,
  Cpu,
  Network,
  Smartphone,
  Stethoscope,
  Pill,
  Microscope,
  Shield,
  FileText,
  AlertTriangle,
  Target,
  LineChart
} from 'lucide-react';

const AIHealthcareAnalyticsPlatform: React.FC = () => {
  const features = [
    "AI-Powered Patient Risk Assessment & Prediction",
    "Real-time Clinical Decision Support",
    "Predictive Analytics for Disease Prevention",
    "Population Health Management & Analytics",
    "Clinical Trial Optimization & Patient Matching",
    "Healthcare Cost Optimization & Revenue Cycle Management",
    "Drug Discovery & Pharmaceutical Analytics",
    "Medical Imaging Analysis & Diagnosis Support",
    "Patient Engagement & Personalized Care",
    "Regulatory Compliance & Quality Metrics"
  ];

  const benefits = [
    "Improve patient outcomes by 40%",
    "Reduce healthcare costs by 25-35%",
    "Increase diagnostic accuracy by 30%",
    "Reduce readmission rates by 50%",
    "Optimize resource utilization by 45%"
  ];

  const useCases = [
    "Hospitals & Health Systems",
    "Pharmaceutical Companies",
    "Insurance & Payers",
    "Research Institutions",
    "Telemedicine Platforms",
    "Medical Device Companies",
    "Public Health Agencies",
    "Specialty Clinics"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$599",
      period: "/month",
      description: "Perfect for small healthcare practices",
      features: [
        "Up to 1,000 patients",
        "Basic risk assessment",
        "Standard analytics",
        "Basic reporting",
        "Email support",
        "HIPAA compliance"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,499",
      period: "/month",
      description: "Ideal for growing healthcare organizations",
      features: [
        "Up to 10,000 patients",
        "Advanced AI analytics",
        "Clinical decision support",
        "Population health insights",
        "API access",
        "Priority support",
        "Custom integrations",
        "Advanced security"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "For large healthcare systems with complex needs",
      features: [
        "Unlimited patients",
        "Full AI suite",
        "Custom development",
        "24/7 dedicated support",
        "Advanced security",
        "White-label options",
        "Dedicated success manager",
        "Custom ML model training"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const technicalSpecs = [
    "AI Models: Custom Healthcare ML Models, Deep Learning Networks",
    "Security: HIPAA, SOC 2 Type II, HITECH, GDPR compliant",
    "Performance: Real-time processing, 99.99% uptime SLA",
    "Integrations: EHR, EMR, PACS, Lab systems, IoT devices",
    "Scalability: Handles 10M+ patient records",
    "Compliance: FDA, CE, ISO 13485, 21 CFR Part 11 ready"
  ];

  const analyticsModules = [
    "Clinical Analytics",
    "Financial Analytics",
    "Operational Analytics",
    "Population Health",
    "Quality Metrics",
    "Risk Management",
    "Performance Analytics",
    "Predictive Modeling"
  ];

  const specialties = [
    "Cardiology",
    "Oncology",
    "Neurology",
    "Radiology",
    "Pathology",
    "Emergency Medicine",
    "Primary Care",
    "Specialty Surgery"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-600/20 p-3 rounded-full">
                <Heart className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare Analytics Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with AI-powered analytics. Improve patient outcomes by 40%, 
              reduce costs by 35%, and enable data-driven clinical decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Healthcare Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leverage cutting-edge AI to transform patient care and outcomes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                </div>
                <p className="text-white text-lg font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to revolutionize healthcare delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="bg-blue-600/20 p-2 rounded-lg mt-1">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-white text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Modules */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Analytics Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete analytics coverage for every healthcare need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold">{module}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Specialties */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Medical Specialties
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored solutions for every medical specialty
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className="bg-green-600/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-white font-semibold">{specialty}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your healthcare analytics needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-lg rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-blue-500/50 bg-blue-600/10' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Serving healthcare organizations across all sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className="bg-green-600/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-white font-semibold">{useCase}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with the highest healthcare security and compliance standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="bg-green-600/20 p-2 rounded-lg mt-1">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-white text-lg">{spec}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-green-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of healthcare organizations already using our AI analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareAnalyticsPlatform;