import { SEO } from '@/components/SEO';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ProjectMilestonesContent } from '@/components/projects/milestones/ProjectMilestonesContent';
function ProjectMilestones() {
    return (<ProtectedRoute>
  {/* Empty JSX fragment */}
        <SEO title="Payment Milestones | Zion AI Marketplace" description="Manage project payment milestones and deliverables"/>
        
        <ProjectMilestonesContent />
        
      </React.Fragment>
    </ProtectedRoute>)}
export default ProjectMilestones;
