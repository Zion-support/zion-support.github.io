import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {

  Brain,
  Zap,
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
  Bank,
  Insurance,
  Law,
  Gavel,
  FileText,
  Calendar,
  Timer,
  Stopwatch,
  Thermometer,
  Compass,
  Map,
  Navigation,
  Leaf,
  Tree,
  Flower,
  Seedling,
  Sprout,
  Cactus,
  Mushroom,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Cow,
  Pig,
  Sheep,
  Horse,
  Elephant,
  Giraffe,
  Lion,
  Tiger,
  Bear,
  Wolf,
  Fox,
  Deer,
  Moose,
  Panda,
  Koala,
  Kangaroo,
  Platypus,
  Echidna,
  Wombat,
  TasmanianDevil,
  Quokka,
  Dingo,
  Emu,
  Kiwi,
  Penguin,
  Seagull,
  Eagle,
  Hawk,
  Owl,
  Crow,
  Raven,
  Sparrow,
  Robin,
  BlueJay,
  Cardinal,
  Goldfinch,
  Canary,
  Parrot,
  Macaw,
  Cockatoo,
  Budgie,
  Lovebird,
  Cockatiel,
  AfricanGrey,
  Amazon,
  Eclectus,
  Pionus,
  Conure,
  Quaker,
  Ringneck,
  Alexandrine,
  IndianRingneck,
  AlexandrineParakeet,
  PlumHead,
  Derbyan,
  Moustached,
  SlatyHead,
  GreyHead,
  RedBreasted,
  OrangeBellied,
  Turquoise,
  Scarlet,
  Green,
  Blue,
  Yellow,
  White,
  Black,
  Brown,
  Grey,
  Pink,
  Purple,
  Orange,
  Red,
  Green2,
  Blue2,
  Yellow2,
  White2,
  Black2,
  Brown2,
  Grey2,
  Pink2,
  Purple2,
  Orange2,
  Red2,
  Droplets,
  Wind,
  Sun,
  Moon,
  CloudRain,
  CloudLightning,
  Snowflake,
  Umbrella,
  Waves,
  Mountain,
  TreePine,
  ThermometerIcon,
  Gauge,
  PieChart,
  LineChart,
  BarChart,
  ScatterChart,
  AreaChart
} from 'lucide-react';

