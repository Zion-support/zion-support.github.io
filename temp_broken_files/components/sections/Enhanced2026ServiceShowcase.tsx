 
}
};
}
};
}
};
const renderServiceCard = (service: unknown, index: number) => (<motion.div <span>Popular</span> </div>) 
}</div> </div>) ) 
}</div> </div> > <span>Learn More</span> <ArrowRight className="w-4 h-4" /> </motion.button> </div> </div> </div> </div> > <div className="flex items-center justify-center space-x-2 mb-4" > <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center" > <Rocket className="w-5 h-5 text-white" /> </div> <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider" > Innovation 2026 </span> </div> <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Next-Generation <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > AI & IT Services </span> </h2> </p> </motion.div> {
  /* AI Services Section */ 
}<motion.div > <div className="flex items-center space-x-3 mb-8" > <Brain className="w-6 h-6 text-cyan-400" /> <h3 className="text-2xl font-bold text-white" >AI-Powered Services</h3> </div> <motion.div > {
  innovative2026AIServices.map ( (service, index) => renderServiceCard (service, index) ) 
}</motion.div> </motion.div> {
  /* IT Infrastructure Section */ 
}<motion.div > <div className="flex items-center space-x-3 mb-8" > <Globe className="w-6 h-6 text-purple-400" /> <h3 className="text-2xl font-bold text-white" >IT Infrastructure & Security</h3> </div> <motion.div > {
  innovative2026ITInfrastructureServices.map ( (service, index) => renderServiceCard (service, index) ) 
}</motion.div> </motion.div> {
  /* Micro SAAS Section */ 
}<motion.div initial= {
  {
  opacity: 0, y: 30 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8, delay: 0.6 
}
}> <div className="flex items-center space-x-3 mb-8" > <Zap className="w-6 h-6 text-pink-400" /> <h3 className="text-2xl font-bold text-white" >Micro SAAS Solutions</h3> </div> <motion.div > {
  innovative2026MicroSaasServices.map ( (service, index) => renderServiceCard (service, index) ) 
}</motion.div> </motion.div> {
  /* CTA Section */ 
}<motion.div > <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8" > <h3 className="text-2xl font-bold text-white mb-4" > Ready to Transform Your Business? </h3> <p className="text-slate-300 mb-6 max-w-2xl mx-auto" > Join thousands of businesses already leveraging our innovative AI and IT services to drive growth, efficiency, and competitive advantage. </p> <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4" > <motion.button > Start Free Trial </motion.button> <motion.button 
}