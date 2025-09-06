 //Find a route by path in the complete sitemap export const findRouteByPath = (path: string) : SitemapItem | undefined => {
  return completeSitemap.find (route => route.path === path) 
};
//Check if a route requires authentication export const isProtectedRoute = (path: string) : boolean => {
  const route = findRouteByPath (path);
return route?.requiredAuth === true 
};
isAuthenticated: boolean;
userType?: string | null //If route doesn't exist in our sitemap if (!route) return true, //Default to accessible //If route requires authentication and user is not authenticated if (route.requiredAuth && !isAuthenticated) return false;
//If route requires specific roles and user doesn't have one if (route.requiredRoles && route.requiredRoles.length > 0) {
  return true;
};
//Get breadcrumb items for a path if (path === '/') return breadcrumbs;
//Split the path into segments if (route) {
  breadcrumbs.push ({
  label: route.label, path: currentPath 
});
}else {
  // For dynamic routes that might not be in the static sitemap breadcrumbs.push ({
  
}
}return breadcrumbs;
};
