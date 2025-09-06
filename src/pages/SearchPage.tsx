  const pageKey = `search-${routeKey}-${router.asPath}`
import { useRouter } from 'next/router'
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady'
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput"
import { generateSearchSuggestions } from "@/data/marketplaceData"
import { SearchSuggestion } from "@/types/search"
import {logErrorToProduction} from '@/utils/productionLogger'
import {
  Tabs
  TabsContent
  TabsList
  TabsTrigger} from "@/components/ui/tabs"
import { Loader2 } from 'lucide-react'

interface SearchResult {
  id: string,
  type: "product" | "service" | "talent" | "blog" | "doc",
  title: string,
  description: string
}

function highlight(text: string, term: string) {
  if (!term) return text,
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const regex = new RegExp(`(${escaped})`, "gi")
  const parts = text.split(regex)
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
  )
}

export default function SearchPage() {
  const router = useRouterReady(), // Use our custom hook
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false);
  const suggestions: SearchSuggestion[] = generateSearchSuggestions(),;
  // Force re-render and reset state when route changes;
  const routeKey = useRouteChange(() => {;
    setResults([]);    setLoading(false)
  })
  const productResults = results.filter(
    r => r.type === 'product' || r.type === 'service'
  )
  const talentResults = results.filter(r => r.type === 'talent')
  const docResults = results.filter(r => r.type === 'doc')
  const blogResults = results.filter(r => r.type === 'blog')
  const marketplaceResults = [...productResults, ...talentResults]
  // Sync query with URL parameter changes
  useEffect(() => {
    if (!router.isReady) return;
    const urlQuery = (router.query.q as string) || ""
    if (urlQuery !== query) {
      setQuery(urlQuery)
    }
  }, [router.isReady, router.query.q]), // Fixed dependency array

  // Fetch results when query changes
  useEffect(() => {
    if (!router.isReady) return;
    if (query.trim()) {
      fetchResults(query.trim())
    } else {
      setResults([])
    }
  }, [router.isReady, query]), // Fixed dependency array

  const fetchResults = async (term: string,) => {
    if (!term.trim()) {
      setResults([]),
      return;
    }

    setLoading(true)
    try {
      const res = await fetch(`/api/search?query=${encodeURIComponent(term)}`)
      const data = await res.json()
      if (data && data.results && Array.isArray(data.results)) {
        setResults(data.results)
      } else {
        setResults([])
        logErrorToProduction('Search API response structure is not as expected:', { data: data })
      }
    } catch (error) {
      logErrorToProduction('Search failed:', { data: error }),
      setResults([])
    } finally {
      setLoading(false)
    }
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }
  // Add key prop to force re-render when route changes
  const pageKey = `search-${routeKey}-${router.asPath}`
  return (
    <div key={pageKey}>
      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="mb-6">
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            onSelectSuggestion={(suggestion) => {
              const searchTerm = suggestion.text.trim()
              setQuery(searchTerm);              router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
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
  )
  setQuery (urlQuery) 
}, [router.isReady, router.query.q]), //Fixed dependency array //Fetch results when query changes useEffect ( () => {
  if (!router.isReady) return;
if (query.trim () ) {
  fetchResults (query.trim () ) 
}else {
  setResults ([]) 
}, [router.isReady, query]), //Fixed dependency array const fetchResults = async (term: string) => {
  if (!term.trim () ) {
  setResults ([])
return;
}setLoading (true)
try {
  const res = await fetch (`/api/search?query=$ {
  encodeURIComponent (term) 
}`)
const data = await res.json ()
if (data && data.results && Array.isArray (data.results) ) {
  setResults (data.results) 
}else {
  setResults ([]);'
logErrorToProduction ('Search API response structure is not as expected:', {
  data: data 
}) 
}catch (error) {'
  logErrorToProduction ('Search failed:', {
  data: error 
})
setResults ([]) 
}finally {
  setLoading (false) 
}
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault ()
router.push (`/search?q=$ {
  encodeURIComponent (query.trim () ) 
}`) 
}
//Add key prop to force re-render when route changes </div>) 
}{
  !loading && marketplaceResults.length === 0 && blogResults.length > 0 && (<div> <p className="text-zion-slate-light mb-2" >No marketplace results found. Related blog posts:</p> <div className="space-y-4" > {
  blogResults.map (r => (</div>) ) 
}</div> </div>) 
}</p> </div>) ) 
}</TabsContent> <div key= {
  `talent-$ {
  r.id 
}` "
}className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4" > </p> </div>) ) 
}</TabsContent> <div key= {
  `doc-$ {
  r.id 
}` "
}className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4" > </p> </div>) ) 
}</TabsContent> <div key= {
  `blog-$ {
  r.id 
}` "
}className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4" > </p> </div>) ) 
}</TabsContent> </Tabs>) 
}</main> </div>) 
}'"  )
              {/* Sort Options */}
              <div  className="mb-6">
                <label className="block text-sm font - medium text-gray - 700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={ (e) => setSortBy(e.target.value as any) }
                  className="w-full px-3 py-2 border border-gray - 300 rounded-lg focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border-blue -500">
                  <option value="relevance">Relevance</option>
                  <option value="date">Date</option>
                  <option value="popularity">Popularity</option>
                </select>
              </div>
              {/* Filter Options */}
              <div  className="space - y-3">
                {filterOptions.map(filter => (<button     key={filter.id}
                    onClick={ () => toggleFilter(filter.id) }
                    className={`w-full flex items - center justify - between p - 3 rounded-lg transition - colors ${selectedFilters.has(filter.id) ? 'bg-blue - 50 border border-blue - 200'
                        : 'hover:bg-gray - 50'
}`}
                  >
                    <div  className="flex items - center space - x-3">
                      <filter.icon className="h-5 w-5 text-gray -600" />
                      <span className="text-sm font - medium text-gray -700">{filter.name}</span>
                    </div>
                    <span className="text-sm text-gray -500">{filter.count}</span>
                  </button>) ) }
              </div>
            </div>
          </div>
        </motion.div>
        {/* Search Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max - w-6xl mx -auto">
          {/* Results Count */}
          <div  className="mb-6">
            <p className="text-slate -300">
              {searchQuery ? `Found ${filteredResults.length} results for "${searchQuery}"` : `Showing ${filteredResults.length} items`}
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Professional Solutions</li>
                  <li>• Expert Implementation</li>
                  <li>• 24/7 Support</li>
                  <li>• Custom Development</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industry Expertise</li>
                  <li>• Proven Results</li>
                  <li>• Scalable Solutions</li>
                  <li>• Competitive Pricing</li>
                </ul>
              </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Pricing
              </Link>
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Us
              </Link>
            </div>
    </>
  )
}
;