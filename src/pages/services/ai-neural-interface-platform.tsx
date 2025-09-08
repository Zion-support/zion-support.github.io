import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Zap, 
  CheckCircle, 
  Target, 
  TrendingUp, 
  Users, 
  Lock,
  Eye,
  Shield,
  FileText,
  BarChart3,
  Globe,
  Award,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Rocket,
  Sparkles,
  Activity,
  Wifi,
  Smartphone,
  Monitor
} from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function AINeuralInterfacePlatform() {
  const features = [
    {
      icon: Brain,
      title: "Neural Data Processing",
      description: "Advanced algorithms that process neural signals in real-time, enabling direct brain-computer communication with 95% accuracy."
    },
    {
      icon: Cpu,
      title: "Device Control",
      description: "Seamless control of digital devices, applications, and systems through neural commands and thought patterns."
    },
    {
      icon: Zap,
      title: "Real-time Response",
      description: "Ultra-low latency neural interface that responds to brain signals within milliseconds for natural interaction."
    },
    {
      icon: Shield,
      title: "Secure Communication",
      description: "Military-grade encryption and security protocols to protect sensitive neural data and ensure privacy."
    },
    {
      icon: Eye,
      title: "Visual Feedback",
      description: "Real-time visual feedback and monitoring of neural activity for enhanced user experience and control."
    },
    {
      icon: Activity,
      title: "Adaptive Learning",
      description: "AI-powered learning algorithms that adapt to individual neural patterns and improve accuracy over time."
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Accessibility",
      description: "Enable individuals with physical disabilities to control devices and interact with technology through thought alone."
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Increase productivity and efficiency by eliminating the need for physical input devices and manual controls."
    },
    {
      icon: Brain,
      title: "Innovation",
      description: "Pioneer the future of human-computer interaction with cutting-edge neural interface technology."
    },
    {
      icon: Lock,
      title: "Security",
      description: "Enhanced security through biometric neural authentication that cannot be replicated or stolen."
    }
  ];

  const useCases = [
    {
      title: "Healthcare & Rehabilitation",
      description: "Assist patients with paralysis, enable prosthetic control, and provide new treatment options for neurological conditions.",
      icon: Users
    },
    {
      title: "Gaming & Entertainment",
      description: "Immersive gaming experiences, virtual reality control, and new forms of interactive entertainment.",
      icon: Monitor
    },
    {
      title: "Productivity & Work",
      description: "Control computers, applications, and smart devices through thought for enhanced workplace productivity.",
      icon: Cpu
    },
    {
      title: "Research & Development",
      description: "Advance neuroscience research, study brain-computer interfaces, and develop new neural technologies.",
      icon: Brain
    }
  ];

  const pricing = [
    {
      name: "Research Edition",
      price: "$12,999",
      period: "one-time",
      description: "Perfect for research institutions and academic studies",
      features: [
        "Basic neural interface",
        "Data collection tools",
        "Research documentation",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$15,999",
      period: "one-time",
      description: "Ideal for healthcare providers and developers",
      features: [
        "Advanced neural processing",
        "Custom device integration",
        "Training and consultation",
        "Priority support",
        "API access"
      ],
      featured: true
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "one-time",
      description: "Comprehensive solution for large organizations",
      features: [
        "Full neural interface platform",
        "Custom development",
        "Dedicated support team",
        "Compliance certification",
        "Ongoing maintenance"
      ]
    }
  ];

  const technicalSpecs = [
    {
      category: "Neural Processing",
      specs: [
        "95% signal accuracy",
        "<10ms response time",
        "Real-time data processing",
        "Adaptive learning algorithms"
      ]
    },
    {
      category: "Hardware Compatibility",
      specs: [
        "EEG headset integration",
        "Wireless connectivity",
        "Cross-platform support",
        "Mobile device compatibility"
      ]
    },
    {
      category: "Security & Privacy",
      specs: [
        "256-bit encryption",
        "Biometric authentication",
        "GDPR compliance",
        "HIPAA compliance"
      ]
    },
    {
      category: "Integration",
      specs: [
        "RESTful APIs",
        "SDK for developers",
        "Third-party plugins",
        "Custom integrations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100">
      <SEO 
        title="AI Neural Interface Platform - Brain-Computer Interface | Zion Tech Group"
        description="Advanced brain-computer interface platform that enables direct neural control of digital systems. Get real-time neural data processing and device control with 95% accuracy."
        keywords="Neural Interface, Brain-Computer Interface, Neural Control, Digital Systems, Neurotechnology, BCI"
        canonical="https://ziontechgroup.com/services/ai-neural-interface-platform"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Neural Interface Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-purple-100">
              Advanced brain-computer interface platform that enables direct neural control of digital systems. 
              Get real-time neural data processing and device control with 95% accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Signal Accuracy</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">900%</div>
              <div className="text-gray-600">ROI within 24 months</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">10-12</div>
              <div className="text-gray-600">Weeks Setup Time</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">99</div>
              <div className="text-gray-600">AI Neural Score</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Neural Interface Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge neuroscience with advanced AI to create the most 
              sophisticated brain-computer interface available today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Human-Computer Interaction
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of technology with direct neural control and unprecedented 
              accessibility for all users.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Applications Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our neural interface platform is revolutionizing how humans interact with technology 
              across diverse fields and applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{useCase.title}</h3>
                </div>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge technology and designed for maximum performance, 
              reliability, and security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{spec.category}</h3>
                <ul className="space-y-2">
                  {spec.specs.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment in the Future
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the neural interface solution that best fits your research, development, 
              or commercial needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-xl shadow-lg border-2 ${
                  plan.featured ? 'border-purple-500 ring-2 ring-purple-200' : 'border-gray-200'
                }`}
              >
                {plan.featured && (
                  <div className="bg-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    plan.featured
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Control Technology with Your Mind?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Join the revolution in human-computer interaction. Experience the future of 
              neural interface technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-purple-600 mb-3" />
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-600 mb-3" />
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-purple-600 mb-3" />
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}