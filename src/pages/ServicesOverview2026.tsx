import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Smartphone, 
  Rocket, 
  Target,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Zap,
  Shield,
  Cloud,
  Globe,
  Database,
  Network,
  Lock,
  BarChart3,
  Users,
  Award
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2026, SERVICE_CATEGORIES_2026 } from '../data/innovativeServices2026';
export default function ServicesOverview2026() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services': return Brain;
      case 'IT Services': return Cpu;
      case 'Micro SAAS': return Smartphone;
      case 'Emerging Tech': return Rocket;
      case 'Industry Solutions': return Target;
      default: return Zap;
    }
  };
  const getCategoryServices = (category: string) => {
    return INNOVATIVE_SERVICES_2026.filter(service => service.category === category);
  };
  const getCategoryStats = (category: string) => {
    const services = getCategoryServices(category);
    const totalServices = services.length;
    const featuredServices = services.filter(s => s.featured).length;
    const avgRating = services.reduce((acc, s) => acc + s.rating, 0) / totalServices;
    const avgPrice = services.reduce((acc, s) => acc + s.price, 0) / totalServices;
    
    return { totalServices, featuredServices, avgRating: avgRating.toFixed(1), avgPrice: Math.round(avgPrice) };
  };
  const categoryDescriptions = {
    'AI Services': 'Cutting-edge artificial intelligence solutions that transform business operations, from autonomous business management to quantum AI trading platforms.',
    'IT Services': 'Advanced IT infrastructure and cloud solutions including quantum computing, zero-trust cybersecurity, and 5G enterprise networks.',
    'Micro SAAS': 'Scalable software-as-a-service solutions designed for modern businesses, from AI-powered development tools to marketing automation.',
    'Emerging Tech': 'Next-generation technology solutions including blockchain, space technology, and quantum neural networks.',
    'Industry Solutions': 'Specialized AI and technology solutions tailored for specific industries including healthcare, manufacturing, and financial services.'
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Services Overview 2026
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our comprehensive range of innovative technology services designed to accelerate your business growth 
              and digital transformation. From AI-powered solutions to cutting-edge infrastructure services.
            </p>
            
            {/* Contact Information */}
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 max-w-2xl mx-auto border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Ready to Get Started?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center text-cyan-400">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center text-cyan-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center text-cyan-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Service Categories Overview */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICE_CATEGORIES_2026.map((category, index) => {
              const Icon = getCategoryIcon(category);
              const stats = getCategoryStats(category);
              const services = getCategoryServices(category);
              const description = categoryDescriptions[category as keyof typeof categoryDescriptions];
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 p-6"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category}</h3>
                      <p className="text-gray-400">{description}</p>
                    </div>
                  </div>
                  {/* Category Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{stats.totalServices}</div>
                      <div className="text-sm text-gray-400">Services</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">{stats.featuredServices}</div>
                      <div className="text-sm text-gray-400">Featured</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{stats.avgRating}</div>
                      <div className="text-sm text-gray-400">Avg Rating</div>
                    </div>
                  </div>
                  {/* Sample Services */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Featured Services</h4>
                    <div className="space-y-2">
                      {services.slice(0, 3).map((service) => (
                        <div key={service.id} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                          <div>
                            <div className="text-white font-medium">{service.title}</div>
                            <div className="text-sm text-gray-400">{service.subcategory}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-cyan-400 font-semibold">${service.price.toLocaleString()}/mo</div>
                            <div className="text-xs text-gray-400">{service.pricingTier}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* CTA */}
                  <Link
                    to="/innovative-services-2026"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Explore {category}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Proven Excellence",
                description: "4.8+ average rating across all services with thousands of satisfied clients worldwide."
              },
              {
                icon: Zap,
                title: "Cutting-Edge Tech",
                description: "Latest AI, quantum computing, and emerging technologies to keep you ahead of the competition."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level security and compliance standards with 99.99% uptime guarantees."
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "24/7 technical support and dedicated account managers for enterprise clients."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Tiers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the pricing tier that best fits your business needs and scale as you grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tier: "Starter",
                price: "$199",
                description: "Perfect for small businesses and startups",
                features: [
                  "Basic AI integration",
                  "Standard support",
                  "Core features",
                  "Up to 5 users",
                  "Basic analytics"
                ],
                color: "green"
              },
              {
                tier: "Professional",
                price: "$2,999",
                description: "Ideal for growing businesses",
                features: [
                  "Advanced AI capabilities",
                  "Priority support",
                  "Custom integrations",
                  "Up to 50 users",
                  "Advanced analytics",
                  "API access"
                ],
                color: "blue",
                popular: true
              },
              {
                tier: "Enterprise",
                price: "$25,000+",
                description: "For large organizations",
                features: [
                  "Full AI suite",
                  "24/7 dedicated support",
                  "Custom development",
                  "Unlimited users",
                  "Enterprise analytics",
                  "White-label options",
                  "SLA guarantees"
                ],
                color: "purple"
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 rounded-xl border-2 p-8 ${
                  plan.popular 
                    ? 'border-cyan-500 bg-slate-800/70' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-cyan-500 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold text-${plan.color}-400 mb-2`}>{plan.tier}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <div className="text-gray-400">{plan.description}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 text-${plan.color}-400 flex-shrink-0`} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-${plan.color}-500 to-${plan.color === 'green' ? 'emerald' : plan.color === 'blue' ? 'cyan' : 'violet'}-600 text-white font-semibold rounded-lg hover:from-${plan.color}-600 hover:to-${plan.color === 'green' ? 'emerald' : plan.color === 'blue' ? 'cyan' : 'violet'}-700 transition-all duration-300`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies already leveraging our cutting-edge technology solutions. 
            Get in touch to discuss how we can help you achieve your goals.
          </p>
          
          {/* Contact Details */}
          <div className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Phone</h4>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Address</h4>
                <p className="text-cyan-400">364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}