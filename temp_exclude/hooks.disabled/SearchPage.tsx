super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}'
import React from 'react';
  const pageKey = `search-${routeKey}-${router && router.asPath}`;'
import { useRouter } from 'next/router';'
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";"
import { generateSearchSuggestions } from "@/data/marketplaceData";
"
import { SearchSuggestion } from "@/types/search";'
import {logErrorToProduction} from '@/utils/productionLogger';
import {};
  Tabs;
  TabsContent;
  TabsList;

`
  const pageKey = `search-${routeKey}-${router.asPath}`'
import { useRouter } from 'next/router''
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady'"
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput""
import { generateSearchSuggestions } from "@/data/marketplaceData""
import { SearchSuggestion } from "@/types/search"'
import {logErrorToProduction} from '@/utils/productionLogger'
import {};
  Tabs;
  TabsContent;
  TabsList"
  TabsTrigger} from "@/components/ui/tabs"
"
import { useEffect, useState } from "react",'
import { useRouter } from 'next/router','
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady',"
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput","
import { generateSearchSuggestions } from "@/data/marketplaceData","
import { SearchSuggestion } from "@/types/search",'
import {logErrorToProduction} from '@/utils/productionLogger',
import {}
  Tabs,
  TabsContent,
  TabsList,"
  TabsTrigger} from "@/components/ui/tabs",

'
import { Loader2 } from 'lucide-react'`
  const pageKey = `search-${routeKey}-${router.asPath}`'
import { useRouter } from 'next/router''
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady'"
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput""
import { generateSearchSuggestions } from "@/data/marketplaceData""
import { SearchSuggestion } from "@/types/search"'
import {logErrorToProduction} from '@/utils/productionLogger'

import {logErrorToProduction} from '@/utils/productionLogger',
import {}
  Tabs,
  TabsContent,
  TabsList,"
  TabsTrigger} from "@/components/ui/tabs",'
import { Loader2 } from 'lucide-react'

  },;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (query.trim()) {;`
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  },

  return (
    <div key={pageKey}>"
      <main className="container mx-auto px-4 py-8">"
        <form onSubmit={handleSubmit} className="mb-6">
          <EnhancedSearchInput;
            value={query}
            onChange={setQuery}

            onSelectSuggestion={(suggestion) => {;
              const searchTerm = suggestion.text.trim();
              setQuery(searchTerm);`
              router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
            }}
            searchSuggestions={suggestions}

            <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
          </div>
            onSelectSuggestion={(suggestion) => {;
              const searchTerm = suggestion && suggestion.text.trim();`
              setQuery(searchTerm);              router && router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
            }}
            searchSuggestions = {suggestions,}"
            placeholder="Search talent, jobs, and projects...";
          />;
        </form>;

        {loading && (;"
          <div className="flex justify-center py-8">;"
            <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;
          </div>;
        )}
        {!loading && marketplaceResults.length === 0 && blogResults.length > 0 && (
          <div>"
            <p className="text-zion-slate-light mb-2">No marketplace results found. Related blog posts:</p>"
            <div className="space-y-4">
              {blogResults.map(r => ("`
                <div key={`blog-${r.id}`} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4">"
                  <h3 className="text-lg font-bold text-white">{highlight(r.title, query)}</h3>"
                  <p className="text-zion-slate-light">{highlight(r.description, query)}</p>
                </div>
              ))}
            </div>;
          </div>;
        )}
        {!loading && marketplaceResults.length === 0 && blogResults.length === 0 && query && ("
          <p className="text-zion-slate-light">No results found for "{query}".</p>
        )}

                  <div
                    key={`${r.type}-${r.id}`}

                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
                  >"
                    <h3 className="text-lg font-bold text-white">
                      {highlight(r.title, query)}
                    </h3>"
                    <p className="text-zion-slate-light">
                      {highlight(r.description, query)}
                    </p>;
                  </div>;
                ))}
            </TabsContent>"
            <TabsContent value="talent" className="space-y-4">
              {results"
                .filter((r) => r.type === "talent")
                .map((r) => (
                  <div;`
                    key={`talent-${r.id}`}"
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
                  >"
                    <h3 className="text-lg font-bold text-white">
                      {highlight(r.title, query)}
                    </h3>"
                    <p className="text-zion-slate-light">
                      {highlight(r.description, query)}
                    </p>;
                  </div>;
                ))}
            </TabsContent>"
            <TabsContent value="docs" className="space-y-4">
              {results"
                .filter((r) => r.type === "doc")
                .map((r) => (
                  <div;`
                    key={`doc-${r.id}`}"
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
                  >"
                    <h3 className="text-lg font-bold text-white">
                      {highlight(r.title, query)}
                    </h3>"
                    <p className="text-zion-slate-light">
                      {highlight(r.description, query)}
                    </p>;
                  </div>;
                ))}
            </TabsContent>"
            <TabsContent value="blog" className="space-y-4">
              {results"
                .filter((r) => r.type === "blog")
                .map((r) => (
                  <div;`
                    key={`blog-${r.id}`}"
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
                  >"
                    <h3 className="text-lg font-bold text-white">
                      {highlight(r.title, query)}
                    </h3>"
                    <p className="text-zion-slate-light">
                      {highlight(r.description, query)}
                    </p>;
                  </div>;
                ))}
            </TabsContent>;
          </Tabs>;
        )}

      </main>;
    </div>;
  );

}

;