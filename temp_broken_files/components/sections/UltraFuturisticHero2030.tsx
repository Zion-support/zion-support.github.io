 {
  /* Background Glow Effects */ 
}<div className="absolute inset-0 pointer-events-none" > <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" ></div> <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" ></div> <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl" ></div> </div> > <Sparkles className="w-4 h-4 mr-2" /> Welcome to 2030 - The Future is Now </motion.div> <motion.h1 > <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent" > Zion Tech Group </span> </motion.h1> <motion.p > Transform your business with cutting-edge micro SAAS solutions, enterprise IT services, and revolutionary AI platforms that define the next decade of technological innovation. </motion.p> </motion.div> {
  /* CTA Buttons */ 
}<motion.div > <Link href="/contact" className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-2xl text-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-purple-500/25" > <span className="relative z-10 flex items-center" > Get Started Today <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" /> </span> <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" ></div> </a> <Link href="/services" className="group px-8 py-4 border-2 border-purple-500/30 text-purple-300 font-semibold rounded-2xl text-lg hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30" > <span className="flex items-center" > Explore Services <Play className="ml-2 w-5 h-5 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" /> </span> </a> </motion.div> {
  /* Features Grid */ 
}<motion.div > {
  features.map ( (feature, index) => (<motion.div key= {
  index 
}> <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300" > <feature.icon className="w-6 h-6 text-white" /> </div> </motion.div>) ) 
}</motion.div> {
  /* Stats Section */ 
}<motion.div > {
  stats.map ( (stat, index) => (<motion.div key= {
  index 
}> <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300" > <stat.icon className="w-8 h-8 text-purple-400" /> </div> </motion.div>) ) 
}</motion.div> {
  /* Contact Information */ 
}<motion.div </a> </div> </div> </motion.div> {
  /* Trust Indicators */ 
}<motion.div > <p className="text-gray-400 text-sm mb-4" >Trusted by leading companies worldwide</p> <div className="flex items-center justify-center space-x-8 opacity-60" > <div className="flex items-center space-x-2" > <CheckCircle className="w-5 h-5 text-green-400" /> <span className="text-gray-300 text-sm" >ISO 27001 Certified</span> </div> <div className="flex items-center space-x-2" > <Award className="w-5 h-5 text-yellow-400" /> <span className="text-gray-300 text-sm" >Award Winning</span> </div> <div className="flex items-center space-x-2" > <TrendingUp className="w-5 h-5 text-blue-400" /> <span className="text-gray-300 text-sm" >Industry Leader</span> </div> </div> </motion.div> </div> /> </div> </section>) 
}