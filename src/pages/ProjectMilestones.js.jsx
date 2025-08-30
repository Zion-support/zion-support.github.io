import React from 'react';
import { SEO } from '@/components/SEO';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ProjectMilestonesContent } from '@/components/projects/milestones/ProjectMilestonesContent';
function ProjectMilestones() {
    return (<ProtectedRoute>
      <React.Fragment>
        <SEO title="Payment Milestones | Zion AI Marketplace" description="Manage project payment milestones and deliverables"/>
        
        <ProjectMilestonesContent />
        
      </React.Fragment>
    </ProtectedRoute>)}
export default ProjectMilestones;
