<<<<<<< HEAD:src_backup/components/SitemapPage.tsx
<<<<<<< HEAD:src/components/SitemapPage.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
// Map sitemap paths to their actual routes in the application
// Note: This pathMap might need to be updated based on Next.js page structure
const pathMap: Record<string, string> = {

const resolve_path = (path: string): string => path_map[path] ?? path, import React from 'react';
import { complete_sitemap, dynamic_paths } from '@/config / sitemap';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import React from 'react';
=======
// Map sitemap paths to their actual routes in the application;
// Note: This pathMap might need to be updated based on Next.js page structure;
const pathMap: Record<string, string> = {}
const resolve_path = (path: string): string => path_map[path] ?? path, import React from 'react';'
import { complete_sitemap, dynamic_paths } from '@/config / sitemap';'
import Link from 'next / link';'
import { ChevronRight } from 'lucide-react';'
import React from 'react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SitemapPage.tsx
import { SEO } from './SEO';
// Map sitemap paths to their actual routes in the application;
// Note: This path_map might need to be updated based on Next.js page structure;
const path_map: Record < string, string> = {'
  '/about': '/content / about / blog': '/blog / careers': '/careers / green - it': '/content / green - it / sitemap - page': '/content / sitemap - page / talent - onboarding': '/talent - onboarding / forgot - password': '/forgot - password / signup / talent': '/auth / signup / talent / signup / client': '/auth / signup / client / talent - dashboard': '/talent - dashboard / client - dashboard': '/client - dashboard / hiring - tracker': '/dashboard / hiring - tracker / messages': '/dashboard / messages / notifications': '/dashboard / notifications / project/:project_id / room': '/dashboard / project/:project_id / room / post - job': '/marketplace / post - job'}
const resolve_path = (path: string): string => path_map[path] ?? path,

<<<<<<< HEAD:src_backup/components/SitemapPage.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React from 'react',
import { completeSitemap, dynamicPaths } from '@/config/sitemap',
import Link from 'next/link',
import { ChevronRight } from 'lucide-react'
import { SEO } from './SEO',
// Map sitemap paths to their actual routes in the application
// Note: This pathMap might need to be updated based on Next.js page structure
const pathMap: Record<string string> = {
=======
'
import React from 'react','
import { completeSitemap, dynamicPaths } from '@/config/sitemap','
import Link from 'next/link','
import { ChevronRight } from 'lucide-react''
import { SEO } from './SEO',;
// Map sitemap paths to their actual routes in the application;
// Note: This pathMap might need to be updated based on Next.js page structure;
const pathMap: Record<string string> = {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SitemapPage.tsx
  '/about': '/content/about/blog': '/blog/careers': '/careers/green-it': '/content/green-it/sitemap-page': '/content/sitemap-page/talent-onboarding': '/talent-onboarding/forgot-password': '/forgot-password/signup/talent': '/auth/signup/talent/signup/client': '/auth/signup/client/talent-dashboard': '/talent-dashboard/client-dashboard': '/client-dashboard/hiring-tracker': '/dashboard/hiring-tracker/messages': '/dashboard/messages/notifications': '/dashboard/notifications/project/:projectId/room': '/dashboard/project/:projectId/room/post-job': '/marketplace/post-job'},

<<<<<<< HEAD
const resolvePath = (path: string): string => pathMap[path] ?? path,

export const SitemapPage: React.FC = () => {
  return (
<<<<<<< HEAD
=======

const resolvePath = (path: string): string => pathMap[path] ?? path,

export const SitemapPage: React.FC = () => {';
import { ChevronRight } from 'lucide-react';'
import React from 'react';'
import { completeSitemap, dynamicPaths } from '@/config/sitemap';'
import Link from 'next/link';'
import { ChevronRight } from 'lucide-react';'
import { SEO } from './SEO';
// Map sitemap paths to their actual routes in the application;
// Note: This pathMap might need to be updated based on Next && Next.js page structure;
const pathMap: Record<string, string> = {;'
  '/about': '/content/about/blog': '/blog/careers': '/careers/green-it': '/content/green-it/sitemap-page': '/content/sitemap-page/talent-onboarding': '/talent-onboarding/forgot-password': '/forgot-password/signup/talent': '/auth/signup/talent/signup/client': '/auth/signup/client/talent-dashboard': '/talent-dashboard/client-dashboard': '/client-dashboard/hiring-tracker': '/dashboard/hiring-tracker/messages': '/dashboard/messages/notifications': '/dashboard/notifications/project/:projectId/room': '/dashboard/project/:projectId/room/post-job': '/marketplace/post-job'};

const resolvePath = (path: string): string => pathMap[path] ?? path,;
export const SitemapPage: React.FC = () => {;
  return (
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SitemapPage.tsx
    <>;


        
<<<<<<< HEAD:src/components/SitemapPage.tsx
=======
    <>
      <SEO
        title="Sitemap | Zion AI Marketplace"
        description="Complete sitemap of the Zion AI Marketplace"
        keywords="sitemap, zion, ai marketplace, navigation"
        canonical="https://app.ziontechgroup.com/content/sitemap-page"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Sitemap</h1>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Public Pages */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Public Pages</h2>
            <ul className="space-y-2">
              {completeSitemap
                .filter(route => !route.requiredAuth)
                .map(route => (
                  <li key={route.path}>
                    <Link
                      href={resolvePath(route.path)}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />                      {route.label}
=======
=======


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
        canonical="https://app && app.ziontechgroup.com/content/sitemap-page"
      />;"
      <div className="container mx-auto px-4 py-12">;"
        <h1 className="text-3xl font-bold mb-8">Sitemap</h1>;
"
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {/* Public Pages */}"
          <div className="bg-zion-blue-dark p-6 rounded-lg">;"
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Public Pages</h2>;"
            <ul className="space-y-2">;
              {completeSitemap;
                .filter(route => !route && route.requiredAuth);
                .map(route => (;
                  <li key={route && route.path}>;
                    <Link;
      <SEO;"
        title="Sitemap | Zion AI Marketplace";"
        description="Complete sitemap of the Zion AI Marketplace";"
        keywords="sitemap, zion, ai marketplace, navigation";"
        canonical="https://app.ziontechgroup.com / content / sitemap - page";
      />;"
      <div className="container mx - auto px - 4 py - 12">;"
        <h1 className="text - 3xl font - bold mb - 8">Sitemap</h1>;"
        <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
          {/* Public Pages */}"
          <div className="bg - zion - blue - dark p - 6 rounded - lg">;"
            <h2 className="text - xl font - bold mb - 4 text - zion - cyan">Public Pages</h2>;"
            <ul className="space - y-2">;
              {complete_sitemap;
                .filter (route => !route.required_auth);
                .map (route => (
                  <li key={route.path}>;
                    <Link;
                      href = {resolve_path (route.path), }"
                      className="flex items - center hover:text - zion - purple";
                    >;"
                      <ChevronRight className="h - 4 w - 4 mr - 2" />;


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SitemapPage.tsx
                      {route.label}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                    </Link>;
<<<<<<< HEAD
                  </li>;
                ));
              }
=======
                  </li>));
              }

<<<<<<< HEAD:src/components/SitemapPage.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </ul>;
          </div>;
=======
            </ul>;
          </div>;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

            </ul>;
          </div>;


<<<<<<< HEAD:src_backup/components/SitemapPage.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SitemapPage.tsx
          {/* Talent Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Talent Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires talent or creator account</p>
            <ul className="space-y-2">
              {completeSitemap
                .filter(route => 
                  route.requiredRoles?.includes('jobSeeker') || 
=======
          {/* Talent Routes */}"
          <div className="bg-zion-blue-dark p-6 rounded-lg">"
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Talent Pages</h2>"
            <p className="text-sm text-zion-slate mb-4">Requires talent or creator account</p>"
            <ul className="space-y-2">
              {completeSitemap;
                .filter(route =>'
                  route.requiredRoles?.includes('jobSeeker') |'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SitemapPage.tsx
                  route.requiredRoles?.includes('creator')
                )
                .map(route => (
                  <li key={route.path}>
<<<<<<< HEAD:src_backup/components/SitemapPage.tsx
                    <Link
                      href={resolvePath(route.path)}
=======
                    <Link;
                      href = {resolvePath(route.path),}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SitemapPage.tsx
                      className="flex items-center hover:text-zion-purple"
                    >"
                      <ChevronRight className="h-4 w-4 mr-2" />
<<<<<<< HEAD:src/components/SitemapPage.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                      {route.label}
=======
            </ul>;
          </div>;
<<<<<<< HEAD:src_backup/components/SitemapPage.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
            </ul>;
          </div>;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SitemapPage.tsx
          {/* Talent Routes */}
          <div className="bg - zion - blue - dark p - 6 rounded - lg">;
            <h2 className="text - xl font - bold mb - 4 text - zion - cyan">Talent Pages</h2>;
            <p className="text - sm text - zion - slate mb - 4">Requires talent or creator account</p>;
=======
          {/* Talent Routes */}"
          <div className="bg - zion - blue - dark p - 6 rounded - lg">;"
            <h2 className="text - xl font - bold mb - 4 text - zion - cyan">Talent Pages</h2>;"
            <p className="text - sm text - zion - slate mb - 4">Requires talent or creator account</p>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SitemapPage.tsx
            <ul className="space - y-2">;
=======
          <div className="bg - zion - blue - dark p - 6 rounded-lg">;
            <h2 className="text - xl font - bold mb - 4 text - zion-cyan">Talent Pages</h2>;
            <p className="text - sm text - zion - slate mb-4">Requires talent or creator account</p>;
            <ul className="space-y-2">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              {complete_sitemap;
                .filter (route =>;'
                  route.required_roles?.includes ('job_seeker') ||;'
                  route.required_roles?.includes ('creator'));
                .map (route => (
                  <li key={route.path}>;
                    <Link;
<<<<<<< HEAD:src_backup/components/SitemapPage.tsx
                      href = {resolve_path (route.path), }
                      className="flex items - center hover:text - zion-purple";
                    >;
                      <ChevronRight className="h - 4 w - 4 mr-2" />;
=======
                      href = {resolve_path (route.path), }"
                      className="flex items - center hover:text - zion - purple";
                    >;"
                      <ChevronRight className="h - 4 w - 4 mr - 2" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SitemapPage.tsx
                      {route.label}
                    </Link>;
                  </li>));
              }

<<<<<<< HEAD:src/components/SitemapPage.tsx
<<<<<<< HEAD
            </ul>;
          </div>;

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

            </ul>;
          </div>;


<<<<<<< HEAD:src_backup/components/SitemapPage.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SitemapPage.tsx
          {/* Client Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Client Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires employer or buyer account</p>
=======
          {/* Client Routes */}"
          <div className="bg-zion-blue-dark p-6 rounded-lg">"
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Client Pages</h2>"
            <p className="text-sm text-zion-slate mb-4">Requires employer or buyer account</p>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SitemapPage.tsx
            <ul className="space-y-2">
              {completeSitemap;
                .filter(route =>'
                  route.requiredRoles?.includes('employer') |'
                  route.requiredRoles?.includes('buyer')
                )
                .map(route => (
                  <li key={route.path}>
                    <Link;
                      href = {resolvePath(route.path),}"
                      className="flex items-center hover:text-zion-purple"
                    >"
                      <ChevronRight className="h-4 w-4 mr-2" />
<<<<<<< HEAD:src/components/SitemapPage.tsx
<<<<<<< HEAD
          <div className="bg - zion - blue - dark p - 6 rounded-lg">;
            <h2 className="text - xl font - bold mb - 4 text - zion-cyan">Client Pages</h2>;
            <p className="text - sm text - zion - slate mb-4">Requires employer or buyer account</p>;
            <ul className="space-y-2">;
=======
=======
            </ul>;
          </div>;
<<<<<<< HEAD:src_backup/components/SitemapPage.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SitemapPage.tsx

          {/* Client Routes */}
          <div className="bg - zion - blue - dark p - 6 rounded - lg">;
            <h2 className="text - xl font - bold mb - 4 text - zion - cyan">Client Pages</h2>;
            <p className="text - sm text - zion - slate mb - 4">Requires employer or buyer account</p>;
=======
          {/* Client Routes */}"
          <div className="bg - zion - blue - dark p - 6 rounded - lg">;"
            <h2 className="text - xl font - bold mb - 4 text - zion - cyan">Client Pages</h2>;"
            <p className="text - sm text - zion - slate mb - 4">Requires employer or buyer account</p>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SitemapPage.tsx
            <ul className="space - y-2">;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              {complete_sitemap;
                .filter (route =>;'
                  route.required_roles?.includes ('employer') ||;'
                  route.required_roles?.includes ('buyer'));
                .map (route => (
                  <li key={route.path}>;
                    <Link;
<<<<<<< HEAD:src_backup/components/SitemapPage.tsx
                      href = {resolve_path (route.path), }
                      className="flex items - center hover:text - zion-purple";
                    >;
                      <ChevronRight className="h - 4 w - 4 mr-2" />;
=======
                      href = {resolve_path (route.path), }"
                      className="flex items - center hover:text - zion - purple";
                    >;"
                      <ChevronRight className="h - 4 w - 4 mr - 2" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SitemapPage.tsx
                      {route.label}
                    </Link>;
                  </li>));
              }

<<<<<<< HEAD:src/components/SitemapPage.tsx
<<<<<<< HEAD
            </ul>;
          </div>;

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

            </ul>;
          </div>;


<<<<<<< HEAD:src_backup/components/SitemapPage.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SitemapPage.tsx
          {/* Shared Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Authenticated User Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires any account type</p>
=======
          {/* Shared Routes */}"
          <div className="bg-zion-blue-dark p-6 rounded-lg">"
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Authenticated User Pages</h2>"
            <p className="text-sm text-zion-slate mb-4">Requires any account type</p>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SitemapPage.tsx
            <ul className="space-y-2">
              {completeSitemap;
                .filter(route =>
                  route.requiredAuth &&
                  (!route.requiredRoles |route.requiredRoles.length === 0)
                )
                .map(route => (
                  <li key={route.path}>
                    <Link;
                      href = {resolvePath(route.path),}"
                      className="flex items-center hover:text-zion-purple"
                    >"
                      <ChevronRight className="h-4 w-4 mr-2" />
<<<<<<< HEAD:src/components/SitemapPage.tsx
<<<<<<< HEAD
          <div className="bg - zion - blue - dark p - 6 rounded-lg">;
            <h2 className="text - xl font - bold mb - 4 text - zion-cyan">Authenticated User Pages</h2>;
            <p className="text - sm text - zion - slate mb-4">Requires any account type</p>;
            <ul className="space-y-2">;
=======
=======
            </ul>;
          </div>;
<<<<<<< HEAD:src_backup/components/SitemapPage.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SitemapPage.tsx

          {/* Shared Routes */}
          <div className="bg - zion - blue - dark p - 6 rounded - lg">;
            <h2 className="text - xl font - bold mb - 4 text - zion - cyan">Authenticated User Pages</h2>;
            <p className="text - sm text - zion - slate mb - 4">Requires any account type</p>;
=======
          {/* Shared Routes */}"
          <div className="bg - zion - blue - dark p - 6 rounded - lg">;"
            <h2 className="text - xl font - bold mb - 4 text - zion - cyan">Authenticated User Pages</h2>;"
            <p className="text - sm text - zion - slate mb - 4">Requires any account type</p>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SitemapPage.tsx
            <ul className="space - y-2">;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              {complete_sitemap;
                .filter (route =>;
                  route.required_auth &&;
                  (!route.required_roles || route.required_roles.length === 0));
                .map (route => (
                  <li key={route.path}>;
                    <Link;
<<<<<<< HEAD:src_backup/components/SitemapPage.tsx
                      href = {resolve_path (route.path), }
                      className="flex items - center hover:text - zion-purple";
                    >;
                      <ChevronRight className="h - 4 w - 4 mr-2" />;
=======
                      href = {resolve_path (route.path), }"
                      className="flex items - center hover:text - zion - purple";
                    >;"
                      <ChevronRight className="h - 4 w - 4 mr - 2" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SitemapPage.tsx
                      {route.label}
<<<<<<< HEAD:src/components/SitemapPage.tsx
<<<<<<< HEAD
                    </Link>
                  </li>
                ))
              }          {/* Admin Routes */}
=======

=======
                    </Link>;
                  </li>));
              }


            </ul>;
          </div>;


<<<<<<< HEAD:src_backup/components/SitemapPage.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SitemapPage.tsx
          {/* Admin Routes */}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Admin Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires admin account</p>
=======
          {/* Admin Routes */}"
          <div className="bg-zion-blue-dark p-6 rounded-lg">"
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Admin Pages</h2>"
            <p className="text-sm text-zion-slate mb-4">Requires admin account</p>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SitemapPage.tsx
            <ul className="space-y-2">
              {completeSitemap;
                .filter(route =>'
                  route.requiredRoles?.includes('admin')
                )
                .map(route => (
                  <li key={route.path}>
                    <Link;
                      href = {resolvePath(route.path),}"
                      className="flex items-center hover:text-zion-purple"
                    >"
                      <ChevronRight className="h-4 w-4 mr-2" />
<<<<<<< HEAD:src/components/SitemapPage.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SitemapPage.tsx
            </ul>;
          </div>;
          {/* Admin Routes */}"
          <div className="bg - zion - blue - dark p - 6 rounded - lg">;"
            <h2 className="text - xl font - bold mb - 4 text - zion - cyan">Admin Pages</h2>;"
            <p className="text - sm text - zion - slate mb - 4">Requires admin account</p>;"
            <ul className="space - y-2">;
              {complete_sitemap;
                .filter (route =>;'
                  route.required_roles?.includes ('admin'));
                .map (route => (
                  <li key={route.path}>;
                    <Link;
                      href = {resolve_path (route.path), }"
                      className="flex items - center hover:text - zion - purple";
                    >;"
                      <ChevronRight className="h - 4 w - 4 mr - 2" />;
                      {route.label}

                      href = {resolvePath(route && route.path),}"
                      className="flex items-center hover:text-zion-purple">;"
                      <ChevronRight className="h-4 w-4 mr-2" />;
                      {route && route.label}


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    </Link>;
                  </li>;
                ));
              }
            </ul>;
          </div>;
<<<<<<< HEAD
          {/* Client Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Client Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires employer or buyer account</p>
            <ul className="space-y-2">
              {completeSitemap
                .filter(route => 
                  route.requiredRoles?.includes('employer') || 
                  route.requiredRoles?.includes('buyer')
                )
                .map(route => (
                  <li key={route.path}>
                    <Link
                      href={resolvePath(route.path)}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>;
                  </li>;
                ));
              }
            </ul>;
          </div>;
          {/* Shared Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Authenticated User Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires any account type</p>
            <ul className="space-y-2">
              {completeSitemap
                .filter(route => 
                  route.requiredAuth && 
                  (!route.requiredRoles || route.requiredRoles.length === 0)
                )
                .map(route => (
                  <li key={route.path}>
                    <Link
                      href={resolvePath(route.path)}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>;
                  </li>;
                ));
              }
            </ul>;
          </div>;
          {/* Admin Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Admin Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires admin account</p>
            <ul className="space-y-2">
              {completeSitemap
                .filter(route => 
                  route.requiredRoles?.includes('admin')
                )
                .map(route => (
                  <li key={route.path}>
                    <Link
                      href={resolvePath(route.path)}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>;
                  </li>;
                ));
              }
            </ul>;
          </div>;
=======


            </ul>;
          </div>;
          {/* Dynamic Routes */}"
          <div className="bg - zion - blue - dark p - 6 rounded - lg">;"
            <h2 className="text - xl font - bold mb - 4 text - zion - cyan">Dynamic Pages</h2>;"
            <p className="text - sm text - zion - slate mb - 4">Pages with dynamic parameters</p>;"
            <ul className="space - y-2">;
              {Object.entries (dynamic_paths).map (([key, path], ) => (
                <li key={key}>;"
                  <div className="flex items - center text - zion - slate">;"
                    <ChevronRight className="h - 4 w - 4 mr - 2" />;"
                    {path} <span className="ml - 2 text - xs italic">({key})</span>;
                  </div>;
                </li>))}
            </ul>;
          </div>;
        </div>;
      </div>;
    </>);
<<<<<<< HEAD:src_backup/components/SitemapPage.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
    {
      title: 'Services'
      links: [{ name: 'AI Services', url: '/services / ai' }
        { name: 'IT Services', url: '/services / it' }
        { name: 'Cloud Solutions', url: '/services / cloud' }
        { name: 'Cybersecurity', url: '/services / cybersecurity' }
        { name: 'Digital Transformation', url: '/services / digital - transformation' }
      ]
}
=======

<<<<<<< HEAD:src/components/SitemapPage.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SitemapPage.tsx
    {
      title: 'Solutions'
      links: [{ name: 'Enterprise', url: '/solutions / enterprise' }
        { name: 'Healthcare', url: '/solutions / healthcare' }
        { name: 'Financial Services', url: '/solutions / financial' }
        { name: 'Manufacturing', url: '/solutions / manufacturing' }
      ]
}    {
      title: 'Resources'
      links: [{ name: 'Case Studies', url: '/case - studies' }
        { name: 'White Papers', url: '/white - papers' },        { name: 'Webinars', url: '/webinars' }
        { name: 'Documentation', url: '/docs' }
        { name: 'API Reference', url: '/api' }
      ]}

<<<<<<< HEAD
        { name: 'Case Studies', url: '/case - studies' }, ';
        { name: 'White Papers', url: '/white - papers' }, ';
        { name: 'Webinars', url: '/webinars' }, ';
        { name: 'Documentation', url: '/docs' }, '        { name: 'API Reference', url: '/api' },

      ]}
  ];
  return (<div className="min - h - screen bg - slate - 900 text - white py-16">;
      <SEO;
        title="Sitemap - Zion Tech Group";
        description="Complete sitemap of Zion Tech Group website with all pages and services organized by category.";
      />;
      <div className="container mx - auto px - 4 max - w-6xl">;
        <div className="text - center mb-16">;
          <h1 className="text - 5xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text-transparent">            Sitemap;
          </h1>";
          <p className="text - xl text - zinc - 300 max - w-3xl mx-auto">;
            Navigate through our comprehensive website structure to find the information and services you need.</p>;
        </div>;
";
        <div className="grid grid - cols - 1 md: anygrid - cols - 2 lg:grid - cols - 4 gap-8">;
          {sitemap_data.map ((section, section_index)  => (";
            <div key={section_index} className="bg - slate - 800 / 50 rounded - lg p - 6 border border - slate-700">";
              <h2 className="text - xl font - semibold mb - 4 text - cyan-400">;
                {section.title}
              </h2>;
              <ul className="space - y-2">;
                {section.links.map ((link, link_index) => (<li key={link_index}>;
                    <a;
                      href={link.url}
                      className="text - zinc - 300 hover:text - cyan - 400 transition - colors duration - 200 block py-1">;
=======
}'"
'"},
  const sitemap_data = [{'
      title: 'Main Pages',
      links: [;'
        { name: 'Home', url: '/' },'
        { name: 'About', url: '/about' },'
        { name: 'Services', url: '/services' },'
        { name: 'Contact', url: '/contact' },'
        { name: 'Blog', url: '/blog' },'
        { name: 'Careers', url: '/careers' },
      ];
},
    {'
      title: 'Services','
      links: [{ name: 'AI Services', url: '/services / ai' },'
        { name: 'IT Services', url: '/services / it' },'
        { name: 'Cloud Solutions', url: '/services / cloud' },'
        { name: 'Cybersecurity', url: '/services / cybersecurity' },'
        { name: 'Digital Transformation', url: '/services / digital - transformation' },
      ];
},
    {'
      title: 'Solutions','
      links: [{ name: 'Enterprise', url: '/solutions / enterprise' },'
        { name: 'Healthcare', url: '/solutions / healthcare' },'
        { name: 'Financial Services', url: '/solutions / financial' },'
        { name: 'Manufacturing', url: '/solutions / manufacturing' },
      ];
},

    {'
      title: 'Resources''
      links: [{ name: 'Case Studies', url: '/case - studies' }'
        { name: 'White Papers', url: '/white - papers' },        { name: 'Webinars', url: '/webinars' }'
        { name: 'Documentation', url: '/docs' }'
        { name: 'API Reference', url: '/api' }
      ]}
'
        { name: 'Case Studies', url: '/case - studies' }, ';'
        { name: 'White Papers', url: '/white - papers' }, ';'
        { name: 'Webinars', url: '/webinars' }, ';'
        { name: 'Documentation', url: '/docs' }, '        { name: 'API Reference', url: '/api' },

      ]}
  ];"
  return (<div className="min - h - screen bg - slate - 900 text - white py - 16">;
      <SEO;"
        title="Sitemap - Zion Tech Group";"
        description="Complete sitemap of Zion Tech Group website with all pages and services organized by category.";
      />;"
      <div className="container mx - auto px - 4 max - w - 6xl">;"
        <div className="text - center mb - 16">;"
          <h1 className="text - 5xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">            Sitemap;"
          </h1>";"
          <p className="text - xl text - zinc - 300 max - w-3xl mx - auto">;
            Navigate through our comprehensive website structure to find the information and services you need.</p>;
        </div>;"
";"
        <div className="grid grid - cols - 1 md: anygrid - cols - 2 lg:grid - cols - 4 gap - 8">;"
          {sitemap_data.map ((section, section_index)  => (";"
            <div key={section_index} className="bg - slate - 800 / 50 rounded - lg p - 6 border border - slate - 700">";"
              <h2 className="text - xl font - semibold mb - 4 text - cyan - 400">;
                {section.title}
              </h2>;"
              <ul className="space - y - 2">;
                {section.links.map ((link, link_index) => (<li key={link_index}>;
                    <a;
                      href={link.url}"
                      className="text - zinc - 300 hover:text - cyan - 400 transition - colors duration - 200 block py - 1">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SitemapPage.tsx
                      {link.name}

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/SitemapPage.tsx
<<<<<<< HEAD:src/components/SitemapPage.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SitemapPage.tsx
          {/* Dynamic Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Dynamic Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Pages with dynamic parameters</p>
=======
          {/* Dynamic Routes */}"
          <div className="bg-zion-blue-dark p-6 rounded-lg">"
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Dynamic Pages</h2>"
            <p className="text-sm text-zion-slate mb-4">Pages with dynamic parameters</p>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SitemapPage.tsx
            <ul className="space-y-2">
<<<<<<< HEAD:src/components/SitemapPage.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              {Object.entries(dynamicPaths).map(([key, path]) => (
=======

              {Object.entries(dynamicPaths).map(([key, path]) => (

<<<<<<< HEAD:src_backup/components/SitemapPage.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

              {Object.entries(dynamicPaths).map(([key, path]) => (


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SitemapPage.tsx
                <li key={key}>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  <div className="flex items-center text-zion-slate">
                    <ChevronRight className="h-4 w-4 mr-2" />
=======
                <li key={key}>"
                  <div className="flex items-center text-zion-slate">"
                    <ChevronRight className="h-4 w-4 mr-2" />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SitemapPage.tsx
                    {path} <span className="ml-2 text-xs italic">({key})</span>
                  </div>
                </li>
              ))}

<<<<<<< HEAD:src/components/SitemapPage.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SitemapPage.tsx
            </ul>;
          </div>;
        </div>;
      </div>;
    </>;
<<<<<<< HEAD
  );
<<<<<<< HEAD
};
=======
=======
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};

                    </a>;

                  </li>) ) }
              </ul>;
            </div>) ) }
<<<<<<< HEAD:src_backup/components/SitemapPage.tsx
        </div>;
";
        <div className="mt - 16 text-center">";
          <p className="text - zinc-400">;
            Can't find what you're looking for?{' '}";
            <a href="/contact" className="text - cyan - 400 hover:text - cyan - 300 transition-colors">;
              Contact us;
=======
        </div>;"
";"
        <div className="mt - 16 text - center">";"
          <p className="text - zinc - 400">;'"
            Can't find what you're looking for?{' '}";"
            <a href="/contact" className="text - cyan - 400 hover:text - cyan - 300 transition - colors">;
              Contact us;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SitemapPage.tsx
            </a>{' '}

            for assistance.;
          </p>;
        </div>;
      </div>;
    </div>) }'"
'";

<<<<<<< HEAD:src_backup/components/SitemapPage.tsx
<<<<<<< HEAD:src/components/SitemapPage.tsx
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SitemapPage.tsx
import React from 'react';
import { completeSitemap, dynamicPaths } from '@/config/sitemap';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { SEO } from './SEO';

import React from 'react';
import { completeSitemap, dynamicPaths  } from '@/config/sitemap';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react'
import { SEO  } from './SEO';
// Map sitemap paths to their actual routes in the application
// Note: This pathMap might need to be updated based on Next.js page structure
const pathMap: Record<string, string> = {
<<<<<<< HEAD:src/components/SitemapPage.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SitemapPage.tsx
=======
}'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SitemapPage.tsx
