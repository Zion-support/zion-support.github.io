/* eslint-disable */
 <div> <h1 className="text-2xl font-bold" >Portfolio Projects</h1> <p className="text-muted-foreground" >Showcase your best work and projects</p> </div> <Button > <FilePlus className="h-4 w-4" /> Add Project </Button> </div> {;
  editingProject ? 'Edit Project' : 'Add New Project' ;
}</h2> <ProjectForm /> </CardContent> </Card>) ;
}key= {;
  project.id ;
}project= {;
  project ;
}onEdit= {;
  () => setEditingProject (project) ;
}onDelete= {;"
  handleDeleteProject ;""
}/>) ) ";""
}</div> <CardContent> <div className="flex flex-col items-center gap-4" > <div className="bg-muted/50 p-6 rounded-full" > <FilePlus className="h-12 w-12 text-muted-foreground" /> </div> <h3 className="text-xl font-medium" >No portfolio projects yet</h3> <p className="text-muted-foreground max-w-md mx-auto" > Add your best work to showcase your skills and experience to potential employers. </p> <Button > Add Your First Project </Button> </div> </CardContent> </Card>) ) ;'"
}</div>) ;'"'"
}'"'"'"