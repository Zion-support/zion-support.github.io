import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Shield,
  Users,
  BarChart3,
  Rocket,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
  Cpu,
  Database,
  Cloud,
  Lock,
  TrendingUp,
  Target,
  Heart,
  Eye,
  Activity,
  Code,
  Server,
  Network,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Clock,
  Award,
  Lightbulb,
  Sparkles,
  Atom,
  AlertTriangle,
  Bug,
  Search,
  Filter,
  Sort,
  Download,
  Upload,
  Share,
  Copy,
  Edit,
  Trash,
  Save,
  Plus,
  Minus,
  X,
  Check,
  Info,
  Key,
  Fingerprint,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Telescope,
  Microscope,
  Flask,
  Pill,
  Stethoscope,
  Calculator,
  BookOpen,
  GraduationCap,
  CreditCard,
  ShoppingCart,
  Truck,
  Warehouse,
  Factory,
  Building2,
  Home,
  Store,
  Building2,
  FileText,
  Calendar,
  Timer,
  Stopwatch,
  Thermometer,
  Compass,
  Map,
  Navigation,
  Scale,
  ShieldCheck,
  UserCheck,
  EyeOff,
  AlertCircle,
  CheckSquare,
  FileCheck,
  ClipboardCheck,
  BookMarked,
  GraduationCap as GraduationCapIcon,
  Users as UsersIcon,
  Settings as SettingsIcon,
  BarChart as BarChartIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Shield as ShieldIcon,
  Users as UsersIcon2,
  HardDrive as HardDriveIcon,
  TrendingUp as TrendingUpIcon,
  Building2 as Building2Icon,
  FileText as FileTextIcon,
  HelpCircle as HelpCircleIcon,
  BarChart3 as BarChart3Icon,
  Globe as GlobeIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Lock as LockIcon,
  Cloud as CloudIcon,
  Rocket as RocketIcon,
  Code as CodeIcon,
  Server as ServerIcon,
  Chip as ChipIcon,
  Wifi as WifiIcon,
  ShieldCheck as ShieldCheckIcon,
  Bot as BotIcon,
  Workflow as WorkflowIcon,
  Eye as EyeIcon,
  Sparkles as SparklesIcon,
  Atom as AtomIcon,
  Leaf as LeafIcon,
  Gamepad2 as Gamepad2Icon,
  Coins as CoinsIcon,
  Satellite as SatelliteIcon,
  Activity as ActivityIcon,
  MessageCircle as MessageCircleIcon,
  BarChart as BarChartIcon2,
  Users2 as Users2Icon,
  Settings as SettingsIcon2,
  Palette as PaletteIcon
} from 'lucide-react';

export function AIEthicalComplianceMonitor() {
  const features = [
    {
      icon: Scale,
      title: 'AI Ethics Monitoring',
      description: 'Continuous monitoring of AI systems for ethical compliance and bias detection',
      benefits: ['Real-time bias detection', 'Ethical guideline compliance', 'Transparency reporting']
    },
    {
      icon: ShieldCheck,
      title: 'Regulatory Compliance',
      description: 'Automated compliance checking for GDPR, CCPA, and industry-specific regulations',
      benefits: ['Multi-jurisdiction support', 'Automated audits', 'Compliance scoring']
    },
    {
      icon: Eye,
      title: 'Explainable AI',
      description: 'Make AI decisions transparent and interpretable for stakeholders',
      benefits: ['Decision transparency', 'Audit trails', 'Stakeholder communication']
    },
    {
      icon: Users,
      title: 'Stakeholder Management',
      description: 'Manage and communicate AI ethics to all stakeholders',
      benefits: ['Stakeholder dashboards', 'Communication tools', 'Training materials']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299/month',
      description: 'Perfect for small teams starting their AI ethics journey',
      features: [
        'Basic bias detection',
        'GDPR compliance monitoring',
        'Monthly reports',
        'Email support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$799/month',
      description: 'Comprehensive ethics monitoring for growing organizations',
      features: [
        'Advanced bias detection',
        'Multi-regulation compliance',
        'Real-time monitoring',
        'Weekly reports',
        'Priority support',
        'Custom dashboards'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999/month',
      description: 'Full-scale ethics compliance for large enterprises',
      features: [
        'AI-powered bias detection',
        'Global compliance coverage',
        'Custom integrations',
        'Dedicated support',
        'Training programs',
        'White-label solutions'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Ensure AI lending algorithms are fair and compliant with financial regulations',
      icon: Building2,
      benefits: ['Fair lending compliance', 'Regulatory reporting', 'Risk assessment']
    },
    {
      title: 'Healthcare',
      description: 'Monitor AI diagnostic tools for bias and ensure patient safety',
      icon: Stethoscope,
      benefits: ['Patient safety', 'Medical compliance', 'Bias elimination']
    },
    {
      title: 'HR & Recruitment',
      description: 'Ensure AI hiring tools are fair and compliant with employment laws',
      icon: Users,
      benefits: ['Fair hiring practices', 'EEO compliance', 'Diversity promotion']
    },
    {
      title: 'Government',
      description: 'Monitor AI systems for transparency and public accountability',
      icon: Building2,
      benefits: ['Public transparency', 'Regulatory compliance', 'Accountability']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Ethics Officer, TechCorp',
      content: 'The AI Ethical Compliance Monitor has transformed how we approach AI governance. It provides the transparency and accountability our stakeholders demand.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Compliance Director, HealthFirst',
      content: 'This platform ensures our AI diagnostic tools meet the highest ethical standards while maintaining regulatory compliance across multiple jurisdictions.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'VP Legal, FinTech Solutions',
      content: 'The automated compliance monitoring saves us countless hours and ensures we never miss a regulatory requirement in our AI systems.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30">
                <Scale className="w-4 h-4 mr-2" />
                AI Ethics & Compliance
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              AI Ethical Compliance
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Monitor</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            >
              Ensure your AI systems operate ethically, transparently, and in compliance with global regulations. 
              Monitor bias, ensure fairness, and maintain stakeholder trust with our comprehensive AI ethics platform.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Comprehensive AI Ethics Monitoring
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zion-slate-light max-w-3xl mx-auto"
            >
              Our platform provides end-to-end monitoring and compliance for AI systems, ensuring ethical operation and regulatory adherence.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
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
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Transparent Pricing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zion-slate-light max-w-3xl mx-auto"
            >
              Choose the plan that fits your organization's AI ethics monitoring needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">{plan.price}</div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.cta === 'Contact Sales' ? '/contact' : '/signup'}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-dark hover:to-zion-purple-dark'
                      : 'border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
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
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Industry Applications
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zion-slate-light max-w-3xl mx-auto"
            >
              Our AI ethics monitoring platform serves diverse industries with specialized compliance needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-zion-slate-light mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Trusted by Industry Leaders
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zion-slate-light max-w-3xl mx-auto"
            >
              See how organizations are transforming their AI ethics and compliance practices
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-zion-cyan text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Ready to Ensure AI Ethics & Compliance?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Join leading organizations in building trustworthy, ethical, and compliant AI systems
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                </div>
                <div className="text-left">
                  <p className="text-zion-slate-light text-sm">Phone</p>
                  <p className="text-white font-medium">+1 302 464 0950</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                </div>
                <div className="text-left">
                  <p className="text-zion-slate-light text-sm">Email</p>
                  <p className="text-white font-medium">kleber@ziontechgroup.com</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-zion-cyan" />
                </div>
                <div className="text-left">
                  <p className="text-zion-slate-light text-sm">Address</p>
                  <p className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AIEthicalComplianceMonitor;