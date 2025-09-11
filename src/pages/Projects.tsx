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

import { Clock, Briefcase } from 'lucide-react'

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

  return (
    <>
      <SEO title="My Projects | Zion AI Marketplace" description="View and manage your projects." />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Projects</h1>
          <p className="text-muted-foreground mt-1">All of your current and past projects</p>
        {isLoading ? (
        ) : projects.length === 0 ? (
          <p>You don't have any projects yet.</p>
        ) : (
          <div className="grid gap-6">
            {projects.map((project) => (

          <div className="grid gap-6">
            {projects.map((project) => (
          <div className="grid gap-6">
            {projects.map((project) => (

          <div className="grid gap-6">
            {projects.map((project) => (
          <div className="grid gap-6">
            {projects.map((project) => (
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

                  <p className="text-sm text-muted-foreground line-clamp-2">
                  <p className="text-sm text-muted-foreground line-clamp-2">

                    {project.job?.description || "Project details"}
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
                    {project.job?.description || "Project details"}
                  </p>;
                </CardContent>;
                <CardFooter>;

