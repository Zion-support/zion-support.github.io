import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Users, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  MentalHealth,
  AI,
  Cloud,
  Security,
  Analytics,
  Integration,
  Zap,
  Cpu,
  Database,
  Network,
  Therapy,
  Wellness,
  Support,
  Privacy,
  Accessibility,
  Monitoring,
  Intervention
} from 'lucide-react';

const AIMentalHealthSupportPlatform: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Therapy",
      description: "Intelligent conversational AI that provides evidence-based therapeutic interventions and support"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Emotional Intelligence",
      description: "Advanced emotion recognition and response systems for personalized mental health care"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock mental health support with immediate crisis intervention capabilities"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy & Security",
      description: "HIPAA-compliant platform with end-to-end encryption and strict data protection protocols"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Continuous mental health tracking with early warning systems and proactive interventions"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Professional Integration",
      description: "Seamless integration with mental health professionals and healthcare systems"
    }
  ];

  const pricingPlans = [
    {
      name: "Individual",
      price: "$99",
      period: "/month",
      description: "Perfect for individuals seeking mental health support",
      features: [
        "Unlimited AI therapy sessions",
        "24/7 crisis support",
        "Mood tracking & analytics",
        "Basic wellness resources",
        "Email support",
        "Mobile app access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for mental health professionals and small practices",
      features: [
        "All Individual features",
        "Client management tools",
        "Professional analytics dashboard",
        "Integration with EHR systems",
        "Priority support",
        "Custom branding options"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For healthcare organizations and large institutions",
      features: [
        "All Professional features",
        "Multi-location management",
        "Advanced analytics & reporting",
        "Custom AI model training",
        "Dedicated support team",
        "White-label solution",
        "API access",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <MentalHealth className="w-8 h-8" />,
      title: "Improved Mental Health",
      description: "Evidence-based interventions that lead to measurable improvements in mental well-being"
    },
    {
      icon: <Accessibility className="w-8 h-8" />,
      title: "Universal Access",
      description: "Make mental health support available to everyone, anywhere, anytime"
    },
    {
      icon: <Privacy className="w-8 h-8" />,
      title: "Complete Privacy",
      description: "Bank-grade security with HIPAA compliance and strict data protection"
    },
    {
      icon: <AI className="w-8 h-8" />,
      title: "Intelligent Care",
      description: "AI-powered insights and personalized treatment recommendations"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Native",
      description: "Built for modern healthcare infrastructure with seamless scaling"
    },
    {
      icon: <Analytics className="w-8 h-8" />,
      title: "Data-Driven Insights",
      description: "Comprehensive analytics for better treatment outcomes and care coordination"
    }
  ];

  const useCases = [
    {
      title: "Individual Therapy",
      description: "Personalized AI therapy sessions for anxiety, depression, and stress management",
      icon: <Therapy className="w-6 h-6" />
    },
    {
      title: "Crisis Intervention",
      description: "Immediate support and intervention for mental health emergencies",
      icon: <Support className="w-6 h-6" />
    },
    {
      title: "Professional Practice",
      description: "Tools for mental health professionals to enhance client care",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Healthcare Integration",
      description: "Seamless integration with hospitals, clinics, and healthcare systems",
      icon: <Integration className="w-6 h-6" />
    }
  ];

  const interventions = [
    {
      title: "Cognitive Behavioral Therapy",
      description: "AI-powered CBT techniques for anxiety and depression",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Mindfulness & Meditation",
      description: "Guided mindfulness practices and meditation sessions",
      icon: <Wellness className="w-6 h-6" />
    },
    {
      title: "Crisis Support",
      description: "Immediate intervention and emergency response systems",
      icon: <Intervention className="w-6 h-6" />
    },
    {
      title: "Progress Monitoring",
      description: "Continuous tracking of mental health progress and outcomes",
      icon: <Monitoring className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Mental Health Support Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform mental health care with AI-powered therapy and support. Provide 24/7 mental health 
              assistance with privacy, accessibility, and evidence-based interventions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-pink-600 text-pink-400 hover:bg-pink-600 hover:text-white font-semibold rounded-lg transition-colors"
              >
                Call +1 302 464 0950
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Mental Health Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of mental health care with AI-powered technology
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
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="text-pink-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Mental Health Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI is transforming mental health care and support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-pink-500/50 transition-all duration-300 text-center"
              >
                <div className="text-pink-400 mb-4 flex justify-center">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interventions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Evidence-Based Interventions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven therapeutic approaches enhanced with AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interventions.map((intervention, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-pink-500/50 transition-all duration-300 text-center"
              >
                <div className="text-pink-400 mb-4 flex justify-center">{intervention.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{intervention.title}</h3>
                <p className="text-gray-300 text-sm">{intervention.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Mental Health Support?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform mental health care with cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-pink-400 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your mental health support needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-pink-500 ring-2 ring-pink-500/20' 
                    : 'border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-pink-600 hover:bg-pink-700 text-white'
                      : 'bg-transparent border-2 border-pink-600 text-pink-400 hover:bg-pink-600 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Mental Health Care?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the mental health technology revolution and help more people today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-pink-600 text-pink-400 hover:bg-pink-600 hover:text-white font-semibold rounded-lg transition-colors"
              >
                Contact Sales Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-pink-400 mb-2">Phone</h4>
              <a href="tel:+13024640950" className="text-white hover:text-pink-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-pink-400 mb-2">Email</h4>
              <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-pink-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-pink-400 mb-2">Address</h4>
              <p className="text-white">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMentalHealthSupportPlatform;