 </div> </div> </CardContent> </Card>);
//Filter and sort controls for talents > <option value="">All Specializations</option> {
  specializations.map (spec => (<option key= {
  spec 
}value= {
  spec 
}> {
  spec 
}</option>) ) 
}</select> </div> <div className="flex items-center gap-2"> <Users className="h-4 w-4 text-muted-foreground"/> <select > <option value="">All Availability</option> <option value=" full time">Full Time</option> <option value=" part time">Part Time</option> <option value=" project">Project Based</option> <option value=" consulting">Consulting</option> </select> </div> <div className=" flex items-center gap-2"> <SortAsc className=" h-4 w-4 text-muted-foreground"/> <select > <option value=" newest">Newest First</option> <option value=" hourly-rate-low">Rate: Low to High</option> <option value=" hourly-rate-high">Rate: High to Low</option> <option value=" rating">Highest Rated</option> <option value=" experience">Most Experienced</option> <option value=" verified">Verified First</option> </select> </div> <Button </Button> </div>);
//Talent card component <Card className="h-full hover:shadow-lg transition-shadow"> <CardHeader className="pb-3"> <div className="flex items-start justify-between"> <div className="flex items-start gap-3"> talent.skills.length - 4 
}more </Badge>) 
}</div> </Badge> <Button size=" sm"onClick= {
  onHire 
}> //Loading skeleton for talent grid) ) 
}</div>);
//Main enhanced talents page with infinite scroll //Fetch function for infinite scroll with AI talent generation const fetchTalents = useCallback (async (page: number, limit: number) => {
  //Add realistic loading delay let allTalents: TalentProfile[] = [];
//Start with existing talent profiles if (page === 1) {
  allTalents = [...allTalents, ...newTalents];
//Apply filters if (filterSpecialization) {
  filteredTalents = filteredTalents.filter (t => t.professional title?.toLowerCase () .includes (filterSpecialization.toLowerCase () ) //Apply sorting filteredTalents.sort ( (a, b) => {
  switch (sortBy) {
  case 'hourly-rate-low': return (a.hourly rate || 0) - (b.hourly rate || 0);
case 'hourly-rate-high': return (b.hourly rate || 0) - (a.hourly rate || 0);
case 'rating': return (b.average rating || 0) - (a.average rating || 0);
case 'experience': return (b.years experience || 0) - (a.years experience || 0);
case 'verified': return (b.is verified ? 1 : 0) - (a.is verified ? 1 : 0);
case 'newest': > <h1 className=" text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> AI & IT Talent Directory </h1> <p className=" text-muted-foreground text-lg"> Connect with world-class AI and technology professionals </p> </motion.div> <TalentLoadingGrid /> </div>) 
}//Error state </div> </div>) 
}//Main render return (> <h1 className=" text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> AI & IT Talent Directory </h1> <p className=" text-muted-foreground text-lg"> Connect with world-class professionals specializing in AI, machine learning, and modern technology </p> </motion.div> {
  /* Market Insights */ 
}{
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
}> <TalentMarketInsights stats= {
  marketStats 
}/> </motion.div>) 
}{
  /* Filter Controls */ 
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
}> <TalentFilterControls sortBy= {
  sortBy 
}setSortBy= {
  setSortBy 
}filterSpecialization= {
  filterSpecialization 
}setFilterSpecialization= {
  setFilterSpecialization 
}filterAvailability= {
  filterAvailability 
}setFilterAvailability= {
  setFilterAvailability 
}specializations= {
  specializations 
}showRecommended= {
  showRecommended 
}setShowRecommended= {
  setShowRecommended 
}loading= {
  isFetching 
}/> </motion.div> {
  /* Talent Grid */ 
}<motion.div <motion.div key= {
  talent.id 
}ref= {
  index === talents.length - 1 ? lastElementRef : null 
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
}> <TalentCard talent= {
  talent 
}onHire= {
  () => router.push (`/hire/$ {
  talent.id 
}`) 
}/> </motion.div>) ) 
}</AnimatePresence> </motion.div> {
  /* Loading More Indicator */ 
}{
  (isFetching || loading) && (<motion.div > <TalentLoadingGrid count= {
  4 
}/> </motion.div>) 
}{
  isFetching ? (<Spinner className=" mx-auto h-6 w-6"/>) : (<Button onClick= {
  loadMore 
}>Load More</Button>) 
}</p>) 
}</div>) 
}{
  /* End of Results */ 
}{
  !hasMore && talents.length > 0 && (<motion.div > <div className=" text-muted-foreground text-lg mb-2"> 🎉 You've explored all available talents! </div> </div> </motion.div>) 
}{
  /* Scroll to Top Button */ 
}<AnimatePresence> {
  showScrollTop && (<motion.button onClick= {
  scrollToTop 
}> <ArrowUp className=" h-5 w-5 text-primary-foreground" /> </motion.button>) 
}</AnimatePresence> </div>) 
}