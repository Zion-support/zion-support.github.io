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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Clock, Briefcase } from 'lucide-react';

function ProjectsContent() {
  const { projects, isLoading } = useProjects();

  return (
    <>
      <SEO
        title='My Projects | Zion AI Marketplace'
        description='View and manage your projects.'
      />
      <main className='container mx-auto px-4 py-8'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold'>My Projects</h1>
          <p className='text-muted-foreground mt-1'>
            All of your current and past projects
          </p>        </div>
      <SEO title="My Projects | Zion AI Marketplace" description="View and manage your projects." />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Projects</h1>
          <p className="text-muted-foreground mt-1">All of your current and past projects</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {isLoading ? (
          <p>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p>You don't have any projects yet.</p>
        ) : (
          <div className='grid gap-6'>
            {projects.map(project => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Briefcase className='h-5 w-5 text-primary' />
                    <span>{project.job?.title || 'Project'}</span>
                  </CardTitle>
                  <CardDescription className='flex items-center gap-2 mt-1'>
                    <Badge variant='outline'>{project.status}</Badge>
                    <span className='flex items-center gap-1 text-xs text-muted-foreground'>
                      <Clock className='h-3 w-3' />
                      Started{' '}
                      {new Date(project.start_date).toLocaleDateString()}                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Badge variant="outline">{project.status}</Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      Started {new Date(project.start_date).toLocaleDateString()}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.job?.description || "Project details"}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
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

export default function Projects() {
  return <ProjectsContent />;
=======
}

export default function Projects() {
  return <ProjectsContent />;
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
