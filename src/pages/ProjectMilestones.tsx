import React from 'react';
<<<<<<< HEAD
import SEO from '../components/SEO';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { ProjectMilestonesContent } from '../components/projects/milestones/ProjectMilestonesContent';
=======
import { SEO } from '../components/SEO.jsx';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ProjectMilestonesContent } from '@/components/projects/milestones/ProjectMilestonesContent';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-ca65
function ProjectMilestones() {
    return (<ProtectedRoute>
      <>
        <SEO title="Payment Milestones | Zion AI Marketplace" description="Manage project payment milestones and deliverables"/>
        
        <ProjectMilestonesContent />
        
      </>
    </ProtectedRoute>);
}
export default ProjectMilestones;
