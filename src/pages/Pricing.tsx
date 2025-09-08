
import { 
  Check, Star, ArrowRight, Users, Zap, Shield, 
  Brain, Atom, Rocket, Globe, Award
} from &apos;lucide-react';&apos;&apos;

export default function Pricing() {}
  const pricingPlans = [{
      name: &quot;Starter&quot;,
      price: &quot;$99&quot;,
      period: &quot;per month&quot;,
      description: &quot;Perfect for small businesses getting started with AI&quot;,
      features: [
        &quot;Basic AI tools and services&quot;,
        &quot;Email support&quot;,
        &quot;Up to 5 users&quot;,
        &quot;Standard security features&quot;,
        &quot;Basic analytics dashboard&quot],
      popular: false,
      color: &quot;from-blue-500 to-cyan-500&quot}, {
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
        &quot;Custom integrations&quot],
      popular: true,
      color: &quot;from-purple-500 to-pink-500&quot}, {
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
        &quot;Dedicated account manager&quot],
      popular: false,
      color: &quot;from-orange-500 to-red-500&quot}
  ];&quot], popular: false,
      color: "from-blue-500 to-cyan-500"
    }, { name: "Professional",
      price: "$299", period: "per month",
      description: "Ideal for growing businesses with advanced needs", features: [

      ], popular: true,
      color: "from-purple-500 to-pink-500"
    }, { name: "Enterprise",
      price: "$999", period: "per month",
      description: "Comprehensive solution for large organizations", features: [

      ], popular: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  const serviceCategories = [

      title: "AI Services", icon: Brain,

      startingPrice: "$99/month", description: "Machine learning, natural language processing, and AI automation"
    }, { title: "Quantum Computing", icon: Atom,
      startingPrice: "$499/month", description: "Quantum algorithms, quantum machine learning, and quantum optimization"
    }, { title: "Cybersecurity", icon: Shield,
      startingPrice: "$199/month", description: "Advanced threat detection, security monitoring, and compliance"
    }, { title: "Micro SaaS", icon: Rocket,
      startingPrice: "$149/month", description: "Custom software solutions and micro SaaS applications"
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const getYearlyDiscount = (monthlyPrice: number) => {
    const yearlyTotal = monthlyPrice * 12;
    const yearlyPrice = yearlyTotal * 0.9; // 10% discount
    return Math.round(yearlyPrice);
  };

  return (
    <>
      <SEO 
        title="Pricing - Zion Tech Group | Transparent Technology Solutions Pricing"

        description="Explore Zion Tech Group&apos;s transparent pricing for AI services, quantum computing, cybersecurity, and micro SaaS solutions. Choose the plan that fits your needs."
        keywords="pricing, AI services pricing, quantum computing cost, cybersecurity pricing, micro SaaS pricing, Zion Tech Group"

      />

      
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* Hero Section */}&quot;
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

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

              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {pricingPlans.map((plan, index) => (&quot}
                <motion.div

                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

                  )}
;
                  <div className="text-center mb-8">;
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>;
                      <Star className="w-8 h-8 text-white" />;
                    </div>;
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>;
                    <div className="mb-4">;
                      <span className="text-4xl font-bold text-white">{plan.price}</span>;
                      <span className="text-gray-400 ml-2">{plan.period}</span>;
                    </div>;
                  </div>;


                    ))}
                  </ul>}`}>
                    Get Started&apos;
                  </button>
                </motion.div>

              ))}
            </div>;
          </div>;
        </section>;

        {/* Service Categories */}

              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&quot;>
              {serviceCategories.map((service, index) => (&quot}
                <motion.div

                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

              ))}
            </div>;
          </div>;
        </section>;

        {/* CTA Section */}

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


  )}


