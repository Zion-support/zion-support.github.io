const returnUrl = options?.returnUrl |router.asPath

          if (!requireAuth({ showToast: false })) return false
    const userRoles = user?.role ? [user.role] : []
    requireAuth
    requireRole
    checkPermission
    isAuthenticated
    user

      const redirectTo = options?.redirectTo || '/login';
      const returnUrl = options?.returnUrl || router && router.asPath;
          if (!requireAuth({ showToast: false })) return false,;

  useEffect(() => {
    // Don't redirect while auth is still loading
    if (isLoading) return,

<<<<<<< HEAD

=======


;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

    const userRoles = user?.role ? [user && user.role] : [];

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      const redirectTo = options?.redirectTo |'/login';
const redirectTo = options?.redirectTo |'/login';
      const returnUrl = options?.returnUrl |router.asPath;
          if (!requireAuth({ showToast: false })) return false;
    const userRoles = user?.role ? [user.role] : [];
    requireAuth;
    requireRole;
    checkPermission;
=======

    const userRoles = user?.role ? [user && user.role] : [];

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    // If specific roles are required
    if (requireRole && isAuthenticated && user) {
      const userRoles = user.role ? [user.role] : [],
      const hasRequiredRole = requireRole.some(role => userRoles.includes(role)),

      if (!hasRequiredRole) {
        if (showToast) {
          toast({
            title: 'Access Denied',
            description: `This feature requires ${requireRole.join(' or ')} privileges.`,
            variant: 'destructive'});
    // If specific roles are required;
    if (requireRole && isAuthenticated && user) {;
      const userRoles = user.role ? [user.role] : [],;
      const hasRequiredRole = requireRole.some(role => userRoles.includes(role)),;
      if (!hasRequiredRole) {;
        if (showToast) {;
          toast({;
            title: 'Access Denied',
            description: `This feature requires ${requireRole.join(' or ')} privileges.`,;
            variant: 'destructive'});
        }
        router.push('/dashboard'), // Redirect to dashboard instead of login;
        return;
      }
    }
  }, [isAuthenticated, isLoading, user, requireAuth, requireRole, router, redirectTo, showToast, allowGuest]),

  // Show loading state while auth is being determined
  if (isLoading) {
    return fallback || (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='flex items-center gap-2 text-muted-foreground'>
          <Loader2 className='h-6 w-6 animate-spin' />
          <span>Loading...</span>
        </div>
      </div>
    )
  }

  // Show unauthorized state if auth is required but user is not authenticated
  if (requireAuth && !isAuthenticated && !allowGuest) {
    return fallback || (
      <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
        <Shield className='h-12 w-12 text-muted-foreground' />
        <div className='text-center'>
          <h2 className='text-xl font-semibold mb-2'>Authentication Required</h2>
          <p className='text-muted-foreground'>
            Please log in to access this feature.
          </p>
        </div>
      </div>
    )
  }

  // Show role denied state if user doesn't have required role
  if (requireRole && isAuthenticated && user) {
    const userRoles = user.role ? [user.role] : [],
    const hasRequiredRole = requireRole.some(role => userRoles.includes(role)),

    if (!hasRequiredRole) {
      return fallback || (
        <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
          <Shield className='h-12 w-12 text-muted-foreground' />
          <div className='text-center'>
            <h2 className='text-xl font-semibold mb-2'>Access Denied</h2>
            <p className='text-muted-foreground'>
              This feature requires {requireRole.join(' or ')} privileges.
            </p>
          </div>
        </div>
      )
    }
  }
;
  // Render children if all auth checks pass;
  return <>{children}</>;
}
;
// Higher-order component for easy wrapping;
export function withAuthGuard<P extends object>(;
  Component: React.ComponentType<P>,;
  guardOptions?: Omit<AuthGuardProps 'children'>;
) {;
  return function AuthGuardedComponent(props: P) {;
    return (;
      <AuthGuard {...guardOptions}>;
        <Component {...props} />;
      </AuthGuard>;
    );
  }
}

// Hook for programmatic auth checks
export function useAuthGuard() {
  const { user, isAuthenticated, isLoading } = useAuth(),
  const router = useRouter(),

  const requireAuth = (options?: {
    redirectTo?: string,
    showToast?: boolean,
    returnUrl?: string
  }) => {
    if (isLoading) return false,

    if (!isAuthenticated) {
      const redirectTo = options?.redirectTo || '/login',
      const returnUrl = options?.returnUrl || router.asPath,
      
      if (options?.showToast !== false) {
        toast({
          title: 'Authentication Required',
          description: 'Please log in to continue.',
          variant: 'destructive'});
// Hook for programmatic auth checks;
export function useAuthGuard() {;
  const { user, isAuthenticated, isLoading } = useAuth(),;
  const router = useRouter(),;
  const requireAuth = (options?: {;
    redirectTo?: string,;
    showToast?: boolean,;
    returnUrl?: string;
  }) => {;
    if (isLoading) return false,;
    if (!isAuthenticated) {;
      const redirectTo = options?.redirectTo || '/login',;
      const returnUrl = options?.returnUrl || router.asPath,;
      if (options?.showToast !== false) {;
        toast({;
          title: 'Authentication Required',
          description: 'Please log in to continue.',;
          variant: 'destructive'});
      }
;
      router.push(`${redirectTo}?returnTo=${encodeURIComponent(returnUrl)}`),;
      return false;
    }

    return true
  },

  const requireRole = (roles: string[], options?: {
    showToast?: boolean,
    redirectTo?: string
  }) => {
    if (!requireAuth({ showToast: false })) return false,

    const userRoles = user?.role ? [user.role] : [],
    const hasRequiredRole = roles.some(role => userRoles.includes(role)),

    if (!hasRequiredRole) {
      if (options?.showToast !== false) {
        toast({
          title: 'Access Denied',
          description: `This feature requires ${roles.join(' or ')} privileges.`,
          variant: 'destructive'});
    return true;
  },;
  const requireRole = (roles: string[], options?: {;
    showToast?: boolean,;
    redirectTo?: string;
  }) => {;
    if (!requireAuth({ showToast: false })) return false,;
    const userRoles = user?.role ? [user.role] : [],;
    const hasRequiredRole = roles.some(role => userRoles.includes(role)),;
    if (!hasRequiredRole) {;
      if (options?.showToast !== false) {;
        toast({;
          title: 'Access Denied',
          description: `This feature requires ${roles.join(' or ')} privileges.`,;
          variant: 'destructive'});
      }
;
      router.push(options?.redirectTo || '/dashboard'),;
      return false;
    }
;
    return true;
  },;
  const checkPermission = (permission: string): boolean => {;
    if (!isAuthenticated || !user) return false,;
    // Simple permission check - can be extended based on your permission system;
    // Use type assertion for extensibility, as permissions might be added to user type later;
    const userPermissions = (user as any).permissions || [],;
    return userPermissions.includes(permission);
  },;
  return {;
    requireAuth,;
    requireRole,;
    checkPermission,;
    isAuthenticated;
    user;
<<<<<<< HEAD


=======
<<<<<<< HEAD
      const redirectTo = options?.redirectTo || '/login';
      const returnUrl = options?.returnUrl || router && router.asPath;
          if (!requireAuth({ showToast: false })) return false,useEffect(() => {// Don't redirect while auth is still loading;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    isLoading}
}

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          if (!requireAuth({ showToast: false })) return false,useEffect(() => {// Dont redirect while auth is still loading;
>>>>>>> origin/resolved-merge-conflicts
    if (isLoading) return,const userRoles  = user?.role ? [user && user.role] : [];requireAuth;
    requireRole;
    checkPermission;
    isAuthenticated;
    user;
    isLoading}
}

}const redirect_to = options?.redirect_to || '/login';
      const return_url = options?.return_url || router.as_path;
          if () return false, ) {$2;
<<<<<<< HEAD
      const redirect_to = options?.redirect_to || '/login';
      const return_url = options?.return_url || router.as_path;
=======
      const redirect_to = options?.redirect_to || /login;
=======
    isLoading}
}

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      const redirect_to = options?.redirect_to || '/login';
      const return_url = options?.return_url || router.as_path;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
          if () return false, ) {
  $2
}
    const user_roles = user?.role ? [user.role] : [];
    require_auth;
    require_role;
    check_permission;
    is_authenticated;
    user;
    is_loading}
}

;

import React, { useEffect } from 'react';
import { useRouter  } from 'next/router';
import { useAuth  } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { Loader2, Shield } from 'lucide-react'

interface AuthGuardProps {
  children: React.ReactNode;
<<<<<<< HEAD


=======
<<<<<<< HEAD
}import React, { useEffect } from 'react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}import React, { useEffect } from react;
>>>>>>> origin/resolved-merge-conflicts
import { useRouter   } from 'next/router';
import { useAuth   } from '@/hooks/useAuth';
import { toast  } from '@/hooks/use-toast';
import { Loader2, Shield  } from 'lucide-react';
interface AuthGuardProps  {children: React.ReactNode;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  requireAuth?: boolean;
  requireRole?: string[];
  redirectTo?: string;
  fallback?: React.ReactNode;
  showToast?: boolean;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  allowGuest?: boolean
}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  useEffect(() => {
    // Don't redirect while auth is still loading
    if (isLoading) return;

    // If authentication is required but user is not authenticated
    if (requireAuth && !isAuthenticated && !allowGuest) {
      if (showToast) {
        toast({
          title: 'Authentication Required',
          description: 'Please log in to access this feature.',
          variant: 'destructive',
        });
      }

      const returnTo = encodeURIComponent(router.asPath);
      router.push(`${redirectTo}?returnTo=${returnTo}`);
      return;
    }

    // If specific roles are required
    if (requireRole && isAuthenticated && user) {
      const userRoles = user.role ? [user.role] : [];
      const hasRequiredRole = requireRole.some(role =>
        userRoles.includes(role)
      );

      if (!hasRequiredRole) {
        if (showToast) {
          toast({
            title: 'Access Denied',
            description: `This feature requires ${requireRole.join(' or ')} privileges.`,
            variant: 'destructive',
          });
        }
        router.push('/dashboard'); // Redirect to dashboard instead of login
        return;
      }
    }
  }, [
    isAuthenticated,
    isLoading,
    user,
    requireAuth,
    requireRole,
    router,
    redirectTo,
    showToast,
    allowGuest,
  ]);

  // Show loading state while auth is being determined
  if (isLoading) {
    return (
      fallback || (
        <div className='flex items-center justify-center min-h-screen'>
          <div className='flex items-center gap-2 text-muted-foreground'>
            <Loader2 className='h-6 w-6 animate-spin' />
            <span>Loading...</span>
          </div>
        </div>
      )
    );
  }

  // Show unauthorized state if auth is required but user is not authenticated
  if (requireAuth && !isAuthenticated && !allowGuest) {
    return (
      fallback || (
        <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
          <Shield className='h-12 w-12 text-muted-foreground' />
          <div className='text-center'>
            <h2 className='text-xl font-semibold mb-2'>
              Authentication Required
            </h2>
            <p className='text-muted-foreground'>
              Please log in to access this feature.
            </p>
          </div>
        </div>
      )
    );
  }

  // Show role denied state if user doesn't have required role
  if (requireRole && isAuthenticated && user) {
    const userRoles = user.role ? [user.role] : [];
    const hasRequiredRole = requireRole.some(role => userRoles.includes(role));

    if (!hasRequiredRole) {
      return (
        fallback || (
          <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
            <Shield className='h-12 w-12 text-muted-foreground' />
            <div className='text-center'>
              <h2 className='text-xl font-semibold mb-2'>Access Denied</h2>
              <p className='text-muted-foreground'>
                This feature requires {requireRole.join(' or ')} privileges.
              </p>
            </div>
          </div>
        )
      );
    }
  }

  // Render children if all auth checks pass
  return <>{children}</>;

}, [isAuthenticated, isLoading, user, requireAuth, requireRole, router, redirectTo, showToast, allowGuest]);
//Show loading state while auth is being determined Please log in to access this feature. </p> </div> </div> if (!hasRequiredRole) {;
  return fallback || (<div className="flex flex-col items-center justify-center min-h-screen gap-4" > <Shield className="h-12 w-12 text-muted-foreground" /> <div className="text-center" > <h2 className="text-xl font-semibold mb-2" >Access Denied</h2> <p className="text-muted-foreground" > This feature requires {';
  requireRole.join ('or ') ;
}privileges. </p> </div> </div>) ;

// Hook for programmatic auth checks
export function useAuthGuard() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  const requireAuth = (options?: {
    redirectTo?: string;
    showToast?: boolean;
    returnUrl?: string;
  }) => {
    if (isLoading) return false;

    if (!isAuthenticated) {
      const redirectTo = options?.redirectTo || '/login';
      const returnUrl = options?.returnUrl || router.asPath;

      if (options?.showToast !== false) {
        toast({
          title: 'Authentication Required',
          description: 'Please log in to continue.',
          variant: 'destructive',
        });
      }

      router.push(`${redirectTo}?returnTo=${encodeURIComponent(returnUrl)}`);
      return false;
    }

    return true;
  };

  const requireRole = (
    roles: string[],
    options?: {
      showToast?: boolean;
      redirectTo?: string;
    }
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  allowGuest?: boolean;
}export function AuthGuard() {const { user, isAuthenticated, isLoading } = useAuth()const router  = useRouter()useEffect(() => {// Don't redirect while auth is still loading;
    if (isLoading) return;// If authentication is required but user is not authenticated;
    if (requireAuth && !isAuthenticated && !allowGuest) {if (showToast) {toast({title: 'Authentication Required',description: 'Please log in to access this feature.',variant: 'destructive'})}const returnTo = encodeURIComponent(router.asPath)router.push(`${redirectTo}?returnTo=${returnTo}`)return;
    }// If specific roles are required;
    if (requireRole && isAuthenticated && user) {const userRoles = user.role ? [user.role] : [];
      const hasRequiredRole = requireRole.some(role =>;
        userRoles.includes(role))if (!hasRequiredRole) {if (showToast) {toast({title: 'Access Denied',description: `This feature requires ${requireRole.join(' or ')} privileges.`,variant: 'destructive'})}
        router.push('/dashboard')// Redirect to dashboard instead of login;
        return;
      }
    }
  }, [;
    isAuthenticated,isLoading,user,requireAuth,requireRole,router,redirectTo,showToast,allowGuest])// Show loading state while auth is being determined;
  if (isLoading) {return (fallback || (<div className='flex items-center justify-center min-h-screen'>;
          <div className='flex items-center gap-2 text-muted-foreground'>;
            <Loader2 className='h-6 w-6 animate-spin' />;
            <span>Loading...</span>;
          </div>;
        </div>;
      ))}// Show unauthorized state if auth is required but user is not authenticated;
  if (requireAuth && !isAuthenticated && !allowGuest) {return (fallback || (<div className='flex flex-col items-center justify-center min-h-screen gap-4'>;
          <Shield className='h-12 w-12 text-muted-foreground' />;
          <div className='text-center'>;
            <h2 className='text-xl font-semibold mb-2'>;
              Authentication Required;
            </h2>;
            <p className='text-muted-foreground'>;
              Please log in to access this feature.;
            </p>;
          </div>;
        </div>;
      ))}// Show role denied state if user doesn't have required role;
  if (requireRole && isAuthenticated && user) {const userRoles = user.role ? [user.role] : [];
    const hasRequiredRole  = requireRole.some(role => userRoles.includes(role))if (!hasRequiredRole) {return (fallback || (<div className='flex flex-col items-center justify-center min-h-screen gap-4'>;
            <Shield className='h-12 w-12 text-muted-foreground' />;
            <div className='text-center'>;
              <h2 className='text-xl font-semibold mb-2'>Access Denied</h2>;
              <p className='text-muted-foreground'>;
                This feature requires {requireRole.join(' or ')} privileges.;
              </p>;
            </div>;
          </div>;
        ))}
  }// Render children if all auth checks pass;
  return <>{children}</>;}, [isAuthenticated, isLoading, user, requireAuth, requireRole, router, redirectTo, showToast, allowGuest])//Show loading state while auth is being determined Please log in to access this feature. </p> </div> </div> if (!hasRequiredRole) {return fallback || (<div className='flex flex-col items-center justify-center min-h-screen gap-4' > <Shield className='h-12 w-12 text-muted-foreground' /> <div className='text-center' > <h2 className='text-xl font-semibold mb-2' >Access Denied</h2> <p className='text-muted-foreground' > This feature requires {';
  requireRole.join ('or ')}privileges. </p> </div> </div>)// Hook for programmatic auth checks;
export function useAuthGuard() {const { user, isAuthenticated, isLoading } = useAuth()const router  = useRouter()const requireAuth = (options?: {redirectTo?: string;
    showToast?: boolean;
    returnUrl?: string;
  }) => {if (isLoading) return false;if (!isAuthenticated) {const redirectTo = options?.redirectTo || '/login';
      const returnUrl  = options?.returnUrl || router.asPath;if (options?.showToast !== false) {toast({title: 'Authentication Required',description: 'Please log in to continue.',variant: 'destructive'})}router.push(`${redirectTo}?returnTo=${encodeURIComponent(returnUrl)}`)return false;
    }return true;
  }const requireRole = (roles: string[],options?: {showToast?: boolean;
      redirectTo?: string;
    }
  ) => {if (!requireAuth({ showToast: false })) return false;const userRoles = user?.role ? [user.role] : [];
    const hasRequiredRole  = roles.some(role => userRoles.includes(role))if (!hasRequiredRole) {if (options?.showToast !== false) {toast({title: 'Access Denied',description: `This feature requires ${roles.join(' or ')} privileges.`,variant: 'destructive'})}router.push(options?.redirectTo || '/dashboard')return false;
    }return true;
  }const checkPermission = (permission: string): boolean => {if (!isAuthenticated || !user) return false;// Simple permission check - can be extended based on your permission system;
    // Use type assertion for extensibility, as permissions might be added to user type later;
=======
  allowGuest?: boolean
}

export function AuthGuard({
  children,
  requireAuth = true,
  requireRole,
  redirectTo = '/auth/login',
  fallback,
  showToast = true,
  allowGuest = false,
}: AuthGuardProps) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Don't redirect while auth is still loading
    if (isLoading) return;

    // If authentication is required but user is not authenticated
    if (requireAuth && !isAuthenticated && !allowGuest) {
      if (showToast) {
        toast({
          title: 'Authentication Required',
          description: 'Please log in to access this feature.',
          variant: 'destructive',
        });
      }

      const returnTo = encodeURIComponent(router.asPath);
      router.push(`${redirectTo}?returnTo=${returnTo}`);
      return;
    }

    // If specific roles are required
    if (requireRole && isAuthenticated && user) {
      const userRoles = user.role ? [user.role] : [];
      const hasRequiredRole = requireRole.some(role =>
        userRoles.includes(role)
      );

      if (!hasRequiredRole) {
        if (showToast) {
          toast({
            title: 'Access Denied',
            description: `This feature requires ${requireRole.join(' or ')} privileges.`,
            variant: 'destructive',
          });
        }
        router.push('/dashboard'); // Redirect to dashboard instead of login
        return;
      }
    }
  }, [
    isAuthenticated,
    isLoading,
    user,
    requireAuth,
    requireRole,
    router,
    redirectTo,
    showToast,
    allowGuest,
  ]);

  // Show loading state while auth is being determined
  if (isLoading) {
    return (
      fallback || (
        <div className='flex items-center justify-center min-h-screen'>
          <div className='flex items-center gap-2 text-muted-foreground'>
            <Loader2 className='h-6 w-6 animate-spin' />
            <span>Loading...</span>
          </div>
        </div>
      )
    );
  }

  // Show unauthorized state if auth is required but user is not authenticated
  if (requireAuth && !isAuthenticated && !allowGuest) {
    return (
      fallback || (
        <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
          <Shield className='h-12 w-12 text-muted-foreground' />
          <div className='text-center'>
            <h2 className='text-xl font-semibold mb-2'>
              Authentication Required
            </h2>
            <p className='text-muted-foreground'>
              Please log in to access this feature.
            </p>
          </div>
        </div>
      )
    );
  }

  // Show role denied state if user doesn't have required role
  if (requireRole && isAuthenticated && user) {
    const userRoles = user.role ? [user.role] : [];
    const hasRequiredRole = requireRole.some(role => userRoles.includes(role));

    if (!hasRequiredRole) {
      return (
        fallback || (
          <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
            <Shield className='h-12 w-12 text-muted-foreground' />
            <div className='text-center'>
              <h2 className='text-xl font-semibold mb-2'>Access Denied</h2>
              <p className='text-muted-foreground'>
                This feature requires {requireRole.join(' or ')} privileges.
              </p>
            </div>
          </div>
        )
      );
    }
  }

  // Render children if all auth checks pass
  return <>{children}</>;

}, [isAuthenticated, isLoading, user, requireAuth, requireRole, router, redirectTo, showToast, allowGuest]);
//Show loading state while auth is being determined Please log in to access this feature. </p> </div> </div> if (!hasRequiredRole) {;
  return fallback || (<div className="flex flex-col items-center justify-center min-h-screen gap-4" > <Shield className="h-12 w-12 text-muted-foreground" /> <div className="text-center" > <h2 className="text-xl font-semibold mb-2" >Access Denied</h2> <p className="text-muted-foreground" > This feature requires {';
  requireRole.join ('or ') ;
}privileges. </p> </div> </div>) ;

