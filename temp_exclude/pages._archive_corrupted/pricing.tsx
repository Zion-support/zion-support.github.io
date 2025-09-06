
      ],
      \"popular\": false
    },
    {
      ],
      \"popular\": true
    },
    {
      \"name\": \'Enterprise\',
      \"description\": \'For large organizations and enterprises\',
      \"price\": \'$10,000\',
      \"period\": \'per month\',
      \"features\": [\'Full-stack development\',
        \'Unlimited pages\',
        \'Custom integrations\',
        \'Advanced security features\',
        \'24/7 dedicated support\',
        \'12 months maintenance included\',
        \'Performance optimization\',
        \'Scalable architecture\',
        \'API development\',
        \'Third-party integrations\'
      ],
      \"popular\": false
    }
  ];
  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name=\"description\" content=\"Transparent pricing for our technology services. Choose the plan that fits your business needs.\" />
      </Head>
              Simple, Transparent Pricing
            </h1>
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
              Choose the plan that fits your business needs.
            </p>
          </div>
            {pricingPlans.map((plan, index) => (

              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular ? \'ring-2 ring-blue-500 transform scale-105\' : \''
                }`}
              >
                {plan.popular && (
                  <div className=\"absolute -top-4 left-1/2 transform -translate-x-1/2\">
                    <span className=\"bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium\">
                      Most Popular
                    </span>
                  </div>
                )}

                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=\"flex items-center\">
                      <CheckCircle className=\"w-5 h-5 text-green-500 mr-3 flex-shrink-0\" />
                      <span className=\"text-gray-600\">{feature}</span>
                    </li>

                  ))}
                </ul>
                <Link
                  href=\"/contact\"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? \'bg-blue-600 text-white \"hover\": bg-blue-700\'
                      : \'bg-gray-900 text-white hover:bg-gray-800\'
                  }`}
                >
                  Get Started
                  <ArrowRight className=\"w-4 h-4 ml-2 inline\" />
                </Link>
              </div>
            ))}

          </div>
              Ready to Get Started?
            </h2>
            <p className=\"text-xl text-gray-600 mb-8\">
              Contact us today for a free consultation and custom quote.
            </p>
            <div className=\"flex flex-col \"sm\": flex-row gap-4 justify-center\">

              <Link
                href=\"/contact\"
                className=\"bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors\"
              >
                Get Free Consultation
              </Link>
              <Link
                href=\"/services\"
                className=\"border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors\"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );

import React from 'react';  import Head from 'next/head'; import Link from 'next/link'; import { CheckCircle,ArrowRight,Users,Zap,Shield } from 'lucide-react'; const PricingPage: React.FC = () => { const pricingPlans = [ { name: 'Starter',description: 'Perfect for small businesses and startups',price: '$2,500',period: 'per month',features: [ 'Basic website development','Up to 5 pages','Mobile responsive design','Basic SEO optimization','Email support','3 months maintenance included'  import { Helmet } from 'react-helmet-async'; import { Link } from 'react-router-dom'; import { Check,Star,Zap,Shield,Users,Clock,ArrowRight } from 'lucide-react'; export default function PricingPage() { const plans = [ { name: "Starter",description: "Perfect for small businesses and startups",price: "$2,999",period: "/month",icon: Zap,color: "from-green-500 to-emerald-500",features: [ "Up to 5 users","Basic AI automation","Standard security features","Email support","Basic analytics","Monthly reports"

