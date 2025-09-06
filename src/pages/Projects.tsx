<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import React from 'react';
import { useProjects } from '@/hooks/useProjects';
import { SEO } from '@/components/SEO';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
<<<<<<< HEAD
=======
=======
import React from "react";
import { useProjects } from "@/hooks/useProjects";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Clock, Briefcase } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Clock, Briefcase } from 'lucide-react';

function ProjectsContent() {
  const { projects, isLoading } = useProjects();

  return (
    <>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
          </p>        </div>
=======
          </p>
=======
import React from "react";
import { useProjects } from "@/hooks/useProjects";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Clock, Briefcase } from 'lucide-react'
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';


function ProjectsContent() { const { projects, isLoading  } = useProjects(),


  return (
    <>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      <SEO title="My Projects | Zion AI Marketplace" description="View and manage your projects." />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Projects</h1>
          <p className="text-muted-foreground mt-1">All of your current and past projects</p>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {isLoading ? (
          <p>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p>You don't have any projects yet.</p>
        ) : (
<<<<<<< HEAD
          <div className='grid gap-6'>
            {projects.map(project => (
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='grid gap-6'>
            {projects.map(project => (
=======
          <div className="grid gap-6">
            {projects.map((project) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Briefcase className='h-5 w-5 text-primary' />
                    <span>{project.job?.title || 'Project'}</span>
                  </CardTitle>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <CardDescription className='flex items-center gap-2 mt-1'>
                    <Badge variant='outline'>{project.status}</Badge>
                    <span className='flex items-center gap-1 text-xs text-muted-foreground'>
                      <Clock className='h-3 w-3' />
                      Started{' '}
<<<<<<< HEAD
                      {new Date(project.start_date).toLocaleDateString()}                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
=======
                      {new Date(project.start_date).toLocaleDateString()}
=======
          <div className="grid gap-6">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span>{project.job?.title || "Project"}</span>
                  </CardTitle>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Badge variant="outline">{project.status}</Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      Started {new Date(project.start_date).toLocaleDateString()}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <p className='text-sm text-muted-foreground line-clamp-2'>
                    {project.job?.description || 'Project details'}
                  </p>
                </CardContent>
                <CardFooter>
<<<<<<< HEAD
                  <Button asChild variant='outline' className='w-full'>                    <Link href={`/project/${project.id}`}>View Details</Link>
=======
                  <Button asChild variant='outline' className='w-full'>
=======
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.job?.description || "Project details"}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.job?.description || "Project details"}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    <Link href={`/project/${project.id}`}>View Details</Link>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
    </>
  );
<<<<<<< HEAD

export default function Projects() {
  return <ProjectsContent />;
=======
<<<<<<< HEAD
<<<<<<< HEAD

export default function Projects() {
  return <ProjectsContent />;
=======
}

export default function Projects() {
  return <ProjectsContent />;
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}

export default function Projects() {
  return <ProjectsContent />;
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
