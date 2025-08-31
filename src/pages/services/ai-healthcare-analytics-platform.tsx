import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Activity, 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Target,
  TrendingUp,
  BarChart3,
  Eye,
  Database,
  Cpu,
  Network,
  Settings,
  Play,
  Phone,
  Mail,
  MapPin,
  Server,
  Wifi,
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
  Lock,
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

const AIHealthcareAnalyticsPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnosis Support",
      description: "Advanced machine learning algorithms that assist healthcare providers with accurate diagnosis and treatment recommendations."
    },
    {
      icon: Activity,
      title: "Real-time Patient Monitoring",
      description: "Continuous monitoring of patient vital signs, symptoms, and treatment responses with instant alert systems."
    },
    {
      icon: Heart,
      title: "Predictive Health Analytics",
      description: "Forecast potential health issues, disease progression, and treatment outcomes using historical data and AI models."
    },
    {
      icon: Zap,
      title: "Automated Clinical Workflows",
      description: "Streamline healthcare processes with intelligent automation that reduces administrative burden and improves efficiency."
    },
    {
      icon: Shield,
      title: "HIPAA Compliant Security",
      description: "Enterprise-grade security with end-to-end encryption, role-based access control, and full HIPAA compliance."
    },
    {
      icon: Users,
      title: "Multi-Provider Integration",
      description: "Seamless connectivity with 200+ healthcare systems, EHR platforms, and medical devices."
    }
  ];

  const pricingPlans = [
    {
      name: "Clinic",
      price: "$399",
      period: "/month",
      description: "Perfect for small clinics and medical practices",
      features: [
        "Up to 10 providers",
        "Basic AI analytics",
        "Patient monitoring",
        "Email support",
        "Standard reporting",
        "Basic integrations",
        "HIPAA compliance",
        "Cloud deployment"
      ],
      popular: false
    },
    {
      name: "Hospital",
      price: "$1,199",
      period: "/month",
      description: "Ideal for hospitals and healthcare networks",
      features: [
        "Up to 100 providers",
        "Advanced AI analytics",
        "Real-time monitoring",
        "Priority support",
        "Custom dashboards",
        "Advanced integrations",
        "Predictive analytics",
        "Clinical decision support",
        "API access",
        "Custom training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large healthcare systems and research institutions",
      features: [
        "Unlimited providers",
        "Full AI autonomy",
        "Research-grade analytics",
        "24/7 dedicated support",
        "Custom AI models",
        "Advanced research tools",
        "Clinical trials support",
        "On-premise option",
        "SLA guarantees",
        "Custom integrations",
        "White-label solution",
        "Compliance consulting"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Improved Patient Outcomes",
      description: "AI-powered insights lead to 30-40% better treatment decisions and patient recovery rates."
    },
    {
      icon: Clock,
      title: "Reduced Wait Times",
      description: "Streamlined workflows and automated processes reduce patient wait times by 50-60%."
    },
    {
      icon: Users,
      title: "Enhanced Provider Experience",
      description: "Intuitive tools and automation free up 25+ hours per week for patient care."
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Predictive analytics and efficient workflows reduce healthcare costs by 20-35%."
    }
  ];

  const healthcareMetrics = [
    { metric: "Patients Monitored", value: "500K+", description: "Active monitoring" },
    { metric: "Diagnosis Accuracy", value: "95.8%", description: "AI-assisted accuracy" },
    { metric: "Response Time", value: "<2min", description: "Alert response" },
    { metric: "Uptime", value: "99.99%", description: "Service availability" },
    { metric: "Healthcare Partners", value: "2K+", description: "Global network" },
    { metric: "Data Security", value: "100%", description: "HIPAA compliance" }
  ];

  const useCases = [
    {
      title: "Early Disease Detection",
      description: "Identify potential health issues before symptoms appear using predictive AI models.",
      icon: Eye
    },
    {
      title: "Treatment Optimization",
      description: "Optimize treatment plans based on patient data, outcomes, and medical research.",
      icon: Brain
    },
    {
      title: "Resource Management",
      description: "Efficiently allocate healthcare resources and staff based on demand predictions.",
      icon: BarChart3
    },
    {
      title: "Clinical Research",
      description: "Accelerate medical research with AI-powered data analysis and pattern recognition.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-teal-900/10 opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-400/30 rounded-full text-green-200 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Next-Generation Healthcare AI
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              AI-Powered Healthcare Analytics Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform healthcare delivery with the world's most intelligent analytics platform. 
              Our AI solution provides real-time insights, predictive analytics, and clinical decision support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Healthcare Metrics Section */}
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
              Proven Healthcare Performance
            </h2>
            <p className="text-lg text-gray-600">
              Our AI healthcare platform delivers exceptional results for healthcare providers worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {healthcareMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                  <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">{item.value}</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">{item.metric}</div>
                  <div className="text-xs text-gray-600">{item.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Healthcare Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge technology with healthcare expertise 
              to deliver the most comprehensive medical analytics solution available.
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
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Real-World Healthcare Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI platform is transforming healthcare delivery across different specialties and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our AI Healthcare Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of healthcare with AI-powered intelligence that improves patient outcomes and provider efficiency.
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
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Healthcare-Focused Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your healthcare organization. All plans include our core AI features 
              with full HIPAA compliance and healthcare-specific integrations.
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
                    ? 'border-green-500 scale-105' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
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
              Need a custom healthcare solution? Contact us for enterprise pricing and custom deployments.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
            >
              Contact Healthcare Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of healthcare providers already using our AI platform to improve patient outcomes, 
              reduce costs, and enhance clinical decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300"
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

export default AIHealthcareAnalyticsPlatform;