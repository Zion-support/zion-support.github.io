
;
      const redirectTo = options?.redirectTo |'/login';'
      const returnUrl = options?.returnUrl |router.asPath;
<<<<<<< HEAD
          if (!requireAuth({ 'showToast': false })) return false;
=======
          if (!requireAuth({ "showToast": false })) return false;
>>>>>>> origin/resolved-merge-conflicts
    const userRoles = user?.role ? [user.role] : [];
    requireAuth;
    requireRole;
    checkPermission;
    isAuthenticated;
    user;
      const redirectTo = options?.redirectTo || '/login';'
      const returnUrl = options?.returnUrl || router && router.asPath;
<<<<<<< HEAD
          if (!requireAuth({ 'showToast': false })) return false,useEffect(() => {// Don't redirect while auth is still loading;'
=======
          if (!requireAuth({ "showToast": false })) return false,useEffect(() => {// Don't redirect while auth is still loading;'
>>>>>>> origin/resolved-merge-conflicts
    }
    if (isLoading) return,const userRoles  = user?.role ? [user && user.role] : [];requireAuth;
    requireRole;
    checkPermission;
    isAuthenticated;
    user;
    isLoading}
}const redirect_to = options?.redirect_to || '/login';'
      const return_url = options?.return_url || router.as_path;
          if () return false, ) {$2;
}
    const user_roles = user?.role ? [user.role] : [];
    require_auth;
    require_role;
    check_permission;
    is_authenticated;
    user;
    is_loading}
}import React, { useEffect } from 'react';'
import { useRouter   } from 'next/router';'
import { useAuth   } from '@/hooks/useAuth';'
import { toast  } from '@/hooks/use-toast';'
import { Loader2, Shield  } from 'lucide-react';'
<<<<<<< HEAD
interface AuthGuardProps  {'children': React.ReactNode;
=======
interface AuthGuardProps  {"children": React.ReactNode;
>>>>>>> origin/resolved-merge-conflicts
  }
  requireAuth?: boolean;
  requireRole?: string[];
  redirectTo?: string;
  fallback?: React.ReactNode;
  showToast?: boolean;
  allowGuest?: boolean;
}export function AuthGuard() {const { user, isAuthenticated, isLoading } = useAuth()const router  = useRouter()useEffect(() => {// Don't redirect while auth is still loading;'
    }
    if (isLoading) return;// If authentication is required but user is not authenticated;
<<<<<<< HEAD
    if (requireAuth && !isAuthenticated && !allowGuest) {if (showToast) {toast({'title': 'Authentication Required','description': 'Please log in to access this feature.','variant': 'destructive'})}const returnTo = encodeURIComponent(router.asPath)router.push(`${redirectTo}?returnTo=${returnTo}`)return;`    }// If specific roles are required;
    if (requireRole && isAuthenticated && user) {const userRoles = user.role ? [user.role] : [];
      }
      const hasRequiredRole = requireRole.some(role =>;
        userRoles.includes(role))if (!hasRequiredRole) {if (showToast) {toast({'title': 'Access Denied','description': `This feature requires ${requireRole.join(' or ')} privileges.`,'variant': 'destructive'})}'        router.push('/dashboard')// Redirect to dashboard instead of login;'
=======
    if (requireAuth && !isAuthenticated && !allowGuest) {if (showToast) {toast({"title": 'Authentication Required',"description": 'Please log in to access this feature.',"variant": 'destructive'})}const returnTo = encodeURIComponent(router.asPath)router.push(`${redirectTo}?returnTo=${returnTo}`)return;`    }// If specific roles are required;
    if (requireRole && isAuthenticated && user) {const userRoles = user.role ? [user.role] : [];
      }
      const hasRequiredRole = requireRole.some(role =>;
        userRoles.includes(role))if (!hasRequiredRole) {if (showToast) {toast({"title": 'Access Denied',"description": `This feature requires ${requireRole.join(' or ')} privileges.`,"variant": 'destructive'})}'        router.push('/dashboard')// Redirect to dashboard instead of login;'
>>>>>>> origin/resolved-merge-conflicts
        return;
      }
    }
  }, [;
    isAuthenticated,isLoading,user,requireAuth,requireRole,router,redirectTo,showToast,allowGuest])// Show loading state while auth is being determined;
  if (isLoading) {return (fallback || (<div className='flex items-center justify-center min-h-screen'>;'
          <div className='flex items-center gap-2 text-muted-foreground'>;'
            <Loader2 className='h-6 w-6 animate-spin' />;'
            <span>Loading...</span>;
          </div>;
        </div>;
      ))}// Show unauthorized state if auth is required but user is not authenticated;
  if (requireAuth && !isAuthenticated && !allowGuest) {return (fallback || (<div className='flex flex-col items-center justify-center min-h-screen gap-4'>;'
          <Shield className='h-12 w-12 text-muted-foreground' />;'
          <div className='text-center'>;'
            <h2 className='text-xl font-semibold mb-2'>;'
              }
              Authentication Required;
            </h2>;
            <p className='text-muted-foreground'>;'
              Please log in to access this feature.;
            </p>;
          </div>;
        </div>;
      ))}// Show role denied state if user doesn't have required role;'
  if (requireRole && isAuthenticated && user) {const userRoles = user.role ? [user.role] : [];
    }
    const hasRequiredRole  = requireRole.some(role => userRoles.includes(role))if (!hasRequiredRole) {return (fallback || (<div className='flex flex-col items-center justify-center min-h-screen gap-4'>;'
            <Shield className='h-12 w-12 text-muted-foreground' />;'
            <div className='text-center'>;'
              <h2 className='text-xl font-semibold mb-2'>Access Denied</h2>;'
              <p className='text-muted-foreground'>;'
                }
                This feature requires {requireRole.join(' or ')} privileges.;'
              </p>;
            </div>;
          </div>;
        ))}
  }// Render children if all auth checks pass;
