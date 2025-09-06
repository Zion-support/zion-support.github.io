import { useEffect, useState } from "react";
import { useRouter  } from 'next/router';
import { useRouterReady, useRouteChange  } from '@/hooks/useRouterReady';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { generateSearchSuggestions } from "@/data/marketplaceData",
import { SearchSuggestion } from "@/types/search";
import {logErrorToProduction} from '@/utils/productionLogger';
import {;
  Tabs;
  TabsContent;
  TabsList;
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
import { useEffect, useState } from "react",
import { useRouter } from 'next/router',
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady',
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { generateSearchSuggestions } from "@/data/marketplaceData",
import { SearchSuggestion } from "@/types/search",
import {logErrorToProduction} from '@/utils/productionLogger',
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger} from "@/components/ui/tabs",
import { Loader2 } from 'lucide-react'



import { Loader2 } from 'lucide-react'
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
import { useEffect, useState } from "react",
import { useRouter } from 'next/router',
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady',
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { generateSearchSuggestions } from "@/data/marketplaceData",
import { SearchSuggestion } from "@/types/search",
import {logErrorToProduction} from '@/utils/productionLogger',
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger} from "@/components/ui/tabs",
import { Loader2 } from 'lucide-react'

interface SearchResult {

  id: string
  type: "product" | "service" | "talent" | "blog" | "doc"
  title: string

