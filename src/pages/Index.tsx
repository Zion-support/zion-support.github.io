const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore Services
            </a>
            <a 
              href="/products" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Products
            </a>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Our Services</h3>
            <p className="text-gray-300 mb-6">
              Discover our comprehensive range of technology services including AI development, cloud migration, cybersecurity, and more.
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`}>
            {toolsFeatures.map((feature, index) => (<Link key={index} to={feature.link} className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300">
                <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{t("general.explore")}</span>
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`}/>
                </div>
              </Link>))}
          </div>
        </div>
      </section>
      
      <CategoriesSection />
      <BenefitsSection />
      
      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />
      
      <HowItWorksSection />
      <FeaturedListingsSection />
      <TestimonialCarousel />
      <TrustedBySection />
      <BlogSection />
      
      {/* Add social share section to encourage users to spread the word */}
      <SocialShareSection />
      
      <WaitlistSection />
      <FloatingCTA />
      <Footer />
    </div>);
}
