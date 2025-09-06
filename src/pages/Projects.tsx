<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import React from "react",
import { useProjects } from "@/hooks/useProjects",
import { SEO } from "@/components/SEO",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import Link from "next/link",
<<<<<<< HEAD

<<<<<<< HEAD
import { Clock, Briefcase } from 'lucide-react'

=======
>>>>>>> import { Clock, Briefcase } from 'lucide-react'
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react'
import { useProjects } from '@/hooks/useProjects'
import { SEO } from '@/components/SEO'
import {
<<<<<<< HEAD
import { Clock, Briefcase } from 'lucide-react'
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======

import { Clock, Briefcase } from 'lucide-react'
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2


>>>>>>>   Card
=======
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
  Card
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
    <>
      <SEO title="My Projects | Zion AI Marketplace" description="View and manage your projects." />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Projects</h1>
          <p className="text-muted-foreground mt-1">All of your current and past projects</p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>>         {isLoading ? (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
        </div>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        {isLoading ? (
>>>>>>>           <p>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p>You don't have any projects yet.</p>
        ) : (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
          <div className='grid gap-6'>
            {projects.map(project => (
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
          <div className='grid gap-6'>
            {projects.map(project => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
          <div className="grid gap-6">
            {projects.map((project) => (

          <div className="grid gap-6">
            {projects.map((project) => (
          <div className="grid gap-6">
            {projects.map((project) => (


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Briefcase className='h-5 w-5 text-primary' />
                    <span>{project.job?.title |'Project'}</span>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>               <Card key={project.id}>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className="grid gap-6">
            {projects.map((project) => (
          <div className="grid gap-6">
            {projects.map((project) => (
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <Card key={project.id}>
>>>>>>>                 <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span>{project.job?.title || "Project"}</span>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  </CardTitle>
=======
>>>>>>>                   </CardTitle>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Badge variant="outline">{project.status}</Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      Started {new Date(project.start_date).toLocaleDateString()}
<<<<<<< HEAD
=======
                    </span>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  </CardDescription>
                </CardHeader>
                <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD

                    {project.job?.description || "Project details"}

=======
                    {project.job?.description |"Project details"}
<<<<<<< HEAD
>>>>>>>                     {project.job?.description || "Project details"}
>>>>>>>                   </p>
=======
                  <p className='text-sm text-muted-foreground line-clamp-2'>
                    {project.job?.description |'Project details'}
                  </p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                </CardContent>
                <CardFooter>
<<<<<<< HEAD
                  <Button asChild variant="outline" className="w-full">
                  </Button>
                </CardFooter>
              </Card>
>>>>>>>             ))}
          </div>
        )}
export default function Projects() {
  return <ProjectsContent />
}
      </main>;
    </>;
  );
}
>>>>>>> ;
ursor/fix-website-loading-errors-and-merge-6662
                    {project.job?.description || "Project details"}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                  <Button asChild variant='outline' className='w-full'>                    <Link href={`/project/${project.id}`}>View Details</Link>                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.job?.description |"Project details"}
                  <p className="text-sm text-muted-foreground line-clamp-2">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.job?.description || "Project details"}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
                  <p className="text-sm text-muted-foreground line-clamp-2">

                  <p className="text-sm text-muted-foreground line-clamp-2">
                  <p className="text-sm text-muted-foreground line-clamp-2">


                    {project.job?.description || "Project details"}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
                  </Button>
                </CardFooter>
              </Card>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
                  </Button>
                </CardFooter>
              </Card>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
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
>>>>>>> >>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            ))}
          </div>;
        )}

<<<<<<< HEAD
      </main>;
    </>;
  );
}

<<<<<<< HEAD
;
=======

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2


      </main>;
    </>;
  );

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export default function Projects() {;
  return <ProjectsContent />;}


<<<<<<< HEAD
>>>>>>> 
xport default function Projects() {;
=======

export default function Projects() {;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
=======
          <div className="grid gap-6">;
            {projects.map((project) => (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
};
}
<<<<<<< HEAD

<<<<<<< HEAD
=======
}
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
