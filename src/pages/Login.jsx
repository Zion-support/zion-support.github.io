import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { LoginContent } from '@/components/auth/login';

export default function Login() {
  const { isAuthenticated, user, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      const next = location.state?.from || '/dashboard';
      navigate(next, { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate, location]);

  // Render LoginContent if not authenticated and auth is not loading
  if (!isAuthenticated && !isLoading) {
    return <LoginContent />;
  }

  // Optional: Render a loading indicator while isLoading is true
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-4 text-center text-foreground">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zion-cyan mx-auto mb-4"></div>
          Loading...
        </div>
      </div>
    );
  }

  // If authenticated and isLoading is false, the useEffect above should have navigated.
  return null;
}
