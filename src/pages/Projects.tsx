<<<<<<< HEAD
import React from "react",;
import { useProjects } from "@/hooks/useProjects",;
import { SEO } from "@/components/SEO",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import Link from "next/link",;
import { Clock, Briefcase } from 'lucide-react';
;
function ProjectsContent() {;
  const { projects, isLoading } = useProjects(),;
;
  return (;
    <>;
      <SEO title="My Projects | Zion AI Marketplace" description="View and manage your projects." />;
      <main className="container mx-auto px-4 py-8">;
        <div className="mb-8">;
          <h1 className="text-3xl font-bold">My Projects</h1>;
          <p className="text-muted-foreground mt-1">All of your current and past projects</p>;
        </div>;
        {isLoading ? (;
          <p>Loading projects...</p>;
        ) :projects.length === 0 ? (;
          <p>You don't have any projects yet.</p>;
        ) :(;
          <div className="grid gap-6">;
            {projects.map((project) => (;
              <Card key={project.id}>;
                <CardHeader>;
                  <CardTitle className="flex items-center gap-2">;
                    <Briefcase className="h-5 w-5 text-primary" />;
                    <span>{project.job?.title || "Project"}</span>;
                  </CardTitle>;
                  <CardDescription className="flex items-center gap-2 mt-1">;
                    <Badge variant="outline">{project.status}</Badge>;
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">;
                      <Clock className="h-3 w-3" />;
                      Started {new Date(project.start_date).toLocaleDateString()}
                    </span>;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <p className="text-sm text-muted-foreground line-clamp-2">;
                    {project.job?.description || "Project details"}
                  </p>;
                </CardContent>;
                <CardFooter>;
                  <Button asChild variant="outline" className="w-full">;
                    <Link href={`/project/${project.id}`}>View Details</Link>;
                  </Button>;
                </CardFooter>;
              </Card>;
=======
import React from "react",
import { useProjects } from "@/hooks/useProjects",
import { SEO } from "@/components/SEO",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import Link from "next/link",import { Clock, Briefcase } from 'lucide-react'

function ProjectsContent() {
  const { projects, isLoading } = useProjects(),
import React from "react";
import Link from "next/link";

function ProjectsContent() {_const { projects, _isLoading} = useProjects();

  return (
    <>
      <SEO title=&quot;My Projects | Zion AI Marketplace&quot; description=&quot;View and manage your projects.&quot; />
      <main className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;mb-8&quot;>
          <h1 className=&quot;text-3xl font-bold&quot;>My Projects</h1>
          <p className=&quot;text-muted-foreground mt-1&quot;>All of your current and past projects</p>
        </div>
        {_isLoading ? (
          <p>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p>You don't have any projects yet.</p>
        ) : (
          <div className=&quot;grid gap-6&quot;>
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle className=&quot;flex items-center gap-2&quot;>
                    <Briefcase className=&quot;h-5 w-5 text-primary&quot; />
                    <span>{project.job?.title || &quot;Project&quot;}</span>
                  </CardTitle>
                  <CardDescription className=&quot;flex items-center gap-2 mt-1&quot;>
                    <Badge variant=&quot;outline&quot;>{project.status}</Badge>
                    <span className=&quot;flex items-center gap-1 text-xs text-muted-foreground&quot;>
                      <Clock className=&quot;h-3 w-3&quot; />
                      Started {new Date(project.start_date).toLocaleDateString()}                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className=&quot;text-sm text-muted-foreground line-clamp-2&quot;>
                    {project.job?.description || &quot;Project details&quot;}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant=&quot;outline&quot; className=&quot;w-full&quot;>
                    <Link href={`/project/${project.id}`}>View Details</Link>                  </Button>
                </CardFooter>
              </Card>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
            ))}
          </div>;
        )}
<<<<<<< HEAD
      </main>;
    </>;
  ),;
}
;
export default function Projects() {;
  return <ProjectsContent />,;
}
=======
      </main>
    </>
  )
}

export default function Projects() {
  return <ProjectsContent />
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
