export { default as AdminRoutes } from './AdminRoutes';
export { default as AuthRoutes } from './AuthRoutes';
export { default as CommunityRoutes } from './CommunityRoutes';
export { default as ContentRoutes } from './ContentRoutes';
export { default as DashboardRoutes } from './DashboardRoutes';
export { default as MarketplaceRoutes } from './MarketplaceRoutes';
export { default as TalentRoutes } from './TalentRoutes';

// Minimal fallbacks for routes that may not exist
export const ErrorRoutes = () => null;
export const EnterpriseRoutes = () => null;
export const DeveloperRoutes = () => null;
export const MobileAppRoutes = () => null;
