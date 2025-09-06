 export default function Profile () {
  const {
  user, isLoading, logout 
}= useAuth ();
const navigate = useNavigate ();
useEffect ( () => {
  if (!isLoading && !user) {
  
}
}, [user, isLoading, navigate]);
return (<> <Header /> <div className="min-h-screen bg-zion-blue flex items-center justify-center" > <div className="animate-pulse text-white" >Loading profile...</div> </div> <Footer /> </> if (!user) {
  return (<> <Header /> <div className="min-h-screen bg-zion-blue flex items-center justify-center" > <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-md" > <h1 className="text-xl font-bold text-white mb-4" >Please log in</h1> <p className="text-zion-slate mb-4" >You need to be logged in to view your profile.</p> <Button > Go to Login </Button> </div> </div> <Footer /> </>) 
}return (<> <Header /> variant="outline" className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white" 
}