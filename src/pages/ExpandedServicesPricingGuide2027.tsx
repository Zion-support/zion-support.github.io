  type ExpandedServicePricing''
} from '@/data/expandedServicesPricing2027';

    setFilteredPricing(pricing) ;
  }, [selectedCategory, searchQuery]) ;

      pricing = pricing.filter(p =>
        p.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
      )};
    setFilteredPricing(pricing)}, [selectedCategory, searchQuery]);

  
      pricing = pricing.filter (p => ;
        p.serviceName.toLowerCase () .includes (searchQuery.toLowerCase () ) ||;
        p.category.toLowerCase () .includes (searchQuery.toLowerCase () ) ||;
        p.subcategory.toLowerCase () .includes (searchQuery.toLowerCase () ) ;) ;

    setFilteredPricing (pricing) }, [selectedCategory, searchQuery]) ;

  '
    switch (category) {;'      case 'Cybersecurity':;'
        return Shield;''
      case 'Data Analytics':;
        return BarChart3;'
      case 'Cloud & DevOps':;
        return Cloud;'
      case 'IoT & Edge Computing':;
        return IoT;'
      case 'Financial Technology':;
        return FinTech;'
      case 'Healthcare Technology':;
        return Healthcare;
      default:;
        return Rocket}
  };
'
        return 'from-gray-500 to-slate-600'}
  };
'
        return 'bg-gray-100 text-gray-800'}
  };

              </a>;
            </div>;
          </div>;
        </div>;
      </motion.div>;) };
  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">"
      <SEO""
        title="Expanded Services Pricing Guide 2027 - Zion Tech Group"""
        description="Comprehensive pricing guide for our expanded innovative services. Compare pricing tiers, ROI analysis, and market positioning across all service categories.""        keywords="pricing guide, service pricing, ROI analysis, market comparison, cybersecurity pricing, data analytics pricing, cloud DevOps pricing"
       />
"
      {/* Hero Section */}""
      <div className="relative overflow-hidden">""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">""
          <div className="text-center">
            <motion.h1
              initial = {
  { opacity: 0,
  y: 20

}}
              animate = {
  { opacity: 1,
  y: 0

}}"
              transition={{ duration: 0.8 }}""
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
"
              Expanded Services""
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Pricing Guide 2027
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
  { duration: 0.8,
  delay: 0.2





"
}}""
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Comprehensive pricing information, ROI analysis, and market comparisons for all our expanded innovative services.Find the perfect pricing tier for your business needs.</motion.p>

            {/* Contact Info */}
            <motion.div
              initial = {
  { opacity: 0,
  y: 20

}}
              animate = {
  { opacity: 1,
  y: 0

}}
              transition = {
  { duration: 0.8,
  delay: 0.4

}}
              className="bg-white dark:bg-slate - 800 rounded-2xl shadow-xl p - 6 inline -block"




"
}}""
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 inline-block""
""
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">""
                <div className="flex items-center space-x-3">""
                  <Phone className="w-5 h-5 text-blue-600"  />"
                  <div>""
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>""
                    <p className="font-semibold text-gray-900 dark:text-white">+1 302 464 0950</p>
                  </div>"
                </div>""
                <div className="flex items-center space-x-3">""
                  <Mail className="w-5 h-5 text-blue-600"  />"
                  <div>""
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>""
                    <p className="font-semibold text-gray-900 dark:text-white">kleber@ziontechgroup.com</p>
                  </div>"
                </div>""
                <div className="flex items-center space-x-3">""
                  <MapPin className="w-5 h-5 text-blue-600"  />"
                  <div>""
                    <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>""
                    <p className="font-semibold text-gray-900 dark:text-white">364 E Main St STE 1008</p>"                    <p className="font-semibold text-gray-900 dark:text-white">Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>;
"
      {/* Pricing Section */}""
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;"
        {/* Filters and Search */}""
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 mb-8">;""
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">"
            {/* Search */}""
            <div className="flex-1 max-w-md">""
              <div className="relative">""
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"  />"
                <input""
                  type="text""                  placeholder="Search pricing..."
                  value={searchQuery}"
                  onChange={(e) => setSearchQuery(e.target.value)}""
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                />
              </div>
            </div>
"
            {/* Category Filter */}""
            <div className="flex items-center space-x-4">
              <select
                value={selectedCategory}"
                onChange={(e) => setSelectedCategory(e.target.value)}""
                className="px-4 py-2 border border-gray-300 dark: border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
              >
                {categories.map((category) => (<option key={category} value={category}>
                    {category}
                  </option>) ) }
              </select>
            </div>
          </div>
        </div>
"
        {/* Pricing Count */}""
        <div className="mb-8">;""
          <p className="text-gray-600 dark:text-gray-300">
            Showing {filteredPricing.length} of {ALL_EXPANDED_SERVICES_PRICING.length} pricing plans
          </p>
        </div>

        {/* Pricing Grid */}"
        {filteredPricing.length > 0 ? (""
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">
            {filteredPricing.map((pricing)  => renderPricingCard(pricing))}
          </div>"
        ) : (""
          <div className="text-center py-16">""
            <div className="text-gray-400 dark:text-gray-500 mb-4">""
              <Search className="w-16 h-16 mx-auto"  />"
            </div>""
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No pricing plans found</h3>"            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search criteria or category filter
            </p>
          </div>) }
      </div>
"
      {/* CTA Section */}""
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">;""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">""
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?"
          </h2>""
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our pricing is designed to provide maximum value at competitive rates.
            Contact us today to discuss your specific needs and get a customized quote."
          </p>""
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">"
            <a""
              href="mailto:kleber@ziontechgroup.com""
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2""
""
              <Mail className="w-5 h-5"  />              <span>Get Custom Quote</span>
            </a>"
            <a""
              href="tel:+13024640950""
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2""
""
              <Phone className="w-5 h-5"  />              <span>Call Sales Team</span>
            </a>;
          </div>;
        </div>;
      </div>;
    </div>;) };
'"
export default ExpandedServicesPricingGuide2027}}}}}}'"'"
