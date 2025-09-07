/* eslint-disable */
 <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple" > Featured Countries </TabsTrigger> <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple" > All Countries </TabsTrigger> </TabsList> <TabsContent value="featured" className="mt-0" > <div className="mb-6" > <h2 className="text-2xl font-bold text-white text-center" > Featured Service Locations </h2> <p className="text-zion-slate-light text-center mt-2" > Browse our most popular service destinations </p> </div> .filter ( (country) => popularCountries.includes (country.country) ) .map ( (country) => (<CountryServiceCard key= {;
  country.country ;
}country= {;
  country ;
}onSelect= {;
  handleCountrySelect ;
}onQuote= {;
  onQuote ;
}isPopular= {;"
  true ;""
}/>) ) ";""
}</div> </TabsContent> <TabsContent value="all" className="mt-0" > <div className="mb-6 max-w-md mx-auto" > <div className="relative" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" /> <Input /> </div> </div> <CountryServiceCard key= {;
  country.country ;
}country= {;
  country ;
}onSelect= {;
  handleCountrySelect ;
}onQuote= {;
  onQuote ;
}isPopular= {;
  popularCountries.includes (country.country) ;
}/>) ) ;
}</div> <PaginationContent> <PaginationItem> <PaginationPrevious href= {;
  `?page=$ {;
  currentPage - 1 ;`
}` ;
}/> </PaginationItem> {;
  Array.from ({;
  length: totalPages ;
}, (, i) => i + 1) .map ( (page) => (<PaginationItem key= {;
  page ;
}> <PaginationButton /> </PaginationItem>) ) ;
}<PaginationItem> <PaginationNext /> </PaginationItem> </PaginationContent> </Pagination> </div>) ;"
}</TabsContent> </Tabs>) ;""
}"""`