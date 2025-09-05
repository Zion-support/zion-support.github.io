 import {
  {
  {
  Clock, Briefcase 
}from 'lucide-react' function ProjectsContent () {
  const {
  projects, isLoading 
}= useProjects ();
My Projects | Zion AI Marketplace"description=" View and manage your projects."/> <main className=" container mx-auto px-4 py-8"> <div className=" mb-8"> <h1 className=" text-3xl font-bold">My Projects</h1> <p className=" text-muted-foreground mt-1" >All of your current and past projects</p> </div> {
  isLoading ? (<p>Loading projects...</p>) : projects.length === 0 ? (<p>You don't have any projects yet.</p> </span> </CardDescription> </CardHeader> <CardContent> </Button> </CardFooter> </Card>) ) 
}</div>) 
}</main> </>) 
}