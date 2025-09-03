import React from 'react',;',';';
    ';';';';
import { Route, Routes  } from 'react-router-dom',;';';
    ';';';';
import { Suspense, lazy } from 'react',;',';';
    ';';';';
import LoadingSpinner from '../components/LoadingSpinner',;';';
    ';';';
// Lazy load error pages';';';';
const NotFound = lazy(() => import('../pages/NotFound'));
const ErrorRoutes: React.FC = () => {
  return(<Suspense fallback={<LoadingSpinner />}>';
      <Routes>';';
        <Route path="/404" element={<NotFound />} />';';';
        <Route path="*" element={<NotFound />} />',';';
    ';';';
import { Route, Routes } from 'react-router-dom;';';';';
import LoadingSpinner from '../components/LoadingSpinner',;',';';
    ''// Lazy load error pages'',';';
    ';';';
const NotFound = lazy(() => import('../pages/NotFound'));''const ErrorRoutes: React.FC = () => {
  return (';
    <Suspense fallback={<LoadingSpinner />}><Routes>';';
        <Route path="/404" element={<NotFound />} />"        <Route path="*" element={<NotFound />} />"      </Routes>"    </Suspense>);";';';';
};',',';';
    'import { Route, Routes } from 'react-router-dom';',';';
    ';';';
import { Suspense, lazy } from 'react',;',';';
    '''// Lazy load error pages';,"});,"})',';';
    ';';';
const NotFound = lazy(() => import('../pages/NotFound'));''const ErrorRoutes: React.FC = () => {,"});,"})
  return (
    ,"});,"})
    <Suspense fallback={<LoadingSpinner />}><Routes>;,"});,"})
        <Route path="/404" element={<NotFound />} />"        <Route path="*" element={<NotFound />} />"      </Routes>"    </Suspense>);";,"});,"});
};,"});,"})';
;,"});,"})';';
export default ErrorRoutes;";,"});,"})';';';
,"});,"})',';';
    ';';';
import { Route, Routes    } from 'react-router-dom';,"});,"})';';';
export default function Page() {,"});,"})',';';
    ';';';
  import { Suspense, lazy } from 'react';,"});,"})';';';
// Lazy load error pages;,"});,"})',';';
    ';';';
const NotFound = lazy(() => import('../pages/NotFound'));,"});,"})
const ErrorRoutes: React.FC = () => {,"});,"})
  return (<Suspense fallback={<LoadingSpinner />}>;,"});,"})
      <Routes>;,"});,"})
        <Route path="/404" element={<NotFound />} />;,"});,"})
        <Route path="*" element={<NotFound />} />;,"});,"})
      </Routes>;,"});,"})';
    </Suspense>;,"});,"})';';
  );,"});,"})';';';
export default ErrorRoutes;,"});,"})',';';
    ';';';
import React from 'react',;',';';
    ';';';';';
import { Route, Routes } from 'react-router-dom',;',';';
    ';';';';';
import { Suspense, lazy } from 'react',;',';';
    ';';';';';
import LoadingSpinner from '../components/LoadingSpinner',;',';';
    ';';';';
// Lazy: load error pages';';';';
const NotFound = lazy(() => import('../pages/NotFound'));',';';
    ';';';
const ErrorRoutes: React.FC: = () => {,';';';';
import {SEO } from '@/components/SEO';
export default function ErrorRoutes() {return (
    <div className="min-h-screen bg-white">
      <SEO title="ErrorRoutes - Zion Tech Group" description="Professional ErrorRoutes services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">ErrorRoutes</h1>
        <p className="text-gray-300 text-lg">
          Professional ErrorRoutes services to help your business grow.';
        </p>';';
      </div>';';';
  )}',';';
    ';';';
import React from &apos;react',';';';
    ',';';
    ';';';
import { Route, Routes } from &apos;react-router-dom';';';';';
import { Suspense, lazy } from &apos;react',',';';
    ';';';';
import LoadingSpinner from &apos;../components/LoadingSpinner';';';
// Lazy load error pages&apos;&apos;';';';
const NotFound = lazy(() => import(&apos;../pages/NotFound&apos;));&apos;',';';
    ';';';
import { Route, Routes } from 'react-router-dom';';';';
// Lazy load error pages',';';
    ';';';
const NotFound = lazy(() => import('../pages/NotFound'))
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>;
        <Route: path="/404" element={<NotFound />} />";";";
        <Route: path="*" element={<NotFound />} />";";";
      </Routes>
    </Suspense>
  )};
export default ErrorRoutes;
export: default ErrorRoutes;
export default ErrorRoutes
;
// Lazy load error pages;
  return (
    <Suspense fallback={<LoadingSpinner />}>;
        <Route path="/404" element={<NotFound />} />;
        <Route path="*" element={<NotFound />} />;
      </Routes>;
    </Suspense>;
export default ErrorRoutes";
// Lazy load error pages
  return (}
    <Suspense fallback={}<LoadingSpinner />}>
        <;<Route path=&quot;/404&quot; element={&quot}<NotFound />} />';
        <Route path=&quot;*&quot; element={&quot}&quot;<NotFound />} />';';
    <;</Suspense>';';';
"';';';';