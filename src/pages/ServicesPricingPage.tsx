import React, { useState } from 'react';
export default ServicesPricingPage;
import { motion  } from 'framer-motion';
export default function Page(function Page() {): any {}
,
      features: ['Everything in Starter',
        'Advanced AI Analytics',
        'Custom Machine Learning Models',
        'Priority Support',
        '25 User Licenses',
        'Advanced Security Features',
        'Weekly Reports',
        'API Access'
      ],
      popular: true,
      icon: Shield
    },
    {}
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      price: { monthly: 1999, annual: 19999 },
      features: ['Everything in Professional',
        'Custom AI Solutions',
        'Dedicated Support Team',
        'Unlimited User Licenses',
        'Enterprise Security',
        'Real - time Analytics',
        'Custom Integrations',
        'On - site Training'
      ],
      popular: false,
      icon: Cloud
    }
  ];

  Check,
  Star,
  Zap,
  Shield,
  Cloud,
  Brain,
  Database,  Globe,
  Mail,
  Phone,
  ArrowRight,
  Users,
  Clock,
  Award,
  TrendingUp,
  Building,
  Smartphone,
  ShoppingCart,
  Heart,
  GraduationCap,
  Truck} from 'lucide-react';
const ServicesPricingPage: React.FC = () => {}
'
  const [selectedPlan, setSelectedPlan] = useState('starter');'
  const [billingCycle, setBillingCycle] = useState('monthly');

  const getCategoryIcon: any = (category: string) => {}
    const categoryIcons: { [key: string]: React.ReactNode } = {}
'
      'AI Automation': <Zap className="h-5 w-5"  />,"'""
      'Customer Intelligence': <Users className="h-5 w-5"  />,"'""
      'Content Marketing': <TrendingUp className="h-5 w-5"  />,"""
      Cybersecurity: <Shield className="h-5 w-5"  />,"'""
      'Threat Intelligence': <Shield className="h-5 w-5"  />,"'""
      'Cloud Management': <Globe className="h-5 w-5"  />,"""
      DevOps: <Zap className="h-5 w-5"  />,"'""
      'Data Analytics': <TrendingUp className="h-5 w-5"  />,"'""
      'IoT & Predictive Analytics': <Zap className="h-5 w-5"  />,"'""
      'Business Intelligence': <TrendingUp className="h-5 w-5"  />,"'""
      'Digital Transformation': <Building className="h-5 w-5"  />,"'""
      'Edge Computing': <Globe className="h-5 w-5"  />,"'""
      'API Management': <Zap className="h-5 w-5"  />,"'""
      'Blockchain & Web3': <Zap className="h-5 w-5"  />,"'""
      'Mobile Development': <Smartphone className="h-5 w-5"  />,"'""
      'E-commerce': <ShoppingCart className="h-5 w-5"  />,"'""
      'Healthcare Technology': <Heart className="h-5 w-5"  />,"""
      FinTech: <TrendingUp className="h-5 w-5"  />,"'""
      'Education Technology': <GraduationCap className="h-5 w-5"  />,"'""
      'Supply Chain': <Truck className="h-5 w-5"  />};"""
    return categoryIcons[category] || <Zap className="h-5 w-5"  />};
  return()
    <>""
      <SEO"""
        title="Services & Pricing - Zion Tech Group"""
        description="Comprehensive technology services and flexible pricing plans designed to accelerate your digital transformation journey."""
        keywords="services, pricing, AI solutions, cybersecurity, cloud management, data analytics, Zion Tech Group""
      />""
"      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">""
        {/* Header */}"""
        <section className="pt-32 pb-16 px-4">"""
          <div className="max-w-7xl mx-auto text-center">
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}""
            >"""
              <div className="flex items-center justify-center space-x-3 mb-6">"""
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">"""
                  <Award className="w-8 h-8 text-white"  />                </div>""
              </div>"""
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Services & Pricing""
              </h1>"""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Comprehensive technology services and flexible pricing plans;
                designed to accelerate your digital transformation journey.</p>
            </motion.div>
          </div>
        </section>
