 export default function PostJob () {
  const {
  isAuthenticated, isLoading 
}= useAuth ();
const isMobile = useIsMobile ();
if (isLoading) {
  return (<div className="flex items-center justify-center min-h-screen" > <div className="animate-pulse" >Loading...</div> </div>) 
}Post a Job | Zion AI Marketplace"description=" Post a job to find the perfect AI talent for your project." /> <Header /> <CardHeader> <CardTitle className= {
  `text-$ {
  isMobile ? '2xl' : '3xl' 
}font-bold` 
}>Post a Job</CardTitle> <CardDescription> Fill out the form below to post your job and find the perfect talent. </CardDescription> </CardHeader> <CardContent> <JobPostingForm /> </CardContent> </Card> </main> <Footer /> </>) 
}