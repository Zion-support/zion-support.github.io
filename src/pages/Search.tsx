<<<<<<< HEAD
import React, { useState, useEffect } from &apos;react';
import { motion } from &apos;framer-motion';
import { 
  Search as SearchIcon, 
  Filter, 
  Server, 
  Users, 
  Building,
  Star,
  MapPin,
  Clock,
  DollarSign,
  ArrowUpDown,
  Calendar,
  Eye,
  Bookmark,
  Share2
} from &apos;lucide-react';
import { SEO } from &apos;../components/SEO';&apos;&apos;
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';""
=======
import React, { useState, useEffect } from 'react
>>>>>>> main
import { motion } from 'framer-motion';
import { 
  Search as SearchIcon, Filter, 
  Server, Users, 
  Building, Star,
  MapPin, Clock,
  DollarSign, ArrowUpDown,
  Calendar, Eye,
<<<<<<< HEAD
  Bookmark, Share2;", "
} from 'lucide-react';""
import { SEO } from '../components/SEO';""
=======
<<<<<<< HEAD
  Bookmark, Share2
} from 'lucide-react';
import { SEO } from '../components/SEO';
>>>>>>> main

const Search: React.FC = () => {}
  const;const;const [searchQuery, setSearchQuery] = useState(&apos;&apos;);&apos;&apos;
  const [activeCategory, setActiveCategory] = useState(&apos;all&apos;);&apos;
  const [sortBy, setSortBy] = useState(&apos;relevance&apos;);&apos;
  const [results, setResults] = useState<;<;<any[]>([]);
  const [loading, setLoading] = useState(false);

  const categories = [
<<<<<<< HEAD
    { id: &apos;all&apos;, name: &apos;All Categories&apos;, count: 0 },
    { id: &apos;services&apos;, name: &apos;Services&apos;, count: 0 },
    { id: &apos;talent&apos;, name: &apos;Talent&apos;, count: 0 },
    { id: &apos;equipment&apos;, name: &apos;Equipment&apos;, count: 0 },
    { id: &apos;companies&apos;, name: &apos;Companies&apos;, count: 0 }
  ];&apos;
=======
    { id: 'all', name: 'All Categories', count: 0 }, { id: 'services', name: 'Services', count: 0 },
    { id: 'talent', name: 'Talent', count: 0 }, { id: 'equipment', name: 'Equipment', count: 0 },
    { id: 'companies', name: 'Companies', count: 0 }
  ];
