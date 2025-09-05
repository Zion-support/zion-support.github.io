import React from "react";
import Link from "next/link";

function ProjectsContent() {_const { projects, _isLoading} = useProjects();

  return (
    <>
      <SEO title="My Projects | Zion AI Marketplace" description="View and manage your projects." />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Projects</h1>
          <p className="text-muted-foreground mt-1">All of your current and past projects</p>
        </div>
        {_isLoading ? (
          <p>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p>You don't have any projects yet.</p>
        ) : (_<div className="grid gap-6">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span>{_project.job?.title || "Project"}</span>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Badge variant="outline">{_project.status}</Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      Started {_new Date(project.start_date).toLocaleDateString()}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {_project.job?.description || "Project details"}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={_`/project/${project.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default function Projects() {_return <ProjectsContent />;}
