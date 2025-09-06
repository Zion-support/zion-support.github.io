import React from 'react';

interface JobDetailsProps {
  className?: string;
}

const JobDetails: React.FC<JobDetailsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>JobDetails</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default JobDetails;