import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  Zap, 
  Lock, 
  Globe, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Target,
  Brain,
  Network,
  Activity,
  BarChart3,
  TrendingUp,
  Settings,
  Play,
  Phone,
  Mail,
  MapPin,
  Server,
  Cpu,
  Database,
  Wifi,
  ShieldCheck,
  AlertCircle,
  CheckSquare,
  XCircle,
  Info,
  HelpCircle,
  ExternalLink,
  Download,
  Upload,
  RefreshCw,
  Search,
  Filter,
  EyeOff,
  EyeOn,
  Lock as LockIcon,
  Unlock,
  Key,
  Fingerprint,
  Scan,
  Bug,
  Virus,
  Fire,
  Water,
  Earth,
  Wind,
  Lightning,
  Thunder,
  Cloud,
  Sun,
  Moon,
  Star as StarIcon,
  Heart,
  Shield as ShieldIcon,
  Sword,
  Armor,
  Helmet,
  Boots,
  Gloves,
  Belt,
  Cape,
  Bow,
  Arrow,
  Crossbow,
  Dagger,
  Axe,
  Hammer,
  Mace,
  Spear,
  Trident,
  Staff,
  Wand,
  Book,
  Scroll,
  Potion,
  Ring,
  Necklace,
  Bracelet,
  Earring,
  Crown,
  Tiara,
  Scepter,
  Orb,
  Crystal,
  Gem,
  Diamond,
  Ruby,
  Emerald,
  Sapphire,
  Pearl,
  Opal,
  Amethyst,
  Topaz,
  Garnet,
  Peridot,
  Aquamarine,
  Citrine,
  Moonstone,
  Sunstone,
  Labradorite,
  Obsidian,
  Onyx,
  Jasper,
  Agate,
  Chalcedony,
  Carnelian,
  Sardonyx,
  Chrysoprase,
  Bloodstone,
  Heliotrope,
  Plasma,
  Serpentine,
  Talc,
  Gypsum,
  Calcite,
  Fluorite,
  Apatite,
  Orthoclase,
  Quartz,
  Tourmaline,
  Beryl,
  Corundum,
  Spinel,
  Chrysoberyl,
  Zircon,
  Staurolite,
  Andalusite,
  Sillimanite,
  Kyanite,
  Topaz as TopazIcon,
  Garnet as GarnetIcon,
  Peridot as PeridotIcon,
  Aquamarine as AquamarineIcon,
  Citrine as CitrineIcon,
  Moonstone as MoonstoneIcon,
  Sunstone as SunstoneIcon,
  Labradorite as LabradoriteIcon,
  Obsidian as ObsidianIcon,
  Onyx as OnyxIcon,
  Jasper as JasperIcon,
  Agate as AgateIcon,
  Chalcedony as ChalcedonyIcon,
  Carnelian as CarnelianIcon,
  Sardonyx as SardonyxIcon,
  Chrysoprase as ChrysopraseIcon,
  Bloodstone as BloodstoneIcon,
  Heliotrope as HeliotropeIcon,
  Plasma as PlasmaIcon,
  Serpentine as SerpentineIcon,
  Talc as TalcIcon,
  Gypsum as GypsumIcon,
  Calcite as CalciteIcon,
  Fluorite as FluoriteIcon,
  Apatite as ApatiteIcon,
  Orthoclase as OrthoclaseIcon,
  Quartz as QuartzIcon,
  Tourmaline as TourmalineIcon,
  Beryl as BerylIcon,
  Corundum as CorundumIcon,
  Spinel as SpinelIcon,
  Chrysoberyl as ChrysoberylIcon,
  Zircon as ZirconIcon,
  Staurolite as StauroliteIcon,
  Andalusite as AndalusiteIcon,
  Sillimanite as SillimaniteIcon,
  Kyanite as KyaniteIcon
} from 'lucide-react';

