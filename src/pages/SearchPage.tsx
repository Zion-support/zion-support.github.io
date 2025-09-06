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
import React from 'react';
  const pageKey = `search-${routeKey}-${router && router.asPath}`;
import { useRouter } from 'next/router';
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";



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

    } else {
      setResults([])
    }
  }, [router.isReady, query]), // Fixed dependency array
  const fetchResults = async (term: string,) => {
    if (!term.trim()) {
      setResults([])
      return
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

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault();    if (query && query.trim()) {;
      router && router.push(`/search?q=${encodeURIComponent(query && query.trim())}`);
    }
  };




            onSelectSuggestion={(suggestion) => {;
              const searchTerm = suggestion && suggestion.text.trim();
              setQuery(searchTerm);              router && router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
            }}
            searchSuggestions = {suggestions,}
            placeholder="Search talent, jobs, and projects...";
          />;
        </form>;

        {loading && (;
          <div className="flex justify-center py-8">;
            <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;
          </div>;

        {!loading && marketplaceResults && marketplaceResults.length > 0 && (;
          <Tabs defaultValue="products" className="space-y-4">;
            <TabsList className="mb-4">;
              <TabsTrigger value="products">;
                Products ({productResults && productResults.length});
              </TabsTrigger>;
              <TabsTrigger value="talent">;
                Talent ({talentResults && talentResults.length});
              </TabsTrigger>;
              <TabsTrigger value="docs">;
                Docs ({docResults && docResults.length});
              </TabsTrigger>;
              <TabsTrigger value="blog">;
                Blog ({blogResults && blogResults.length});
              </TabsTrigger>;
            </TabsList>;
            <TabsContent value="products" className="space-y-4">;
              {results;
                .filter((r,) => r && r.type === "product" || r && r.type === "service");
                .map((r,) => (;


                .filter((r) => r.type === "product" || r.type === "service")
                .map((r) => (

                  <div
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
}
;
