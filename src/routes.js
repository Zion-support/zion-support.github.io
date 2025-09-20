// routes.ts - Route configurations for the application;
// Auth routes;
export const AuthRoutes = {login: '/login';
    signup: '/signup';
    forgotPassword: '/forgot-password';
    resetPassword: '/reset-password'};
    // Dashboard routes;
export const DashboardRoutes = {dashboard: '/dashboard';
    profile: '/profile';
    settings: '/settings'};
    // Marketplace routes;
export const MarketplaceRoutes = {marketplace: '/marketplace';
    services: '/services';
    products: '/products'};
    // Talent routes;
export const TalentRoutes = {talent: '/talent';
    talents: '/talents';
    talentProfile: '/talent/:id'};
    // Admin routes;
export const AdminRoutes = {admin: '/admin';
    users: '/admin/users';
    analytics: '/admin/analytics'};
    // Mobile app routes;
<<<<<<< HEAD
export const MobileAppRoutes = {
    mobileLaunch: '/mobile-launch';
=======
export const MobileAppRoutes = {mobileLaunch: '/mobile-launch';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
    openApp: '/open-app'};
    // Content routes;
export const ContentRoutes = {blog: '/blog';
    blogPost: '/blog/:slug';
    resources: '/resources'};
    // Error routes;
<<<<<<< HEAD
export const ErrorRoutes = {
    notFound: '/404';
=======
export const ErrorRoutes = {notFound: '/404';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
    error: '/error'};
    // Enterprise routes;
export const EnterpriseRoutes = {enterprise: '/enterprise';
    solutions: '/solutions';
    caseStudies: '/case-studies'};
    // Community routes;
export const CommunityRoutes = {community: '/community';
    partners: '/partners';
    events: '/events'};
    // Developer routes;
export const DeveloperRoutes = {api: '/api';
    docs: '/docs';
    developer: '/developer'};