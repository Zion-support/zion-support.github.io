 const SpaceTechnologyPage: React.FC = () => {
  const spaceServices = [ {
  return (<Layout> <SEO <motion.div initial= {
  {
  opacity: 0, y: 20 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}> <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-600 bg-clip-text text-transparent" > Space Technology </h1> <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto" > Pioneering the future of space exploration with cutting-edge technology and intelligent systems </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105" > Get Started </Link> <a href="/contact" className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105" > Schedule Demo </Link> </div> </motion.div> </div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent" > Space Capabilities </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Comprehensive space technology solutions for the next generation of exploration </p> </motion.div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent" > Space Services </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Choose from our comprehensive suite of space technology solutions </p> </motion.div> <motion.div key= {
  service.id 
}initial= {
  {
  opacity: 0, y: 20 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.6, delay: index * 0.1 
}
}viewport= {
  {
  once: true 
}
}className= {
  `relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border transition-all duration-300 hover:scale-105 $ {
  service.popular ? 'border-purple-500 shadow-lg shadow-purple-500/25' : 'border-gray-700 hover:border-purple-500' 
}` 
}> Most Popular </span> </div>) 
}</li>) ) 
}</ul> <a href="/contact" className="w-full block text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300" > Get Started </Link> </motion.div>) ) 
}</div> </div> </section> <motion.div initial= {
  {
  opacity: 0, y: 20 
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
}> Ready to Explore Space? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Join the space revolution and be part of humanity's next great adventure </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105" > Start Your Space Journey </Link> <a href="/contact" className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105" > Schedule Consultation </Link> </div> </motion.div> </div> </section> </main> </Layout>) 
};
export default SpaceTechnologyPage;
