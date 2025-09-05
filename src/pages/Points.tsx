 Earn points for every action you take and redeem them for exclusive rewards! </p> <Button onClick= {
  () => setLoginOpen (true) 
}size="lg" > Join Now to Start Earning </Button> </div> <div className="grid md:grid-cols-2 gap-8 mb-12" > <Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <TrendingUp className="h-5 w-5" /> How to Earn Points </CardTitle> <CardDescription> Multiple ways to accumulate rewards </CardDescription> </CardHeader> </div>) ) 
}</CardContent> </Card> <Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <Gift className="h-5 w-5" /> Upcoming Rewards </CardTitle> <CardDescription> What you can redeem your points for </CardDescription> </CardHeader> </div>) ) 
}</CardContent> </Card> </div> <Card className="text-center" > <CardContent className="pt-6" > <Star className="h-12 w-12 text-primary mx-auto mb-4" /> <h3 className="text-2xl font-bold mb-2" >Coming Soon</h3> <p className="text-muted-foreground mb-4" > Our full rewards system is launching soon! Sign up now to start earning points immediately. </p> <Button onClick= {
  () => setLoginOpen (true) 
}> Create Account </Button> </CardContent> </Card> </div> <LoginModal isOpen= {
  loginOpen 
}onOpenChange= {
  setLoginOpen 
}/> </>) 
}return (You haven't earned any points yet. Complete the tasks below to start earning and redeem rewards. </p>) 
}</div> <div className="grid md:grid-cols-2 gap-8 mb-12" > <Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <TrendingUp className="h-5 w-5" /> Keep Earning </CardTitle> <CardDescription> More ways to boost your point balance </CardDescription> </CardHeader> </div> </div>) ) 
}</CardContent> </Card> <Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <Gift className="h-5 w-5" /> Available Rewards </CardTitle> <CardDescription> Redeem your points for these rewards </CardDescription> </CardHeader> </Button>) : (<p className="text-xs text-muted-foreground" >Need more points</p>) 
}</div> </div>) ) 
}</CardContent> </Card> </div> <Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <History className="h-5 w-5" /> Points History </CardTitle> <CardDescription>Your recent points activity</CardDescription> </CardHeader> <CardContent>) : (<ScrollArea className="h-64" > <div className="space-y-2 mt-2" > {
  ledger.map (entry => (<div key= {
  entry.id 
}className="flex items-center justify-between py-2 border-b" > <div> > {
  entry.delta >= 0 ? '+': '' 
}{
  entry.delta 
}pts </Badge> </div>) ) 
}</div> </ScrollArea>) 
}</CardContent> </Card> <Card className="text-center" > <CardContent className="pt-6" > <Star className="h-12 w-12 text-primary mx-auto mb-4" /> <h3 className="text-2xl font-bold mb-2" >Full Rewards System Coming Soon</h3> <p className="text-muted-foreground mb-4" > We're finalizing the redemption system. Keep earning points - they'll be ready to spend soon! </p> <div className="flex gap-4 justify-center" > <Button variant="outline" asChild> <Link href="/marketplace" >Browse Marketplace</Link> </Button> <Button variant="outline" asChild> <Link href="/community" >Join Community</Link> </Button> </div> </CardContent> </Card> </div>) 
}