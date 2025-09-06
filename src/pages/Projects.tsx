=======
import React from "react",
import { useProjects } from "@/hooks/useProjects",
import { SEO } from "@/components/SEO",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import Link from "next/link",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {isLoading ? (
          <p>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p>You don't have any projects yet.</p>
        ) : (
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    {project.job?.description || "Project details"}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            ))}
          </div>
        )}
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
