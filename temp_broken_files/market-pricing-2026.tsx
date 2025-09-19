                </div>,
              </div>,
            </div>,
          </div>,
        </section>,
        {/* Filters Section */}
        <section className="relative z-10 py-8 px-4 sm: px-6 lg:px-8">,
          <div className="max-w-7xl mx-auto">,
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">,
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">,
                {/* Category Filter */,}
                <div>,
                  <label className="block text-white font-semibold mb-3">Service Category</label>,
                  <div className="grid grid-cols-2 md: grid-cols-4 gap-2">,
                    {categories.map(category => (,
                      <button,
                        key={category.id,}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 ${,
                          selectedCategory === category.id,
                            ? 'bg-cyan-500 text-black',
                            : 'bg-gray-700/50 text-gray-300 hover: bg-gray-600/50',}`}
                      >,
                        <div className="flex items-center justify-center space-x-2">,
                          <category.icon className="w-4 h-4" />,
                          <span>{category.name}</span>,
                        <div className="text-xs mt-1 opacity-75">({category.count})</div>,
                    ))}
                {/* Price Range Filter */}
                <div>,
                  <label className="block text-white font-semibold mb-3">Price Range</label>,
                  <div className="space-y-2">,
                    {priceRanges.map(range => (,
                      <button,
                        key={range.id}
                        onClick={() => setPriceRange(range.id)}
                        className={`w-full p-3 rounded-xl text-left transition-all duration-300 ${,
                          priceRange === range.id,
                            ? 'bg-cyan-500 text-black',
                            : 'bg-gray-700/50 text-gray-300 hover: bg-gray-600/50',}`}
                      >,
                        <div className="font-medium">{range.name}</div>,
                        <div className="text-xs opacity-75">{range.range}</div>,
                    ))}
        {/* Market Analysis Section */}
        <section className="relative z-10 py-16 px-4 sm: px-6 lg:px-8">,
          <div className="max-w-7xl mx-auto">,
            <div,
              whileInView={{ opacity: 1, y: 0 ,}}
              viewport={{ once: true ,}}
              className="text-center mb-12",
            >,
              <h2 className="text-4xl font-bold text-white mb-4">Market Analysis & Competitive Positioning</h2>,
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
                Our services are strategically positioned to provide maximum value while maintaining competitive pricing,
                in the rapidly evolving technology landscape,
              </p>,
            </div>,
            {/* Market Insights Grid */}
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8 mb-16">,
              <div,
                whileInView={{ opacity: 1, y: 0 ,}}
                viewport={{ once: true ,}}
                className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm",
              >,
                <div className="text-4xl mb-4">📊</div>,
                <h3 className="text-xl font-bold text-white mb-3">Competitive Pricing</h3>,
                <p className="text-gray-300 text-sm mb-4">,
                  Our pricing is strategically positioned to be 20-40% more affordable than enterprise competitors,
                  while providing superior features and ROI,
                <div className="flex items-center text-cyan-400 text-sm">,
                  <TrendingUp className="w-4 h-4 mr-2" />,
                  <span>20-40% cost savings</span>,
                </div>,
              </div>,
              <div,
                whileInView={{ opacity: 1, y: 0 ,}}
                viewport={{ once: true ,}}
                className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm",
              >,
                <div className="text-4xl mb-4">🎯</div>,
                <h3 className="text-xl font-bold text-white mb-3">ROI Guarantee</h3>,
                <p className="text-gray-300 text-sm mb-4">,
                  Every service comes with our 1000% ROI guarantee, ensuring that customers see,
                  exceptional returns on their investment,
                <div className="flex items-center text-green-400 text-sm">,
                  <Award className="w-4 h-4 mr-2" />,
                  <span>1000% ROI guarantee</span>,
                </div>,
              </div>,
              <div,
                whileInView={{ opacity: 1, y: 0 ,}}
                viewport={{ once: true ,}}
                className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm",
              >,
                <div className="text-4xl mb-4">🚀</div>,
                <h3 className="text-xl font-bold text-white mb-3">Future-Proof Technology</h3>,
                <p className="text-gray-300 text-sm mb-4">,
                  Our 2026 services incorporate cutting-edge technologies that will remain,
                  relevant and competitive for years to come,
                <div className="flex items-center text-purple-400 text-sm">,
                  <Zap className="w-4 h-4 mr-2" />,
                  <span>Future-proof solutions</span>,
                </div>,
              </div>,
            </div>,
          </div>,
        </section>,
        {/* Services Pricing Grid */}
        <section className="relative z-10 py-16 px-4 sm: px-6 lg:px-8">,
          <div className="max-w-7xl mx-auto">,
            <div,
              whileInView={{ opacity: 1, y: 0 ,}}
              viewport={{ once: true ,}}
              className="text-center mb-12",
            >,
              <h2 className="text-4xl font-bold text-white mb-4">Service Pricing & Features</h2>,
              <p className="text-xl text-gray-300">,
                {filteredServices.length} services found matching your criteria,
              </p>,
            </div>,
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
              {filteredServices.map((service, index) => (,
                <div,
                  key={service.id}
                  className="group",
                >,
                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm hover: border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">,
                    {/* Service Header */,}
                    <div className="flex items-start justify-between mb-4">,
                      <div className="text-4xl">{service.icon}</div>,
                      {service.popular && (,
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">,
                          Popular,
                      )}
                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover: text-cyan-400 transition-colors duration-300">,
                      {service.name,}
                    {/* Tagline */}
                    <p className="text-gray-300 text-sm mb-4">,
                      {service.tagline}
                    {/* Pricing Section */}
                    <div className="bg-gray-700/30 rounded-xl p-4 mb-4">,
                      <div className="text-center">,
                        <div className="text-3xl font-bold text-cyan-400 mb-1">,
                          {service.price}
                          <span className="text-gray-400 text-lg font-normal">{service.period}</span>,
                        <div className="text-gray-400 text-sm">Starting price</div>,
                    {/* Market Position */}
                    <div className="mb-4">,
                      <h4 className="text-white font-semibold mb-2 text-sm">Market Position</h4>,
                      <p className="text-gray-400 text-xs leading-relaxed">,
                        {service.marketPosition}
                    {/* ROI & Customers */}
                    <div className="grid grid-cols-2 gap-4 mb-4">,
                      <div className="text-center p-3 bg-gray-700/30 rounded-lg">,
                        <div className="text-lg font-bold text-green-400 mb-1">,
                          {service.roi.split(' ')[0]}
                        <div className="text-gray-400 text-xs">ROI</div>,
                      <div className="text-center p-3 bg-gray-700/30 rounded-lg">,
                        <div className="text-lg font-bold text-blue-400 mb-1">,
                          {service.customers.toLocaleString()}+,
                        <div className="text-gray-400 text-xs">Customers</div>,
                    {/* Key Features */}
                    <div className="mb-4">,
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Features</h4>,
                      <ul className="space-y-1">,
                        {service.features.slice(0, 3).map((feature, idx) => (,
                          <li key={idx} className="text-gray-400 text-xs flex items-center">,
                            <Zap className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />,
                            {feature}
                        ))}
                    {/* Technology Stack */}
                    <div className="mb-4">,
                      <h4 className="text-white font-semibold mb-2 text-sm">Technology</h4>,
                      <div className="flex flex-wrap gap-1">,
                        {service.technology.slice(0, 3).map((tech, idx) => (,
                          <span key={idx} className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded">,
                            {tech}
                        ))}
                        {service.technology.length > 3 && (,
                          <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded">,
                            +{service.technology.length - 3} more,
                        )}
                    {/* CTA Button */}
                    <a,
                      href={service.link}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center block",
                    >,
                      View Details,
                    </a>,
                  </div>,
                </div>,
              )),}
            {/* No Results */}
            {filteredServices.length === 0 && (,
              <div,
                className="text-center py-16",
              >,
                <div className="text-6xl mb-4">🔍</div>,
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>,
                <p className="text-gray-400">Try adjusting your category or price range filters</p>,
              </div>,
            )}
        {/* Contact Section */}
        <section className="relative z-10 py-20 px-4 sm: px-6 lg:px-8">,
          <div className="max-w-4xl mx-auto text-center">,
            <div,
              whileInView={{ opacity: 1, y: 0 ,}}
              viewport={{ once: true ,}}
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm",
            >,
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>,
              <p className="text-xl text-gray-300 mb-8">,
                Contact our team to discuss pricing, implementation, and how our revolutionary 2026 services,
                can transform your business with exceptional ROI,
              <div className="grid grid-cols-1 md: grid-cols-3 gap-6 mb-8">,
                <div className="flex items-center justify-center space-x-3 text-cyan-300">,
                  <span className="text-2xl">📱</span>,
                  <span className="font-semibold">{contactInfo.mobile,}</span>,
                <div className="flex items-center justify-center space-x-3 text-purple-300">,
                  <span className="text-2xl">✉️</span>,
                  <span className="font-semibold">{contactInfo.email}</span>,
                <div className="flex items-center justify-center space-x-3 text-pink-300">,
                  <span className="text-2xl">📍</span>,
                  <span className="font-semibold text-sm">{contactInfo.address}</span>,
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,
                <a,
                  href="/contact",
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105",
                >,
                  Get Custom Quote,
                <a,
                  href="/2026-services-showcase",
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300",
                >,
                  View All Services,
                </a>,
              </div>,
            </div>,
          </div>,
        </section>,
      </div>,
    </UltraAdvancedFuturisticBackground>,
  );
export default market-pricing-2026;
import React from "react";
const function MarketPricing2026() { = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-5xl font-bold mb-6">function MarketPricing2026() {</h1>,
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
  ),
};
export default function MarketPricing2026() {;
}}}