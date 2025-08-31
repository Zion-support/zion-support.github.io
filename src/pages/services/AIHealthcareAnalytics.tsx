import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Zap, 
  Globe, 
  Users, 
  DollarSign,
  Activity,
  Shield,
  Smartphone,
  Monitor,
  Play,
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  FileText,
  Calendar,
  UserCheck,
  TrendingDown,
  Percent,
  Clock,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  BarChart3,
  TrendingUp,
  PieChart,
  LineChart,
  Calculator,
  Stethoscope,
  Pill,
  Microscope,
  Database,
  Lock,
  Eye
} from 'lucide-react';
import { SEO } from '../../components/SEO';

const AIHealthcareAnalytics = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Patient Analytics",
      description: "Advanced machine learning algorithms that analyze patient data to predict health outcomes with 94%+ accuracy"
    },
    {
      icon: Activity,
      title: "Real-time Health Monitoring",
      description: "Continuous monitoring of patient vitals, symptoms, and health trends with instant alerts and predictive insights"
    },
    {
      icon: Zap,
      title: "Automated Diagnosis Support",
      description: "AI-driven diagnostic assistance that helps healthcare providers make faster, more accurate treatment decisions"
    },
    {
      icon: Shield,
      title: "HIPAA-Compliant Security",
      description: "Enterprise-grade security with full HIPAA, GDPR, and healthcare compliance for sensitive patient data"
    },
    {
      icon: Globe,
      title: "Population Health Management",
      description: "Comprehensive analytics for managing population health, disease prevention, and public health initiatives"
    },
    {
      icon: Lock,
      title: "Advanced Privacy Controls",
      description: "Granular access controls, audit trails, and data anonymization for maximum patient privacy protection"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Diagnostic Accuracy",
      value: "94%+",
      description: "Improved diagnostic accuracy and treatment outcomes"
    },
    {
      icon: TrendingUp,
      title: "Patient Outcomes",
      value: "35-50%",
      description: "Better patient outcomes and recovery rates"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "60-80%",
      description: "Faster diagnosis and treatment response"
    },
    {
      icon: Percent,
      title: "Cost Reduction",
      value: "25-40%",
      description: "Reduced healthcare costs and resource waste"
    }
  ];

  const pricing = [
    {
      name: 'Clinic',
      price: '$799/mo',
      features: [
        'Up to 100 patients',
        'Basic AI analytics',
        'Patient monitoring',
        'Standard reporting',
        'Email support',
        'Basic compliance tools'
      ],
      popular: false
    },
    {
      name: 'Hospital',
      price: '$2,499/mo',
      features: [
        'Up to 1000 patients',
        'Advanced AI analytics',
        'Real-time monitoring',
        'Diagnostic support',
        'Priority support',
        'Custom dashboards',
        'API access',
        'Full compliance suite'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$6,999/mo',
      features: [
        'Unlimited patients',
        'Full AI healthcare suite',
        'Custom AI model training',
        'Dedicated support team',
        'Advanced analytics',
        'White-label solutions',
        'On-premise deployment',
        'Multi-facility support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Emily Rodriguez",
      role: "Chief Medical Officer",
      company: "Metropolitan Medical Center",
      content: "The AI healthcare analytics platform has revolutionized our patient care. We've improved diagnostic accuracy by 40% and reduced readmission rates significantly.",
      rating: 5
    },
    {
      name: "Dr. James Chen",
      role: "Emergency Department Director",
      company: "City General Hospital",
      content: "Real-time patient monitoring and AI-driven insights help us make better treatment decisions faster. The platform has saved countless lives.",
      rating: 5
    },
    {
      name: "Sarah Thompson",
      role: "Nursing Director",
      company: "Regional Healthcare System",
      content: "Automated patient monitoring and predictive analytics have improved our nursing efficiency and patient outcomes dramatically.",
      rating: 5
    }
  ];

  const integrations = [
    { name: "EHR Systems", icon: Database, description: "Epic, Cerner, Allscripts, Meditech" },
    { name: "Medical Devices", icon: Microscope, description: "Vital monitors, imaging systems, lab equipment" },
    { name: "Practice Management", icon: Monitor, description: "Athenahealth, Kareo, Practice Fusion" },
    { name: "Telehealth", icon: Smartphone, description: "Zoom, Doximity, Amwell, Teladoc" },
    { name: "Lab Systems", icon: Pill, description: "Quest, LabCorp, Epic Beaker" },
    { name: "Pharmacy", icon: Stethoscope, description: "Epic Willow, Cerner PharmNet" }
  ];

  const useCases = [
    "Patient Risk Assessment",
    "Disease Prediction & Prevention",
    "Treatment Optimization",
    "Population Health Management",
    "Clinical Research Support",
    "Healthcare Quality Improvement"
  ];

  const specialties = [
    "Cardiology",
    "Oncology",
    "Neurology",
    "Pediatrics",
    "Emergency Medicine",
    "Internal Medicine",
    "Surgery",
    "Psychiatry"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI Healthcare Analytics - Zion Tech Group"
        description="Transform healthcare with AI-powered analytics. Patient monitoring, diagnostic support, and improved outcomes. Start from $799/month."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <Heart className="w-4 h-4 mr-2 text-green-400" />
              AI-Powered Healthcare
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                AI Healthcare
              </span>
              <br />
              <span className="text-white">Analytics</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Revolutionize patient care with AI-powered healthcare analytics that provide real-time monitoring, 
              predictive diagnostics, and intelligent insights to improve outcomes and reduce costs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 flex items-center group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#demo"
                className="border border-green-400/30 text-green-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-400/10 transition-all duration-300 flex items-center group"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Proven Results
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact AI analytics can have on healthcare outcomes
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-green-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-green-400 mb-2">{benefit.value}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Advanced Healthcare Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive healthcare analytics capabilities powered by cutting-edge AI technology
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-green-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Specialties Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Medical Specialties
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI analytics solutions for various medical specialties and practice areas
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 border border-white/20 hover:border-green-400/40 transition-all duration-300 backdrop-blur-sm text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-medium">{specialty}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your healthcare facility needs and budget
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-green-400/40 transition-all duration-300 backdrop-blur-sm h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-green-400 mb-2">{plan.price}</div>
                    <p className="text-gray-400">per month</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="https://ziontechgroup.com/contact"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-400 hover:to-emerald-400 transition-all duration-300 text-center block"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Trusted by Healthcare Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what healthcare professionals are saying about our AI platform
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
                className="glass rounded-2xl p-8 border border-white/20 backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-green-400">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Seamless Integrations
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Works with your existing healthcare infrastructure and systems
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 border border-white/20 hover:border-green-400/40 transition-all duration-300 backdrop-blur-sm text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-gray-400 text-sm">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Use Cases
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specific applications and solutions for different healthcare challenges
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 border border-white/20 hover:border-green-400/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-white font-medium">{useCase}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare organizations that trust our AI-powered analytics platform 
              to improve patient outcomes, reduce costs, and enhance clinical decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="border border-green-400/30 text-green-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-400/10 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-green-400 mb-4" />
              <div className="text-white font-semibold">Phone</div>
              <a href="tel:+13024640950" className="text-green-400 hover:text-green-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-green-400 mb-4" />
              <div className="text-white font-semibold">Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-green-400 mb-4" />
              <div className="text-white font-semibold">Address</div>
              <div className="text-gray-300 text-center">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareAnalytics;
