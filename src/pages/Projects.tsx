<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import React from 'react'
import { useProjects } from '@/hooks/useProjects'
import { SEO } from '@/components/SEO'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
import React from "react",
import { useProjects } from "@/hooks/useProjects",
import { SEO } from "@/components/SEO",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import Link from "next/link",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Clock, Briefcase } from 'lucide-react'
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import React from 'react'
import { useProjects } from '@/hooks/useProjects'
import { SEO } from '@/components/SEO'
=======
import React from 'react';
import { useProjects } from '@/hooks/useProjects';
import { SEO } from '@/components/SEO';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
      <SEO
        title='My Projects | Zion AI Marketplace'
        description='View and manage your projects.'
      />
      <main className='container mx-auto px-4 py-8'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold'>My Projects</h1>
          <p className='text-muted-foreground mt-1'>
            All of your current and past projects
<<<<<<< HEAD
          </p>        </div>      <SEO title="My Projects | Zion AI Marketplace" description="View and manage your projects." />
=======
      <SEO title="My Projects | Zion AI Marketplace" description="View and manage your projects." />
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Projects</h1>
          <p className="text-muted-foreground mt-1">All of your current and past projects</p>
<<<<<<< HEAD
=======
          </p>
        </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
=======
        </div>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
        {isLoading ? (
          <p>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p>You don't have any projects yet.</p>
        ) : (
<<<<<<< HEAD
          <div className='grid gap-6'>
            {projects.map(project => (
<<<<<<< HEAD
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Briefcase className='h-5 w-5 text-primary' />
                    <span>{project.job?.title |'Project'}</span>
=======
          <div className="grid gap-6">
            {projects.map((project) => (
=======
=======
          <div className="grid gap-6">
            {projects.map((project) => (
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span>{project.job?.title || "Project"}</span>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                  </CardTitle>
<<<<<<< HEAD
                  <CardDescription className='flex items-center gap-2 mt-1'>
                    <Badge variant='outline'>{project.status}</Badge>
                    <span className='flex items-center gap-1 text-xs text-muted-foreground'>
                      <Clock className='h-3 w-3' />
                      Started{' '}
<<<<<<< HEAD
                      {new Date(project.start_date).toLocaleDateString()}                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>                  <CardDescription className="flex items-center gap-2 mt-1">
=======
                  <CardDescription className="flex items-center gap-2 mt-1">
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
                    <Badge variant="outline">{project.status}</Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      Started {new Date(project.start_date).toLocaleDateString()}
=======
                      {new Date(project.start_date).toLocaleDateString()}
                    </span>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                  </CardDescription>
                </CardHeader>
                <CardContent>
<<<<<<< HEAD
                  <p className='text-sm text-muted-foreground line-clamp-2'>
                    {project.job?.description |'Project details'}
                  </p>
                </CardContent>
                <CardFooter>
<<<<<<< HEAD
                  <Button asChild variant='outline' className='w-full'>                    <Link href={`/project/${project.id}`}>View Details</Link>                  <p className="text-sm text-muted-foreground line-clamp-2">
<<<<<<< HEAD
                    {project.job?.description |"Project details"}
=======
                  <p className="text-sm text-muted-foreground line-clamp-2">
=======
=======
                  <p className="text-sm text-muted-foreground line-clamp-2">
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    {project.job?.description || "Project details"}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
<<<<<<< HEAD
=======
                  <Button asChild variant='outline' className='w-full'>
                    <Link href={`/project/${project.id}`}>View Details</Link>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            ))}
          </div>
        )}
<<<<<<< HEAD
      </main>
    </>
<<<<<<< HEAD
  )
export default function Projects() {
  return <ProjectsContent /> }
<<<<<<< HEAD
export default function Projects() {
  return <ProjectsContent />
}
=======
<<<<<<< HEAD
  );
}

export default function Projects() {
  return <ProjectsContent />;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      </main>;
    </>;
  );
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;
export default function Projects() {;
  return <ProjectsContent />;
};
}
<<<<<<< HEAD
}
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
