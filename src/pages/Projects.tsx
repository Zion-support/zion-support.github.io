<<<<<<< HEAD

<<<<<<< HEAD
import React from 'react'
import { useProjects } from '@/hooks/useProjects'
import { SEO } from '@/components/SEO'
import {
<<<<<<< HEAD
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import { useProjects } from '@/hooks/useProjects';
import { SEO } from '@/components/SEO';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Clock, Briefcase } from 'lucide-react';

<<<<<<< HEAD
function ProjectsContent() {
  const { projects, isLoading } = useProjects();
=======
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
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
function ProjectsContent() { const { projects, isLoading  } = useProjects(),;
function ProjectsContent() {;
  const { projects, isLoading } = useProjects(),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (
    <>;
      <SEO
        title='My Projects | Zion AI Marketplace'
        description='View and manage your projects.'
<<<<<<< HEAD
      />
      <main className='container mx-auto px-4 py-8'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold'>My Projects</h1>
          <p className='text-muted-foreground mt-1'>
            All of your current and past projects
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
      <SEO title="My Projects | Zion AI Marketplace" description="View and manage your projects." />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Projects</h1>
          <p className="text-muted-foreground mt-1">All of your current and past projects</p>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        </div>

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
                  </CardTitle>
                  <CardDescription className='flex items-center gap-2 mt-1'>
                    <Badge variant='outline'>{project.status}</Badge>
                    <span className='flex items-center gap-1 text-xs text-muted-foreground'>
                      <Clock className='h-3 w-3' />
                      Started{' '}
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
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Badge variant="outline">{project.status}</Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      Started {new Date(project.start_date).toLocaleDateString()}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                    </span>
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
                  <Button asChild variant='outline' className='w-full'>
                    <Link href={`/project/${project.id}`}>View Details</Link>
=======
                  <Button asChild variant='outline' className='w-full'>                    <Link href={`/project/${project.id}`}>View Details</Link>                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.job?.description |"Project details"}
=======
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.job?.description || "Project details"}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
<<<<<<< HEAD
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
                    <Link href={`/project/${project.id}`}>View Details</Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  </Button>
                </CardFooter>
              </Card>
=======
      />;
      <main className='container mx-auto px-4 py-8'>;
        <div className='mb-8'>;
          <h1 className='text-3xl font-bold'>My Projects</h1>;
          <p className='text-muted-foreground mt-1'>;
            All of your current and past projects;
          </p>        </div>      <SEO title="My Projects | Zion AI Marketplace" description="View and manage your projects." />;
      <main className="container mx-auto px-4 py-8">;
        <div className="mb-8">;
          <h1 className="text-3xl font-bold">My Projects</h1>;
          <p className="text-muted-foreground mt-1">All of your current and past projects</p>;
        {isLoading ? (;
          <p>Loading projects...</p>;
        ) : projects && projects.length === 0 ? (;
          <p>You don't have any projects yet.</p>;
        ) : (;
          <div className='grid gap-6'>;
            {projects && projects.map(project => (;
              <Card key={project && project.id}>;
                <CardHeader>;
                  <CardTitle className='flex items-center gap-2'>;
                    <Briefcase className='h-5 w-5 text-primary' />;
                    <span>{project && project.job?.title || 'Project'}</span>;
                  </CardTitle>;
                  <CardDescription className='flex items-center gap-2 mt-1'>;
                    <Badge variant='outline'>{project && project.status}</Badge>;
                    <span className='flex items-center gap-1 text-xs text-muted-foreground'>;
                      <Clock className='h-3 w-3' />;
                      Started{' '}
                      {new Date(project && project.start_date).toLocaleDateString()}                    </span>;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>                  <CardDescription className="flex items-center gap-2 mt-1">;
                    <Badge variant="outline">{project && project.status}</Badge>;
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">;
                      <Clock className="h-3 w-3" />;
                      Started {new Date(project && project.start_date).toLocaleDateString()}
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <p className='text-sm text-muted-foreground line-clamp-2'>;
                    {project && project.job?.description || 'Project details'}
                  </p>;
                </CardContent>;
                <CardFooter>;
                  <Button asChild variant='outline' className='w-full'>                    <Link href={`/project/${project && project.id}`}>View Details</Link>                  <p className="text-sm text-muted-foreground line-clamp-2">;
                    {project && project.job?.description || "Project details"}
                  </p>;
                </CardContent>;
                <CardFooter>;
                  <Button asChild variant="outline" className="w-full">;
                  </Button>;
                </CardFooter>;
              </Card>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            ))}
          </div>;
        )}
<<<<<<< HEAD
      </main>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
=======
      </main>;
    </>;
  );

export default function Projects() {;
  return <ProjectsContent />;}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

export default function Projects() {;
  return <ProjectsContent />;
=======
  )
export default function Projects() {
  return <ProjectsContent /> }
export default function Projects() {
  return <ProjectsContent />
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
=======
  );
}

export default function Projects() {
  return <ProjectsContent />;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
