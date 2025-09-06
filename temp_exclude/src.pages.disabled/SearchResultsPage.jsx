<<<<<<< HEAD

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src && src.pages.disabled/SearchResultsPage && SearchResultsPage.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/SearchResultsPage && SearchResultsPage.jsx import React from \'react\'; export default function SearchResultsPage () { const LIMIT = 20; const router = useNavigate () ; const initialQuery = router && router.query.q || \"; const [query,setQuery] = useState (initialQuery) ; const { data,fetchNextPage,hasNextPage,isFetchingNextPage,isLoading,refetch } = useInfiniteQuery ({ queryKey[\"search\",query],; \"queryFn\": async ({ pageParam = 1 }) => { const res = await fetch (`/api / search?q=${encodeURIComponent (query) }&page=${pageParam}&limit=${LIMIT}`) ; if (!res && res.ok) throw new Error (\"Failed to fetch\") ; return (await res && res.json () ) },\"enabled\": \'!!query\',\"initialPageParam\": \'1\',\"getNextPageParam\": (lastPage,pages) => lastPage && lastPage.length < LIMIT ? null : pages && pages.length + 1 }) ; import React from \'react\'; export default function SearchResultsPage () { const LIMIT = 20; const router = useNavigate () ; const initialQuery = router && router.query.q || \"; const [query,setQuery] = useState (initialQuery) ; const { data,fetchNextPage,hasNextPage,isFetchingNextPage,isLoading,refetch } = useInfiniteQuery ({ queryKey[\"search\",query],; \"queryFn\": async ({ pageParam = 1 }) => { const res = await fetch (`/api / search?q=${encodeURIComponent (query) }&page=${pageParam}&limit=${LIMIT}`) ; if (!res && res.ok) throw new Error (\"Failed to fetch\") ; return (await res && res.json () ) },\"enabled\": \'!!query\',\"initialPageParam\": \'1\',\"getNextPageParam\": (lastPage,pages) => lastPage && lastPage.length < LIMIT ? null : pages && pages.length + 1 }) ;\"`\";
<<<<<<< "HEAD": src && src.pages.disabled/SearchResultsPage && SearchResultsPage.jsx import _React from 'react'; export default function SearchResultsPage () { const LIMIT = 20; const router = useNavigate () ; const initialQuery = router && router.query.q || "; const [query,setQuery] = useState (initialQuery) ; const { data,fetchNextPage,hasNextPage,isFetchingNextPage,isLoading,refetch } = useInfiniteQuery ({ queryKey["search",query],; "queryFn": async ({ pageParam = 1 }) => { const res = await fetch (`/api / search?q=${encodeURIComponent (query) }&page=${pageParam}&limit=${LIMIT}`) ; if (!res && res.ok) throw new Error ("Failed to fetch") ; return (await res && res.json () ) },"enabled": '!!query',"initialPageParam": '1',"getNextPageParam": (lastPage,pages) => lastPage && lastPage.length < LIMIT ? null : pages && pages.length + 1 }) ; import _React from 'react'; export default function SearchResultsPage () { const LIMIT = 20; const router = useNavigate () ; const initialQuery = router && router.query.q || "; const [query,setQuery] = useState (initialQuery) ; const { data,fetchNextPage,hasNextPage,isFetchingNextPage,isLoading,refetch } = useInfiniteQuery ({ queryKey["search",query],; "queryFn": async ({ pageParam = 1 }) => { const res = await fetch (`/api / search?q=${encodeURIComponent (query) }&page=${pageParam}&limit=${LIMIT}`) ; if (!res && res.ok) throw new Error ("Failed to fetch") ; return (await res && res.json () ) },"enabled": '!!query',"initialPageParam": '1',"getNextPageParam": (lastPage,pages) => lastPage && lastPage.length < LIMIT ? null : pages && pages.length + 1 }) ;"`";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
