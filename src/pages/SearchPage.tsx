import { _useEffect, useState } from "react";
import { _useNavigate, useSearchParams } from "react-router-dom";
import { _EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { _generateSearchSuggestions } from "@/data/marketplaceData";
import { _useAISearch } from "@/hooks/useAISearch";
export default function SearchPage() {
    const [params] = useSearchParams();
    const _navigate = useNavigate();
    const _initial = params.get("q") || "";
    const [query, setQuery] = useState(initial);
    const { results, loading, search } = useAISearch();
    const _suggestions = generateSearchSuggestions();
    useEffect(() => {
        if (initial) {
            search(initial);
        }
    }, [initial]);
    const _handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${encodeURIComponent(query)}`);
        search(query);
    };
    return (<main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="mb-6">
          <EnhancedSearchInput value={query} onChange={setQuery} searchSuggestions={suggestions} placeholder="Search talent, jobs, and projects..."/>
        </form>

        {loading && <p className="text-zion-slate-light">Searching...</p>}
        {!loading && results.length === 0 && (<p className="text-zion-slate-light">No results found.</p>)}
        {!loading && results.length > 0 && (<div className="space-y-4">
            {results.map((r) => (<div key={`${r.type}-${r.id}`} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4">
                <p className="text-xs uppercase text-zion-slate-light mb-1">
                  {r.type}
                </p>
                <h3 className="text-lg font-bold text-white">{r.title}</h3>
                <p className="text-zion-slate-light">{r.description}</p>
              </div>))}
          </div>)}
      </main>);
}
