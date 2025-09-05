 export default function ITSolutionsPage () {
  return (<div className="space-y-8"> {
  /* Header */ 
}<div className="text-center space-y-4"> <h1 className="text-4xl font-bold">IT Solutions & Services</h1> <p className="text-xl opacity-80 max-w-3xl mx-auto"> Enterprise-grade IT solutions designed to modernize your infrastructure, enhance security, and drive operational efficiency across your organization. </p> </div> {
  /* IT Services Grid */ 
}<div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> {
  itServices.map (service => (<div key= {
  service.id 
}className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-6" > {
  /* Service Header */ 
}<div className="text-center space-y-3"> <div className="text-4xl"> {
  service.icon 
}</div> <h2 className="text-2xl font-bold"> {
  service.name 
}</h2> <p className="opacity-80"> {
  service.description 
}</p> <div className="text-2xl font-bold text-blue-400"> {
  service.pricing 
}</div> <div className="text-sm opacity-60">Timeline: {
  service.timeline 
}</div> </div> {
  /* Deliverables */ 
}<div> <h3 className="font-semibold mb-3 text-blue-400">Deliverables</h3> <div className="grid grid-cols-1 gap-2"> {
  service.deliverables.map ( (deliverable, index) => (<div key= {
  index 
}className="flex items-center gap-2 text-sm"> <span className="text-green-400">✓</span> <span> {
  deliverable 
}</span> </div>) ) 
}</div> </div> {
  /* Features */ 
}<div> <h3 className="font-semibold mb-3 text-purple-400">Key Features</h3> <div className="grid grid-cols-1 sm:grid-cols-2 gap-2"> {
  service.features.map ( (feature, index) => (<div key= {
  index 
}className="flex items-center gap-2 text-sm"> <span className="text-blue-400">⚙️</span> <span> {
  feature 
}</span> </div>) ) 
}</div> </div> {
  /* Technologies */ 
}<div> <h3 className="font-semibold mb-3 text-green-400">Technologies</h3> <div className="grid grid-cols-1 sm:grid-cols-2 gap-2"> {
  service.technologies.map ( (tech, index) => (<div key= {
  index 
}className="flex items-center gap-2 text-sm"> <span className="text-yellow-400">🔧</span> <span> {
  tech 
}</span> </div>) ) 
}</div> </div> {
  /* Industries */ 
}<div> <h3 className="font-semibold mb-3 text-orange-400">Industries Served</h3> <div className="grid grid-cols-1 sm:grid-cols-2 gap-2"> {
  service.industries.map ( (industry, index) => (<div key= {
  index 
}className="flex items-center gap-2 text-sm"> <span className="text-purple-400">🏢</span> <span> {
  industry 
}</span> </div>) ) 
}</div> </div> {
  /* CTA */ 
}<div className="space-y-3 pt-4 border-t border-white/10"> <a href= {
  service.contactLink 
}className="w-full block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold" > Get Started </a> <a href= {
  `https://ziontechgroup.com/services/$ {
  service.id 
}` 
}className="w-full block text-center text-blue-400 hover:text-blue-300 text-sm underline" > Learn More </a> </div> </div>) ) 
}</div> {
  /* IT Capabilities Overview */ 
}<div className="space-y-6"> <h2 className="text-3xl font-bold text-center">IT Capabilities Overview</h2> <div className="grid grid-cols-1 md:grid-cols-4 gap-6"> <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10"> <div className="text-3xl mb-3">☁️</div> <h3 className="font-semibold mb-2">Cloud Solutions</h3> <p className="text-sm opacity-80">Multi-cloud strategy, migration, and optimization</p> </div> <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10"> <div className="text-3xl mb-3">🔒</div> <h3 className="font-semibold mb-2">Cybersecurity</h3> <p className="text-sm opacity-80">Comprehensive security and compliance solutions</p> </div> <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10"> <div className="text-3xl mb-3">🌐</div> <h3 className="font-semibold mb-2">Infrastructure</h3> <p className="text-sm opacity-80">Network design, implementation, and management</p> </div> <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10"> <div className="text-3xl mb-3">💡</div> <h3 className="font-semibold mb-2">Strategy</h3> <p className="text-sm opacity-80">IT strategy and digital transformation consulting</p> </div> </div> </div> {
  /* CTA Section */ 
}<div className="text-center space-y-6 py-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-white/10"> <h2 className="text-3xl font-bold">Ready to Modernize Your IT Infrastructure?</h2> <p className="text-xl opacity-80 max-w-2xl mx-auto"> Let's discuss how our IT solutions can transform your technology landscape;
enhance security, and drive operational efficiency. Get in touch for a comprehensive IT assessment. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <a href="mailto:kleber@ziontechgroup.com?subject=IT%20Solutions%20Consultation" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg" > Schedule IT Consultation </a> <a href="tel:+13024640950" className="border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all font-semibold text-lg" > Call: +1 302 464 0950 </a> </div> </div> {
  /* Back to Services */ 
}<div className="text-center"> <a href="/services" className="inline-block px-6 py-3 rounded-lg border border-white/20 text-white hover: bg-white/10 transition-all font-semibold" > ← Back to All Services </a> </div> </div>) 
}