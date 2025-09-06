'use client';
] 
}];
</div> </div> </div> </div> {
  /* Main Navigation */ 
}<nav className= {
  `fixed top-0 left-0 right-0 z-50 transition-all duration-300 $ {
  isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50' </div> <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" ></div> </div> <div> <h1 className="text-xl font-bold text-white" >Zion Tech Group</h1> <p className="text-xs text-gray-400" >Innovation • Intelligence • Impact</p> </div> </a> </button> {
  /* Submenu */ 
}<AnimatePresence> <span key= {
  service 
}className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md" > {
  service 
}</span>) ) 
}+ {
  subitem.services.length - 2 
}more </span>) 
}</div>) 
}</div> </div> </a>) ) 
}</div> </motion.div>) 
}</AnimatePresence> </div>) ) 
}</div> <Link href="/pricing" className="px-6 py-2 text-gray-300 hover:text-white transition-colors duration-200" > Pricing </a> <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105" > Get Started </a> </div> {
  /* Mobile Menu Button */ 
}<button </button> </div> </div> </nav> {
  /* Mobile Menu */ 
}<AnimatePresence> {
  isOpen && (<motion.div {
  item.badge 
}</span>) 
}</div> <ChevronDown className= {
  `w-4 h-4 transition-transform duration-200 $ {
  activeDropdown === item.name ? 'rotate-180' : '' 
}` 
}/> </button> > {
  item.children?.map ( (child) => (<Link key= {
  child.name 
}</span> </a>) ) 
}</motion.div>) 
}</div>) ) 
}> Get Started </a> className="fixed inset-0 z-50 lg:hidden" > {
  /* Backdrop */ 
}<div > <X className="w-6 h-6" /> </button> </div> </div> <ChevronDown className= {
  `w-4 h-4 text-gray-400 transition-transform duration-200 $ {
  activeSubmenu === item.name ? 'rotate-180': '' 
}` 
}/> </button> {
  /* Mobile Submenu */ 
}<AnimatePresence> > {
  item.submenu?.map ( (subitem) => (<Link key= {
  subitem.name 
}) ) 
}</motion.div>) 
}</AnimatePresence> </div>) ) 
}</div> > View Pricing </a> <Link > Contact Us </a> </div> </div> </div> </div> </div> </div> </motion.div>) 
}</AnimatePresence> </>) 
};
export default EnhancedNavigation2025;
