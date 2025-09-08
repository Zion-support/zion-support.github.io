/* eslint-disable */
<<<<<<< HEAD
   //Apply search filter const matchesSearch = listing.title.toLowerCase () .includes (searchQuery.toLowerCase () ) || listing.description.toLowerCase () .includes (searchQuery.toLowerCase () ) || (listing.tags && listing.tags.some (tag => tag.toLowerCase () .includes (searchQuery.toLowerCase () ) ) );
=======
 >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Example listing type //Process listings based on filters and search const processedListings = initialListings .filter (listing => {;
  //Apply search filter const matchesSearch = listing.title.toLowerCase () .includes (searchQuery.toLowerCase () ) || listing.description.toLowerCase () .includes (searchQuery.toLowerCase () ) || (listing.tags && listing.tags.some (tag => tag.toLowerCase () .includes (searchQuery.toLowerCase () ) ) );
>>>>>>> origin/resolved-merge-conflicts
//Apply category filters if (selectedFilter === 'all') return matchesSearch;';''
if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating || 0) >= 4;';''
if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore || 0) >= 85;''
switch (selectedSort) {';''
  case 'newest': return new Date (b.createdAt) .getTime () - new Date (a.createdAt) .getTime ();';''
case 'oldest': return new Date (a.createdAt) .getTime () - new Date (b.createdAt) .getTime ();';''
case 'rating-high': return (b.rating || 0) - (a.rating || 0);';''
case 'ai-match': return (b.aiScore || 0) - (a.aiScore || 0);';''
case 'a-z': return a.title.localeCompare (b.title);';''
case 'z-a': return (<> <div className="min-h-screen bg-zion-blue py-12 px-4"> <div className="container mx-auto"> <div className="text-center mb-12"> <GradientHeading> {;""
  title ";""
}</GradientHeading> <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto"> {;
  description ;"
}</p> </div> {;""
  /* Filters and Search */ ";""
}<div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light"> <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> <div className="relative"> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" /> <Input className="pl-10 bg-zion-blue border border-zion-blue-light text-white" /> </div> <Select value= {;
  selectedSort ;"
}onValueChange= {;"'"
  setSelectedSort ";'"'"
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white"> <div className="flex items-center"> {'";'"'"
  selectedSort === 'a-z' ? (<ArrowDownAZ className="mr-2 h-4 w-4" />) : selectedSort === 'z-a' ? (<ArrowUpZA className="mr-2 h-4 w-4" />) : null ;''"
}<span> {';'"'"
  sortOptions.find (option => option.value === selectedSort) ?.label || 'Sort By' ";""
}</span> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light"> {;
  sortOptions.map ( (option) => (<SelectItem key= {;
  option.value ;"
}value= {;""
  option.value ";""
}className="text-white"> {;
  option.label ;
}</SelectItem>) ) ;
}</SelectContent> </Select> <Select value= {;
  selectedFilter ;"
}onValueChange= {;"'"
  setSelectedFilter ";'"'"
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white"> <div className="flex items-center"> <Filter className="mr-2 h-4 w-4" /> <span> {';'"'"
  filterOptions.find (option => option.value === selectedFilter) ?.label || 'Filter' ";""
}</span> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light"> {;
  filterOptions.map ( (option) => (<SelectItem key= {;
  option.value ;"
}value= {;""
  option.value ";""
}className="text-white"> {;
  option.label ;
}</SelectItem>) ) ;"
}</SelectContent> </Select> </div> </div> {;""
  /* Results Count */ ";""
}<div className="mb-6"> </p> </div> {;
  /* Listings Grid */ ;
}<div aria-busy= {;"
  isLoading ;""
}> {";""
  isLoading ? (<ListingGridSkeleton />) : processedListings.length > 0 ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {;
  processedListings.map ( (listing) => (<ListingScoreCard key= {;
  listing.id ;
}title= {;
  listing.title ;
}description= {;
  listing.description ;
}category= {;
  listing.subcategory || listing.category ;
}image= {;
  listing.image ;
}tags= {;
  listing.tags ;
}author= {;
  listing.author ;
}authorImage= {;
  listing.authorImage ;
}aiScore= {;
  listing.aiScore ;
}rating= {;
  listing.rating ;
}reviewCount= {;"
  listing.reviewCount ;""
}/>) ) ";""
}</div>) : (<div className="text-center py-20"> <h3 className="text-xl font-bold text-white mb-2">No listings found</h3> <p className="text-zion-slate-light mb-6" >Try adjusting your filters or search query</p> <Button ;""
}";""
}className="border-zion-purple text-zion-purple hover:bg-zion-purple/10" ;'"
}</div> </div> </div> </>) ;'"'"
}'"'"'"