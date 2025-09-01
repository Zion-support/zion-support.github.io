import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  Target, 
  ArrowRight,
  Building2,
  TrendingUp,
  Cpu,
  Cloud,
  Lock,
  Database,
  Workflow,
  Heart,
  DollarSign,
  Atom,
  Satellite,
  Truck,
  Factory,
  ShoppingCart,
  Network,
  Wifi,
  Server,
  Code,
  Monitor,
  Smartphone,
  Activity,
  Eye,
  Search,
  Settings,
  Palette,
  Video,
  GraduationCap,
  Handshake,
  ShoppingBag,
  Leaf,
  Gamepad2,
  Coins,
  MessageSquare,
  FileText,
  Calendar,
  User,
  Map,
  Navigation,
  ExternalLink,
  Lightbulb,
  Gauge,
  Layers,
  Compass,
  ShieldCheck,
  Users2,
  Cog,
  ChevronRight,
  Play,
  BookOpen,
  Briefcase,
  Clock,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
  Youtube,
  Trophy,
  Medal,
  Ribbon,
  Certificate,
  Badge,
  Flag,
  Anchor,
  Crown,
  Sparkles,
  Award,
  Globe,
  Rocket,
  CheckCircle,
  Info,
  HelpCircle,
  BarChart3
} from 'lucide-react';

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      icon: Zap,
      price: {
        monthly: 99,
        yearly: 990
      },
      features: [
        'AI Sales Copilot Basic',
        'Cloud FinOps Optimizer Lite',
        'Basic AI Compliance Assistant',
        '5 AI Business Intelligence Reports',
        'Email Support',
        'Basic Analytics Dashboard',
        'Up to 5 Team Members',
        'Standard Security Features'
      ],
      limitations: [
        'Limited API Calls (1,000/month)',
        'Basic Customization',
        'Community Support Only',
        'No Advanced AI Features'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      icon: Brain,
      price: {
        monthly: 299,
        yearly: 2990
      },
      features: [
        'AI Sales Copilot Pro',
        'Cloud FinOps Optimizer Standard',
        'AI Compliance Assistant Pro',
        'Unlimited AI Business Intelligence',
        'AI Customer Support Automation',
        'Priority Support',
        'Advanced Analytics & Reporting',
        'Up to 25 Team Members',
        'Advanced Security Features',
        'Custom Integrations',
        'Training & Onboarding',
        'Performance Monitoring'
      ],
      limitations: [
        'API Calls (10,000/month)',
        'Limited Custom AI Models',
        'Standard SLA (4 hours)'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      icon: Crown,
      price: {
        monthly: 999,
        yearly: 9990
      },
      features: [
        'All Professional Features',
        'Custom AI Sales Copilot',
        'Enterprise Cloud FinOps',
        'Advanced AI Compliance Suite',
        'AI Healthcare Platform',
        'Quantum Computing Access',
        'Blockchain Solutions',
        'IoT & Edge Computing',
        'Unlimited Team Members',
        'Dedicated Account Manager',
        '24/7 Premium Support',
        'Custom SLA (1 hour)',
        'Advanced Security & Compliance',
        'Custom AI Model Training',
        'White-label Solutions',
        'On-premise Deployment',
        'Advanced Analytics & ML',
        'Custom Integrations & APIs'
      ],
      limitations: [
        'Unlimited API Calls',
        'Full Customization',
        'Enterprise-grade Security'
      ],
      popular: false,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const addOnServices = [
    {
      name: 'AI Model Customization',
      description: 'Custom AI models trained on your specific data',
      price: {
        monthly: 199,
        yearly: 1990
      },
      icon: Brain,
      features: ['Custom Training Data', 'Model Optimization', 'Performance Tuning', 'Ongoing Updates']
    },
    {
      name: 'Quantum Computing Access',
      description: 'Access to quantum computing resources and algorithms',
      price: {
        monthly: 499,
        yearly: 4990
      },
      icon: Atom,
      features: ['Quantum Algorithm Development', 'Quantum Machine Learning', 'Quantum Cryptography', 'Research Support']
    },
    {
      name: 'Cybersecurity Suite',
      description: 'Advanced cybersecurity and threat protection',
      price: {
        monthly: 299,
        yearly: 2990
      },
      icon: Shield,
      features: ['Threat Intelligence', 'Penetration Testing', 'Security Audits', 'Incident Response']
    },
    {
      name: 'Data Analytics Platform',
      description: 'Comprehensive data analytics and business intelligence',
      price: {
        monthly: 199,
        yearly: 1990
      },
      icon: BarChart3,
      features: ['Real-time Analytics', 'Predictive Modeling', 'Data Visualization', 'Custom Dashboards']
    }
  ];

  const comparisonFeatures = [
    {
      feature: 'AI Sales Copilot',
      starter: 'Basic',
      professional: 'Pro',
      enterprise: 'Custom'
    },
    {
      feature: 'Cloud FinOps',
      starter: 'Lite',
      professional: 'Standard',
      enterprise: 'Enterprise'
    },
    {
      feature: 'AI Compliance',
      starter: 'Basic',
      professional: 'Pro',
      enterprise: 'Suite'
    },
    {
      feature: 'Team Members',
      starter: 'Up to 5',
      professional: 'Up to 25',
      enterprise: 'Unlimited'
    },
    {
      feature: 'API Calls',
      starter: '1,000/month',
      professional: '10,000/month',
      enterprise: 'Unlimited'
    },
    {
      feature: 'Support',
      starter: 'Email',
      professional: 'Priority',
      enterprise: '24/7 Premium'
    },
    {
      feature: 'SLA',
      starter: 'Standard',
      professional: '4 hours',
      enterprise: '1 hour'
    },
    {
      feature: 'Custom AI Models',
      starter: false,
      professional: 'Limited',
      enterprise: true
    },
    {
      feature: 'Quantum Computing',
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      feature: 'On-premise Deployment',
      starter: false,
      professional: false,
      enterprise: true
    }
  ];

  const faqs = [
    {
      question: 'What is included in the free trial?',
      answer: 'Our free trial includes access to all Starter plan features for 14 days, with no credit card required. You can explore our AI solutions and see how they can benefit your business.'
    },
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments accordingly.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Absolutely! For enterprise customers with specific requirements, we offer custom pricing and solutions. Contact our sales team to discuss your needs and get a personalized quote.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'Support varies by plan: Starter includes email support, Professional includes priority support, and Enterprise includes 24/7 premium support with a dedicated account manager.'
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees! Our pricing is transparent and includes all features listed for each plan. The only additional costs would be for add-on services or custom development work.'
    },
    {
      question: 'How do you handle data security and privacy?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures, comply with major regulations (GDPR, HIPAA, SOC 2), and provide detailed security documentation.'
    }
  ];

  const getYearlyDiscount = (monthlyPrice: number) => {
    const yearlyPrice = monthlyPrice * 12;
    const discountedPrice = yearlyPrice * 0.9; // 10% discount
    return Math.round(yearlyPrice - discountedPrice);
  };

  return (
    <div className="min-h-screen bg-zion-slate-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-slate-darker via-zion-slate-dark to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent
              <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                {' '}Pricing
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Choose the perfect plan for your business. All plans include our core AI solutions 
              with flexible options to scale as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-zion-cyan' : 'bg-zion-slate-light'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Yearly
                {billingCycle === 'yearly' && (
                  <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                    Save 10%
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-zion-slate-darker border rounded-2xl p-8 ${
                  plan.popular
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25 scale-105'
                    : 'border-zion-purple/20 hover:border-zion-cyan/40'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-zion-cyan to-zion-blue text-white">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">$</span>
                      <span className="text-5xl font-bold text-white">
                        {billingCycle === 'monthly' ? plan.price.monthly : Math.round(plan.price.yearly * 0.9 / 12)}
                      </span>
                      <span className="text-zion-slate-light ml-2">/month</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-zion-cyan mt-2">
                        Save ${getYearlyDiscount(plan.price.monthly)} per year
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan-light hover:to-zion-blue-light transform hover:scale-105'
                        : 'bg-zion-slate-dark text-zion-cyan border border-zion-cyan hover:bg-zion-cyan hover:text-white'
                    }`}
                  >
                    Get Started
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-white mb-4">What's included:</h4>
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-zion-slate-light">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  
                  {plan.limitations.length > 0 && (
                    <>
                      <h4 className="font-semibold text-white mb-4 mt-6">Limitations:</h4>
                      {plan.limitations.map((limitation) => (
                        <div key={limitation} className="flex items-center text-sm text-zion-slate-light">
                          <X className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                          {limitation}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-zion-slate-darker">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Add-on Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Enhance your plan with specialized services and advanced features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOnServices.map((service) => (
              <div key={service.name} className="bg-zion-slate-dark border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                <p className="text-sm text-zion-slate-light mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-white">$</span>
                    <span className="text-3xl font-bold text-white">
                      {billingCycle === 'monthly' ? service.price.monthly : Math.round(service.price.yearly * 0.9 / 12)}
                    </span>
                    <span className="text-zion-slate-light ml-1">/month</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-xs text-zion-cyan">
                      Save ${getYearlyDiscount(service.price.monthly)} per year
                    </p>
                  )}
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-xs text-zion-slate-light">
                      <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full py-2 px-4 bg-zion-slate-darker border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 text-sm">
                  Add Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Plan Comparison
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Compare features across all plans to find the perfect fit for your business
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zion-purple/20">
                  <th className="text-left py-4 px-6 text-zion-slate-light font-medium">Feature</th>
                  <th className="text-center py-4 px-6 text-zion-slate-light font-medium">Starter</th>
                  <th className="text-center py-4 px-6 text-zion-cyan font-medium">Professional</th>
                  <th className="text-center py-4 px-6 text-zion-slate-light font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={feature.feature} className={`border-b border-zion-purple/10 ${index % 2 === 0 ? 'bg-zion-slate-darker/50' : ''}`}>
                    <td className="py-4 px-6 text-white font-medium">{feature.feature}</td>
                    <td className="py-4 px-6 text-center text-zion-slate-light">
                      {typeof feature.starter === 'boolean' ? (
                        feature.starter ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />
                      ) : (
                        feature.starter
                      )}
                    </td>
                    <td className="py-4 px-6 text-center text-zion-slate-light">
                      {typeof feature.professional === 'boolean' ? (
                        feature.professional ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />
                      ) : (
                        feature.professional
                      )}
                    </td>
                    <td className="py-4 px-6 text-center text-zion-slate-light">
                      {typeof feature.enterprise === 'boolean' ? (
                        feature.enterprise ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />
                      ) : (
                        feature.enterprise
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zion-slate-darker">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-zion-slate-dark border border-zion-purple/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-zion-slate-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business and start transforming your operations 
            with our AI-powered solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Sales
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
          
          <div className="mt-8 text-white/80">
            <p className="text-sm">
              Need help choosing? Our team is here to help you find the perfect solution.
            </p>
            <div className="flex items-center justify-center space-x-6 mt-4 text-sm">
              <a href="tel:+13024640950" className="flex items-center hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +1 (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}