import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Docs: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the Documentation page
    navigate('/docs', { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
        <p className="text-slate-300 mt-4">Redirecting to Documentation...</p>
      </div>
    </div>
  );
};

export default Docs;