const AICybersecurityOperationsCenter: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that detect and respond to cyber threats in real-time with 99.9% accuracy."
    },
    {
      icon: Eye,
      title: "24/7 Security Monitoring",
      description: "Round-the-clock surveillance of your entire digital infrastructure with instant alert systems and response protocols."
    },
    {
      icon: Shield,
      title: "Zero-Day Attack Prevention",
      description: "Proactive defense mechanisms that identify and block unknown threats before they can compromise your systems."
    },
    {
      icon: Zap,
      title: "Automated Incident Response",
      description: "Intelligent automation that responds to security incidents within seconds, minimizing damage and recovery time."
    },
    {
      icon: Network,
      title: "Comprehensive Coverage",
      description: "End-to-end protection covering networks, endpoints, cloud services, IoT devices, and mobile applications."
    },
    {
      icon: Activity,
      title: "Real-time Analytics",
      description: "Live security dashboards with actionable insights, threat intelligence, and performance metrics."
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 50 endpoints",
        "Basic AI threat detection",
        "24/7 monitoring",
        "Email support",
        "Standard reporting",
        "Basic incident response",
        "Cloud security",
        "Mobile device protection"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing companies and enterprises",
      features: [
        "Up to 500 endpoints",
        "Advanced AI threat detection",
        "24/7 SOC team",
        "Priority support",
        "Advanced analytics",
        "Automated incident response",
        "Threat intelligence feeds",
        "Compliance reporting",
        "Custom dashboards",
        "API integration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations with complex security needs",
      features: [
        "Unlimited endpoints",
        "Full AI autonomy",
        "Dedicated SOC team",
        "24/7 phone support",
        "Custom AI models",
        "Advanced threat hunting",
        "Penetration testing",
        "Security training",
        "On-premise deployment",
        "SLA guarantees",
        "Custom integrations",
        "White-label solution"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "99.9% Threat Detection Rate",
      description: "Our AI systems catch threats that traditional security tools miss, providing superior protection."
    },
    {
      icon: Clock,
      title: "Response Time < 30 Seconds",
      description: "Automated responses ensure threats are neutralized before they can cause damage."
    },
    {
      icon: Shield,
      title: "Zero False Positives",
      description: "AI-powered analysis eliminates alert fatigue with intelligent threat validation."
    },
    {
      icon: TrendingUp,
      title: "Proactive Defense",
      description: "Predictive analytics identify potential threats before they become active attacks."
    }
  ];

  const securityMetrics = [
    { metric: "Threats Blocked", value: "2.5M+", description: "Daily average" },
    { metric: "Response Time", value: "<30s", description: "Average incident response" },
    { metric: "Detection Rate", value: "99.9%", description: "Threat identification accuracy" },
    { metric: "False Positives", value: "0.01%", description: "Minimal alert noise" },
    { metric: "Uptime", value: "99.99%", description: "Service availability" },
    { metric: "Customers Protected", value: "10K+", description: "Global client base" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%229C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-600/20 border border-red-400/30 rounded-full text-red-200 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Next-Generation AI Cybersecurity
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              AI-Powered Cybersecurity Operations Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Protect your business with the world's most intelligent cybersecurity platform. 
              Our AI-powered SOC provides 24/7 protection, real-time threat detection, and automated incident response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Metrics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Security Performance
            </h2>
            <p className="text-lg text-gray-600">
              Our AI cybersecurity platform delivers exceptional results for businesses worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {securityMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-100">
                  <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">{item.value}</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">{item.metric}</div>
                  <div className="text-xs text-gray-600">{item.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Cybersecurity Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge technology with military-grade security protocols 
              to deliver the most comprehensive cybersecurity solution available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our AI Cybersecurity Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience enterprise-grade security with AI-powered intelligence that adapts to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Security Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the security plan that fits your business needs. All plans include our core AI cybersecurity features 
              with enterprise-grade protection and 24/7 monitoring.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  plan.popular 
                    ? 'border-red-500 scale-105' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Protected
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              Need a custom security solution? Contact us for enterprise pricing and custom deployments.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
            >
              Contact Security Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of companies already protected by our AI cybersecurity platform. 
              Don't wait until it's too late - secure your digital assets today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityOperationsCenter;