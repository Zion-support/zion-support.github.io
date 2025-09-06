import React from 'react';

interface ProjectDetailsProps {
  className?: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProjectDetails</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProjectDetails;