              </a>,
            </div>,
          </div>,
        </div>,
      </section>,
      {/* Search and Filters */}
      <section className="px-4 sm: px-6 lg:px-8 mb-16">,
        <div className="max-w-7xl mx-auto">,
          <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20">,
            {/* Search Bar */,}
            <div className="mb-6">,
              <div className="relative">,
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />,
                <input,
                  type="text",
                  placeholder="Search services...",
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white placeholder-cyan-300 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20",
                />,
            {/* Filters */,}
            <div className="grid grid-cols-1 md: grid-cols-3 gap-6">,
              {/* Category Filter */,}
              <div>,
                <label className="block text-cyan-400 font-medium mb-2">Category</label>,
                <select,
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus: outline-none focus:border-cyan-400",
                >,
                  {categories.map((category) => (,
                    <option key={category.id,} value={category.id}>,
                      {category.icon} {category.name} ({category.count}),
                  ))}
              {/* Price Range Filter */}
              <div>,
                <label className="block text-cyan-400 font-medium mb-2">Price Range</label>,
                <select,
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus: outline-none focus:border-cyan-400",
                >,
                  {priceRanges.map((range) => (,
                    <option key={range.id,} value={range.id}>,
                      {range.name} ({range.count}),
                  ))}
              {/* Sort By */}
              <div>,
                <label className="block text-cyan-400 font-medium mb-2">Sort By</label>,
                <select,
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus: outline-none focus:border-cyan-400",
                >,
                  <option value="name">Name</option>,
                  <option value="price">Price</option>,
                  <option value="roi">ROI</option>,
      {/* Services Grid */,}
      <section className="px-4 sm: px-6 lg:px-8 mb-20">,
        <div className="max-w-7xl mx-auto">,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            <div>,
              {sortedServices.map((service, index) => (,
                <div,
                  key={service.id}
                  className="group",
                >,
                  <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 h-full hover: border-cyan-400/50 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl shadow-cyan-500/20">,
                    {/* Service Header */,}
                    <div className="flex items-start justify-between mb-4">,
                      <div className="text-4xl">🚀</div>,
                    {/* Service Info */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover: text-cyan-400 transition-colors duration-300">,
                      {service.name,}
                    <p className="text-cyan-300 text-sm mb-4 line-clamp-3">,
                      {service.description}
                    {/* Price */}
                    <div className="mb-4">,
                      <div className="text-2xl font-bold text-white">,
                        {service.price}
                    {/* Features */}
                    <div className="mb-6">,
                      <h4 className="text-cyan-400 font-semibold mb-3">Key Features: </h4>,
                      <div className="space-y-2">,
                        {service.features.slice(0, 3).map((feature, idx) => (,
                          <div key={idx} className="flex items-center space-x-2">,
                            <CheckCircle className="w-4 h-4 text-green-400" />,
                            <span className="text-gray-300 text-sm">{feature}</span>,
                        ))}
                        {service.features.length > 3 && (,
                          <div className="text-cyan-400 text-sm">,
                            +{service.features.length - 3} more features,
                        )}
                    {/* ROI */}
                    <div className="mb-6 text-center">,
                      <div className="text-green-400 font-semibold text-lg">ROI: {service.roi,}</div>,
                      <div className="text-gray-400 text-xs">Return on Investment</div>,
                    {/* Actions */}
                    <div className="flex space-x-3">,
                      <a,
                        href={service.link}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center text-sm",
                      >,
                        Learn More,
                      <a,
                        href="/contact",
                        className="px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm",
                      >,
                        Contact,
                    {/* Category Badge */,}
                    <div className="mt-4">,
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">,
                        {service.category}
                      </span>,
                    </div>,
                  </div>,
                </div>,
              ))}
            </div>,
          </div>,
          {/* No Results */}
          {sortedServices.length === 0 && (,
            <div,
              className="text-center py-20",
            >,
              <div className="text-6xl mb-4">🔍</div>,
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>,
              <p className="text-cyan-300 mb-6">Try adjusting your search criteria or browse all services.</p>,
              <button,
                onClick={() => {,
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover: from-cyan-600 hover:to-purple-700 transition-all duration-300",
              >,
                Clear Filters,
              </button>,
            </div>,
          ),}
      {/* Contact Section */}
      <section className="px-4 sm: px-6 lg:px-8 mb-20">,
        <div className="max-w-4xl mx-auto">,
          <div className="bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 text-center shadow-2xl shadow-cyan-500/20">,
            <h2 className="text-3xl font-bold text-white mb-4">,
              Ready to Transform Your Business?,
            <p className="text-cyan-300 mb-8 text-lg">,
              Contact our team to discuss how our 2027 services can revolutionize your operations and drive unprecedented growth.,
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">,
              <div className="flex items-center justify-center space-x-3">,
                <Phone className="w-5 h-5 text-cyan-400" />,
                <span className="text-white">{contactInfo.mobile,}</span>,
              <div className="flex items-center justify-center space-x-3">,
                <Mail className="w-5 h-5 text-purple-400" />,
                <span className="text-white">{contactInfo.email}</span>,
              <div className="flex items-center justify-center space-x-3">,
                <MapPin className="w-5 h-5 text-pink-400" />,
                <span className="text-white">{contactInfo.address}</span>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <a,
                href="/contact",
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25",
              >,
                Get Started Today,
              <a,
                href="/pricing",
                className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300",
              >,
                View Pricing Plans,
      {/* Footer */,}
      <footer className="px-4 sm: px-6 lg:px-8 py-12 border-t border-cyan-500/30">,
        <div className="max-w-7xl mx-auto text-center">,
          <div className="mb-8">,
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-2xl shadow-cyan-500/50">,
              Z,
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">,
              Zion Tech Group,
            <p className="text-cyan-300">2027 Innovation Hub</p>,
          <div className="text-cyan-300 text-sm">,
            <p>&copy, 2027 Zion Tech Group. All rights reserved.</p>,
            <p className="mt-2">,
              <a href="/privacy" className="hover: text-cyan-400 transition-colors duration-300">Privacy Policy</a>,
              {' • ',}
              <a href="/terms" className="hover: text-cyan-400 transition-colors duration-300">Terms of Service</a>,
              {' • ',}
              <a href="/contact" className="hover: text-cyan-400 transition-colors duration-300">Contact Us</a>,
  );
export default 2027-services-showcase;
import React from "react";
const function ServicesShowcase2027() { = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-5xl font-bold mb-6">function ServicesShowcase2027() {</h1>,
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
  ),
};
export default function ServicesShowcase2027() {;
}}}