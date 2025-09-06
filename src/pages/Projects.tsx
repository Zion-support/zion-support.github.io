<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Clock, Briefcase } from 'lucide-react';
<<<<<<< HEAD

=======
=======
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662


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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
function ProjectsContent() {
  const { projects, isLoading } = useProjects();
function ProjectsContent() { const { projects, isLoading  } = useProjects(),;
function ProjectsContent() {;
  const { projects, isLoading } = useProjects(),;

  return (
    <>;
      <SEO
        title='My Projects | Zion AI Marketplace'
        description='View and manage your projects.'
      />
      <main className='container mx-auto px-4 py-8'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold'>My Projects</h1>
          <p className='text-muted-foreground mt-1'>
            All of your current and past projects
          </p>
        </div>

<<<<<<< HEAD
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
<<<<<<< HEAD
=======
        </div>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
                  <Button asChild variant='outline' className='w-full'>
                    <Link href={`/project/${project.id}`}>View Details</Link>
=======

                  <Button asChild variant='outline' className='w-full'>                    <Link href={`/project/${project.id}`}>View Details</Link>                  <p className="text-sm text-muted-foreground line-clamp-2">
<<<<<<< HEAD
                    {project.job?.description |"Project details"}
=======
                  <p className="text-sm text-muted-foreground line-clamp-2">
=======

                  <p className="text-sm text-muted-foreground line-clamp-2">
=======
=======
                  <p className="text-sm text-muted-foreground line-clamp-2">
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    {project.job?.description || "Project details"}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/project/${project.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
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
<<<<<<< HEAD
            ))}
          </div>;
        )}
      </main>
    </>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            ))}
          </div>;
        )}
<<<<<<< HEAD
      </main>
    </>
  )
export default function Projects() {
  return <ProjectsContent /> }
<<<<<<< HEAD
export default function Projects() {
  return <ProjectsContent />
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      </main>;
    </>;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  );
}

export default function Projects() {;
  return <ProjectsContent />;
  )
export default function Projects() {
  return <ProjectsContent /> }
export default function Projects() {
  return <ProjectsContent />
}
  );
}

export default function Projects() {
  return <ProjectsContent />;
}
} from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import Link from 'next / link';
import { Clock, Briefcase } from 'lucide-react';
/**
 * ProjectsContent - Function description
 */
function ProjectsContent() { const { projects, is_loading  } = use_projects (),
/**
 * ProjectsContent - Function description
 */
function ProjectsContent() {
  const { projects, is_loading } = use_projects (),
  return (
    <>;
      <SEO;
        title='My Projects | Zion AI Marketplace';
        description='View and manage your projects.';
      />;
      <main className='container mx - auto px - 4 py - 8'>;
        <div className='mb - 8'>;
          <h1 className='text - 3xl font - bold'>My Projects</h1>;
          <p className='text - muted - foreground mt - 1'>;
            All of your current and past projects;
          </p>        </div>      <SEO title="My Projects | Zion AI Marketplace" description="View and manage your projects." />;
      <main className="container mx - auto px - 4 py - 8">;
        <div className="mb - 8">;
          <h1 className="text - 3xl font - bold">My Projects</h1>;
          <p className="text - muted - foreground mt - 1">All of your current and past projects</p>;
        {is_loading ? (
          <p > Loading projects...</p>) : projects.length === 0 ? (
          <p > You don't have any projects yet.</p>) : (
          <div className='grid gap - 6'>;
            {projects.map (project => (
              <Card key={project.id}>;
                <CardHeader>;
                  <CardTitle className='flex items - center gap - 2'>;
                    <Briefcase className='h - 5 w - 5 text - primary' />;
                    <span>{project.job?.title || 'Project'}</span>;
                  </CardTitle>;
                  <CardDescription className='flex items - center gap - 2 mt - 1'>;
                    <Badge variant='outline'>{project.status}</Badge>;
                    <span className='flex items - center gap - 1 text - xs text - muted - foreground'>;
                      <Clock className='h - 3 w - 3' />;
                      Started{' '}
                      {new Date (project.start_date).toLocaleDateString ()}                    </span>;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>                  <CardDescription className="flex items - center gap - 2 mt - 1">;
                    <Badge variant="outline">{project.status}</Badge>;
                    <span className="flex items - center gap - 1 text - xs text - muted - foreground">;
                      <Clock className="h - 3 w - 3" />;
                      Started {new Date (project.start_date).toLocaleDateString ()}
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <p className='text - sm text - muted - foreground line - clamp - 2'>;
                    {project.job?.description || 'Project details'}
                  </p>;
                </CardContent>;
                <CardFooter>;
                  <Button as_child variant='outline' className='w - full'>                    <Link href={`/project/${project.id}`}>View Details</Link>                  <p className="text - sm text - muted - foreground line - clamp - 2">;
                    {project.job?.description || "Project details"}
                  </p>;
                </CardContent>;
                <CardFooter>;
                  <Button as_child variant="outline" className="w - full">;
                  </Button>;
                </CardFooter>;
              </Card>))}
          </div>)}
      </main>;
    </>);
export default /**
 * Projects - Function description
 */
function Projects() {
  return <ProjectsContent /> }
export default /**
 * Projects - Function description
 */
function Projects() {
  return <ProjectsContent />;
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
};
}

;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
