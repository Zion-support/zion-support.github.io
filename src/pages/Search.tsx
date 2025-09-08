
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


import { motion } from 'framer-motion'} from 'lucide-react';
import { SEO } from '../components/SEO';


const Search: React.FC = () => {}
  const;const;const [searchQuery, setSearchQuery] = useState(&apos;&apos;);&apos;&apos;
  const [activeCategory, setActiveCategory] = useState(&apos;all&apos;);&apos;
  const [sortBy, setSortBy] = useState(&apos;relevance&apos;);&apos;
  const [results, setResults] = useState<;<;<any[]>([]);

  const [loading, setLoading] = useState(false);

  const categories = [

  ];



      description: 'Advanced analytics and business intelligence solution powered by machine learning algorithms.', type: 'services',
      price: '$5, 000/month',
      rating: 4.8, reviews: 127,
      location: 'Remote', company: 'Zion Tech Group',
      tags: ['AI', 'Analytics', 'Business Intelligence', 'Machine Learning'], featured: true,
      date: '2024-12-01'
    }, { id: 2,
      title: 'Senior Full-Stack Developer', description: 'Experienced developer specializing in React, Node.js, and cloud technologies.',
      type: 'talent', price: '$120/hour',
      rating: 4.9, reviews: 89,
      location: 'Remote', company: 'Zion Tech Group',
      tags: ['React', 'Node.js', 'Full-Stack', 'Cloud'], featured: false,
      date: '2024-11-28'
    }, { id: 3,
      title: 'Cloud Infrastructure Setup', description: 'Complete cloud infrastructure design and implementation for enterprise applications.',
      type: 'services', price: '$15,000', rating: 4.7,
      reviews: 203, location: 'On-site',
      company: 'Zion Tech Group', tags: ['Cloud', 'Infrastructure', 'AWS', 'Azure'], featured: true,
      date: '2024-11-25'
    }, { id: 4,
      title: 'High-Performance Computing Cluster', description: 'Enterprise-grade computing cluster for data processing and machine learning workloads.',
      type: 'equipment', price: '$50,000', rating: 4.6,
      reviews: 45, location: 'On-site',
      company: 'Zion Tech Group', tags: ['HPC', 'Computing', 'Data Processing', 'ML'], featured: false,
      date: '2024-11-20'


    }
  ];

  useEffect(() => {
    if: (searchQuery) {
      performSearch()}
  }, [searchQuery, activeCategory, sortBy]);&apos;

    // Set popular searches
    setPopularSearches([
      'AI solutions',
      'Cloud migration',
      'Cybersecurity',
      'Data analytics',
      'Machine learning',
      'DevOps services',
      'Green IT',
      'Digital transformation'
    ]);
  }, []);

  const performSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    


      return: matchesQuery && matchesCategory});

    // Sort: results
    filteredResults.sort((a, b) => {
      switch (sortBy) {


      }
    });

    setResults(filteredResults);
    setLoading(false)};&apos;&apos;

  const: handleSearch = (e: React.FormEvent) =>  {;
    e.preventDefault();
    if: (searchQuery.trim()) {
      performSearch()}
  };&quot;

  const getTypeLabel = (type: string) => {
    switch (type) {

    }

    <>
      <SEO 

      />

      

              </h1>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Find the perfect services, talent, equipment, and companies for your technology needs.&quot;

              </p>
            </motion.div>

            {/* Search Form */}

                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                >
                  {category.icon}
                  {category.name}
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.id === 'all' ? results.length: anyresults.filter(r   => r.type === category.id).length}
                  </span>
                </button>

              </div>
            </form>
          </div>
        </div>
      </section>

        {/* Filters and Results */}

                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort: Options */}
                  <div>

                        >
                          {option.name}&apos;
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>


                  </div>
                ) : results.length > 0 ? (
                  <div className=&quot;space-y-6&quot;>
                    {results.map((result, index) => (&quot}
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
                            {result.tags.slice(0, 3).map((tag: string, idx: number) => (&quot}
                              <span key={idx} className=&quot;px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded&quot;>
                                {tag}&quot;
                              </span>
                            ))}
                          </div>

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

                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
</>

  )};







