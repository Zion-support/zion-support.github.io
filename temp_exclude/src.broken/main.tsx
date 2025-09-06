 import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App ;
import './index ;
import './utils/globalFetchInterceptor';
  defaultOptions: {;
  queries: {;
  onError: (error) => showApiError (error) ;
};
//Render the app with proper provider structure queryClient ;
}> <WhitelabelProvider> <Router> <AuthProvider> <NotificationProvider> <AnalyticsProvider> <CurrencyProvider> <LanguageProviderauthState= {
  {
  isAuthenticated: false, user: null 
}
}> <ViewModeProvider> <CartProvider> <AppLayout> <App /> </AppLayout> </CartProvider> </ViewModeProvider> <LanguageDetectionPopup /> </LanguageProvider> </CurrencyProvider> </AnalyticsProvider> </NotificationProvider> </AuthProvider> </Router> </WhitelabelProvider> </QueryClientProvider> </HelmetProvider> if (rootElement) {;
  rootElement && rootElement.innerHTML = `<divstyle="padding: 20px, text-align: center,
font-family: sans-serif,
  (error as Error) .message 
}</p> <pre>$ {;
  (error as Error) .stack ;
}</pre> <p>Please check the console for more details.</p> </div> ` ;
}
}registerServiceWorker ();
