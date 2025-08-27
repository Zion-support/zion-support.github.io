import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Atom,
  Blockchain,
  Heart,
  Scale,
  Factory,
  Satellite,
  ShoppingCart,
  Building,
  Truck,
  Target,
  Award,
  Lightbulb,
  BarChart3,
  Users2,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Star as StarIcon,
  Zap as ZapIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Lock as LockIcon,
  Code as CodeIcon,
  Rocket as RocketIcon,
  Users as UsersIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  Star as StarIconIcon,
  TrendingUp as TrendingUpIcon,
  DollarSign as DollarSignIcon,
  Clock as ClockIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
  Play as PlayIcon,
  BookOpen as BookOpenIcon,
  MessageCircle as MessageCircleIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Globe as GlobeIconIcon,
  Atom as AtomIcon,
  Blockchain as BlockchainIcon,
  Heart as HeartIcon,
  Scale as ScaleIcon,
  Factory as FactoryIcon,
  Satellite as SatelliteIcon,
  ShoppingCart as ShoppingCartIcon,
  Building as BuildingIcon,
  Truck as TruckIcon,
  Target as TargetIcon,
  Award as AwardIcon,
  Lightbulb as LightbulbIcon,
  BarChart3 as BarChart3Icon,
  Users2 as Users2Icon,
  ShieldCheck as ShieldCheckIcon
} from 'lucide-react';
import { SEO } from "../components/SEOHead";
import { enhancedZionServices2025 } from "@/data/enhancedZionServices2025";

