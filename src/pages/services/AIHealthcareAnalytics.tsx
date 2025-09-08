import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Heart, 
  Activity, 
  Brain, 
  Activity, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  BarChart3, 
  Zap,
  Users,
  Globe,
  Database,
  FileText,
  AlertTriangle,
  Star,
  Award,
  Rocket,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  LineChart,
  Microscope,
  Stethoscope,
  Pill,
  Hospital
} from 'lucide-react';

export default function AIHealthcareAnalytics() {
  const features = [
    {
      icon: Brain,
      title: 'Predictive Diagnostics',
      description: 'AI-powered early disease detection and predictive analytics for proactive healthcare',
      benefits: ['Early disease detection', 'Risk assessment algorithms', 'Predictive modeling', 'Preventive care recommendations']
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Continuous health monitoring with real-time data analysis and alert systems',
      benefits: ['24/7 health monitoring', 'Real-time alerts', 'Vital signs tracking', 'Anomaly detection']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamless integration with EHR systems, wearables, and medical devices',
      benefits: ['EHR integration', 'Wearable device sync', 'Medical device connectivity', 'Data standardization']
    },
    {
      icon: TrendingUp,
      title: 'Treatment Optimization',
      description: 'AI-driven treatment recommendations based on patient data and medical research',
      benefits: ['Personalized treatment plans', 'Drug interaction analysis', 'Outcome prediction', 'Clinical decision support']
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'HIPAA-compliant data handling with enterprise-grade security and privacy protection',
      benefits: ['HIPAA compliance', 'Data encryption', 'Access controls', 'Audit trails']
    },
    {
      icon: Users,
      title: 'Patient Engagement',
      description: 'Interactive patient portals and engagement tools for better health outcomes',
      benefits: ['Patient portals', 'Health education', 'Appointment scheduling', 'Communication tools']
    }
  ];

  const pricingPlans = [
    {
      name: 'Clinic',
      price: '$1,999',
      period: '/month',
      description: 'Perfect for small clinics and medical practices',
      features: [
        'Up to 100 patients',
        'Basic AI analytics',
        'EHR integration',
        'Standard reporting',
        'Email support',
        'Basic compliance tools'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Hospital',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for hospitals and larger medical facilities',
      features: [
        'Up to 1,000 patients',
        'Advanced AI analytics',
        'Full EHR integration',
        'Custom reporting',
        'Priority support',
        'Advanced compliance',
        'Real-time monitoring'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$12,999',
      period: '/month',
      description: 'For healthcare systems and large organizations',
      features: [
        'Unlimited patients',
        'Custom AI models',
        'Multi-facility support',
        'White-label solution',
        'Dedicated support',
        'API access',
        'Advanced security'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Chronic Disease Management',
      description: 'Monitor and manage chronic conditions with AI-powered insights and predictive analytics',
      icon: Heart,
      benefits: ['Diabetes management', 'Hypertension monitoring', 'Cardiac care', 'Respiratory tracking']
    },
    {
      title: 'Preventive Care',
      description: 'Identify health risks early and provide preventive care recommendations',
      icon: Shield,
      benefits: ['Health screenings', 'Risk assessments', 'Lifestyle recommendations', 'Vaccination tracking']
    },
    {
      title: 'Clinical Research',
      description: 'Accelerate medical research with AI-powered data analysis and insights',
      icon: Microscope,
      benefits: ['Clinical trials', 'Data mining', 'Pattern recognition', 'Outcome analysis']
    },
    {
      title: 'Population Health',
      description: 'Analyze population health trends and implement community health programs',
      icon: Users,
      benefits: ['Epidemiology studies', 'Health trends analysis', 'Community programs', 'Public health insights']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Williams',
      role: 'Chief Medical Officer',
      organization: 'City General Hospital',
      content: 'The AI Healthcare Analytics platform has transformed how we deliver care. Early detection rates have improved by 40%.',
      rating: 5
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Family Physician',
      organization: 'Community Health Clinic',
      content: 'The predictive analytics help me identify at-risk patients before they develop serious complications.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Research Director',
      organization: 'Medical Research Institute',
      content: 'Our research efficiency has increased dramatically with AI-powered data analysis and insights.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Healthcare Analytics - Zion Tech Group"
        description="Transform healthcare delivery with AI-powered analytics. Improve patient outcomes, optimize treatments, and enhance clinical decision-making with intelligent healthcare data analysis."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/20 text-red-300 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Analytics
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with intelligent AI that analyzes patient data, predicts health outcomes, 
              and optimizes treatment plans for better patient care and improved clinical outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-gray-500 transition-all duration-200"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI Healthcare Analytics platform combines cutting-edge technology with medical expertise to deliver 
              actionable insights that improve patient care and clinical outcomes.
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
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-red-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
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
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI Healthcare Analytics platform addresses critical healthcare challenges across various specialties and use cases.
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
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-red-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your healthcare facility size and requirements. All plans include HIPAA compliance and security.
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
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-red-500 ring-2 ring-red-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/request-quote"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join leading healthcare facilities already using AI Healthcare Analytics to improve patient care and outcomes.
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
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the healthcare revolution with AI-powered analytics that improve patient outcomes and clinical efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-200"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 transition-all duration-200"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-red-400 mb-4" />
              <p className="text-white font-semibold">Phone</p>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-red-400 mb-4" />
              <p className="text-white font-semibold">Email</p>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-red-400 mb-4" />
              <p className="text-white font-semibold">Address</p>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}