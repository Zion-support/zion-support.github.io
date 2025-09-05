"use client";
</Suspense>);
// Error boundary for better error handling render () {
  if (this.state.hasError) {
  return this.props.fallback || (<div className="p-6 text-center"> <div className="text-[var (--error) ] text-lg mb-2">Something went wrong</div> <button onClick= {
  () => this.setState ({
  hasError: false 
}) 
}className="btn-primary" > Try again </button> </div>) 
}return this.props.children 
}
}// Loading spinner component <div className= {
  `animate-pulse $ {
  className 
}` 
}> {
  Array.from ({
  length: lines 
}) .map ( (, i) => (<div key= {
  i 
}className="h-4 bg-[var (--border) ] rounded mb-2 last:mb-0" style= {
  {
  width: `$ {
  Math.random () * 40 + 60 
}%` 
}
}/>) ) 
}</div>) 
}// Performance monitoring hook 
}
}
}
}// Intersection observer hook for lazy loading observer.observe (element);
return () => observer.disconnect () 
}, [ref, options]);
return isIntersecting 
}// Debounced search hook for better performance return debouncedValue 
}