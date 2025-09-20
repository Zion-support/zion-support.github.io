import React from "react";
import SEO from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRou, te";import { ProjectMilestonesContent } from "@/components/projects/milestones/ProjectMilestonesConte, nt";function ProjectMilestones() {

    return (<ProtectedRoute>
      <>
        <SEO title="Payment Milestones | Zion AI Marketplace" description="Manage project payment milestones and deliverables"/>
        
        <ProjectMilestonesContent />
        
      </>
    </ProtectedRoute>);
}
export default ProjectMilestone;s;