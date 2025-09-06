 import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './utils/globalFetchInterceptor';
  defaultOptions: {
  queries: {
  onError: (error) => showApiError (error) 
};
//Render the app with proper provider structure queryClient 
}> <WhitelabelProvider> <Router> <AuthProvider> <NotificationProvider> <AnalyticsProvider> <CurrencyProvider> <LanguageProvider authState= {
  {
  isAuthenticated: false, user: null 
}
}> <ViewModeProvider> <CartProvider> <AppLayout> <App /> </AppLayout> </CartProvider> </ViewModeProvider> <LanguageDetectionPopup /> </LanguageProvider> </CurrencyProvider> </AnalyticsProvider> </NotificationProvider> </AuthProvider> </Router> </WhitelabelProvider> </QueryClientProvider> </HelmetProvider> if (rootElement) {
  rootElement.innerHTML = `<div style="padding: 20px, text-align: center,
font-family: sans-serif,
" > >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 <h1>Application Error</h1> <p>A critical error occurred while loading the application.</p> <p>Error: $ {
  (error as Error) .message 
}</p> <pre>$ {
  (error as Error) .stack 
}</pre> <p>Please check the console for more details.</p> </div> ` 
}
}registerServiceWorker ();
