import React from 'react';

interface AdminDashboardProps {
  className?: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AdminDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AdminDashboard;