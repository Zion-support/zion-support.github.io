useEffect ( () => {
  const toggleVisibility = () => {
  if (window.pageYOffset > 300) {
  window.addEventListener ('scroll', toggleVisibility)
return () => window.removeEventListener ('scroll', toggleVisibility) 
}, [])
return (<> {
  isVisible && (<button onClick= {
  scrollToTop 
}className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group" aria-label="Scroll to top" > <svg className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > <path /> </svg> </button>) 
}</>) 
}
export default ScrollToTop