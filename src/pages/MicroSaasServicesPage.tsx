            </div>
          </div>
        </div>
      </div>
      {/* Contact Info Banner */}
      <div className="bg-zion-blue-dark/50 border-b border-zion-blue-light/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zion-slate-light">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-zion-cyan" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-zion-cyan" />
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
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                <Input
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-zion-blue-dark/50 border-zion-blue-light/30 text-white placeholder:text-zion-slate-light focus:border-zion-purple"
                />
              </div>
            </div>
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id 
                    ? "bg-zion-purple text-white" 
                    : "border-zion-blue-light/30 text-zion-slate-light hover:border-zion-purple hover:text-zion-purple"
                  }
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                  <Badge variant="secondary" className="ml-2 bg-zion-blue-light/20 text-zion-slate-light">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
            {/* Pricing Filter */}
            <div className="flex gap-2">
              {pricingModels.map((model) => (
                <Button
                  key={model.id}
                  variant={selectedPricing === model.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPricing(model.id)}
                  className={selectedPricing === model.id 
                    ? "bg-zion-cyan text-white" 
                    : "border-zion-blue-light/30 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan"
                  }
                >
                  {model.name}
                </Button>
              ))}
            </div>
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-zion-blue-dark/50 border border-zion-blue-light/30 text-white rounded-md px-3 py-2 text-sm focus:border-zion-purple focus:outline-none"
            >
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
        {filteredServices.length === 0 ? (
          <div className="text-center py-20">
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
          </div>
        ) : (
          <>
            <div className="mb-8">
              <p className="text-zion-slate-light">
                Showing <span className="text-zion-cyan font-medium">{filteredServices.length}</span> of{' '}
                <span className="text-zion-cyan font-medium">{MICRO_SAAS_SERVICES.length}</span> services
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
