<<<<<<< HEAD
import type { AppProps } from 'next/app',
import Layout from '../components/Layout',
import '../styles/globals.css',
=======
<<<<<<< HEAD
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';
>>>>>>> origin/auto/autonomy-17186719616

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
<<<<<<< HEAD
  ),
}
import React from 'react',
import { useRouter } from 'next/router',
import { QueryClient, QueryClientProvider } from '@tanstack/react-query',
import type { AppProps } from 'next/app',
import { AuthProvider } from '@/context/auth/AuthProvider',
import { Provider as ReduxProvider } from 'react-redux',
import { store } from '@/store', // Changed to named import
import { useAuth } from '@/hooks/useAuth',
import { ErrorProvider } from '@/context/ErrorContext',
import ErrorResetOnRouteChange from '@/components/ErrorResetOnRouteChange',
import { I18nextProvider } from 'react-i18next',
import i18n from '@/i18n',
import { LanguageProvider } from '@/context/LanguageContext',
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary',
import { ErrorBoundary } from '@/components/ErrorBoundary',
import RootErrorBoundary from '@/components/RootErrorBoundary',
import { ApiErrorBoundary } from '@/components/ApiErrorBoundary',
import ProductionErrorBoundary from '@/components/ProductionErrorBoundary',
import dynamic from 'next/dynamic',
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger',
import { HydrationErrorBoundary } from '@/components/HydrationErrorBoundary',
import { Inter, Poppins } from 'next/font/google',
import Head from 'next/head',
// Lazy load global styles to improve initial bundle size
import '../src/index.css',
import * as Sentry from '@sentry/nextjs',
import { initializeGlobalErrorHandlers } from '@/utils/globalAppErrors',
import {
  validateProductionEnvironment,
  initializeServices} from '@/utils/environmentConfig',

// ============================================================// DYNAMIC IMPORTS - Load heavy providers only when needed
// =====================================================// Load non-critical providers dynamically to reduce initial bundle
=======
  );
}
=======
import React from 'react';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store'; // Changed to named import
import { useAuth } from '@/hooks/useAuth';
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
  initializeServices,
} from '@/utils/environmentConfig';

// ===================================================================
// DYNAMIC IMPORTS - Load heavy providers only when needed
// ===================================================================

// Load non-critical providers dynamically to reduce initial bundle
>>>>>>> origin/auto/autonomy-17186719616
const WhitelabelProvider = dynamic(() => 
  import('@/context/WhitelabelContext').then(mod => ({ default: mod.WhitelabelProvider })), {
  ssr: true,
  loading: () => null
<<<<<<< HEAD
}),
=======
});
>>>>>>> origin/auto/autonomy-17186719616

const WalletProvider = dynamic(() => 
  import('@/context/WalletContext').then(mod => ({ default: mod.WalletProvider })), {
  ssr: false, // Wallet is client-side only
  loading: () => null
<<<<<<< HEAD
}),
=======
});
>>>>>>> origin/auto/autonomy-17186719616

const AnalyticsProvider = dynamic(() => 
  import('@/context/AnalyticsContext').then(mod => ({ default: mod.AnalyticsProvider })), {
  ssr: false, // Analytics is client-side only
  loading: () => null
<<<<<<< HEAD
}),
=======
});
>>>>>>> origin/auto/autonomy-17186719616

const CartProvider = dynamic(() => 
  import('@/context/CartContext').then(mod => ({ default: mod.CartProvider })), {
  ssr: true,
  loading: () => null
<<<<<<< HEAD
}),
=======
});
>>>>>>> origin/auto/autonomy-17186719616

const FeedbackProvider = dynamic(() => 
  import('@/context/FeedbackContext').then(mod => ({ default: mod.FeedbackProvider })), {
  ssr: false, // Feedback is client-side only
  loading: () => null
<<<<<<< HEAD
}),
=======
});
>>>>>>> origin/auto/autonomy-17186719616

const ThemeProvider = dynamic(() => 
  import('@/components/ThemeProvider').then(mod => ({ default: mod.ThemeProvider })), {
  ssr: true,
  loading: () => null
<<<<<<< HEAD
}),
=======
});
>>>>>>> origin/auto/autonomy-17186719616

const AppLayout = dynamic(() => 
  import('@/layout/AppLayout').then(mod => ({ default: mod.AppLayout })), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse text-lg">Loading layout...</div>
    </div>
  )
<<<<<<< HEAD
}),
=======
});
>>>>>>> origin/auto/autonomy-17186719616

