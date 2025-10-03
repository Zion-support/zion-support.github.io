import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Check, Star } from 'lucide-react';
const PricingPage: React.FC = () => {
  const pricingTiers = [
    {
      name: "Starter",
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
      name: ", Professional",
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
      name: ", Enterprise",
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
        { name: "AI Content Generation", price: "$2,500/month", description: "Automated content creation with 75% time reduction" },"
        { name: "Predictive Analytics", price: "$3,200/month", description: "Business intelligence with 25% improvement in decisions" },"
        { name: "Fraud Detection", price: "$2,800/month", description: "Real-time protection with 95% accuracy" },"
        { name: "Conversational AI", price: "$1,500/month", description: "Customer support automation with 80% ticket reduction" }"
      ]
    },
    {
      category: "Micro SaaS Solutions",
      services: [,
        { name: "AI Lead Scoring API", price: "$299/month", description: "Intelligent lead scoring with 40% conversion increase" },"
        { name: "Smart Appointment Scheduler", price: "$199/month", description: "AI-driven scheduling with 80% conflict reduction" },"
        { name: "Contract Review Assistant", price: "$599/month", description: "Legal document analysis with 75% faster review" },"
        { name: "Fraud Detection API", price: "$449/month", description: "Real-time fraud protection with 98% accuracy" }"
      ]
    },
    {
      category: "IT Services",
      services: [,
        { name: "Cloud Migration", price: "$5,000/month", description: "Complete cloud transformation with 40% cost reduction" },"
        { name: "DevOps Automation", price: "$3,500/month", description: "CI/CD pipelines with 80% faster deployments" },"
        { name: "Cybersecurity", price: "$4,200/month", description: "24/7 threat monitoring with SOC 2 compliance" },"
        { name: "Data Analytics", price: "$2,800/month", description: "Business intelligence with real-time insights" }"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI services, micro SaaS solutions, and comprehensive IT services from Zion Tech Group." /></Helmet>
      
      <div className="min-h-screen bg-gray-50"
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 text-white py-16"
          <div className="container mx-auto px-6 text-center"
            <h1 className="text-4xl md: text-5xl font-bold mb-4">Transparent Pricing</h1>"
            <p className="text-xl text-blue-100 max-w-3xl mx-auto"
              Choose the perfect plan for your business needs. All plans include our commitment to quality, security, and innovation.
            </p>
          </div>
        </section>

        {/* Main Pricing Tiers */}
        <section className="py-20"
          <div className="container mx-auto px-6"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"
              {pricingTiers.map((tier, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white p-8 rounded-xl shadow-lg hover: shadow-xl transition-all duration-300 border-2 ${,`;
                    tier.popular 
                      ? 'border-purple-500 transform scale-105' 
                      : 'border-gray-200 hover: border-gray-300}`}`;
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      <span className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center"
                        <Star className="w-4 h-4 mr-1/>"
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8"
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>"
                    <p className="text-gray-600 mb-4">{tier.description}</p>"
                    <div className="flex items-baseline justify-center"
                      <span className="text-4xl font-bold text-gray-900">{tier.price}</span>"
                      <span className="text-gray-600 ml-1">{tier.period}</span>"
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8"
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center"
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0/>"
                        <span className="text-gray-700">{feature}</span>"
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${`;
                      tier.popular
                        ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white hover: from-purple-700 hover:to-violet-700 shadow-lg',
                        : 'bg-gray-900 text-white hover:bg-gray-800}`}`;
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service-Specific Pricing */}
        <section className="py-20 bg-white"
          <div className="container mx-auto px-6"
            <div className="text-center mb-16"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service-Specific Pricing</h2>"
              <p className="text-xl text-gray-600 max-w-2xl mx-auto"
                Detailed pricing for individual services. Custom packages available for enterprise clients.
              </p>
            </div>

            <div className="space-y-16"
              {servicePricing.map((category, categoryIndex) => (
                <div key="{categoryIndex}">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{category.category}</h3>"
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-gray-50 p-6 rounded-xl hover: shadow-md transition-shadow"
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h4>"
                        <p className="text-2xl font-bold text-blue-600 mb-3">{service.price}</p>"
                        <p className="text-gray-600 text-sm">{service.description}</p>"
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Pricing */}
        <section className="py-20 bg-gray-50"
          <div className="container mx-auto px-6"
            <div className="text-center mb-16"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Solutions</h2>"
              <p className="text-xl text-gray-600 max-w-2xl mx-auto"
                Custom solutions for large organizations with specific requirements and compliance needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto"
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8"
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h3>;
                  <ul className="space-y-3"
                    <li className="flex items-center"
                      <Check className="w-5 h-5 text-green-500 mr-3/>"
                      <span className="text-gray-700">Custom AI model development</span>"
                    </li>
                    <li className="flex items-center"
                      <Check className="w-5 h-5 text-green-500 mr-3/>"
                      <span className="text-gray-700">Dedicated infrastructure</span>"
                    </li>
                    <li className="flex items-center"
                      <Check className="w-5 h-5 text-green-500 mr-3/>"
                      <span className="text-gray-700">24/7 dedicated support</span>"
                    </li>
                    <li className="flex items-center"
                      <Check className="w-5 h-5 text-green-500 mr-3/>"
                      <span className="text-gray-700">Compliance management</span>"
                    </li>
                    <li className="flex items-center"
                      <Check className="w-5 h-5 text-green-500 mr-3/>"
                      <span className="text-gray-700">White-label solutions</span>"
                    </li>
                    <li className="flex items-center"
                      <Check className="w-5 h-5 text-green-500 mr-3/>"
                      <span className="text-gray-700">SLA guarantees</span>"
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Sales</h3>"
                  <p className="text-gray-600 mb-6"
                    Get a custom quote tailored to your organization's specific needs and requirements.;
                  </p>
                  <div className="space-y-4"
                    <div className="flex items-center"
                      <span className="text-sm text-gray-500 w-20">Email: </span>"
                      <span className="text-gray-900">kleber@ziontechgroup.com</span>"
                    </div>
                    <div className="flex items-center"
                      <span className="text-sm text-gray-500 w-20">Phone: </span>"
                      <span className="text-gray-900">+1 302 464 0950</span>"
                    </div>
                    <div className="flex items-center"
                      <span className="text-sm text-gray-500 w-20">Address: </span>"
                      <span className="text-gray-900">364 E Main St STE 1008<br />Middletown DE 19709</span>"
                    </div>
                  </div>
                  <Link 
                    to="/contact"
                    className="mt-6 block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300
                  >
                    Contact Sales Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}"
        <section className="py-20 bg-white"
          <div className="container mx-auto px-6"
            <div className="text-center mb-16"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>"
            </div>

            <div className="max-w-3xl mx-auto space-y-8"
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Can I change my plan anytime?</h3>"
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>"
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Do you offer custom pricing?</h3>"
                <p className="text-gray-600">Absolutely! We offer custom pricing for enterprise clients with specific requirements and large-scale implementations.</p>"
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">What's included in support?</h3>;
                <p className="text-gray-600">All plans include email support. Professional and Enterprise plans include priority support, and Enterprise includes 24/7 dedicated support.</p>"
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Is there a free trial?</h3>"
                <p className="text-gray-600">Yes, we offer a 14-day free trial for most services. Contact us to learn more about trial availability for your specific needs.</p>"
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
          <div className="container mx-auto px-6 text-center"
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>"
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto"
              Choose the perfect plan for your business or contact us for a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg
              >
                Contact Sales
              </Link>
              <Link "
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
"
export default PricingPage;