import React, { useState, useEffect } from 'react';
import { Search, Star, Phone, Mail, Globe, CheckCircle, TrendingUp, Users, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES } from '@/data/expandedServices';
import { TrustedBySection } from '@/components/TrustedBySection';
export {};
  return null;
}
';
'';
''';
  const [searchQuery, setSearchQuery] = useState('');''';
  const [selectedCategory, setSelectedCategory] = useState('all');'';
  const [filteredServices, setFilteredServices] = useState(EXPANDED_SERVICES);''';
  const [sortBy, setSortBy] = useState('rating');
  useEffect(() => {}
    let filtered = EXPANDED_SERVICES;
    // Filter by search query;
    if (searchQuery) {}
      filtered = filtered.filter();
        service =>;
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
          service.description;
            .toLowerCase();
            .includes(searchQuery.toLowerCase()) ||;
          service.tags.some(tag =>;
            tag.toLowerCase().includes(searchQuery.toLowerCase());
          );
      )}';
    // Filter by category'';
    if (selectedCategory !== 'all') {}
      filtered = filtered.filter();
        service => service.category === selectedCategory;
      )}
    // Sort services;
    filtered.sort((a, b) => {}
';
'';
''';
      if (sortBy === 'rating') return b.rating - a.rating;''';
      if (sortBy === 'price') return a.price - b.price;''';
      if (sortBy === 'aiScore') return b.aiScore - a.aiScore;
      return 0});
    setFilteredServices(filtered)}, [searchQuery, selectedCategory, sortBy]);
  const getCategoryIcon = category => {}
    switch (category) {}
';
'';
''';
      case 'AI Services':'''';
        return '🤖';''';
      case 'Micro SAAS':'''';
        return '☁️';''';
      case 'IT Services':'''';
        return '💻';''';
      case 'Digital Services':'''';
        return '🚀';''';
      default:'''';
        return '⚡'}
  }
  const getPricingModelColor = model => {}
    switch (model) {}
';
'';
''';
      case 'subscription':'''';
        return 'bg-blue-100 text-blue-800';''';
      case 'project-based':'''';
        return 'bg-purple-100 text-purple-800';''';
      case 'one-time':'''';
        return 'bg-green-100 text-green-800';''';
      case 'usage-based':'''';
        return 'bg-orange-100 text-orange-800';''';
      default:'''';
        return 'bg-gray-100 text-gray-800'}
  }
  return();
    <div className="min-h-screen bg-background">";
      {/* Hero Section */}"";
      <section className="bg-zion-blue py-20">"";
        <div className="container mx-auto px-4 text-center">"";
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
            Comprehensive Tech Solutions";
          </h1>"";
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
            Discover our complete ecosystem of AI services, micro SAAS;
            solutions, IT infrastructure, and digital transformation services;
            designed to accelerate your business growth.;
          </p>;
";
          {/* Search and Filter Bar */}"";
          <div className="max-w-4xl mx-auto mb-8">"";
            <div className="flex flex-col md:flex-row gap-4">"";
              <div className="flex-1 relative">"";
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />";
                <div>Broken JSX</div>
                  onChange={e => setSearchQuery(e.target.value)}"";
                  className="pl-10 h-12 text-lg";
                />;
              </div>;
              <div>Broken JSX</div>
                onChange={e => setSelectedCategory(e.target.value)}"";
                className="px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-zion-purple"">"";
                <option value="all">All Categories</option>;
                {};
                  <option key={category.id} value={category.name}>;
                    {category.name}
                  </option>;
                ))}
              </select>;
              <div>Broken JSX</div>
                onChange={e => setSortBy(e.target.value)}"";
                className="px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-zion-purple"">"";
                <option value="rating">Sort by Rating</option>"";
                <option value="price">Sort by Price</option>"";
                <option value="aiScore">Sort by AI Score</option>;
              </select>;
            </div>;
          </div>;
";
          {/* Quick Stats */}"";
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">"";
            <div className="text-center">"";
              <div className="text-3xl font-bold text-zion-cyan mb-2">;
                {EXPANDED_SERVICES.length}";
              </div>"";
              <div className="text-zion-slate-light">Total Services</div>";
            </div>"";
            <div className="text-center">"";
              <div className="text-3xl font-bold text-zion-cyan mb-2">4</div>"";
              <div className="text-zion-slate-light">Categories</div>";
            </div>"";
            <div className="text-center">"";
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>"";
              <div className="text-zion-slate-light">Support</div>";
            </div>"";
            <div className="text-center">"";
              <div className="text-3xl font-bold text-zion-cyan mb-2">95%</div>"";
              <div className="text-zion-slate-light">Satisfaction</div>;
            </div>;
          </div>;
        </div>;
      </section>;
";
      {/* Services Grid */}"";
      <section className="py-16">"";
        <div className="container mx-auto px-4">"";
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
                      {getCategoryIcon(service.category)}
                    </div>;
                    <div>Broken JSX</div>
                    >';
                      {service.pricingModel.replace('-')}
                    </Badge>";
                  </div>"";
                  <CardTitle className="text-xl text-zion-blue-dark">;
                    {service.title}";
                  </CardTitle>"";
                  <CardDescription className="text-gray-600">;
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Rating and AI Score */}
                  <div className="flex items - center justify - between">
                    <div className="flex items - center space - x-2">
                      <div className="flex items - center">
                        <Star className="h - 4 w - 4 text - yellow - 500 fill - current"       />
                        <span className="ml - 1 text - sm font - medium">
                          {service.rating}
                        </span>
                        <span className="text - gray - 500 text - sm ml - 1"> ({service.reviewCount}) </span>
                      </div>
                    </div>
                    <div className="flex items - center space - x-2">
                      <Zap className="h - 4 w - 4 text - zion - purple"       />
                      <span className="text - sm font - medium text - zion - purple">
                        AI Score: {service.aiScore}
                      </span>
                    </div>
                  </div>

                  {/* Price and Market Price */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-zion-blue-dark">
                        ${service.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500">
                        Market: {service.marketPrice}
                      </span>
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-zion-blue-dark text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, index) => (<Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>))}
                      {service.features.length > 3 && (<Badge variant="outline" className="text-xs">
                          +{service.features.length - 3} more
                        </Badge>)}
                    </div>
                  </div>

      <TrustedBySection />;
    </div>)}


export { ExpandedServicesPage }
export { ExpandedServicesPage }
export { ExpandedServicesPage }
export { ExpandedServicesPage }
export { ExpandedServicesPage }