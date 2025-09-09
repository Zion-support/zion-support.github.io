import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Heart, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Cpu, 
  Rocket,
  Stethoscope,
  Activity,
  Lock,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Microscope,
  Pill,
  Monitor,
  Database
} from 'lucide-react';

export default function AIHealthcareAnalytics() {
  const features = [
    {
      icon: Brain,
      title: "AI Disease Prediction",
      description: "Advanced machine learning models that predict disease onset with 94% accuracy",
      benefits: ["Early detection", "Risk assessment", "Preventive care", "Personalized insights"]
    },
    {
      icon: Heart,
      title: "Real-time Patient Monitoring",
      description: "Continuous health monitoring with AI-powered anomaly detection",
      benefits: ["24/7 monitoring", "Instant alerts", "Predictive analytics", "Remote care"]
    },
    {
      icon: Shield,
      title: "HIPAA-Compliant Security",
      description: "Enterprise-grade security with blockchain-based patient data protection",
      benefits: ["End-to-end encryption", "Audit trails", "Compliance ready", "Data sovereignty"]
    },
    {
      icon: Zap,
      title: "Clinical Decision Support",
      description: "AI-powered clinical recommendations based on evidence-based medicine",
      benefits: ["Treatment optimization", "Drug interaction alerts", "Clinical guidelines", "Outcome prediction"]
    }
  ];

  const solutions = [
    {
      icon: Microscope,
      title: "Diagnostic Imaging AI",
      description: "Computer vision algorithms for radiology, pathology, and medical imaging",
      price: "$8,500/mo",
      features: ["X-ray analysis", "MRI interpretation", "Pathology slides", "3D reconstruction"]
    },
    {
      icon: Pill,
      title: "Drug Discovery Platform",
      description: "AI-powered pharmaceutical research and development acceleration",
      price: "$25,000/mo",
      features: ["Molecular modeling", "Clinical trial optimization", "Drug repurposing", "Safety prediction"]
    },
    {
      icon: Monitor,
      title: "Electronic Health Records",
      description: "Intelligent EHR system with natural language processing",
      price: "$12,000/mo",
      features: ["Voice transcription", "Clinical documentation", "Interoperability", "Analytics dashboard"]
    },
    {
      icon: Database,
      title: "Population Health Analytics",
      description: "Big data analytics for public health and epidemiology",
      price: "$18,000/mo",
      features: ["Disease tracking", "Outbreak prediction", "Resource optimization", "Policy insights"]
    }
  ];

  const pricing = [
    {
      name: "Clinical",
      price: "$12,000",
      period: "/month",
      description: "For hospitals and clinics",
      features: [
        "AI diagnostic tools",
        "Patient monitoring",
        "Clinical decision support",
        "Basic analytics",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Enterprise",
      price: "$35,000",
      period: "/month",
      description: "For healthcare systems",
      features: [
        "Full AI suite",
        "Custom integrations",
        "Advanced analytics",
        "Priority support",
        "Training & certification",
        "Compliance tools"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Research",
      price: "$75,000",
      period: "/month",
      description: "For research institutions",
      features: [
        "Research-grade AI models",
        "Custom algorithm development",
        "Data science team",
        "White-label solutions",
        "Publication support",
        "Grant assistance"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer, Metro Health",
      content: "ZION's AI Healthcare Analytics has transformed our diagnostic accuracy. We're catching conditions earlier and improving patient outcomes significantly.",
      rating: 5,
      company: "Metro Health"
    },
    {
      name: "Dr. Michael Chen",
      role: "Director of Research, Medical Institute",
      content: "The drug discovery platform accelerated our research by 300%. We're bringing life-saving treatments to market faster than ever.",
      rating: 5,
      company: "Medical Institute"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Head of Radiology, City Hospital",
      content: "The diagnostic imaging AI has reduced our reading time by 60% while maintaining 99% accuracy. It's a game-changer for our department.",
      rating: 5,
      company: "City Hospital"
    }
  ];

  const stats = [
    { value: "94%", label: "Diagnostic Accuracy", description: "AI-powered disease detection" },
    { value: "60%", label: "Time Reduction", description: "Faster diagnosis and treatment" },
    { value: "300%", label: "Research Speed", description: "Accelerated drug discovery" },
    { value: "500+", label: "Hospitals Served", description: "Trusted by healthcare leaders" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-zion-cyan/30 to-zion-blue/30 rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 px-4 py-2 rounded-full border border-zion-cyan/30 mb-6">
              <Heart className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">AI Healthcare Analytics</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              AI Healthcare Analytics
            </h1>
            
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Transform healthcare delivery with AI-powered analytics, predictive diagnostics, and intelligent clinical decision support. 
              Improve patient outcomes while reducing costs and enhancing operational efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-zion-cyan/50 text-zion-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light text-sm">{stat.label}</div>
                  <div className="text-zion-slate-light text-xs mt-1">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Revolutionary Healthcare AI
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the future of healthcare with our cutting-edge AI capabilities designed for medical professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-zion-cyan">
                      <CheckCircle className="w-4 h-4" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Specialized Healthcare Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive AI solutions tailored for different healthcare domains and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-zion-slate-light mb-4">{solution.description}</p>
                    
                    <div className="text-2xl font-bold text-zion-cyan mb-4">{solution.price}</div>
                    
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Healthcare-Focused Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your healthcare organization's needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-xl border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan scale-105' 
                    : 'border-zion-cyan/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg'
                      : 'border-2 border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See what medical professionals say about our AI Healthcare Analytics platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-zion-slate-light mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-zion-cyan">{testimonial.role}</div>
                    <div className="text-xs text-zion-slate-light">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the AI revolution in healthcare. Start your free trial today and experience the future of medical technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-zion-cyan/50 text-zion-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>

            <div className="mt-8 text-zion-slate-light">
              <p>Questions? Contact our healthcare team at <span className="text-zion-cyan">kleber@ziontechgroup.com</span></p>
              <p>Or call us at <span className="text-zion-cyan">+1 302 464 0950</span></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
