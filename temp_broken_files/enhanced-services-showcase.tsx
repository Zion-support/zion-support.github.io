                </div>,
              </div>,
            </div>,
          </div>,
        </section>,
        {/* Featured Service Categories */}
        <section className="py-16 px-4 sm: px-6 lg:px-8">,
          <div className="max-w-7xl mx-auto">,
            <div,
              whileInView={{ opacity: 1, y: 0 ,}}
              viewport={{ once: true ,}}
              className="text-center mb-16",
            >,
              <h2 className="text-4xl md: text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">,
                Featured Service Categories,
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
                Explore our most innovative and high-impact service categories,
              </p>,
            </div>,
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">,
              {featuredServices.map((category, index) => (,
                <div,
                  key={index}
                  whileInView={{ opacity: 1, y: 0 ,}}
                  viewport={{ once: true ,}}
                  className="relative",
                >,
                  <div className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl text-white relative overflow-hidden`}>,
                    <div className="absolute inset-0 bg-black/20"></div>,
                    <div className="relative z-10">,
                      <h3 className="text-2xl font-bold mb-4">{category.title}</h3>,
                      <p className="text-lg mb-6 opacity-90">{category.description}</p>,
                      <div className="space-y-3">,
                        {category.services.map((service, serviceIndex) => (,
                          <div key={serviceIndex} className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">,
                            <span className="text-2xl">{service.icon}</span>,
                            <div className="flex-1">,
                              <div className="font-semibold">{service.name}</div>,
                              <div className="text-sm opacity-80">{service.price}{service.period}</div>,
                            <ArrowRight className="w-4 h-4" />,
                        ))}
                      <Button,
                        href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                        variant="secondary",
                        className="mt-6 w-full",
                      >,
                        View All {category.title.split(' ')[0" Services,
                      </Button>,
                    </div>,
                  </div>,
                </div>,
              ))}
        {/* Filters and Search */}
        <section className="py-8 px-4 sm: px-6 lg:px-8">,
          <div className="max-w-7xl mx-auto">,
            <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6">,
              <div className="flex flex-col lg:flex-row gap-6">,
                {/* Search */,}
                <div className="flex-1">,
                  <div className="relative">,
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />,
                    <input,
                      type="text",
                      placeholder="Search services...",
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",
                    />,
                {/* Category Filter */,}
                <div className="flex-shrink-0">,
                  <select,
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",
                  >,
                    {categories.map((category) => (,
                      <option key={category.id,} value={category.id}>,
                        {category.name} ({category.count}),
                    ))}
                {/* Sort Options */}
                <div className="flex-shrink-0">,
                  <select,
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",
                  >,
                    {sortOptions.map((option) => (,
                      <option key={option.id,} value={option.id}>,
                        {option.name}
                    ))}
                {/* View Mode Toggle */}
                <div className="flex-shrink-0">,
                  <div className="flex bg-gray-700/50 rounded-lg p-1">,
                    <button,
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors ${,
                        viewMode === 'grid',
                          ? 'bg-cyan-500 text-white',
                          : 'text-gray-400 hover: text-white',}`}
                    >,
                      <Grid className="w-5 h-5" />,
                    <button,
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors ${,
                        viewMode === 'list',
                          ? 'bg-cyan-500 text-white',
                          : 'text-gray-400 hover: text-white',}`}
                    >,
                      <List className="w-5 h-5" />,
        {/* Services Grid/List */}
        <section className="py-16 px-4 sm: px-6 lg:px-8">,
          <div className="max-w-7xl mx-auto">,
            <div,
              className={viewMode === 'grid',
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
                : 'space-y-6',}
            >,
              {filteredServices.map((service, index) => (,
                <div,
                  key={service.id}
                  className={viewMode === 'grid' ? '' : 'bg-gray-800/60 border border-gray-700 rounded-2xl p-6'}
                >,
                  {viewMode === 'grid' ? (,
                    <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover: border-cyan-500/40 transition-colors h-full">,
                      <div className="flex items-center justify-between mb-4">,
                        <div className="flex items-center space-x-2">,
                          <span className="text-2xl">{service.icon,}</span>,
                          <div>,
                            <div className="text-sm text-gray-400">{service.category}</div>,
                            <div className="text-xs text-gray-500">{service.setupTime} setup</div>,
                        <div className="text-right">,
                          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>,
                          <div className="text-sm text-gray-400">{service.period}</div>,
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>,
                      <p className="text-gray-300 mb-3">{service.tagline}</p>,
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>,
                      <div className="space-y-3 mb-6">,
                        <div className="flex items-center justify-between text-sm">,
                          <span className="text-gray-400">Rating: </span>,
                          <div className="flex items-center space-x-1">,
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />,
                            <span className="text-white">{service.rating,}</span>,
                            <span className="text-gray-400">({service.reviews})</span>,
                        <div className="flex items-center justify-between text-sm">,
                          <span className="text-gray-400">Customers: </span>,
                          <span className="text-white">{service.customers.toLocaleString(),}</span>,
                        <div className="flex items-center justify-between text-sm">,
                          <span className="text-gray-400">Trial: </span>,
                          <span className="text-white">{service.trialDays,} days</span>,
                      <div className="flex gap-3">,
                        <Button,
                          href={service.link} ,
                          variant="primary",
                          className="flex-1",
                        >,
                          Learn More,
                          <ExternalLink className="ml-2 w-4 h-4" />,
                        <Button,
                          href="/contact",
                          variant="secondary",
                          className="flex-1",
                        >,
                          Get Started,
                  ) : (,
                    <div className="flex items-start space-x-6">,
                      <div className="flex-shrink-0">,
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">,
                          {service.icon}
                      <div className="flex-1 min-w-0">,
                        <div className="flex items-start justify-between">,
                          <div>,
                            <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>,
                            <p className="text-gray-300 mb-3">{service.tagline}</p>,
                            <p className="text-gray-400 text-sm mb-4">{service.description}</p>,
                          <div className="text-right ml-4">,
                            <div className="text-2xl font-bold text-cyan-400">{service.price}</div>,
                            <div className="text-sm text-gray-400">{service.period}</div>,
                        <div className="grid grid-cols-2 md: grid-cols-4 gap-4 mb-4 text-sm">,
                          <div>,
                            <span className="text-gray-400">Category:</span>,
                            <div className="text-white">{service.category,}</div>,
                          <div>,
                            <span className="text-gray-400">Rating: </span>,
                            <div className="flex items-center space-x-1">,
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />,
                              <span className="text-white">{service.rating,}</span>,
                          <div>,
                            <span className="text-gray-400">Customers: </span>,
                            <div className="text-white">{service.customers.toLocaleString(),}</div>,
                          <div>,
                            <span className="text-gray-400">Setup: </span>,
                            <div className="text-white">{service.setupTime,}</div>,
                        <div className="flex gap-3">,
                          <Button,
                            href={service.link} ,
                            variant="primary",
                            size="sm",
                          >,
                            Learn More,
                            <ExternalLink className="ml-2 w-4 h-4" />,
                          <Button,
                            href="/contact",
                            variant="secondary",
                            size="sm",
                          >,
                            Get Started,
                  )}
                </div>,
              ))}
            </div>,
            {filteredServices.length === 0 && (,
              <div className="text-center py-16">,
                <div className="text-6xl mb-4">🔍</div>,
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>,
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or browse all categories</p>,
                <Button,
                  href="#",
                  onClick={() => {,
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  variant="primary",
                >,
                  View All Services,
            )}
        {/* Contact Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">,
          <div className="max-w-4xl mx-auto text-center">,
            <div,
              whileInView={{ opacity: 1, y: 0 ,}}
              viewport={{ once: true ,}}
            >,
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
                Ready to Transform Your Business?,
              <p className="text-xl text-gray-300 mb-8">,
                Join thousands of companies achieving breakthrough results with our revolutionary services,
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">,
                <div className="flex items-center justify-center space-x-3">,
                  <Phone className="w-6 h-6 text-cyan-400" />,
                  <span className="text-lg">{contactInfo.mobile,}</span>,
                <div className="flex items-center justify-center space-x-3">,
                  <Mail className="w-6 h-6 text-purple-400" />,
                  <span className="text-lg">{contactInfo.email}</span>,
                <div className="flex items-center justify-center space-x-3">,
                  <MapPin className="w-6 h-6 text-green-400" />,
                  <span className="text-lg">{contactInfo.address}</span>,
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,
                <Button,
                  href="/contact",
                  variant="primary",
                  size="lg",
                  className="text-lg px-8 py-4",
                >,
                  Start Your Transformation,
                  <Rocket className="ml-2 w-6 h-6" />,
                <Button,
                  href="/pricing",
                  variant="secondary",
                  size="lg",
                  className="text-lg px-8 py-4",
                >,
                  View Pricing,
                  <DollarSign className="ml-2 w-6 h-6" />,
                </Button>,
              </div>,
            </div>,
          </div>,
        </section>,
      </div>,
    </UltraAdvancedFuturisticMatrixBackground>,
  ),}
// Button component (if not imported),
const Button = ({,
  href;
  variant = 'primary';
  size = 'md';
  className = '';
  children;
  onClick,
}: {,
  href?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void,
}) => {,
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus: outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900';
  const variantClasses = {,
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl focus:ring-cyan-500';
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-500 focus:ring-gray-500',};
  const sizeClasses = {,
    sm: 'px-4 py-2 text-sm';
    md: 'px-6 py-3 text-base';
    lg: 'px-8 py-4 text-lg',};
  const classes = `${baseClasses} ${variantClasses[variant" ${sizeClasses[size" ${className}`;
  if (href) {,
    return (,
      <a href={href} className={classes}>,
        {children}
    );
  }
  return (,
    <button onClick={onClick} className={classes}>,
      {children}
  );
};
import React from "react";
const function EnhancedServicesShowcase() { = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-5xl font-bold mb-6">function EnhancedServicesShowcase() {</h1>,
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
  );
};
export default function EnhancedServicesShowcase() {;
}}}}}]]]