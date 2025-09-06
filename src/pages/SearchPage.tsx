


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

import { Loader2 } from 'lucide-react'


ursor/fix-website-loading-errors-and-merge-6662
import { Loader2 } from 'lucide-react'
interface SearchResult {
  id: string
  type: "product" | "service" | "talent" | "blog" | "doc"
  title: string

  description: string
}
function highlight(text: string, term: string) {
  },;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (query.trim()) {;
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  },

          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            onSelectSuggestion={(suggestion) => {
              const searchTerm = suggestion.text.trim()
              setQuery(searchTerm);              router.push(`/search?q=${encodeURIComponent(searchTerm)}`)

            placeholder="Search talent, jobs, and projects..."
        </form>
        {loading && (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
          </div>
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
