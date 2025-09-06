 if (!isAuthenticated) {;
  return (<Dialog open> <DialogContent className="bg-zion-blue border-zion-blue-light text-white" > <DialogHeader> <DialogTitle>Authentication required</DialogTitle> </DialogHeader> <p>Please sign in to get personalized AI picks.</p> <Button asChild className="mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white" > <Link href="/auth/login?returnTo=/equipment/recommendations" >Sign In</Link> </Button> </DialogContent> </Dialog> </div>) ) ;
}</div> </div>) ;
}"