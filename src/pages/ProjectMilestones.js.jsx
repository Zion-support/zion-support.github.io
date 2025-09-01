import React from 'react';
import { ProjectMilestonesContent } from '@/components / projects / milestones / ProjectMilestonesContent';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { SEO } from '@/components / SEO';
export default ProjectMilestones;
export default ProjectMilestones;
export default ProjectMilestones;


function ProjectMilestones () {
    return (<ProtectedRoute>
      <>
        <SEO title="Payment Milestones | Zion AI Marketplace" description="Manage project payment milestones and deliverables"/>
        
        <ProjectMilestonesContent />
        
      </>
    </ProtectedRoute>) }
