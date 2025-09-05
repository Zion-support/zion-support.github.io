<<<<<<< HEAD
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
;
interface SearchResult {;
  id:string,;
  type:"product" | "service" | "talent" | "blog" | "doc",;
  title:string,;
  description:string;
}
;
function highlight(text:string, term:string) {;
  if (!term) return text,;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),;
  const regex = new RegExp(`(${escaped})`, "gi"),;
  const parts = text.split(regex),;
  return (;
    <>;
      {parts.map((part, i) =>;
        regex.test(part) ? (;
          <mark key={i} className="bg-yellow-200 text-black">;
            {part}
          </mark>;
        ) :(;
          part;
        );
      )}
    </>;
  ),;
}
;
export default function SearchPage() {;
  const router = useRouterReady(), // Use our custom hook;
  const [query, setQuery] = useState(""),;
  const [results, setResults] = useState<SearchResult[]>([]),;
  const [loading, setLoading] = useState(false),;
  const suggestions:SearchSuggestion[] = generateSearchSuggestions(),;
;
  // Force re-render and reset state when route changes;
  const routeKey = useRouteChange(() => {;
    setResults([]),;
    setLoading(false);
  }),;
;
  const productResults = results.filter(;
    r => r.type === 'product' || r.type === 'service';
  ),;
  const talentResults = results.filter(r => r.type === 'talent'),;
  const docResults = results.filter(r => r.type === 'doc'),;
  const blogResults = results.filter(r => r.type === 'blog'),;
  const marketplaceResults = [...productResults, ...talentResults],;
;
  // Sync query with URL parameter changes;
  useEffect(() => {;
    if (!router.isReady) return,;
    ;
    const urlQuery = (router.query.q as string) || "",;
    if (urlQuery !== query) {;
      setQuery(urlQuery),;
    }
  }, [router.isReady, router.query.q]), // Fixed dependency array;
;
  // Fetch results when query changes;
  useEffect(() => {;
    if (!router.isReady) return,;
    ;
    if (query.trim()) {;
      fetchResults(query.trim()),;
    } else {;
      setResults([]),;
    }
  }, [router.isReady, query]), // Fixed dependency array;
;
  const fetchResults = async (term:string) => {;
    if (!term.trim()) {;
      setResults([]),;
      return;
    }
;
    setLoading(true),;
    try {;
      const res = await fetch(`/api/search?query=${encodeURIComponent(term)}`),;
      const data = await res.json(),;
      if (data && data.results && Array.isArray(data.results)) {;
        setResults(data.results),;
      } else {;
        setResults([]),;
        logErrorToProduction('Search API response structure is not as expected:', { data:data }),;
      }
    } catch (error) {;
      logErrorToProduction('Search failed:', { data:error }),;
      setResults([]),;
    } finally {;
      setLoading(false),;
    }
  },;
;
  const handleSubmit = (e:React.FormEvent) => {;
    e.preventDefault(),;
    if (query.trim()) {;
      router.push(`/search?q=${encodeURIComponent(query.trim())}`),;
    }
  },;
;
  // Add key prop to force re-render when route changes;
  const pageKey = `search-${routeKey}-${router.asPath}`,;
;
  return (;
    <div key={pageKey}>;
      <main className="container mx-auto px-4 py-8">;
        <form onSubmit={handleSubmit} className="mb-6">;
          <EnhancedSearchInput;
            value={query}
            onChange={setQuery}
            onSelectSuggestion={(suggestion) => {;
              const searchTerm = suggestion.text.trim(),;
              setQuery(searchTerm),;
              router.push(`/search?q=${encodeURIComponent(searchTerm)}`),;
            }}
            searchSuggestions={suggestions}
            placeholder="Search talent, jobs, and projects...";
          />;
        </form>;
;
        {loading && (;
          <div className="flex justify-center py-8">;
            <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;
          </div>;
        )}
        {!loading && marketplaceResults.length === 0 && blogResults.length > 0 && (;
          <div>;
            <p className="text-zion-slate-light mb-2">No marketplace results found. Related blog posts:</p>;
            <div className="space-y-4">;
              {blogResults.map(r => (;
                <div key={`blog-${r.id}`} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4">;
                  <h3 className="text-lg font-bold text-white">{highlight(r.title, query)}</h3>;
                  <p className="text-zion-slate-light">{highlight(r.description, query)}</p>;
                </div>;
=======
import { useEffect, useState } from "react",
import { useRouter } from 'next/router',
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady',
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { generateSearchSuggestions } from "@/data/marketplaceData",
import { SearchSuggestion } from "@/types/search",
import {logErrorToProduction} from '@/utils/productionLogger',import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger} from "@/components/ui/tabs",
import { Loader2 } from 'lucide-react'

interface SearchResult {
  id: string,
  type: "product" | "service" | "talent" | "blog" | "doc",
  title: string,
  description: string
}

function highlight(text: string, term: string) {
  if (!term) return text,
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  const regex = new RegExp(`(${escaped})`, "gi"),
  const parts = text.split(regex),  title: string,
  description: string}

function highlight(text: string, term: string) {
  if (!term) return text;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, &quot;\\$&&quot;);
  const regex = new RegExp(`(${escaped})`, &quot;gi&quot;);
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className=&quot;bg-yellow-200 text-black&quot;>
            {part}          </mark>
        ) : (
          part
        )
      )}
    </>
  )
}

export default function SearchPage() {
  const router = useRouterReady(), // Use our custom hook,
const [query, setQuery] = useState(""),
  const [results, setResults] = useState<SearchResult[]>([]),
  const [loading, setLoading] = useState(false),
  const suggestions: SearchSuggestion[] = generateSearchSuggestions(),  const suggestions: SearchSuggestion[] = generateSearchSuggestions();

  // Force re-render and reset state when route changes,
const routeKey = useRouteChange(() => {
    setResults([]),
    setLoading(false)
  }),
  const productResults = results.filter(
    r => r.type === 'product' || r.type === 'service'
  ),
  const talentResults = results.filter(r => r.type === 'talent'),
  const docResults = results.filter(r => r.type === 'doc'),
  const blogResults = results.filter(r => r.type === 'blog'),
  const marketplaceResults = [...productResults, ...talentResults],

  // Sync query with URL parameter changes,
useEffect(() => {
    if (!router.isReady) return,
    
    const urlQuery = (router.query.q as string) || "",    if (urlQuery !== query) {
      setQuery(urlQuery)
    }
  }, [router.isReady, router.query.q]), // Fixed dependency array

  // Fetch results when query changes,
useEffect(() => {
    if (!router.isReady) return,
    
    if (query.trim()) {
      fetchResults(query.trim())
    } else {
      setResults([])
    }
  }, [router.isReady, query]), // Fixed dependency array,
const fetchResults = async (term: string) => {
    if (!term.trim()) {
      setResults([]),
      return
    }

    setLoading(true),
    try {
      const res = await fetch(`/api/search?query=${encodeURIComponent(term)}`),
      const data = await res.json(),
      if (data && data.results && Array.isArray(data.results)) {
        setResults(data.results)
      } else {
        setResults([]),
        logErrorToProduction('Search API response structure is not as expected:', { data: data })
      }
    } catch (error) {
      logErrorToProduction('Search failed:', { data: error }),
      setResults([])
    } finally {
      setLoading(false)
    }
  },

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
  );
  const talentResults = results.filter(r => r.type === 'talent');
  const docResults = results.filter(r => r.type === 'doc');
  const blogResults = results.filter(r => r.type === 'blog');
  const marketplaceResults = [...productResults, ...talentResults];

  // Sync query with window.URL parameter changes,
useEffect_(() => {if (!router.isReady) return;
    
    const urlQuery = (router.query.q as string) || "";
    if (urlQuery !== query) {
      setQuery(urlQuery)}
  }, [router.isReady, router.query.q]); // Fixed dependency array

  // Fetch results when query changes,
useEffect_(() => {if (!router.isReady) return;
    
    if (query.trim()) {
      fetchResults(query.trim())} else {setResults([])}
  }, [router.isReady, query]); // Fixed dependency array,
const fetchResults = async (term: string) => {if (!term.trim()) {
      setResults([]);
      return}

    setLoading(true);
    try {const res = await fetch(`/api/search?query=${encodeURIComponent(term)}`);
      const data = await res.json();
      if (data && data.results && Array.isArray(data.results)) {setResults(data.results)} else {setResults([]);
        logErrorToProduction('Search API response structure is not as expected:', _{ data: data})
      }
    } catch (error) {logErrorToProduction('Search failed:', _{ data: error});
      setResults([])
    } finally {setLoading(false)}
  };

  const handleSubmit = (e: React.FormEvent) => {e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  },

  // Add key prop to force re-render when route changes,
const pageKey = `search-${routeKey}-${router.asPath}`,

  return (
    <div key={pageKey}>
      <main className=&quot;container mx-auto px-4 py-8&quot;>
        <form onSubmit={handleSubmit} className=&quot;mb-6&quot;>
          <EnhancedSearchInput,
value={query}
            onChange={setQuery}
            onSelectSuggestion={(suggestion) => {
              const searchTerm = suggestion.text.trim(),
              setQuery(searchTerm),
              router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
            }}
            searchSuggestions={suggestions}
            placeholder=&quot;Search talent, jobs, and projects...&quot;
          />
        </form>

        {loading && (
          <div className=&quot;flex justify-center py-8&quot;>
            <Loader2 className=&quot;h-8 w-8 animate-spin text-zion-purple&quot; />          </div>
        )}
        {_!loading && marketplaceResults.length === 0 && blogResults.length > 0 && (
          <div>
            <p className=&quot;text-zion-slate-light mb-2&quot;>No marketplace results found. Related blog posts:</p>
            <div className=&quot;space-y-4&quot;>
              {blogResults.map(r => (
                <div key={`blog-${r.id}`} className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4&quot;>
                  <h3 className=&quot;text-lg font-bold text-white&quot;>{highlight(r.title, query)}</h3>
                  <p className=&quot;text-zion-slate-light&quot;>{highlight(r.description, query)}</p>                </div>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              ))}
            </div>;
          </div>;
        )}
<<<<<<< HEAD
        {!loading && marketplaceResults.length === 0 && blogResults.length === 0 && query && (;
          <p className="text-zion-slate-light">No results found for "{query}".</p>;
        )}
        {!loading && marketplaceResults.length > 0 && (;
          <Tabs defaultValue="products" className="space-y-4">;
            <TabsList className="mb-4">;
              <TabsTrigger value="products">;
                Products ({productResults.length});
              </TabsTrigger>;
              <TabsTrigger value="talent">;
                Talent ({talentResults.length});
              </TabsTrigger>;
              <TabsTrigger value="docs">;
                Docs ({docResults.length});
              </TabsTrigger>;
              <TabsTrigger value="blog">;
                Blog ({blogResults.length});
              </TabsTrigger>;
            </TabsList>;
            <TabsContent value="products" className="space-y-4">;
              {results;
                .filter((r) => r.type === "product" || r.type === "service");
                .map((r) => (;
                  <div;
                    key={`${r.type}-${r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4";
                  >;
                    <h3 className="text-lg font-bold text-white">;
                      {highlight(r.title, query)}
                    </h3>;
                    <p className="text-zion-slate-light">;
                      {highlight(r.description, query)}
                    </p>;
                  </div>;
                ))}
            </TabsContent>;
            <TabsContent value="talent" className="space-y-4">;
              {results;
                .filter((r) => r.type === "talent");
                .map((r) => (;
                  <div;
                    key={`talent-${r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4";
                  >;
                    <h3 className="text-lg font-bold text-white">;
                      {highlight(r.title, query)}
                    </h3>;
                    <p className="text-zion-slate-light">;
                      {highlight(r.description, query)}
                    </p>;
                  </div>;
                ))}
            </TabsContent>;
            <TabsContent value="docs" className="space-y-4">;
              {results;
                .filter((r) => r.type === "doc");
                .map((r) => (;
                  <div;
                    key={`doc-${r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4";
                  >;
                    <h3 className="text-lg font-bold text-white">;
                      {highlight(r.title, query)}
                    </h3>;
                    <p className="text-zion-slate-light">;
                      {highlight(r.description, query)}
                    </p>;
                  </div>;
                ))}
            </TabsContent>;
            <TabsContent value="blog" className="space-y-4">;
              {results;
                .filter((r) => r.type === "blog");
                .map((r) => (;
                  <div;
                    key={`blog-${r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4";
                  >;
                    <h3 className="text-lg font-bold text-white">;
                      {highlight(r.title, query)}
                    </h3>;
                    <p className="text-zion-slate-light">;
                      {highlight(r.description, query)}
                    </p>;
                  </div>;
=======
        {!loading && marketplaceResults.length === 0 && blogResults.length === 0 && query && (
          <p className=&quot;text-zion-slate-light&quot;>No results found for &quot;{query}&quot;.</p>
        )}
        {!loading && marketplaceResults.length > 0 && (
          <Tabs defaultValue=&quot;products&quot; className=&quot;space-y-4&quot;>
            <TabsList className=&quot;mb-4&quot;>
              <TabsTrigger value=&quot;products&quot;>
                Products ({productResults.length})
              </TabsTrigger>
              <TabsTrigger value=&quot;talent&quot;>
                Talent ({talentResults.length})
              </TabsTrigger>
              <TabsTrigger value=&quot;docs&quot;>
                Docs ({docResults.length})
              </TabsTrigger>
              <TabsTrigger value=&quot;blog&quot;>
                Blog ({blogResults.length})
              </TabsTrigger>
            </TabsList>
            <TabsContent value=&quot;products&quot; className=&quot;space-y-4&quot;>
              {results
                .filter((r) => r.type === &quot;product&quot; || r.type === &quot;service&quot;)
                .map((r) => (
                  <div,
key={`${r.type}-${r.id}`}
                    className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4&quot;
                  >
                    <h3 className=&quot;text-lg font-bold text-white&quot;>
                      {highlight(r.title, query)}
                    </h3>
                    <p className=&quot;text-zion-slate-light&quot;>
                      {highlight(r.description, query)}                    </p>
                  </div>
                ))}
            </TabsContent>
            <TabsContent value=&quot;talent&quot; className=&quot;space-y-4&quot;>
              {results
                .filter((r) => r.type === &quot;talent&quot;)
                .map((r) => (                  <div,
key={`talent-${r.id}`}
                    className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4&quot;
                  >
                    <h3 className=&quot;text-lg font-bold text-white&quot;>
                      {highlight(r.title, query)}
                    </h3>
                    <p className=&quot;text-zion-slate-light&quot;>
                      {highlight(r.description, query)}                    </p>
                  </div>
                ))}
            </TabsContent>
            <TabsContent value=&quot;docs&quot; className=&quot;space-y-4&quot;>
              {results
                .filter((r) => r.type === &quot;doc&quot;)
                .map((r) => (                  <div,
key={`doc-${r.id}`}
                    className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4&quot;
                  >
                    <h3 className=&quot;text-lg font-bold text-white&quot;>
                      {highlight(r.title, query)}
                    </h3>
                    <p className=&quot;text-zion-slate-light&quot;>
                      {highlight(r.description, query)}                    </p>
                  </div>
                ))}
            </TabsContent>
            <TabsContent value=&quot;blog&quot; className=&quot;space-y-4&quot;>
              {results
                .filter((r) => r.type === &quot;blog&quot;)
                .map((r) => (                  <div,
key={`blog-${r.id}`}
                    className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4&quot;
                  >
                    <h3 className=&quot;text-lg font-bold text-white&quot;>
                      {highlight(r.title, query)}
                    </h3>
                    <p className=&quot;text-zion-slate-light&quot;>
                      {highlight(r.description, query)}                    </p>
                  </div>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                ))}
            </TabsContent>;
          </Tabs>;
        )}
<<<<<<< HEAD
      </main>;
    </div>;
  ),;
=======
      </main>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
