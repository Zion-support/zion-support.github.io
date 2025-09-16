
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
const WhitelabelProvider = dynamic(() => 
  import('@/context/WhitelabelContext').then(mod => ({ default: mod.WhitelabelProvider })), {
  ssr: true,
  loading: () => null

const WalletProvider = dynamic(() => 
  import('@/context/WalletContext').then(mod => ({ default: mod.WalletProvider })), {
  ssr: false, // Wallet is client-side only
  loading: () => null

const AnalyticsProvider = dynamic(() => 
  import('@/context/AnalyticsContext').then(mod => ({ default: mod.AnalyticsProvider })), {
  ssr: false, // Analytics is client-side only
  loading: () => null

const CartProvider = dynamic(() => 
  import('@/context/CartContext').then(mod => ({ default: mod.CartProvider })), {
  ssr: true,
  loading: () => null

const FeedbackProvider = dynamic(() => 
  import('@/context/FeedbackContext').then(mod => ({ default: mod.FeedbackProvider })), {
  ssr: false, // Feedback is client-side only
  loading: () => null

const ThemeProvider = dynamic(() => 
  import('@/components/ThemeProvider').then(mod => ({ default: mod.ThemeProvider })), {
  ssr: true,
  loading: () => null

const AppLayout = dynamic(() => 
  import('@/layout/AppLayout').then(mod => ({ default: mod.AppLayout })), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse text-lg">Loading layout...</div>
    </div>
  )

// Load utility components dynamically
const ToastContainer = dynamic(() => 
  import('@/components/ToastContainer').then(mod => ({ default: mod.ToastContainer })), {
  ssr: false,
  loading: () => null

const OfflineIndicator = dynamic(() => 
  import('@/components/OfflineIndicator').then(mod => ({ default: mod.OfflineIndicator })), {
  ssr: false,
  loading: () => null

const RouteChangeHandler = dynamic(() => 
  import('@/components/RouteChangeHandler').then(mod => ({ default: mod.RouteChangeHandler })), {
  ssr: false,
  loading: () => null

const RouteSEO = dynamic(() => 
  import('@/components/RouteSEO'), {
  ssr: true,
  loading: () => null

  const safeAuthState = React.useMemo(
    () => ({
      isAuthenticated: isClient ? !!isAuthenticated : false,
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,

  // CRITICAL FIX: Force initialization after timeout to prevent infinite loading
  React.useEffect(() => {
    const forceInitTimeout = setTimeout(() => {
      if (!isInitialized) {

    const initializeApp = async () => {
      try {
        if (process.env.NODE_ENV === 'development') {
        }

        // Critical path only
        try {
        }

        // Mark as initialized immediately for faster render
        if (isMounted) {
          setTimeout(() => {
        }

        // Defer non-critical initializations
        setTimeout(() => {
          }

          // Lazy load performance monitoring
          if (typeof window !== 'undefined' && process.env.PERFORMANCE_MONITORING === 'true') {
            import('@/utils/performance').then(perf => {
          }

          // Lazy load development tools
          if (process.env.NODE_ENV === 'development') {
            import('@/utils/consoleLogCapture').then(console => {

        // Always initialize even on error to prevent infinite loading
        if (isMounted) {
          setTimeout(() => {
        }

        // Deferred error reporting
        setTimeout(() => {
          try {
            if (process.env.NEXT_PUBLIC_SENTRY_DSN && !process.env.NEXT_PUBLIC_SENTRY_DSN.includes('dummy')) {

  // Lazy Sentry context updates with error handling
  React.useEffect(() => {
    try {
      if (process.env.NEXT_PUBLIC_SENTRY_DSN && !process.env.NEXT_PUBLIC_SENTRY_DSN.includes('dummy')) {

  // Lazy service worker registration with error handling
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setTimeout(() => {
        import('@/serviceWorkerRegistration').then(sw => {

  // FIXED: Enhanced loading screen with error display
  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-cyan-400 border-t-transparent mx-auto mb-4"></div>
          <p className="text-white text-lg font-medium">Initializing Zion App...</p>
          <p className="text-blue-200 text-sm mt-2">
          </p>
          <p className="text-blue-300 text-xs mt-2">This should complete in a few seconds</p>
        </div>
      </div>
  }

  // FIXED: Simplified provider chain to reduce loading complexity
  return (
    <>
      <Head>
        <style jsx global>{`
          :root {
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
