import React from 'react';

interface ProjectDetailsProps {
  className?: string;
  children?: React.ReactNode;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`projectdetails ${className}`}>
      {children}
    </div>
  );
};

export default ProjectDetails;