// Load utility components dynamically
const ToastContainer = dynamic(() => 
  import('@/components/ToastContainer').then(mod => ({ default: mod.ToastContainer })), {
  ssr: false,
  loading: () => null
<<<<<<< HEAD
}),
=======
});
>>>>>>> origin/auto/autonomy-17186719616

const OfflineIndicator = dynamic(() => 
  import('@/components/OfflineIndicator').then(mod => ({ default: mod.OfflineIndicator })), {
  ssr: false,
  loading: () => null
<<<<<<< HEAD
}),
=======
});
>>>>>>> origin/auto/autonomy-17186719616

const RouteChangeHandler = dynamic(() => 
  import('@/components/RouteChangeHandler').then(mod => ({ default: mod.RouteChangeHandler })), {
  ssr: false,
  loading: () => null
<<<<<<< HEAD
}),
=======
});
>>>>>>> origin/auto/autonomy-17186719616

const RouteSEO = dynamic(() => 
  import('@/components/RouteSEO'), {
  ssr: true,
  loading: () => null
<<<<<<< HEAD
}),

// ============================================================// FONT CONFIGURATION - Optimized loading
// =====================================================const inter = Inter({
  subsets: ['latin'],
  weight: ['400600', '700'],
  display: 'swap',
  fallback: ['system-uiarial'],
  adjustFontFallback: true,
  variable: '--font-inter',
  preload: true}),

const poppins = Poppins({
  weight: ['400600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-uiarial'],
  adjustFontFallback: true,
  variable: '--font-poppins',
  preload: true}),

// ============================================================// LIGHTWEIGHT LANGUAGE WRAPPER
// =====================================================const LanguageProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children}) => {
  const { user, isAuthenticated } = useAuth(),
  const [isClient, setIsClient] = React.useState(false),

  React.useEffect(() => {
    setIsClient(true),
  }, []),
=======
});

// ===================================================================
// FONT CONFIGURATION - Optimized loading
// ===================================================================

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-inter',
  preload: true,
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-poppins',
  preload: true,
});

// ===================================================================
// LIGHTWEIGHT LANGUAGE WRAPPER
// ===================================================================

const LanguageProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, isAuthenticated } = useAuth();
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  const safeAuthState = React.useMemo(
    () => ({
      isAuthenticated: isClient ? !!isAuthenticated : false,
<<<<<<< HEAD
      user: isClient ? user : null}),
    [isClient, isAuthenticated, user]),

  return (
    <LanguageProvider authState={safeAuthState}>{children}</LanguageProvider>
  ),
},

// ============================================================// MAIN APP COMPONENT - FIXED: Optimized with fallback safety
// =====================================================function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter(),
=======
      user: isClient ? user : null,
    }),
    [isClient, isAuthenticated, user],
  );

  return (
    <LanguageProvider authState={safeAuthState}>{children}</LanguageProvider>
  );
};

// ===================================================================
// MAIN APP COMPONENT - FIXED: Optimized with fallback safety
// ===================================================================

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
>>>>>>> origin/auto/autonomy-17186719616
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
<<<<<<< HEAD
        retry: false}}})),
  const [isInitialized, setIsInitialized] = React.useState(false),
  const [initError, setInitError] = React.useState<string | null>(null),
=======
        retry: false,
      },
    },
  }));
  const [isInitialized, setIsInitialized] = React.useState(false);
  const [initError, setInitError] = React.useState<string | null>(null);
