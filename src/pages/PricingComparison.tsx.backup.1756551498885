import React, { useState } from 'react.ts';
import { SEO   } from '../components/SEO';
import { motion   } from 'framer-motion.ts';
import { Link   } from 'react-router-dom.ts';

const PricingComparison: React.FC = (): JSX.Element => {;
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const pricingData = [
    {
      category: "AI-Powered Micro SAAS Services",
      services[
        {
          name: "AI Code Review & Security",
          description: "Advanced vulnerability detection with AI-powered analysis",
          plans[
            {
              name: "Starter",
              price: { monthly: 49, yearly: 39 },
              features[
                "Up to 10,000 lines/month",
                "Basic vulnerability detection",
                "5 programming languages",
                "Email support",
                "Basic reporting"
              ],
              popular: false
            },
            {
              name: "Professional",
              price: { monthly: 199, yearly: 159 },
              features[
                "Up to 100,000 lines/month",
                "Advanced vulnerability detection",
                "25 programming languages",
                "Priority support",
                "Advanced reporting",
                "Git integration",
                "Custom rules"
              ],
              popular: true
            },
            {
              name: "Enterprise",
              price: { monthly: 799, yearly: 639 },
              features[
                "Unlimited lines/month",
                "Enterprise-grade security",
                "50+ programming languages",
                "24/7 support",
                "Custom integrations",
                "API access",
                "Dedicated account manager"
              ],
              popular: false
            }
          ]
        },
        {
          name: "AI Customer Experience Analytics",
          description: "Transform customer insights into actionable intelligence",
          plans[
            {
              name: "Basic",
              price: { monthly: 299, yearly: 239 },
              features[
                "Up to 10,000 interactions/month",
                "Basic sentiment analysis",
                "Customer journey mapping",
                "Email support",
                "Standard reports"
              ],
              popular: false
            },
            {
              name: "Advanced",
              price: { monthly: 799, yearly: 639 },
              features[
                "Up to 100,000 interactions/month",
                "Advanced sentiment analysis",
                "Predictive analytics",
                "Priority support",
                "Custom dashboards",
                "API access",
                "Real-time alerts"
              ],
              popular: true
            },
            {
              name: "Enterprise",
              price: { monthly: 1999, yearly: 1599 },
              features[
                "Unlimited interactions/month",
                "AI-powered insights",
                "Custom ML models",
                "24/7 support",
                "White-label solutions",
                "Advanced integrations",
                "Dedicated support team"
              ],
              popular: false
            }
          ]
        },
        {
          name: "AI DevOps Automation Platform",
          description: "Revolutionize DevOps workflow with AI-powered automation",
          plans[
            {
              name: "Starter",
              price: { monthly: 199, yearly: 159 },
              features[
                "Up to 5 projects",
                "Basic CI/CD pipelines",
                "Git integration",
                "Email support",
                "Standard templates"
              ],
              popular: false
            },
            {
              name: "Professional",
              price: { monthly: 599, yearly: 479 },
              features[
                "Up to 25 projects",
                "Advanced CI/CD pipelines",
                "AI pipeline optimization",
                "Priority support",
                "Custom workflows",
                "Advanced monitoring",
                "Team collaboration"
              ],
              popular: true
            },
            {
              name: "Enterprise",
              price: { monthly: 1499, yearly: 1199 },
              features[
                "Unlimited projects",
                "Enterprise automation",
                "Custom AI models",
                "24/7 support",
                "Advanced security",
                "Multi-cloud support",
                "Dedicated infrastructure"
              ],
              popular: false
            }
          ]
        },
        {
          name: "AI IoT Edge Computing Platform",
          description: "Revolutionize IoT with AI-powered edge computing",
          plans[
            {
              name: "Basic",
              price: { monthly: 299, yearly: 239 },
              features[
                "Up to 100 devices",
                "Basic edge processing",
                "Standard protocols",
                "Email support",
                "Basic monitoring"
              ],
              popular: false
            },
            {
              name: "Professional",
              price: { monthly: 999, yearly: 799 },
              features[
                "Up to 1,000 devices",
                "Advanced edge AI",
                "Real-time processing",
                "Priority support",
                "Custom algorithms",
                "Advanced analytics",
                "Multi-protocol support"
              ],
              popular: true
            },
            {
              name: "Enterprise",
              price: { monthly: 2499, yearly: 1999 },
              features[
                "Unlimited devices",
                "Enterprise edge AI",
                "Custom ML models",
                "24/7 support",
                "Advanced security",
                "Global deployment",
                "Dedicated infrastructure"
              ],
              popular: false
            }
          ]
        }
      ]
    },
    {
      category: "Enterprise Services",
      services[
        {
          name: "Cloud & Infrastructure",
          description: "Enterprise-grade cloud and infrastructure solutions",
          plans[
            {
              name: "Consultation",
              price: { monthly: 5000, yearly: 50000 },
              features[
                "Infrastructure assessment",
                "Migration planning",
                "Cost optimization",
                "Security review",
                "Performance tuning"
              ],
              popular: false
            },
            {
              name: "Implementation",
              price: { monthly: 15000, yearly: 150000 },
              features[
                "Full infrastructure setup",
                "Migration execution",
                "Training & documentation",
                "Ongoing support",
                "Performance monitoring"
              ],
              popular: true
            },
            {
              name: "Managed Services",
              price: { monthly: 25000, yearly: 250000 },
              features[
                "24/7 monitoring",
                "Proactive maintenance",
                "Security updates",
                "Performance optimization",
                "Dedicated team"
              ],
              popular: false
            }
          ]
        },
        {
          name: "Data & Analytics",
          description: "Comprehensive data analytics and business intelligence",
          plans[
            {
              name: "Assessment",
              price: { monthly: 3000, yearly: 30000 },
              features[
                "Data audit",
                "Requirements analysis",
                "Technology selection",
                "Implementation roadmap",
                "ROI analysis"
              ],
              popular: false
            },
            {
              name: "Implementation",
              price: { monthly: 10000, yearly: 100000 },
              features[
                "Data platform setup",
                "ETL development",
                "Dashboard creation",
                "User training",
                "Ongoing support"
              ],
              popular: true
            },
            {
              name: "Managed Analytics",
              price: { monthly: 20000, yearly: 200000 },
              features[
                "Continuous optimization",
                "New insights delivery",
                "Performance monitoring",
                "User support",
                "Regular updates"
              ],
              popular: false
            }
          ]
        },
        {
          name: "Security & Compliance",
          description: "Enterprise-grade security and compliance solutions",
          plans[
            {
              name: "Assessment",
              price: { monthly: 4000, yearly: 40000 },
              features[
                "Security audit",
                "Vulnerability assessment",
                "Compliance review",
                "Risk analysis",
                "Recommendations"
              ],
              popular: false
            },
            {
              name: "Implementation",
              price: { monthly: 12000, yearly: 120000 },
              features[
                "Security implementation",
                "Compliance setup",
                "Policy development",
                "Training programs",
                "Ongoing support"
              ],
              popular: true
            },
            {
              name: "Managed Security",
              price: { monthly: 25000, yearly: 250000 },
              features[
                "24/7 monitoring",
                "Threat response",
                "Regular assessments",
                "Compliance reporting",
                "Dedicated team"
              ],
              popular: false
            }
          ]
        }
      ];
    };
  ];

  const calculateSavings = (monthlyPrice: anynumber, yearlyPrice: number)   => {;
    const monthlyTotal = monthlyPrice * 12;
    const yearlyTotal = yearlyPrice * 12;
    const savingsPercent = Math.round((savings / monthlyTotal) * 100);
    return { savings, savingsPercent }};

  return (
    <>
      <SEO
        title = "Pricing Comparison | Zion Tech Group - Transparent Service Pricing"
        description="Compare pricing for all our AI-powered micro SAAS, cloud infrastructure, data analytics, and security services. Find the perfect plan for your business needs."
        keywords="Zion Tech Group pricing, AI services pricing, cloud services pricing, data analytics pricing, cybersecurity pricing, micro SAAS pricing, business solutions pricing"
        canonical="https://ziontechgroup.com/pricing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 

}}
              animate = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transparent Pricing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Choose the perfect plan for your business. All our AI-powered micro SAAS services 
                come with a 14-day free trial and flexible pricing options.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className={`text-lg ${selectedPlan === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setSelectedPlan(selectedPlan === 'monthly' ? 'yearly' : 'monthly')}
                  className="relative w-16 h-8 bg-gray-600 rounded-full p-1 transition-colors duration-300"
                >
                  <motion.div
                    className="w-6 h-6 bg-white rounded-full shadow-md"
                    animate={{ x: selectedPlan === 'yearly' ? 32 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
                <span className={`text-lg ${selectedPlan === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                  Yearly
                  <span className="ml-2 text-sm text-green-400 font-medium">
                    Save up to 20%
                  </span>
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Tables */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-20">
            {pricingData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.8,
  delay: categoryIndex * 0.2 

}}
                viewport={{ once: true }}
              >
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {category.category}
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Choose the plan that best fits your business needs and scale as you grow.
                  </p>
                </div>

                <div className="space-y-16">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial = {
  { opacity: 0,
  y: 20 

}}
                      whileInView = {
  { opacity: 1,
  y: 0 

}}
                      transition = {
  { duration: 0.6,
  delay: serviceIndex * 0.1 

}}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                          {service.name}
                        </h3>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                          {service.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 lg: anygrid-cols-3 gap-8">;
                        {service.plans.map((plan, planIndex)   => {;
                          const savings = calculateSavings(plan.price.monthly, plan.price.yearly);
                          return (
                            <motion.div
                              key = {plan.name}
                              initial = {
  { opacity: 0,
  scale: 0.9 

}}
                              whileInView = {
  { opacity: 1,
  scale: 1 

}}
                              transition = {
  { duration: 0.5,
  delay: planIndex * 0.1 

}}
                              viewport={{ once: true }}
                              className={`relative rounded-xl p-8 transition-all duration-300 ${
                                plan.popular
                                  ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500/50 scale-105'
                                  : 'bg-white/10 backdrop-blur-sm border border-white/20'
                              }`}
                            >
                              {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    Most Popular
                                  </span>
                                </div>
                              )}

                              <div className="text-center mb-8">
                                <h4 className="text-xl font-semibold text-white mb-4">{plan.name}</h4>
                                <div className="mb-2">
                                  <span className="text-4xl font-bold text-white">
                                    ${selectedPlan === 'monthly' ? plan.price.monthly : plan.price.yearly}
                                  </span>
                                  <span className="text-gray-300">/{selectedPlan === 'monthly' ? 'month' : 'month'}</span>
                                </div>
                                {selectedPlan === 'yearly' && (
                                  <div className="text-sm text-green-400">
                                    Save ${savings.savings} ({savings.savingsPercent}%) annually
                                  </div>
                                )}
                              </div>

                              <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-center text-gray-300">
                                    <span className="text-green-400 mr-3">✓</span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>

                              <div className="space-y-3">
                                <Link
                                  to="/contact"
                                  className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                                    plan.popular
                                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                                      : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                                  }`}
                                >
                                  Get Started
                                </Link>
                                <Link
                                  to = {
  `/services/${service.name.toLowerCase().replace(/\s+/g,
  '-')

}`}
                                  className="block w-full py-2 px-6 rounded-lg text-center text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                  Learn More
                                </Link>
                              </div>
                            </motion.div>
                          )})}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Our AI-powered solutions deliver measurable business impact with transparent pricing.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-white mb-3">14-Day Free Trial</h3>
                  <p className="text-gray-300">Try  service risk-free with our comprehensive trial period</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Transparent Pricing</h3>
                  <p className="text-gray-300">No hidden fees, clear pricing tiers, and flexible options</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Proven ROI</h3>
                  <p className="text-gray-300">Our clients see measurable improvements within 30 days</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
                <p className="text-gray-300 mb-6">
                  We offer custom pricing for enterprise clients and specialized requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                  >
                    Contact Sales
                  </Link>
                  <Link
                    to="/all-services"
                    className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team is here to help you choose the right plan and get you up and running quickly.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">📱 Phone Support</h3>
                  <p className="text-gray-300 mb-2">+1 302 464 0950</p>
                  <p className="text-sm text-gray-400">Available Mon-Fri 9AM-6PM EST</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">✉️ Email Support</h3>
                  <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
                  <p className="text-sm text-gray-400">Response within 24 hours</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">📍 Office</h3>
                  <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
                  <p className="text-sm text-gray-400">Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="text-gray-300">
                <p>Visit our website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:underline">https://ziontechgroup.com</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>;
    </>;
  )};

export default PricingComparison;