/* eslint-disable */
 export function ActiveProjectsCard () {;
  const {;
  projects, isLoading ;
}= useProjects ();
const [activeProjects, setActiveProjects] = useState<Project[]> ([]);
useEffect ( () => {;
  if (projects && !isLoading) {;
  const active = projects.filter (p => ['offer acceptedin progress'].includes (p.status) ) .slice (0,  3), //Limit to 3 most recent projects setActiveProjects (active) ;
}
}, [projects, isLoading]);
return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span> </CardTitle> <CardDescription>Your ongoing work</CardDescription> </CardHeader> <CardContent>) ) ;'"
}</div> </CardContent> </Card>) ;'"'"
}if (activeProjects.length === 0) {'";'"'"
  return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span> </CardTitle> <CardDescription>Your ongoing work</CardDescription> </CardHeader> <CardContent className="text-center py-6" > <p className="text-muted-foreground mb-2" >You don't have any active projects at the moment.</p> <Button variant="outline" asChild> <Link href="/jobs" >Find Opportunities</Link> </Button> </CardContent> </Card> return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span> </CardTitle> <CardDescription>Your ongoing work</CardDescription> </CardHeader> </Button> </div>) ) ;""
}</CardContent> {";""
  activeProjects.length > 2 && (<CardFooter> <Button variant="ghost" className="w-full" asChild> <Link href="/projects">View All Projects</Link> </Button> </CardFooter>) ;'"
}</Card>) ;'"'"
}'"'"'"