""
        {/* Pricing Plans */}"""
        <section className="py-16 px-4">"""
          <div className="max-w-7xl mx-auto">
            <motion.h2;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}""
              transition={{ duration: 0.6 }}"""
              className="text-3xl font-bold text-white mb-12 text-center""
            >
              Choose Your Plan;
            </motion.h2>
""
            {/* Billing Toggle */}"""
            <div className="flex justify-center mb-12">"""
              <div className="bg-slate-800/50 rounded-lg p-1 border border-slate-700/50">'
                <button''
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${}
'
                    billingCycle === 'monthly'''
                      ? 'bg-blue-500 text-white'''`
                      : 'text-gray-300 hover:text-white'``
                  }`}
                >
                  Monthly;
                </button>'
                <button''`
                  onClick={() => setBillingCycle('annual')}``
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${}
'
                    billingCycle === 'annual'''
                      ? 'bg-blue-500 text-white'''`
                      : 'text-gray-300 hover:text-white'``
                  }`}
                >""
                  Annual"""
                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
""
            {/* Pricing Cards */}"""
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div;
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}`
                  transition={{ duration: 0.6, delay: index * 0.1 }}``
                  className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${}
'
                    plan.popular''
                      ? 'border-blue-500/50 shadow-lg shadow-blue-500/20'''`
                      : 'border-slate-700/50'``
                  }`}
                >""
                  {plan.popular && ("""
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"""
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular;
                      </span>
                    </div>) }

                  <div  className="text-center mb-8">
                    <div  className="flex items - center justify - center mb-4">
                      <plan.icon className="w-8 h-8 text-blue -400" />
                    </div>
                  )}""
"""
                  <div className="text-center mb-8">"""
                    <div className="flex items-center justify-center mb-4">"""
                      <plan.icon className="w-8 h-8 text-blue-400" />""
                    </div>"""
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}""
                    </h3>"""
                    <p className="text-gray-300 text-sm mb-6">
                      {plan.description}""
                    </p>"""
                    <div className="mb-4">"""
                      <span className="text-4xl font-bold text-white">
                        ${plan.price[billingCycle as keyof typeof plan.price]}""
                      </span>"""
                      <span className="text-gray-400 ml-2">'
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                  </div>""
"""
                  <ul className="space-y-3 mb-8">""
                    {plan.features.map((feature, idx) => ("""
                      <li key={idx} className="flex items-center text-gray-300">"""
                        <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"  />                        {feature}
                      </li>) ) }
                  </ul>
""
                  <button"""
                    className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${}
'
                    plan.popular''
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'''""
                      : 'bg-slate-700/50 text-white hover:bg-slate-600/50 border border-slate-600/50'"""
                  }""
                  >
                    Get Started;
                  </button>
                </motion.div>) ) }
            </div>
          </div>
        </section>
""
        {/* Service Categories */}"""
        <section className="py-16 px-4">"""
          <div className="max-w-7xl mx-auto">
            <motion.h2;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}""
              transition={{ duration: 0.6 }}"""
              className="text-3xl font-bold text-white mb-12 text-center""
            >
              Our Services;
            </motion.h2>""
"""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCategories.map((category, index) => (
                <motion.div;
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}""
                  transition={{ duration: 0.6, delay: index * 0.1 }}"""
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"""
                >"""
                  <div className="flex items-center gap-3 mb-4">"""
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">"""
                      <category.icon className="w-5 h-5 text-white" />""
                    </div>"""
                    <h3 className="text-white font-semibold">
                      {category.name}
                    </h3>
                  </div>""
"""
                  <p className="text-gray-300 text-sm mb-4">
                    {category.description}
                  </p>""
"""
                  <ul className="space-y-2">
                    {category.services.map((service, idx) => (
                      <li""
                        key={idx}"""
                        className="flex items-center text-gray-400 text-sm"""
                      >"""
                        <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0"  />                        {service}
                      </li>) ) }
                  </ul>
                </motion.div>) ) }
            </div>
          </div>
        </section>
""
        {/* CTA Section */}"""
        <section className="py-16 px-4">"""
          <div className="max-w-4xl mx-auto text-center">
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}""
              transition={{ duration: 0.6 }}"""
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"""
            >"""
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?""
              </h2>"""
              <p className="text-gray-300 mb-8">
                Contact our team to discuss your specific needs and get a;
                customized solution.""
              </p>"""
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"""
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">"""
                  <Mail className="w-5 h-5 inline mr-2"  />
                  Contact Sales""
                </button>"""
                <button className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg font-medium hover:bg-blue-400 hover:text-white transition-all duration-300">"""
                  <Phone className="w-5 h-5 inline mr-2"  />                  Schedule Demo;
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>) };
export default ServicesPricingPage;'"`
'"`'"`
