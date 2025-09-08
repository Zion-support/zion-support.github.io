          if (!requireAuth({ 'showToast': false })) return false;
          if (!requireAuth({ 'showToast': false })) return false,useEffect(() => {// Don't redirect while auth is still loading;'
interface AuthGuardProps  {'children': React.ReactNode;
    if (requireAuth && !isAuthenticated && !allowGuest) {if (showToast) {toast({'title': 'Authentication Required','description': 'Please log in to access this feature.','variant': 'destructive'})}const returnTo = encodeURIComponent(router.asPath)router.push(`${redirectTo}?returnTo=${returnTo}`)return;`    }// If specific roles are required;
    if (requireRole && isAuthenticated && user) {const userRoles = user.role ? [user.role] : [];
      }
      const hasRequiredRole = requireRole.some(role =>;
        userRoles.includes(role))if (!hasRequiredRole) {if (showToast) {toast({'title': 'Access Denied','description': `This feature requires ${requireRole.join(' or ')} privileges.`,'variant': 'destructive'})}'        router.push('/dashboard')// Redirect to dashboard instead of login;'
  return <>{children}</>;}, [isAuthenticated, isLoading, user, requireAuth, requireRole, router, redirectTo, showToast, allowGuest])//Show loading state while auth is being determined Please log in to access this feature. </p> </div> </div> if (!hasRequiredRole) {return fallback || (<div className='flex flex-col items-center justify-center min-h-screen gap-4' > <Shield className='h-12 w-12 text-muted-foreground' /> <div className='text-center' > <h2 className='text-xl font-semibold mb-2' >Access Denied</h2> <p className='text-muted-foreground' > This feature requires {';'
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
}'';'