>>>>>>> origin/auto/autonomy-17186719616

  // CRITICAL FIX: Force initialization after timeout to prevent infinite loading
  React.useEffect(() => {
    const forceInitTimeout = setTimeout(() => {
      if (!isInitialized) {
<<<<<<< HEAD
        console.warn('[App] Force initializing after timeout - preventing infinite loading'),
        setIsInitialized(true)
      }
    }, 3000), // Force init after 3 seconds max

    return () => clearTimeout(forceInitTimeout),
  }, [isInitialized]),

  // Simplified initialization with better error handling
  React.useEffect(() => {
    let isMounted = true,
=======
        console.warn('[App] Force initializing after timeout - preventing infinite loading');
        setIsInitialized(true);
      }
    }, 3000); // Force init after 3 seconds max

    return () => clearTimeout(forceInitTimeout);
  }, [isInitialized]);

  // Simplified initialization with better error handling
  React.useEffect(() => {
    let isMounted = true;
>>>>>>> origin/auto/autonomy-17186719616

    const initializeApp = async () => {
      try {
        if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
          // // // console.log('[App] Starting optimized initialization...'),
=======
          console.log('[App] Starting optimized initialization...');
>>>>>>> origin/auto/autonomy-17186719616
        }

        // Critical path only
        try {
<<<<<<< HEAD
          initializeGlobalErrorHandlers(),
        } catch (error) {
          console.warn('[App] Global error handlers failed:', error),
        }

        try {
          validateProductionEnvironment(),
        } catch (error) {
          console.warn('[App] Environment validation warning:', error),
=======
          initializeGlobalErrorHandlers();
        } catch (error) {
          console.warn('[App] Global error handlers failed:', error);
        }

        try {
          validateProductionEnvironment();
        } catch (error) {
          console.warn('[App] Environment validation warning:', error);
>>>>>>> origin/auto/autonomy-17186719616
        }

        // Mark as initialized immediately for faster render
        if (isMounted) {
          setTimeout(() => {
<<<<<<< HEAD
            setIsInitialized(true),
          }, 100), // Small delay to ensure DOM is ready
=======
            setIsInitialized(true);
          }, 100); // Small delay to ensure DOM is ready
>>>>>>> origin/auto/autonomy-17186719616
        }

        // Defer non-critical initializations
        setTimeout(() => {
<<<<<<< HEAD
          if (!isMounted) return,

          try {
            initializeServices().catch((err) =>
              console.warn('Service initialization failed:', err)),
          } catch (error) {
            console.warn('Services init error:', error),
=======
          if (!isMounted) return;

          try {
            initializeServices().catch((err) =>
              console.warn('Service initialization failed:', err),
            );
          } catch (error) {
            console.warn('Services init error:', error);
>>>>>>> origin/auto/autonomy-17186719616
          }

          // Lazy load performance monitoring
          if (typeof window !== 'undefined' && process.env.PERFORMANCE_MONITORING === 'true') {
            import('@/utils/performance').then(perf => {
<<<<<<< HEAD
              perf.initializePerformanceOptimizations(),
              perf.initializePerformance(),
            }).catch(err => console.warn('Performance monitoring failed:', err)),
=======
              perf.initializePerformanceOptimizations();
              perf.initializePerformance();
            }).catch(err => console.warn('Performance monitoring failed:', err));
>>>>>>> origin/auto/autonomy-17186719616
          }

          // Lazy load development tools
          if (process.env.NODE_ENV === 'development') {
            import('@/utils/consoleLogCapture').then(console => {
<<<<<<< HEAD
              console.initConsoleLogCapture(),
            }).catch(err => console.warn('Console capture failed:', err)),
          }
        }, 200),

      } catch (error) {
        console.error('[App] Critical initialization error:', error),
        setInitError('Initialization failed'),
=======
              console.initConsoleLogCapture();
            }).catch(err => console.warn('Console capture failed:', err));
          }
        }, 200);

      } catch (error) {
        console.error('[App] Critical initialization error:', error);
        setInitError('Initialization failed');
>>>>>>> origin/auto/autonomy-17186719616

        // Always initialize even on error to prevent infinite loading
        if (isMounted) {
          setTimeout(() => {
<<<<<<< HEAD
            setIsInitialized(true),
          }, 500),
=======
            setIsInitialized(true);
          }, 500);
>>>>>>> origin/auto/autonomy-17186719616
        }

        // Deferred error reporting
        setTimeout(() => {
          try {
            if (process.env.NEXT_PUBLIC_SENTRY_DSN && !process.env.NEXT_PUBLIC_SENTRY_DSN.includes('dummy')) {
<<<<<<< HEAD
              Sentry.captureException(error),
            }
          } catch (sentryError) {
            console.warn('[App] Could not send error to Sentry:', sentryError),
          }
        }, 0),
      }
    },

    initializeApp(),

    return () => {
      isMounted = false,
    },
  }, []),
=======
              Sentry.captureException(error);
            }
          } catch (sentryError) {
            console.warn('[App] Could not send error to Sentry:', sentryError);
          }
        }, 0);
      }
    };

    initializeApp();

    return () => {
      isMounted = false;
    };
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  // Lazy Sentry context updates with error handling
  React.useEffect(() => {
    try {
      if (process.env.NEXT_PUBLIC_SENTRY_DSN && !process.env.NEXT_PUBLIC_SENTRY_DSN.includes('dummy')) {
<<<<<<< HEAD
        Sentry.setTag('route', router.pathname),
        Sentry.setContext('query', router.query),
      }
    } catch (error) {
      console.warn('Sentry context update failed:', error),
    }
  }, [router.pathname, router.query]),
=======
        Sentry.setTag('route', router.pathname);
        Sentry.setContext('query', router.query);
      }
    } catch (error) {
      console.warn('Sentry context update failed:', error);
    }
  }, [router.pathname, router.query]);
