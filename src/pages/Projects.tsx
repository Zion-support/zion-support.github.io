<<<<<<< HEAD
=======
import React from "react",
import { useProjects } from "@/hooks/useProjects",
import { SEO } from "@/components/SEO",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import Link from "next/link",
import { Clock, Briefcase } from 'lucide-react'
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import React from 'react'
import { useProjects } from '@/hooks/useProjects'
import { SEO } from '@/components/SEO'
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

import { Clock, Briefcase } from 'lucide-react'
function ProjectsContent() { const { projects, isLoading  } = useProjects()
function ProjectsContent() {

  const { projects, isLoading } = useProjects()

  return (
    <>
      <SEO title="My Projects | Zion AI Marketplace" description="View and manage your projects." />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Projects</h1>
          <p className="text-muted-foreground mt-1">All of your current and past projects</p>
<<<<<<< HEAD
=======
        </div>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        {isLoading ? (
          <p>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p>You don't have any projects yet.</p>
        ) : (
<<<<<<< HEAD
          <div className='grid gap-6'>
            {projects.map(project => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Briefcase className='h-5 w-5 text-primary' />
                    <span>{project.job?.title |'Project'}</span>
=======
          <div className="grid gap-6">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span>{project.job?.title || "Project"}</span>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Badge variant="outline">{project.status}</Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      Started {new Date(project.start_date).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
<<<<<<< HEAD
                  <p className='text-sm text-muted-foreground line-clamp-2'>
                    {project.job?.description |'Project details'}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant='outline' className='w-full'>                    <Link href={`/project/${project.id}`}>View Details</Link>                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.job?.description |"Project details"}
=======
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.job?.description || "Project details"}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
<<<<<<< HEAD
                  </Button>
                </CardFooter>
              </Card>
=======
                    <Link href={`/project/${project.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
import React from "react",;
import { useProjects } from "@/hooks/useProjects",;
import { SEO } from "@/components/SEO",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import Link from "next/link",;
import { Clock, Briefcase } from 'lucide-react';
function ProjectsContent() {;
  const { projects, isLoading } = useProjects();
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
        ) : projects.length === 0 ? (;
          <p>You don't have any projects yet.</p>;
        ) : (;
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            ))}
          </div>
        )}
<<<<<<< HEAD
      </main>
    </>
  )
export default function Projects() {
  return <ProjectsContent /> }
export default function Projects() {
  return <ProjectsContent />
}
=======
      </main>;
    </>;
  );
}
;
export default function Projects() {;
  return <ProjectsContent />;
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
