import {_Tabs, _TabsContent, _TabsList, _TabsTrigger} from "@/components/ui/tabs";

interface SearchResult {_id: string;
  type: "product" | "service" | "talent" | "blog" | "doc";
  title: string;
  description: string;}

function highlight(_text: string, _term: string) {_if (!term) return text;
  const _escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const _regex = new RegExp(`(${_escaped})`, "gi");
  const _parts = text.split(regex);
  return (_<>
      {_parts.map((part, _i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-200 text-black">
            {_part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function SearchPage() {_const _router = useRouterReady(); // Use our custom hook
  const [query, _setQuery] = useState("");
  const [results, _setResults] = useState<SearchResult[]>([]);
  const [loading, _setLoading] = useState(false);
  const suggestions: SearchSuggestion[] = generateSearchSuggestions();

  // Force re-render and reset state when route changes
  const _routeKey = useRouteChange__(() => {
    setResults([]);
    setLoading(false);});

  const _productResults = results.filter(
    r => r.type === 'product' || r.type === 'service'
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
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  // Add key prop to force re-render when route changes
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
          </div>
        )}
        {_!loading && marketplaceResults.length === 0 && blogResults.length > 0 && (
          <div>
            <p className="text-zion-slate-light mb-2">No marketplace results found. Related blog posts:</p>
            <div className="space-y-4">
              {blogResults.map(r => (
                <div key={`blog-${r.id}`} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4">
                  <h3 className="text-lg font-bold text-white">{_highlight(r.title, _query)}</h3>
                  <p className="text-zion-slate-light">{_highlight(r.description, _query)}</p>
                </div>
              ))}
            </div>
          </div>
        )}
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
                    </p>
                  </div>
                ))}
            </TabsContent>
            <TabsContent value="talent" className="space-y-4">
              {_results
                .filter(_(r) => r.type === "talent")
                .map(_(r) => (
                  <div
                    key={`talent-${r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
                  >
                    <h3 className="text-lg font-bold text-white">
                      {_highlight(r.title, _query)}
                    </h3>
                    <p className="text-zion-slate-light">
                      {_highlight(r.description, _query)}
                    </p>
                  </div>
                ))}
            </TabsContent>
            <TabsContent value="docs" className="space-y-4">
              {_results
                .filter(_(r) => r.type === "doc")
                .map(_(r) => (
                  <div
                    key={`doc-${r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
                  >
                    <h3 className="text-lg font-bold text-white">
                      {_highlight(r.title, _query)}
                    </h3>
                    <p className="text-zion-slate-light">
                      {_highlight(r.description, _query)}
                    </p>
                  </div>
                ))}
            </TabsContent>
            <TabsContent value="blog" className="space-y-4">
              {_results
                .filter(_(r) => r.type === "blog")
                .map(_(r) => (
                  <div
                    key={`blog-${r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
                  >
                    <h3 className="text-lg font-bold text-white">
                      {_highlight(r.title, _query)}
                    </h3>
                    <p className="text-zion-slate-light">
                      {_highlight(r.description, _query)}
                    </p>
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  );
}
