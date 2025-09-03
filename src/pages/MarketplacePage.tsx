import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ;
  Search,
  Filter,
  Star,
  ShoppingCart,
  Heart,
  Eye,
  Download,
  Play,
  Users,
  TrendingUp,
  Award,
  Clock,
  Tag,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Brain,
  Cloud,
  Database,
  Code,
  Settings,
  BarChart3,
  Globe,
  Lock;
} from 'lucide-react';
export function MarketplacePage() {;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = [;
    { id: 'all', name: 'All Products', icon: Globe },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'data', name: 'Data Analytics', icon: Database },
    { id: 'development', name: 'Development Tools', icon: Code },
    { id: 'automation', name: 'Automation', icon: Settings },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 }
  ];
  const marketplaceProducts = [;
    {;
      id: 1,
      title: 'AI Sales Copilot Pro',
      category: 'ai',
      description: 'Advanced AI-powered sales assistant that helps close deals faster and increase conversion rates.',
      price: '$299/month',
      originalPrice: '$399/month',
      rating: 4.9,
      reviews: 127,
      downloads: 2500,
      image: '🤖',
      features: ['Lead Scoring', 'Email Automation', 'CRM Integration', 'Analytics Dashboard'],
      tags: ['AI', 'Sales', 'CRM', 'Automation'],
      isFeatured: true,
      isNew: false,
      vendor: 'Zion Tech Group';
},
    {;
      id: 2,
      title: 'Enterprise Security Suite',
      category: 'security',
      description: 'Comprehensive cybersecurity solution with threat detection, compliance management, and incident response.',
      price: '$599/month',
      originalPrice: '$799/month',
      rating: 4.8,
      reviews: 89,
      downloads: 1800,
      image: '🛡️',
      features: ['Threat Detection', 'Compliance', 'Incident Response', 'Security Analytics'],
      tags: ['Security', 'Compliance', 'Threat Detection', 'Enterprise'],
      isFeatured: true,
      isNew: true,
      vendor: 'Zion Tech Group';
},
    {;
      id: 3,
      title: 'Cloud FinOps Optimizer',
      category: 'cloud',
      description: 'Intelligent cloud cost optimization platform that reduces spending while maintaining performance.',
      price: '$199/month',
      originalPrice: '$299/month',
      rating: 4.7,
      reviews: 156,
      downloads: 3200,
      image: '☁️',
      features: ['Cost Optimization', 'Resource Management', 'Automated Scaling', 'Cost Analytics'],
      tags: ['Cloud', 'FinOps', 'Cost Optimization', 'AWS'],
      isFeatured: false,
      isNew: false,
      vendor: 'Zion Tech Group';
},
    {;
      id: 4,
      title: 'AI Business Intelligence Platform',
      category: 'ai',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics and reporting.',
      price: '$399/month',
      originalPrice: '$499/month',
      rating: 4.9,
      reviews: 203,
      downloads: 4100,
      image: '📊',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Data Visualization'],
      tags: ['AI', 'Analytics', 'Business Intelligence', 'Data'],
      isFeatured: true,
      isNew: false,
      vendor: 'Zion Tech Group';
},
    {;
      id: 5,
      title: 'DevOps Automation Toolkit',
      category: 'development',
      description: 'Complete DevOps automation solution with CI/CD pipelines, monitoring, and deployment tools.',
      price: '$149/month',
      originalPrice: '$199/month',
      rating: 4.6,
      reviews: 94,
      downloads: 2800,
      image: '⚙️',
      features: ['CI/CD Pipelines', 'Monitoring', 'Deployment', 'Infrastructure as Code'],
      tags: ['DevOps', 'CI/CD', 'Automation', 'Monitoring'],
      isFeatured: false,
      isNew: true,
      vendor: 'Zion Tech Group';
},
    {;
      id: 6,
      title: 'Customer Support AI',
      category: 'ai',
      description: 'Intelligent customer support automation with chatbots, ticket routing, and sentiment analysis.',
      price: '$249/month',
      originalPrice: '$349/month',
      rating: 4.8,
      reviews: 178,
      downloads: 3600,
      image: '💬',
      features: ['Chatbots', 'Ticket Routing', 'Sentiment Analysis', 'Knowledge Base'],
      tags: ['AI', 'Customer Support', 'Chatbots', 'Automation'],
      isFeatured: false,
      isNew: false,
      vendor: 'Zion Tech Group';
}
  ];
  const filteredProducts = marketplaceProducts.filter(product => {;
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
});
  return (;
    <div className="min-h-screen bg-zion-slate-dark">;
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker py-16">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center max-w-4xl mx-auto">;
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Technology Marketplace;
            </h1>;
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">;
              Discover, purchase, and deploy cutting-edge technology solutions from our curated marketplace. ;
              All products are enterprise-ready and backed by our support team.;
            </p>;
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">;
              <div className="relative">;
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search products, solutions, or technologies...";
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent";
                />;
              </div>;
            </div>;

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">50+</div>;
                <div className="text-sm text-zion-slate-light">Products</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">10K+</div>;
                <div className="text-sm text-zion-slate-light">Downloads</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">4.8★</div>;
                <div className="text-sm text-zion-slate-light">Average Rating</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">24/7</div>;
                <div className="text-sm text-zion-slate-light">Support</div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Categories Filter */}
      <section className="py-8 bg-zion-slate-darker border-b border-zion-purple/20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex flex-wrap gap-4 justify-center">;
            {categories.map((category) => (;
              <button;
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${;
                  selectedCategory === category.id;
                    ? 'bg-zion-cyan text-white';
                    : 'bg-zion-slate-dark text-zion-slate-light hover:bg-zion-purple/20 hover:text-white';
}`}
              >;
                <category.icon className="w-4 h-4" />;
                <span>{category.name}</span>;
              </button>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Products Grid */}
      <section className="py-16 bg-zion-slate-dark">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex items-center justify-between mb-8">;
            <h2 className="text-2xl font-bold text-white">;
              {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>;
            <div className="flex items-center space-x-4">;
              <span className="text-zion-slate-light">;
                {filteredProducts.length} products found;
              </span>;
              <button className="flex items-center space-x-2 text-zion-slate-light hover:text-white transition-colors">;
                <Filter className="w-4 h-4" />;
                <span>Filter</span>;
              </button>;
            </div>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {filteredProducts.map((product) => (;
              <div key={product.id} className="bg-zion-slate-darker border border-zion-purple/20 rounded-lg overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 group">;
                {/* Product Image/Icon */}
                <div className="relative p-6 bg-gradient-to-br from-zion-blue-dark to-zion-slate-darker">;
                  <div className="text-6xl text-center mb-4">{product.image}</div>;
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">;
                    {product.isFeatured && (;
                      <span className="bg-zion-cyan text-white text-xs px-2 py-1 rounded-full">;
                        Featured;
                      </span>;
                    )}
                    {product.isNew && (;
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">;
                        New;
                      </span>;
                    )}
                  </div>;

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2">;
                    <button className="p-2 bg-zion-slate-dark/80 rounded-full hover:bg-zion-slate-dark transition-colors">;
                      <Heart className="w-4 h-4 text-zion-slate-light hover:text-red-500" />;
                    </button>;
                    <button className="p-2 bg-zion-slate-dark/80 rounded-full hover:bg-zion-slate-dark transition-colors">;
                      <Eye className="w-4 h-4 text-zion-slate-light hover:text-zion-cyan" />;
                    </button>;
                  </div>;
                </div>;

                {/* Product Info */}
                <div className="p-6">;
                  <div className="flex items-center justify-between mb-2">;
                    <span className="text-xs text-zion-cyan bg-zion-blue-dark px-2 py-1 rounded">;
                      {categories.find(c => c.id === product.category)?.name}
                    </span>;
                    <div className="flex items-center space-x-1">;
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />;
                      <span className="text-sm text-zion-slate-light">{product.rating}</span>;
                      <span className="text-xs text-zion-slate-light">({product.reviews})</span>;
                    </div>;
                  </div>;

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">;
                    {product.title}
                  </h3>;
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">;
                    {product.description}
                  </p>;

                  {/* Features */}
                  <div className="mb-4">;
                    <div className="flex flex-wrap gap-1">;
                      {product.features.slice(0, 3).map((feature, index) => (;
                        <span key={index} className="text-xs bg-zion-blue-dark text-zion-cyan px-2 py-1 rounded">;
                          {feature}
                        </span>;
                      ))}
                      {product.features.length > 3 && (;
                        <span className="text-xs text-zion-slate-light">;
                          +{product.features.length - 3} more;
                        </span>;
                      )}
                    </div>;
                  </div>;

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-xs text-zion-slate-light">;
                    <div className="flex items-center space-x-1">;
                      <Download className="w-3 h-3" />;
                      <span>{product.downloads.toLocaleString()}</span>;
                    </div>;
                    <div className="flex items-center space-x-1">;
                      <Users className="w-3 h-3" />;
                      <span>{product.reviews} reviews</span>;
                    </div>;
                  </div>;

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">;
                    <div>;
                      <span className="text-2xl font-bold text-white">{product.price}</span>;
                      {product.originalPrice && (;
                        <span className="text-sm text-zion-slate-light line-through ml-2">;
                          {product.originalPrice}
                        </span>;
                      )}
                    </div>;
                    <div className="text-xs text-zion-slate-light">;
                      by {product.vendor}
                    </div>;
                  </div>;

                  {/* Actions */}
                  <div className="flex space-x-2">;
                    <button className="flex-1 bg-zion-cyan text-white py-2 px-4 rounded-lg hover:bg-zion-cyan-light transition-colors flex items-center justify-center space-x-2">;
                      <ShoppingCart className="w-4 h-4" />;
                      <span>Add to Cart</span>;
                    </button>;
                    <button className="px-4 py-2 border border-zion-purple/30 text-zion-slate-light rounded-lg hover:border-zion-cyan hover:text-zion-cyan transition-colors">;
                      <Play className="w-4 h-4" />;
                    </button>;
                  </div>;
                </div>;
              </div>;
            ))}
          </div>;

          {filteredProducts.length === 0 && (;
            <div className="text-center py-12">;
              <div className="text-6xl mb-4">🔍</div>;
              <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>;
              <p className="text-zion-slate-light mb-4">;
                Try adjusting your search terms or browse different categories.;
              </p>;
              <button;
                onClick={() => {;
                  setSearchTerm('');
                  setSelectedCategory('all');
}}
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors">;
                Clear filters;
              </button>;
            </div>;
          )}
        </div>;
      </section>;

      {/* Featured Section */}
      <section className="py-16 bg-zion-slate-darker">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Why Choose Our Marketplace?;
            </h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
              Enterprise-grade solutions with comprehensive support and guaranteed quality;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Shield className="w-8 h-8 text-zion-cyan" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Ready</h3>;
              <p className="text-zion-slate-light">;
                All products are tested, secure, and ready for enterprise deployment with full compliance support.;
              </p>;
            </div>;

            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Award className="w-8 h-8 text-zion-cyan" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Quality Guaranteed</h3>;
              <p className="text-zion-slate-light">;
                Every product is vetted by our technical team and comes with a satisfaction guarantee.;
              </p>;
            </div>;

            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Users className="w-8 h-8 text-zion-cyan" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>;
              <p className="text-zion-slate-light">;
                Get dedicated support from our technical experts to help you implement and optimize solutions.;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-blue">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
            Can't Find What You're Looking For?;
          </h2>;
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">;
            Our team can help you find the perfect solution or create a custom solution tailored to your needs.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <Link;
              to="/contact";
              className="bg-white text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors">;
              Contact Our Experts;
            </Link>;
            <Link;
              to="/request-quote";
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-cyan transition-colors">;
              Request Custom Solution;
            </Link>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
}

export default MarketplacePage;