>>>>>>> origin/auto/autonomy-17186719616

  // Lazy service worker registration with error handling
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setTimeout(() => {
        import('@/serviceWorkerRegistration').then(sw => {
<<<<<<< HEAD
          sw.registerServiceWorker(),
        }).catch(err => console.warn('Service worker registration failed:', err)),
      }, 2000),
    }
  }, []),
=======
          sw.registerServiceWorker();
        }).catch(err => console.warn('Service worker registration failed:', err));
      }, 2000);
    }
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  // FIXED: Enhanced loading screen with error display
  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-cyan-400 border-t-transparent mx-auto mb-4"></div>
          <p className="text-white text-lg font-medium">Initializing Zion App...</p>
          <p className="text-blue-200 text-sm mt-2">
<<<<<<< HEAD
            {initError ? `Error: ${initError}` : 'Optimizing window.window.window.performance...'}
=======
            {initError ? `Error: ${initError}` : 'Optimizing performance...'}
>>>>>>> origin/auto/autonomy-17186719616
          </p>
          <p className="text-blue-300 text-xs mt-2">This should complete in a few seconds</p>
        </div>
      </div>
<<<<<<< HEAD
    ),
=======
    );
>>>>>>> origin/auto/autonomy-17186719616
  }

  // FIXED: Simplified provider chain to reduce loading complexity
  return (
    <>
      <Head>
        <style jsx global>{`
          :root {
<<<<<<< HEAD
            --font-inter: ${inter.style.fontFamily},
            --font-poppins: ${poppins.style.fontFamily},
          }

          @font-face {
            font-family: 'Inter Fallback',
            src: local('Arial'), local('system-ui'),
            size-adjust: 107%,
            ascent-override: 90%,
            descent-override: 25%,
            line-gap-override: 0%
          }

          @font-face {
            font-family: 'Poppins Fallback',
            src: local('Arial'), local('system-ui'),
            size-adjust: 102%,
            ascent-override: 92%,
            descent-override: 24%,
            line-gap-override: 0%
          }

          .font-inter { font-family: var(--font-inter), 'Inter Fallback', system-ui, sans-serif, }
          .font-poppins { font-family: var(--font-poppins), 'Poppins Fallback', system-ui, sans-serif, }
=======
            --font-inter: ${inter.style.fontFamily};
            --font-poppins: ${poppins.style.fontFamily};
          }

          @font-face {
            font-family: 'Inter Fallback';
            src: local('Arial'), local('system-ui');
            size-adjust: 107%;
            ascent-override: 90%;
            descent-override: 25%;
            line-gap-override: 0%;
          }

          @font-face {
            font-family: 'Poppins Fallback';
            src: local('Arial'), local('system-ui');
            size-adjust: 102%;
            ascent-override: 92%;
            descent-override: 24%;
            line-gap-override: 0%;
          }

          .font-inter { font-family: var(--font-inter), 'Inter Fallback', system-ui, sans-serif; }
          .font-poppins { font-family: var(--font-poppins), 'Poppins Fallback', system-ui, sans-serif; }
>>>>>>> origin/auto/autonomy-17186719616
        `}</style>
      </Head>
      <div className={`${inter.variable} ${poppins.variable}`}>
        <ProductionErrorBoundary>
          <RootErrorBoundary>
            <HydrationErrorBoundary>
              <React.Suspense
                fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-pulse text-lg">Loading app...</div>
                  </div>
                }
              >
                <GlobalErrorBoundary>
                  <QueryClientProvider client={queryClient}>
                    <ApiErrorBoundary>
                      <ReduxProvider store={store}>
                        <I18nextProvider i18n={i18n}>
                          <ErrorProvider>
                            <AuthProvider>
                              <ErrorBoundary fallback={
                                <div className="flex items-center justify-center min-h-screen">
                                  <div className="text-center">
                                    <h2 className="text-xl mb-4">Loading providers...</h2>
                                    <p>If this takes too long, there may be a provider issue.</p>
                                  </div>
                                </div>
                              }>
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
                                                  resetScrollOnChange={true}
                                                  forceRerender={false}
                                                />
                                                <ErrorBoundary>
                                                  <Component
                                                    key={router.asPath}
                                                    {...pageProps}
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
<<<<<<< HEAD
  ),
}

if (process.env.NODE_ENV === 'development') {
  // // // console.log('[App] MyApp component initialized with loading fix'),
}

export default MyApp,
=======
  );
}

if (process.env.NODE_ENV === 'development') {
  console.log('[App] MyApp component initialized with loading fix');
}

export default MyApp;
>>>>>>> origin/c54iqp-codex/fix-app-loading-blank-screen
>>>>>>> origin/auto/autonomy-17186719616