  description: string
}
function highlight(text: string, term: string) {
  return (
    <>;
      {parts && parts.map((part, i,) =>;
        regex && regex.test(part) ? (;
          <mark key={i} className="bg-yellow-200 text-black">;
            {part}
          </mark>;
        ) : (;
          part;
        );
      )}
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const regex = new RegExp(`(${escaped})`, "gi")
  const parts = text.split(regex)
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  const regex = new RegExp(`(${escaped})`, "gi"),
  const parts = text.split(regex),
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-200 text-black">
    </>
  )
}
export default function SearchPage() {
  const router = useRouterReady(), // Use our custom hook
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const suggestions: SearchSuggestion[] = generateSearchSuggestions()
  // Force re-render and reset state when route changes
  const routeKey = useRouteChange(() => {
    setResults([]);    setLoading(false)
  })
  const productResults = results.filter(
    r => r.type === 'product' |r.type === 'service'
  )
  const talentResults = results.filter(r => r.type === 'talent')
  const docResults = results.filter(r => r.type === 'doc')
  const blogResults = results.filter(r => r.type === 'blog')
  const marketplaceResults = [...productResults, ...talentResults]
  // Sync query with URL parameter changes
  useEffect(() => {
    if (urlQuery !== query) {
      setQuery(urlQuery)
    }
  }, [router.isReady, router.query.q]), // Fixed dependency array
  // Fetch results when query changes
  useEffect(() => {
    if (!router.isReady) return
    if (query.trim()) {
      fetchResults(query.trim())
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
import { useEffect, useState } from "react",;
import { useRouter } from 'next/router',;
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady',;
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",;
import { generateSearchSuggestions } from "@/data/marketplaceData",;
import { SearchSuggestion } from "@/types/search",;
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
  Tabs,;
  TabsContent,;
  TabsList,;
  TabsTrigger} from "@/components/ui/tabs",;
import { Loader2 } from 'lucide-react';
interface SearchResult {
  id: string,
  type: "product" | "service" | "talent" | "blog" | "doc",
  title: string,
  description: string;
}
/**
 * highlight - Function description
 */
function highlight() {
  // Check condition
if (return text, ) {
  $2
}
  const escaped = term.replace (/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp (`(${escaped})`, "gi");
  const parts = text.split (regex);
  return (
    <>;
      {parts.map ((part, i, ) =>;
        regex.test (part) ? (
          <mark key={i} className="bg - yellow - 200 text - black">;
            {part}
          </mark>) : (
          part))}
    </>);
}
export default /**
 * SearchPage - Function description
 */
function SearchPage() {
  const router = useRouterReady (), // Use our custom hook;
  const [query, set_query] = useState ("");
  const [results, set_results] = useState < SearchResult[]>([]);
  const [loading, set_loading] = useState (false);
  const suggestions: SearchSuggestion[] = generateSearchSuggestions (),
  // Force re - render and reset state when route changes;
  const route_key = useRouteChange (() => {
    set_results ([]);    set_loading (false);
  });
  const product_results = results.filter (
    r => r.type === 'product' || r.type === 'service');
  const talent_results = results.filter (r => r.type === 'talent');
  const doc_results = results.filter (r => r.type === 'doc');
  const blog_results = results.filter (r => r.type === 'blog');
  const marketplace_results = [...product_results, ...talent_results];
  // Sync query with URL parameter changes;
  useEffect (() => {
    // Check condition
if (return) {
  $2
}
    const url_query = (router.query.q as string) || "";
    // Check condition
if ( {) {
  $2
}
      set_query (url_query);
    }
  }, [router.is_ready, router.query.q]), // Fixed dependency array;
  // Fetch results when query changes;
  useEffect (() => {
    // Check condition
if (return) {
  $2
}
    if () {) {
  $2
}
      fetch_results (query.trim ());
    } else {
      set_results ([]);
    }
  }, [router.isReady, query]), // Fixed dependency array
  const fetchResults = async (term: string,) => {
    if (!term.trim()) {
      setResults([])
      return
    }
    setLoading(true)
    try {
      const res = await fetch (`/api / search?query=${encodeURIComponent (term)}`);
      const data = await res.json ();
      if () {) {
  $2
}
        set_results (data.results);
      } else {
        set_results ([]);
        logErrorToProduction ('Search API response structure is not as expected:', { data: data });
      }
    } catch (error) {
      logErrorToProduction('Search failed:', { data: error })
      setResults([])
    } finally {
      set_loading (false);
    }
  }
  const handle_submit = (e: React.FormEvent) =>: any {
    e.prevent_default ();    if () {) {
  $2
}
      router.push (`/search?q=${encodeURIComponent (query.trim ())}`);
    }
  }
      }
    } catch (error) {;
      logErrorToProduction('Search failed:', { data: error }),;
      setResults([]);
    } finally {;
      setLoading(false);
    }


  },;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (query.trim()) {;
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  },


  return (
    <div key={pageKey}>;
      <main className="container mx-auto px-4 py-8">;
        <form onSubmit={handleSubmit} className="mb-6">;
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            onSelectSuggestion={(suggestion) => {
              const searchTerm = suggestion.text.trim()
              setQuery(searchTerm);              router.push(`/search?q=${encodeURIComponent(searchTerm)}`)

            }}
            placeholder="Search talent, jobs, and projects..."
          />
        </form>
        {loading && (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
          </div>
        )}
        {!loading && marketplaceResults && marketplaceResults.length === 0 && blogResults && blogResults.length > 0 && (;
          <div>;
            <p className="text-zion-slate-light mb-2">No marketplace results found. Related blog posts:</p>;
            <div className="space-y-4">;
              {blogResults && blogResults.map(r => (;
                <div key={`blog-${r && r.id}`} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4">;
                  <h3 className="text-lg font-bold text-white">{highlight(r && r.title, query)}</h3>;
                  <p className="text-zion-slate-light">{highlight(r && r.description, query)}</p>;
                </div>;
              ))}
            </div>;
          </div>;
        )}
        {!loading && marketplaceResults && marketplaceResults.length === 0 && blogResults && blogResults.length === 0 && query && (;
          <p className="text-zion-slate-light">No results found for "{query}".</p>;
        )}
                  <div
                    key={`${r && r.type}-${r && r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4">;
                    <h3 className="text-lg font-bold text-white">;
                      {highlight(r && r.title, query)}
                    </h3>;
                    <p className="text-zion-slate-light">;
                      {highlight(r && r.description, query)}
                    </p>;
                  </div>;
                ))}
                  <div
                    key={`talent-${r && r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4">;
                    <h3 className="text-lg font-bold text-white">;
                      {highlight(r && r.title, query)}
                    </h3>;
                    <p className="text-zion-slate-light">;
                      {highlight(r && r.description, query)}
                    </p>;
                  </div>;
                ))}
                  <div
                    key={`doc-${r && r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4">;
                    <h3 className="text-lg font-bold text-white">;
                      {highlight(r && r.title, query)}
                    </h3>;
                    <p className="text-zion-slate-light">;
                      {highlight(r && r.description, query)}
                    </p>;
                  </div>;
                ))}
                  <div
                    key={`blog-${r && r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4">;
                    <h3 className="text-lg font-bold text-white">;
                      {highlight(r && r.title, query)}
                    </h3>;
                    <p className="text-zion-slate-light">;
                      {highlight(r && r.description, query)}
                    </p>;
                  </div>;
                ))}
            </TabsContent>;
          </Tabs>;
        )}
      </main>
    </div>
  )
  setQuery (urlQuery)
}, [router.isReady, router.query.q]), //Fixed dependency array //Fetch results when query changes useEffect ( () => {
if (query.trim () ) {
  fetchResults (query.trim () )
}else {
  setResults ([])
}, [router.isReady, query]), //Fixed dependency array const fetchResults = async (term: string) => {
  if (!term.trim () ) {
  setResults ([])
}setLoading (true)
try {
  const res = await fetch (`/api/search?query=$ {
  encodeURIComponent (term)
}`)
const data = await res.json ()
if (data && data.results && Array.isArray (data.results) ) {
  setResults (data.results)
              {/* Sort Options */}
              <div  className="mb - 6">;
                <label className="block text - sm font - medium text - gray - 700 mb - 2">Sort By</label>;
                <select;
                  value={sort_by}
                  on_change={ (e) => setSortBy (e.target.value as any) }
                  className="w - full px - 3 py - 2 border border - gray - 300 rounded - lg focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - blue -500">;
                  <option value="relevance">Relevance</option>;
                  <option value="date">Date</option>;
                  <option value="popularity">Popularity</option>;
                </select>;
              </div>;
              {/* Filter Options */}
              <div  className="space - y - 3">;
                {filter_options.map (filter => (<button     key={filter.id}
                    on_click={ () => toggle_filter (filter.id) }
                    className={`w - full flex items - center justify - between p - 3 rounded - lg transition - colors ${selected_filters.has (filter.id) ? 'bg - blue - 50 border border - blue - 200';
                        : 'hover:bg - gray - 50';
}`}
                  >;
                    <div  className="flex items - center space - x - 3">;
                      <filter.icon className="h - 5 w - 5 text - gray -600" />;
                      <span className="text - sm font - medium text - gray -700">{filter.name}</span>;
                    </div>;
                    <span className="text - sm text - gray -500">{filter.count}</span>;
                  </button>) ) }
              </div>;
            </div>;
          </div>;
        </motion.div>;
        {/* Search Results */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max - w - 6xl mx -auto">;
          {/* Results Count */}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
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
      </main>;
    </div>;
  );
}

            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <Link href="/pricing/" className="bg - blue - 600 text - white px - 6 py - 3 rounded - lg hover:bg - blue - 700 transition - colors">;
                View Pricing;
              </Link>;
              <Link href="/contact/" className="bg - gray - 600 text - white px - 6 py - 3 rounded - lg hover:bg - gray - 700 transition - colors">;
                Contact Us;
              </Link>;
            </div>;
    </>);
}
}
