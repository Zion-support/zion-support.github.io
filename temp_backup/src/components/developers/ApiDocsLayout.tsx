/* eslint-disable */
 interface ApiDocsLayoutProps {;
  children: React.ReactNode ;
}export function ApiDocsLayout ({;
  children ;
}: ApiDocsLayoutProps) {;
  const handleSelectSuggestion = (suggestion: SearchSuggestion) => {;
  const path = getDocsSearchPath (suggestion.text);
}
};
const handleSubmit = (e: React.FormEvent) => {;
  e.preventDefault ();
const path = getDocsSearchPath (searchValue);
if (path) {;
  router.push (path);
setSearchValue ("") ;
}"
};""
/* Sidebar */ ";""
}<div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto"> <Link href="/developers/docs"className="flex items-center mb-8"> <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center"> <span className="text-white font-bold">Z</span> </div> <span className="font-bold text-white">API Docs</span> </Link> <div className="mb-6"> /> </form> </div>) ;
}> {;
  item.title ;
}</Link>) ) ;"
}</nav> </div> {;""
  /* Main content */ ";""
}<div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12"> {;
  children ;
}</div> </div>) ;"
}export default ApiDocsLayout;""
"""