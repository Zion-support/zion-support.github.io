  return () => {// Cleanup function;}}, [])[])// Show CTA after 5 seconds;
    }window && window.addEventListener('scroll', handleScroll)return () => {window && window.removeEventListener('scroll', handleScroll)}, [isClosed])const handleClose = () => {setIsClosed(true)setIsVisible(false)}if (scrollPosition > threshold && !isClosed) {setIsVisible(true)} else {setIsVisible(false)}'
    }window && window.addEventListener("scroll", handleScroll)return () => {window && window.removeEventListener("scroll", handleScroll)}"
  }, [isClosed])const handleClose = () => {setIsClosed(true)}window.addEventListener('scroll', handleScroll)return () => {window.removeEventListener('scroll', handleScroll)}, [isClosed])const handleClose = () => {setIsClosed(true)setIsVisible(false)}if (!isVisible) return null;return (return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">;"
            <X className="w-5 h-5" />;export function FloatingCTA() {const [isVisible, setIsVisible] = useState(false),const [isClosed, setIsClosed] = useState(false),useEffect(() => {const handleScroll = () => {const scrollPosition = window.scrollY,const threshold = 600, // Show CTA after scrolling 600px;"
  )}, [is_closed])const handle_close = () =>: any {setIsClosed (true)setIsVisible (false)setIsVisible (false)}
            className="fixed inset - 0 bg - black / 20 z - 40";initial={ "opacity": 0 }"
            animate={ "opacity": 1 }
            exit={ "opacity": 0 }
            on_click={ () => setIsExpanded (false) }
          />) }</AnimatePresence>;
})}, [isClosed])return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover":from-zion-purple-light "hover":to-zion-purple whitespace-nowrap" asChild > <Link href="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>)}'";
