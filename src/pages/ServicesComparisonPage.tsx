import { SEO } from '../components/SEO';

export default function ServicesComparisonPage() {
    const [selectedCategory, setSelectedCategory] = useState("AI & Automation");
    return (<div className="min-h-screen bg-background">
      <SEO title="Services Comparison & Pricing - Zion Tech Group" description="Compare our AI and IT services, features, and pricing plans. Choose the perfect solution for your business needs and budget." keywords="service comparison, pricing plans, AI services, IT consulting, cybersecurity, cloud services" canonical="https://ziontechgroup.com/services-comparison"/>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Services Comparison & Pricing
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the perfect service tier for your business needs. Compare features, pricing, and benefits across all our service categories.
          </p>
          
          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-zion-cyan">
              <Phone className="w-5 h-5"/>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <Mail className="w-5 h-5"/>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <MapPin className="w-5 h-5"/>
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name.toLowerCase().replace(/\s+/g, '-'))}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategoryData.name === category.name
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-400/25'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-2">
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Category Display */}
        <motion.div
          key={selectedCategoryData.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedCategoryData.color} flex items-center justify-center mx-auto mb-6`}>
              <selectedCategoryData.icon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{selectedCategoryData.name}</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">{selectedCategoryData.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_TIERS.map((tier, index) => (<Card key={tier.name} className={`bg-zion-blue-dark border-zion-blue-light text-white ${index === 1 ? 'border-zion-cyan scale-105' : ''}`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-zion-cyan">{tier.price}</div>
                  <CardDescription className="text-zion-slate-light">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-zion-cyan"/>
                        <span>{feature}</span>
                      </li>))}
                  </ul>
                  <Button className="w-full mt-6 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-semibold">
                    Get Started
                  </Button>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Service Comparisons */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Detailed Service Comparisons</h2>
            <p className="text-zion-slate text-lg">
              Compare features, capabilities, and pricing across all our services
            </p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-zion-blue-light">
              {SERVICE_COMPARISONS.map((category) => (<TabsTrigger key={category.category} value={category.category} className="data-[state=active]:bg-zion-cyan data-[state=active]:text-zion-blue">
                  {category.category}
                </TabsTrigger>))}
            </TabsList>

            {SERVICE_COMPARISONS.map((category) => (<TabsContent key={category.category} value={category.category} className="mt-8">
                <div className="space-y-8">
                  {category.services.map((service, serviceIndex) => (<Card key={serviceIndex} className="border-zion-blue-light">
                      <CardHeader>
                        <CardTitle className="text-2xl text-zion-blue">{service.name}</CardTitle>
                        <CardDescription>
                          Compare features and pricing across different service tiers
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          {/* Starter Plan */}
                          <div className="text-center p-6 border border-zion-blue-light rounded-lg">
                            <h3 className="text-xl font-semibold text-zion-blue mb-2">Starter</h3>
                            <div className="text-3xl font-bold text-zion-cyan mb-4">{service.starter.price}</div>
                            <ul className="space-y-3 text-left">
                              {service.starter.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500"/>
                                  <span className="text-sm text-zion-slate">{feature}</span>
                                </li>))}
                            </ul>
                            <Button className="w-full mt-4 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue">
                              Choose Starter
                            </Button>
                          </div>

                          {/* Professional Plan */}
                          <div className="text-center p-6 border-2 border-zion-cyan rounded-lg bg-zion-blue-light/5">
                            <Badge className="mb-2 bg-zion-cyan text-zion-blue">Most Popular</Badge>
                            <h3 className="text-xl font-semibold text-zion-blue mb-2">Professional</h3>
                            <div className="text-3xl font-bold text-zion-cyan mb-4">{service.professional.price}</div>
                            <ul className="space-y-3 text-left">
                              {service.professional.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500"/>
                                  <span className="text-sm text-zion-slate">{feature}</span>
                                </li>))}
                            </ul>
                            <Button className="w-full mt-4 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue">
                              Choose Professional
                            </Button>
                          </div>

                          {/* Enterprise Plan */}
                          <div className="text-center p-6 border border-zion-blue-light rounded-lg">
                            <h3 className="text-xl font-semibold text-zion-blue mb-2">Enterprise</h3>
                            <div className="text-3xl font-bold text-zion-cyan mb-4">{service.enterprise.price}</div>
                            <ul className="space-y-3 text-left">
                              {service.enterprise.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500"/>
                                  <span className="text-sm text-zion-slate">{feature}</span>
                                </li>))}
                            </ul>
                            <Button className="w-full mt-4 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue">
                              Contact Sales
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>))}
                </div>
              </TabsContent>))}
          </Tabs>
        </div>
      </section>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-slate-300 mb-6">
              Our team can create tailored solutions that perfectly fit your business requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-zion-blue"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Expertise</h3>
              <p className="text-zion-slate-light">Cutting-edge AI solutions with proven results</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-zion-blue"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">Bank-level security and compliance standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-zion-blue"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">Certified professionals with industry experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-zion-blue"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-zion-slate-light">Track record of successful implementations</p>
            </div>
          </div>
        </div>
      </div>
    </
  );
}>