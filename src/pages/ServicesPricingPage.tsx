import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import {
  Check,
  X,
  Star,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Users,
  Building,
  Smartphone,
  ShoppingCart,
  Heart,
  GraduationCap,
  Truck,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  DollarSign,
  Clock,
  Brain,
  Cloud,
  Cpu,
  Database,
  Lock,
  BarChart3,
  Code,
  Server,
  Network,
  BarChart,
  PieChart,
  LineChart,
  Calendar,
  Settings,
  Tool,
  Briefcase,
  Home,
  Car,
  Plane,
  Ship,
  Leaf,
  Gauge,
  ShieldAlert,
  UserCheck,
  Users2,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserClock,
  UserStar,
  UserHeart,
  UserShield,
  UserZap,
  UserTrendingUp,
  UserTrendingDown,
  UserPlus2,
  UserMinus2,
  UserX2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserCheck3,
  UserClock2,
  UserStar2,
  UserHeart2,
  UserShield2,
  UserZap2,
  UserTrendingUp2,
  UserTrendingDown2
} from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  color: string;
}

interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  pricing: PricingTier[];
  icon: React.ComponentType<any>;
}

const services: Service[] = [
  {
    id: 'ai-business-intelligence',
    name: 'AI Business Intelligence Platform',
    category: 'AI & Analytics',
    description: 'Advanced AI-powered business intelligence with real-time analytics and predictive insights',
    icon: BarChart3,
    pricing: [
      {
        name: 'Starter',
        price: '$2,499',
        period: '/month',
        description: 'Perfect for small businesses',
        features: [
          'Real-time analytics dashboard',
          'Basic predictive insights',
          '5 data source integrations',
          'Email support',
          'Monthly reports'
        ],
        cta: 'Get Started',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        name: 'Professional',
        price: '$4,999',
        period: '/month',
        description: 'Ideal for growing companies',
        features: [
          'Everything in Starter',
          'Advanced AI predictions',
          'Unlimited data sources',
          'Custom dashboards',
          'Priority support',
          'API access',
          'White-label options'
        ],
        popular: true,
        cta: 'Start Free Trial',
        color: 'from-purple-500 to-pink-500'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For large organizations',
        features: [
          'Everything in Professional',
          'Custom AI models',
          'Dedicated support team',
          'On-premise deployment',
          'Advanced security',
          'Custom integrations',
          'Training & consulting'
        ],
        cta: 'Contact Sales',
        color: 'from-green-500 to-emerald-500'
      }
    ]
  },
  {
    id: 'ai-customer-experience',
    name: 'AI Customer Experience Platform',
    category: 'AI & Analytics',
    description: 'AI-powered customer experience optimization and engagement automation',
    icon: Users,
    pricing: [
      {
        name: 'Basic',
        price: '$1,999',
        period: '/month',
        description: 'For small customer bases',
        features: [
          'Customer behavior analysis',
          'Basic personalization',
          'Email automation',
          'Support for 10K customers',
          'Standard support'
        ],
        cta: 'Get Started',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        name: 'Advanced',
        price: '$3,999',
        period: '/month',
        description: 'For growing businesses',
        features: [
          'Everything in Basic',
          'Advanced personalization',
          'Multi-channel automation',
          'Support for 100K customers',
          'Priority support',
          'Custom workflows',
          'Advanced analytics'
        ],
        popular: true,
        cta: 'Start Free Trial',
        color: 'from-purple-500 to-pink-500'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For large enterprises',
        features: [
          'Everything in Advanced',
          'Unlimited customers',
          'Custom AI models',
          'Dedicated account manager',
          'Advanced integrations',
          'Custom reporting',
          'Training & consulting'
        ],
        cta: 'Contact Sales',
        color: 'from-green-500 to-emerald-500'
      }
    ]
  },
  {
    id: 'ai-cybersecurity',
    name: 'AI Cybersecurity Platform',
    category: 'Security',
    description: 'Advanced AI-powered cybersecurity with threat detection and automated response',
    icon: Shield,
    pricing: [
      {
        name: 'Essential',
        price: '$1,499',
        period: '/month',
        description: 'Basic security protection',
        features: [
          'AI threat detection',
          'Real-time monitoring',
          'Basic incident response',
          'Security reports',
          'Email support'
        ],
        cta: 'Get Started',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        name: 'Professional',
        price: '$2,999',
        period: '/month',
        description: 'Comprehensive security',
        features: [
          'Everything in Essential',
          'Advanced threat hunting',
          'Automated response',
          'Compliance monitoring',
          'Priority support',
          'Custom security policies',
          'Security training'
        ],
        popular: true,
        cta: 'Start Free Trial',
        color: 'from-purple-500 to-pink-500'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Enterprise-grade security',
        features: [
          'Everything in Professional',
          'Custom security models',
          'Dedicated security team',
          'Advanced compliance',
          'Custom integrations',
          '24/7 monitoring',
          'Security consulting'
        ],
        cta: 'Contact Sales',
        color: 'from-green-500 to-emerald-500'
      }
    ]
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    category: 'Advanced Technology',
    description: 'Quantum computing consulting and algorithm development services',
    icon: Cpu,
    pricing: [
      {
        name: 'Consultation',
        price: '$5,000',
        period: '/project',
        description: 'Initial quantum assessment',
        features: [
          'Quantum readiness assessment',
          'Use case analysis',
          'Technology recommendations',
          'Implementation roadmap',
          'Basic algorithm design'
        ],
        cta: 'Get Started',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        name: 'Development',
        price: '$25,000',
        period: '/project',
        description: 'Full quantum solution development',
        features: [
          'Everything in Consultation',
          'Custom quantum algorithms',
          'Hybrid classical-quantum solutions',
          'Performance optimization',
          'Testing & validation',
          'Documentation',
          'Training & support'
        ],
        popular: true,
        cta: 'Start Project',
        color: 'from-purple-500 to-pink-500'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Large-scale quantum initiatives',
        features: [
          'Everything in Development',
          'Multiple quantum platforms',
          'Advanced optimization',
          'Custom hardware integration',
          'Ongoing maintenance',
          'Research collaboration',
          'Patent support'
        ],
        cta: 'Contact Sales',
        color: 'from-green-500 to-emerald-500'
      }
    ]
  }
];

