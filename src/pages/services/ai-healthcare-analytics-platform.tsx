import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Activity, 
  Heart, 
  Brain, 
  Shield, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Users,
  Globe,
  Lock,
  BarChart3,
  Search,
  TrendingUp,
  Eye,
  FileText,
  AlertTriangle,
  Calendar,
  Target,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Star,
  Award,
  Database,
  Microscope,
  Pill,
  Stethoscope,
  Monitor,
  Zap,
  Cpu,
  Network,
  Cloud,
  Server
} from 'lucide-react';

export default function AIHealthcareAnalyticsPlatform() {
  const features = [
    {
      title: "Predictive Health Analytics",
      description: "Advanced ML algorithms predict health outcomes with 94.7% accuracy",
      icon: Brain,
      benefits: ["Early disease detection", "Risk stratification", "Treatment outcome prediction", "Population health insights"]
    },
    {
      title: "Real-Time Patient Monitoring",
      description: "Continuous monitoring of patient vitals and health metrics",
      icon: Activity,
      benefits: ["24/7 vital sign monitoring", "Alert system for anomalies", "Trend analysis", "Mobile app integration"]
    },
    {
      title: "Clinical Decision Support",
      description: "AI-powered recommendations based on evidence-based medicine",
      icon: Stethoscope,
      benefits: ["Treatment recommendations", "Drug interaction alerts", "Clinical guideline compliance", "Evidence-based insights"]
    },
    {
      title: "Population Health Management",
      description: "Comprehensive analytics for managing population health outcomes",
      icon: Users,
      benefits: ["Health trend analysis", "Risk factor identification", "Preventive care planning", "Resource optimization"]
    },
    {
      title: "Advanced Data Integration",
      description: "Seamless integration with existing healthcare systems and devices",
      icon: Database,
      benefits: ["EHR integration", "IoT device connectivity", "Real-time data sync", "Interoperability standards"]
    },
    {
      title: "Enterprise Security & Compliance",
      description: "HIPAA, GDPR, and SOC 2 Type II compliant security framework",
      icon: Shield,
      benefits: ["End-to-end encryption", "Role-based access control", "Audit logging", "Compliance reporting"]
    }
  ];

  const pricingTiers = [
    {
      name: "Healthcare Provider",
      price: "$299",
      period: "/month",
      description: "Perfect for individual practices and small clinics",
      features: [
        "Patient analytics (up to 1,000 patients)",
        "Basic predictive models",
        "Standard monitoring tools",
        "Email support",
        "Basic security features",
        "Mobile app access",
        "Standard integrations"
      ],
      popular: false,
      savings: null
    },
    {
      name: "Medical Center",
      price: "$799",
      period: "/month",
      description: "Ideal for growing medical centers and hospitals",
      features: [
        "Everything in Healthcare Provider",
        "Patient analytics (up to 10,000 patients)",
        "Advanced predictive models",
        "Clinical decision support",
        "Population health analytics",
        "Priority support",
        "Advanced security",
        "API access",
        "Custom dashboards",
        "Team collaboration (25 users)"
      ],
      popular: true,
      savings: "Save 20% annually"
    },
    {
      name: "Healthcare Enterprise",
      price: "$2,499",
      period: "/month",
      description: "Comprehensive solution for large healthcare systems",
      features: [
        "Everything in Medical Center",
        "Unlimited patient analytics",
        "Advanced AI models",
        "Custom algorithm development",
        "24/7 dedicated support",
        "Enterprise security",
        "Custom integrations",
        "White-label solutions",
        "Unlimited users",
        "Advanced analytics",
        "Compliance reporting"
      ],
      popular: false,
      savings: "Save 25% annually"
    }
  ];

  const useCases = [
    {
      title: "Chronic Disease Management",
      description: "Monitor and predict outcomes for patients with chronic conditions",
      icon: Heart,
      benefits: ["Reduce hospital readmissions by 35%", "Improve treatment adherence", "Early intervention alerts", "Personalized care plans"]
    },
    {
      title: "Emergency Department Optimization",
      description: "Streamline emergency care with predictive analytics",
      icon: AlertTriangle,
      benefits: ["Reduce wait times by 40%", "Improve resource allocation", "Predict patient flow", "Optimize staffing"]
    },
    {
      title: "Preventive Care Planning",
      description: "Identify at-risk patients and recommend preventive measures",
      icon: Target,
      benefits: ["Increase preventive care visits", "Reduce disease progression", "Cost savings through prevention", "Population health improvement"]
    },
    {
      title: "Clinical Research Support",
      description: "Accelerate research with AI-powered data analysis",
      icon: Microscope,
      benefits: ["Faster data analysis", "Pattern identification", "Clinical trial optimization", "Research insights"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Williams",
      title: "Chief Medical Officer",
      company: "Metro Health System",
      content: "This platform has transformed our patient care. We've reduced readmissions by 35% and improved outcomes significantly.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      title: "Medical Director",
      company: "Advanced Care Clinic",
      content: "The predictive analytics are incredibly accurate. We're catching health issues before they become critical.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Emergency Department Chief",
      company: "City General Hospital",
      content: "Our emergency department efficiency has improved dramatically. Wait times are down 40% and patient satisfaction is up.",
      rating: 5
    }
  ];

  const benefits = [
    {
      metric: "35%",
      description: "Reduction in hospital readmissions",
      icon: TrendingUp
    },
    {
      metric: "40%",
      description: "Decrease in emergency wait times",
      icon: Clock
    },
    {
      metric: "94.7%",
      description: "Accuracy in health predictions",
      icon: Target
    },
    {
      metric: "$2.3M",
      description: "Annual cost savings per hospital",
      icon: DollarSign
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Healthcare Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Transform healthcare delivery with AI-powered analytics, predictive health insights, and clinical decision support. Improve patient outcomes and reduce costs." />
        <meta name="keywords" content="AI healthcare analytics, predictive health, clinical decision support, population health, healthcare AI, medical analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-healthcare-analytics-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Leading Healthcare AI Solution
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Healthcare
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Analytics Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize healthcare delivery with cutting-edge AI analytics. Predict health outcomes, 
              optimize clinical decisions, and improve patient care with unprecedented accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <Rocket className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Watch Demo
                <Eye className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Healthcare with AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of healthcare with AI-powered analytics that improve patient outcomes, 
              reduce costs, and enhance clinical decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare-Focused Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your healthcare organization. All plans include our core AI features 
              with HIPAA compliance and enterprise-grade security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${
                  tier.popular 
                    ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                    : 'border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                  {tier.savings && (
                    <div className="mt-2">
                      <span className="text-cyan-400 text-sm font-medium">{tier.savings}</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how leading healthcare organizations are transforming patient care 
              with our AI-powered analytics platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Leaders Trust Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of healthcare professionals who have transformed patient care 
              with our AI-powered platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.title}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of healthcare technology. Start your free trial today and experience 
              the power of AI-powered healthcare analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <Rocket className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Call Us Now
                <Phone className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 font-medium">+1 302 464 0950</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Response within 2 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-cyan-400 font-medium">364 E Main St STE 1008</p>
              <p className="text-gray-400 text-sm">Middletown, DE 19709</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}