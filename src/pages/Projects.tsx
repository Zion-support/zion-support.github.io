import React from &quot;react&quot;;
import { useProjects } from &quot;@/hooks/useProjects&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import Link from &quot;next/link&quot;;
import { Clock, Briefcase } from 'lucide-react'

function ProjectsContent() {
  const { projects, isLoading } = useProjects();

  return (
    <>
      <SEO title=&quot;My Projects | Zion AI Marketplace&quot; description=&quot;View and manage your projects.&quot; />
      <main className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;mb-8&quot;>
          <h1 className=&quot;text-3xl font-bold&quot;>My Projects</h1>
          <p className=&quot;text-muted-foreground mt-1&quot;>All of your current and past projects</p>
        </div>
        {isLoading ? (
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
                      Started {new Date(project.start_date).toLocaleDateString()}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className=&quot;text-sm text-muted-foreground line-clamp-2&quot;>
                    {project.job?.description || &quot;Project details&quot;}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant=&quot;outline&quot; className=&quot;w-full&quot;>
                    <Link href={`/project/${project.id}`}>View Details</Link>
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

export default function Projects() {
  return <ProjectsContent />;
}
