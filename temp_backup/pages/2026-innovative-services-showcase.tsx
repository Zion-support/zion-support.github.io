 // Category filter
if (selectedCategory !== 'all') {
  filtered = filtered.filter(service => {
    switch (selectedCategory) {
      case 'ai': 
        return service.category?.includes('AI');
      case 'quantum': 
        return service.category?.includes('Quantum');
      case 'enterprise': 
        return service.category?.includes('Enterprise');
      case 'micro-saas': 
        return service.category?.includes('Micro SaaS');
      case 'emerging': 
        return service.category?.includes('Emerging');
      default: 
        return true;
    }
  });
}

// Price filter
if (selectedPriceRange !== 'all') {
  filtered = filtered.filter(service => {
    const price = service.price;
    switch (selectedPriceRange) {
      case 'low': 
        return price < 500;
      case 'medium': 
        return price >= 500 && price <= 1000;
      case 'high': 
        return price > 1000;
      default: 
        return true;
    }
  });
}

// Search filter
if (searchTerm) {
  filtered = filtered.filter(service => 
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    service.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// Sort
filtered.sort((a, b) => {
  switch (sortBy) {
    case 'price': 
      return a.price - b.price;
    case 'rating': 
      return b.rating - a.rating;
    case 'popularity': 
      return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
    default: 
      return 0;
  }
});
const containerVariants = {
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
  y: 20, opacity: 0 
};
visible: {
  y: 0, opacity: 1, transition: {
  duration: 0.5 
}
}
};
return (<> <Head> <title>2026 Innovative Services Showcase - Zion Tech Group</title> /> <UltraAdvancedNavigation2026 /> > <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6" > 2026 Innovative Services </h1> <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed" > Discover the future of technology with our cutting-edge 2026 services. From AI-powered solutions to quantum computing and emerging technologies, transform your business with next-generation innovation. </p> </motion.div> <motion.div </div> <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3" > <span className="text-purple-400 font-semibold" >AI-Powered</span> </div> <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3" > <span className="text-green-400 font-semibold" >Quantum Ready</span> </div> <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3" > <span className="text-orange-400 font-semibold" >Future-Proof</span> </div> </motion.div> {
  /* Search and Filters */ 
}<motion.div > <div className="relative mb-8" > <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /> <input key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `px-6 py-3 rounded-full backdrop-blur-sm border transition-all duration-300 $ {
  selectedCategory === category.id ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 border-blue-500/50 text-blue-300' : 'bg-gray-900/30 border-gray-700/50 text-gray-300 hover:bg-gray-800/50' 
}` 
}> </button>) ) 
}</div> key= {
  range.id 
}onClick= {
  () => setSelectedPriceRange (range.id) 
}className= {
  `px-4 py-2 rounded-lg backdrop-blur-sm border transition-all duration-300 $ {
  selectedPriceRange === range.id ? 'bg-gradient-to-r from-green-600/30 to-emerald-600/30 border-green-500/50 text-green-300' : 'bg-gray-900/30 border-gray-700/50 text-gray-300 hover:bg-gray-800/50' 
}` 
}> {
  range.name 
}</button>) ) 
}</div> </motion.div> </div> </section> > {
  filteredServices.map ( (service) => (<motion.div key= {
  service.id 
}POPULAR </span>) 
}</div>) 
}</div> </div> <span>Learn More</span> <ArrowRight className="w-4 h-4" /> </span> </button> </Link> </div> </div> </motion.div>) ) 
}</motion.div> > <div className="text-gray-400 text-xl mb-4" >No services found matching your criteria</div> <button > Clear Filters </button> </motion.div>) 
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
}> Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8" > Contact our team to learn more about our innovative 2026 services and how they can revolutionize your operations. </p> <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" > <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6" > <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" /> <h3 className="text-white font-semibold mb-2" >Call Us</h3> <p className="text-blue-300" >+1 302 464 0950</p> </div> <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6" > <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" /> <h3 className="text-white font-semibold mb-2" >Email Us</h3> <p className="text-purple-300" >kleber@ziontechgroup.com</p> </div> <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6" > <Globe className="w-8 h-8 text-green-400 mx-auto mb-4" /> <h3 className="text-white font-semibold mb-2" >Visit Us</h3> <p className="text-green-300" >ziontechgroup.com</p> </div> </div> <Link href="/contact" > <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg" > Get Started Today </button> </Link> </motion.div> </div> </section> </div> </>) 
}