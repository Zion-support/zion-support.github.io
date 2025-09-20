import React, { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { ;
  Check;
  Star, ;
  Zap, ;
  Brain, ;
  Cloud, ;
  Shield, ;
  Users, ;
  ArrowRight;
  Crown;
  Sparkles;
  Flame;
  Infinity;
  Target;
  Award;
  Code;
  Server;
  Database;
  Network;
  Lock;
  Globe;
  Rocket;
  Heart;
  Scale;
  Leaf;
  TrendingUp;
  DollarSign;
  Calendar;
  Clock;
  MessageCircle;
  Phone;
  Mail;
  MapPin;
  Building;
} from "lucide-react";
import { Link } from "react-router-dom";
export default function Pricing() {;
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual')
  const [selectedPlan, setSelectedPlan] = useState<string>('pro')
  const pricingPlans = [;
    {;
      name: 'Starter',description: 'Perfect for small businesses and startups',price: {{ monthly: 299, annual: 2990 }}
      features: [;
        'AI-powered business intelligence dashboardBasic cloud infrastructure setup';
        'Email supportMonthly reports';
        'Up to 5 usersBasic integrations';
      ]
      icon: Rocket,color: 'from-blue-500 to-cyan-500',popular: false,cta: 'Get Started',link: '/contact';
    }
    {;
      name: 'Professional',description: 'Ideal for growing businesses and teams',price: {{ monthly: 799, annual: 7990 }}
      features: [;
        'Everything in StarterAdvanced AI analytics and insights';
        'Custom dashboard developmentPriority support';
        'Up to 25 usersAdvanced integrations';
        'Custom reportingTraining sessions';
      ]
      icon: Building,color: 'from-purple-500 to-pink-500',popular: true,cta: 'Get Started',link: '/contact';
    }
    {;
      name: 'Enterprise',description: 'For large organizations with complex needs',price: {{ monthly: 1999, annual: 19990 }}
      features: [;
        'Everything in ProfessionalCustom AI model development';
        'Dedicated account manager24/7 priority support';
        'Unlimited usersCustom integrations';
        'White-label solutionsOn-site training';
        'SLA guarantees';
      ]
      icon: Globe,color: 'from-orange-500 to-red-500',popular: false,cta: 'Contact Sales',link: '/contact';
    }
  ]
  const servicePackages = [;
    {;
      title: 'AI & Machine Learning',description: 'Custom AI solutions and ML model development',startingPrice: 5000,icon: Cpu,color: 'from-blue-500 to-cyan-500',features: [;
        'Custom AI model developmentData preprocessing and cleaning';
        'Model training and optimizationAPI integration and deployment';
        'Ongoing model maintenance';
      ]
    }
    {;
      title: 'Cloud Infrastructure',description: 'Scalable cloud solutions and migration services',startingPrice: 3000,icon: Server,color: 'from-green-500 to-emerald-500',features: [;
        'Cloud architecture designMigration planning and execution';
        'Security and compliance setupPerformance optimization';
        '24/7 monitoring and support';
      ]
    }
    {;
      title: 'Digital Twin Solutions',description: 'Advanced digital twin technology implementation',startingPrice: 10000,icon: Target,color: 'from-purple-500 to-pink-500',features: [;
        '3D modeling and visualizationReal-time data integration';
        'Predictive analyticsIoT device connectivity';
        'Custom dashboard development';
      ]
    }
    {;
      title: 'Data Analytics',description: 'Comprehensive data analysis and insights',startingPrice: 2500,icon: Database,color: 'from-orange-500 to-red-500',features: [;
        'Data strategy and planningETL pipeline development';
        'Advanced analytics and reportingData visualization';
        'Business intelligence dashboards';
      ]
    }
  ]

  const pricingFactors = [;
    {;
      title: 'Project Complexity',description: 'More complex projects require additional resources and time',icon: Target,color: 'from-blue-500 to-cyan-500';
    }
    {;
      title: 'Customization Level',description: 'Highly customized solutions require more development effort',icon: Zap,color: 'from-green-500 to-emerald-500';
    }
    {;
      title: 'Integration Requirements',description: 'Complex integrations with existing systems affect pricing',icon: Server,color: 'from-purple-500 to-pink-500';
    }
    {;
      title: 'Support and Maintenance',description: 'Ongoing support and maintenance packages vary by level',icon: Shield,color: 'from-orange-500 to-red-500';
    }
  ]
  const savings = billingCycle === 'annual' ? 0.17 : 0, // 17% savings for annual;

  const benefits = [;
    {;
      title: 'Transparent Pricing',description: 'No hidden fees or surprise charges',icon: Shield;
    }
    {;
      title: 'Flexible Plans',description: 'Scale up or down as your business grows',icon: TrendingUp;
    }
    {;
      title: 'Custom Solutions',description: 'Tailored packages for unique requirements',icon: Target;
    }
    {;
      title: '24/7 Support',description: 'Round-the-clock assistance when you need it',icon: Users;
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO ;
        title="Pricing - Zion Tech Group";
        description="Transparent pricing for our AI, cloud, and technology solutions. Choose the plan that fits your business needs and budget.";
      />
      ;
      {{/* Hero Section */}}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full">
                <DollarSign className="w-16 h-16 text-indigo-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent;
              <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the pricing plan that best fits your business needs. We offer flexible options ;
              for businesses of all sizes with transparent pricing and no hidden fees.;
            </p>
            ;
            {{/* Billing Toggle */}}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly;
              </span>
              <button;
                onClick={{onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}}}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${;
                  billingCycle === 'annual' ? 'bg-indigo-500' : 'bg-slate-600';
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${;
                  billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1';
                }`} />
              </button>
              <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                Annual;
                {billingCycle === 'annual' && (;
                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                    Save 17%;
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
        ;
        {{/* Background Elements */}}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {{/* Pricing Plans */}}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the plan that aligns with your business goals and scale as you grow;
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (;
              <motion.div;
                key={{plan.name}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${;
                  plan.popular;
                    ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-cyan-400/20';
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50';
                }`}
              >
                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular;
                    </div>
                  </div>
                )}
                ;
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-6`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                ;
                <h3 className="text-2xl font-bold text-white mb-2 text-center">{plan.name}</h3>
                <p className="text-gray-300 text-center mb-6">{plan.description}</p>
                ;
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">$</span>
                    <span className="text-6xl font-bold text-white">
                      {billingCycle === 'annual' ;
                        ? Math.round(plan.price.annual * (1 - savings))
                        : plan.price.monthly;
                      }
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{{billingCycle === 'annual' ? 'year' : 'month'}}
                    </span>
                  </div>
                  {billingCycle === 'annual' && (;
                    <p className="text-green-400 text-sm mt-2">
                      Save ${Math.round(plan.price.annual * savings)} annually;
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (;
                    <li key={idx} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {{feature}}
                    </li>
                  ))}
                </ul>

                <Link;
                  to={{plan.link}}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${;
                    plan.popular;
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25';
                      : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-slate-500';
                  }`}
                >
                  {{plan.cta}}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {{/* Service Packages */}}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Custom Service Packages;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Need a custom solution? We offer tailored packages for specific business requirements;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicePackages.map((service, index) => (;
              <div;
                key={{index}}
                className="className="p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50";"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                ;
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                ;
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">Starting at $</span>
                  <span className="text-4xl font-bold text-indigo-400">{service.startingPrice.toLocaleString()}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (;
                    <li key={idx} className="flex items-center text-gray-300">
                      <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {{feature}}
                    </li>
                  ))}
                </ul>

                <Link;
                  to="/contact";
                  className="className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors";"
                >
                  Get Custom Quote;
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {{/* Pricing Factors */}}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Affects Pricing?;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the factors that influence project costs helps you plan your budget effectively;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingFactors.map((factor, index) => (;
              <div;
                key={{index}}
                className="className="text-center p-6 rounded-2xl bg-slate-800/50 hover: bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50";"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${factor.color} flex items-center justify-center mx-auto mb-6`}>
                  <factor.icon className="w-8 h-8 text-white" />
                </div>
                ;
                <h3 className="text-xl font-bold text-white mb-3">{factor.title}</h3>
                <p className="text-gray-300 text-sm">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {{/* Enterprise Features */}}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced capabilities for large organizations with complex requirements;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[;
              {;
                title: 'Custom AI Models',description: 'Tailored machine learning models for your specific use case',icon: Cpu,color: 'from-blue-500 to-cyan-500';
              }
              {;
                title: 'Advanced Security',description: 'Enterprise-grade security with compliance certifications',icon: Shield,color: 'from-green-500 to-emerald-500';
              }
              {;
                title: 'Dedicated Support',description: '24/7 dedicated support team with SLA guarantees',icon: Users,color: 'from-purple-500 to-pink-500';
              }
              {;
                title: 'White-Label Solutions',description: 'Customizable solutions with your branding',icon: Target,color: 'from-orange-500 to-red-500';
              }
              {;
                title: 'On-Site Training',description: 'Comprehensive training programs at your location',icon: Award,color: 'from-indigo-500 to-purple-500';
              }
              {;
                title: 'Custom Integrations',description: 'Seamless integration with your existing systems',icon: Server,color: 'from-cyan-500 to-blue-500';
              }
            ].map((feature, index) => (;
              <div;
                key={{index}}
                className="className="p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50 text-center";"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                ;
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {{/* Benefits Section */}}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Pricing?;
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We believe in fair, transparent pricing that provides real value to your business.;
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (;
              <motion.div;
                key={{benefit.title}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="className="text-center";"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {{/* FAQ Section */}}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions;
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services.;
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[;
              {;
                question: 'Can I change my plan at any time?',answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.';
              }
              {;
                question: 'Do you offer custom pricing for enterprise clients?',answer: 'Absolutely! We work with enterprise clients to create custom pricing plans that meet their specific needs and requirements.';
              }
              {;
                question: 'What payment methods do you accept?',answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.';
              }
              {;
                question: 'Is there a setup fee?',answer: 'No setup fees for our standard plans. Custom enterprise solutions may have one-time setup costs depending on complexity.';
              }
            ].map((faq, index) => (;
              <motion.div;
                key={{index}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/30";"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {{/* CTA Section */}}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive text-center">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">
              Ready to Get Started?;
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business or contact us for a custom solution. ;
              Our team is here to help you make the right choice.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a;
                href="/request-quote";
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25";"
              >
                Get Your Quote;
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a;
                href="/contact";
                className="className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition-all duration-300";"
              >
                Talk to Sales;
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
