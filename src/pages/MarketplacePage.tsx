 </div> </div> </CardContent> </Card>);
//Filter controls <option value="">All Categories</option> {
  categories.map ( (cat: string) => <option key= {
  cat 
}value= {
  cat 
}> {
  cat 
}</option>) 
}</select> </div> <div className="flex items-center gap-2"> <SortAsc className="h-4 w-4 text-muted-foreground"/> import {
  {
  {
  useDispatch 
}from 'react-redux';
import {
  {
  type {
  AppDispatch 
}from '@/store';
import {
  {
  {
  addItem 
}from '@/store/cartSlice';
import {
  {
  {
  useAuth 
}from '@/context/auth/AuthProvider';
import {
  {
  {
  toast 
}from '@/hooks/use-toast';
//Product card return (<Card className="h-full hover:shadow-lg transition-shadow"> <CardHeader className="pb-3"> <div className="flex items-start justify-between"> <div className="flex-1 min-w-0"> AI {
  product.aiScore 
}</Badge>) 
}</div> </div> <div className="text-right"> </Badge> </div> </div> </CardHeader> <CardContent className="pt-0"> <div className="flex items-center gap-4 mb-3"> <div className="flex items-center gap-1"> <Star className="h-4 w-4 text-yellow-500 fill-current"/> <span className="text-sm font-medium"> {
  product.rating?.toFixed (1) 
}</span> <span className="text-xs text-muted-foreground"> ({
  product.reviewCount 
}reviews) </span> </div> </div> > <ShoppingCart className="h-4 w-4"/> </Button> View Details </Button> </div> </CardContent> </Card>) 
};
//Loading grid </div>);
//Main component //Sort the processed dataset processedDataset.sort ( (a, b) => {
  switch (sortBy) {
  case 'price-low': return (a.price || 0) - (b.price || 0);
case 'price-high': return (b.price || 0) - (a.price || 0);
case 'rating': return (b.rating || 0) - (a.rating || 0);
case 'popular': return (b.reviewCount || 0) - (a.reviewCount || 0);
case 'ai-score': return (b.aiScore || 0) - (a.aiScore || 0);
default: //'newest' 
}
}, [sortBy, filterCategory, showRecommended]);
return () => clearTimeout (timeoutId) 
}, [sortBy, filterCategory, showRecommended, refresh]);
const [showScrollTop, setShowScrollTop] = useState (false);
useEffect ( () => {
  const handleScroll = () => setShowScrollTop (window.scrollY > 800);
window.addEventListener ('scroll', handleScroll);
return () => window.removeEventListener ('scroll', handleScroll) 
}, []);
return (<> <NextSeo /> <div className="container py-8"> <motion.div initial= {
  {
  opacity: 0, y: 20 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}className="text-center mb-8"> <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {
  t ('marketplace.hero title') 
}</h1> </motion.div> <MarketplaceLoadingGrid /> </div> </>) 
}//Error state if (error && products.length === 0) {
  return (<> <NextSeo /> <div className="container py-8"> <div className="text-center space-y-4"> <AlertTriangle className="mx-auto h-12 w-12 text-red-500"/> <h2 className="text-2xl font-bold">Unable to load marketplace</h2> Try Again </Button> <Button onClick= {
  () => window.location.reload () 
}> Refresh Page </Button> </div> </div> </div> </>) 
}return (<> <NextSeo /> <div className="container py-8"> <motion.div className="text-center mb-8"initial= {
  {
  opacity: 0, y: -20 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}> <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {
  t ('marketplace.hero title') 
}</h1> <p className="text-muted-foreground text-lg"> {
  t ('marketplace.hero subtitle') 
}</p> </motion.div> {
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
}> <MarketplaceInsights stats= {
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
}> <MarketplaceFilterControls sortBy= {
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
  index === products.length - 1 ? lastElementRef : null 
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
}> <MarketplaceCard product= {
  item 
}onViewDetails= {
  () => {
  if (typeof window !== 'undefined') {
  try {
  
}
}/> </motion.div>) ) 
}</AnimatePresence> </motion.div> {
  (isFetching || loading) && products.length > 0 && (<motion.div className="mt-8"initial= {
  {
  opacity: 0 
}
}animate= {
  {
  opacity: 1 
}
}> <MarketplaceLoadingGrid count= {
  4 
}/> </motion.div>) 
}{
  hasMore && !loading && (<div className="text-center mt-8"> {
  isFetching ? (<Spinner className="mx-auto h-6 w-6"/>) : (<Button onClick= {
  loadMore 
}variant=" outline"size=" lg"> Load More Products </Button>) 
}{
  total !== undefined && (<p className="mt-2 text-sm text-muted-foreground"> Showing {
  products.length 
}of {
  total 
}items </p>) 
}</div>) 
}{
  !hasMore && products.length > 0 && (<motion.div className="text-center mt-12 py-8 border-t"initial= {
  {
  opacity: 0 
}
}animate= {
  {
  opacity: 1 
}
}> <div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available products!</div> <div className="text-sm text-muted-foreground">Showing {
  products.length 
}marketplace items</div> </motion.div>) 
}<AnimatePresence> {
  showScrollTop && (<motion.button onClick= {
  scrollToTop 
}className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"initial= {
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
}</AnimatePresence> </div> </>) 
}// Main export 