      \"category\": \'Fitness SaaS\';
},
    {
      \"title\": \'AI-Powered Travel Planning Assistant\',
      \"description\": \'Intelligent travel planning with personalized recommendations, real-time updates, and cost optimization\',
      \"icon\": Globe,
      \"features\": [\'AI-powered personalized travel recommendations,Real-time flight and hotel price monitoring,Itinerary optimization based on preferences and constraints,Weather and event integration for trip planning,Travel document and visa assistance,Local experience and activity recommendations,Cost tracking and budget optimization,Integration with booking platforms and travel services\'
      ],
      \"pricing\": \'$9.99 - $49.99/month\',
      \"delivery\": \'2-4 weeks\',
      \"category\": \'Travel SaaS\';
},
    {
      \"title\": \'Smart Pet Care Management\',
      \"description\": \'AI-powered pet health monitoring with veterinary integration and care recommendations\',
      \"icon\": Heart,
      \"features\": [\'AI-powered pet health monitoring and analysis,Veterinary appointment scheduling and reminders,Pet behavior analysis and training recommendations,Nutrition tracking and feeding schedule optimization,Integration with pet wearables and health devices,Emergency alert system and vet contact,Pet insurance integration and claims processing,Social features for pet owners and community\'
      ],
      \"pricing\": \'$14.99 - $79.99/month\',
      \"delivery\": \'3-5 weeks\',
      \"category\": \'Pet Care SaaS\';
}
  ];
  const benefits = [{
      \"title\": \'Faster Development\',
      \"description\": \'Rapid prototyping and deployment\',
      \"icon\": Za p,
      \"stat\": \'50%\'
    },
    {
      \"title\": \'Cost Effective\',
      \"description\": \'Lower development and maintenance costs\',
      \"icon\": TrendingU p,
      \"stat\": \'60%\'
    },
    {
      \"title\": \'Scalable Solutions\',
      \"description\": \'Built to grow with your business\',
      \"icon\": Targe t,
      \"stat\": \'Unlimited\'
    },
    {
      \"title\": \'Custom Features\',
      \"description\": \'Tailored to your specific needs\',
      \"icon\": Setting s,
      \"stat\": \'100%\'
    }
  ];
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name=\"description\" content={description}  />
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"  />
        <link rel=\"canonical\" href=\""https\": //ziontechgroup.com/micro-saas\"  />
      </Head>
      {/* Hero Section */}
      <section className=\"bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 \"sm\": p y-32\">
        <div className=\"mx-auto max-w-7xl px-6 lg: p x-8\">
          <div className=\"mx-auto max-w-3xl text-center\">
            <div className=\"flex items-center justify-center mb-6\">
              <Code className=\"h-12 w-12 text-orange-600 mr-4\"  />
              <Award className=\"h-6 w-6 text-orange-600 mr-2\"  />
              <span className=\"text-base font-semibold leading-7 text-orange-600\">Micro SaaS</span>
            </div>
            <h1 className=\"text-4xl font-bold tracking-tight text-gray-900 sm: tex t-6xl\">
              Micro SaaS Solutions
            </h1>
            <p className=\"mt-6 text-lg leading-8 text-gray-600\">
              Custom software solutions that solve specific business problems. From concept to deployment, 
              we build scalable micro SaaS applications tailored to your needs.
            </p>
            <div className=\"mt-10 flex items-center justify-center gap-x-6\">
              <Link
                href=\"/contact\"
                className=\"rounded-md bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm \"hover\": b g-orange-500 focus-visible: outline focus-visible: outlin e-2 focus-visible: outlin e-offset-2 focus-visible: outlin e-orange-600\"
              >
                Get Started
                <ArrowRight className=\"ml-2 h-4 w-4 inline\"  />
              </Link>
              <Link
                href=\"/pricing-guide\"
                className=\"text-sm font-semibold leading-6 text-gray-900 hover: tex t-orange-600\"
              >
                View Pricing <span aria-hidden=\"true\">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className=\"py-24 \"sm\": p y-32 bg-white\">
        <div className=\"mx-auto max-w-7xl px-6 lg: p x-8\">
          <div className=\"mx-auto max-w-2xl text-center mb-16\">
            <h2 className=\"text-3xl font-bold tracking-tight text-gray-900 sm: tex t-4xl\">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className=\"mt-6 text-lg leading-8 text-gray-600\">
              Proven expertise in building scalable, secure, and innovative software solutions
            </p>
          </div>
          <div className=\"grid grid-cols-1 gap-8 \"sm\": gri d-cols-2 lg: gri d-cols-4\">
            {benefits.map((benefit, index) => (
              <div key={index} className=\"text-center\">
                <div className=\"flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto mb-4\">
                  <benefit.icon className=\"h-8 w-8 text-orange-600\" />
                </div>
                <h3 className=\"text-2xl font-bold text-gray-900 mb-2\">{benefit.stat}</h3>
                <h4 className=\"text-lg font-semibold text-gray-900 mb-2\">{benefit.title}</h4>
                <p className=\"text-gray-600\">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Technologies Section */}
      <section className=\"py-24 \"sm\": p y-32 bg-gray-50\">
        <div className=\"mx-auto max-w-7xl px-6 lg: p x-8\">
          <div className=\"mx-auto max-w-2xl text-center mb-16\">
            <h2 className=\"text-3xl font-bold tracking-tight text-gray-900 sm: tex t-4xl\">
              Technologies We Use
            </h2>
            <p className=\"mt-6 text-lg leading-8 text-gray-600\">
              Modern, proven technologies for building robust and scalable applications
            </p>
          </div>
          <div className=\"grid grid-cols-1 gap-8 \"sm\": gri d-cols-2 lg: gri d-cols-3\">
            {technologies.map((tech, index) => (
              <div key={index} className=\"bg-white rounded-2xl p-6 shadow-sm \"hover\": shado w-md transition-shadow\">
                <div className=\"flex items-center mb-4\">
                  <div className=\"flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100\">
                    <tech.icon className=\"h-6 w-6 text-orange-600\" />
                  </div>
                  <h3 className=\"text-lg font-semibold text-gray-900 ml-4\">{tech.name}</h3>
                </div>
                <p className=\"text-gray-600\">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Micro SaaS Services Grid */}
      <section className=\"py-24 \"sm\": p y-32 bg-white\">
        <div className=\"mx-auto max-w-7xl px-6 lg: p x-8\">
          <div className=\"mx-auto max-w-2xl text-center mb-16\">
            <h2 className=\"text-3xl font-bold tracking-tight text-gray-900 sm: tex t-4xl\">
              Our Micro SaaS Portfolio
            </h2>
            <p className=\"mt-6 text-lg leading-8 text-gray-600\">
              Custom software solutions tailored to your business needs. All applications include design, 
              development, testing, and deployment. Contact us at{\' \'}
              <a href=\""mailto\": klebe r@ziontechgroup.com\" className=\"text-orange-600 hover: tex t-orange-500\">
                kleber@ziontechgroup.com
              </a>{\' \'}
              or call{\' \'}
              <a href=\""tel\": +13024640950\" className=\"text-orange-600 hover: tex t-orange-500\">
                +1 302 464 0950
              </a>{\' \'}
              for custom pricing.
            </p>
          </div>
          <div className=\"grid grid-cols-1 gap-8 \"lg\": gri d-cols-2\">
            {microSaaSServices.map((service, index) => (
              <div key={index} className=\"group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm \"hover\": shado w-lg transition-all duration-300\">
                <div className=\"flex items-center gap-x-3 mb-6\">
                  <div className=\"flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 group-hover: b g-orange-700 transition-colors\">
                    <service.icon className=\"h-7 w-7 text-white\" />
                  </div>
                  <div>
                    <h3 className=\"text-xl font-semibold text-gray-900\">{service.title}</h3>
                    <p className=\"text-sm text-orange-600 font-medium\">{service.category}</p>
                  </div>
                </div>
                <p className=\"text-gray-600 mb-6\">{service.description}</p>
                <ul className=\"space-y-3 mb-6\">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=\"flex items-center gap-x-3\">
                      <CheckCircle className=\"h-4 w-4 text-orange-600 flex-shrink-0\"  />
                      <span className=\"text-sm text-gray-700\">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className=\"flex items-center justify-between\">
                  <div className=\"flex items-center space-x-4 text-sm text-gray-500\">
                    <div className=\"flex items-center space-x-1\">
                      <Clock className=\"h-4 w-4\"  />
                      <span>{service.delivery}</span>
                    </div>
                    <div className=\"font-semibold text-orange-600\">{service.pricing}</div>
                  </div>
                  <Link
                    href=\"/contact\"
                    className=\"inline-flex items-center text-sm font-semibold text-orange-600 \"hover\": tex t-orange-500 transition-colors group\"
                  >
                    Get Started
                    <ArrowRight className=\"ml-2 h-4 w-4 group-hover: translat e-x-1 transition-transform\"  />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Development Process Section */}
      <section className=\"py-24 \"sm\": p y-32 bg-gray-50\">
        <div className=\"mx-auto max-w-7xl px-6 lg: p x-8\">
          <div className=\"mx-auto max-w-2xl text-center mb-16\">
            <h2 className=\"text-3xl font-bold tracking-tight text-gray-900 sm: tex t-4xl\">
              Our Development Process
            </h2>
            <p className=\"mt-6 text-lg leading-8 text-gray-600\">
              A proven methodology for delivering high-quality software solutions
            </p>
          </div>
          <div className=\"grid grid-cols-1 gap-8 sm: gri d-cols-2 lg: gri d-cols-4\">
            <div className=\"text-center\">
              <div className=\"flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto mb-4\">
                <span className=\"text-2xl font-bold text-orange-600\">1</span>
              </div>
              <h3 className=\"text-lg font-semibold text-gray-900 mb-2\">Discovery</h3>
              <p className=\"text-gray-600\">Requirements gathering and project planning</p>
            </div>
            <div className=\"text-center\">
              <div className=\"flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto mb-4\">
                <span className=\"text-2xl font-bold text-orange-600\">2</span>
              </div>
              <h3 className=\"text-lg font-semibold text-gray-900 mb-2\">Design</h3>
              <p className=\"text-gray-600\">UI/UX design and system architecture</p>
            </div>
            <div className=\"text-center\">
              <div className=\"flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto mb-4\">
                <span className=\"text-2xl font-bold text-orange-600\">3</span>
              </div>
              <h3 className=\"text-lg font-semibold text-gray-900 mb-2\">Development</h3>
              <p className=\"text-gray-600\">Agile development with regular updates</p>
            </div>
            <div className=\"text-center\">
              <div className=\"flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto mb-4\">
                <span className=\"text-2xl font-bold text-orange-600\">4</span>
              </div>
              <h3 className=\"text-lg font-semibold text-gray-900 mb-2\">Deployment</h3>
              <p className=\"text-gray-600\">Testing, deployment, and ongoing support</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className=\"bg-orange-600 py-16 \"sm\": p y-24\">
        <div className=\"mx-auto max-w-7xl px-6 lg: p x-8\">
          <div className=\"mx-auto max-w-2xl text-center\">
            <h2 className=\"text-3xl font-bold tracking-tight text-white sm: tex t-4xl\">
              Ready to Build Your Custom SaaS Solution?
            </h2>
            <p className=\"mt-6 text-lg leading-8 text-orange-100\">
              Let\'s discuss your requirements and create a custom solution that drives your business forward. 
              Get a free consultation and project estimate.
            </p>
            <div className=\"mt-10 flex items-center justify-center gap-x-6\">
              <Link
                href=\"/contact\"
                className=\"rounded-md bg-white px-6 py-3 text-sm font-semibold text-orange-600 shadow-sm hover: b g-gray-50 focus-visible: outline focus-visible: outlin e-2 focus-visible: outlin e-offset-2 focus-visible: outlin e-white\"
              >
                Start Your Project
              </Link>
              <a
                href=\"tel:+13024640950\"
                className=\"text-sm font-semibold leading-6 text-white hover: tex t-orange-100\"
              >
                Call +1 302 464 0950 <span aria-hidden=\"true\">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
