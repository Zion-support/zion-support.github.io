









        {/* Pricing */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-white">{service.currency}{service.price}</span>
            <span className="text-zion-slate-light text-sm ml-1">/{service.pricingModel === 'monthly' ? 'mo' : service.pricingModel === 'yearly' ? 'year' : 'incident'}</span>
          </div>
          <div className="text-right">
            <p className="text-xs text-zion-slate-light">Market Price:</p>
            <p className="text-sm text-zion-cyan font-medium">{service.marketPrice}</p>
          </div>
        </div>

        {/* Features Preview */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-white">Key Features:</p>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 3).map((feature, index) => (<Badge key={index} variant="outline" className="text-xs border-zion-blue-light/30 text-zion-slate-light">
                {feature}
              </Badge>))}
            {service.features.length > 3 && (<Badge variant="outline" className="text-xs border-zion-purple/30 text-zion-purple">
                +{service.features.length - 3} more
              </Badge>)}
          </div>
        </div>

        {/* Benefits */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-white">Benefits:</p>
          <div className="space-y-1">
            {service.benefits.slice(0, 2).map((benefit, index) => (<div key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0"/>
                <span className="text-xs text-zion-slate-light">{benefit}</span>
              </div>))}
          </div>
        </div>

        {/* Target Audience */}
        <div>
          <p className="text-sm font-medium text-white mb-2">Perfect for:</p>
          <div className="flex flex-wrap gap-2">
            {service.targetAudience.slice(0, 3).map((audience, index) => (<Badge key={index} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan">
                {audience}
              </Badge>))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          <Button asChild className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
            <Link to={service.website} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2"/>
              Learn More
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
            <a href={`mailto:${service.contactEmail}?subject=Inquiry about ${service.title}`}>
              <Mail className="w-4 h-4 mr-2"/>
              Contact
            </a>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
      <SEOHead title="Micro SAAS Services - Zion Tech Group" description="Discover innovative micro SAAS services and solutions in AI, IT, and business automation. Transform your business with cutting-edge technology." keywords="micro SAAS, AI services, IT solutions, business automation, Zion Tech Group" canonical="https://ziontechgroup.com/micro-saas-services"/>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-slate-dark py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"/>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with our innovative micro SAAS solutions. From AI-powered automation to enterprise IT services, 
              we provide cutting-edge technology that drives growth and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white hover:from-zion-purple-light hover:to-zion-cyan-light">
                <Phone className="w-5 h-5 mr-2"/>
                +1 302 464 0950
              </Button>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                <Mail className="w-5 h-5 mr-2"/>
                kleber@ziontechgroup.com
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zion-blue-dark/50 border-b border-zion-blue-light/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zion-slate-light">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-zion-cyan"/>
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-zion-cyan"/>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-zion-cyan"/>
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="sticky top-16 z-40 bg-zion-slate-dark/80 backdrop-blur-md border-b border-zion-blue-light/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4"/>
                <Input placeholder="Search services..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 bg-zion-blue-dark/50 border-zion-blue-light/30 text-white placeholder:text-zion-slate-light focus:border-zion-purple"/>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (<Button key={category.id} variant={selectedCategory === category.id ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory(category.id)} className={selectedCategory === category.id
                ? "bg-zion-purple text-white"
                : "border-zion-blue-light/30 text-zion-slate-light hover:border-zion-purple hover:text-zion-purple"}>
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                  <Badge variant="secondary" className="ml-2 bg-zion-blue-light/20 text-zion-slate-light">
                    {category.count}
                  </Badge>
                </Button>))}
            </div>

            {/* Pricing Filter */}
            <div className="flex gap-2">
              {pricingModels.map((model) => (<Button key={model.id} variant={selectedPricing === model.id ? "default" : "outline"} size="sm" onClick={() => setSelectedPricing(model.id)} className={selectedPricing === model.id
                ? "bg-zion-cyan text-white"
                : "border-zion-blue-light/30 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan"}>
                  {model.name}
                </Button>))}
            </div>

            {/* Sort */}
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-zion-blue-dark/50 border border-zion-blue-light/30 text-white rounded-md px-3 py-2 text-sm focus:border-zion-purple focus:outline-none">
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
              <option value="aiScore">Sort by AI Score</option>
              <option value="newest">Sort by Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        {filteredServices.length === 0 ? (<div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-zion-slate-light mb-6">Try adjusting your search criteria or filters</p>
            <Button onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedPricing('all');
            }} className="bg-zion-purple text-white hover:bg-zion-purple-light">
              Clear Filters
            </Button>
          </div>) : (<>
            <div className="mb-8">
              <p className="text-zion-slate-light">
                Showing <span className="text-zion-cyan font-medium">{filteredServices.length}</span> of{' '}
                <span className="text-zion-cyan font-medium">{MICRO_SAAS_SERVICES.length}</span> services
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredServices.map((service) => (<ServiceCard key={service.id} service={service}/>))}
            </div>
          </>)}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-slate-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement the perfect solution for your business needs. 
            Get in touch today for a personalized consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white hover:from-zion-purple-light hover:to-zion-cyan-light">
              <Phone className="w-5 h-5 mr-2"/>
              Call Now: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
              <Mail className="w-5 h-5 mr-2"/>
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}</></></></></></>);
}
