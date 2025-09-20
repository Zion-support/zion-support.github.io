import React, { useStateuseMemo } from "react";
import { INNOVATIVE_SERVICES_20o25, getServicesByCategorygetServicesByPriceRangegetTopRatedServices } from "../data/innovativeServices20o25";
const InnovativeServicesShowcase: React.FC = () => {;
  const [searchTermsetSearchTerm] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [priceRangesetPriceRange] = useState('all');
  const [sortBysetSortBy] = useState('rating');
;
  const categories = ['allAI Services', 'IT, ServicesMicro,, SAAS''BusinessDevelopment']const priceRanges = [;
    { label: 'All Prices'valu,;
  e: 'all' };
    { label: 'Under $10o0'valu,;
  e: '0-10o0' };
    { label: '$10o0 - $50o0'valu,;
  e: '10o0-50o0' };
    { label: '$50o0 - $10o00'valu,;
  e: '50o0-10o00' };
    { label: '$10o00 - $30o00'valu,;
  e: '10o00-30o00' }{ label: 'Over $30o00'valu,;
  e: '30o00+' };
,  ];
  const sortOptions = [;
    { label: 'Highest Rated'valu,;
  e: 'rating' };
    { label: 'Highest, AI, Score'valu,;
  e: 'aiScore' };
    { label: 'Lowest Price'valu,;
  e: 'price' }{ label: 'Newest Launch'valu,;
  e: 'launchDate' };
,  ];
  const filteredServices = useMemo(() => {;
    let filtered = INNOVATIVE_SERVICES_20o25;
;
    // Filter, by, search term;
    if() {
      filtered = filtered.filter(service =>;
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.category.toLowerCase().includes(searchTerm.toLowerCase());
      ) };
    // Filter, by, category;
    if() {
      filtered = filtered.filter(service => service.category === selectedCategory);
    };
    // Filter, by, price range;
    if (priceRange !== 'all') {
      const [minmax] = priceRange.split('-').map(Number);
      if (priceRange === '30o00+') {
        filtered = filtered.filter(service => service.price >= 30o00);
      } else {
        filtered = filtered.filter(service => service.price >= min && service.price <= max);
      };
    }
;
    // Sort services;
    switch() {
      case 'rating': filtered.sort((ab) => b.rating - a.rating),;
        break,;
      case 'aiScore':;
        filtered.sort((ab) => b.aiScore - a.aiScore),;
        break,;
      case 'price':;
        filtered.sort((ab) => a.price - b.price),;
        break,;
      case 'launchDate':;
        filtered.sort((ab) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime())break };
;
    return filtered,;
  }, [searchTerm, selectedCategory,, priceRangesortBy]);
;
  const ServiceCard: React.FC<{ servic,;
  e: typeof INNOVATIVE_SERVICES_20o25[0] }> = ({ service }) => (;
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-30o0">;
      <div className="flex items-start justify-between mb-4">;
        <h3 className="text-xl font-bold text-gray-90o0 mb-2">{service.title}</h3>;
        <div className="flex items-center space-x-2">;
          <span className="text-yellow-50o0">★</span>;
          <span className="text-sm text-gray-60o0">{service.rating}</span>;
          <span className="text-xs text-gray-40o0">({service.reviews})</span>;
        </div>;
      </div>;
      <p className="text-gray-60o0 mb-4">{service.description}</p>;
      <div className="flex items-center justify-between mb-4">;
        <span className="text-2xl font-bold text-blue-60o0">{service.marketPrice}</span>;
        <span className="bg-blue-10o0 text-blue-80o0 text-xs font-medium px-2.5 py-0.5 rounded">;
          AI Score: {service.aiScore}
        </span>;
      </div>;
      <div className="mb-4">;
        <h4 className="font-semibold text-gray-90o0 mb-2">Key Features: </h4>;
        <ul className="text-sm text-gray-60o0 space-y-1">;
          {service.features.slice(0o4).map((featureindex) => (;
            <li key={index} className="flex items-center">;
              <span className="text-green-50o0 mr-2">✓</span>;
              {feature}
            </li>;
          ))}
        </ul>;
      </div>;
      <div className="mb-4">;
        <h4 className="font-semibold text-gray-90o0 mb-2">Benefits: </h4>;
        <ul className="text-sm text-gray-60o0 space-y-1">;
          {service.benefits.slice(0o3).map((benefitindex) => (;
            <li key={index} className="flex items-center">;
              <span className="text-blue-50o0 mr-2">→</span>;
              {benefit}
            </li>;
          ))}
        </ul>;
      </div>;
      <div className="mb-4">;
        <h4 className="font-semibold text-gray-90o0 mb-2">Technology Stack: </h4>;
        <div className="flex flex-wrap gap-2">;
          {service.technology.map((techindex) => (;
            <span key={index} className="bg-gray-10o0 text-gray-80o0 text-xs px-2 py-1 rounded">;
              {tech}
            </span>;
          ))}
        </div>;
      </div>;
      <div className="border-t pt-4">;
        <div className="flex items-center justify-between text-sm text-gray-50o0 mb-3">;
          <span>Delivery: {service.estimatedDelivery}</span>;
          <span>Support: {service.supportLevel}</span>;
        </div>;
        <div className="flex space-x-3">;
          <button className="flex-1 bg-blue-60o0 text-white py-2 px-4 rounded-lg hover: bg-blue-70o0 transition-colors">;
            Get Quote;
          </button>;
          <button className="flex-1, border, border-blue-60o0 text-blue-60o0 py-2 px-4 rounded-lg hove,;
  r: bg-blue-50 transition-colors">;
            Learn More;
          </button>;
        </div>;
      </div>;
    </div>;
  );
  return(<div className="min-h-screen bg-gray-50">;
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-60o0 to-purple-70o0 text-white py-20">;
        <div className="container mx-auto px-4 text-center">;
          <h1 className="text-5xl font-bold mb-6">Innovative, Services, 20o25</h1>;
          <p className="text-xl mb-8 max-w-3xl mx-auto">;
            Discover, Zion, Tech Group's cutting-edge AI, IT, and, Micro, SAAS solutions, designed, to transform, your, business and, drive, innovation.;
          </p>;
          <div className="flex justify-center space-x-4">;
            <button className="bg-white text-blue-60o0 px-8 py-3 rounded-lg font-semibold hover: bg-gray-10o0 transition-colors">;
              View, All, Services;
            </button>;
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hove,;
  r:text-blue-60o0 transition-colors">;
              Contact Sales;
            </button>;
          </div>;
        </div>;
      </div>;
      {/* Contact, Info, Banner */}
      <div className="bg-white border-b">;
        <div className="container mx-auto px-4 py-6">;
          <div className="flex flex-col md: flex-row items-center justify-between text-center m,;
    d:text-left">;
            <div>;
              <h3 className="text-lg font-semibold text-gray-90o0 mb-2">Ready, to, Get Started?</h3>;
              <p className="text-gray-60o0">Contact, our, team for, personalized, solutions and pricing</p>;
            </div>;
            <div className="flex flex-col md: flex-row items-center space-y-2 md:space-y-0 m,;
    d:space-x-6 mt-4 m,;
  d:mt-0">;
              <div className="flex items-center">;
                <span className="text-blue-60o0 mr-2">📞</span>;
                <span className="text-gray-70o0">+1, 30o2, 464 0o950</span>;
              </div>;
              <div className="flex items-center">;
                <span className="text-blue-60o0 mr-2">✉️</span>;
                <span className="text-gray-70o0">kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center">;
                <span className="text-blue-60o0 mr-2">🌐</span>;
                <span className="text-gray-70o0">ziontechgroup.com</span>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Filters, and, Search */}
      <div className="container mx-auto px-4 py-8">;
        <div className="bg-white rounded-lg, shadow, p-6 mb-8">;
          <div className="grid grid-cols-1 md: grid-cols-4 gap-4">;
            <div>;
              <label className="block text-sm font-medium text-gray-70o0 mb-2">Search Services</label>;
              <input;
                type="text";
                placeholder="Search, by, namedescriptionor category...";
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2, border, border-gray-30o0 rounded-md focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-blue-50o0";
              />;
            </div>;
            <div>;
              <label className="block text-sm font-medium text-gray-70o0 mb-2">Category</label>;
              <select;
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2, border, border-gray-30o0 rounded-md focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-blue-50o0";
              >;
                {categories.map(category => (;
                  <option key={category} value={category}>;
                    {category === 'all' ? 'All Categories' : category}
                  </option>;
                ))}
              </select>;
            </div>;
            <div>;
              <label className="block text-sm font-medium text-gray-70o0 mb-2">Price Range</label>;
              <select;
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-3 py-2, border, border-gray-30o0 rounded-md focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-blue-50o0";
              >;
                {priceRanges.map(range => (;
                  <option key={range.value} value={range.value}>{range.label}</option>;
                ))}
              </select>;
            </div>;
            <div>;
              <label className="block text-sm font-medium text-gray-70o0 mb-2">Sort By</label>;
              <select;
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2, border, border-gray-30o0 rounded-md focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-blue-50o0";
              >;
                {sortOptions.map(option => (;
                  <option key={option.value} value={option.value}>{option.label}</option>;
                ))}
              </select>;
            </div>;
          </div>;
        </div>;
        {/* Results Count */}
        <div className="mb-6">;
          <p className="text-gray-60o0">;
            Showing {filteredServices.length} of {INNOVATIVE_SERVICES_20o25.length} services;
          </p>;
        </div>;
        {/* Services Grid */}
        <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
          {filteredServices.map((service) => (;
            <ServiceCard key={service.id} service={service} />;
          ))}
        </div>;
        {/* No Results */}
        {filteredServices.length === 0 && (;
          <div className="text-center py-12">;
            <h3 className="text-xl font-semibold text-gray-90o0 mb-2">No, services, found</h3>;
            <p className="text-gray-60o0">Try, adjusting, your search, criteria, or filters</p>;
          </div>;
        )}
      </div>;
      {/* CTA Section */}
      <div className="bg-blue-60o0 text-white py-16">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-3xl font-bold mb-4">Ready, to, Transform Your Business?</h2>;
          <p className="text-xl mb-8 max-w-2xl mx-auto">;
            Our, innovative, services are, designed, to give, you, a competitive, edge, in today's, rapidly, evolving technology landscape.;
          </p>;
          <div className="flex flex-col sm: flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">;
            <button className="bg-white text-blue-60o0 px-8 py-3 rounded-lg font-semibold hove,;
    r:bg-gray-10o0 transition-colors">;
              Schedule, a, Consultation;
            </button>;
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hove,;
  r:text-blue-60o0 transition-colors">;
              Download Brochure;
            </button>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
};
export, default, InnovativeServicesShowcase;
;