>>>>>>> main

  const sortOptions = [
    { id: &apos;relevance&apos;, name: &apos;Relevance&apos; },
    { id: &apos;newest&apos;, name: &apos;Newest&apos; },
    { id: &apos;rating&apos;, name: &apos;Highest Rated&apos; },
    { id: &apos;price-low&apos;, name: &apos;Pric,e: Low to High&apos; },
    { id: &apos;price-high&apos;, name: &apos;Pric,e: High to Low&apos; }
  ];&apos;

  const mockResults = [
    {
<<<<<<< HEAD
      id: 1,
      title: &apos;AI-Powered Business Intelligence Platform&apos;,
      description: &apos;Advanced analytics and business intelligence solution powered by machine learning algorithms.&apos;,
      type: &apos;services&apos;,
      price: &apos;$5,000/month&apos;,
      rating: 4.8,
      reviews: 127,
      location: &apos;Remote&apos;,
      company: &apos;Zion Tech Group&apos;,
      tags: [&apos;AI&apos;, &apos;Analytics&apos;, &apos;Business Intelligence&apos;, &apos;Machine Learning&apos;],
      featured: true,
      date: &apos;2024-12-01&apos;
    },
    {
      id: 2,
      title: &apos;Senior Full-Stack Developer&apos;,
      description: &apos;Experienced developer specializing in React, Node.js, and cloud technologies.&apos;,
      type: &apos;talent&apos;,
      price: &apos;$120/hour&apos;,
      rating: 4.9,
      reviews: 89,
      location: &apos;Remote&apos;,
      company: &apos;Zion Tech Group&apos;,
      tags: [&apos;React&apos;, &apos;Node.js&apos;, &apos;Full-Stack&apos;, &apos;Cloud&apos;],
      featured: false,
      date: &apos;2024-11-28&apos;
    },
    {
      id: 3,
      title: &apos;Cloud Infrastructure Setup&apos;,
      description: &apos;Complete cloud infrastructure design and implementation for enterprise applications.&apos;,
      type: &apos;services&apos;,
      price: &apos;$15,000&apos;,
      rating: 4.7,
      reviews: 203,
      location: &apos;On-site&apos;,
      company: &apos;Zion Tech Group&apos;,
      tags: [&apos;Cloud&apos;, &apos;Infrastructure&apos;, &apos;AWS&apos;, &apos;Azure&apos;],
      featured: true,
      date: &apos;2024-11-25&apos;
    },
    {
      id: 4,
      title: &apos;High-Performance Computing Cluster&apos;,
      description: &apos;Enterprise-grade computing cluster for data processing and machine learning workloads.&apos;,
      type: &apos;equipment&apos;,
      price: &apos;$50,000&apos;,
      rating: 4.6,
      reviews: 45,
      location: &apos;On-site&apos;,
      company: &apos;Zion Tech Group&apos;,
      tags: [&apos;HPC&apos;, &apos;Computing&apos;, &apos;Data Processing&apos;, &apos;ML&apos;],
      featured: false,
      date: &apos;2024-11-20&apos;
=======
      id: 1, title: 'AI-Powered Business Intelligence Platform',
      description: 'Advanced analytics and business intelligence solution powered by machine learning algorithms.', type: 'services',
      price: '$5, 000/month',
      rating: 4.8, reviews: 127,
      location: 'Remote', company: 'Zion Tech Group',
      tags: ['AI', 'Analytics', 'Business Intelligence', 'Machine Learning'], featured: true,
      date: '2024-12-01'
    }, {
      id: 2,
      title: 'Senior Full-Stack Developer', description: 'Experienced developer specializing in React, Node.js, and cloud technologies.',
      type: 'talent', price: '$120/hour',
      rating: 4.9, reviews: 89,
      location: 'Remote', company: 'Zion Tech Group',
      tags: ['React', 'Node.js', 'Full-Stack', 'Cloud'], featured: false,
      date: '2024-11-28'
    }, {
      id: 3,
      title: 'Cloud Infrastructure Setup', description: 'Complete cloud infrastructure design and implementation for enterprise applications.',
      type: 'services', price: '$15,000', rating: 4.7,
      reviews: 203, location: 'On-site',
      company: 'Zion Tech Group', tags: ['Cloud', 'Infrastructure', 'AWS', 'Azure'], featured: true,
      date: '2024-11-25'
    }, {
      id: 4,
      title: 'High-Performance Computing Cluster', description: 'Enterprise-grade computing cluster for data processing and machine learning workloads.',
      type: 'equipment', price: '$50,000', rating: 4.6,
      reviews: 45, location: 'On-site',
      company: 'Zion Tech Group', tags: ['HPC', 'Computing', 'Data Processing', 'ML'], featured: false,
      date: '2024-11-20'
>>>>>>> main
    }
  ];

  useEffect(() => {
    if (searchQuery) {
      performSearch();
    }
  }, [searchQuery, activeCategory, sortBy]);&apos;

  const performSearch = async () => {
    setLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Filter results based on search query and category}
    const filteredResults = mockResults.filter(result => {}
      const;const;const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          result.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = activeCategory === &apos;all&apos; || result.type === activeCategory;

      return matchesQuery && matchesCategory;
    });

    // Sort results
    filteredResults.sort((a, b) => {
      switch (sortBy) {
<<<<<<< HEAD
        case &apos;newest&apos;:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case &apos;rating&apos;:
          return b.rating - a.rating;
        case &apos;price-low&apos;:
          return parseFloat(a.price.replace(/[^0-9.]/g, &apos;&apos;)) - parseFloat(b.price.replace(/[^0-9.]/g, &apos;&apos;));
        case &apos;price-high&apos;:
          return parseFloat(b.price.replace(/[^0-9.]/g, &apos;&apos;)) - parseFloat(a.price.replace(/[^0-9.]/g, &apos;&apos;));
        default:
          return 0;
=======
        case 'newest': return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'rating': return b.rating - a.rating;
        case 'price-low': return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high': return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        default: return 0;
>>>>>>> main
      }
    });

    setResults(filteredResults);
    setLoading(false);
  };&apos;&apos;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch();
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
<<<<<<< HEAD
      case &apos;services&apos;:
        return&apos;}} <;<Server className=&quot;w-5 h-5 text-blue-400&quot; />;
      case &apos;talent&apos;:
        return&apos; <Users className=&quot;w-5 h-5 text-purple-400&quot; />;
      case &apos;equipment&apos;:
        return&apos; <Building className=&quot;w-5 h-5 text-orange-400&quot; />;
      default:
        return&quot; <SearchIcon className=&quot;w-5 h-5 text-gray-400&quot; />;
