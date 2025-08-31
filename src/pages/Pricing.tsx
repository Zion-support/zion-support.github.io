import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Globe,
  CreditCard,
  Clock,
  Headphones,
  Rocket,
  Award,
  Lock
} from 'lucide-react';

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses and startups getting started with AI",
      features: [
        "AI Content Generation (500 credits/month)",
        "Basic AI Image Editing",
        "AI Meeting Assistant (10 hours/month)",
        "Email Support",
        "Basic Analytics Dashboard",
        "Mobile App Access",
        "Standard Security",
        "5 Team Members"
      ],
      popular: false,
      cta: "Get Started",
      link: "/contact",
      savings: null
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and professional teams",
      features: [
        "Everything in Starter",
        "AI Content Generation (2000 credits/month)",
        "Advanced AI Image & Video Editing",
        "AI Code Assistant (Basic)",
        "AI Meeting Assistant (50 hours/month)",
        "AI Translation (25 languages)",
        "Priority Support",
        "Advanced Analytics",
        "API Access (5000 calls/month)",
        "Team Collaboration Tools",
        "Enhanced Security",
        "15 Team Members",
        "Custom Branding"
      ],
      popular: true,
      cta: "Get Started",
      link: "/contact",
      savings: "Save 20% annually"
    },
    {
      name: "Business",
      price: "$599",
      period: "/month",
      description: "Comprehensive solution for established businesses",
      features: [
        "Everything in Professional",
        "AI Content Generation (10000 credits/month)",
        "AI Code Assistant (Advanced)",
        "AI Data Analytics Platform",
        "AI Threat Detection",
        "Multi-Cloud Management",
        "AI-Powered CRM",
        "Business Process Automation",
        "AI Meeting Assistant (Unlimited)",
        "AI Translation (100+ languages)",
        "24/7 Support",
        "Custom Integrations",
        "API Access (50000 calls/month)",
        "Advanced Security Features",
        "Unlimited Team Members",
        "White-label Solutions"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "/contact",
      savings: "Save 25% annually"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with specific requirements",
      features: [
        "Everything in Business",
        "Unlimited AI Content Generation",
        "Custom AI Model Training",
        "Zero Trust Security Suite",
        "Edge Computing Solutions",
        "AI Market Research Platform",
        "AI Legal Document Review",
        "AI Financial Advisor",
        "AI Healthcare Assistant",
        "Dedicated Account Manager",
        "Custom Development",
        "On-Premise Deployment",
        "SLA Guarantees",
        "Compliance Certifications",
        "Custom Training & Support"
      ],
      popular: false,
      cta: "Contact Sales",
      link: "/contact",
      savings: null
    }
  ];

  const addOns = [
    {
      name: "Additional AI Credits",
      price: "$0.10",
      description: "Per credit for AI content generation beyond your plan limit",
      icon: Zap
    },
    {
      name: "Premium Support",
      price: "$99",
      description: "Per month for dedicated support and faster response times",
      icon: Headphones
    },
    {
      name: "Custom Integrations",
      price: "$299",
      description: "Per integration for custom API connections and workflows",
      icon: Rocket
    },
    {
      name: "Advanced Security",
      price: "$199",
      description: "Per month for enhanced security features and compliance",
      icon: Shield
    }
  ];

  const benefits = [
    {
      icon: <Check className="w-6 h-6" />,
      title: "No Setup Fees",
      description: "Get started immediately with zero upfront costs"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Free Trial",
      description: "Try any plan free for 14 days, no credit card required"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Flexible Billing",
      description: "Monthly or annual billing with discounts for longer commitments"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with SOC 2, GDPR, and HIPAA compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. All plans include our core AI 
              features with no hidden fees or surprises.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Start with a free 14-day trial and upgrade or downgrade at any time. 
              Annual plans include significant savings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/30 backdrop-blur-sm border rounded-xl p-6 ${
                  tier.popular 
                    ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {tier.savings && (
                  <div className="absolute -top-4 right-4">
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium border border-green-500/50">
                      {tier.savings}
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={tier.link}
                  className={`w-full px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Add-On Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enhance your plan with additional services and features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <addon.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{addon.price}</div>
                <p className="text-gray-300 text-sm">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Pricing?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We believe in fair, transparent pricing that grows with your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Common questions about our pricing and billing
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly."
              },
              {
                question: "What happens after my free trial ends?",
                answer: "After your 14-day free trial, your account will automatically convert to the paid plan you selected. You can cancel anytime before the trial ends."
              },
              {
                question: "Do you offer discounts for nonprofits?",
                answer: "Yes, we offer special pricing for qualified nonprofit organizations. Contact our sales team for more information about nonprofit discounts."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can also pay by invoice."
              },
              {
                question: "Is there a setup fee or hidden costs?",
                answer: "No setup fees or hidden costs. What you see is what you pay. The only additional charges are for add-on services you choose to purchase."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your needs and get a custom quote for your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+1 302 464 0950"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg"
              >
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Email Sales
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Get personalized pricing • Custom solutions • Expert consultation
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Up to 5 users',
        'Basic AI features',
        'Email support',
        'Standard security',
        '5GB storage',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      icon: Building,
      color: 'from-purple-500 to-pink-500',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Up to 25 users',
        'Advanced AI capabilities',
        'Priority support',
        'Enhanced security',
        '25GB storage',
        'Advanced analytics',
        'Custom integrations',
        'Training sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      icon: Crown,
      color: 'from-orange-500 to-red-500',
      monthlyPrice: 999,
      yearlyPrice: 9990,
      features: [
        'Unlimited users',
        'Full AI suite access',
        '24/7 dedicated support',
        'Enterprise security',
        'Unlimited storage',
        'Custom analytics',
        'White-label solutions',
        'On-site training',
        'Custom development',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Business Intelligence Platform',
          description: 'Advanced analytics and insights powered by AI',
          monthlyPrice: 199,
          yearlyPrice: 1990,
          features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'API access']
        },
        {
          name: 'AI Autonomous Business Intelligence',
          description: 'Self-learning BI platform with autonomous insights',
          monthlyPrice: 399,
          yearlyPrice: 3990,
          features: ['Autonomous insights', 'ML-powered predictions', 'Natural language queries', 'Advanced visualizations']
        },
        {
          name: 'AI Healthcare Analytics Platform',
          description: 'Healthcare-specific AI analytics and insights',
          monthlyPrice: 299,
          yearlyPrice: 2990,
          features: ['HIPAA compliance', 'Medical data analysis', 'Predictive diagnostics', 'Clinical insights']
        },
        {
          name: 'AI Content Marketing Suite',
          description: 'AI-powered content creation and optimization',
          monthlyPrice: 149,
          yearlyPrice: 1490,
          features: ['Content generation', 'SEO optimization', 'Performance tracking', 'Multi-platform publishing']
        }
      ]
    },
    {
      title: 'Cybersecurity & Compliance Services',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        {
          name: 'AI Cybersecurity Platform',
          description: 'Advanced threat detection and prevention',
          monthlyPrice: 249,
          yearlyPrice: 2490,
          features: ['Real-time monitoring', 'Threat intelligence', 'Incident response', 'Compliance reporting']
        },
        {
          name: 'AI Cybersecurity Threat Intelligence',
          description: 'Proactive threat intelligence and analysis',
          monthlyPrice: 349,
          yearlyPrice: 3490,
          features: ['Advanced threat hunting', 'Behavioral analysis', 'Zero-day detection', 'Threat correlation']
        },
        {
          name: 'Zero Trust Network Access',
          description: 'Secure access control and network security',
          monthlyPrice: 199,
          yearlyPrice: 1990,
          features: ['Identity verification', 'Access control', 'Network segmentation', 'Audit logging']
        }
      ]
    },
    {
      title: 'Cloud & Infrastructure Services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Cloud DevOps Platform',
          description: 'Automated DevOps and CI/CD solutions',
          monthlyPrice: 179,
          yearlyPrice: 1790,
          features: ['Automated deployments', 'CI/CD pipelines', 'Infrastructure as code', 'Monitoring & alerting']
        },
        {
          name: 'IT Infrastructure Management',
          description: 'Comprehensive infrastructure monitoring and management',
          monthlyPrice: 159,
          yearlyPrice: 1590,
          features: ['Infrastructure monitoring', 'Performance optimization', 'Capacity planning', 'Disaster recovery']
        },
        {
          name: 'FinOps Advisor',
          description: 'Cloud cost optimization and financial management',
          monthlyPrice: 129,
          yearlyPrice: 1290,
          features: ['Cost analysis', 'Optimization recommendations', 'Budget management', 'ROI tracking']
        }
      ]
    },
    {
      title: 'Digital Transformation Services',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'Digital Twin Solutions',
          description: 'Digital replica technology for business optimization',
          monthlyPrice: 599,
          yearlyPrice: 5990,
          features: ['3D modeling', 'Real-time simulation', 'Predictive maintenance', 'Performance optimization']
        },
        {
          name: 'Digital Transformation Consulting',
          description: 'Strategic guidance for digital transformation',
          monthlyPrice: 499,
          yearlyPrice: 4990,
          features: ['Strategy development', 'Change management', 'Implementation planning', 'Success metrics']
        }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      services: [
        {
          name: 'Micro CRM',
          description: 'Lightweight customer relationship management',
          monthlyPrice: 29,
          yearlyPrice: 290,
          features: ['Contact management', 'Lead tracking', 'Basic reporting', 'Email integration']
        },
        {
          name: 'Helpdesk Platform',
          description: 'Customer support and ticket management',
          monthlyPrice: 39,
          yearlyPrice: 390,
          features: ['Ticket management', 'Knowledge base', 'Customer portal', 'Performance metrics']
        },
        {
          name: 'Website Analytics',
          description: 'Comprehensive website performance insights',
          monthlyPrice: 19,
          yearlyPrice: 190,
          features: ['Traffic analysis', 'Conversion tracking', 'Performance monitoring', 'SEO insights']
        }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All our services come with enterprise-grade 
            features, 24/7 support, and flexible pricing options.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
              <span className="ml-1 text-cyan-400">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        {/* Main Pricing Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`relative p-8 rounded-2xl border-2 ${
                tier.popular 
                  ? 'border-cyan-500 bg-gray-900/50' 
                  : 'border-gray-700 bg-gray-900/30'
              } hover:border-cyan-500/50 transition-all duration-300`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-6">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${billingCycle === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice}
                  </span>
                  <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                tier.popular
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                  : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-cyan-500'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-16"
        >
          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <div className="flex items-center space-x-3 mb-8">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 + serviceIndex * 0.05 }}
                    className="p-6 bg-gray-900/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-2xl font-bold">
                        ${billingCycle === 'monthly' ? service.monthlyPrice : service.yearlyPrice}
                      </span>
                      <span className="text-gray-400 text-sm">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors">
                      Learn More
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20 p-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-cyan-500/20"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your specific needs and find the perfect 
            solution for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-200 font-medium border border-gray-600"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </a>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-300">
                <contact.icon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                {contact.href !== '#' ? (
                  <a
                    href={contact.href}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {contact.text}
                  </a>
                ) : (
                  <span>{contact.text}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
