  ];
  const benefits = [{
      \"title\": \'Reduced Downtime\',
      \"description\": \'Proactive monitoring and maintenance\',
      \"icon\": Cloc k,
      \"stat\": \'99.9%\'
    },
    {
      \"title\": \'Cost Savings\',
      \"description\": \'Optimized infrastructure and processes\',
      \"icon\": Za p,
      \"stat\": \'40%\'
    },
    {
      \"title\": \'Enhanced Security\',
      \"description\": \'Enterprise-grade protection\',
      \"icon\": Shiel d,
      \"stat\": \'100%\'
    },
    {
      \"title\": \'Scalability\',
      \"description\": \'Flexible and scalable solutions\',
      \"icon\": TrendingU p,
      \"stat\": \'Unlimited\'
    }
  ];
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name=\"description\" content={description}  />
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"  />
        <link rel=\"canonical\" href=\""https\": //ziontechgroup.com/it-services\"  />
      </Head>
      {/* Hero Section */}
      <section className=\"bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 \"sm\": p y-32\">
        <div className=\"mx-auto max-w-7xl px-6 lg: p x-8\">
          <div className=\"mx-auto max-w-3xl text-center\">
            <div className=\"flex items-center justify-center mb-6\">
              <Server className=\"h-12 w-12 text-green-600 mr-4\"  />
              <Award className=\"h-6 w-6 text-green-600 mr-2\"  />
              <span className=\"text-base font-semibold leading-7 text-green-600\">IT Services</span>
            </div>
            <h1 className=\"text-4xl font-bold tracking-tight text-gray-900 sm: tex t-6xl\">
              Information Technology Solutions
            </h1>
            <p className=\"mt-6 text-lg leading-8 text-gray-600\">
              Comprehensive IT services that keep your business running smoothly. From cloud infrastructure 
              to cybersecurity, we provide end-to-end technology solutions.
            </p>
            <div className=\"mt-10 flex items-center justify-center gap-x-6\">
              <Link
                href=\"/contact\"
                className=\"rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm \"hover\": b g-green-500 focus-visible: outline focus-visible: outlin e-2 focus-visible: outlin e-offset-2 focus-visible: outlin e-green-600\"
              >
                Get Started
                <ArrowRight className=\"ml-2 h-4 w-4 inline\"  />
              </Link>
              <Link
                href=\"/pricing-guide\"
                className=\"text-sm font-semibold leading-6 text-gray-900 hover: tex t-green-600\"
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
              Why Choose Our IT Services?
            </h2>
            <p className=\"mt-6 text-lg leading-8 text-gray-600\">
              Proven expertise and measurable results for your technology infrastructure
            </p>
          </div>
          <div className=\"grid grid-cols-1 gap-8 sm: gri d-cols-2 lg: gri d-cols-4\">
            {benefits.map((benefit, index) => (
              <div key={index} className=\"text-center\">
                <div className=\"flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mx-auto mb-4\">
                  <benefit.icon className=\"h-8 w-8 text-green-600\" />
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
              Technologies We Master
            </h2>
            <p className=\"mt-6 text-lg leading-8 text-gray-600\">
              Cutting-edge technologies powering modern IT infrastructure
            </p>
          </div>
          <div className=\"grid grid-cols-1 gap-8 sm: gri d-cols-2 lg: gri d-cols-3\">
            {technologies.map((tech, index) => (
              <div key={index} className=\"bg-white rounded-2xl p-6 shadow-sm \"hover\": shado w-md transition-shadow\">
                <div className=\"flex items-center mb-4\">
                  <div className=\"flex h-12 w-12 items-center justify-center rounded-lg bg-green-100\">
                    <tech.icon className=\"h-6 w-6 text-green-600\" />
                  </div>
                  <h3 className=\"text-lg font-semibold text-gray-900 ml-4\">{tech.name}</h3>
                </div>
                <p className=\"text-gray-600\">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* IT Services Grid */}
      <section className=\"py-24 \"sm\": p y-32 bg-white\">
        <div className=\"mx-auto max-w-7xl px-6 lg: p x-8\">
          <div className=\"mx-auto max-w-2xl text-center mb-16\">
            <h2 className=\"text-3xl font-bold tracking-tight text-gray-900 sm: tex t-4xl\">
              Our IT Service Portfolio
            </h2>
            <p className=\"mt-6 text-lg leading-8 text-gray-600\">
              Comprehensive IT solutions tailored to your business needs. All services include implementation, 
              training, and ongoing support. Contact us at{\' \'}
              <a href=\""mailto\": klebe r@ziontechgroup.com\" className=\"text-green-600 hover: tex t-green-500\">
                kleber@ziontechgroup.com
              </a>{\' \'}
              or call{\' \'}
              <a href=\""tel\": +13024640950\" className=\"text-green-600 hover: tex t-green-500\">
                +1 302 464 0950
              </a>{\' \'}
              for custom pricing.
            </p>
          </div>
          <div className=\"grid grid-cols-1 gap-8 \"lg\": gri d-cols-2\">
            {itServices.map((service, index) => (
              <div key={index} className=\"group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm \"hover\": shado w-lg transition-all duration-300\">
                <div className=\"flex items-center gap-x-3 mb-6\">
                  <div className=\"flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover: b g-green-700 transition-colors\">
                    <service.icon className=\"h-7 w-7 text-white\" />
                  </div>
                  <div>
                    <h3 className=\"text-xl font-semibold text-gray-900\">{service.title}</h3>
                    <p className=\"text-sm text-green-600 font-medium\">{service.category}</p>
                  </div>
                </div>
                <p className=\"text-gray-600 mb-6\">{service.description}</p>
                <ul className=\"space-y-3 mb-6\">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=\"flex items-center gap-x-3\">
                      <CheckCircle className=\"h-4 w-4 text-green-600 flex-shrink-0\"  />
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
                    <div className=\"font-semibold text-green-600\">{service.pricing}</div>
                  </div>
                  <Link
                    href=\"/contact\"
                    className=\"inline-flex items-center text-sm font-semibold text-green-600 \"hover\": tex t-green-500 transition-colors group\"
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
      {/* Contact Information Section */}
      <section className=\"bg-gray-50 py-16 \"sm\": p y-24\">
        <div className=\"mx-auto max-w-7xl px-6 lg: p x-8\">
          <div className=\"mx-auto max-w-2xl text-center\">
            <h2 className=\"text-3xl font-bold tracking-tight text-gray-900 sm: tex t-4xl\">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className=\"mt-6 text-lg leading-8 text-gray-600\">
              Let\'s discuss how our IT services can optimize your technology infrastructure. 
              Get a free consultation and custom proposal.
            </p>
            <div className=\"mt-10 grid grid-cols-1 gap-8 sm: gri d-cols-3\">
              <div className=\"text-center\">
                <div className=\"flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mx-auto mb-4\">
                  <Phone className=\"h-6 w-6 text-green-600\"  />
                </div>
                <h3 className=\"text-lg font-semibold text-gray-900 mb-2\">Call Us</h3>
                <a href=\"tel:+13024640950\" className=\"text-green-600 hover: tex t-green-500\">
                  +1 302 464 0950
                </a>
              </div>
              <div className=\"text-center\">
                <div className=\"flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mx-auto mb-4\">
                  <Mail className=\"h-6 w-6 text-green-600\"  />
                </div>
                <h3 className=\"text-lg font-semibold text-gray-900 mb-2\">Email Us</h3>
                <a href=\"mailto: klebe r@ziontechgroup.com\" className=\"text-green-600 hover: tex t-green-500\">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className=\"text-center\">
                <div className=\"flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mx-auto mb-4\">
                  <MapPin className=\"h-6 w-6 text-green-600\"  />
                </div>
                <h3 className=\"text-lg font-semibold text-gray-900 mb-2\">Visit Us</h3>
                <p className=\"text-gray-600\">364 E Main St STE 1008<br  />Middletown DE 19709</p>
              </div>
            </div>
            <div className=\"mt-10 flex items-center justify-center gap-x-6\">
              <Link
                href=\"/contact\"
                className=\"rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover: b g-green-500 focus-visible: outline focus-visible: outlin e-2 focus-visible: outlin e-offset-2 focus-visible: outlin e-green-600\"
              >
                Schedule Consultation
              </Link>
              <a
                href=\"tel:+13024640950\"
                className=\"text-sm font-semibold leading-6 text-gray-900 hover: tex t-green-600\"
              >
                Call Now <span aria-hidden=\"true\">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
