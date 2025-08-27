          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zion-blue-dark/80 border-b border-zion-blue-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-zion-purple text-white"
                    : "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 hover:scale-105 border-zion-blue-light/20 bg-zion-blue-dark/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-lg bg-zion-blue-dark/50 group-hover:bg-zion-purple/20 transition-colors">
                      {service.icon}
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="mb-4">
                    <p className="text-sm text-zion-slate-light mb-3">{service.details}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center text-xs text-zion-cyan">
                          <CheckCircle className="w-3 h-3 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Pricing Plans:</h4>
                      <div className="space-y-1">
                        {Object.entries(service.pricing).map(([plan, price]) => (
                          <div key={plan} className="flex justify-between text-xs">
                            <span className="text-zion-slate-light capitalize">{plan}:</span>
                            <span className="text-zion-cyan font-semibold">{String(price)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-zion-slate-light mb-3">
                      <span>Free Trial:</span>
                      <span className="text-zion-cyan font-semibold">{service.freeTrial}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'}`} />
                      ))}
                      <span className="text-sm text-zion-slate-light ml-2">({service.reviewCount})</span>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-zion-cyan">
                      {service.price === 0 ? 'Free' : `${service.currency}${service.price}`}
                    </span>
                    <span className="text-zion-slate-light">
                      {service.price === 0 ? '' : '/month'}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group-hover:shadow-lg group-hover:shadow-zion-purple/25 transition-all">
                    <a href={service.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Start Free Trial
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business with Micro SAAS?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Start with a free trial and see how our micro SAAS solutions can streamline your operations, 
            improve productivity, and drive growth. No long-term contracts, cancel anytime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
              <TrendingUp className="h-5 w-5 mr-2" />
              Start Free Trial
            </Button>
            <Button className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
              <Phone className="h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}