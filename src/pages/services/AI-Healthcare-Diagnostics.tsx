import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Heart, 
  Stethoscope, 
  Brain, 
  Zap, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  Shield,
  Globe,
  Phone,
  Mail,
  MapPin,
  Star,
  Award,
  Rocket,
  Target,
  PieChart,
  Gauge,
  ShieldCheck,
  Search,
  BookOpen,
  Scale,
  Building,
  Cpu,
  Database,
  Network,
  Cloud,
  Code,
  Settings,
  Key,
  Eye,
  PenTool,
  MessageSquare,
  Calendar,
  Play,
  Download,
  ExternalLink,
  Activity,
  Server,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Microscope,
  FileText,
  Image,
  Scan,
  X,
  Mri,
  Ultrasound,
  Thermometer,
  Syringe,
  Pill,
  Bandage
} from 'lucide-react';

export default function AIHealthcareDiagnostics() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Medical Imaging",
      description: "Advanced AI algorithms analyze X-rays, MRIs, CT scans, and ultrasounds with 95% accuracy, detecting abnormalities and diseases early."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Predictive Disease Analysis",
      description: "AI models predict disease progression and patient outcomes, enabling proactive treatment planning and personalized care."
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Clinical Decision Support",
      description: "Real-time diagnostic assistance that helps healthcare professionals make informed decisions and improve patient outcomes."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Patient Data Analytics",
      description: "Comprehensive analysis of patient data, medical history, and treatment responses for personalized medicine approaches."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "HIPAA Compliant Security",
      description: "Enterprise-grade security with full HIPAA compliance, ensuring patient data privacy and regulatory adherence."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Specialty Support",
      description: "Support for cardiology, radiology, oncology, neurology, and other medical specialties with specialized AI models."
    }
  ];

  const benefits = [
    "Improve diagnostic accuracy by 85%",
    "Reduce diagnosis time by 70%",
    "Increase early detection rates by 60%",
    "Lower healthcare costs by 40%",
    "Improve patient outcomes by 50%",
    "Reduce medical errors by 80%"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$7,999",
      period: "one-time",
      features: [
        "Up to 100 patients/month",
        "Basic AI diagnostics",
        "Standard imaging support",
        "Email support",
        "Basic integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$12,999",
      period: "one-time",
      features: [
        "Up to 500 patients/month",
        "Advanced AI algorithms",
        "Multi-specialty support",
        "Priority support",
        "Advanced integrations",
        "Custom workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$24,999",
      period: "one-time",
      features: [
        "Unlimited patients",
        "Full AI suite",
        "Custom AI training",
        "Dedicated support",
        "White-label options",
        "API access"
      ],
      popular: false
    }
  ];

  const integrations = [
    "PACS", "EHR", "HIS", "RIS", "DICOM", "HL7", "FHIR", 
    "Epic", "Cerner", "Allscripts", "Meditech", "Athena",
    "Practice Fusion", "eClinicalWorks", "NextGen"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI-Powered Healthcare Diagnostics Platform | Zion Tech Group"
        description="Revolutionary healthcare platform that uses AI to analyze medical images, predict diseases, and assist healthcare professionals in diagnosis. Improves diagnostic accuracy by 85% and reduces diagnosis time by 70%."
        keywords="AI healthcare, medical diagnostics, medical imaging, AI medicine, healthcare AI, diagnostic assistance, medical AI platform"
        canonical="https://ziontechgroup.com/services/ai-healthcare-diagnostics"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-900/20 border border-pink-500/30 text-pink-300 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Healthcare
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">
                Diagnostics Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform healthcare delivery with AI that analyzes medical images, 
              predicts diseases, and provides diagnostic assistance for better patient outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-pink-500/30 text-pink-300 font-semibold rounded-lg hover:bg-pink-500/10 transition-all duration-300 flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-pink-400 mb-2">85%</div>
              <div className="text-gray-300">Accuracy Improvement</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-red-400 mb-2">70%</div>
              <div className="text-gray-300">Time Reduction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
              <div className="text-gray-300">Early Detection</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare Features for Modern Medicine
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform provides everything healthcare professionals need to improve 
              diagnostic accuracy and patient outcomes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="text-pink-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Healthcare Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform healthcare delivery with AI-powered insights and diagnostic assistance.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">ROI Calculator</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Current Monthly Cost:</span>
                  <span className="text-white font-semibold">$45,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">With AI Platform:</span>
                  <span className="text-white font-semibold">$27,000</span>
                </div>
                <div className="border-t border-slate-600 pt-4">
                  <div className="flex justify-between">
                    <span className="text-green-400 font-semibold">Monthly Savings:</span>
                    <span className="text-green-400 font-bold text-xl">$18,000</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-2">
                    Annual savings: $216,000
                  </div>
                </div>
              </div>
            </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that best fits your healthcare organization's needs and scale as you grow.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-pink-500 bg-slate-800/70' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-600 to-red-600 text-white hover:from-pink-700 hover:to-red-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Healthcare Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with your existing healthcare systems and workflows for maximum efficiency.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/50 border border-slate-600 rounded-lg p-4 text-center hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="text-white font-medium">{integration}</div>
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
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of healthcare organizations already using AI to improve diagnostic accuracy and patient outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-pink-500/30 text-pink-300 font-semibold rounded-lg hover:bg-pink-500/10 transition-all duration-300 flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Ready to revolutionize healthcare? Our team is here to help 
                you get started with AI-powered diagnostics.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-pink-400 mr-3" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-pink-400 mr-3" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-pink-400 mr-3" />
                  <span className="text-gray-300">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-700/50 border border-slate-600 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Request Information
              </h3>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Healthcare Organization"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none"
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-red-700 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}