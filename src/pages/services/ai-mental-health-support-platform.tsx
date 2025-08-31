import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Heart, 
  Brain, 
  Shield, 
  Users, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Activity,
  TrendingUp,
  Award,
  Lock,
  Smartphone,
  Database,
  BarChart3,
  Globe,
  Zap
} from 'lucide-react';

export default function AIMentalHealthSupportPlatform() {
  const features = [
    {
      title: "24/7 AI Mental Health Support",
      description: "Round-the-clock emotional support and crisis intervention with immediate response",
      icon: Clock,
      benefits: ["Instant response", "Crisis detection", "Escalation protocols", "Multilingual support"]
    },
    {
      title: "Personalized Therapy Sessions",
      description: "AI-driven therapy sessions tailored to individual needs and progress tracking",
      icon: Brain,
      benefits: ["Cognitive behavioral therapy", "Mindfulness exercises", "Progress tracking", "Adaptive content"]
    },
    {
      title: "Mood & Wellness Tracking",
      description: "Comprehensive monitoring of mental health patterns and early warning detection",
      icon: Activity,
      benefits: ["Daily mood tracking", "Sleep analysis", "Stress indicators", "Predictive insights"]
    },
    {
      title: "Professional Integration",
      description: "Seamless connection with licensed therapists and healthcare providers",
      icon: Users,
      benefits: ["Therapist matching", "Care coordination", "Progress sharing", "Emergency protocols"]
    }
  ];

  const pricingPlans = [
    {
      name: "Individual",
      price: "$49",
      period: "/month",
      description: "Personal mental health support for individuals",
      features: [
        "Unlimited AI conversations",
        "Daily mood tracking",
        "Basic therapy exercises",
        "Crisis intervention",
        "Mobile app access",
        "Email support"
      ],
      popular: false,
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Premium",
      price: "$99",
      period: "/month",
      description: "Enhanced features with professional integration",
      features: [
        "Everything in Individual",
        "Advanced therapy modules",
        "Therapist consultation (2/month)",
        "Progress reports",
        "Family support features",
        "Priority support",
        "Custom wellness plans"
      ],
      popular: true,
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "Corporate mental health solutions for organizations",
      features: [
        "Everything in Premium",
        "Team wellness analytics",
        "Manager dashboards",
        "Custom branding",
        "API integration",
        "Dedicated support",
        "Compliance reporting",
        "Training & workshops"
      ],
      popular: false,
      color: "from-green-400 to-emerald-500"
    }
  ];

  const benefits = [
    {
      title: "Immediate Support",
      description: "Get help when you need it most, 24/7 availability",
      icon: Clock,
      metric: "24/7"
    },
    {
      title: "Privacy & Security",
      description: "HIPAA-compliant platform with enterprise-grade security",
      icon: Lock,
      metric: "100%"
    },
    {
      title: "Cost Effective",
      description: "Affordable mental health support without insurance barriers",
      icon: DollarSign,
      metric: "80%"
    },
    {
      title: "Evidence-Based",
      description: "Clinically validated approaches with proven effectiveness",
      icon: Award,
      metric: "95%"
    }
  ];

  const useCases = [
    {
      audience: "Individuals",
      description: "Personal mental health support for daily challenges, stress management, and emotional well-being",
      benefits: "Improved mood, reduced anxiety, better sleep quality"
    },
    {
      audience: "Students",
      description: "Academic stress management, exam anxiety relief, and mental health support for educational institutions",
      benefits: "Better academic performance, reduced stress, improved focus"
    },
    {
      audience: "Workplace",
      description: "Employee mental health programs, stress management, and work-life balance support",
      benefits: "Increased productivity, reduced absenteeism, better team morale"
    },
    {
      audience: "Healthcare",
      description: "Supplemental mental health support for patients and integration with existing care plans",
      benefits: "Better patient outcomes, reduced readmissions, improved care coordination"
    }
  ];

  const statistics = [
    { number: "500K+", label: "Users Supported", icon: Users },
    { number: "24/7", label: "Availability", icon: Clock },
    { number: "95%", label: "User Satisfaction", icon: Heart },
    { number: "50+", label: "Languages", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Mental Health Support Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered mental health support platform providing 24/7 emotional support, personalized therapy, and crisis intervention. Start your mental wellness journey today." />
        <meta name="keywords" content="mental health, AI therapy, emotional support, crisis intervention, mental wellness, digital therapy, AI counseling" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-mental-health-support-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Mental Health
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Support Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform mental health support with our revolutionary AI platform. 
              Get 24/7 emotional support, personalized therapy, and crisis intervention 
              when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
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
              Why Choose Our Mental Health Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of mental health support with AI-powered 
              therapy and 24/7 emotional assistance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-blue-400">{benefit.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Mental Health Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform provides everything you need for mental wellness 
              and emotional support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700 rounded-lg border border-slate-600"
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
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
              Affordable Mental Health Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your mental health needs and budget. 
              All plans include our core AI support capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-lg border-2 ${
                  plan.popular 
                    ? 'border-blue-400 bg-slate-800 scale-105' 
                    : 'border-slate-600 bg-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white hover:from-blue-500 hover:to-purple-600'
                    : 'bg-slate-600 text-white hover:bg-slate-500'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supporting Every Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is designed to meet the unique mental health needs 
              of different individuals and organizations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700 rounded-lg border border-slate-600"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.audience}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="flex items-center text-blue-400 font-semibold">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  {useCase.benefits}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Prioritize Your Mental Health?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users already experiencing better mental wellness 
              with our AI-powered support platform. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8">
                Ready to transform your mental health support? Our team of experts 
                is here to help you get started with our AI-powered platform.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-blue-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-700 p-8 rounded-lg border border-slate-600"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Request Information
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
                <select className="w-full p-3 bg-slate-600 border border-slate-500 rounded-lg text-white focus:outline-none focus:border-blue-400">
                  <option value="">Select Plan Type</option>
                  <option value="individual">Individual</option>
                  <option value="premium">Premium</option>
                  <option value="enterprise">Enterprise</option>
                </select>
                <textarea
                  placeholder="Tell us about your mental health support needs"
                  rows={4}
                  className="w-full p-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
                >
                  Send Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}