// Hook for programmatic auth checks
export function useAuthGuard() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  const requireAuth = (options?: {
    redirectTo?: string;
    showToast?: boolean;
    returnUrl?: string;
  }) => {
    if (isLoading) return false;

    if (!isAuthenticated) {
      const redirectTo = options?.redirectTo || '/login';
      const returnUrl = options?.returnUrl || router.asPath;

      if (options?.showToast !== false) {
        toast({
          title: 'Authentication Required',
          description: 'Please log in to continue.',
          variant: 'destructive',
        });
      }

      router.push(`${redirectTo}?returnTo=${encodeURIComponent(returnUrl)}`);
      return false;
    }

    return true;
  };

  const requireRole = (
    roles: string[],
    options?: {
      showToast?: boolean;
      redirectTo?: string;
    }
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ) => {
    if (!requireAuth({ showToast: false })) return false;

    const userRoles = user?.role ? [user.role] : [];
    const hasRequiredRole = roles.some(role => userRoles.includes(role));

    if (!hasRequiredRole) {
      if (options?.showToast !== false) {
        toast({
          title: 'Access Denied',
          description: `This feature requires ${roles.join(' or ')} privileges.`,
          variant: 'destructive',
        });
      }

      router.push(options?.redirectTo || '/dashboard');
      return false;
    }

    return true;
  };

  const checkPermission = (permission: string): boolean => {
    if (!isAuthenticated || !user) return false;

    // Simple permission check - can be extended based on your permission system
    // Use type assertion for extensibility, as permissions might be added to user type later
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    const userPermissions = (user as any).permissions || [];
<<<<<<< HEAD
    return userPermissions.includes(permission)}return {requireAuth,requireRole,checkPermission,isAuthenticated,user,isLoading}//Hook for programmatic auth checks ;
}router.push (`$ {redirectTo ;
}?returnTo=$ {encodeURIComponent (returnUrl)}`)return false;
}return true;
}if (!hasRequiredRole) {if (options?.showToast !== false) {toast ({';
=======
    return userPermissions.includes(permission);
  };

  return {
    requireAuth,
    requireRole,
    checkPermission,
    isAuthenticated,
    user,
    isLoading,
  };

}//Hook for programmatic auth checks ;
}router.push (`$ {;
  redirectTo ;
}?returnTo=$ {;
  encodeURIComponent (returnUrl) ;
}`);
return false;
}return true;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
}if (!hasRequiredRole) {if (options?.showToast !== false) {toast ({;
>>>>>>> origin/resolved-merge-conflicts
}router.push (options?.redirectTo || '/dashboard')return false;
=======
=======
=======
<<<<<<< HEAD
}if (!hasRequiredRole) {if (options?.showToast !== false) {toast ({;
}router.push (options?.redirectTo || '/dashboard')return false;
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
};
if (!hasRequiredRole) {;
  if (options?.showToast !== false) {;
  toast ({;
  ';
}router.push (options?.redirectTo || '/dashboard');
return false;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
}return true;
<<<<<<< HEAD
}'';
=======
};
}'"
>>>>>>> origin/resolved-merge-conflicts
    isLoading}
}