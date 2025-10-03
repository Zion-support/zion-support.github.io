// import React from 'react';

const PricingPage: React.FC = () => {
  const pricingTiers = [
    {
      name="Starter",
      description: "Perfect for small businesses and startups",
      price: "$299",
      period: "/month",
      features: [,
        "Basic AI Services",
        "Standard IT Support",
        "Email Support",
        "Basic Analytics",
        "Up to 5 users",
        "10GB Storage"],
,
      popular: false,,
      color: "blue
    },
    {
      name=", Professional",
      description: "Ideal for growing businesses",
      price: "$799",
      period: "/month",
      features: [,
        "Advanced AI Solutions",
        "Comprehensive IT Services",
        "Priority Support",
        "Advanced Analytics",
        "Up to 25 users",
        "100GB Storage",
        "API Access",
        "Custom Integrations"],
,
      popular: true,,
      color: "purple
    },
    {
      name=", Enterprise",
      description: "For large organizations",
      price: "$2,499",
      period: "/month",
      features: [,
        "Full AI Suite",
        "Complete IT Infrastructure",
        "24/7 Dedicated Support",
        "Custom Analytics",
        "Unlimited users",
        "1TB Storage",
        "White-label Solutions",
        "Dedicated Account Manager",
        "SLA Guarantees"],
,
      popular: false,,
      color: "green
    }
  ];

  const servicePricing = [
    {
      category: ", AI Services",
      services: [,
        { name="AI Content Generation", price: "$2,500/month", description: "Automated content creation with 75% time reduction" },
        { name="Predictive Analytics", price: "$3,200/month", description: "Business intelligence with 25% improvement in decisions" },
        { name="Fraud Detection", price: "$2,800/month", description: "Real-time protection with 95% accuracy" },
        { name="Conversational AI", price: "$1,500/month", description: "Customer support automation with 80% ticket reduction" }
      ]
    },
    {
      category: "Micro SaaS Solutions",
      services: [,
        { name="AI Lead Scoring API", price: "$299/month", description: "Intelligent lead scoring with 40% conversion increase" },
        { name="Smart Appointment Scheduler", price: "$199/month", description: "AI-driven scheduling with 80% conflict reduction" },
        { name="Contract Review Assistant", price: "$599/month", description: "Legal document analysis with 75% faster review" },
        { name="Fraud Detection API", price: "$449/month", description: "Real-time fraud protection with 98% accuracy" }
      ]
    },
    {
      category: "IT Services",
      services: [,
        { name="Cloud Migration", price: "$5,000/month", description: "Complete cloud transformation with 40% cost reduction" },
        { name="DevOps Automation", price: "$3,500/month", description: "CI/CD pipelines with 80% faster deployments" },
        { name="Cybersecurity", price: "$4,200/month", description: "24/7 threat monitoring with SOC 2 compliance" },
        { name="Data Analytics", price: "$2,800/month", description: "Business intelligence with real-time insights" }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI services, micro SaaS solutions, and comprehensive IT services from Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        {/* Header */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Transparent Pricing</h3>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              Choose the perfect plan for your business needs. All plans include our commitment to quality, security, and innovation.
            </p>
          </div>
        </section>

        {/* Main Pricing Tiers */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white p-8 rounded-xl shadow-lg hover: shadow-xl transition-all duration-300 border-2 ${,`;
                    tier.popular 
                      ? 'border-purple-500 transform scale-105' 
                      : 'border-gray-200 hover: border-gray-300',
                  }`}`;
                >
                  {tier.popular && (
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{tier.name}</h3>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{tier.description}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{tier.price}</h3>
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{tier.period}</h3>
                    </div>
                  </div>

                  <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature}</h3>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${`;
                      tier.popular
                        ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white hover: from-purple-700 hover:to-violet-700 shadow-lg',
                        : 'bg-gray-900 text-white hover:bg-gray-800',
                    }`}`;
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service-Specific Pricing */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Service-Specific Pricing</h3>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Detailed pricing for individual services. Custom packages available for enterprise clients.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {servicePricing.map((category, categoryIndex) => (
                <div key="{categoryIndex}">
                  <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{category.category}</h3>
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.name}</h3>
                        <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.price}</h3>
                        <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.description}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Pricing */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Enterprise Solutions</h3>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Custom solutions for large organizations with specific requirements and compliance needs.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div>
                  <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">What's Included</h3>';
                  <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Custom AI model development</h3>
                    </li>
                    <li className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Dedicated infrastructure</h3>
                    </li>
                    <li className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">24/7 dedicated support</h3>
                    </li>
                    <li className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Compliance management</h3>
                    </li>
                    <li className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">White-label solutions</h3>
                    </li>
                    <li className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">SLA guarantees</h3>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Contact Sales</h3>
                  <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    Get a custom quote tailored to your organization's specific needs and requirements.';
                  </p>
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Email: </h3>
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">kleber@ziontechgroup.com</h3>
                    </div>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Phone: </h3>
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">+1 302 464 0950</h3>
                    </div>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Address: </h3>
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">364 E Main St STE 1008<br />Middletown DE 19709</h3>
                    </div>
                  </div>
                  <Link 
                    to="/contact
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Frequently Asked Questions</h3>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Can I change my plan anytime?</h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</h3>
              </div>
              <div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Do you offer custom pricing?</h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Absolutely! We offer custom pricing for enterprise clients with specific requirements and large-scale implementations.</h3>
              </div>
              <div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">What's included in support?</h3>';
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">All plans include email support. Professional and Enterprise plans include priority support, and Enterprise includes 24/7 dedicated support.</h3>
              </div>
              <div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Is there a free trial?</h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Yes, we offer a 14-day free trial for most services. Contact us to learn more about trial availability for your specific needs.</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Ready to Get Started?</h3>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              Choose the perfect plan for your business or contact us for a custom solution.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <Link 
                to="/contact" 
                className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Component;