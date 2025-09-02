import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Shield, 
  BarChart3, 
  Globe, 
  Zap, 
  Database, 
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  Microscope,
  Activity,
  Target
} from 'lucide-react';

const AIAutonomousHealthcareDiagnosticsPlatform: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: "AI-Powered Disease Detection",
      description: "Advanced machine learning algorithms analyze medical images, lab results, and patient data with 95%+ accuracy"
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Predictive Health Analytics",
      description: "Early detection of health risks and disease progression using AI-driven predictive modeling"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: "Clinical Decision Support",
      description: "AI-powered recommendations for treatment plans, medication dosages, and care pathways"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      title: "Real-time Patient Monitoring",
      description: "Continuous health monitoring with instant alerts for critical changes and anomalies"
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-500" />,
      title: "Global Medical Knowledge Base",
      description: "Access to the latest medical research, clinical guidelines, and treatment protocols worldwide"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Automated Report Generation",
      description: "Instant generation of comprehensive diagnostic reports and treatment recommendations"
    }
  ];

  const pricingPlans = [
    {
      name: "Clinic Starter",
      price: "$1,999",
      period: "/month",
      description: "Perfect for small clinics and medical practices beginning their AI transformation",
      features: [
        "Up to 1,000 patients/month",
        "Basic AI diagnostics",
        "Image analysis (X-ray, MRI)",
        "Lab result interpretation",
        "Email support",
        "Mobile app access",
        "Basic reporting"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Hospital Professional",
      price: "$4,999",
      period: "/month",
      description: "Ideal for hospitals and large medical centers with growing AI needs",
      features: [
        "Up to 10,000 patients/month",
        "Advanced AI analytics",
        "Multi-modality imaging",
        "Predictive analytics",
        "Priority support",
        "API access",
        "Custom integrations",
        "Clinical workflow optimization"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Healthcare Enterprise",
      price: "$12,999",
      period: "/month",
      description: "For large healthcare systems requiring comprehensive AI diagnostics",
      features: [
        "Unlimited patients",
        "Custom AI models",
        "Multi-site management",
        "Dedicated account manager",
        "24/7 support",
        "Advanced compliance tools",
        "White-label solutions",
        "International deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    "Improve diagnostic accuracy by up to 40% with AI-powered analysis",
    "Reduce diagnostic time by 60-80% through automated processing",
    "Lower healthcare costs by 25-35% with early disease detection",
    "Enhance patient outcomes through personalized treatment plans",
    "Achieve regulatory compliance with FDA-cleared AI algorithms",
    "Scale diagnostic capabilities without increasing staff"
  ];

  const diagnosticCapabilities = [
    {
      category: "Medical Imaging",
      solutions: [
        "X-ray analysis and interpretation",
        "MRI and CT scan analysis",
        "Ultrasound image processing",
        "Pathology slide analysis",
        "3D reconstruction and visualization"
      ]
    },
    {
      category: "Laboratory Diagnostics",
      solutions: [
        "Blood test result interpretation",
        "Biomarker analysis and trends",
        "Genetic testing results",
        "Microbiology culture analysis",
        "Toxicology screening"
      ]
    },
    {
      category: "Clinical Decision Support",
      solutions: [
        "Treatment recommendation engine",
        "Drug interaction checking",
        "Dosage optimization",
        "Clinical pathway guidance",
        "Risk assessment scoring"
      ]
    },
    {
      category: "Patient Monitoring",
      solutions: [
        "Vital signs tracking",
        "ECG and cardiac monitoring",
        "Respiratory function analysis",
        "Sleep pattern analysis",
        "Activity level monitoring"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-pink-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Autonomous Healthcare Diagnostics Platform
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto">
              Revolutionize healthcare delivery with intelligent AI diagnostics, predictive analytics, 
              and autonomous clinical decision support for improved patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Intelligent Healthcare Diagnostics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI platform combines advanced machine learning with medical expertise to deliver 
              accurate, fast, and reliable diagnostic capabilities that enhance clinical decision-making.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Capabilities Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Diagnostic Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform covers the full spectrum of medical diagnostics, from imaging analysis 
              to laboratory testing, providing integrated insights for better patient care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {diagnosticCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {index === 0 && <Microscope className="w-6 h-6 text-blue-500 mr-3" />}
                  {index === 1 && <Activity className="w-6 h-6 text-green-500 mr-3" />}
                  {index === 2 && <Target className="w-6 h-6 text-purple-500 mr-3" />}
                  {index === 3 && <Stethoscope className="w-6 h-6 text-red-500 mr-3" />}
                  <h3 className="text-xl font-semibold text-gray-900">{capability.category}</h3>
                </div>
                <ul className="space-y-2">
                  {capability.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Healthcare Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of healthcare providers worldwide who trust our AI platform to enhance 
              diagnostic accuracy and improve patient outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healthcare Compliance & Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with healthcare-grade security and compliance standards to ensure patient data 
              protection and regulatory adherence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">HIPAA Compliance</h3>
              <p className="text-gray-600">
                Full HIPAA compliance with end-to-end encryption and secure data handling protocols
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">FDA Clearance</h3>
              <p className="text-gray-600">
                FDA-cleared AI algorithms for medical imaging and diagnostic applications
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Database className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">SOC 2 Compliance</h3>
              <p className="text-gray-600">
                Enterprise-grade security with SOC 2 Type II compliance and regular audits
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your healthcare organization's size and diagnostic needs. 
              All plans include our core AI-powered diagnostic capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white p-8 rounded-2xl shadow-lg border-2 ${
                  plan.popular 
                    ? 'border-red-500 scale-105' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Healthcare Diagnostics?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Join thousands of healthcare providers worldwide in their mission to improve 
              diagnostic accuracy and patient outcomes. Our team of experts is ready to help you get started.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-red-300" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-red-300" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-red-300" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                Schedule a Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-colors">
                Contact Sales Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Visit Our Website
            </h3>
            <p className="text-gray-300 mb-6">
              Learn more about our comprehensive healthcare diagnostic solutions and explore our full service portfolio.
            </p>
            <a 
              href="https://ziontechgroup.com/services/ai-autonomous-healthcare-diagnostics-platform"
              className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousHealthcareDiagnosticsPlatform;