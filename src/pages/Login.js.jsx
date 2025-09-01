<<<<<<< HEAD
import React, { useState } from 'react';'''
import { SEO } from '@/components/SEO';'''
import { GradientHeading } from '@/components/GradientHeading';'''
import { Button } from '@/components/ui/button';
export default function Login() {}
=======
import React, { useState } from 'react';
import SEO from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
export default function Login() {

>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
  const { isAuthenticated, user, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useCart();
  const reduxDispatch = useDispatch();

<<<<<<< HEAD
  useEffect(() => {}
    // This effect handles token processing (e.g., from magic link)
    // It runs when component mounts or location.search changes;
    const params = new URLSearchParams(location.search);'
    const token = params.get('token');
    if (token) {}
'
''
'''
      safeStorage.setItem('zion_token', token);
      // Clear token from URL to prevent re-processing;
      router(location.pathname, { replace: true });
    }
  }, [location.search, location.pathname, navigate]);

  useEffect ( () => {}
    if (!isLoading && isAuthenticated) {}
      reduxDispatch(setLoggedIn(true));'
      const next =''
        new URLSearchParams(location.search).get('next') || '/dashboard';
      router(next, { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate, reduxDispatch, location.search]);

  // Render LoginContent if not authenticated and auth is not loading;
  if (!isAuthenticated && !isLoading) {}
    return()
      <ErrorBoundary FallbackComponent={LoginErrorFallback}>
        <LoginContent />
      </ErrorBoundary>
    );
  }

  // Optional: Render a loading indicator while isLoading is true;
  if (isLoading) {}
    return <div className="p-4 text-center text-foreground">Loading...</div>; // Or a proper loading spinner component;
=======
  useEffect(() => {

    // This effect handles token processing (e.g., from magic link)
    // It runs when component mounts or location.search changes
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {

      safeStorage.setItem('zion_token', token);
      // Clear token from URL to prevent re-processing
      router(location.pathname, { replace: true })}
  }, [location.search, location.pathname, navigate]);

  useEffect(() => {

    if (!isLoading && isAuthenticated) {

      reduxDispatch(setLoggedIn(true));
      const next = new URLSearchParams(location.search).get('next') || '/dashboard';
      router(next, { replace: true })}
  }, [isAuthenticated, isLoading, navigate, reduxDispatch, location.search]);

  // Render LoginContent if not authenticated and auth is not loading
  if (!isAuthenticated && !isLoading) {

    return (
      <ErrorBoundary FallbackComponent={LoginErrorFallback}>
        <LoginContent />
      </ErrorBoundary>
    )}

  // Optional: Render a loading indicator while isLoading is true
  if (isLoading) {

    return <div className="p-4 text-center text-foreground">Loading...</div>; // Or a proper loading spinner component
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
  }

  // If authenticated and isLoading is false, the useEffect above should have navigated.
  // Return null or a minimal layout if needed, though direct navigation is preferred.
<<<<<<< HEAD
  return null;
}'"""
'"'"""
=======
  return null}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
