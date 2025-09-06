import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady';
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data/marketplaceData';
import { SearchSuggestion } from '@/types/search';
import { logErrorToProduction } from '@/utils/productionLogger';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2 } from 'lucide-react';

interface SearchResult {
  id: string;
  type: "product" | "service" | "talent" | "blog" | "doc";
  title: string;
  description: string
}
function highlight(text: string, term: string) {
  if (!term) return text;
  const escaped = null;
              router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
            }}
            searchSuggestions = {suggestions,}
origin/cursor/automate-test-improve-and-merge-code-2533
            placeholder="Search talent, jobs, and projects..."
        </form>
        {loading && (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
          </div>
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
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  );
  setQuery (urlQuery) ;

}, [router.isReady, router.query.q]), //Fixed dependency array //Fetch results when query changes useEffect ( () => {;
  if (!router.isReady) return;
if (query.trim () ) {;
  fetchResults (query.trim () ) ;
}else {;
  setResults ([]) ;

}, [router.isReady, query]), //Fixed dependency array const fetchResults = async (term: string) => {;
  if (!term.trim () ) {;
  setResults ([]);
return ;
}setLoading (true);
try {;
  const res = await fetch (`/api/search?query=$ {;
  encodeURIComponent (term) ;
}`);
const data = await res.json ();
if (data && data.results && Array.isArray (data.results) ) {;
  setResults (data.results) ;
}else {;
  setResults ([]);';
logErrorToProduction ('Search API response structure is not as expected:', {;
  data: data ;
}) ;

}catch (error) {';
  logErrorToProduction ('Search failed:', {;
  data: error ;
});
setResults ([]) ;
}finally {;
  setLoading (false) ;

};
const handleSubmit = (e: React.FormEvent) => {;
  e.preventDefault ();
router.push (`/search?q=$ {;
  encodeURIComponent (query.trim () ) ;
}`) ;

};
//Add key prop to force re-render when route changes </div>) ;
}{;
  !loading && marketplaceResults.length === 0 && blogResults.length > 0 && (<div> <p className="text-zion-slate-light mb-2" >No marketplace results found. Related blog posts:</p> <div className="space-y-4" > {;
  blogResults.map (r => (</div>) ) ;
}</div> </div>) ;
}</p> </div>) ) ;
}</TabsContent> <div key= {;
  `talent-$ {;
  r.id ;
}` ";
}className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4" > </p> </div>) ) ;
}</TabsContent> <div key= {;
  `doc-$ {;
  r.id ;
}` ";
}className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4" > </p> </div>) ) ;
}</TabsContent> <div key= {;
  `blog-$ {;
  r.id ;
}` ";
}className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4" > </p> </div>) ) ;
}</TabsContent> </Tabs>) ;
}</main> </div>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
