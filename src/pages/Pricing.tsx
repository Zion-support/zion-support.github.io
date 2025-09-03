<<<<<<< HEAD
import React from 'react';
import {SEO } from '@/components/SEO';

export default function Pricing() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="Pricing - Zion Tech Group" description="Professional Pricing services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Pricing</h1>
        <p className="text-gray-300 text-lg">
          Professional Pricing services to help your business grow.
        </p>
      </div>
    </div>
=======
<<<<<<< HEAD
import React from &apos;react';
import { motion } from &apos;framer-motion';
import { SEO } from &apos;../components/SEO';
import { 
  Check, Star, ArrowRight, Users, Zap, Shield, 
  Brain, Atom, Rocket, Globe, Award
} from &apos;lucide-react';&apos;&apos;

export default function Pricing() {}
  const pricingPlans = [
    ;{
      name: &quot;Starter&quot;,
      price: &quot;$99&quot;,
      period: &quot;per month&quot;,
      description: &quot;Perfect for small businesses getting started with AI&quot;,
      features: [
        &quot;Basic AI tools and services&quot;,
        &quot;Email support&quot;,
        &quot;Up to 5 users&quot;,
        &quot;Standard security features&quot;,
        &quot;Basic analytics dashboard&quot;
      ],
      popular: false,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      name: &quot;Professional&quot;,
      price: &quot;$299&quot;,
      period: &quot;per month&quot;,
      description: &quot;Ideal for growing businesses with advanced needs&quot;,
      features: [
        &quot;Advanced AI and machine learning tools&quot;,
        &quot;Priority support&quot;,
        &quot;Up to 25 users&quot;,
        &quot;Enhanced security features&quot;,
        &quot;Advanced analytics and reporting&quot;,
        &quot;API access&quot;,
        &quot;Custom integrations&quot;
      ],
      popular: true,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      name: &quot;Enterprise&quot;,
      price: &quot;$999&quot;,
      period: &quot;per month&quot;,
      description: &quot;Comprehensive solution for large organizations&quot;,
      features: [
        &quot;Full AI and quantum computing suite&quot;,
        &quot;24/7 dedicated support&quot;,
        &quot;Unlimited users&quot;,
        &quot;Enterprise-grade security&quot;,
        &quot;Custom analytics and dashboards&quot;,
        &quot;Full API access&quot;,
        &quot;Custom development services&quot;,
        &quot;Dedicated account manager&quot;
      ],
      popular: false,
      color: &quot;from-orange-500 to-red-500&quot;
    }
  ];&quot;

