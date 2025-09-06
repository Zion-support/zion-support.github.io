} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Clock, Briefcase } from 'lucide-react';
<<<<<<< HEAD
=======
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
import React from 'react'
import { useProjects } from '@/hooks/useProjects'
import { SEO } from '@/components/SEO'
import {

import { Clock, Briefcase } from 'lucide-react'


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
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Clock, Briefcase } from 'lucide-react'

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'


<<<<<<< HEAD

import { Clock, Briefcase } from 'lucide-react'

<<<<<<< HEAD
=======
  const { projects, isLoading } = useProjects()

  return (
    <>
      <SEO title="My Projects | Zion AI Marketplace" description="View and manage your projects." />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Projects</h1>
          <p className="text-muted-foreground mt-1">All of your current and past projects</p>
ursor/fix-website-loading-errors-and-merge-6662
        </div>
        </div>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {isLoading ? (
        ) : projects.length === 0 ? (
          <p>You don't have any projects yet.</p>
        ) : (
<<<<<<< HEAD
          <div className='grid gap-6'>
            {projects.map(project => (
          <div className='grid gap-6'>
            {projects.map(project => (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <div className="grid gap-6">
            {projects.map((project) => (

          <div className="grid gap-6">
            {projects.map((project) => (
          <div className="grid gap-6">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  <CardTitle className='flex items-center gap-2'>
                    <Briefcase className='h-5 w-5 text-primary' />
                    <span>{project.job?.title |'Project'}</span>
          <div className="grid gap-6">
            {projects.map((project) => (
          <div className="grid gap-6">
            {projects.map((project) => (
              <Card key={project.id}>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span>{project.job?.title || "Project"}</span>
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
<<<<<<< HEAD

                  <Button asChild variant='outline' className='w-full'>                    <Link href={`/project/${project.id}`}>View Details</Link>                  <p className="text-sm text-muted-foreground line-clamp-2">
            ))}
          </div>
        )}
=======
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

                  <p className="text-sm text-muted-foreground line-clamp-2">
                  <p className="text-sm text-muted-foreground line-clamp-2">


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    {project.job?.description || "Project details"}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
            ))}
          </div>
        )}
      </main>;
    </>;
  );
}
;
export default function Projects() {;
  return <ProjectsContent />;
};
}
<<<<<<< HEAD
}
;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
