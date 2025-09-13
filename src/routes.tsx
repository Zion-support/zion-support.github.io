import React from 'react';
import { Routes, Route } from 'react-router-dom';

export const AuthRoutes = () => <Routes><Route path="*" element={<div>Auth</div>} /></Routes>;
export const DashboardRoutes = () => <Routes><Route path="*" element={<div>Dashboard</div>} /></Routes>;
export const MarketplaceRoutes = () => <Routes><Route path="*" element={<div>Marketplace</div>} /></Routes>;
export const TalentRoutes = () => <Routes><Route path="*" element={<div>Talent</div>} /></Routes>;
export const AdminRoutes = () => <Routes><Route path="*" element={<div>Admin</div>} /></Routes>;
export const MobileAppRoutes = () => <Routes><Route path="*" element={<div>Mobile</div>} /></Routes>;
export const ContentRoutes = () => <Routes><Route path="*" element={<div>Content</div>} /></Routes>;
export const ErrorRoutes = () => <Routes><Route path="*" element={<div>Not Found</div>} /></Routes>;
export const EnterpriseRoutes = () => <Routes><Route path="*" element={<div>Enterprise</div>} /></Routes>;
export const CommunityRoutes = () => <Routes><Route path="*" element={<div>Community</div>} /></Routes>;
export const DeveloperRoutes = () => <Routes><Route path="*" element={<div>Developer</div>} /></Routes>;

