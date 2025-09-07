 const filteredServices = selectedCategory === 'all' ? allServices : allServices.filter (service => service.category === selectedCategory);
return (<> <Head> <title>Comprehensive Pricing 2025 - Zion Tech Group</title> <motion.div initial= {
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
}> <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent" > Comprehensive Pricing 2025 </h1> <button onClick= {
  () => setBillingCycle (billingCycle === 'monthly' ? 'yearly' : 'monthly') 
}className= {
  `relative w-16 h-8 rounded-full transition-all duration-300 $ {
  billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-white/20' 
}` 
}> <div className= {
  `absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 $ {
  billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1' 
}` 
}/> </button> Save 20% </span>) 
}</div> </div> <div className="bg-white/5 rounded-2xl p-6 border border-white/10" > <div className="text-3xl font-bold text-green-400" >99.9%</div> <div className="text-white/60" >Uptime Guarantee</div> </div> <div className="bg-white/5 rounded-2xl p-6 border border-white/10" > <div className="text-3xl font-bold text-purple-400" >24/7</div> <div className="text-white/60" >Support Available</div> </div> <div className="bg-white/5 rounded-2xl p-6 border border-white/10" > <div className="text-3xl font-bold text-orange-400" >500%+</div> <div className="text-white/60" >Average ROI</div> </div> </div> </motion.div> </div> </section> > {
  categories.map ( (category) => (<button key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 $ {
  selectedCategory === category.id ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg' : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white' 
}` 
}> <span> {
  category.icon 
}</span> {
  category.name 
}</button>) ) 
}</motion.div> </div> </section> Popular </div>) 
}</div> </div> </div> </div>) ) 
}</div> </div> </div> {
  /* Expand/Collapse Button */ 
}<button > {
  expandedService === service.id ? 'Show Less' : 'View Details' 
}<ChevronDown className= {
  `w-4 h-4 transition-transform duration-300 $ {
  expandedService === service.id ? 'rotate-180' : '' 
}` 
}/> </button> {
  /* CTA Button */ 
}<a > Get Started <ExternalLink className="w-4 h-4" /> </Link> </div> {
  /* Expanded Details */ 
}<AnimatePresence> </span>) ) 
}</div> </div> </div>) ) 
}</div> </div> </div>) ) 
}</div> </div> </div> </div> </div> </motion.div>) 
}</AnimatePresence> </motion.div>) ) 
}</AnimatePresence> </div> </div> </section> > <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30" > <h2 className="text-3xl font-bold text-white mb-4" > Ready to Get Started? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Contact our sales team to discuss your specific needs and get a customized quote for our revolutionary micro SAAS services. </p> <a href="mailto:kleber@ziontechgroup.com" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2" > Contact Sales Team <ArrowRight className="w-5 h-5" /> </Link> <a href="tel:+13024640950" className="bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2" > Call +1 302 464 0950 </Link> </div> </div> </motion.div> </div> </section> </div> </>) 
}