 // Initial services from existing data const INITIAL SERVICES: ProductListing[] = SERVICES;
// Market insights component </div> </CardContent> </Card>);
// Filter controls <option value="">All Categories</option> {
  categories.map ( (cat: string) => <option key= {
  cat 
}value= {
  cat 
}> {
  cat 
}</option>) 
}</select> </div> <div className="flex items-center gap-2"> <SortAsc className="h-4 w-4 text-muted-foreground" /> </Button> </div>);
// Service card return (<Card className="h-full hover:shadow-lg transition-shadow"> <CardHeader className="pb-3"> <div className="flex items-start justify-between"> <div className="flex-1 min-w-0"> <h3 className="font-semibold text-lg mb-1 line-clamp-1"> {
  service.title 
}</h3> <div className="flex items-center gap-2 mb-2"> <div className="flex items-center gap-1"> <Star className="h-4 w-4 text-yellow-500 fill-current" /> AI Score: {
  service.aiScore 
}</Badge>) 
}</div> </Badge> </div> </div> <p className="text-sm text-muted-foreground mb-3 line-clamp-2"> {
  service.description 
}</p> <div className="flex items-center justify-between"> <ShoppingCart className="h-4 w-4 mr-1" /> Contact </Button> </div> </CardHeader> </Card>) 
};
// Loading grid const ServicesLoadingGrid = ({
  count = 8 
}: {
  count?: number 
}) => (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> {
  Array.from ({
  length: count 
}) .map ( (, i) => <SkeletonCard key= {
  i 
}/>) 
}</div>);
// Main component let allServices: ProductListing[] = [];
if (page === 1) {
  filteredServices.sort ( (a, b) => {
  switch (sortBy) {
  case 'price-low': return (a.price || 0) - (b.price || 0);
case 'price-high': return (b.price || 0) - (a.price || 0);
case 'rating': return (b.rating || 0) - (a.rating || 0);
case 'ai-score': if (loading && services.length === 0) {
  return (<div className="container py-8"> <motion.div initial= {
  {
  opacity: 0, y: 20 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}className="text-center mb-8"> <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> IT & AI Services </h1> <p className="text-muted-foreground text-lg">Professional services for modern businesses and enterprises</p> </motion.div> <ServicesLoadingGrid /> </div>) 
}if (error) {
  return (<div className="container py-8 text-center"> <h2 className="text-2xl font-bold mb-4">Error Loading Services</h2> <p className="text-muted-foreground mb-4">Failed to load services. Please try again.</p> <Button onClick= {
  refresh 
}>Retry</Button> </div>) 
}return (<div className="container py-8"> <motion.div className="text-center mb-8" initial= {
  {
  opacity: 0, y: -20 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}> <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> IT & AI Services </h1> <p className="text-muted-foreground text-lg">Professional services for digital transformation and technology innovation</p> </motion.div> {
  marketStats && (<motion.div initial= {
  {
  opacity: 0, y: 20 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  delay: 0.2 
}
}> <ServicesMarketInsights stats= {
  marketStats 
}/> </motion.div>) 
}<motion.div initial= {
  {
  opacity: 0, y: 20 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  delay: 0.3 
}
}> <ServiceFilterControls sortBy= {
  sortBy 
}setSortBy= {
  setSortBy 
}filterCategory= {
  filterCategory 
}setFilterCategory= {
  setFilterCategory 
}categories= {
  categories 
}showRecommended= {
  showRecommended 
}setShowRecommended= {
  setShowRecommended 
}loading= {
  isFetching 
}/> </motion.div> <motion.div key= {
  item.id 
}ref= {
  index === services.length - 1 ? lastElementRef : null 
}initial= {
  {
  opacity: 0, scale: 0.9 
}
}animate= {
  {
  opacity: 1, scale: 1 
}
}exit= {
  {
  opacity: 0, scale: 0.9 
}
}transition= {
  {
  delay: Math.min (index * 0.03, 0.5) 
}
}whileHover= {
  {
  scale: 1.02 
}
}> <ServiceCard service= {
  item 
}onViewDetails= {
  () => router.push (`/services/$ {
  item.id 
}`) 
}/> </motion.div>) ) 
}</AnimatePresence> </motion.div> {
  (isFetching || loading) && (<motion.div className="mt-8" initial= {
  {
  opacity: 0 
}
}animate= {
  {
  opacity: 1 
}
}> <ServicesLoadingGrid count= {
  4 
}/> </motion.div>) 
}{
  !hasMore && services.length > 0 && (<motion.div className="text-center mt-12 py-8 border-t" initial= {
  {
  opacity: 0 
}
}animate= {
  {
  opacity: 1 
}
}> <div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available services!</div> <div className="text-sm text-muted-foreground">Showing {
  services.length 
}IT & AI services</div> </motion.div>) 
}<AnimatePresence> {
  showScrollTop && (<motion.button onClick= {
  scrollToTop 
}className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50" initial= {
  {
  opacity: 0, scale: 0 
}
}animate= {
  {
  opacity: 1, scale: 1 
}
}exit= {
  {
  opacity: 0, scale: 0 
}
}whileHover= {
  {
  scale: 1.1 
}
}whileTap= {
  {
  scale: 0.9 
}
}> <ArrowUp className="h-5 w-5 text-primary-foreground" /> </motion.button>) 
}</AnimatePresence> </div>) 
}