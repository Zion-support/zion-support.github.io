import React from 'react';
import { SEO } from "../components/SEOHead"';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ProjectMilestonesContent } from '@/components/projects/milestones/ProjectMilestonesContent';
function ProjectMilestones() {
    return (<ProtectedRoute>
      <>
<<<<<<< HEAD
        <SEOHead 
          title="Payment Milestones | Zion AI Marketplace" 
          description="Manage project payment milestones and deliverables"
        />
=======
        <SEO title="Payment Milestones | Zion AI Marketplace" description="Manage project payment milestones and deliverables"/>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
        
        <ProjectMilestonesContent />
        
      </>
    </ProtectedRoute>);
}
export default ProjectMilestones;
