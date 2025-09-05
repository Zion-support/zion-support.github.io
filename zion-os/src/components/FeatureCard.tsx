 return (<div className= {
  `card group cursor-pointer transition-all duration-300 $ {
  isActive ? 'scale-105 shadow-2xl' : 'hover:scale-105' 
}$ {
  colorClasses[color as keyof typeof colorClasses] 
}` 
}onClick= {
  onClick 
}onKeyDown= {
  (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
  
}
}tabIndex= {
  0 
}role="button" aria-pressed= {
  isActive 
}aria-label= {
  `$ {
  title 
}- $ {
  description 
}` 
}> <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200"> {
  icon 
}</div> <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors"> {
  title 
}</h3> <p className="text-gray-400 group-hover:text-gray-300 transition-colors"> {
  description 
}</p> <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"> <Link href= {
  href 
}className="text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded" onClick= {
  (e) => e.stopPropagation () 
}> Learn more → </Link> </div> </div>) 
}