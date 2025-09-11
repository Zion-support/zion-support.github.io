import { useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { safeStorage } from '@/utils/safeStorage';

export default function Login() {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // This effect handles token processing (e.g., from magic link)
    const token = searchParams.get('token');
    if (token) {
      safeStorage.setItem('zion_token', token);
      // Clear token from URL to prevent re-processing
      navigate(location.pathname, { replace: true });
    }
  }, [searchParams, location.pathname, navigate]);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      const next = searchParams.get('next') || '/dashboard';
      navigate(next, { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate, searchParams]);

  // Render login form if not authenticated and auth is not loading
  if (!isAuthenticated && !isLoading) {
    return (
      <div className="min-h-screen bg-futuristic flex items-center justify-center p-4">
        <div className="card-futuristic w-full max-w-md p-8">
          <h1 className="text-2xl font-bold text-center mb-6 text-neon">Login</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input-futuristic w-full"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="input-futuristic w-full"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="btn-futuristic w-full"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Loading indicator
  if (isLoading) {
    return (
      <div className="min-h-screen bg-futuristic flex items-center justify-center">
        <div className="spinner-futuristic"></div>
      </div>
    );
  }

  return null;
}