const categories = ['All', 'AI & Analytics', 'Security', 'Advanced Technology', 'Cloud', 'DevOps'];

const ServicesPricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Services & Pricing - Zion Tech Group"
        description="Comprehensive pricing for our AI services, cybersecurity solutions, and technology consulting. Transparent pricing with flexible plans for all business sizes."
        keywords="pricing, AI services pricing, cybersecurity pricing, technology consulting pricing, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Services & Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transparent pricing for our comprehensive AI services, cybersecurity solutions, and technology consulting
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-slate-600/20'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {filteredServices.map((service, serviceIndex) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: serviceIndex * 0.2 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-600/20"
              >
                {/* Service Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{service.name}</h2>
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto">{service.description}</p>
                </div>

                {/* Pricing Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {service.pricing.map((tier, tierIndex) => (
                    <motion.div
                      key={tier.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.2 + tierIndex * 0.1 }}
                      className={`relative bg-slate-700/50 rounded-2xl p-6 border ${
                        tier.popular 
                          ? 'border-purple-500/50 shadow-lg shadow-purple-500/25' 
                          : 'border-slate-600/20'
                      }`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                            Most Popular
                          </span>
                        </div>
                      )}

                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                        <div className="mb-4">
                          <span className="text-3xl font-bold text-white">{tier.price}</span>
                          <span className="text-gray-400">{tier.period}</span>
                        </div>
                        <p className="text-gray-300 text-sm">{tier.description}</p>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 bg-gradient-to-r ${tier.color} hover:scale-105`}
                      >
                        {tier.cta}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't see exactly what you need? We offer custom solutions tailored to your specific requirements. 
              Contact us to discuss your project and get a personalized quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPricingPage;
