import type {_AppProps} from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';

export default function App(_{_Component, _pageProps}: AppProps) {_return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
import React from 'react';
import type {_AppProps} from 'next/app';
import ErrorResetOnRouteChange from '@/components/ErrorResetOnRouteChange';
import i18n from '@/i18n';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary';
import RootErrorBoundary from '@/components/RootErrorBoundary';
import ProductionErrorBoundary from '@/components/ProductionErrorBoundary';
import dynamic from 'next/dynamic';
import Head from 'next/head';
// Lazy load global styles to improve initial bundle size
import '../src/index.css';
import * as Sentry from '@sentry/nextjs';
import {_validateProductionEnvironment, _initializeServices} from '@/utils/environmentConfig';

// ============================================================// DYNAMIC IMPORTS - Load heavy providers only when needed
// =====================================================// Load non-critical providers dynamically to reduce initial bundle
const _WhitelabelProvider = dynamic__(() => 
  import('@/context/WhitelabelContext').then(mod => ({_default: mod.WhitelabelProvider})), {_ssr: true, _loading: () => null});

const _WalletProvider = dynamic__(() => 
  import('@/context/WalletContext').then(mod => ({_default: mod.WalletProvider})), {_ssr: false, _// Wallet is client-side only
  loading: () => null});

const _AnalyticsProvider = dynamic__(() => 
  import('@/context/AnalyticsContext').then(mod => ({_default: mod.AnalyticsProvider})), {_ssr: false, _// Analytics is client-side only
  loading: () => null});

const _CartProvider = dynamic__(() => 
  import('@/context/CartContext').then(mod => ({_default: mod.CartProvider})), {_ssr: true, _loading: () => null});

const _FeedbackProvider = dynamic__(() => 
  import('@/context/FeedbackContext').then(mod => ({_default: mod.FeedbackProvider})), {_ssr: false, _// Feedback is client-side only
  loading: () => null});

const _ThemeProvider = dynamic__(() => 
  import('@/components/ThemeProvider').then(mod => ({_default: mod.ThemeProvider})), {_ssr: true, _loading: () => null});

const _AppLayout = dynamic__(() => 
  import('@/layout/AppLayout').then(mod => ({_default: mod.AppLayout})), {_ssr: true, _loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse text-lg">Loading layout...</div>
    </div>
  )});

// Load utility components dynamically
const _ToastContainer = dynamic__(() => 
  import('@/components/ToastContainer').then(mod => ({_default: mod.ToastContainer})), {_ssr: false, _loading: () => null});

const _OfflineIndicator = dynamic__(() => 
  import('@/components/OfflineIndicator').then(mod => ({_default: mod.OfflineIndicator})), {_ssr: false, _loading: () => null});

const _RouteChangeHandler = dynamic__(() => 
  import('@/components/RouteChangeHandler').then(mod => ({_default: mod.RouteChangeHandler})), {_ssr: false, _loading: () => null});

const _RouteSEO = dynamic__(() => 
  import('@/components/RouteSEO'), {_ssr: true, _loading: () => null});

// ============================================================// FONT CONFIGURATION - Optimized loading
// =====================================================const inter = Inter({_subsets: ['latin'], _weight: ['400', _'600', _'700'], _display: 'swap', _fallback: ['system-ui', _'arial'], _adjustFontFallback: true, _variable: '--font-inter', _preload: true});

const _poppins = Poppins({_weight: ['400', _'600', _'700'], _subsets: ['latin'], _display: 'swap', _fallback: ['system-ui', _'arial'], _adjustFontFallback: true, _variable: '--font-poppins', _preload: true});

// ============================================================// LIGHTWEIGHT LANGUAGE WRAPPER
// =====================================================const LanguageProviderWrapper: React.FC<{_children: React.ReactNode}> = (_{_children}) => {_const { user, _isAuthenticated} = useAuth();
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect__(() => {_setIsClient(true);}, []);

  const _safeAuthState = React.useMemo(_() => ({_isAuthenticated: isClient ? !!isAuthenticated : false, _user: isClient ? user : null}),
    [isClient, isAuthenticated, user],
  );

  return (
    <LanguageProvider authState={_safeAuthState}>{_children}</LanguageProvider>
  );
};

// ============================================================// MAIN APP COMPONENT - FIXED: Optimized with fallback safety
// =====================================================function MyApp(_{_Component, _pageProps}: AppProps) {_const _router = useRouter();
  const [queryClient] = React.useState__(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, _gcTime: 10 * 60 * 1000, _retry: false}}}));
  const [isInitialized, setIsInitialized] = React.useState(false);
  const [initError, setInitError] = React.useState<string | null>(null);

  // CRITICAL FIX: Force initialization after timeout to prevent infinite loading
  React.useEffect__(() => {_const _forceInitTimeout = setTimeout__(() => {
      if (!isInitialized) {
        
        setIsInitialized(true);}
    }, 3000); // Force init after 3 seconds max

    return () => clearTimeout(forceInitTimeout);
  }, [isInitialized]);

  // Simplified initialization with better error handling
  React.useEffect__(() => {_let _isMounted = true;

    const _initializeApp = async () => {
      try {
        if (process.env.NODE_ENV === 'development') {}

        // Critical path only
        try {_initializeGlobalErrorHandlers();} catch (error) {}

        try {_validateProductionEnvironment();} catch (error) {}

        // Mark as initialized immediately for faster render
        if (isMounted) {_setTimeout__(() => {
            setIsInitialized(true);}, 100); // Small delay to ensure DOM is ready
        }

        // Defer non-critical initializations
        setTimeout__(() => {_if (!isMounted) return;

          try {
            initializeServices().catch(_(err) =>, _);} catch (error) {}

          // Lazy load performance monitoring
          if (typeof window !== 'undefined' && process.env.PERFORMANCE_MONITORING === 'true') {_import('@/utils/performance').then(perf => {
              perf.initializePerformanceOptimizations();
              perf.initializePerformance();}).catch(err => );
          }

          // Lazy load development tools
          if (process.env.NODE_ENV === 'development') {_import('@/utils/consoleLogCapture').then(console => {
              console.initConsoleLogCapture();}).catch(err => );
          }
        }, 200);

      } catch (error) {_setInitError('Initialization failed');

        // Always initialize even on error to prevent infinite loading
        if (isMounted) {
          setTimeout__(() => {
            setIsInitialized(true);}, 500);
        }

        // Deferred error reporting
        setTimeout__(() => {_try {
            if (process.env.NEXT_PUBLIC_SENTRY_DSN && !process.env.NEXT_PUBLIC_SENTRY_DSN.includes('dummy')) {
              Sentry.captureException(error);}
          } catch (sentryError) {}
        }, 0);
      }
    };

    initializeApp();

    return () => {_isMounted = false;};
  }, []);

  // Lazy Sentry context updates with error handling
  React.useEffect__(() => {_try {
      if (process.env.NEXT_PUBLIC_SENTRY_DSN && !process.env.NEXT_PUBLIC_SENTRY_DSN.includes('dummy')) {
        Sentry.setTag('route', _router.pathname);
        Sentry.setContext('query', _router.query);}
    } catch (error) {}
  }, [router.pathname, router.query]);

  // Lazy service worker registration with error handling
  React.useEffect__(() => {_if (process.env.NODE_ENV === 'production') {
      setTimeout__(() => {
        import('@/serviceWorkerRegistration').then(sw => {
          sw.registerServiceWorker();}).catch(err => );
      }, 2000);
    }
  }, []);

  // FIXED: Enhanced loading screen with error display
  if (!isInitialized) {_return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-cyan-400 border-t-transparent mx-auto mb-4"></div>
          <p className="text-white text-lg font-medium">Initializing Zion App...</p>
          <p className="text-blue-200 text-sm mt-2">
            {initError ? `Error: ${initError}` : 'Optimizing performance...'}
          </p>
          <p className="text-blue-300 text-xs mt-2">This should complete in a few seconds</p>
        </div>
      </div>
    );
  }

  // FIXED: Simplified provider chain to reduce loading complexity
  return (
    <>
      <Head>
        <style jsx global>{_`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-poppins: ${_poppins.style.fontFamily};
          }

          @font-face {_font-family: 'Inter Fallback';
            src: local('Arial'), _local('system-ui');
            size-adjust: 107%;
            ascent-override: 90%;
            descent-override: 25%;
            line-gap-override: 0%;}

          @font-face {_font-family: 'Poppins Fallback';
            src: local('Arial'), _local('system-ui');
            size-adjust: 102%;
            ascent-override: 92%;
            descent-override: 24%;
            line-gap-override: 0%;}

          .font-inter {_font-family: var(--font-inter), _'Inter Fallback', _system-ui, _sans-serif;}
          .font-poppins {_font-family: var(--font-poppins), _'Poppins Fallback', _system-ui, _sans-serif;}
        `}</style>
      </Head>
      <div className={_`${inter.variable} ${_poppins.variable}`}>
        <ProductionErrorBoundary>
          <RootErrorBoundary>
            <HydrationErrorBoundary>
              <React.Suspense
                fallback={_<div className="flex items-center justify-center min-h-screen">
                    <div className="animate-pulse text-lg">Loading app...</div>
                  </div>}
              >
                <GlobalErrorBoundary>
                  <QueryClientProvider client={_queryClient}>
                    <ApiErrorBoundary>
                      <ReduxProvider store={_store}>
                        <I18nextProvider i18n={_i18n}>
                          <ErrorProvider>
                            <AuthProvider>
                              <ErrorBoundary fallback={_<div className="flex items-center justify-center min-h-screen">
                                  <div className="text-center">
                                    <h2 className="text-xl mb-4">Loading providers...</h2>
                                    <p>If this takes too long, _there may be a provider issue.</p>
                                  </div>
                                </div>}>
                                <WhitelabelProvider>
                                  <LanguageProviderWrapper>
                                    <WalletProvider>
                                      <CartProvider>
                                        <AnalyticsProvider>
                                          <FeedbackProvider>
                                            <ThemeProvider>
                                              <AppLayout>
                                                <RouteSEO />
                                                <RouteChangeHandler
                                                  resetScrollOnChange={_true}
                                                  forceRerender={_false}
                                                />
                                                <ErrorBoundary>
                                                  <Component
                                                    key={_router.asPath}
                                                    {_...pageProps}
                                                  />
                                                </ErrorBoundary>
                                                <ErrorResetOnRouteChange />
                                                <ToastContainer />
                                                <OfflineIndicator />
                                              </AppLayout>
                                            </ThemeProvider>
                                          </FeedbackProvider>
                                        </AnalyticsProvider>
                                      </CartProvider>
                                    </WalletProvider>
                                  </LanguageProviderWrapper>
                                </WhitelabelProvider>
                              </ErrorBoundary>
                            </AuthProvider>
                          </ErrorProvider>
                        </I18nextProvider>
                      </ReduxProvider>
                    </ApiErrorBoundary>
                  </QueryClientProvider>
                </GlobalErrorBoundary>
              </React.Suspense>
            </HydrationErrorBoundary>
          </RootErrorBoundary>
        </ProductionErrorBoundary>
      </div>
    </>
  );
}

if (process.env.NODE_ENV === 'development') {}

export default MyApp;