=======
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Check, Star, ArrowRight, Users, Zap, Shield, 
  Brain, Atom, Rocket, Globe, Award
} from 'lucide-react';
export default function Pricing() {
  const pricingPlans = [
<<<<<<< HEAD
    {
      name: "Starter", price: "$99",
      period: "per month", description: "Perfect for small businesses getting started with AI",
      features: [
        "Basic AI tools and services", "Email support",
        "Up to 5 users", "Standard security features",
        "Basic analytics dashboard"
=======
  {
      name: "Starter", price: "$99",
      period: "per month", description: "Perfect for small businesses getting started with AI",
      features: [
        "Basic AI tools and services,Email support,Up to 5 users,Standard security features,Basic analytics dashboard"
>>>>>>> main
      ], popular: false,
      color: "from-blue-500 to-cyan-500"
    }, {
      name: "Professional",
      price: "$299", period: "per month",
      description: "Ideal for growing businesses with advanced needs", features: [
<<<<<<< HEAD
        "Advanced AI and machine learning tools",
        "Priority support", "Up to 25 users",
        "Enhanced security features", "Advanced analytics and reporting",
        "API access", "Custom integrations"
=======
        "Advanced AI and machine learning tools,Priority support,Up to 25 users,Enhanced security features,Advanced analytics and reporting,API access,Custom integrations"
>>>>>>> main
      ], popular: true,
      color: "from-purple-500 to-pink-500"
    }, {
      name: "Enterprise",
      price: "$999", period: "per month",
      description: "Comprehensive solution for large organizations", features: [
<<<<<<< HEAD
        "Full AI and quantum computing suite",
        "24/7 dedicated support", "Unlimited users",
        "Enterprise-grade security", "Custom analytics and dashboards",
        "Full API access", "Custom development services",
        "Dedicated account manager"
=======
        "Full AI and quantum computing suite,24/7 dedicated support,Unlimited users,Enterprise-grade security,Custom analytics and dashboards,Full API access,Custom development services,Dedicated account manager"
>>>>>>> main
      ], popular: false,
      color: "from-orange-500 to-red-500"
    }
  ];
>>>>>>> main
  const serviceCategories = [
<<<<<<< HEAD
    {
<<<<<<< HEAD
      title: &quot;AI Services&quot;,
      icon: Brain,
      startingPrice: &quot;$99/month&quot;,
      description: &quot;Machine learning, natural language processing, and AI automation&quot;
    },
    {
      title: &quot;Quantum Computing&quot;,
      icon: Atom,
      startingPrice: &quot;$499/month&quot;,
      description: &quot;Quantum algorithms, quantum machine learning, and quantum optimization&quot;
    },
    {
      title: &quot;Cybersecurity&quot;,
      icon: Shield,
      startingPrice: &quot;$199/month&quot;,
      description: &quot;Advanced threat detection, security monitoring, and compliance&quot;
    },
    {
      title: &quot;Micro SaaS&quot;,
      icon: Rocket,
      startingPrice: &quot;$149/month&quot;,
      description: &quot;Custom software solutions and micro SaaS applications&quot;
    }
  ];

  return (&quot;
    <>
      <SEO 
        title=&quot;Pricing - Zion Tech Group | Transparent Technology Solutions Pricing&quot;
        description=&quot;Explore Zion Tech Group&apos;s transparent pricing for AI services, quantum computing, cybersecurity, and micro SaaS solutions. Choose the plan that fits your needs.&quot;
        keywords=&quot;pricing, AI services pricing, quantum computing cost, cybersecurity pricing, micro SaaS pricing, Zion Tech Group&quot;
      />&quot;
=======
=======
  {
>>>>>>> main
      title: "AI Services", icon: Brain,
      startingPrice: "$99/month", description: "Machine learning, natural language processing, and AI automation"
    },
    {
      title: "Quantum Computing", icon: Atom,
      startingPrice: "$499/month", description: "Quantum algorithms, quantum machine learning, and quantum optimization"
    },
    {
      title: "Cybersecurity", icon: Shield,
      startingPrice: "$199/month", description: "Advanced threat detection, security monitoring, and compliance"
    },
    {
      title: "Micro SaaS", icon: Rocket,
      startingPrice: "$149/month", description: "Custom software solutions and micro SaaS applications"
    }
  ];
  return (
    <>
      <SEO 
        title="Pricing - Zion Tech Group | Transparent Technology Solutions Pricing"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
        description="Explore Zion Tech Group&apos;s transparent pricing for AI services, quantum computing, cybersecurity, and micro SaaS solutions. Choose the plan that fits your needs."'
        keywords="pricing, AI services pricing, quantum computing cost, cybersecurity pricing, micro SaaS pricing, Zion Tech Group"
=======
        description="Explore Zion Tech Group's transparent pricing for AI services, quantum computing, cybersecurity, and micro SaaS solutions. Choose the plan that fits your needs. 
        keywords='pricing, AI services pricing, quantum computing cost, cybersecurity pricing, micro SaaS pricing, Zion Tech Group"
>>>>>>> main
      />
>>>>>>> main
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* Hero Section */}&quot;
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6&quot;>
                Transparent Pricing&quot;
              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Choose the perfect plan for your business needs. All plans include 
                our core features with no hidden fees or surprises.&quot;
              </p>
              <div className=&quot;flex items-center justify-center&quot;>&quot;"
                <Star className=&quot;w-16 h-16 text-blue-400&quot; />&quot;
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className=&quot;py-16&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Choose Your Plan&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Flexible pricing options designed to scale with your business&quot;
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {pricingPlans.map((plan, index) => (&quot;}
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border ${
                    plan.popular 
                      ? &apos;border-blue-400/50 ring-2 ring-blue-400/20&apos; 
                      : &apos;border-slate-600/50&apos;
                  } hover:border-cyan-400/50 transition-all duration-300 hove,r:scale-105`}
                >
                  {plan.popular && (&apos;}
                    <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>&quot;"
                      <span className=&quot;px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full&quot;>
                        Most Popular&quot;
                      </span>
                    </div>
                  )}

                  <div className=&quot;text-center mb-8&quot;>&quot;"
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <Star className=&quot;w-8 h-8 text-white&quot; />&quot;
                    </div>
                    <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}&quot;</h3>
                    <p className=&quot;text-gray-300 text-sm mb-4&quot;>{plan.description}&quot;</p>
                    <div className=&quot;mb-4&quot;>&quot;"
                      <span className=&quot;text-4xl font-bold text-white&quot;>{plan.price}&quot;</span>
                      <span className=&quot;text-gray-400 ml-2&quot;>{plan.period}&quot;</span>
                    </div>
                  </div>

                  <ul className=&quot;space-y-3 mb-8&quot;>
                    {plan.features.map((feature, featureIndex) => (&quot;}
                      <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>&quot;"
                        <Check className=&quot;w-5 h-5 text-green-400 mr-3 flex-shrink-0&quot; />&quot;
                        <span className=&quot;text-sm&quot;>{feature}&quot;</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-200 ${
                    plan.popular
<<<<<<< HEAD
                      ? &apos;bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700&apos;
                      : &apos;border border-slate-600 text-gray-300 hove,r:bg-slate-700&apos;
=======
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: from-blue-700 hover:to-purple-700'
                      : 'border border-slate-600 text-gray-300 hover:bg-slate-700'
>>>>>>> main
                  }`}>
                    Get Started&apos;
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className=&quot;py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Service Categories&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Explore our specialized service offerings and their starting prices&quot;
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&quot;>
              {serviceCategories.map((service, index) => (&quot;}
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hove,r:scale-105 text-center&quot;
                >&quot;
                  <div className=&quot;w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>&quot;"
                    <service.icon className=&quot;w-8 h-8 text-white&quot; />&quot;
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.title}&quot;</h3>
                  <p className=&quot;text-gray-300 text-sm mb-4&quot;>{service.description}&quot;</p>
                  <div className=&quot;text-2xl font-bold text-blue-400 mb-4&quot;>{service.startingPrice}&quot;</div>
                  <button className=&quot;px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors&quot;>
                    Learn More&quot;
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
                Ready to Get Started?&quot;
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Contact our team to discuss your specific needs and get a customized quote. 
                We offer flexible pricing and can tailor our services to your requirements.&quot;
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>&quot;"
                <a
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105&quot;
                >&quot;
                  <Users className=&quot;w-5 h-5 mr-2&quot; />
                  Contact Sales&quot;
                </a>
                <a
                  href=&quot;/services&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hove,r:text-white transition-all duration-200&quot;
                >&quot;
                  <ArrowRight className=&quot;w-5 h-5 mr-2&quot; />
                  View All Services&quot;
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
</>
>>>>>>> main
  );
}