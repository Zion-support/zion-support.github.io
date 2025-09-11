import {

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

} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Clock, Briefcase } from 'lucide-react';
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

import React from "react",
import { useProjects } from "@/hooks/useProjects",
import { SEO } from "@/components/SEO",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import Link from "next/link",
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { useProjects } from '@/hooks/useProjects'
import { SEO } from '@/components/SEO'
import {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { Clock, Briefcase } from 'lucide-react'


<<<<<<< HEAD
<<<<<<< HEAD
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
import React from "react",
import { useProjects } from "@/hooks/useProjects",
import { SEO } from "@/components/SEO",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import Link from "next/link",
import { Clock, Briefcase } from 'lucide-react'

import React from 'react'
import { useProjects } from '@/hooks/useProjects'
import { SEO } from '@/components/SEO'
import {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

function ProjectsContent() { const { projects, isLoading  } = useProjects(),;
function ProjectsContent() {;
  const { projects, isLoading } = useProjects(),;

  return (
    <>;
      <SEO
        title='My Projects | Zion AI Marketplace'
        description='View and manage your projects.'

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <>
      <SEO title="My Projects | Zion AI Marketplace" description="View and manage your projects." />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Projects</h1>
          <p className="text-muted-foreground mt-1">All of your current and past projects</p>
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
        </div>
        </div>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {isLoading ? (
        ) : projects.length === 0 ? (
          <p>You don't have any projects yet.</p>
        ) : (
<<<<<<< HEAD
          <div className='grid gap-6'>
            {projects.map(project => (
          <div className='grid gap-6'>
            {projects.map(project => (
=======

        {isLoading ? (
          <p>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p>You don't have any projects yet.</p>
        ) : (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="grid gap-6">
            {projects.map((project) => (

          <div className="grid gap-6">
            {projects.map((project) => (
          <div className="grid gap-6">
            {projects.map((project) => (

<<<<<<< HEAD

              <Card key={project.id}>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Briefcase className='h-5 w-5 text-primary' />
                    <span>{project.job?.title |'Project'}</span>
=======

          <div className="grid gap-6">
            {projects.map((project) => (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="grid gap-6">
            {projects.map((project) => (
          <div className="grid gap-6">
            {projects.map((project) => (
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Card key={project.id}>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary"/>
                    <span>{project.job?.title || "Project"}</span>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Badge variant="outline">{project.status}</Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3"/>
                      Started {new Date(project.start_date).toLocaleDateString()}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
<<<<<<< HEAD
                    {project.job?.description |"Project details"}
                  <p className='text-sm text-muted-foreground line-clamp-2'>
                    {project.job?.description |'Project details'}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant='outline' className='w-full'>                    <Link href={`/project/${project.id}`}>View Details</Link>                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.job?.description |"Project details"}
                  <p className="text-sm text-muted-foreground line-clamp-2">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.job?.description || "Project details"}
                  <p className="text-sm text-muted-foreground line-clamp-2">
=======
                  <Button asChild variant='outline' className='w-full'>                    <Link href={`/project/${project.id}`}>View Details</Link>                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.job?.description |"Project details"}
                  <p className="text-sm text-muted-foreground line-clamp-2">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  <p className="text-sm text-muted-foreground line-clamp-2">
                  <p className="text-sm text-muted-foreground line-clamp-2">


                    {project.job?.description || "Project details"}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                  </Button>
                </CardFooter>
              </Card>
                  </Button>
                </CardFooter>
              </Card>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
        </div>;
        {isLoading ? (;
          <p>Loading projects...</p>;
        ) : projects.length === 0 ? (;
          <p>You don't have any projects yet.</p>;
        ) : (;
=======
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


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            ))}
          </div>;
        )}




      </main>;
    </>;
  );

export default function Projects() {;
  return <ProjectsContent />;}



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
<<<<<<< HEAD
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
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {project.job?.description || "Project details"}
                  </p>;
                </CardContent>;
                <CardFooter>;
<<<<<<< HEAD
                  <Button asChild variant="outline" className="w-full">;
                    <Link href={`/project/${project.id}`}>View Details</Link>;
                  </Button>;
                </CardFooter>;
              </Card>;
            ))}
          </div>
        )}
      </main>
    </>
  )
export default function Projects() {
  return <ProjectsContent /> }
export default function Projects() {
  return <ProjectsContent />
}
};
}
}
      </main>;
    </>;
  );
}
;
export default function Projects() {;
  return <ProjectsContent />;
};
}
}
;
;
=======

                  <Button asChild variant='outline' className='w-full'>                    <Link href={`/project/${project.id}`}>View Details</Link>                  <p className="text-sm text-muted-foreground line-clamp-2">
            ))}
          </div>
        )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
};
}

;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
