 const filteredServices = allServices.filter (service => {
  const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.category.toLowerCase () .includes (searchTerm.toLowerCase () );
return matchesSearch && matchesCategory && matchesPrice 
});
const sortedServices = [...filteredServices].sort ( (a, b) => {
  switch (sortBy) {
  case 'popularity': return b.popular ? 1 : -1;
case 'price-low': case 'rating': return b.rating - a.rating;
case 'customers': 
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 > <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" > ZionTech Group <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" > 2026 Services </span> </h1> </div> <div className="flex items-center space-x-2 text-white" > <Star className="w-5 h-5 text-yellow-400" /> <span>4.5+ Average Rating</span> </div> <div className="flex items-center space-x-2 text-white" > <TrendingUp className="w-5 h-5 text-green-400" /> <span>Growing Rapidly</span> </div> </div> </motion.div> </div> </div> /> </div> {
  /* Category Filter */ 
}<div> <select </option>) ) 
}</select> </div> {
  /* Price Range Filter */ 
}<div> <select </option>) ) 
}</select> </div> {
  /* Sort By */ 
}<div> <select > <option value="popularity" className="bg-gray-800 text-white" >Sort by Popularity</option> <option value="price-low" className="bg-gray-800 text-white" >Price: Low to High</option> <option value="price-high" className="bg-gray-800 text-white" >Price: High to Low</option> <option value="rating" className="bg-gray-800 text-white" >Sort by Rating</option> <option value="customers" className="bg-gray-800 text-white" >Sort by Customers</option> </select> </div> </div> </div> </div> </h2> <p className="text-gray-300" > Discover innovative solutions tailored to your business needs </p> </div> Popular </div>) 
}</div> </li>) ) 
}</ul> </div> </div> {
  /* CTA Button */ 
}<a > Learn More & Get Started </Link> </div> </div> </motion.div>) ) 
}</div> </div> <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30"> <div className="text-center"> <h2 className="text-3xl font-bold text-white mb-4"> text-xl text-gray-300 mb-8 max-w-2xl mx-auto"> Get in touch with our team to discuss how our innovative services can help you achieve your goals. </p> <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> <div className=" text-center"> <div className=" w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4"> <Users className=" w-8 h-8 text-cyan-400"/> </div> <h3 className=" text-lg font-semibold text-white mb-2">Expert Team</h3> <p className=" text-gray-300 text-sm">Dedicated professionals ready to help</p> </div> <div className=" text-center"> <div className=" w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4"> <Zap className=" w-8 h-8 text-blue-400"/> </div> <h3 className=" text-lg font-semibold text-white mb-2">Fast Implementation</h3> <p className=" text-gray-300 text-sm">Quick setup and deployment</p> </div> <div className=" text-center"> <div className=" w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4"> <Shield className=" w-8 h-8 text-purple-400"/> </div> <h3 className=" text-lg font-semibold text-white mb-2">24/7 Support</h3> <p className=" text-gray-300 text-sm">Round-the-clock assistance</p> </div> </div> <div className=" flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href=" mailto:kleber@ziontechgroup.com"className=" bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"> Email Us </Link> <a href=" tel:+13024640950"className=" bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300" > Call Us </Link> </div> </div> </div> </div> </div>) 
};
export default ComprehensiveServicesShowcase2026;