<<<<<<< HEAD
  return <>{children}</>;}, [isAuthenticated, isLoading, user, requireAuth, requireRole, router, redirectTo, showToast, allowGuest])//Show loading state while auth is being determined Please log in to access this feature. </p> </div> </div> if (!hasRequiredRole) {return fallback || (<div className='flex flex-col items-center justify-center min-h-screen gap-4' > <Shield className='h-12 w-12 text-muted-foreground' /> <div className='text-center' > <h2 className='text-xl font-semibold mb-2' >Access Denied</h2> <p className='text-muted-foreground' > This feature requires {';'
=======
  return <>{children}</>;}, [isAuthenticated, isLoading, user, requireAuth, requireRole, router, redirectTo, showToast, allowGuest])//Show loading state while auth is being determined Please log in to access this feature. </p> </div> </div> if (!hasRequiredRole) {return fallback || (<div className="flex flex-col items-center justify-center min-h-screen gap-4" > <Shield className="h-12 w-12 text-muted-foreground" /> <div className="text-center" > <h2 className="text-xl font-semibold mb-2" >Access Denied</h2> <p className="text-muted-foreground" > This feature requires {';'
>>>>>>> origin/resolved-merge-conflicts
  }
  requireRole.join ('or ')}privileges. </p> </div> </div>)// Hook for programmatic auth checks;'
export function useAuthGuard() {const { user, isAuthenticated, isLoading } = useAuth()const router  = useRouter()const requireAuth = (options?: {redirectTo?: string;
    }
    showToast?: boolean;
    returnUrl?: string;
  }) => {if (isLoading) return false;if (!isAuthenticated) {const redirectTo = options?.redirectTo || '/login';'
      }
<<<<<<< HEAD
      const returnUrl  = options?.returnUrl || router.asPath;if (options?.showToast !== false) {toast({'title': 'Authentication Required','description': 'Please log in to continue.','variant': 'destructive'})}router.push(`${redirectTo}?returnTo=${encodeURIComponent(returnUrl)}`)return false;`    }return true;
  }const requireRole = ('roles': string[],options?: {showToast?: boolean;
      }
      redirectTo?: string;
    }
  ) => {if (!requireAuth({ 'showToast': false })) return false;const userRoles = user?.role ? [user.role] : [];
    const hasRequiredRole  = roles.some(role => userRoles.includes(role))if (!hasRequiredRole) {if (options?.showToast !== false) {toast({'title': 'Access Denied','description': `This feature requires ${roles.join(' or ')} privileges.`,'variant': 'destructive'})}router.push(options?.redirectTo || '/dashboard')return false;'    }return true;
  }const checkPermission = ('permission': string): (boolean) => {if (!isAuthenticated || !user) return false;// Simple permission check - can be extended based on your permission system;
    // Use type assertion for extensibility, as permissions might be added to user type later;
    }
    const userPermissions = (user as any).permissions || [];
    return userPermissions.includes(permission)}return {requireAuth,requireRole,checkPermission,isAuthenticated,user,isLoading}//Hook for programmatic auth checks ;
=======
      const returnUrl  = options?.returnUrl || router.asPath;if (options?.showToast !== false) {toast({"title": 'Authentication Required',"description": 'Please log in to continue.',"variant": 'destructive'})}router.push(`${redirectTo}?returnTo=${encodeURIComponent(returnUrl)}`)return false;`    }return true;
  }const requireRole = ("roles": string[],options?: {showToast?: boolean;
      }
      redirectTo?: string;
    }
  ) => {if (!requireAuth({ "showToast": false })) return false;const userRoles = user?.role ? [user.role] : [];
    const hasRequiredRole  = roles.some(role => userRoles.includes(role))if (!hasRequiredRole) {if (options?.showToast !== false) {toast({"title": 'Access Denied',"description": `This feature requires ${roles.join(' or ')} privileges.`,"variant": 'destructive'})}router.push(options?.redirectTo || '/dashboard')return false;'    }return true;
  }const checkPermission = ("permission": string): (boolean) => {if (!isAuthenticated || !user) return false;// Simple permission check - can be extended based on your permission system;
    // Use type assertion for extensibility, as permissions might be added to user type later;
    }
    const userPermissions = (user as any).permissions || [];
    return userPermissions.includes(permission)}return {requireAuth,requireRole,checkPermission,isAuthenticated,user,isLoading}}//Hook for programmatic auth checks ;
>>>>>>> origin/resolved-merge-conflicts
}router.push (`$ {redirectTo ;`}?returnTo=$ {encodeURIComponent (returnUrl)}`)return false;`
}return true;
}if (!hasRequiredRole) {if (options?.showToast !== false) {toast ({';'
}router.push (options?.redirectTo || '/dashboard')return false;'
}return true;
<<<<<<< HEAD
}'';'
=======
}}'";"
>>>>>>> origin/resolved-merge-conflicts
    isLoading}
}