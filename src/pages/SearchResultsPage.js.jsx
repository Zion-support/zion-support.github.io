<<<<<<< HEAD
import { useEffect, useRef, useState } from "react";""""
import { useRouter } from "next/router";""""
import { useInfiniteQuery } from "@tanstack/react-query";""""
import { generateSearchSuggestions } from "@/data/marketplaceData";""""
import { SearchResultCard } from "@/components/search/SearchResultCard";""""
import { SearchBar } from "@/components/SearchBar";
const LIMIT = 20;
export default function SearchResultsPage() {}
"""
    const router = useRouter();""""
    const initialQuery = router.query.q || "";
    const [query, setQuery] = useState(initialQuery);
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, refetch } = useInfiniteQuery({}
"""
""""
        queryKey["search", query],;
        queryFn: async ({ pageParam = 1 }) => {}
            const res = await fetch(`/api/search?q=${encodeURIComponent(query)}&page=${pageParam}&limit=${LIMIT}`);"""
            if (!res.ok)""""
=======
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useInfiniteQuery } from "@tanstack/react-query";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { SearchResultCard } from "@/components/search/SearchResultCard";
import { SearchBar } from "@/components/SearchBar";
const LIMIT = 20;
export default function SearchResultsPage() {

    const router = useRouter();
    const initialQuery = router.query.q || "";
    const [query, setQuery] = useState(initialQuery);
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, refetch } = useInfiniteQuery({

        queryKey["search", query],
        queryFn: async ({ pageParam = 1 }) => {

            const res = await fetch(`/api/search?q=${encodeURIComponent(query)}&page=${pageParam}&limit=${LIMIT}`);
            if (!res.ok)
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
                throw new Error("Failed to fetch");
            return (await res.json())},
        enabled: !!query,
        initialPageParam: 1,
<<<<<<< HEAD
        getNextPageParam: (lastPage, pages) => lastPage.length < LIMIT ? null : pages.length + 1;
    }) ;
    // Refetch when the URL param changes;
    useEffect ( () => {}
        if (initialQuery !== query) {}
=======
        getNextPageParam: (lastPage, pages) => lastPage.length < LIMIT ? null : pages.length + 1
    });
    // Refetch when the URL param changes
    useEffect(() => {

        if (initialQuery !== query) {

>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
            setQuery(initialQuery);
            refetch()}
    }, [initialQuery]);
    const allResults = data?.pages.flat() ?? [];
    const loader = useRef(null);
<<<<<<< HEAD
    useEffect(() => {}
        const el = loader.current;
        if (!el)
            return;
        const observer = new IntersectionObserver((entries) => {}
            if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {}
                fetchNextPage()}
        });
        observer.observe(el);
        return () => observer.disconnect()}, [loader.current, hasNextPage, isFetchingNextPage]);"""
    const suggestions = generateSearchSuggestions().slice(0, 5);""""
    return (<main className="container mx-auto px-4 py-8">""""
      <div className="mb-6">
        <SearchBar value={query} onChange={setQuery}/>
      </div>"""
      {isLoading && <p>Loading...</p>}""""
      {!isLoading && allResults.length === 0 && (<div className="text-center py-8">""""
          <p className="text-zion-slate-light mb-2">No results found.</p>""""
          <p className="text-zion-slate-light">Try searching for:</p>""""
          <ul className="flex flex-wrap justify-center gap-2 mt-2">""""
            {suggestions.map((s) => (<li key={s.text} className="bg-zion-blue-light px-2 py-1 rounded">
                {s.text}
              </li>) ) }
          </ul>"""
        </div>)}""`
      {allResults.length > 0 && (<div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">``
          {allResults.map((r) => (<SearchResultCard key={`${r.type}-${r.id}`} result={r}/>))}"""
        </div>)}""""
      <div ref={loader} className="h-1"/>""""
      {isFetchingNextPage && <p className="text-center mt-4">Loading more...</p>}
    </main>)}"`
"`"`
=======
    useEffect(() => {

        const el = loader.current;
        if (!el)
            return;
        const observer = new IntersectionObserver((entries) => {

            if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {

                fetchNextPage()}
        });
        observer.observe(el);
        return () => observer.disconnect()}, [loader.current, hasNextPage, isFetchingNextPage]);
    const suggestions = generateSearchSuggestions().slice(0, 5);
    return (<main className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <SearchBar value={query} onChange={setQuery}/>
      </div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && allResults.length === 0 && (<div className="text-center py-8">
          <p className="text-zion-slate-light mb-2">No results found.</p>
          <p className="text-zion-slate-light">Try searching for:</p>
          <ul className="flex flex-wrap justify-center gap-2 mt-2">
            {suggestions.map((s) => (<li key={s.text} className="bg-zion-blue-light px-2 py-1 rounded">
                {s.text}
              </li>))}
          </ul>
        </div>)}
      {allResults.length > 0 && (<div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {allResults.map((r) => (<SearchResultCard key={`${r.type}-${r.id}`} result={r}/>))}
        </div>)}
      <div ref={loader} className="h-1"/>
      {isFetchingNextPage && <p className="text-center mt-4">Loading more...</p>}
    </main>)}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
