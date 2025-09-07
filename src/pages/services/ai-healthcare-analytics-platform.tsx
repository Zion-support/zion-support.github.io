import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Heart, 
  Activity, 
  Brain, 
  Activity, 
  Users, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  BarChart3,
  Shield,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  Lock,
  Eye,
  Clock,
  Award,
  Rocket,
  Briefcase,
  Building,
  Database,
  Cpu,
  Server,
  Network,
  Zap,
  Target,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

const AIHealthcareAnalyticsPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnosis Support',
      description: 'Advanced machine learning algorithms assist healthcare professionals in accurate diagnosis',
      benefits: ['Improve diagnostic accuracy by 40%', 'Reduce misdiagnosis rates', 'Faster treatment decisions']
    },
    {
      icon: Activity,
      title: 'Predictive Patient Analytics',
      description: 'Forecast patient outcomes and identify high-risk individuals using predictive modeling',
      benefits: ['Early intervention opportunities', 'Better resource allocation', 'Improved patient outcomes']
    },
    {
      icon: BarChart3,
      title: 'Real-time Health Monitoring',
      description: 'Continuous monitoring and analysis of patient vital signs and health metrics',
      benefits: ['24/7 patient surveillance', 'Immediate alert systems', 'Proactive care management']
    },
    {
      icon: Shield,
      title: 'HIPAA-Compliant Security',
      description: 'Enterprise-grade security with full HIPAA compliance and data protection',
      benefits: ['Complete regulatory compliance', 'Advanced encryption', 'Audit trail maintenance']
    },
    {
      icon: Zap,
      title: 'Real-Time Monitoring',
      description: 'Continuous patient monitoring with instant alerts for critical health changes'
    },
    {
      icon: Eye,
      title: 'Medical Image Analysis',
      description: 'AI-powered analysis of X-rays, MRIs, and CT scans for faster, more accurate diagnosis'
    }
  ];

  const pricingPlans = [
    {
      name: 'Clinical',
      price: '$499',
      period: '/month',
      description: 'For individual healthcare practices',
      features: [
        'Up to 10 healthcare providers',
        'Basic AI diagnosis support',
        'Patient analytics dashboard',
        'HIPAA compliance',
        'Email support',
        'Basic integrations'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Hospital',
      price: '$1,999',
      period: '/month',
      description: 'For hospitals and medical centers',
      features: [
        'Up to 100 healthcare providers',
        'Advanced AI capabilities',
        'Real-time monitoring',
        'Predictive analytics',
        'Priority support',
        'Custom integrations',
        'Training and onboarding'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large healthcare systems',
      features: [
        'Unlimited healthcare providers',
        'Full AI platform capabilities',
        'Custom AI models',
        'Advanced security features',
        'Dedicated support team',
        'Advanced compliance',
        'On-premise options',
        'SLA guarantees',
        'Custom integrations'
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const healthcareModules = [
    {
      title: "Clinical Decision Support",
      icon: Stethoscope,
      description: "AI-powered clinical decision support system for healthcare providers",
      capabilities: ["Diagnostic assistance", "Treatment recommendations", "Drug interaction alerts", "Clinical guidelines"]
    },
    {
      title: "Patient Risk Stratification",
      icon: HeartPulse,
      description: "Identify high-risk patients and predict potential health complications",
      capabilities: ["Risk scoring", "Predictive modeling", "Early intervention", "Outcome prediction"]
    },
    {
      icon: Clock,
      title: '24/7 Patient Monitoring',
      description: 'Continuous monitoring ensures patient safety around the clock'
    },
    {
      icon: BarChart3,
      title: '40% Cost Reduction',
      description: 'AI optimization reduces healthcare costs and improves efficiency'
    }
  ];

  const useCases = [
    {
      title: 'Hospitals & Medical Centers',
      description: 'Comprehensive healthcare analytics for large medical facilities',
      icon: Building2,
      benefits: ['Improved patient outcomes', 'Better resource utilization', 'Enhanced operational efficiency']
    },
    {
      title: 'Specialty Clinics',
      description: 'Specialized analytics for cardiology, oncology, and other specialties',
      icon: Stethoscope,
      benefits: ['Specialized insights', 'Better treatment planning', 'Improved patient care']
    },
    {
      title: 'Treatment Optimization',
      description: 'AI recommends optimal treatment plans based on patient data and outcomes',
      icon: Heart
    },
    {
      title: 'Drug Safety Monitoring',
      description: 'Real-time monitoring of drug interactions and adverse effects',
      icon: Shield
    }
  ];

  const complianceStandards = [
    'HIPAA Compliant',
    'FDA Approved',
    'ISO 13485',
    'SOC 2 Type II',
    'GDPR Compliant',
    'HITECH Certified'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Healthcare Analytics Platform - Zion Tech Group"
        description="Revolutionary AI-powered healthcare analytics platform with 95% accuracy rate. Diagnostic support, predictive analytics, and patient monitoring. Start from $799/month."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-900 to-green-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              AI Healthcare Analytics Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize healthcare delivery with AI-powered analytics, predictive insights, and intelligent patient care management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-green-600 hover:from-cyan-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              >
                Schedule Demo
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              AI-Powered Healthcare Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to enhance patient care, improve outcomes, and optimize healthcare operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Modules */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our integrated modules provide complete healthcare analytics solutions for every aspect of patient care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI healthcare platform transforms different aspects of healthcare delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Enterprise-Grade Compliance & Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with healthcare-grade security and full regulatory compliance to protect patient data and ensure regulatory adherence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Healthcare-Focused Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed specifically for healthcare organizations of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-700/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                    : 'border-gray-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-green-600 hover:from-cyan-600 hover:to-green-700 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Designed for Healthcare Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is tailored to meet the unique needs of various healthcare organizations and specialties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what healthcare professionals say about the transformative impact of our AI platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-cyan-900 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare organizations in leveraging AI to improve patient outcomes and operational efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              >
                Schedule Demo
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
            
            <p className="text-gray-400 mt-6">
              No credit card required • 30-day free trial • HIPAA compliant
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareAnalyticsPlatform;