import React from "react";
import { useProjects } from "@/hooks/useProjects";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, Briefcase } from "lucide-react";
function ProjectsContent() {
    const { projects, isLoading } = useProjects();
    return (<>
        <SEO
          title="My Projects | Zion AI Marketplace"
          description="View and manage your projects."
              />

    </>)}
export default function Projects() {
    return <ProjectsContent />}


export { ProjectsContent, Projects }
export { ProjectsContent, Projects }
export { ProjectsContent, Projects }
export { ProjectsContent, Projects }
export { ProjectsContent, Projects }