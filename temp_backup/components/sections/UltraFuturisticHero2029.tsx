 />) ) 
}</div> > <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6" > <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent" > 2029 </span> <br /> <span className="text-white" > Future Technology </span> <br /> <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent" > Revolution </span> </h1> <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed" > Experience the future of technology with Zion Tech Group's revolutionary 2029 services. From AI consciousness evolution to quantum space mining, we're building tomorrow's solutions today. </p> </motion.div> {
  /* CTA Buttons */ 
}<motion.div > <Link href="/services" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2" > <span>Explore Services</span> <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> </a> <Link href="/contact" className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2" > <span>Get Started</span> <Zap className="w-5 h-5" /> </a> </motion.div> {
  /* Features Grid */ 
}<motion.div > {
  features.map ( (feature, index) => (<motion.div key= {
  feature.text 
}</p> </motion.div>) ) 
}</motion.div> {
  /* Stats */ 
}<motion.div > {
  stats.map ( (stat, index) => (<motion.div key= {
  stat.label 
}> <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform" > <stat.icon className="w-8 h-8 text-cyan-400" /> </div> </div> </motion.div>) ) 
}</motion.div> {
  /* Scroll Indicator */ 
}<motion.div /> </motion.div> </motion.div> </div> {
  /* Floating Elements */ 
}<motion.div /> </section>) 
}