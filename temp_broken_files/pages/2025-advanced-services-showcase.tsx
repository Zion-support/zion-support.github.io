 const filteredServices = allServices .filter (service => {
  const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || case 'popularity': return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
case 'price': case 'rating': return b.rating - a.rating;
case 'newest': const containerVariants = {
  hidden: {
  opacity: 0 
};
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1 
}
}
};
const itemVariants = {
  hidden: {
  opacity: 0, y: 20 
};
visible: {
  opacity: 1, y: 0, transition: {
  duration: 0.5 
}
}
};
</Head> <EnhancedNavigation /> <motion.div initial= {
  {
  opacity: 0, y: 30 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}> <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent" > 2025 Advanced Services Showcase </h1> </div> <div className="text-center" > <div className="text-3xl font-bold text-purple-400 mb-2" >15+</div> <div className="text-white/70" >Technology Categories</div> </div> <div className="text-center" > <div className="text-3xl font-bold text-green-400 mb-2" >99.9%</div> <div className="text-white/70" >Uptime Guarantee</div> </div> <div className="text-center" > <div className="text-3xl font-bold text-orange-400 mb-2" >24/7</div> <div className="text-white/70" >Expert Support</div> </div> </div> </motion.div> </div> </section> /> </div> </div> > {
  categories.map ( (category) => (<option key= {
  category.id 
}value= {
  category.id 
}> {
  category.name 
}({
  category.count 
}) </option>) ) 
}</select> </div> > <option value="popularity" >Popularity</option> <option value="price" >Price (Low to High) </option> <option value="rating" >Rating</option> <option value="newest" >Newest</option> </select> </div> /> </div> </div> <button onClick= {
  () => setViewMode ('grid') 
}className= {
  `p-2 rounded-lg transition-all duration-300 $ {
  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white' 
}` 
}> <Grid className="w-5 h-5" /> </button> <button onClick= {
  () => setViewMode ('list') 
}className= {
  `p-2 rounded-lg transition-all duration-300 $ {
  viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white' 
}` 
}> <List className="w-5 h-5" /> </button> </div> </div> </div> </motion.div> </div> </section> </p> </motion.div> {
  /* Services Display */ 
}<motion.div Popular </span>) 
}</div> + {
  service.features.length - 3 
}more features </div>) 
}</div> </div> </span> </div> {
  service.technology.length > 2 && '...' 
}</div> </div> {
  /* ROI and Benefits */ 
}<div className="mb-6" > <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-4 border border-cyan-500/20" > <h4 className="text-cyan-400 font-semibold mb-2" >ROI & Benefits</h4> <p className="text-white/80 text-sm mb-3" > {
  service.roi 
}</p> <div className="flex flex-wrap gap-2" > {
  service.benefits.slice (0, 2) .map ( (benefit, idx) => (<span key= {
  idx 
}className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full" > {
  benefit 
}
}</div> </div> </div> > <ExternalLink className="w-4 h-4" /> Learn More </Link> <a > <ZapIcon className="w-4 h-4" /> Contact </Link> </div> </div> </motion.div>) ) 
}</AnimatePresence> </motion.div> > <div className="text-6xl mb-4" >🔍</div> <h3 className="text-2xl font-bold text-white mb-2" >No services found</h3> <p className="text-white/70 mb-6" >Try adjusting your search criteria or filters</p> <button > Clear Filters </button> </motion.div>) 
}</div> </section> <motion.div initial= {
  {
  opacity: 0, y: 30 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}viewport= {
  {
  once: true 
}
}> Ready to Transform Your Business? </h2> <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto" > Our advanced services are designed to give you a competitive edge in the rapidly evolving technology landscape. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2" > Schedule Consultation <ArrowRight className="w-5 h-5" /> </Link> <a href="tel:+13024640950" className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2" > Call +1 302 464 0950 </Link> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>) 
}