
];
export default function ComprehensiveServicesOverview2027(...args[]):  {

  const [selectedCategory, setSelectedCategory] = useState('all');'
  const [selectedPricing, setSelectedPricing] = useState('all');'
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState(MICRO_SAAS_SERVICES);'
  const [sortBy, setSortBy] = useState<any>('rating');'
  const [viewMode, setViewMode] = useState<any>('grid');
  const [expandedService, setExpandedService] = useState<any>(null);
  useEffect(() => {
    let filtered = MICRO_SAAS_SERVICES;'
    if (selectedCategory !== 'all') {

      filtered = filtered.filter(service => service.category === selectedCategory)}'
    if (selectedPricing !== 'all') {

      filtered = filtered.filter(service => service.pricingModel === selectedPricing)};
    if (searchQuery.trim()) {;
      
      filtered = filtered.filter(service =>;
        service.title.toLowerCase () .includes(query) ||;
        service.description.toLowerCase () .includes(query) ||;
        service.tags.some(tag => tag.toLowerCase () .includes(query) ) ||;
        service.subcategory?.toLowerCase () .includes(query) ;) ;
    }
    filtered.sort((a, b) => {

      switch (sortBy) {
'
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);'
        case 'price':
          return (a.price || 0) - (b.price || 0);'
        case 'aiScore':
          return b.aiScore - a.aiScore;'
        case 'newest':
          return new Date(b.createdAt) .getTime () - new Date(a.createdAt) .getTime () ;
        default:
          return 0}
    }) ;
    setFilteredServices (filtered) }, [selectedCategory, selectedPricing, searchQuery, sortBy]) ;
  
            Learn More;""
            <ArrowRight className="ml-2 w-4 h-4"  />;          </Link>;
        </Button>;
      </div>;
    </motion.div>;) ;
"
  return (""
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">"
      <SEO""
        title="Comprehensive Services Overview 2027 - Zion Tech Group""
        description="Explore our comprehensive portfolio of innovative AI, IT, and business solutions. From AI-powered chatbots to quantum computing services, discover cutting-edge technology solutions.""
        keywords="AI services, IT solutions, business automation, cybersecurity, blockchain, quantum computing, Zion Tech Group"
      />"
      {/* Hero Section */}""
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">""
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20" />"        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.6 }}""
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >"
            Comprehensive Services Overview""
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
              2027 Edition
            </span>
          </motion.h1>
          <motion.p
            initial = {
  { opacity: 0,
  y: 20

}}
            animate = {
  { opacity: 1,
  y: 0

}}
            transition = {
  { duration: 0.6,
  delay: 0.2





"
}}""
            className="text-xl text-zion-slate-light max-w-3xl mx-auto"
          >
            Discover our complete portfolio of cutting - edge technology solutions, from AI - powered innovations to enterprise - grade infrastructure services.</motion.p>
        </div>
"
        {/* Filters and Controls */}""
        <div className="mb-12 space-y-6">""
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">""
            <div className="flex items-center gap-4">""
              <div className="relative">""
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4"  />"
                <input""
                  type="text""                  placeholder="Search services..."
                  value={searchQuery}"
                  onChange={(e) => setSearchQuery(e.target.value)}""
                  className="pl-10 pr-4 py-2 bg-zion-slate-dark/50 border border-zion-blue-light/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />"
              </div>""
              <div className="flex items-center gap-2">'
                <Button''"
                  variant={viewMode === 'grid' ? 'default' : 'outline'}"'"
                  size="sm"''
                  onClick={() => setViewMode('grid')}'
                  className={viewMode === 'grid' ? 'bg-zion-cyan hover:bg-zion-cyan-light' : 'border-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-dark/30'}"
                >""
                  <Grid className="w-4 h-4"  />                </Button>'
                <Button''"
                  variant={viewMode === 'list' ? 'default' : 'outline'}"'"
                  size="sm"''
                  onClick={() => setViewMode('list')}'
                  className={viewMode === 'list' ? 'bg-zion-cyan hover:bg-zion-cyan-light' : 'border-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-dark/30'}"
                >""
                  <List className="w-4 h-4"  />                </Button>
              </div>
              <select
                value={sortBy}"
                onChange={(e) => setSortBy(e.target.value as )}""
                className="bg-zion-slate-dark/50 border border-zion-blue-light/20 text-white rounded-lg px-3 py-2""
              >""
                <option value="rating">Sort by Rating</option>""
                <option value="price">Sort by Price</option>""
                <option value="aiScore">Sort by AI Score</option>""
                <option value="newest">Sort by Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>"
      {/* Services Section */}""
      <section className="py-16 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-7xl mx-auto">"
          {/* Filters and Search */}""
          <div className="mb-8 space-y-6">""
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">""
              <div className="flex-1 max-w-md">""
                <div className="relative">""
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5"  />"
                  <Input"                    placeholder="Search services..."
                    value={searchQuery}"
                    onChange={(e) => setSearchQuery(e.target.value)}""
                    className="pl-10 bg-zion-slate-dark/50 border-zion-blue-light/20 text-white placeholder-zion-slate-light"
                  />
                </div>"
              </div>""
              <div className="flex items-center space-x-4">""
                <div className="flex items-center space-x-2">'
                  <Button''"
                    variant={viewMode === 'grid' ? 'default' : 'outline'}"'"
                    size="sm"''"
                    onClick={() => setViewMode('grid')}""
                    className="bg-zion-cyan hover:bg-zion-cyan-light""
