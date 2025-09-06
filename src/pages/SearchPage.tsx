<<<<<<< HEAD
<<<<<<< HEAD
  const pageKey = `search-${routeKey}-${router.asPath}`;

=======
import { useEffect, useState } from "react";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
import { useRouter } from 'next/router';
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { SearchSuggestion } from "@/types/search";
import {logErrorToProduction} from '@/utils/productionLogger';
import {
<<<<<<< HEAD
  Tabs;
  TabsContent;
  TabsList;
  TabsTrigger} from "@/components/ui/tabs";
import { Loader2 } from 'lucide-react'

=======
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger} from "@/components/ui/tabs",
import { Loader2 } from 'lucide-react';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
interface SearchResult {
  id: string,
  type: "product" | "service" | "talent" | "blog" | "doc",
  title: string,
  description: string
}

function highlight(text: string, term: string) {
  if (!term) return text;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i,) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-200 text-black">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function SearchPage() {
  const router = useRouterReady(), // Use our custom hook
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const suggestions: SearchSuggestion[] = generateSearchSuggestions(),
  // Force re-render and reset state when route changes
<<<<<<< HEAD
  const routeKey = useRouteChange(() => {
    setResults([]);
=======
  const routeKey = useRouteChange((,) => {
    setResults([]),
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    setLoading(false)
  });

  const productResults = results.filter(
    r => r.type === 'product' || r.type === 'service'
  );
  const talentResults = results.filter(r => r.type === 'talent');
  const docResults = results.filter(r => r.type === 'doc');
  const blogResults = results.filter(r => r.type === 'blog');
  const marketplaceResults = [...productResults, ...talentResults];

  // Sync query with URL parameter changes
<<<<<<< HEAD
  useEffect(() => {
    if (!router.isReady) return;
=======
  useEffect((,) => {
    if (!router.isReady) return,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    
    const urlQuery = (router.query.q as string) || "";
    if (urlQuery !== query) {
      setQuery(urlQuery)
    }
  }, [router.isReady, router.query.q]), // Fixed dependency array

  // Fetch results when query changes
<<<<<<< HEAD
  useEffect(() => {
    if (!router.isReady) return;
=======
  useEffect((,) => {
    if (!router.isReady) return,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    
    if (query.trim()) {
      fetchResults(query.trim())
    } else {
      setResults([])
    }
  }, [router.isReady, query]), // Fixed dependency array

  const fetchResults = async (term: string,) => {
    if (!term.trim()) {
      setResults([]);
      return
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/search?query=${encodeURIComponent(term)}`);
      const data = await res.json();
      if (data && data.results && Array.isArray(data.results)) {
        setResults(data.results)
      } else {
        setResults([]);
        logErrorToProduction('Search API response structure is not as expected:', { data: data })
      }
    } catch (error) {
      logErrorToProduction('Search failed:', { data: error }),
      setResults([])
    } finally {
      setLoading(false)
    }
  };

<<<<<<< HEAD
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
=======
  const handleSubmit = (e: React.FormEvent,) => {
    e.preventDefault(),
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  };

  // Add key prop to force re-render when route changes
  const pageKey = `search-${routeKey}-${router.asPath}`;

  return (
    <div key={pageKey}>
      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="mb-6">
          <EnhancedSearchInput
<<<<<<< HEAD
            value={query}
            onChange={setQuery}
            onSelectSuggestion={(suggestion) => {
              const searchTerm = suggestion.text.trim();
              setQuery(searchTerm);
=======
            value = {query,}
            onChange = {setQuery,}
            onSelectSuggestion={(suggestion,) => {
              const searchTerm = suggestion.text.trim(),
              setQuery(searchTerm),
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
              router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
            }}
            searchSuggestions = {suggestions,}
            placeholder="Search talent, jobs, and projects..."
          />
        </form>

        {loading && (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
          </div>
        )}
        {!loading && marketplaceResults.length === 0 && blogResults.length > 0 && (
          <div>
            <p className="text-zion-slate-light mb-2">No marketplace results found. Related blog posts:</p>
            <div className="space-y-4">
              {blogResults.map(r => (
                <div key={`blog-${r.id}`} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4">
                  <h3 className="text-lg font-bold text-white">{highlight(r.title, query)}</h3>
                  <p className="text-zion-slate-light">{highlight(r.description, query)}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {!loading && marketplaceResults.length === 0 && blogResults.length === 0 && query && (
          <p className="text-zion-slate-light">No results found for "{query}".</p>
        )}
        {!loading && marketplaceResults.length > 0 && (
          <Tabs defaultValue="products" className="space-y-4">
            <TabsList className="mb-4">
              <TabsTrigger value="products">
                Products ({productResults.length})
              </TabsTrigger>
              <TabsTrigger value="talent">
                Talent ({talentResults.length})
              </TabsTrigger>
              <TabsTrigger value="docs">
                Docs ({docResults.length})
              </TabsTrigger>
              <TabsTrigger value="blog">
                Blog ({blogResults.length})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="products" className="space-y-4">
              {results
                .filter((r,) => r.type === "product" || r.type === "service")
                .map((r,) => (
                  <div
                    key={`${r.type}-${r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
                  >
                    <h3 className="text-lg font-bold text-white">
                      {highlight(r.title, query)}
                    </h3>
                    <p className="text-zion-slate-light">
                      {highlight(r.description, query)}
                    </p>
                  </div>
                ))}
            </TabsContent>
            <TabsContent value="talent" className="space-y-4">
              {results
                .filter((r,) => r.type === "talent")
                .map((r,) => (
                  <div
                    key={`talent-${r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
                  >
                    <h3 className="text-lg font-bold text-white">
                      {highlight(r.title, query)}
                    </h3>
                    <p className="text-zion-slate-light">
                      {highlight(r.description, query)}
                    </p>
                  </div>
                ))}
            </TabsContent>
            <TabsContent value="docs" className="space-y-4">
              {results
                .filter((r,) => r.type === "doc")
                .map((r,) => (
                  <div
                    key={`doc-${r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
                  >
                    <h3 className="text-lg font-bold text-white">
                      {highlight(r.title, query)}
                    </h3>
                    <p className="text-zion-slate-light">
                      {highlight(r.description, query)}
                    </p>
                  </div>
                ))}
            </TabsContent>
            <TabsContent value="blog" className="space-y-4">
              {results
                .filter((r,) => r.type === "blog")
                .map((r,) => (
                  <div
                    key={`blog-${r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
                  >
                    <h3 className="text-lg font-bold text-white">
                      {highlight(r.title, query)}
                    </h3>
                    <p className="text-zion-slate-light">
                      {highlight(r.description, query)}
                    </p>
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  );
  setQuery (urlQuery) ;

}, [router.isReady, router.query.q]), //Fixed dependency array //Fetch results when query changes useEffect ( () => {;
  if (!router.isReady) return;
if (query.trim () ) {;
  fetchResults (query.trim () ) ;
}else {;
  setResults ([]) ;

}, [router.isReady, query]), //Fixed dependency array const fetchResults = async (term: string) => {;
  if (!term.trim () ) {;
  setResults ([]);
return ;
}setLoading (true);
try {;
  const res = await fetch (`/api/search?query=$ {;
  encodeURIComponent (term) ;
}`);
const data = await res.json ();
if (data && data.results && Array.isArray (data.results) ) {;
  setResults (data.results) ;
}else {;
  setResults ([]);';
logErrorToProduction ('Search API response structure is not as expected:', {;
  data: data ;
}) ;
=======
import { Link, useSearchParams  } from 'react-router-dom';
export default function Page() {;
    {;
      id: 'ai - sales',
      title: 'AI Sales Copilot',
      description: 'Intelligent sales optimization platform that enhances sales performance through AI - driven insights, lead scoring, and automated follow-up sequences.',
      url: '/services / ai - sales - copilot',
      type: 'service',
      category: 'AI Services',
      tags: ['AI', 'Sales', 'CRM', 'Automation', 'Lead Generation'],
      relevance: 0.89,
      lastUpdated: '2024 - 11 - 25',
      icon: Users;
},

    // Cloud Services;
    {;
      id: 'cloud - devops',
      title: 'Cloud DevOps Platform',
      description: 'Comprehensive cloud DevOps solution that automates infrastructure deployment, scaling, and management across multiple cloud providers.',
      url: '/services / cloud - devops',
      type: 'service',
      category: 'Cloud & Infrastructure',
      tags: ['Cloud', 'DevOps', 'Automation', 'Infrastructure', 'AWS', 'Azure'],
      relevance: 0.87,
      lastUpdated: '2024 - 11 - 20',
      icon: Cloud;
},
    {;
      id: 'it - infrastructure',
      title: 'IT Infrastructure Management',
      description: 'Enterprise - grade IT infrastructure solutions including server management, network optimization, and disaster recovery planning.',
      url: '/services / it - infrastructure',
      type: 'service',
      category: 'Cloud & Infrastructure',
      tags: ['Infrastructure', 'IT', 'Enterprise', 'Networking', 'Security'],
      relevance: 0.84,
      lastUpdated: '2024 - 11 - 18',
      icon: Server;
},

    // Security Services;
    {;
      id: 'ai - cybersecurity',
      title: 'AI Cybersecurity Platform',
      description: 'Next - generation cybersecurity solution powered by artificial intelligence for advanced threat detection, prevention, and response.',
      url: '/services / ai - cybersecurity - platform',
      type: 'service',
      category: 'Security & Compliance',
      tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Security', 'Compliance'],
      relevance: 0.91,
      lastUpdated: '2024 - 11 - 22',
      icon: Shield,
      featured: true;
},
    {;
      id: 'zero - trust',
      title: 'Zero Trust Network Access',
      description: 'Modern security architecture that implements zero - trust principles for enhanced network security and access control.',
      url: '/services / zero - trust - network - access',
      type: 'service',
      category: 'Security & Compliance',
      tags: ['Zero Trust', 'Security', 'Network', 'Access Control', 'Compliance'],
      relevance: 0.86,
      lastUpdated: '2024 - 11 - 15',
      icon: Lock;
},

    // Quantum Computing;
    {;
      id: 'quantum - computing',
      title: 'Quantum Computing Solutions',
      description: 'Cutting - edge quantum computing services for optimization problems, cryptography, and scientific simulations.',
      url: '/services / quantum - computing',
      type: 'service',
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Optimization', 'Cryptography', 'AI', 'Research'],
      relevance: 0.88,
      lastUpdated: '2024 - 11 - 10',
      icon: Atom;
},

    // Blog Posts;
    {;
      id: 'ai - trends - 2024',
      title: 'AI Trends to Watch in 2024',
      description: 'Explore the latest artificial intelligence trends that will shape the technology landscape in 2024 and beyond.',
      url: '/blog / ai - trends - 2024',
      type: 'blog',
      category: 'AI & Technology',
      tags: ['AI', 'Trends', 'Technology', '2024', 'Innovation'],
      relevance: 0.82,
      lastUpdated: '2024 - 12 - 01',
      icon: BookOpen;
},
    {;
      id: 'cloud - migration - guide',
      title: 'Complete Guide to Cloud Migration',
      description: 'A comprehensive guide to migrating your infrastructure to the cloud, including best practices and common pitfalls.',
      url: '/blog / cloud - migration - guide',
      type: 'blog',
      category: 'Cloud & Infrastructure',
      tags: ['Cloud Migration', 'Guide', 'Best Practices', 'Infrastructure'],
      relevance: 0.79,
      lastUpdated: '2024 - 11 - 28',
      icon: Cloud;
},

    // Case Studies;
    {;
      id: 'healthcare - ai - case - study',
      title: 'AI Transformation in Healthcare',
      description: 'How a leading healthcare provider leveraged AI to improve patient outcomes and operational efficiency.',
      url: '/case - studies / healthcare - ai - transformation',
      type: 'case - study',
      category: 'Healthcare',
      tags: ['AI', 'Healthcare', 'Case Study', 'Transformation', 'Patient Care'],
      relevance: 0.85,
      lastUpdated: '2024 - 11 - 20',
      icon: FileText;
}
  ];
  const filterOptions = [{ id: 'ai - services', name: 'AI Services', icon: Brain, count: 0 },
    { id: 'cloud - infrastructure', name: 'Cloud & Infrastructure', icon: Cloud, count: 0 },
    { id: 'security', name: 'Security & Compliance', icon: Shield, count: 0 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 0 },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Network, count: 0 },
    { id: 'blog', name: 'Blog Posts', icon: BookOpen, count: 0 },
    { id: 'case - studies', name: 'Case Studies', icon: FileText, count: 0 },
    { id: 'documentation', name: 'Documentation', icon: Code, count: 0 }
  ];
  useEffect(() => {
  // TODO: Add dependencies if needed;
}, []);
    if(searchQuery) {;
      performSearch () ;
}
  }, [searchQuery, selectedFilters, sortBy]) ;
  const performSearch = async () => {;
    setIsSearching(true) ;
    // Simulate API call delay;
    await new Promise(resolve => setTimeout (resolve, 800) ) ;
    let filtered = mockSearchResults.filter(result => {;
      const matchesQuery = result.title.toLowerCase () .includes(searchQuery.toLowerCase () ) ||;
                          result.description.toLowerCase () .includes(searchQuery.toLowerCase () ) ||;
                          result.tags.some(tag => tag.toLowerCase () .includes(searchQuery.toLowerCase () ) ) ;
      const matchesFilters = selectedFilters.size === 0 ||;
                           selectedFilters.has(result.category.toLowerCase () .replace(/\s+/g, '-') ) ||;
                           selectedFilters.has(result.type) ;
      return matchesQuery && matchesFilters;
}) ;
    // Sort results;
    filtered.sort((a, b) => {;
      switch(sortBy) {;
        case 'date':;
          return new Date(b.lastUpdated) .getTime () - new Date(a.lastUpdated) .getTime () ;
        case 'popularity':;
          return b.relevance - a.relevance;
        default:;
          return b.relevance - a.relevance;
}
    }) ;
    setSearchResults(filtered) ;
    setIsSearching(false) ;
};
  const toggleFilter = (filterType: keyof typeof activeFilters, value: string) => {;
    setActiveFilters(prev => ({;
      ...prev,
      [filterType]: prev[filterType].includes (value) ? prev[filterType].filter(v => v !== value) : [...prev[filterType], value];
}) ) ;
};
  const clearAllFilters = () => {;
    setActiveFilters({;
      type: [],
      category: [],
      location: [],
      priceRange: [],
      rating: [];
}) ;
};
  // Handle search;
  const handleSearch = useCallback((e: React.FormEvent) => {;
    e.preventDefault () ;
    if(searchQuery.trim () ) {;
      setSearchParams({ q: searchQuery.trim () }) ;
      setIsSearching(true) ;
      setTimeout(() => setIsSearching(false) , 1000) ;
}
  };
  const toggleFilter = (filterId: string) => {;
    const newFilters = new Set(selectedFilters) ;
    if(newFilters.has (filterId) ) {;
      newFilters.delete(filterId) ;
} else {;
      newFilters.add(filterId) ;
}
    setSelectedFilters(newFilters) ;
};
  // Clear all filters;
  const clearFilters = () => {;
    setSelectedCategory('all') ;
    setSelectedTags([]) ;
    setSearchQuery('') ;
    setSearchParams({}) ;
};
  const getResultIcon = (type: string) => {;
    switch(type) {;
      case 'service': return Zap;
      case 'page': return FileText;
      case 'blog': return BookOpen;
      case 'case - study': return FileText;
      case 'documentation': return Code;
      default: return FileText;
}
  };
  const getResultColor = (type: string) => {;
    switch(type) {;
      case 'service': return 'from - blue - 500 to - indigo - 500';
      case 'blog': return 'from - green - 500 to - emerald - 500';
      case 'case - study': return 'from - purple - 500 to - pink - 500';
      case 'documentation': return 'from - orange - 500 to - red - 500';
      default: return 'from - gray - 500 to - slate - 500';
}
  };
  // Calculate filter counts;
  filterOptions.forEach(filter => {;
    filter.count = mockSearchResults.filter (result =>;
      result.category.toLowerCase () .replace(/\s+/g, '-') === filter.id ||;
      result.type === filter.id) .length;
}) ;
  return (<div  className="min - h-screen bg-gradient - to - br from - slate - 50 via - blue - 50 to - indigo -50">;
      {/* Header */}
      <div  className="bg-white border-b border-gray -200">;
        <div  className="max - w-7xl mx - auto px-4 sm:px-6 lg:px-8 py-8">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center">;
            <h1 className="text-3xl font - bold text-gray - 900 mb-4">Search Zion Tech Group</h1>;
            <p className="text-gray - 600 max - w-2xl mx -auto">;
              Find services, documentation, case studies, and insights across our comprehensive technology portfolio.</p>;
          </motion.div>;
        </div>;
      </div>;
>>>>>>> origin/automation-fixes

}catch (error) {';
  logErrorToProduction ('Search failed:', {;
  data: error ;
});
setResults ([]) ;
}finally {;
  setLoading (false) ;

};
const handleSubmit = (e: React.FormEvent) => {;
  e.preventDefault ();
router.push (`/search?q=$ {;
  encodeURIComponent (query.trim () ) ;
}`) ;

<<<<<<< HEAD
};
//Add key prop to force re-render when route changes </div>) ;
}{;
  !loading && marketplaceResults.length === 0 && blogResults.length > 0 && (<div> <p className="text-zion-slate-light mb-2" >No marketplace results found. Related blog posts:</p> <div className="space-y-4" > {;
  blogResults.map (r => (</div>) ) ;
}</div> </div>) ;
}</p> </div>) ) ;
}</TabsContent> <div key= {;
  `talent-$ {;
  r.id ;
}` ";
}className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4" > </p> </div>) ) ;
}</TabsContent> <div key= {;
  `doc-$ {;
  r.id ;
}` ";
}className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4" > </p> </div>) ) ;
}</TabsContent> <div key= {;
  `blog-$ {;
  r.id ;
}` ";
}className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4" > </p> </div>) ) ;
}</TabsContent> </Tabs>) ;
}</main> </div>) ;
}'"
=======
  )
=======
              {/* Sort Options */}
              <div  className="mb-6">;
                <label className="block text-sm font - medium text-gray - 700 mb-2">Sort By</label>;
                <select;
                  value={sortBy}
                  onChange={ (e) => setSortBy(e.target.value as any) }
                  className="w-full px-3 py-2 border border-gray - 300 rounded-lg focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border-blue -500">;
                  <option value="relevance">Relevance</option>;
                  <option value="date">Date</option>;
                  <option value="popularity">Popularity</option>;
                </select>;
              </div>;

              {/* Filter Options */}
              <div  className="space - y-3">;
                {filterOptions.map(filter => (<button     key={filter.id}
                    onClick={ () => toggleFilter(filter.id) }
                    className={`w-full flex items - center justify - between p - 3 rounded-lg transition - colors ${selectedFilters.has(filter.id) ? 'bg-blue - 50 border border-blue - 200';
                        : 'hover:bg-gray - 50';
}`}
                  >;
                    <div  className="flex items - center space - x-3">;
                      <filter.icon className="h-5 w-5 text-gray -600" />;
                      <span className="text-sm font - medium text-gray -700">{filter.name}</span>;
                    </div>;
                    <span className="text-sm text-gray -500">{filter.count}</span>;
                  </button>) ) }
              </div>;
            </div>;
          </div>;
        </motion.div>;

        {/* Search Results */}
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max - w-6xl mx -auto">;
          {/* Results Count */}
          <div  className="mb-6">;
            <p className="text-slate -300">;
              {searchQuery ? `Found ${filteredResults.length} results for "${searchQuery}"` : `Showing ${filteredResults.length} items`}
            </p>;
            <div className="grid md:grid-cols-2 gap-8 mb-12">;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Professional Solutions</li>;
                  <li>• Expert Implementation</li>;
                  <li>• 24/7 Support</li>;
                  <li>• Custom Development</li>;
                </ul>;
              </div>;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Industry Expertise</li>;
                  <li>• Proven Results</li>;
                  <li>• Scalable Solutions</li>;
                  <li>• Competitive Pricing</li>;
                </ul>;
              </div>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">;
                View Pricing;
              </Link>;
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">;
                Contact Us;
              </Link>;
            </div>;
    </>;
  );
>>>>>>> origin/automation-fixes
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
