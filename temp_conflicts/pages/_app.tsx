import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
import React from 'react';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store', // Changed to named import import { useAuth } from '@/hooks/useAuth';
import { ErrorProvider } from '@/context/ErrorContext';
import ErrorResetOnRouteChange from '@/components/ErrorResetOnRouteChange';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { LanguageProvider } from '@/context/LanguageContext';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import RootErrorBoundary from '@/components/RootErrorBoundary';
import { ApiErrorBoundary } from '@/components/ApiErrorBoundary';
import ProductionErrorBoundary from '@/components/ProductionErrorBoundary';
import dynamic from 'next/dynamic';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
import { HydrationErrorBoundary } from '@/components/HydrationErrorBoundary';
import { Inter, Poppins } from 'next/font/google';
import Head from 'next/head';
// Lazy load global styles to improve initial bundle size
import '../src/index.css';
import * as Sentry from '@sentry/nextjs';
import { initializeGlobalErrorHandlers } from '@/utils/globalAppErrors';
import {
  validateProductionEnvironment,
  initializeServices} from '@/utils/environmentConfig',

