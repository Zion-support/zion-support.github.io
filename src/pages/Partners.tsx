 const [authServiceAvailable, setAuthServiceAvailable] = useState (true);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 useEffect ( () => {
  async function checkHealth () {
  try {
  
}
}checkHealth () 
}, []);
//If not authenticated, display partner program info and signup CTA </div> <div className="grid md:grid-cols-2 gap-8 mb-12" > <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> </CardHeader> <CardContent className="space-y-4" > <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" /> <div> </div> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> </CardHeader> <CardContent className="space-y-4" > <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" /> <div> </div> </div> </CardContent> </Card> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader className="text-center pb-2" > <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4" > <FileText className="h-6 w-6 text-zion-cyan" /> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader className="text-center pb-2" > <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4" > <PieChart className="h-6 w-6 text-zion-cyan" /> </div> </CardContent> </Card> </div> </div> <div className="flex justify-center gap-4" > <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white" asChild > > {
  t ('partner.login') 
}</Button>) 
}</div> </div>) 
}//Authenticated user view - Partner Dashboard return (<div className="container max-w-7xl py-10" > <h1>DEBUG: Partners Page - Authenticated View</h1> <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8" > <div> </Button> </div> </div> </TabsList> <TabsContent value="overview" className="space-y-4" > <PartnerDashboard /> </TabsContent> <TabsContent value="referrals" className="space-y-4" > <PartnerReferralLinks /> </TabsContent> <TabsContent value="earnings" className="space-y-4" > <Card> <CardHeader> <CardTitle> {
  t ('partner.earnings title') 
}</CardTitle> <CardDescription> {
  t ('partner.earnings desc') 
}</CardDescription> </CardHeader> <CardContent> </CardContent> </Card> </TabsContent> <TabsContent value="leaderboard" className="space-y-4" > <PartnerLeaderboard /> </TabsContent> <TabsContent value="resources" className="space-y-4" > <PartnerResources /> </TabsContent> </Tabs> </div>) 
}