""
                    <Grid className="w-4 h-4"  />                  </Button>'
                  <Button''"
                    variant={viewMode === 'list' ? 'default' : 'outline'}"'"
                    size="sm"''"
                    onClick={() => setViewMode('list')}""
                    className="bg-zion-cyan hover:bg-zion-cyan-light""
""
                    <List className="w-4 h-4"  />                  </Button>
                </div>
                <select
                  value={sortBy}"
                  onChange={(e) => setSortBy(e.target.value as any)}""
                  className="bg-zion-slate-dark/50 border border-zion-blue-light/20 text-white rounded-lg px-3 py-2""
""
                  <option value="rating">Sort by Rating</option>""
                  <option value="price">Sort by Price</option>""
                  <option value="aiScore">Sort by AI Score</option>""
                  <option value="newest">Sort by Newest</option>
                </select>
              </div>"
            </div>""
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}'
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}'
                  className={selectedCategory === category.id ? 'bg-zion-cyan hover:bg-zion-cyan-light' : 'border-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-dark/30'}
"
                  {category.icon}""
                  <span className="ml-2">{category.name}</span>""
                  <Badge variant="secondary" className="ml-2 bg-zion-purple/80">
                    {category.count}
                  </Badge>
                </Button>;
              ))}"
            </div>""
            <div className="flex flex-wrap gap-4">
              {pricingModels.map((pricing) => (
                <Button
                  key={pricing.id}'
                  variant={selectedPricing === pricing.id ? 'default' : 'outline'}
                  onClick={() => setSelectedPricing(pricing.id)}'
                  className={selectedPricing === pricing.id ? 'bg-zion-purple hover:bg-zion-purple-light' : 'border-zion-purple/20 text-zion-slate-light hover:bg-zion-purple/30'}

                  {pricing.name}
                </Button>) ) }
            </div>
          </div>
          {/* Services Grid */}``
<div className: {`grid gap-8 ${
'
            viewMode === 'grid'''
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'''`
              : 'grid-cols-1'``
          }`}>
            {filteredServices.map((service) => (;
              <ServiceCard key={service.id} service={service}   />
            ))}"
          </div>""
          <div className="flex flex-wrap gap-4">
            {pricingModels.map((pricing) => (
              <Button;
                onClick={() => {;'
                  setSelectedCategory('all');'
                  setSelectedPricing('all');'"
                  setSearchQuery('')}}""
                className = "bg-zion-cyan hover:bg-zion-cyan-light"
              >
                {pricing.name}
              </Button>) ) }
          </div>
        </div>`
        {/* Services Grid */}``
<div className: {`grid gap-8 ${
'
          viewMode === 'grid' ''
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' ''`
            : 'grid-cols-1'``
        }`}>
          {filteredServices.map ( (service) => (;
            <ServiceCard key={service.id} service={service}  />) ) };        </div>;"
        {filteredServices.length === 0 && (;""
          <div className="text-center py-16">;""
            <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>;
            <Button;
              onClick={() => {;'
                setSelectedCategory('all');'
                setSelectedPricing('all');'"
                setSearchQuery('')}}"              className = "bg-zion-cyan hover:bg-zion-cyan-light"
            >
              Clear Filters
            </Button>
          </div>) }
      </div>"
      {/* CTA Section */}""
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20">;""
        <div className="max-w-4xl mx-auto text-center">""
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?"
          </h2>""
          <p className="text-xl text-zion-slate-light mb-8">
            Our team of experts is ready to help you implement the perfect solution for your needs.
            Get in touch today for a personalized consultation."
          </p>""
          <div className="flex flex-col sm:flex-row gap-4 justify-center">""
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan-light hover:to-zion-blue-light">""
              <Link to="/contact">"
                Schedule Consultation""
                <ArrowRight className="ml-2 w-5 h-5"  />              </Link>"
            </Button>""
            <Button asChild variant="outline" size="lg" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">""
              <a href="tel:+13024640950">
                Call Now: +1 302 464 0950
              </a>
            </Button>;
          </div>;
        </div>;
      </section>;
    </div>;) }'"`
'"`'"`