export function AISustainabilityAnalyticsPlatform() {

  const features = [
    {

      icon: Brain,
      title: 'AI-Powered Environmental Impact Analysis',
      description: 'Advanced machine learning algorithms that analyze and predict environmental impact across all operations',
      benefits: ['Carbon footprint tracking', 'Environmental risk assessment', 'Predictive impact modeling', 'Sustainability scoring']
    },
    {

      icon: Leaf,
      title: 'Real-Time Sustainability Monitoring',
      description: 'Continuous monitoring of environmental metrics with instant alerts and recommendations',
      benefits: ['Live environmental data', 'Automated reporting', 'Compliance monitoring', 'Performance tracking']
    },
    {

      icon: BarChart3,
      title: 'Comprehensive ESG Analytics',
      description: 'Environmental, Social, and Governance metrics with AI-driven insights and recommendations',
      benefits: ['ESG scoring', 'Benchmarking', 'Trend analysis', 'Stakeholder reporting']
    },
    {

      icon: Zap,
      title: 'Automated Sustainability Optimization',
      description: 'AI-driven recommendations for reducing environmental impact and improving sustainability',
      benefits: ['Resource optimization', 'Waste reduction', 'Energy efficiency', 'Cost savings']
    },
    {

      icon: Globe,
      title: 'Global Compliance & Standards',
      description: 'Support for international sustainability standards and regulatory compliance',
      benefits: ['ISO 14001 support', 'GRI reporting', 'CDP compliance', 'Regulatory updates']
    }
  ];

  const pricingPlans = [
    {

      name: 'Green Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses starting their sustainability journey',
      features: [
        'Basic environmental tracking',
        'Carbon footprint calculation',
        'Standard reporting',
        'Email support',
        'Up to 5 users',
        'Basic compliance tools'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {

      name: 'Sustainability Pro',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses with sustainability goals',
      features: [
        'Advanced AI analytics',
        'ESG scoring & benchmarking',
        'Real-time monitoring',
        'Priority support',
        'Up to 25 users',
        'Advanced reporting',
        'API access',
        'Custom dashboards'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {

      name: 'Enterprise Green',
      price: 'Custom',
      period: '',
      description: 'For large organizations with comprehensive sustainability needs',
      features: [
        'Full AI capabilities',
        'Unlimited users',
        'Custom integrations',
        '24/7 dedicated support',
        'SLA guarantees',
        'On-premise deployment',
        'White-label options',
        'Custom algorithms'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const sustainabilityFeatures = [
    {

      title: 'Carbon Management',
      description: 'Comprehensive carbon footprint tracking and reduction strategies',
      icon: Cloud,
      benefits: ['Scope 1, 2, 3 emissions', 'Carbon offset tracking', 'Reduction strategies', 'Net-zero planning']
    },
    {

      title: 'Energy Efficiency',
      description: 'AI-powered energy optimization and renewable energy integration',
      icon: Zap,
      benefits: ['Energy consumption analysis', 'Efficiency recommendations', 'Renewable integration', 'Cost optimization']
    },
    {

      title: 'Waste Management',
      description: 'Intelligent waste reduction and circular economy optimization',
      icon: Trash,
      benefits: ['Waste tracking', 'Reduction strategies', 'Recycling optimization', 'Circular economy planning']
    },
    {

      title: 'Water Conservation',
      description: 'Advanced water management and conservation analytics',
      icon: Droplets,
      benefits: ['Water usage tracking', 'Conservation strategies', 'Quality monitoring', 'Efficiency optimization']
    }
  ];

  const industrySolutions = [
    {

      title: 'Manufacturing',
      description: 'Sustainable manufacturing with resource optimization and waste reduction',
      icon: Factory,
      benefits: ['Green manufacturing', 'Resource efficiency', 'Waste reduction', 'Supply chain sustainability']
    },
    {

      title: 'Retail',
      description: 'Sustainable retail operations and supply chain optimization',
      icon: Store,
      benefits: ['Green retail', 'Sustainable sourcing', 'Energy efficiency', 'Waste reduction']
    },
    {

      title: 'Technology',
      description: 'Green technology solutions and sustainable data center management',
      icon: Code,
      benefits: ['Green computing', 'Data center efficiency', 'Sustainable development', 'Energy optimization']
    },
    {

      title: 'Healthcare',
      description: 'Sustainable healthcare with environmental impact reduction',
      icon: Stethoscope,
      benefits: ['Green healthcare', 'Medical waste reduction', 'Energy efficiency', 'Sustainable procurement']
    }
  ];

  const complianceFrameworks = [
    {

      name: 'ISO 14001',
      description: 'Environmental Management Systems',
      icon: Check,
      features: ['Environmental policy', 'Impact assessment', 'Compliance monitoring', 'Continuous improvement']
    },
    {

      name: 'GRI Standards',
      description: 'Global Reporting Initiative',
      icon: FileText,
      features: ['Sustainability reporting', 'Stakeholder engagement', 'Materiality assessment', 'Performance indicators']
    },
    {

      name: 'CDP',
      description: 'Carbon Disclosure Project',
      icon: Globe,
      features: ['Carbon reporting', 'Climate risk assessment', 'Target setting', 'Stakeholder communication']
    },
    {

      name: 'SASB',
      description: 'Sustainability Accounting Standards Board',
      icon: BarChart3,
      features: ['Financial materiality', 'Industry standards', 'Risk assessment', 'Performance metrics']
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-teal-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full">
                <Leaf className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              AI Sustainability Analytics Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business sustainability with AI-powered analytics. 
              Measure, optimize, and lead the way in environmental responsibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Revolutionary Sustainability Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive insights into your environmental impact and sustainability performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
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

      {/* Sustainability Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/10 to-emerald-900/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Sustainability Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From carbon management to waste reduction, optimize every aspect of your sustainability efforts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sustainabilityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 p-6 rounded-xl border border-emerald-500/20"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industry-Specific Sustainability Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored sustainability strategies for your specific industry and business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 p-6 rounded-xl border border-teal-500/20 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{solution.description}</p>
                <ul className="space-y-1 text-left">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-teal-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/10 to-emerald-900/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Global Compliance & Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built-in support for international sustainability standards and regulatory compliance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 p-6 rounded-xl border border-emerald-500/20"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg mr-4">
                    <framework.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{framework.name}</h3>
                    <p className="text-gray-400 text-sm">{framework.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {framework.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/10 to-emerald-900/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sustainable Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your sustainability goals and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-8 rounded-xl border ${

                  plan.popular 
                    ? 'border-green-500/50 shadow-lg shadow-green-500/20' 
                    : 'border-green-500/20'
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.name === 'Enterprise Green' ? '/contact' : '/pricing'}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                      : 'border border-green-500 text-green-400 hover:bg-green-500 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Lead in Sustainability?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join forward-thinking businesses that are transforming their environmental impact with AI-powered sustainability analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                View Full Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}