export default function ZionTechGroupMarketing2025() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const toggleCategoryExpansion = (categorySlug: string) => {
    setExpandedCategory(expandedCategory === categorySlug ? null : categorySlug);
  };

  const getCategoryIcon = (categorySlug: string) => {
    const iconMap: { [key: string]: any } = {
      'advanced-ai-autonomous-systems': Brain,
      'quantum-advanced-computing': Atom,
      'advanced-cybersecurity-zero-trust': Shield,
      'advanced-iot-edge-intelligence': Cpu,
      'advanced-fintech-solutions': DollarSign,
      'advanced-healthcare-biotechnology': Heart,
      'advanced-manufacturing-robotics': Factory,
      'advanced-transportation-mobility': Truck,
      'advanced-communication-networking': Network,
      'advanced-gaming-entertainment': Code,
      'advanced-materials-energy': Zap,
      'advanced-space-technology': Satellite
    };
    return iconMap[categorySlug] || Globe;
  };

  const getCategoryColor = (categorySlug: string) => {
    const colorMap: { [key: string]: string } = {
      'advanced-ai-autonomous-systems': 'from-zion-cyan to-zion-purple',
      'quantum-advanced-computing': 'from-zion-blue to-zion-cyan',
      'advanced-cybersecurity-zero-trust': 'from-zion-purple to-zion-red',
      'advanced-iot-edge-intelligence': 'from-zion-green to-zion-cyan',
      'advanced-fintech-solutions': 'from-zion-green to-zion-blue',
      'advanced-healthcare-biotechnology': 'from-zion-pink to-zion-purple',
      'advanced-manufacturing-robotics': 'from-zion-orange to-zion-blue',
      'advanced-transportation-mobility': 'from-zion-blue to-zion-purple',
      'advanced-communication-networking': 'from-zion-cyan to-zion-blue',
      'advanced-gaming-entertainment': 'from-zion-purple to-zion-pink',
      'advanced-materials-energy': 'from-zion-yellow to-zion-orange',
      'advanced-space-technology': 'from-zion-purple to-zion-cyan'
    };
    return colorMap[categorySlug] || 'from-zion-cyan to-zion-blue';
  };

  return (
    <>
      <SEO 
        title="Zion Tech Group - Premier Technology Solutions Provider | AI, Quantum Computing & Autonomous Systems"
        description="Zion Tech Group delivers cutting-edge technology solutions including autonomous AI systems, quantum computing platforms, advanced cybersecurity, and next-generation IoT solutions. Transform your business with the future of technology."
        keywords="Zion Tech Group, technology solutions, AI services, quantum computing, cybersecurity, IoT solutions, autonomous systems, fintech, healthcare technology, manufacturing automation, space technology"
        ogImage="https://ziontechgroup.com/og-zion-tech-group.jpg"
        ogUrl="https://ziontechgroup.com"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent mb-6">
                Zion Tech Group
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Premier Technology Solutions Provider
              </h2>
              <p className="text-xl md:text-2xl text-zion-gray-light mb-8 max-w-4xl mx-auto">
                Empowering businesses with cutting-edge technology solutions that define the future. 
                From autonomous AI systems to quantum computing platforms, we deliver innovation that transforms industries.
              </p>
              
              {/* Key Stats */}
              <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">500+</div>
                  <div className="text-zion-gray-light">Clients Served</div>
                </div>
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-zion-purple mb-2">99.9%</div>
                  <div className="text-zion-gray-light">Uptime Guarantee</div>
                </div>
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-zion-green mb-2">24/7</div>
                  <div className="text-zion-gray-light">Support Available</div>
                </div>
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-zion-pink mb-2">50+</div>
                  <div className="text-zion-gray-light">Technology Solutions</div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-semibold text-zion-cyan mb-6">Ready to Transform Your Business?</h3>
                <div className="grid md:grid-cols-2 gap-6 text-center">
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-3 text-zion-gray-light">
                      <PhoneIcon className="w-5 h-5 text-zion-cyan" />
                      <span className="text-lg">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-zion-gray-light">
                      <MailIcon className="w-5 h-5 text-zion-cyan" />
                      <span className="text-lg">kleber@ziontechgroup.com</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-3 text-zion-gray-light">
                      <MapPinIcon className="w-5 h-5 text-zion-cyan" />
                      <span className="text-lg">Middletown, DE</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-zion-gray-light">
                      <GlobeIcon className="w-5 h-5 text-zion-cyan" />
                      <span className="text-lg">ziontechgroup.com</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-zion-slate-light">
                  <p className="text-zion-gray-light text-sm">
                    364 E Main St STE 1008, Middletown DE 19709
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-zion-gray-light max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver solutions that drive real business transformation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/30 backdrop-blur-sm rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Innovation First</h3>
                <p className="text-zion-gray-light">
                  We stay ahead of the curve with the latest technologies including AI, quantum computing, and autonomous systems.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/30 backdrop-blur-sm rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-pink rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-zion-gray-light">
                  Your data and systems are protected with enterprise-grade security and compliance standards.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/30 backdrop-blur-sm rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-green to-zion-cyan rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Support</h3>
                <p className="text-zion-gray-light">
                  Our team of experts provides 24/7 support and guidance to ensure your success.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Technology Solutions
              </h2>
              <p className="text-xl text-zion-gray-light max-w-3xl mx-auto">
                Discover our comprehensive portfolio of cutting-edge technology solutions designed to address 
                the most complex challenges facing modern businesses.
              </p>
            </motion.div>

            <div className="space-y-8">
              {enhancedZionServices2025.map((category, categoryIndex) => (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zion-slate-dark/30 backdrop-blur-sm rounded-2xl p-8"
                >
                  {/* Category Header */}
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleCategoryExpansion(category.slug)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(category.slug)}`}>
                        {React.createElement(getCategoryIcon(category.slug), { 
                          className: "w-8 h-8 text-white" 
                        })}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{category.name}</h3>
                        <p className="text-zion-gray-light text-lg">{category.description}</p>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-zion-slate hover:bg-zion-slate-light transition-colors">
                      {expandedCategory === category.slug ? (
                        <ChevronUp className="w-6 h-6 text-zion-cyan" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-zion-cyan" />
                      )}
                    </div>
                  </div>

                  {/* Services in Category */}
                  <AnimatePresence>
                    {expandedCategory === category.slug && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-8 pt-8 border-t border-zion-slate-light"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          {category.items.map((service) => (
                            <motion.div
                              key={service.id}
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5 }}
                              viewport={{ once: true }}
                              className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl p-6 border border-zion-slate-light hover:border-zion-cyan transition-all duration-300"
                            >
                              <div className="mb-4">
                                <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                                <p className="text-zion-gray-light text-sm mb-3">{service.description}</p>
                                <div className="flex items-center gap-2 mb-3">
                                  <span className="text-zion-cyan font-semibold">{service.price}</span>
                                  <span className="text-zion-gray-light text-sm">• {service.billing}</span>
                                </div>
                              </div>

                              {/* Features */}
                              <div className="mb-4">
                                <h5 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h5>
                                <div className="space-y-1">
                                  {service.features.slice(0, 3).map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm text-zion-gray-light">
                                      <CheckCircleIcon className="w-4 h-4 text-zion-green" />
                                      <span>{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Benefits */}
                              <div className="mb-4">
                                <h5 className="text-sm font-semibold text-zion-green mb-2">Key Benefits:</h5>
                                <ul className="space-y-1">
                                  {service.benefits.slice(0, 2).map((benefit, index) => (
                                    <li key={index} className="text-sm text-zion-gray-light flex items-start gap-2">
                                      <span className="text-zion-green mt-1">•</span>
                                      <span>{benefit}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* CTA */}
                              <a
                                href={service.href}
                                target={service.external ? "_blank" : "_self"}
                                rel={service.external ? "noopener noreferrer" : ""}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
                              >
                                {service.ctaLabel}
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Information */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transparent Pricing
              </h2>
              <p className="text-xl text-zion-gray-light max-w-3xl mx-auto">
                We offer flexible pricing models to meet your business needs, from startups to enterprise organizations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-slate-light"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Startup</h3>
                <div className="text-4xl font-bold text-zion-cyan mb-6">$2,000<span className="text-lg text-zion-gray-light">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-zion-gray-light">
                    <CheckCircleIcon className="w-5 h-5 text-zion-green" />
                    <span>Basic AI Solutions</span>
                  </li>
                  <li className="flex items-center gap-2 text-zion-gray-light">
                    <CheckCircleIcon className="w-5 h-5 text-zion-green" />
                    <span>Standard Support</span>
                  </li>
                  <li className="flex items-center gap-2 text-zion-gray-light">
                    <CheckCircleIcon className="w-5 h-5 text-zion-green" />
                    <span>Core Features</span>
                  </li>
                </ul>
                <a
                  href="https://ziontechgroup.com/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-zion-cyan relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-zion-cyan text-zion-slate-dark px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Growth</h3>
                <div className="text-4xl font-bold text-zion-cyan mb-6">$8,000<span className="text-lg text-zion-gray-light">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-zion-gray-light">
                    <CheckCircleIcon className="w-5 h-5 text-zion-green" />
                    <span>Advanced AI Solutions</span>
                  </li>
                  <li className="flex items-center gap-2 text-zion-gray-light">
                    <CheckCircleIcon className="w-5 h-5 text-zion-green" />
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-center gap-2 text-zion-gray-light">
                    <CheckCircleIcon className="w-5 h-5 text-zion-green" />
                    <span>Quantum Computing</span>
                  </li>
                  <li className="flex items-center gap-2 text-zion-gray-light">
                    <CheckCircleIcon className="w-5 h-5 text-zion-green" />
                    <span>Custom Integration</span>
                  </li>
                </ul>
                <a
                  href="https://ziontechgroup.com/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-slate-light"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-zion-cyan mb-6">Custom<span className="text-lg text-zion-gray-light">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-zion-gray-light">
                    <CheckCircleIcon className="w-5 h-5 text-zion-green" />
                    <span>Full Solution Suite</span>
                  </li>
                  <li className="flex items-center gap-2 text-zion-gray-light">
                    <CheckCircleIcon className="w-5 h-5 text-zion-green" />
                    <span>24/7 Dedicated Support</span>
                  </li>
                  <li className="flex items-center gap-2 text-zion-gray-light">
                    <CheckCircleIcon className="w-5 h-5 text-zion-green" />
                    <span>Custom Development</span>
                  </li>
                  <li className="flex items-center gap-2 text-zion-gray-light">
                    <CheckCircleIcon className="w-5 h-5 text-zion-green" />
                    <span>SLA Guarantees</span>
                  </li>
                </ul>
                <a
                  href="https://ziontechgroup.com/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300"
                >
                  Contact Sales
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-gray-light mb-8">
                Join the elite group of forward-thinking organizations that are already leveraging Zion Tech Group's 
                revolutionary technology solutions to gain unprecedented competitive advantages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="https://ziontechgroup.com/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-zion-slate-dark text-white font-semibold rounded-lg border border-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call +1 302 464 0950
                </a>
              </div>

              {/* Contact Details */}
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-zion-cyan mb-6">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-6 text-center">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3 text-zion-gray-light">
                      <PhoneIcon className="w-5 h-5 text-zion-cyan" />
                      <span className="text-lg">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-zion-gray-light">
                      <MailIcon className="w-5 h-5 text-zion-cyan" />
                      <span className="text-lg">kleber@ziontechgroup.com</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3 text-zion-gray-light">
                      <MapPinIcon className="w-5 h-5 text-zion-cyan" />
                      <span className="text-lg">Middletown, DE</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-zion-gray-light">
                      <GlobeIcon className="w-5 h-5 text-zion-cyan" />
                      <span className="text-lg">ziontechgroup.com</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-zion-slate-light">
                  <p className="text-zion-gray-light">
                    364 E Main St STE 1008, Middletown DE 19709
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}