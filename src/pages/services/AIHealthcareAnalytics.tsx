import React from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Award,
  Lightbulb,
  Database,
  Network,
  Server,
  Globe,
  Clock,
  BarChart3,
  Cpu,
  Lock,
  Eye,
  Target,
  Rocket,
  Sparkles,
  Heart,
  Activity,
  Stethoscope,
  Pill,
  Microscope,
  Dna,
  Hospital,
  Ambulance
} from 'lucide-react';

export default function AIHealthcareAnalytics() {
  const features = [
    {
      title: "Predictive Diagnostics",
      description: "AI-powered early disease detection and diagnostic assistance with high accuracy",
      icon: Brain,
      benefits: [
        "95% diagnostic accuracy",
        "Early disease detection",
        "Rare condition identification",
        "Treatment recommendation"
      ]
    },
    {
      title: "Patient Care Optimization",
      description: "Intelligent patient monitoring and personalized care pathway optimization",
      icon: Heart,
      benefits: [
        "Real-time monitoring",
        "Personalized care plans",
        "Risk stratification",
        "Outcome prediction"
      ]
    },
    {
      title: "Clinical Research Acceleration",
      description: "AI-driven research insights and clinical trial optimization",
      icon: Microscope,
      benefits: [
        "Data-driven insights",
        "Trial optimization",
        "Patient recruitment",
        "Outcome analysis"
      ]
    },
    {
      title: "Healthcare Operations",
      description: "Intelligent resource allocation and operational efficiency optimization",
      icon: Activity,
      benefits: [
        "Resource optimization",
        "Capacity planning",
        "Cost reduction",
        "Quality improvement"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Healthcare Starter",
      price: "$12,000",
      period: "/month",
      description: "Perfect for small clinics and practices",
      features: [
        "Basic AI diagnostics",
        "Up to 100 patients/month",
        "Standard analytics",
        "Email support",
        "Basic reporting",
        "HIPAA compliance"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Healthcare Professional",
      price: "$28,000",
      period: "/month",
      description: "Ideal for growing healthcare organizations",
      features: [
        "Advanced AI diagnostics",
        "Up to 1000 patients/month",
        "Enhanced analytics suite",
        "Priority support",
        "Advanced reporting",
        "Custom integrations",
        "Performance optimization",
        "Healthcare consulting"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Healthcare Enterprise",
      price: "$65,000",
      period: "/month",
      description: "For large healthcare systems",
      features: [
        "Full AI healthcare suite",
        "Unlimited patients",
        "Enterprise analytics",
        "24/7 dedicated support",
        "Custom AI models",
        "White-label solutions",
        "On-premise deployment",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Hospitals & Health Systems",
      applications: [
        "Patient flow optimization",
        "Resource allocation",
        "Quality improvement",
        "Cost reduction"
      ]
    },
    {
      industry: "Primary Care",
      applications: [
        "Preventive care",
        "Chronic disease management",
        "Patient engagement",
        "Population health"
      ]
    },
    {
      industry: "Specialty Medicine",
      applications: [
        "Diagnostic assistance",
        "Treatment planning",
        "Outcome prediction",
        "Research insights"
      ]
    },
    {
      industry: "Pharmaceutical",
      applications: [
        "Drug discovery",
        "Clinical trials",
        "Market analysis",
        "Patient outcomes"
      ]
    }
  ];

  const healthcareMetrics = [
    {
      title: "Diagnostic Accuracy",
      description: "AI-powered diagnostic assistance",
      icon: Brain,
      metric: "95%"
    },
    {
      title: "Early Detection",
      description: "Disease detection before symptoms",
      icon: Eye,
      metric: "6-12 months"
    },
    {
      title: "Cost Reduction",
      description: "Healthcare cost optimization",
      icon: TrendingUp,
      metric: "30-40%"
    },
    {
      title: "Patient Outcomes",
      description: "Improved treatment results",
      icon: Heart,
      metric: "25%+"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Healthcare Analytics - Zion Tech Group"
        description="Transform healthcare with AI-powered analytics. Predictive diagnostics, patient care optimization, and clinical research acceleration."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare Analytics
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize healthcare delivery with AI-powered analytics. Improve patient outcomes, 
              optimize operations, and accelerate medical research with intelligent insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-green-600 text-green-400 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-600/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-600/20 rounded-full blur-xl"></div>
      </section>

      {/* Healthcare Metrics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Healthcare Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Healthcare Analytics platform delivers measurable improvements in 
              patient care, operational efficiency, and clinical outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthcareMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300 text-center"
              >
                <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg mx-auto mb-4 w-fit">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-green-400 mb-2">{metric.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{metric.title}</h3>
                <p className="text-gray-300 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Healthcare Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Healthcare Analytics platform combines cutting-edge artificial intelligence with 
              deep medical expertise to transform patient care and clinical outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Healthcare Analytics Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the healthcare analytics plan that best fits your organization's needs. 
              All plans include HIPAA compliance and AI-powered insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-green-500 ring-2 ring-green-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Healthcare Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Healthcare Analytics platform is transforming healthcare delivery across 
              all sectors, improving patient outcomes and operational efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((application, appIndex) => (
                    <li key={appIndex} className="text-gray-300 text-sm flex items-center">
                      <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {application}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/50 to-emerald-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the healthcare revolution and unlock AI-powered insights that will 
              improve patient outcomes and operational efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Contact Healthcare Experts
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}