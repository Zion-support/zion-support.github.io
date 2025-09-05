<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from "react",
import { useRouter } from 'next/router',
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady',
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { generateSearchSuggestions } from "@/data/marketplaceData",
import { SearchSuggestion } from "@/types/search",
import {logErrorToProduction} from '@/utils/productionLogger',
=======
import { useEffect, useState } from &quot;react&quot;;
import { useRouter } from 'next/router';
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady';
import { EnhancedSearchInput } from &quot;@/components/search/EnhancedSearchInput&quot;;
import { generateSearchSuggestions } from &quot;@/data/marketplaceData&quot;;
import { SearchSuggestion } from &quot;@/types/search&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Tabs,
  TabsContent,
  TabsList,
<<<<<<< HEAD
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
  const parts = text.split(regex),
=======
  TabsTrigger} from &quot;@/components/ui/tabs&quot;;
import { Loader2 } from 'lucide-react'

interface SearchResult {
  id: string;
  type: &quot;product&quot; | &quot;service&quot; | &quot;talent&quot; | &quot;blog&quot; | &quot;doc&quot;;
=======
import {_Tabs, _TabsContent, _TabsList, _TabsTrigger} from "@/components/ui/tabs";

interface SearchResult {_id: string;
  type: "product" | "service" | "talent" | "blog" | "doc";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  title: string;
  description: string;}

<<<<<<< HEAD
function highlight(text: string, term: string) {
  if (!term) return text;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, &quot;\\$&&quot;);
  const regex = new RegExp(`(${escaped})`, &quot;gi&quot;);
  const parts = text.split(regex);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className=&quot;bg-yellow-200 text-black&quot;>
            {part}
=======
function highlight(_text: string, _term: string) {_if (!term) return text;
  const _escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const _regex = new RegExp(`(${_escaped})`, "gi");
  const _parts = text.split(regex);
  return (_<>
      {_parts.map((part, _i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-200 text-black">
            {_part}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </mark>
        ) : (
          part
        )
      )}
    </>
  )
}

<<<<<<< HEAD
export default function SearchPage() {
<<<<<<< HEAD
  const router = useRouterReady(), // Use our custom hook
  const [query, setQuery] = useState(""),
  const [results, setResults] = useState<SearchResult[]>([]),
  const [loading, setLoading] = useState(false),
  const suggestions: SearchSuggestion[] = generateSearchSuggestions(),
=======
  const router = useRouterReady(); // Use our custom hook
  const [query, setQuery] = useState("&quot;);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
=======
export default function SearchPage() {_const _router = useRouterReady(); // Use our custom hook
  const [query, _setQuery] = useState("");
  const [results, _setResults] = useState<SearchResult[]>([]);
  const [loading, _setLoading] = useState(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  const suggestions: SearchSuggestion[] = generateSearchSuggestions();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  // Force re-render and reset state when route changes
<<<<<<< HEAD
  const routeKey = useRouteChange(() => {
    setResults([]),
    setLoading(false)
  }),
=======
  const _routeKey = useRouteChange__(() => {
    setResults([]);
    setLoading(false);});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _productResults = results.filter(
    r => r.type === 'product' || r.type === 'service'
<<<<<<< HEAD
  ),
  const talentResults = results.filter(r => r.type === 'talent'),
  const docResults = results.filter(r => r.type === 'doc'),
  const blogResults = results.filter(r => r.type === 'blog'),
  const marketplaceResults = [...productResults, ...talentResults],

  // Sync query with URL parameter changes
  useEffect(() => {
    if (!router.isReady) return,
    
<<<<<<< HEAD
    const urlQuery = (router.query.q as string) || "",
=======
    const urlQuery = (router.query.q as string) || "&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    if (urlQuery !== query) {
      setQuery(urlQuery)
    }
  }, [router.isReady, router.query.q]), // Fixed dependency array

  // Fetch results when query changes
  useEffect(() => {
    if (!router.isReady) return,
    
    if (query.trim()) {
      fetchResults(query.trim())
    } else {
      setResults([])
    }
  }, [router.isReady, query]), // Fixed dependency array

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
=======
  );
  const _talentResults = results.filter(r => r.type === 'talent');
  const _docResults = results.filter(r => r.type === 'doc');
  const _blogResults = results.filter(r => r.type === 'blog');
  const _marketplaceResults = [...productResults, ...talentResults];

  // Sync query with window.URL parameter changes
  useEffect__(() => {_if (!router.isReady) return;
    
    const _urlQuery = (router.query.q as string) || "";
    if (urlQuery !== query) {
      setQuery(urlQuery);}
  }, [router.isReady, router.query.q]); // Fixed dependency array

  // Fetch results when query changes
  useEffect__(() => {_if (!router.isReady) return;
    
    if (query.trim()) {
      fetchResults(query.trim());} else {_setResults([]);}
  }, [router.isReady, query]); // Fixed dependency array

  const _fetchResults = async (_term: string) => {_if (!term.trim()) {
      setResults([]);
      return;}

    setLoading(true);
    try {_const _res = await fetch(`/api/search?query=${encodeURIComponent(term)}`);
      const _data = await res.json();
      if (data && data.results && Array.isArray(data.results)) {_setResults(data.results);} else {_setResults([]);
        logErrorToProduction('Search API response structure is not as expected:', _{ data: data});
      }
    } catch (error) {_logErrorToProduction('Search failed:', _{ data: error});
      setResults([]);
    } finally {_setLoading(false);}
  };

  const _handleSubmit = (_e: React.FormEvent) => {_e.preventDefault();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  },

  // Add key prop to force re-render when route changes
<<<<<<< HEAD
  const pageKey = `search-${routeKey}-${router.asPath}`,

  return (
    <div key={pageKey}>
      <main className=&quot;container mx-auto px-4 py-8&quot;>
        <form onSubmit={handleSubmit} className=&quot;mb-6&quot;>
          <EnhancedSearchInput
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
            <Loader2 className=&quot;h-8 w-8 animate-spin text-zion-purple&quot; />
=======
  const _pageKey = `search-${_routeKey}-${_router.asPath}`;

  return (_<div key={_pageKey}>
      <main className="container mx-auto px-4 py-8">
        <form onSubmit={_handleSubmit} className="mb-6">
          <EnhancedSearchInput
            value={_query}
            onChange={_setQuery}
            onSelectSuggestion={_(suggestion) => {
              const _searchTerm = suggestion.text.trim();
              setQuery(searchTerm);
              router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
            }}
            searchSuggestions={_suggestions}
            placeholder="Search talent, jobs, and projects..."
          />
        </form>

        {_loading && (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        )}
        {_!loading && marketplaceResults.length === 0 && blogResults.length > 0 && (
          <div>
            <p className=&quot;text-zion-slate-light mb-2&quot;>No marketplace results found. Related blog posts:</p>
            <div className=&quot;space-y-4&quot;>
              {blogResults.map(r => (
<<<<<<< HEAD
                <div key={`blog-${r.id}`} className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4&quot;>
                  <h3 className=&quot;text-lg font-bold text-white&quot;>{highlight(r.title, query)}</h3>
                  <p className=&quot;text-zion-slate-light&quot;>{highlight(r.description, query)}</p>
=======
                <div key={`blog-${r.id}`} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4">
                  <h3 className="text-lg font-bold text-white">{_highlight(r.title, _query)}</h3>
                  <p className="text-zion-slate-light">{_highlight(r.description, _query)}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              ))}
            </div>
          </div>
        )}
<<<<<<< HEAD
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
                  <div
                    key={`${r.type}-${r.id}`}
                    className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4&quot;
                  >
                    <h3 className=&quot;text-lg font-bold text-white&quot;>
                      {highlight(r.title, query)}
                    </h3>
                    <p className=&quot;text-zion-slate-light&quot;>
                      {highlight(r.description, query)}
=======
        {_!loading && marketplaceResults.length === 0 && blogResults.length === 0 && query && (
          <p className="text-zion-slate-light">No results found for "{query}".</p>
        )}
        {_!loading && marketplaceResults.length > 0 && (
          <Tabs defaultValue="products" className="space-y-4">
            <TabsList className="mb-4">
              <TabsTrigger value="products">
                Products ({productResults.length})
              </TabsTrigger>
              <TabsTrigger value="talent">
                Talent ({_talentResults.length})
              </TabsTrigger>
              <TabsTrigger value="docs">
                Docs ({_docResults.length})
              </TabsTrigger>
              <TabsTrigger value="blog">
                Blog ({_blogResults.length})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="products" className="space-y-4">
              {_results
                .filter(_(r) => r.type === "product" || r.type === "service")
                .map(_(r) => (
                  <div
                    key={`${r.type}-${_r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
                  >
                    <h3 className="text-lg font-bold text-white">
                      {_highlight(r.title, _query)}
                    </h3>
                    <p className="text-zion-slate-light">
                      {_highlight(r.description, _query)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </p>
                  </div>
                ))}
            </TabsContent>
<<<<<<< HEAD
            <TabsContent value=&quot;talent&quot; className=&quot;space-y-4&quot;>
              {results
                .filter((r) => r.type === &quot;talent&quot;)
                .map((r) => (
=======
            <TabsContent value="talent" className="space-y-4">
              {_results
                .filter(_(r) => r.type === "talent")
                .map(_(r) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <div
                    key={`talent-${r.id}`}
                    className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4&quot;
                  >
<<<<<<< HEAD
                    <h3 className=&quot;text-lg font-bold text-white&quot;>
                      {highlight(r.title, query)}
                    </h3>
                    <p className=&quot;text-zion-slate-light&quot;>
                      {highlight(r.description, query)}
=======
                    <h3 className="text-lg font-bold text-white">
                      {_highlight(r.title, _query)}
                    </h3>
                    <p className="text-zion-slate-light">
                      {_highlight(r.description, _query)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </p>
                  </div>
                ))}
            </TabsContent>
<<<<<<< HEAD
            <TabsContent value=&quot;docs&quot; className=&quot;space-y-4&quot;>
              {results
                .filter((r) => r.type === &quot;doc&quot;)
                .map((r) => (
=======
            <TabsContent value="docs" className="space-y-4">
              {_results
                .filter(_(r) => r.type === "doc")
                .map(_(r) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <div
                    key={`doc-${r.id}`}
                    className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4&quot;
                  >
<<<<<<< HEAD
                    <h3 className=&quot;text-lg font-bold text-white&quot;>
                      {highlight(r.title, query)}
                    </h3>
                    <p className=&quot;text-zion-slate-light&quot;>
                      {highlight(r.description, query)}
=======
                    <h3 className="text-lg font-bold text-white">
                      {_highlight(r.title, _query)}
                    </h3>
                    <p className="text-zion-slate-light">
                      {_highlight(r.description, _query)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </p>
                  </div>
                ))}
            </TabsContent>
<<<<<<< HEAD
            <TabsContent value=&quot;blog&quot; className=&quot;space-y-4&quot;>
              {results
                .filter((r) => r.type === &quot;blog&quot;)
                .map((r) => (
=======
            <TabsContent value="blog" className="space-y-4">
              {_results
                .filter(_(r) => r.type === "blog")
                .map(_(r) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <div
                    key={`blog-${r.id}`}
                    className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4&quot;
                  >
<<<<<<< HEAD
                    <h3 className=&quot;text-lg font-bold text-white&quot;>
                      {highlight(r.title, query)}
                    </h3>
                    <p className=&quot;text-zion-slate-light&quot;>
                      {highlight(r.description, query)}
=======
                    <h3 className="text-lg font-bold text-white">
                      {_highlight(r.title, _query)}
                    </h3>
                    <p className="text-zion-slate-light">
                      {_highlight(r.description, _query)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </p>
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  )
}