=======
      case 'services': return <Server className="w-5 h-5 text-blue-400" />;
      case 'talent': return <Users className="w-5 h-5 text-purple-400" />;
      case 'equipment': return <Building className="w-5 h-5 text-orange-400" />;
      default: return <SearchIcon className="w-5 h-5 text-gray-400" />;
>>>>>>> main
    }
  };&quot;

  const getTypeLabel = (type: string) => {
    switch (type) {
<<<<<<< HEAD
      case &apos;services&apos;:
        return &apos;Service';
      case &apos;talent&apos;:
        return &apos;Talent';
      case &apos;equipment&apos;:
        return &apos;Equipment';
      defaul,t:
        return &apos;Unknown';
=======
      case 'services': return 'Service';
      case 'talent': return 'Talent';
      case 'equipment': return 'Equipment';
      default: return 'Unknown';
>>>>>>> main
    }
  };

  return (&apos;&apos;
    <>
      <SEO 
<<<<<<< HEAD
        title=&quot;Search - Zion Tech Group&quot;
        description=&quot;Search for services, talent, equipment, and companies across Zion Tech Group&apos;s comprehensive technology marketplace.&quot;
        keywords=&quot;search, services, talent, equipment, companies, technology marketplace, Zion Tech Group&quot;
      />&quot;
=======
        title="Search - Zion Tech Group"
        description="Search for services, talent, equipment, and companies across Zion Tech Group&apos;s comprehensive technology marketplace."'
        keywords="search, services, talent, equipment, companies, technology marketplace, Zion Tech Group"
      />
>>>>>>> main
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900&quot;>
        {/* Search Header */}&quot;
        <section className=&quot;pt-32 pb-16 px-4&quot;>&quot;"
          <div className=&quot;max-w-7xl mx-auto&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=&quot;text-center mb-8&quot;
            >&quot;
              <h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6&quot;>
                Search Zion Tech Group&quot;
              </h1>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Find the perfect services, talent, equipment, and companies for your technology needs.&quot;
              </p>
            </motion.div>

            {/* Search Form */}
            <form onSubmit={handleSearch} className=&quot;max-w-4xl mx-auto&quot;>&quot;"
              <div className=&quot;relative&quot;>&quot;"
                <SearchIcon className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6&quot; />&quot;
                <input
                  type=&quot;text&quot;
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD
                  placeholder=&quot;Search for services, talent, equipment, companies...&quot;
                  className=&quot;w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg&quot;
                />&quot;
=======
                  placeholder="Search for services, talent, equipment, companies..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
>>>>>>> main
                <button
                  type=&quot;submit&quot;
                  className=&quot;absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-md font-semibold hover:from-blue-600 hove,r:to-purple-600 transition-all duration-300&quot;
                >
                  Search&quot;
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Filters and Results */}
        <section className=&quot;py-8 px-4&quot;>&quot;"
          <div className=&quot;max-w-7xl mx-auto&quot;>&quot;"
            <div className=&quot;grid grid-cols-1 lg:grid-cols-4 gap-8&quot;>
              {/* Filters Sidebar */}&quot;
              <div className=&quot;lg:col-span-1&quot;>&quot;"
                <div className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50&quot;>&quot;"
                  <h3 className=&quot;text-white font-semibold text-lg mb-4 flex items-center gap-2&quot;>&quot;"
                    <Filter className=&quot;w-5 h-5&quot; />
                    Filters&quot;
                  </h3>

                  {/* Categories */}
                  <div className=&quot;mb-6&quot;>&quot;"
                    <h4 className=&quot;text-white font-medium mb-3&quot;>Categories&quot;</h4>
                    <div className=&quot;space-y-2&quot;>
                      {categories.map((category) => (&quot;}
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            activeCategory === category.id
                              ? &apos;bg-blue-500 text-white&apos;
                              : &apos;text-gray-300 hover:bg-slate-700/50&apos;
                          }`}
                        >
                          {category.name}&apos;
                          <span className=&quot;float-right text-xs opacity-75&quot;>({category.count})&quot;</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort Options */}
                  <div>
                    <h4 className=&quot;text-white font-medium mb-3&quot;>Sort By&quot;</h4>
                    <div className=&quot;space-y-2&quot;>
                      {sortOptions.map((option) => (&quot;}
                        <button
                          key={option.id}
                          onClick={() => setSortBy(option.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            sortBy === option.id
                              ? &apos;bg-purple-500 text-white&apos;
                              : &apos;text-gray-300 hover:bg-slate-700/50&apos;
                          }`}
                        >
                          {option.name}&apos;
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
<<<<<<< HEAD
              <div className=&quot;lg:col-span-3&quot;>
                {loading ? (&quot;}
                  <div className=&quot;text-center py-12&quot;>&quot;"
                    <div className=&quot;animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4&quot;>&quot;"</div>
                    <p className=&quot;text-gray-400&quot;>Searching...&quot;</p>
=======
              <div className="lg: col-span-3">
                {loading ? (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-400">Searching...</p>
>>>>>>> main
                  </div>
                ) : results.length > 0 ? (
                  <div className=&quot;space-y-6&quot;>
                    {results.map((result, index) => (&quot;}
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300&quot;
                      >&quot;
                        <div className=&quot;flex items-start justify-between mb-4&quot;>&quot;"
                          <div className=&quot;flex items-center gap-3&quot;>
                            {getTypeIcon(result.type)}&quot;
                            <div>
                              <span className=&quot;inline-block px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded&quot;>
                                {getTypeLabel(result.type)}&quot;
                              </span>
                              {result.featured && (}
                                <span className=&quot;inline-block px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded ml-2&quot;>
                                  Featured&quot;
                                </span>
                              )}
                            </div>
                          </div>
                          <div className=&quot;flex items-center gap-2&quot;>&quot;"
                            <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />&quot;
                            <span className=&quot;text-white text-sm&quot;>{result.rating}&quot;</span>
                            <span className=&quot;text-gray-400 text-sm&quot;>({result.reviews})&quot;</span>
                          </div>
                        </div>

                        <h3 className=&quot;text-white font-semibold text-xl mb-2&quot;>{result.title}&quot;</h3>
                        <p className=&quot;text-gray-300 mb-4&quot;>{result.description}&quot;</p>

                        <div className=&quot;flex items-center gap-4 mb-4 text-sm text-gray-400&quot;>&quot;"
                          <div className=&quot;flex items-center gap-1&quot;>&quot;"
                            <MapPin className=&quot;w-4 h-4&quot; />
                            {result.location}&quot;
                          </div>
                          <div className=&quot;flex items-center gap-1&quot;>&quot;"
                            <DollarSign className=&quot;w-4 h-4&quot; />
                            {result.price}&quot;
                          </div>
                          <div className=&quot;flex items-center gap-1&quot;>&quot;"
                            <Calendar className=&quot;w-4 h-4&quot; />
                            {new Date(result.date).toLocaleDateString()}&quot;
                          </div>
                        </div>

                        <div className=&quot;flex items-center justify-between&quot;>&quot;"
                          <div className=&quot;flex flex-wrap gap-2&quot;>
                            {result.tags.slice(0, 3).map((tag: string, idx: number) => (&quot;}
                              <span key={idx} className=&quot;px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded&quot;>
                                {tag}&quot;
                              </span>
                            ))}
                          </div>
<<<<<<< HEAD
                          <div className=&quot;flex items-center gap-2&quot;>&quot;"
                            <button className=&quot;p-2 text-gray-400 hover:text-white transition-colors&quot;>&quot;"
                              <Bookmark className=&quot;w-4 h-4&quot; />&quot;
=======
                          <div className="flex items-center gap-2">
                            <button className="p-2 text-gray-400 hover: text-white transition-colors">
                              <Bookmark className="w-4 h-4" />
>>>>>>> main
                            </button>
                            <button className=&quot;p-2 text-gray-400 hover:text-white transition-colors&quot;>&quot;"
                              <Share2 className=&quot;w-4 h-4&quot; />&quot;
                            </button>
                            <button className=&quot;px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:from-blue-600 hove,r:to-purple-600 transition-all duration-300&quot;>
                              View Details&quot;
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : searchQuery ? (
                  <div className=&quot;text-center py-12&quot;>&quot;"
                    <SearchIcon className=&quot;w-16 h-16 text-gray-400 mx-auto mb-4&quot; />&quot;
                    <h3 className=&quot;text-white text-xl font-semibold mb-2&quot;>No results found&quot;</h3>
                    <p className=&quot;text-gray-400&quot;>Try adjusting your search terms or filters.&quot;</p>
                  </div>
                ) : (
                  <div className=&quot;text-center py-12&quot;>&quot;"
                    <SearchIcon className=&quot;w-16 h-16 text-gray-400 mx-auto mb-4&quot; />&quot;
                    <h3 className=&quot;text-white text-xl font-semibold mb-2&quot;>Start your search&quot;</h3>
                    <p className=&quot;text-gray-400&quot;>Enter a search term to find services, talent, equipment, and companies.&quot;</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
</>
  );
};

export default Search;
=======
  Bookmark, Share2;",
} from 'lucide-react
import { SEO } from '../components/SEO
>>>>>>> main
>>>>>>> main
