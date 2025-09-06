<<<<<<< HEAD

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src && src.pages.disabled/ProjectMilestones && ProjectMilestones.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/ProjectMilestones && ProjectMilestones.jsx import React from \'react\'';\'; import SEO from \'@/components/SEO\'';\'; import { ProtectedRoute } from \'@/components/ProtectedRoute\'';\'; import { ProjectMilestonesContent } from \'@/components/projects/milestones/ProjectMilestonesContent\'; function ProjectMilestones() {}; return (<ProtectedRoute>; <>; <SEO title=\"Payment Milestones | Zion AI Marketplace\" description=\"Manage project payment milestones and deliverables\"/>; <ProjectMilestonesContent />; </>; </ProtectedRoute>)}; export default ProjectMilestones; export default ProjectMilestones; export default ProjectMilestones; export default ProjectMilestones; export default ProjectMilestones; export default ProjectMilestones;\" export default ProjectMilestones;\";\" export default ProjectMilestones\';\";\" \'"\'";\" import React from \'react\'';\'; import SEO from \'@/components / SEO\'';\'; import { ProtectedRoute } from \'@/components / ProtectedRoute\'';\'; import { ProjectMilestonesContent } from \'@/components / projects / milestones / ProjectMilestonesContent\'; function ProjectMilestones () {}; return (<ProtectedRoute>; <>; <SEO title=\"Payment Milestones | Zion AI Marketplace\" description=\"Manage project payment milestones and deliverables\"/>; <ProjectMilestonesContent />; </>; </ProtectedRoute>) }; export default ProjectMilestones; export default ProjectMilestones; export default ProjectMilestones; export default ProjectMilestones; export default ProjectMilestones; export default ProjectMilestones;\" export default ProjectMilestones;\";\" export default ProjectMilestones\';\";\" \'"\'";\"";
<<<<<<< "HEAD": src && src.pages.disabled/ProjectMilestones && ProjectMilestones.jsx import _React from 'react'';'; import SEO from '@/components/SEO'';'; import { ProtectedRoute } from '@/components/ProtectedRoute'';'; import { ProjectMilestonesContent } from '@/components/projects/milestones/ProjectMilestonesContent'; function ProjectMilestones() {}; return (<ProtectedRoute>; <>; <SEO title="Payment Milestones | Zion AI Marketplace" description="Manage project payment milestones and deliverables"/>; <ProjectMilestonesContent />; </>; </ProtectedRoute>)}; export default ProjectMilestones; export default ProjectMilestones; export default ProjectMilestones; export default ProjectMilestones; export default ProjectMilestones; export default ProjectMilestones;" export default ProjectMilestones;";" export default ProjectMilestones';";" '"'";" import _React from 'react'';'; import SEO from '@/components / SEO'';'; import { ProtectedRoute } from '@/components / ProtectedRoute'';'; import { ProjectMilestonesContent } from '@/components / projects / milestones / ProjectMilestonesContent'; function ProjectMilestones () {}; return (<ProtectedRoute>; <>; <SEO title="Payment Milestones | Zion AI Marketplace" description="Manage project payment milestones and deliverables"/>; <ProjectMilestonesContent />; </>; </ProtectedRoute>) }; export default ProjectMilestones; export default ProjectMilestones; export default ProjectMilestones; export default ProjectMilestones; export default ProjectMilestones; export default ProjectMilestones;" export default ProjectMilestones;";" export default ProjectMilestones';";" '"'";"";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
